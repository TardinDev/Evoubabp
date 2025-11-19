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
    const notifyEmail = 'tardindavy@gmail.com' // Email de destination
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!smtpUser || !smtpPass) {
      throw new Error('SMTP_USER or SMTP_PASS environment variable is missing')
    }

    const { name, email, message, contactReason, timestamp } = body

    // Validation des champs
    if (!name || !email || !message) {
      res.status(400).json({ error: 'Champs manquants (name, email, message)' })
      return
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: 'Email invalide' })
      return
    }

    const transporter = nodemailer.createTransport(buildTransportConfig())

    // Mapper le contactReason en texte lisible
    const reasonMap = {
      project: 'Proposer un projet',
      hire: 'Proposition d\'embauche',
      interview: 'Demande d\'entretien'
    }

    const reasonText = reasonMap[contactReason] || 'Contact général'
    const subject = `🤖 ChatBot - ${reasonText} de ${name}`
    const visitedAt = timestamp ?? new Date().toISOString()

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 20px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            background: #f8f9fa;
            padding: 30px 20px;
            border-radius: 0 0 10px 10px;
          }
          .info-box {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .label {
            font-weight: 600;
            color: #667eea;
            margin-bottom: 5px;
          }
          .value {
            color: #2d3748;
            margin-bottom: 15px;
          }
          .message-box {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
            margin-top: 20px;
          }
          .badge {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            color: #718096;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🤖 Nouveau message via ChatBot</h1>
        </div>
        <div class="content">
          <div class="info-box">
            <div class="label">Type de demande :</div>
            <div class="value">
              <span class="badge">${sanitize(reasonText)}</span>
            </div>

            <div class="label">Nom :</div>
            <div class="value">${sanitize(name)}</div>

            <div class="label">Email :</div>
            <div class="value">
              <a href="mailto:${sanitize(email)}" style="color: #667eea; text-decoration: none;">
                ${sanitize(email)}
              </a>
            </div>

            <div class="label">Date :</div>
            <div class="value">${sanitize(new Date(visitedAt).toLocaleString('fr-FR'))}</div>
          </div>

          <div class="message-box">
            <div class="label">Message :</div>
            <div class="value">${sanitize(message)}</div>
          </div>

          <div class="footer">
            <p>Ce message a été envoyé depuis le ChatBot de <strong>evoubap.com</strong></p>
            <p>Répondez directement à l'email : ${sanitize(email)}</p>
          </div>
        </div>
      </body>
      </html>
    `

    const textContent = `Nouveau message ChatBot - ${reasonText}

Nom : ${name}
Email : ${email}
Date : ${new Date(visitedAt).toLocaleString('fr-FR')}

Message :
${message}

---
Répondez directement à : ${email}
`

    await transporter.sendMail({
      to: notifyEmail,
      from: process.env.SMTP_FROM || smtpUser,
      replyTo: email, // Pour pouvoir répondre directement
      subject,
      text: textContent,
      html: htmlContent,
    })

    res.status(200).json({ success: true, message: 'Message envoyé avec succès' })
  } catch (error) {
    console.error('Failed to send chat message', error)
    res.status(500).json({ error: 'Échec de l\'envoi du message', details: error.message })
  }
}
