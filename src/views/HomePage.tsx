'use client'

import dynamic from "next/dynamic";
import Header from "../components/Header/Header";
import UnderHeader from "../components/Header/UnderHeader";
import CurrentProject from "../components/Header/CurrentProject";
import Projects from "../components/projects/Projects";
import { ActiveSectionProvider } from "../contexts/ActiveSectionContext";
import { ChatBotProvider } from "../contexts/ChatBotContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import useActiveSection from "../hooks/useActiveSection";

const HowItWorks = dynamic(() => import("../components/projects/HowItWorks12"));
const AppShowcaseSection = dynamic(() => import("../components/ShowCaseprojects/AppShowcaseSection"));
const FullStackNodeSection = dynamic(() => import("../components/FullStack/FullStackNodeSection"));
const FullStackSpringSection = dynamic(() => import("../components/FullStack/FullStackSpringSection"));
const FullStackFlyTaxiSection = dynamic(() => import("../components/FullStack/FullStackFlyTaxiSection"));
const DevToolsSectionTest = dynamic(() => import("../components/DevTools/DevToolsSectionTest"));
const AISection = dynamic(() => import("../components/AI/AISection"));
const DockerSection = dynamic(() => import("../components/Docker/DockerSection"));
const FrontendSection = dynamic(() => import("../components/Frontend/FrontendSection"));
const BackendSection = dynamic(() => import("../components/Backend/BackendSection"));
const TechUsed = dynamic(() => import("../components/TechUsed/TechUsed"));
const ToolsSection = dynamic(() => import("../components/Tools/ToolsSection"));
const Footer = dynamic(() => import("../components/TheFooter/Footer"));
const ChatBot = dynamic(() => import("../components/ChatBot/ChatBot"), { ssr: false });
const TestimonialsSection = dynamic(() => import("../components/Testimonials/TestimonialsSection"));
const ContactSection = dynamic(() => import("../components/Contact/ContactSection"));

export default function HomePage() {
  // Définir les sections avec leurs couleurs
  const sections = [
    { id: 'header-section', color: '#F8F7F1' }, // Couleur par défaut
    { id: 'under-header', color: '#FFF5E1' }, // Beige clair
    { id: 'current-project', color: '#E8F4F8' }, // Bleu très clair
    { id: 'projects', color: '#F0E6FF' }, // Violet clair
    { id: 'howItWorks', color: '#E8F5E9' }, // Vert très clair
    { id: 'app-showcase', color: '#FFF3E0' }, // Orange clair
    { id: 'tech-used', color: '#0f0c29' }, // Dark (Technologies)
    { id: 'testimonials', color: '#F8FAFC' }, // Gris très clair
    { id: 'fullstack-node', color: '#E8F5E9' }, // Vert clair (Node.js)
    { id: 'fullstack-spring', color: '#F3E5F5' }, // Violet clair (Spring)
    { id: 'fullstack-flytaxi', color: '#FFE8DF' }, // Orange clair (Fly & Taxi)
    { id: 'dev-tools', color: '#E3F2FD' }, // Bleu clair
    { id: 'tools-section', color: '#FCE4EC' }, // Rose clair
    { id: 'frontend-tech', color: '#E1F5FE' }, // Bleu cyan clair (React/TypeScript/Tailwind)
    { id: 'backend-tech', color: '#E8F5E9' }, // Vert clair (Node.js/Spring)
    { id: 'ai-innovation', color: '#EDE7F6' }, // Violet clair (IA)
    { id: 'docker-devops', color: '#E3F2FD' }, // Bleu clair (Docker)
    { id: 'contact', color: '#F3E5F5' }, // Violet clair (Contact)
    { id: 'footer', color: '#ECEFF1' }, // Gris clair
  ];

  const { activeSection, activeColor } = useActiveSection(sections);

  return (
    <LanguageProvider>
    <ChatBotProvider>
      <ActiveSectionProvider value={{ activeSection, activeColor }}>
        <div>
          <Header />
          <div id="header-section">
            <UnderHeader />
          </div>
          <div id="current-project">
            <CurrentProject />
          </div>
          <Projects id="projects" />
          <ChatBot />
          <HowItWorks id="howItWorks" />
          <div id="app-showcase">
            <AppShowcaseSection />
          </div>
          <div id="tech-used">
            <TechUsed />
          </div>
          <div id="testimonials">
            <TestimonialsSection />
          </div>
          <div id="fullstack-node">
            <FullStackNodeSection />
          </div>
          <div id="fullstack-spring">
            <FullStackSpringSection />
          </div>
          <div id="fullstack-flytaxi">
            <FullStackFlyTaxiSection />
          </div>
          <div id="dev-tools">
            <DevToolsSectionTest />
          </div>
          <div id="tools-section">
            <ToolsSection />
          </div>
          <FrontendSection id="frontend-tech" />
          <BackendSection id="backend-tech" />
          <AISection id="ai-innovation" />
          <DockerSection id="docker-devops" />
          <div id="contact">
            <ContactSection />
          </div>
          <div id="footer">
            <Footer />
          </div>

        </div>
      </ActiveSectionProvider>
    </ChatBotProvider>
    </LanguageProvider>
  )
}
