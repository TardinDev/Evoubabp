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

const HowItWorks = dynamic(() => import("../components/projects/HowItWorks12"), { ssr: false });
const AppShowcaseSection = dynamic(() => import("../components/ShowCaseprojects/AppShowcaseSection"), { ssr: false });
const FullStackNodeSection = dynamic(() => import("../components/FullStack/FullStackNodeSection"), { ssr: false });
const FullStackSpringSection = dynamic(() => import("../components/FullStack/FullStackSpringSection"), { ssr: false });
const FullStackFlyTaxiSection = dynamic(() => import("../components/FullStack/FullStackFlyTaxiSection"), { ssr: false });
const DevToolsSectionTest = dynamic(() => import("../components/DevTools/DevToolsSectionTest"), { ssr: false });
const AISection = dynamic(() => import("../components/AI/AISection"), { ssr: false });
const DockerSection = dynamic(() => import("../components/Docker/DockerSection"), { ssr: false });
const FrontendSection = dynamic(() => import("../components/Frontend/FrontendSection"), { ssr: false });
const BackendSection = dynamic(() => import("../components/Backend/BackendSection"), { ssr: false });
const TechUsed = dynamic(() => import("../components/TechUsed/TechUsed"), { ssr: false });
const ToolsSection = dynamic(() => import("../components/Tools/ToolsSection"), { ssr: false });
const Footer = dynamic(() => import("../components/TheFooter/Footer"), { ssr: false });
const ChatBot = dynamic(() => import("../components/ChatBot/ChatBot"), { ssr: false });
const TestimonialsSection = dynamic(() => import("../components/Testimonials/TestimonialsSection"), { ssr: false });
const ContactSection = dynamic(() => import("../components/Contact/ContactSection"), { ssr: false });

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
        <Header />
        <main id="main-content">
          <section id="header-section" aria-label="Présentation">
            <UnderHeader />
          </section>
          <section id="current-project" aria-label="Projet en cours">
            <CurrentProject />
          </section>
          <Projects id="projects" />
          <ChatBot />
          <HowItWorks id="howItWorks" />
          <section id="app-showcase" aria-label="Vitrine d'applications">
            <AppShowcaseSection />
          </section>
          <section id="tech-used" aria-label="Technologies utilisées">
            <TechUsed />
          </section>
          <section id="testimonials" aria-label="Témoignages">
            <TestimonialsSection />
          </section>
          <section id="fullstack-node" aria-label="Projet Node.js">
            <FullStackNodeSection />
          </section>
          <section id="fullstack-spring" aria-label="Projet Spring Boot">
            <FullStackSpringSection />
          </section>
          <section id="fullstack-flytaxi" aria-label="Projet Fly & Taxi">
            <FullStackFlyTaxiSection />
          </section>
          <section id="dev-tools" aria-label="Outils de développement">
            <DevToolsSectionTest />
          </section>
          <section id="tools-section" aria-label="Outils">
            <ToolsSection />
          </section>
          <FrontendSection id="frontend-tech" />
          <BackendSection id="backend-tech" />
          <AISection id="ai-innovation" />
          <DockerSection id="docker-devops" />
          <section id="contact" aria-label="Contact">
            <ContactSection />
          </section>
        </main>
        <div id="footer">
          <Footer />
        </div>
      </ActiveSectionProvider>
    </ChatBotProvider>
    </LanguageProvider>
  )
}
