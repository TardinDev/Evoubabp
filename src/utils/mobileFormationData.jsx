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

export const formations = {
  pro: {
    id: "pro",
    title: "Formation Pro",
    price: 129,
    currency: "€",
    description: "Maîtrisez les fondamentaux du développement mobile avec React Native",
    projects: ["runSport", "socialConnect"],
    features: [
      "✅ 2 projets complets inclus",
      "✅ Code source disponible",
      "✅ Vidéos tutoriels HD",
      "✅ Support communauté",
      "✅ Certificat de réussite",
      "✅ Mise à jour gratuite"
    ],
    badge: "POPULAIRE",
    color: "#3B82F6"
  },
  mastering: {
    id: "mastering",
    title: "Formation Mastering",
    price: 149,
    currency: "€",
    description: "Devenez un expert React Native avec 4 projets complets",
    projects: ["runSport", "socialConnect", "skyBooker", "sendMoney"],
    features: [
      "✅ 4 projets complets inclus",
      "✅ Code source disponible",
      "✅ Vidéos tutoriels HD",
      "✅ Support communauté",
      "✅ Certificat de réussite",
      "✅ Mise à jour gratuite",
      "✅ Accès aux projets avancés",
      "✅ Mentoring personnalisé"
    ],
    badge: "RECOMMANDÉ",
    color: "#10B981"
  }
};

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
    isPremium: false,
    formation: "pro"
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
    isPremium: true,
    formation: "pro"
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
    isPremium: true,
    formation: "mastering"
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
    formation: "mastering",
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

// Fonction utilitaire pour déterminer l'accès aux projets selon la formation
export const getProjectAccess = (projectId, userFormation = null) => {
  const project = projects[projectId];
  if (!project) return false;
  
  // Si l'utilisateur n'a pas de formation, seul RunSport est accessible
  if (!userFormation) {
    return project.id === "project";
  }
  
  // Si l'utilisateur a la formation Pro
  if (userFormation === "pro") {
    return formations.pro.projects.includes(projectId);
  }
  
  // Si l'utilisateur a la formation Mastering
  if (userFormation === "mastering") {
    return formations.mastering.projects.includes(projectId);
  }
  
  return false;
};

// Fonction pour obtenir la formation recommandée pour un projet
export const getRecommendedFormation = (projectId) => {
  const project = projects[projectId];
  if (!project) return null;
  
  if (project.formation === "pro") {
    return formations.pro;
  }
  
  if (project.formation === "mastering") {
    return formations.mastering;
  }
  
  return null;
}; 