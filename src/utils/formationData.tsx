import { FaGraduationCap, FaBookOpen, FaLaptopCode, FaMobile, FaBrain, FaRobot } from "react-icons/fa";

// Données des formations
export const formations = [
  {
    icon: FaRobot,
    title: "Coder avec l'IA - Claude Code",
    text: "Apprenez à coder 10x plus vite avec Claude Code, l'outil IA d'Anthropic. Au programme : les commandes et skills essentiels, le fichier CLAUDE.md pour personnaliser votre assistant, et les standards web 2026 (Next.js 15, React 19, Tailwind v4). Formation courte, dense et 100% pratique.",
    navigateUrl: "/formations/claude-code",
    featured: true
  },
  {
    icon: FaGraduationCap,
    title: "Développement Web Moderne",
    text: "Apprenez à créer des applications web complètes de A à Z. Au programme : React pour l'interface, TypeScript pour un code robuste, Tailwind CSS pour le design, Supabase pour la base de données et Node.js pour l'API. Vous construirez un vrai projet (e-commerce ou assistant IA) étape par étape.",
    navigateUrl: "/formations/web-dev"
  },
  {
    icon: FaMobile,
    title: "Développement Mobile Cross-Platform",
    text: "Créez des applications iOS et Android avec un seul code grâce à React Native et Expo. 5 projets concrets inclus : clone TikTok, e-commerce, réseau social, réservation de vols et fintech. Plus de 10h de contenu avec le code source complet fourni.",
    navigateUrl: "/formations/mobile"
  },
  {
    icon: FaBrain,
    title: "Machine Learning & IA",
    text: "Comprenez le Machine Learning sans prérequis mathématiques complexes. Découvrez les 3 types d'apprentissage, les algorithmes essentiels (régression, KNN, arbres de décision, réseaux de neurones) et pratiquez avec des exemples interactifs. Idéal pour débuter en IA.",
    navigateUrl: "/formations/machine-learning"
  },
  {
    icon: FaBookOpen,
    title: "Tech Business & Entrepreneuriat",
    text: "Lancez votre projet tech avec les bonnes bases : étude de marché, business model, stratégie de lancement, levée de fonds et gestion d'équipe technique. Formation pensée pour les développeurs qui veulent entreprendre."
  },
  {
    icon: FaLaptopCode,
    title: "Live Coding & Mentoring",
    text: "Sessions de coding en direct chaque vendredi à 21h. Posez vos questions, résolvez des problèmes réels et progressez avec un accompagnement personnalisé. Idéal en complément de n'importe quelle formation.",
    hasCountdown: true
  }
];

// Données FAQ
export const faqData = [
  {
    question: "Les formations sont-elles certifiantes ?",
    answer: "Oui, un certificat de réussite est délivré à la fin de chaque formation. Il atteste des compétences acquises et peut être ajouté à votre profil LinkedIn ou votre CV pour valoriser votre parcours auprès des recruteurs."
  },
  {
    question: "Quel est le niveau requis ?",
    answer: "Chaque formation précise son niveau : la formation Web et Mobile partent de zéro (débutant accepté), tandis que le Machine Learning suppose une familiarité avec la logique de programmation. Dans tous les cas, chaque concept est expliqué pas à pas avec des exemples concrets."
  },
  {
    question: "Y a-t-il un suivi après la formation ?",
    answer: "Oui ! Vous bénéficiez d'un accès à vie au contenu et aux mises à jour. Pour aller plus loin, vous pouvez demander un suivi personnalisé : code review, aide sur vos blocages et sessions de mentorat en visio. Contactez-nous via WhatsApp pour en discuter."
  },
  {
    question: "Les formations sont-elles en présentiel ?",
    answer: "Les formations sont principalement en ligne (vidéos, code source, exercices). Des sessions en visio peuvent être organisées sur demande pour le mentorat personnalisé. Le format en ligne vous permet d'apprendre à votre rythme, où que vous soyez."
  },
  {
    question: "Comment fonctionne le suivi personnalisé ?",
    answer: "Contactez Davy directement via WhatsApp au +33 7 66 45 07 71. Ensemble, vous définissez vos objectifs, votre planning et le format qui vous convient : code review hebdomadaire, sessions de mentorat en visio, ou aide ponctuelle sur vos projets."
  },
  {
    question: "Est-ce que le code source est fourni ?",
    answer: "Oui, le code source complet de chaque projet est fourni et commenté. Vous pouvez le télécharger, le modifier et l'utiliser comme base pour vos propres projets. Les mises à jour sont incluses à vie."
  },
  {
    question: "Y a-t-il des prérequis techniques ?",
    answer: "Un ordinateur (Windows, Mac ou Linux) avec un accès internet suffit. Les outils nécessaires (VS Code, Node.js, Git) sont gratuits et leur installation est expliquée en détail dans chaque formation."
  }
];

// Textes de la page
export const pageTexts = {
  intro: {
    title: "Nos Formations d'Excellence",
    subtitle: "Des programmes pratiques et progressifs pour maîtriser les technologies les plus demandées. Apprenez en construisant de vrais projets, avec un accompagnement personnalisé si vous le souhaitez."
  },
  faq: {
    title: "Questions Fréquentes",
    subtitle: "Tout ce que vous devez savoir avant de commencer"
  }
};
