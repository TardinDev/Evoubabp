import { FaMobile, FaRocket, FaGitAlt, FaDatabase } from "react-icons/fa";

export const concepts = [
  {
    icon: FaRocket,
    title: "Démarrage avec Expo",
    description: "Installation et configuration d'un projet React Native avec Expo CLI"
  },
  {
    icon: FaMobile,
    title: "Frontend",
    description: "Navigation avec Expo Router, styling TailwindCSS et développement d'écrans avancés"
  },
  {
    icon: FaGitAlt,
    title: "Git & GitHub",
    description: "Maîtrise du versioning, collaboration et déploiement avec Git et GitHub"
  },
  {
    icon: FaDatabase,
    title: "Backend",
    description: "Intégration d'APIs REST, Firebase, authentification et gestion des données"
  }
];

export const features = [
  "✅ 4 projets complets inclus",
  "✅ Code source disponible",
  "✅ Vidéos tutoriels HD",
  "✅ Support communauté",
  "✅ Certificat de réussite",
  "✅ Mise à jour gratuite"
];

export const techStacks = {
  frontend: {
    title: "🎨 Frontend & UI",
    items: [
      "React Native",
      "Expo SDK 50+",
      "TypeScript",
      "TailwindCSS",
      "Expo Router v3"
    ]
  },
  backend: {
    title: "⚙️ Backend & APIs",
    items: [
      "Firebase v9",
      "Node.js 20+",
      "REST APIs",
      "JWT Auth",
      "Supabase"
    ]
  },
  stateStorage: {
    title: "📊 State & Storage",
    items: [
      "TanStack Query",
      "Zustand",
      "Zod",
      "AsyncStorage",
      "Expo SecureStore",
      "SQLite"
    ]
  },
  tools: {
    title: "🛠️ Tools & Deployment",
    items: [
      "Git/GitHub",
      "Sentry",
      "EAS Build",
      "Expo Application Services",
      "App Store Connect",
      "Google Play Console"
    ]
  }
};

export const modules = [
  {
    number: "01",
    title: "Mise en place du projet React Native",
    duration: "1h 30min",
    lessons: [
      "Installation d'Expo CLI",
      "Création du projet RunSport",
      "Configuration de l'environnement"
    ]
  },
  {
    number: "02",
    title: "Navigation avec Expo Router",
    duration: "2h 00min",
    lessons: [
      "Configuration d'Expo Router",
      "Navigation entre écrans",
      "Paramètres et routes dynamiques"
    ]
  },
  {
    number: "03",
    title: "Styling avec TailwindCSS",
    duration: "2h 30min",
    lessons: [
      "Installation de TailwindCSS",
      "Créer des composants stylés",
      "Responsive design mobile"
    ]
  },
  {
    number: "04",
    title: "Développement des Écrans",
    duration: "2h 00min",
    lessons: [
      "Écran d'accueil et onboarding",
      "Interface de sport et tracking",
      "Profil utilisateur et statistiques"
    ]
  },
  {
    number: "05",
    title: "Backend & Versioning",
    duration: "2h 30min",
    lessons: [
      "Git et GitHub pour développeurs mobiles",
      "Intégration d'APIs REST",
      "Firebase et stockage cloud",
      "Authentification et gestion utilisateurs"
    ]
  }
];

export const projects = {
  runSport: {
    id: "project",
    title: "🏃‍♂️ Projet RunSport",
    description: "RunSport est une application mobile de vente de chaussures de sport adaptées, que vous développerez étape par étape. Cette app moderne inclut toutes les fonctionnalités essentielles d'une application E-commerce.",
    image: "/imagesFormations/RunSport.png",
    alt: "Écrans de l'application RunSport",
    technologies: [
      "React Native",
      "Expo SDK 49+",
      "Expo Router",
      "TailwindCSS",
      "TypeScript",
      "AsyncStorage",
      "Git & GitHub",
      "REST APIs",
      "Firebase",
      "Node.js"
    ],
    isPremium: false
  },
  socialConnect: {
    id: "social",
    title: "📱 Projet SocialConnect",
    description: "SocialConnect est une application de réseau social moderne et complète que vous développerez de A à Z. Cette app inclut toutes les fonctionnalités essentielles d'un réseau social : feed, stories, messages privés, système de followers et interactions en temps réel.",
    image: "/imagesFormations/socialMedia.png",
    alt: "Écrans de l'application SocialConnect",
    technologies: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "TailwindCSS",
      "Firebase Realtime Database",
      "Expo Image Picker",
      "Expo Camera",
      "Socket.io",
      "Zod",
      "React Native Reanimated"
    ],
    features: [
      "Feed avec posts et interactions",
      "Stories temporaires",
      "Messages privés en temps réel",
      "Système de followers/following",
      "Upload de photos et vidéos",
      "Notifications push",
      "Profils utilisateurs personnalisés",
      "Search et découverte"
    ],
    isPremium: true
  },
  skyBooker: {
    id: "travel",
    title: "✈️ Projet SkyBooker",
    description: "SkyBooker est une application complète de réservation de billets d'avion que vous développerez étape par étape. Cette app moderne inclut la recherche de vols, comparaison de prix, paiement sécurisé, gestion des réservations et notifications de voyage.",
    image: "/imagesFormations/skyReservation.png",
    alt: "Écrans de l'application SkyBooker",
    technologies: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "TailwindCSS",
      "Amadeus Travel API",
      "Stripe Payments",
      "Expo SecureStore",
      "React Hook Form",
      "Zod",
      "Expo Notifications"
    ],
    features: [
      "Recherche de vols multi-critères",
      "Comparaison de prix et compagnies",
      "Paiement sécurisé avec Stripe",
      "Gestion des réservations",
      "Check-in mobile",
      "Notifications de vol",
      "Historique des voyages",
      "Cartes d'embarquement digitales"
    ],
    isPremium: true
  },
  sendMoney: {
    id: "sendmoney",
    title: "💸 Projet SendMoney",
    description: "SendMoney est une application fintech complète de transfert d'argent et de paiements mobiles que vous développerez de A à Z. Cette app moderne inclut portefeuille digital, transferts sécurisés, paiements marchands et gestion financière personnelle avec sécurité bancaire.",
    image: "/imagesFormations/sendMoney.png",
    alt: "Écrans de l'application SendMoney",
    technologies: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "TailwindCSS",
      "Stripe Connect",
      "Firebase Auth",
      "Expo LocalAuthentication",
      "Plaid API",
      "JWT + RSA Encryption",
      "React Hook Form"
    ],
    features: [
      "Portefeuille digital sécurisé",
      "Transferts d'argent instantanés",
      "Paiements par QR Code",
      "Connexion comptes bancaires",
      "Authentification biométrique",
      "Historique des transactions",
      "Cartes virtuelles",
      "Notifications push sécurisées",
      "Gestion des budgets",
      "Split de factures"
    ],
    securityFeatures: [
      "Chiffrement AES-256",
      "Authentification à deux facteurs",
      "Détection de fraude",
      "Conformité PCI DSS",
      "Tokenisation des données",
      "Audit trail complet"
    ],
    isPremium: true,
    isSmallImage: true
  }
};

export const tabs = [
  { id: "overview", label: "Vue d'ensemble" },
  { id: "curriculum", label: "Programme" },
  { id: "project", label: "Projet RunSport" },
  { id: "social", label: "Projet Social Media" },
  { id: "travel", label: "Projet Sky Reservation" },
  { id: "sendmoney", label: "Projet SendMoney" }
]; 