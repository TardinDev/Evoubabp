// API endpoint pour sauvegarder les emails de notification
// Ne pas commiter email-notifications.json - voir .gitignore

export default function handler(req, res) {
  // Configuration CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.url === '/api/save-email' && req.method === 'POST') {
    try {
      const { email, plan, timestamp } = req.body;
      
      if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Email invalide' });
      }

      // Simule la sauvegarde - en production, utiliser une vraie base de données
      console.log('Nouvel email à notifier:', { email, plan, timestamp });
      
      // En développement local, vous pouvez utiliser fs pour écrire dans un fichier
      // if (typeof window === 'undefined') {
      //   const fs = require('fs');
      //   const path = require('path');
      //   // Logique de sauvegarde ici
      // }
      
      res.status(200).json({ 
        success: true, 
        message: 'Email enregistré avec succès'
      });
      
    } catch (error) {
      console.error('Erreur serveur:', error);
      res.status(500).json({ error: 'Erreur lors de la sauvegarde' });
    }
  } else {
    res.status(404).json({ error: 'Route non trouvée' });
  }
}
