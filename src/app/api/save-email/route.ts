import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_ORIGINS = ['https://evoubap.com', 'https://www.evoubap.com']
const MAX_EMAIL_LENGTH = 254
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

function getCorsOrigin(request: NextRequest): string {
  const origin = request.headers.get('origin')
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    return origin
  }
  return ALLOWED_ORIGINS[0]
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
    const { email, plan, timestamp } = await request.json()

    if (
      !email ||
      typeof email !== 'string' ||
      email.length > MAX_EMAIL_LENGTH ||
      !EMAIL_REGEX.test(email)
    ) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400, headers })
    }

    // Log pour monitoring
    console.log('Nouvel email à notifier:', { email, plan, timestamp })

    return NextResponse.json(
      { success: true, message: 'Email enregistré avec succès' },
      { headers }
    )
  } catch (error) {
    console.error('Erreur serveur:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la sauvegarde' },
      { status: 500, headers }
    )
  }
}
