import { createContext, useContext, ReactNode, useState } from 'react';

interface ChatBotContextType {
  isOpen: boolean;
  openChatBot: () => void;
  closeChatBot: () => void;
  toggleChatBot: () => void;
}

const ChatBotContext = createContext<ChatBotContextType | undefined>(undefined);

export const ChatBotProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openChatBot = () => setIsOpen(true);
  const closeChatBot = () => setIsOpen(false);
  const toggleChatBot = () => setIsOpen(prev => !prev);

  return (
    <ChatBotContext.Provider value={{ isOpen, openChatBot, closeChatBot, toggleChatBot }}>
      {children}
    </ChatBotContext.Provider>
  );
};

export const useChatBot = () => {
  const context = useContext(ChatBotContext);
  if (context === undefined) {
    throw new Error('useChatBot must be used within a ChatBotProvider');
  }
  return context;
};
