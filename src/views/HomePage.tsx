'use client'

import dynamic from "next/dynamic";
import Header from "../components/Header/Header";
import UnderHeader from "../components/Header/UnderHeader";
import CurrentProject from "../components/Header/CurrentProject";
import Projects from "../components/projects/Projects";
import LazyMount from "../components/LazyMount";
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
  const sections = [
    { id: 'header-section', color: '#F8F7F1' },
    { id: 'under-header', color: '#FFF5E1' },
    { id: 'current-project', color: '#E8F4F8' },
    { id: 'projects', color: '#F0E6FF' },
    { id: 'howItWorks', color: '#E8F5E9' },
    { id: 'app-showcase', color: '#FFF3E0' },
    { id: 'tech-used', color: '#0f0c29' },
    { id: 'testimonials', color: '#F8FAFC' },
    { id: 'fullstack-node', color: '#E8F5E9' },
    { id: 'fullstack-spring', color: '#F3E5F5' },
    { id: 'fullstack-flytaxi', color: '#FFE8DF' },
    { id: 'dev-tools', color: '#E3F2FD' },
    { id: 'tools-section', color: '#FCE4EC' },
    { id: 'frontend-tech', color: '#E1F5FE' },
    { id: 'backend-tech', color: '#E8F5E9' },
    { id: 'ai-innovation', color: '#EDE7F6' },
    { id: 'docker-devops', color: '#E3F2FD' },
    { id: 'contact', color: '#F3E5F5' },
    { id: 'footer', color: '#ECEFF1' },
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
          <LazyMount minHeight={400}><ChatBot /></LazyMount>
          <LazyMount minHeight={600}><HowItWorks id="howItWorks" /></LazyMount>
          <LazyMount as="section" id="app-showcase" ariaLabel="Vitrine d'applications" minHeight={600}>
            <AppShowcaseSection />
          </LazyMount>
          <LazyMount as="section" id="tech-used" ariaLabel="Technologies utilisées" minHeight={500}>
            <TechUsed />
          </LazyMount>
          <LazyMount as="section" id="testimonials" ariaLabel="Témoignages" minHeight={500}>
            <TestimonialsSection />
          </LazyMount>
          <LazyMount as="section" id="fullstack-node" ariaLabel="Projet Node.js" minHeight={700}>
            <FullStackNodeSection />
          </LazyMount>
          <LazyMount as="section" id="fullstack-spring" ariaLabel="Projet Spring Boot" minHeight={700}>
            <FullStackSpringSection />
          </LazyMount>
          <LazyMount as="section" id="fullstack-flytaxi" ariaLabel="Projet Fly & Taxi" minHeight={700}>
            <FullStackFlyTaxiSection />
          </LazyMount>
          <LazyMount as="section" id="dev-tools" ariaLabel="Outils de développement" minHeight={500}>
            <DevToolsSectionTest />
          </LazyMount>
          <LazyMount as="section" id="tools-section" ariaLabel="Outils" minHeight={500}>
            <ToolsSection />
          </LazyMount>
          <LazyMount minHeight={500}><FrontendSection id="frontend-tech" /></LazyMount>
          <LazyMount minHeight={500}><BackendSection id="backend-tech" /></LazyMount>
          <LazyMount minHeight={500}><AISection id="ai-innovation" /></LazyMount>
          <LazyMount minHeight={500}><DockerSection id="docker-devops" /></LazyMount>
          <LazyMount as="section" id="contact" ariaLabel="Contact" minHeight={500}>
            <ContactSection />
          </LazyMount>
        </main>
        <LazyMount id="footer" minHeight={400}>
          <Footer />
        </LazyMount>
      </ActiveSectionProvider>
    </ChatBotProvider>
    </LanguageProvider>
  )
}
