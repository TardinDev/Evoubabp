import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  Container,
  TabNavigation,
  TabList,
  Tab,
  ContentSection,
  TabContent
} from "../components/formation/MobileFormationComponents";
import { HeroSection, OverviewSection, CurriculumSectionComponent, CTASection } from "../components/formation/FormationSections";
import { ProjectSectionComponent } from "../components/formation/ProjectSections";
import { concepts, features, techStacks, modules, projects, tabs, runSportCourse, tiktokCourse } from "../utils/mobileFormationData";

export default function MobileFormationPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const handleStartFormation = () => {
    setActiveTab("project");
    // Scroll vers la section des onglets
    const tabSection = document.getElementById("tab-navigation");
    if (tabSection) {
      tabSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePremiumClick = () => {
    navigate("/payment");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <TabContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <OverviewSection 
              concepts={concepts}
              features={features}
              techStacks={techStacks}
            />
            <CTASection
              onStartFormation={handleStartFormation}
              title="🚀 Prêt à commencer ?"
              description="Rejoignez cette formation gratuite et développez 4 applications mobiles complètes. Commencez dès maintenant avec le projet RunSport et progressez à votre rythme !"
            />
          </TabContent>
        );

      case "curriculum":
        return (
          <TabContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CurriculumSectionComponent modules={modules} />
            <CTASection
              onStartFormation={handleStartFormation}
              title="🚀 Prêt à commencer ?"
              description="Vous avez maintenant une vue d'ensemble du programme complet. Lancez-vous dans le développement de votre première app mobile avec React Native !"
            />
          </TabContent>
        );

      case "tiktok":
        return (
          <TabContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectSectionComponent
              project={projects.tiktok}
              onPremiumClick={handlePremiumClick}
              courseData={tiktokCourse}
            />
          </TabContent>
        );

      case "project":
        return (
          <TabContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectSectionComponent
              project={projects.runSport}
              onPremiumClick={handlePremiumClick}
              courseData={runSportCourse}
            />
          </TabContent>
        );

      case "social":
        return (
          <TabContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectSectionComponent 
              project={projects.socialConnect}
              onPremiumClick={handlePremiumClick}
            />
          </TabContent>
        );

      case "travel":
        return (
          <TabContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectSectionComponent 
              project={projects.skyBooker}
              onPremiumClick={handlePremiumClick}
            />
          </TabContent>
        );

      case "sendmoney":
        return (
          <TabContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectSectionComponent 
              project={projects.sendMoney}
              onPremiumClick={handlePremiumClick}
            />
          </TabContent>
        );

      default:
        return null;
    }
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection onStartFormation={handleStartFormation} />

      {/* Navigation des onglets */}
      <TabNavigation id="tab-navigation">
        <Container>
          <TabList>
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>
        </Container>
      </TabNavigation>

      {/* Contenu des onglets */}
      <ContentSection>
        <Container>
          {renderTabContent()}
        </Container>
      </ContentSection>
    </PageWrapper>
  );
}