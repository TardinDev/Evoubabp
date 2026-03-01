// API endpoint pour sauvegarder les emails de notification

const ALLOWED_ORIGINS = ['https://evoubap.com', 'https://www.evoubap.com']
const MAX_EMAIL_LENGTH = 254
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

function getCorsOrigin(req) {
  const origin = req.headers?.origin
  if (ALLOWED_ORIGINS.includes(origin)) {
    return origin
  }
  return ALLOWED_ORIGINS[0]
}

export default function handler(req, res) {
  // Configuration CORS
  const corsOrigin = getCorsOrigin(req)
  res.setHeader('Access-Control-Allow-Origin', corsOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { email, plan, timestamp } = req.body;

    if (!email || typeof email !== 'string' || email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: 'Email invalide' });
    }

    // Log pour monitoring
    console.log('Nouvel email à notifier:', { email, plan, timestamp });

    res.status(200).json({
      success: true,
      message: 'Email enregistré avec succès'
    });

  } catch (error) {
    console.error('Erreur serveur:', error);
    res.status(500).json({ error: 'Erreur lors de la sauvegarde' });
  }
}
