import nodemailer from 'nodemailer'

function sanitize(value) {
  if (value === undefined || value === null) {
    return 'N/A'
  }

  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function buildTransportConfig() {
  const host = process.env.SMTP_HOST
  const parsedPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const port = Number.isFinite(parsedPort) ? parsedPort : undefined
  const secureFlag = process.env.SMTP_SECURE

  if (!host) {
    throw new Error('SMTP_HOST environment variable is not defined')
  }

  const secure =
    secureFlag ? secureFlag !== 'false' : typeof port === 'number' ? port === 465 : true

  return {
    host,
    port: port ?? 465,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  }
}

async function readBody(req) {
  if (req.body) {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  }

  return await new Promise((resolve, reject) => {
    let data = ''

    req.on('data', (chunk) => {
      data += chunk
    })

    req.on('end', () => {
      if (!data) {
        resolve({})
        return
      }

      try {
        resolve(JSON.parse(data))
      } catch (error) {
        reject(error)
      }
    })

    req.on('error', (error) => {
      reject(error)
    })
  })
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  try {
    const body = await readBody(req)
    const notifyEmail = process.env.NOTIFY_EMAIL
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!notifyEmail) {
      throw new Error('NOTIFY_EMAIL environment variable is not defined')
    }

    if (!smtpUser || !smtpPass) {
      throw new Error('SMTP_USER or SMTP_PASS environment variable is missing')
    }

    const { page = '/', timestamp, referer, userAgent } = body
    const forwardedFor = req.headers['x-forwarded-for']
    const ipAddress = Array.isArray(forwardedFor)
      ? forwardedFor[0]
      : forwardedFor?.split(',')[0]?.trim() ?? req.socket?.remoteAddress ?? 'Inconnu'

    const transporter = nodemailer.createTransport(buildTransportConfig())

    const subject = 'Nouvelle visite sur evoubap.com'
    const visitedAt = timestamp ?? new Date().toISOString()
    const htmlContent = `
      <p>Bonjour,</p>
      <p>Une nouvelle visite vient d'être détectée sur <strong>evoubap.com</strong>.</p>
      <ul>
        <li><strong>Page</strong> : ${sanitize(page)}</li>
        <li><strong>Date</strong> : ${sanitize(visitedAt)}</li>
        <li><strong>Adresse IP</strong> : ${sanitize(ipAddress)}</li>
        <li><strong>Référent</strong> : ${sanitize(referer)}</li>
        <li><strong>User-Agent</strong> : ${sanitize(userAgent)}</li>
      </ul>
      <p>— Équipe evoubap.com</p>
    `

    const textContent = `Nouvelle visite sur evoubap.com
Page : ${page}
Date : ${visitedAt}
Adresse IP : ${ipAddress}
Référent : ${referer ?? 'N/A'}
User-Agent : ${userAgent ?? 'N/A'}
`

    await transporter.sendMail({
      to: notifyEmail,
      from: process.env.SMTP_FROM || smtpUser,
      subject,
      text: textContent,
      html: htmlContent,
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Failed to send visit notification', error)
    res.status(500).json({ error: 'Email notification failed' })
  }
}
