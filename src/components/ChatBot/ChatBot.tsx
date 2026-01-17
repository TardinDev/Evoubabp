import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
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
      <AnimatePresence>
        {isOpen && (
          <ChatContainer
            as={motion.div}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <ChatHeader>
              <HeaderContent>
                <SupportIcon>
                  <FaHeadset size={24} />
                  <OnlineIndicator />
                </SupportIcon>
                <HeaderText>
                  <h3>Support Evoubap</h3>
                  <Status>En ligne</Status>
                </HeaderText>
              </HeaderContent>
              <CloseButton onClick={handleClose}>
                <FaTimes size={20} />
              </CloseButton>
            </ChatHeader>

            <MessagesContainer>
              {messages.map((message) => (
                <MessageWrapper key={message.id} sender={message.sender}>
                  <MessageBubble
                    sender={message.sender}
                    as={motion.div}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {message.text.split('\n').map((line, i) => (
                      <span key={i}>
                        {line.startsWith('**') && line.endsWith('**') ? (
                          <strong>{line.replace(/\*\*/g, '')}</strong>
                        ) : line.startsWith('•') ? (
                          <BulletPoint>{line}</BulletPoint>
                        ) : (
                          line
                        )}
                        {i < message.text.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </MessageBubble>
                </MessageWrapper>
              ))}

              {isTyping && (
                <MessageWrapper sender="bot">
                  <TypingIndicator
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <TypingDot delay={0} />
                    <TypingDot delay={0.2} />
                    <TypingDot delay={0.4} />
                  </TypingIndicator>
                </MessageWrapper>
              )}

              {!showForm && messages.length === 1 && (
                <SuggestedQuestions
                  as={motion.div}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <SuggestedLabel>Questions suggérées :</SuggestedLabel>
                  <SuggestedGrid>
                    {suggestedQuestions.map((q, idx) => (
                      <SuggestedButton
                        key={idx}
                        onClick={() => {
                          setInputValue(q.text);
                          setTimeout(() => handleSendMessage(), 100);
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {q.icon}
                        <span>{q.text}</span>
                      </SuggestedButton>
                    ))}
                  </SuggestedGrid>
                </SuggestedQuestions>
              )}

              {!showForm && messages.length > 0 && (
                <QuickActions
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <ActionsLabel>Actions rapides :</ActionsLabel>
                  <ActionButton
                    onClick={() => handleQuickAction('project')}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    color="#4CAF50"
                  >
                    Proposer un projet
                  </ActionButton>
                  <ActionButton
                    onClick={() => handleQuickAction('hire')}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    color="#2196F3"
                  >
                    Embaucher
                  </ActionButton>
                  <ActionButton
                    onClick={() => handleQuickAction('interview')}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    color="#9C27B0"
                  >
                    Demander un entretien
                  </ActionButton>
                </QuickActions>
              )}

              {showForm && (
                <FormContainer
                  as={motion.div}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  <FormTitle>Formulaire de contact</FormTitle>
                  <form onSubmit={handleSubmitForm}>
                    <FormGroup>
                      <label>Nom complet *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Votre nom"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label>Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.com"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label>Message *</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Décrivez votre projet ou votre demande..."
                        rows={4}
                      />
                    </FormGroup>
                    <FormButtons>
                      <CancelButton type="button" onClick={() => setShowForm(false)}>
                        Annuler
                      </CancelButton>
                      <SubmitButton type="submit">
                        Envoyer <FaPaperPlane size={14} />
                      </SubmitButton>
                    </FormButtons>
                  </form>
                </FormContainer>
              )}

              <div ref={messagesEndRef} />
            </MessagesContainer>

            {!showForm && (
              <InputContainer>
                <Input
                  type="text"
                  placeholder="Posez votre question..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <SendButton onClick={handleSendMessage} disabled={!inputValue.trim()}>
                  <FaPaperPlane size={18} />
                </SendButton>
              </InputContainer>
            )}
          </ChatContainer>
        )}
      </AnimatePresence>

      {hasReachedApps && (
        <FloatingButton
          onClick={handleOpen}
          as={motion.button}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ display: isOpen ? 'none' : 'flex' }}
        >
          <FaComments size={28} />
          {!hasInteracted && (
            <NotificationBadge
              as={motion.div}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3 }}
            >
              1
            </NotificationBadge>
          )}
          <PulseRing />
        </FloatingButton>
      )}
    </>
  );
};

export default ChatBot;

const bounce = keyframes`
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-4px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 400px;
  height: 600px;
  background: #1a1a2e;
  border-radius: 24px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    height: calc(100vh - 140px);
    right: 20px;
    bottom: 80px;
  }
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, #4b0082 0%, #8b5cf6 100%);
  color: white;
  padding: 1.2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SupportIcon = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OnlineIndicator = styled.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 14px;
  height: 14px;
  background: #4CAF50;
  border-radius: 50%;
  border: 2px solid #4b0082;
`;

const HeaderText = styled.div`
  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const Status = styled.span`
  font-size: 0.75rem;
  opacity: 0.9;
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 10px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background: linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(139, 92, 246, 0.3);
    border-radius: 3px;
  }
`;

const MessageWrapper = styled.div<{ sender: 'bot' | 'user' }>`
  display: flex;
  justify-content: ${props => props.sender === 'user' ? 'flex-end' : 'flex-start'};
`;

const MessageBubble = styled.div<{ sender: 'bot' | 'user' }>`
  max-width: 85%;
  padding: 1rem 1.2rem;
  border-radius: ${props => props.sender === 'user'
    ? '20px 20px 4px 20px'
    : '20px 20px 20px 4px'};
  background: ${props => props.sender === 'user'
    ? 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)'
    : 'rgba(255, 255, 255, 0.08)'};
  color: ${props => props.sender === 'user' ? 'white' : '#e0e0e0'};
  line-height: 1.6;
  font-size: 0.9rem;
  white-space: pre-wrap;
  border: ${props => props.sender === 'bot' ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
`;

const BulletPoint = styled.div`
  padding-left: 0.5rem;
  margin: 0.2rem 0;
`;

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 1rem 1.2rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px 20px 20px 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: fit-content;
`;

const TypingDot = styled.div<{ delay: number }>`
  width: 8px;
  height: 8px;
  background: #8b5cf6;
  border-radius: 50%;
  animation: ${bounce} 1.4s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const SuggestedQuestions = styled.div`
  margin-top: 0.5rem;
`;

const SuggestedLabel = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const SuggestedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

const SuggestedButton = styled(motion.button)`
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #c4b5fd;
  padding: 0.6rem 0.8rem;
  border-radius: 10px;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.25);
    border-color: rgba(139, 92, 246, 0.5);
  }

  svg {
    font-size: 0.9rem;
  }
`;

const QuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ActionsLabel = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ActionButton = styled(motion.button)<{ color: string }>`
  background: ${props => `${props.color}15`};
  border: 1px solid ${props => `${props.color}40`};
  color: ${props => props.color};
  padding: 0.9rem 1rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  text-align: left;

  &:hover {
    background: ${props => `${props.color}25`};
    border-color: ${props => props.color};
  }
`;

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const FormTitle = styled.h4`
  color: white;
  margin: 0 0 1rem 0;
  font-size: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.85rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
  }

  input, textarea {
    padding: 0.8rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    font-size: 0.9rem;
    font-family: inherit;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.05);
    color: white;

    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }

    &:focus {
      outline: none;
      border-color: #8b5cf6;
      background: rgba(139, 92, 246, 0.1);
    }
  }

  textarea {
    resize: vertical;
  }
`;

const FormButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const CancelButton = styled.button`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.8rem;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SubmitButton = styled.button`
  flex: 2;
  background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
  color: white;
  border: none;
  padding: 0.9rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
  }
`;

const InputContainer = styled.div`
  display: flex;
  padding: 1rem 1.2rem;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  gap: 0.8rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.9rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 25px;
  font-size: 0.9rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    background: rgba(139, 92, 246, 0.1);
  }
`;

const SendButton = styled.button`
  background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
  color: white;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4b0082 0%, #8b5cf6 100%);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(75, 0, 130, 0.5);
  z-index: 999;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    bottom: 20px;
    right: 20px;
  }
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ef4444;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  border: 3px solid #1a1a2e;
`;

const PulseRing = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid #8b5cf6;
  animation: ${pulse} 2s ease-out infinite;
`;
