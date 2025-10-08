import { FaGraduationCap, FaBookOpen, FaLaptopCode, FaMobile, FaBrain } from "react-icons/fa";

// Données des formations
export const formations = [
  {
    icon: FaGraduationCap,
    title: "Développement Web Moderne",
    text: "Maîtrisez React, Next.js, TypeScript et les technologies web les plus demandées. Créez des applications web performantes et évolutives.",
    navigateUrl: "/formations/web-dev"
  },
  {
    icon: FaMobile,
    title: "Développement Mobile Cross-Platform",
    text: "Développez des applications mobiles avec React Native et Expo. Une formation complète pour créer des apps iOS et Android.",
    navigateUrl: "/formations/mobile"
  },
  {
    icon: FaBrain,
    title: "Machine Learning & IA",
    text: "Découvrez le Machine Learning de manière simple et intuitive. Apprenez les algorithmes, concepts clés et créez vos premiers modèles d'IA.",
    navigateUrl: "/formations/machine-learning"
  },
  {
    icon: FaBookOpen,
    title: "Tech Business & Entrepreneuriat",
    text: "Apprenez à lancer votre startup tech, comprendre le marché digital et développer une stratégie commerciale gagnante."
  },
  {
    icon: FaLaptopCode,
    title: "Live Coding & Mentoring",
    text: "Sessions de coding en direct avec un expert. Résolvez des problèmes réels et bénéficiez d&rsquo;un accompagnement personnalisé.",
    hasCountdown: true // Indicateur pour ajouter le countdown
  }
];

// Données FAQ
export const faqData = [
  {
    question: "Les formations sont-elles certifiantes ?",
    answer: "Oui, vous recevrez un certificat de réussite reconnu par l&rsquo;industrie à la fin de chaque formation, validant vos nouvelles compétences."
  },
  {
    question: "Quel est le niveau requis ?",
    answer: "Nos formations s&rsquo;adaptent à tous les niveaux, du débutant au développeur expérimenté souhaitant se perfectionner dans les dernières technologies."
  },
  {
    question: "Y a-t-il un suivi après la formation ?",
    answer: "Vous bénéficiez d&rsquo;un accompagnement de 3 mois post-formation et d&rsquo;un accès à vie à notre communauté d&rsquo;anciens élèves."
  },
  {
    question: "Les formations sont-elles en présentiel ?",
    answer: "Nous proposons des formats hybrides : en ligne, présentiel à Paris, et des sessions immersives selon vos préférences et disponibilités."
  },
  {
    question: "Quels sont les horaires des formations ?",
    answer: "Les formations sont flexibles avec des sessions en soirée et weekend. Les Live Coding ont lieu chaque vendredi à 21h."
  },
  {
    question: "Y a-t-il des prérequis techniques ?",
    answer: "Un ordinateur avec accès internet suffit. Nous fournissons tous les outils et ressources nécessaires pour suivre les formations."
  }
];

// Textes de la page
export const pageTexts = {
  intro: {
    title: "🎯 Nos Formations d'Excellence",
    subtitle: "Des programmes intensifs conçus par des experts pour vous faire passer au niveau supérieur dans votre carrière tech"
  },
  faq: {
    title: "❓ Questions Fréquentes",
    subtitle: "Tout ce que vous devez savoir sur nos formations"
  }
}; 