import CurrentProject from "../components/Header/CurrentProject";
import Header from "../components/Header/Header";
import UnderHeader from "../components/Header/UnderHeader";
import HowItWorks from "../components/projects/HowItWorks12";
import Projects from "../components/projects/Projects";
import AppShowcaseSection from "../components/ShowCaseprojects/AppShowcaseSection";
import FullStackNodeSection from "../components/FullStack/FullStackNodeSection";
import FullStackSpringSection from "../components/FullStack/FullStackSpringSection";
// import DevToolsSection from "../components/DevTools/DevToolsSection";
import DevToolsSectionTest from "../components/DevTools/DevToolsSectionTest";
import AISection from "../components/AI/AISection";
import FrontendSection from "../components/Frontend/FrontendSection";
import BackendSection from "../components/Backend/BackendSection";
import TechUsed from "../components/TechUsed/TechUsed";
import ToolsSection from "../components/Tools/ToolsSection";
import Footer from "../components/TheFooter/Footer";
import ChatBot from "../components/ChatBot/ChatBot";
import { ActiveSectionProvider } from "../contexts/ActiveSectionContext";
import { ChatBotProvider } from "../contexts/ChatBotContext";
import useActiveSection from "../hooks/useActiveSection";

export default function HomePage() {
  // Définir les sections avec leurs couleurs
  const sections = [
    { id: 'header-section', color: '#F8F7F1' }, // Couleur par défaut
    { id: 'under-header', color: '#FFF5E1' }, // Beige clair
    { id: 'current-project', color: '#E8F4F8' }, // Bleu très clair
    { id: 'projects', color: '#F0E6FF' }, // Violet clair
    { id: 'howItWorks', color: '#E8F5E9' }, // Vert très clair
    { id: 'app-showcase', color: '#FFF3E0' }, // Orange clair
    { id: 'fullstack-node', color: '#E8F5E9' }, // Vert clair (Node.js)
    { id: 'fullstack-spring', color: '#F3E5F5' }, // Violet clair (Spring)
    { id: 'dev-tools', color: '#E3F2FD' }, // Bleu clair
    { id: 'tools-section', color: '#FCE4EC' }, // Rose clair
    { id: 'frontend-tech', color: '#E1F5FE' }, // Bleu cyan clair (React/TypeScript/Tailwind)
    { id: 'backend-tech', color: '#E8F5E9' }, // Vert clair (Node.js/Spring)
    { id: 'ai-innovation', color: '#EDE7F6' }, // Violet clair (IA)
    { id: 'tech-used', color: '#FFF8E1' }, // Jaune clair
    { id: 'footer', color: '#ECEFF1' }, // Gris clair
  ];

  const { activeSection, activeColor } = useActiveSection(sections);

  return (
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
          <div id="fullstack-node">
            <FullStackNodeSection />
          </div>
          <div id="fullstack-spring">
            <FullStackSpringSection />
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
          <div id="tech-used">
            <TechUsed />
          </div>
          <div id="footer">
            <Footer />
          </div>

        </div>
      </ActiveSectionProvider>
    </ChatBotProvider>
  )
}
