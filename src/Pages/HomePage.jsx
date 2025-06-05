import CurrentProject from "../components/Header/CurrentProject";
import Header from "../components/Header/Header";
import UnderHeader from "../components/Header/UnderHeader";
import HowItWorks from "../components/projects/HowItWorks12";
import Projects from "../components/projects/Projects";
import Footer from "../components/TheFooter/Footer";
import ApplicationsSection from "../components/Applications/Applications";

export default function HomePage() {
  return (
    <div>
      <Header/>
      <UnderHeader/>
      <CurrentProject/>
      <Projects id="projects"/>
      <HowItWorks id="howItWorks"/>
      <ApplicationsSection id="applications"/>
      {/* <ShowSection/> */}

      <Footer/>
    </div>
  )
}
