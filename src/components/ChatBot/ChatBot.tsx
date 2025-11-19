import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import { useChatBot } from '../../contexts/ChatBotContext';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  contactReason: 'project' | 'hire' | 'interview' | '';
}

const ChatBot = () => {
  const { isOpen, openChatBot, closeChatBot } = useChatBot();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    contactReason: ''
  });
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasReachedApps, setHasReachedApps] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Détecter quand l'utilisateur atteint la section des applications
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
    // Vérifier au chargement initial
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasReachedApps]);

  useEffect(() => {
    // Message de bienvenue après 3 secondes après avoir atteint la section apps
    if (!hasReachedApps || hasInteracted) return;

    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setHasInteracted(true);
        openChatBot();
        setTimeout(() => {
          addBotMessage(
            "👋 Bonjour ! Je suis l'assistant virtuel d'Evoubap. J'ai remarqué que vous explorez mes applications. Puis-je vous aider à entrer en contact ?"
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
  };

  const handleOpen = () => {
    openChatBot();
    setHasInteracted(true);
    if (messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "👋 Bienvenue ! Je suis ravi de vous aider. Que souhaitez-vous faire aujourd'hui ?"
        );
        setTimeout(() => {
          addBotMessage(
            "Vous pouvez choisir parmi les options ci-dessous ou simplement me parler !"
          );
        }, 1000);
      }, 500);
    }
  };

  const handleClose = () => {
    closeChatBot();
  };

  const handleQuickAction = (action: 'project' | 'hire' | 'interview') => {
    setHasInteracted(true);
    const messages = {
      project: "J'ai un projet à vous proposer",
      hire: "Je souhaite vous embaucher",
      interview: "Je voudrais un entretien avec vous"
    };

    addUserMessage(messages[action]);

    setTimeout(() => {
      addBotMessage(
        `Excellent ! ${action === 'project' ? 'Parlons de votre projet' : action === 'hire' ? 'Discutons de cette opportunité' : 'Organisons cet entretien'} ! Pour mieux vous aider, pourriez-vous remplir ce petit formulaire ?`
      );
      setFormData({ ...formData, contactReason: action });
      setShowForm(true);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    setHasInteracted(true);
    addUserMessage(inputValue);
    const userInput = inputValue.toLowerCase();
    setInputValue('');

    setTimeout(() => {
      if (userInput.includes('projet') || userInput.includes('project')) {
        addBotMessage(
          "Super ! J'aimerais en savoir plus sur votre projet. Cliquez sur 'Proposer un projet' pour commencer !"
        );
      } else if (userInput.includes('embauche') || userInput.includes('hire') || userInput.includes('recrut')) {
        addBotMessage(
          "Merci pour votre intérêt ! Cliquez sur 'Embaucher' pour discuter des opportunités."
        );
      } else if (userInput.includes('entretien') || userInput.includes('interview') || userInput.includes('rencontr')) {
        addBotMessage(
          "Avec plaisir ! Cliquez sur 'Demander un entretien' pour planifier notre discussion."
        );
      } else if (userInput.includes('bonjour') || userInput.includes('salut') || userInput.includes('hello')) {
        addBotMessage(
          "Bonjour ! Comment puis-je vous aider aujourd'hui ? Souhaitez-vous proposer un projet, discuter d'une opportunité d'embauche ou organiser un entretien ?"
        );
      } else {
        addBotMessage(
          "Je comprends ! Pour mieux vous aider, pourriez-vous choisir l'une des options ci-dessous ?"
        );
      }
    }, 800);
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    addUserMessage(
      `Nom: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );

    addBotMessage('Envoi en cours... ⏳');

    try {
      // Envoyer les données à l'API
      const response = await fetch('/api/send-chat-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setTimeout(() => {
          addBotMessage(
            `Merci ${formData.name} ! 🎉 J'ai bien reçu votre demande. Vous recevrez une réponse à ${formData.email} sous 24-48h. À très bientôt !`
          );
          setShowForm(false);
          setFormData({ name: '', email: '', message: '', contactReason: '' });
        }, 500);
      } else {
        setTimeout(() => {
          addBotMessage(
            `Désolé, une erreur s'est produite lors de l'envoi. Veuillez réessayer ou me contacter directement à tardindavy@gmail.com 😊`
          );
        }, 500);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setTimeout(() => {
        addBotMessage(
          `Désolé, une erreur s'est produite. Vous pouvez me contacter directement à tardindavy@gmail.com 📧`
        );
      }, 500);
    }
  };

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
                <FaRobot size={24} />
                <HeaderText>
                  <h3>Assistant Evoubap</h3>
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {message.text}
                  </MessageBubble>
                </MessageWrapper>
              ))}

              {!showForm && messages.length > 0 && (
                <QuickActions
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <ActionButton
                    onClick={() => handleQuickAction('project')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    💼 Proposer un projet
                  </ActionButton>
                  <ActionButton
                    onClick={() => handleQuickAction('hire')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🤝 Embaucher
                  </ActionButton>
                  <ActionButton
                    onClick={() => handleQuickAction('interview')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📅 Demander un entretien
                  </ActionButton>
                </QuickActions>
              )}

              {showForm && (
                <FormContainer
                  as={motion.div}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
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
                        placeholder="Parlez-moi de votre demande..."
                        rows={4}
                      />
                    </FormGroup>
                    <SubmitButton type="submit">
                      Envoyer <FaPaperPlane size={14} />
                    </SubmitButton>
                  </form>
                </FormContainer>
              )}

              <div ref={messagesEndRef} />
            </MessagesContainer>

            {!showForm && (
              <InputContainer>
                <Input
                  type="text"
                  placeholder="Écrivez votre message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <SendButton onClick={handleSendMessage}>
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
        </FloatingButton>
      )}
    </>
  );
};

export default ChatBot;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 380px;
  height: 550px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  overflow: hidden;

  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    height: calc(100vh - 140px);
    right: 20px;
    bottom: 80px;
  }
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const HeaderText = styled.div`
  h3 {
    margin: 0;
    font-size: 1rem;
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
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 3px;
  }
`;

const MessageWrapper = styled.div<{ sender: 'bot' | 'user' }>`
  display: flex;
  justify-content: ${props => props.sender === 'user' ? 'flex-end' : 'flex-start'};
`;

const MessageBubble = styled.div<{ sender: 'bot' | 'user' }>`
  max-width: 75%;
  padding: 0.8rem 1rem;
  border-radius: 18px;
  background: ${props => props.sender === 'user'
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    : 'white'};
  color: ${props => props.sender === 'user' ? 'white' : '#2d3748'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  line-height: 1.5;
  font-size: 0.9rem;
  word-wrap: break-word;
`;

const QuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 0.5rem;
`;

const ActionButton = styled(motion.button)`
  background: white;
  border: 2px solid #667eea;
  color: #667eea;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: #667eea;
    color: white;
  }
`;

const FormContainer = styled.div`
  background: white;
  padding: 1.2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #4a5568;
  }

  input, textarea {
    padding: 0.7rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 0.9rem;
    font-family: inherit;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #667eea;
    }
  }

  textarea {
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.9rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  background: white;
  border-top: 1px solid #e2e8f0;
  gap: 0.8rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 25px;
  font-size: 0.9rem;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const SendButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  z-index: 999;
  position: relative;

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    bottom: 20px;
    right: 20px;
  }
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #f56565;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  border: 2px solid white;
`;
