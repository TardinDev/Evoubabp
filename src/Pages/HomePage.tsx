import CurrentProject from "../components/Header/CurrentProject";
import Header from "../components/Header/Header";
import UnderHeader from "../components/Header/UnderHeader";
import HowItWorks from "../components/projects/HowItWorks12";
import Projects from "../components/projects/Projects";
import AppShowcaseSection from "../components/ShowCaseprojects/AppShowcaseSection";
import AISection from "../components/AI/AISection";
import TechUsed from "../components/TechUsed/TechUsed";
import Footer from "../components/TheFooter/Footer";

export default function HomePage() {
  console.log('HomePage rendering FULL...')
  return (
    <div>
      <Header/>
      <UnderHeader/>
      <CurrentProject/>
      <Projects id="projects"/>
      <HowItWorks id="howItWorks"/>
      <AppShowcaseSection />
      <AISection id="ai-innovation"/>
      <TechUsed/>
      <Footer/>
    </div>
  )
}
