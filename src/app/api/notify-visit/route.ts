import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const ALLOWED_ORIGINS = ['https://evoubap.com', 'https://www.evoubap.com']

function sanitize(value: unknown): string {
  if (value === undefined || value === null) {
    return 'N/A'
  }

  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function getCorsOrigin(request: NextRequest): string {
  const origin = request.headers.get('origin')
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    return origin
  }
  return ALLOWED_ORIGINS[0]
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

function corsHeaders(origin: string): HeadersInit {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

export async function OPTIONS(request: NextRequest) {
  const corsOrigin = getCorsOrigin(request)
  return new NextResponse(null, { status: 200, headers: corsHeaders(corsOrigin) })
}

export async function POST(request: NextRequest) {
  const corsOrigin = getCorsOrigin(request)
  const headers = corsHeaders(corsOrigin)

  try {
    const body = await request.json()
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
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ipAddress = forwardedFor?.split(',')[0]?.trim() ?? 'Inconnu'

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

    return NextResponse.json({ success: true }, { headers })
  } catch (error) {
    console.error('Failed to send visit notification', error)
    return NextResponse.json({ error: 'Email notification failed' }, { status: 500, headers })
  }
}
