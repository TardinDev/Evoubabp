import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const ALLOWED_ORIGINS = ['https://evoubap.com', 'https://www.evoubap.com']
const MAX_EMAIL_LENGTH = 254
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

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

    const { name, email, message, contactReason, timestamp } = body

    // Validation des champs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Champs manquants (name, email, message)' },
        { status: 400, headers }
      )
    }

    // Validation email renforcee
    if (typeof email !== 'string' || email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400, headers })
    }

    const transporter = nodemailer.createTransport(buildTransportConfig())

    // Mapper le contactReason en texte lisible
    const reasonMap: Record<string, string> = {
      project: 'Proposer un projet',
      hire: "Proposition d'embauche",
      interview: "Demande d'entretien",
    }

    const reasonText = reasonMap[contactReason] || 'Contact general'
    const subject = `ChatBot - ${reasonText} de ${sanitize(name)}`
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
          <h1>Nouveau message via ChatBot</h1>
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
      replyTo: email,
      subject,
      text: textContent,
      html: htmlContent,
    })

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès' },
      { headers }
    )
  } catch (error) {
    console.error('Failed to send chat message', error)
    return NextResponse.json(
      { error: "Échec de l'envoi du message" },
      { status: 500, headers }
    )
  }
}
