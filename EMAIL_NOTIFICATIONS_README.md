# 📧 Système de Notification Email - Formation Mastering

Ce système permet de collecter les emails des utilisateurs intéressés par la formation Mastering et de les stocker localement.

## 🚀 Démarrage Rapide

### 1. Lancer le serveur d'emails
```bash
node save-email-server.cjs
```

Le serveur démarre sur `http://localhost:3001` et affiche :
```
🚀 Serveur emails démarré sur http://localhost:3001
📧 Emails sauvegardés dans: /chemin/vers/email-notifications.json
📋 Endpoints disponibles:
   POST /api/save-email - Sauvegarder un email
   GET  /api/emails     - Voir tous les emails
```

### 2. Lancer l'application Vite
Dans un autre terminal :
```bash
npm run dev
```

### 3. Tester la fonctionnalité
1. Aller sur la page de paiement : `http://localhost:5173/payment`
2. Cliquer sur "Payer maintenant" (le bouton devient gris au survol)
3. Un modal s'ouvre avec le message de notification
4. Entrer un email et cliquer sur "M'avertir du lancement"
5. L'email est sauvegardé dans `email-notifications.json`

## 📁 Fichiers Générés

### `email-notifications.json`
Ce fichier contient tous les emails collectés :
```json
[
  {
    "email": "user@example.com",
    "plan": "mastering",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "status": "pending",
    "id": "1705320600000"
  }
]
```

**⚠️ Important** : Ce fichier est automatiquement ajouté au `.gitignore` pour ne pas être commité sur GitHub.

## 🔧 API Endpoints

### POST `/api/save-email`
Sauvegarde un nouvel email de notification.

**Body:**
```json
{
  "email": "user@example.com",
  "plan": "mastering",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

**Réponse:**
```json
{
  "success": true,
  "totalEmails": 1
}
```

### GET `/api/emails`
Récupère tous les emails enregistrés.

**Réponse:**
```json
{
  "emails": [...],
  "total": 5
}
```

## 🎨 Interface Utilisateur

### Bouton de Paiement
- **État normal** : Gradient bleu/violet
- **Au survol** : Devient gris comme demandé
- **Au clic** : Ouvre le modal de notification

### Modal de Notification
- **Titre** : "🚀 Formation bientôt disponible !"
- **Message** : Explication claire avec mise en valeur du plan "Mastering"
- **Formulaire** : Champ email + bouton d'inscription
- **Validation** : Email requis et format vérifié
- **Succès** : Message de confirmation pendant 3 secondes

## 🛠️ Développement

### Structure des Fichiers
```
├── src/Pages/PaymentPage.jsx           # Page de paiement avec modal
├── save-email-server.cjs               # Serveur Node.js (non commité)
├── email-notifications.json           # Base de données emails (non commité)
├── .gitignore                         # Exclut les fichiers sensibles
└── EMAIL_NOTIFICATIONS_README.md      # Cette documentation
```

### États React Gérés
- `showNotificationModal` : Affichage du modal
- `email` : Valeur du champ email
- `isSubmitting` : État de soumission
- `submitSuccess` : Confirmation de succès

## 🔒 Sécurité

1. **Validation Email** : Format vérifié côté client et serveur
2. **Déduplication** : Un email ne peut être enregistré qu'une seule fois
3. **CORS** : Configuration pour autoriser les requêtes cross-origin
4. **Données locales** : Pas de stockage externe, tout reste sur votre machine

## 📊 Monitoring

Pour voir les emails collectés en temps réel :
```bash
# Terminal 1 - Démarrer le serveur
node save-email-server.cjs

# Terminal 2 - Voir les emails
curl http://localhost:3001/api/emails
```

## 🚀 Production

Pour la production, remplacer le serveur local par :
- Base de données (MongoDB, PostgreSQL, etc.)
- Service email (SendGrid, Mailgun, etc.)
- API sécurisée avec authentification

---

**✅ Fonctionnalité implémentée avec succès !**
- Bouton gris au survol ✓
- Modal de notification ✓
- Collecte d'emails ✓
- Stockage local ✓
- Exclusion du Git ✓

## 🎯 **Méthode Recommandée : Interface Web**

Après avoir relancé le serveur, allez sur :
```
http://localhost:3001/admin
```

Vous verrez une interface web élégante qui affiche :
- 📊 **Nombre total d'inscriptions**
- 📧 **Liste de tous les emails** avec détails
- 📅 **Date et heure** de chaque inscription
- 🏷️ **Plan choisi** (Mastering)
- 🔄 **Bouton d'actualisation** en temps réel

## 📋 **Résumé de Toutes les Méthodes**

| Méthode | URL/Commande | Avantage |
|---------|--------------|----------|
| **Interface Web** | `http://localhost:3001/admin` | 🎨 Visuel et élégant |
| **API JSON** | `http://localhost:3001/api/emails` | 🔧 Pour développeurs |
| **Fichier direct** | `cat email-notifications.json` | 📁 Accès direct |
| **Terminal** | Voir lors du démarrage serveur | ⚡ Temps réel |
| **Monitoring** | `tail -f email-notifications.json` | 👀 Surveillance continue |

## 🚀 **Instructions Complètes**

1. **Démarrer le serveur** :
```bash
node save-email-server.cjs
```

2. **Ouvrir l'interface d'administration** :
```
http://localhost:3001/admin
```

3. **Laisser ouvert** et actualiser pour voir les nouveaux emails en temps réel !

## 💡 **Conseil Pro**

Gardez l'onglet `/admin` ouvert pendant que les utilisateurs testent la page de paiement. Vous verrez immédiatement chaque nouvel email qui arrive ! 🎉

Voulez-vous que je vous montre comment ajouter d'autres fonctionnalités, comme exporter les emails en CSV ou envoyer des notifications par email quand quelqu'un s'inscrit ? 