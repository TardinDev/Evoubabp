'use client'

import dynamic from "next/dynamic";
import Header from "../components/Header/Header";
import MachineLearningSection from "../components/MachineLearning/MachineLearningSection";
import { ActiveSectionProvider } from "../contexts/ActiveSectionContext";
import { ChatBotProvider } from "../contexts/ChatBotContext";
import { LanguageProvider } from "../contexts/LanguageContext";

const Footer = dynamic(() => import("../components/TheFooter/Footer"), { ssr: false });
const ChatBot = dynamic(() => import("../components/ChatBot/ChatBot"), { ssr: false });

const PAGE_COLOR = '#FFFFFF';

export default function MachineLearningLearnPage() {
  return (
    <LanguageProvider>
      <ChatBotProvider>
        <ActiveSectionProvider value={{ activeSection: 'machine-learning', activeColor: PAGE_COLOR }}>
          <Header />
          <main id="main-content">
            <MachineLearningSection id="machine-learning" />
          </main>
          <Footer />
          <ChatBot />
        </ActiveSectionProvider>
      </ChatBotProvider>
    </LanguageProvider>
  );
}
