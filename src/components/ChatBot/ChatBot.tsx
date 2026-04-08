'use client'

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaHeadset, FaCode, FaMobile, FaServer, FaGraduationCap } from 'react-icons/fa';
import { useChatBot } from '../../contexts/ChatBotContext';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  isTyping?: boolean;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  contactReason: 'project' | 'hire' | 'interview' | '';
}

// Base de connaissances du développeur
const knowledgeBase = {
  skills: {
    frontend: ['React', 'React Native', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Styled Components', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'Spring Boot', 'Java', 'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase'],
    tools: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman'],
    mobile: ['React Native', 'Expo', 'Android Studio']
  },
  projects: {
    web: ['Portfolio Evoubap', 'University Management Dashboard (PERN Stack)', 'Application de déclaration de naissance'],
    mobile: ['Applications Android/iOS avec React Native', 'TikTok Clone']
  },
  experience: 'Développeur FullStack passionné avec expertise en React, Node.js et Spring Boot',
  contact: {
    email: 'tardindavy@gmail.com',
    github: 'github.com/evoubap',
    linkedin: 'linkedin.com/in/evoubap'
  },
  availability: 'Disponible pour des projets freelance, CDI ou missions'
};

// Patterns de reconnaissance améliorés
const responsePatterns = [
  {
    patterns: ['bonjour', 'salut', 'hello', 'hi', 'hey', 'coucou', 'bonsoir'],
    responses: [
      "Bonjour ! Bienvenue sur le portfolio de Davy. Comment puis-je vous aider ?",
      "Bienvenue ! Que souhaitez-vous savoir sur les compétences ou projets de Davy ?",
      "Bonjour ! Je suis là pour répondre à vos questions. Que puis-je faire pour vous ?"
    ]
  },
  {
    patterns: ['compétence', 'skill', 'technologie', 'tech', 'stack', 'langage', 'framework', 'savoir faire', 'maitrise'],
    responses: [
      `Davy maîtrise un large éventail de technologies :\n\n**Frontend:** ${knowledgeBase.skills.frontend.join(', ')}\n\n**Backend:** ${knowledgeBase.skills.backend.join(', ')}\n\n**Mobile:** ${knowledgeBase.skills.mobile.join(', ')}\n\nQuel domaine vous intéresse particulièrement ?`,
    ]
  },
  {
    patterns: ['react', 'frontend', 'front-end', 'interface', 'ui', 'ux'],
    responses: [
      "Côté Frontend, Davy excelle avec React et son écosystème.\n\nIl utilise TypeScript pour un code robuste, Styled Components et Tailwind pour le styling, et Framer Motion pour des animations fluides.\n\nVoulez-vous voir des exemples de projets React ?",
      "React est l'une des spécialités de Davy. Il développe des interfaces modernes, performantes et accessibles. Il maîtrise également Next.js pour le SSR et React Native pour le mobile."
    ]
  },
  {
    patterns: ['node', 'nodejs', 'express', 'backend', 'back-end', 'api', 'serveur', 'server'],
    responses: [
      "Côté Backend Node.js, Davy développe des APIs robustes.\n\nIl utilise Express ou Fastify, connecte à PostgreSQL/MongoDB, implémente l'authentification JWT, et gère les WebSockets pour le temps réel.\n\nSon projet phare : University Management Dashboard en PERN Stack.",
    ]
  },
  {
    patterns: ['spring', 'java', 'spring boot', 'springboot'],
    responses: [
      "Spring Boot est une autre expertise de Davy.\n\nIl développe des applications enterprise robustes avec Spring Security, JPA/Hibernate, et architecture microservices.\n\nSon projet en cours : une application de déclaration de naissance pour l'administration publique.",
    ]
  },
  {
    patterns: ['mobile', 'android', 'ios', 'react native', 'application mobile', 'app'],
    responses: [
      "Davy développe aussi des applications mobiles.\n\nAvec React Native et Expo, il crée des apps cross-platform performantes. Il a notamment réalisé un clone TikTok avec gestion vidéo, caméra et profils utilisateurs.\n\nIntéressé par un projet mobile ?",
    ]
  },
  {
    patterns: ['projet', 'réalisation', 'portfolio', 'travaux', 'exemple', 'demo'],
    responses: [
      `Voici les projets phares de Davy :\n\n**Web:**\n${knowledgeBase.projects.web.map(p => `• ${p}`).join('\n')}\n\n**Mobile:**\n${knowledgeBase.projects.mobile.map(p => `• ${p}`).join('\n')}\n\nVoulez-vous plus de détails sur l'un d'entre eux ?`,
    ]
  },
  {
    patterns: ['université', 'university', 'dashboard', 'gestion', 'pern', 'classroom', 'google classroom'],
    responses: [
      "Le University Management Dashboard est un projet complet.\n\nC'est un système style Google Classroom avec :\n• Authentification multi-rôles (Admin, Prof, Étudiant)\n• Codes de rejoindre sécurisés\n• Upload média via Cloudinary\n• Stack PERN (PostgreSQL, Express, React, Node)\n\nUn excellent exemple de compétences FullStack.",
    ]
  },
  {
    patterns: ['naissance', 'déclaration', 'civil', 'état civil', 'birth'],
    responses: [
      "L'application de Déclaration de Naissance est un projet d'envergure.\n\nDéveloppée avec React + Spring Boot, elle permet :\n• Enregistrement numérique des naissances\n• Génération d'actes officiels\n• Gestion sécurisée des données sensibles\n• Interface intuitive pour les agents d'état civil\n\nUn projet qui démontre la capacité à gérer des applications critiques.",
    ]
  },
  {
    patterns: ['contact', 'email', 'mail', 'joindre', 'contacter', 'coordonnées'],
    responses: [
      `Vous pouvez contacter Davy de plusieurs façons :\n\n**Email:** ${knowledgeBase.contact.email}\n\nOu utilisez les boutons ci-dessous pour :\n• Proposer un projet\n• Discuter d'une embauche\n• Demander un entretien`,
    ]
  },
  {
    patterns: ['disponible', 'disponibilité', 'freelance', 'cdi', 'mission', 'embauche', 'recruter', 'hire'],
    responses: [
      `Davy est actuellement ${knowledgeBase.availability}.\n\nIl est ouvert à :\n• Missions freelance\n• Postes CDI\n• Projets de collaboration\n\nVoulez-vous lui proposer une opportunité ?`,
    ]
  },
  {
    patterns: ['prix', 'tarif', 'cout', 'coût', 'budget', 'devis', 'combien'],
    responses: [
      "Pour discuter des tarifs, contactez Davy directement.\n\nChaque projet est unique et nécessite une estimation personnalisée basée sur :\n• La complexité technique\n• Les délais\n• Les fonctionnalités requises\n\nCliquez sur 'Proposer un projet' pour obtenir un devis.",
    ]
  },
  {
    patterns: ['merci', 'thanks', 'thank you', 'super', 'génial', 'parfait', 'excellent'],
    responses: [
      "Avec plaisir. N'hésitez pas si vous avez d'autres questions.",
      "Je reste à votre disposition. Besoin d'autre chose ?",
      "Ravi d'avoir pu vous aider. Y a-t-il autre chose que je puisse faire pour vous ?"
    ]
  },
  {
    patterns: ['au revoir', 'bye', 'goodbye', 'à bientôt', 'ciao', 'quitter'],
    responses: [
      "Au revoir. N'hésitez pas à revenir si vous avez d'autres questions.",
      "À bientôt. J'espère que vous avez trouvé ce que vous cherchiez.",
      "Merci de votre visite. À bientôt."
    ]
  },
  {
    patterns: ['qui es-tu', 'qui êtes-vous', 'c\'est qui', 'présente-toi', 'about', 'à propos'],
    responses: [
      "Je suis le service de support du portfolio de Davy, développeur FullStack.\n\nJe peux vous aider à :\n• Découvrir ses compétences et projets\n• Répondre à vos questions\n• Faciliter la prise de contact\n\nPosez-moi vos questions.",
    ]
  },
  {
    patterns: ['experience', 'expérience', 'parcours', 'carrière', 'background'],
    responses: [
      "Davy a un parcours riche en développement.\n\nIl a travaillé sur des projets variés allant des applications enterprise aux apps mobiles grand public.\n\nSes domaines d'expertise :\n• Applications web React/Next.js\n• APIs REST avec Node.js & Spring Boot\n• Applications mobiles React Native\n• Intégration de services cloud\n\nSon approche : code propre, performance et UX soignée.",
    ]
  }
];

// Fonction pour trouver la meilleure réponse
const findBestResponse = (userInput: string): string => {
  const input = userInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Recherche de patterns correspondants
  for (const pattern of responsePatterns) {
    for (const keyword of pattern.patterns) {
      if (input.includes(keyword.toLowerCase())) {
        const responses = pattern.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
  }

  // Réponses par défaut intelligentes
  const defaultResponses = [
    "Intéressant ! Pouvez-vous m'en dire plus ? Je suis là pour vous aider à en savoir plus sur Davy et ses compétences.",
    "Je ne suis pas sûr de comprendre, mais je peux vous parler des compétences, projets ou disponibilités de Davy. Que souhaitez-vous savoir ?",
    "Hmm, laissez-moi réfléchir... Peut-être que vous aimeriez en savoir plus sur ses projets React, Node.js ou Spring Boot ?",
    "Je peux vous renseigner sur les compétences, projets et disponibilités de Davy. N'hésitez pas à poser vos questions."
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

const ChatBot = () => {
  const { isOpen, openChatBot, closeChatBot } = useChatBot();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    contactReason: ''
  });
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasReachedApps, setHasReachedApps] = useState(false);
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const handleScroll = () => {
      const appShowcaseSection = document.getElementById('app-showcase');
      if (appShowcaseSection) {
        const rect = appShowcaseSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isVisible && !hasReachedApps) {
          setHasReachedApps(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasReachedApps]);

  useEffect(() => {
    if (!hasReachedApps || hasInteracted) return;

    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setHasInteracted(true);
        openChatBot();
        setTimeout(() => {
          addBotMessage(
            "Bonjour ! Bienvenue sur le portfolio de Davy. Je peux répondre à vos questions sur ses compétences, projets et disponibilités. Comment puis-je vous aider ?"
          );
        }, 300);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasReachedApps, hasInteracted]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    setConversationContext(prev => [...prev.slice(-5), text]);
  };

  const simulateTyping = (callback: () => void, delay: number = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleOpen = () => {
    openChatBot();
    setHasInteracted(true);
    if (messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "Bienvenue sur le portfolio de Davy, développeur FullStack.\n\nJe peux vous renseigner sur :\n• Ses compétences (React, Node.js, Spring Boot...)\n• Ses projets réalisés\n• Sa disponibilité\n\nPosez vos questions ou utilisez les boutons ci-dessous."
        );
      }, 500);
    }
  };

  const handleClose = () => {
    closeChatBot();
  };

  const handleQuickAction = (action: 'project' | 'hire' | 'interview') => {
    setHasInteracted(true);
    const userMessages = {
      project: "J'ai un projet à vous proposer",
      hire: "Je souhaite vous embaucher",
      interview: "Je voudrais un entretien avec vous"
    };

    addUserMessage(userMessages[action]);

    simulateTyping(() => {
      const botResponses = {
        project: "Excellent choix. Remplissez ce formulaire rapide et Davy vous répondra sous 24-48h avec une proposition adaptée à votre projet.",
        hire: "Davy est ouvert aux opportunités. Partagez les détails du poste via ce formulaire et il vous contactera rapidement pour discuter.",
        interview: "Organisons cet échange. Précisez vos disponibilités et le sujet que vous souhaitez aborder dans le formulaire ci-dessous."
      };
      addBotMessage(botResponses[action]);
      setFormData({ ...formData, contactReason: action });
      setShowForm(true);
    });
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    setHasInteracted(true);
    addUserMessage(inputValue);
    const userInput = inputValue;
    setInputValue('');

    // Calcul du délai basé sur la longueur de la réponse attendue
    const estimatedDelay = Math.min(800 + Math.random() * 1000, 2000);

    simulateTyping(() => {
      const response = findBestResponse(userInput);
      addBotMessage(response);
    }, estimatedDelay);
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    addUserMessage(
      `Formulaire envoyé:\nNom: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );

    simulateTyping(async () => {
      addBotMessage('Envoi en cours...');

      try {
        const response = await fetch('/api/send-chat-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            conversationHistory: messages.map(m => ({ sender: m.sender, text: m.text })),
            timestamp: new Date().toISOString(),
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setTimeout(() => {
            addBotMessage(
              `Merci ${formData.name}. Votre message a bien été transmis à Davy.\n\nIl vous répondra à ${formData.email} dans les 24-48h.\n\nN'hésitez pas à explorer le portfolio en attendant.`
            );
            setShowForm(false);
            setFormData({ name: '', email: '', message: '', contactReason: '' });
          }, 500);
        } else {
          setTimeout(() => {
            addBotMessage(
              `Une erreur technique s'est produite.\n\nVous pouvez contacter Davy directement :\n${knowledgeBase.contact.email}`
            );
          }, 500);
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        setTimeout(() => {
          addBotMessage(
            `La connexion a échoué. Contactez Davy directement à ${knowledgeBase.contact.email}`
          );
        }, 500);
      }
    }, 500);
  };

  const suggestedQuestions = [
    { icon: <FaCode />, text: "Quelles technologies ?" },
    { icon: <FaMobile />, text: "Projets mobiles ?" },
    { icon: <FaServer />, text: "Expérience backend ?" },
    { icon: <FaGraduationCap />, text: "Projets récents ?" },
  ];

  return (
    <>
      {/* Keyframe animations */}
      <style>{`
        @keyframes chatbot-bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
        @keyframes chatbot-pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-[100px] right-[30px] w-[400px] h-[600px] bg-[#1a1a2e] rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.4)] flex flex-col z-[1000] overflow-hidden border border-white/10 md:w-[400px] md:h-[600px] max-md:w-[calc(100vw-40px)] max-md:h-[calc(100vh-140px)] max-md:right-5 max-md:bottom-20"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Chat Header */}
            <div
              className="text-white py-5 px-6 flex justify-between items-center"
              style={{ background: 'linear-gradient(135deg, #4b0082 0%, #8b5cf6 100%)' }}
            >
              <div className="flex items-center gap-4">
                <div className="relative w-[45px] h-[45px] bg-white/20 rounded-xl flex items-center justify-center">
                  <FaHeadset size={24} />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#4b0082]" />
                </div>
                <div>
                  <h3 className="m-0 text-lg font-semibold">Support Evoubap</h3>
                  <span className="text-xs opacity-90">En ligne</span>
                </div>
              </div>
              <button
                className="bg-white/20 border-none rounded-[10px] w-9 h-9 flex items-center justify-center cursor-pointer text-white transition-all duration-300 hover:bg-white/30 hover:rotate-90"
                onClick={handleClose}
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Messages Container */}
            <div
              className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-violet-500/30 [&::-webkit-scrollbar-thumb]:rounded-sm"
              style={{ background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)' }}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <motion.div
                    className={`max-w-[85%] px-5 py-4 leading-relaxed text-sm whitespace-pre-wrap ${
                      message.sender === 'user'
                        ? 'rounded-[20px_20px_4px_20px] text-white border-none'
                        : 'rounded-[20px_20px_20px_4px] text-[#e0e0e0] border border-white/10'
                    }`}
                    style={
                      message.sender === 'user'
                        ? { background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)' }
                        : { background: 'rgba(255, 255, 255, 0.08)' }
                    }
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {message.text.split('\n').map((line, i) => (
                      <span key={i}>
                        {line.startsWith('**') && line.endsWith('**') ? (
                          <strong>{line.replace(/\*\*/g, '')}</strong>
                        ) : line.startsWith('•') ? (
                          <div className="pl-2 my-0.5">{line}</div>
                        ) : (
                          line
                        )}
                        {i < message.text.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </motion.div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <motion.div
                    className="flex items-center gap-1 px-5 py-4 bg-white/[0.08] rounded-[20px_20px_20px_4px] border border-white/10 w-fit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div
                      className="w-2 h-2 bg-violet-500 rounded-full"
                      style={{ animation: 'chatbot-bounce 1.4s ease-in-out infinite', animationDelay: '0s' }}
                    />
                    <div
                      className="w-2 h-2 bg-violet-500 rounded-full"
                      style={{ animation: 'chatbot-bounce 1.4s ease-in-out infinite', animationDelay: '0.2s' }}
                    />
                    <div
                      className="w-2 h-2 bg-violet-500 rounded-full"
                      style={{ animation: 'chatbot-bounce 1.4s ease-in-out infinite', animationDelay: '0.4s' }}
                    />
                  </motion.div>
                </div>
              )}

              {!showForm && messages.length === 1 && (
                <motion.div
                  className="mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-xs text-white/50 mb-3 uppercase tracking-wider">
                    Questions suggérées :
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {suggestedQuestions.map((q, idx) => (
                      <motion.button
                        key={idx}
                        className="bg-violet-500/15 border border-violet-500/30 text-violet-300 py-2.5 px-3 rounded-[10px] text-xs cursor-pointer flex items-center gap-2 transition-all duration-200 hover:bg-violet-500/25 hover:border-violet-500/50 [&>svg]:text-sm"
                        onClick={() => {
                          setInputValue(q.text);
                          setTimeout(() => handleSendMessage(), 100);
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {q.icon}
                        <span>{q.text}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {!showForm && messages.length > 0 && (
                <motion.div
                  className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-xs text-white/50 mb-2 uppercase tracking-wider">
                    Actions rapides :
                  </div>
                  <motion.button
                    className="border rounded-xl font-semibold cursor-pointer transition-all duration-300 text-sm text-left py-3.5 px-4"
                    style={{
                      background: 'rgba(76, 175, 80, 0.08)',
                      borderColor: 'rgba(76, 175, 80, 0.25)',
                      color: '#4CAF50',
                    }}
                    onClick={() => handleQuickAction('project')}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(76, 175, 80, 0.15)';
                      (e.currentTarget as HTMLElement).style.borderColor = '#4CAF50';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(76, 175, 80, 0.08)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(76, 175, 80, 0.25)';
                    }}
                  >
                    Proposer un projet
                  </motion.button>
                  <motion.button
                    className="border rounded-xl font-semibold cursor-pointer transition-all duration-300 text-sm text-left py-3.5 px-4"
                    style={{
                      background: 'rgba(33, 150, 243, 0.08)',
                      borderColor: 'rgba(33, 150, 243, 0.25)',
                      color: '#2196F3',
                    }}
                    onClick={() => handleQuickAction('hire')}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(33, 150, 243, 0.15)';
                      (e.currentTarget as HTMLElement).style.borderColor = '#2196F3';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(33, 150, 243, 0.08)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(33, 150, 243, 0.25)';
                    }}
                  >
                    Embaucher
                  </motion.button>
                  <motion.button
                    className="border rounded-xl font-semibold cursor-pointer transition-all duration-300 text-sm text-left py-3.5 px-4"
                    style={{
                      background: 'rgba(156, 39, 176, 0.08)',
                      borderColor: 'rgba(156, 39, 176, 0.25)',
                      color: '#9C27B0',
                    }}
                    onClick={() => handleQuickAction('interview')}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(156, 39, 176, 0.15)';
                      (e.currentTarget as HTMLElement).style.borderColor = '#9C27B0';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(156, 39, 176, 0.08)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(156, 39, 176, 0.25)';
                    }}
                  >
                    Demander un entretien
                  </motion.button>
                </motion.div>
              )}

              {showForm && (
                <motion.div
                  className="bg-white/5 p-6 rounded-2xl border border-white/10"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  <h4 className="text-white m-0 mb-4 text-base">Formulaire de contact</h4>
                  <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-white/70">Nom complet *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Votre nom"
                        className="py-3 px-4 border border-white/15 rounded-[10px] text-sm font-[inherit] transition-all duration-300 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500 focus:bg-violet-500/10"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-white/70">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.com"
                        className="py-3 px-4 border border-white/15 rounded-[10px] text-sm font-[inherit] transition-all duration-300 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500 focus:bg-violet-500/10"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-white/70">Message *</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Décrivez votre projet ou votre demande..."
                        rows={4}
                        className="py-3 px-4 border border-white/15 rounded-[10px] text-sm font-[inherit] transition-all duration-300 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500 focus:bg-violet-500/10 resize-y"
                      />
                    </div>
                    <div className="flex gap-3 mt-2">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="flex-1 bg-white/10 text-white/70 border border-white/20 py-3 rounded-[10px] font-medium cursor-pointer transition-all duration-200 hover:bg-white/15"
                      >
                        Annuler
                      </button>
                      <button
                        type="submit"
                        className="flex-[2] text-white border-none py-3.5 rounded-[10px] font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(139,92,246,0.4)]"
                        style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)' }}
                      >
                        Envoyer <FaPaperPlane size={14} />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Container */}
            {!showForm && (
              <div className="flex py-4 px-5 bg-black/30 border-t border-white/10 gap-3">
                <input
                  type="text"
                  placeholder="Posez votre question..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 py-3.5 px-5 border border-white/15 rounded-[25px] text-sm font-[inherit] bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:border-violet-500 focus:bg-violet-500/10"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="text-white border-none w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:enabled:scale-110 hover:enabled:shadow-[0_8px_25px_rgba(139,92,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)' }}
                >
                  <FaPaperPlane size={18} />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {hasReachedApps && (
        <motion.button
          className="fixed bottom-[30px] right-[30px] w-[65px] h-[65px] rounded-full text-white border-none flex items-center justify-center cursor-pointer shadow-[0_8px_30px_rgba(75,0,130,0.5)] z-[999] max-md:w-[60px] max-md:h-[60px] max-md:bottom-5 max-md:right-5"
          style={{
            background: 'linear-gradient(135deg, #4b0082 0%, #8b5cf6 100%)',
            display: isOpen ? 'none' : 'flex',
          }}
          onClick={handleOpen}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaComments size={28} />
          {!hasInteracted && (
            <motion.div
              className="absolute -top-1.5 -right-1.5 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-[3px] border-[#1a1a2e]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3 }}
            >
              1
            </motion.div>
          )}
          <div
            className="absolute inset-0 rounded-full border-[3px] border-violet-500"
            style={{ animation: 'chatbot-pulse 2s ease-out infinite' }}
          />
        </motion.button>
      )}
    </>
  );
};

export default ChatBot;
