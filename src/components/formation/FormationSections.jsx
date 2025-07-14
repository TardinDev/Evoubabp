import { FaClock, FaUsers, FaGraduationCap, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  HeaderSection,
  Container,
  BackLink,
  HeroContent,
  HeroImage,
  AppMockup,
  HeroText,
  Badge,
  HeroTitle,
  GradientText,
  HeroDescription,
  HeroStats,
  Stat,
  CTAButton,
  Section,
  SectionTitle,
  ConceptsGrid,
  ConceptCard,
  ConceptIcon,
  ConceptTitle,
  ConceptDescription,
  FeaturesGrid,
  Feature,
  ProjectDescription,
  TechStackComponent,
  CurriculumSection,
  ModuleList,
  ModuleComponent,
  CTASectionFullWidth,
  FullWidthCTAWrapper,
  CTAContainer
} from "./MobileFormationComponents";

// Hero Section Component
export const HeroSection = ({ onStartFormation }) => (
  <HeaderSection>
    <Container>
      <BackLink as={Link} to="/formations">← Retour aux formations</BackLink>
      <HeroContent>
        <HeroImage>
          <AppMockup 
            src="/imagesFormations/RunSport.png" 
            alt="Application RunSport - Formation React Native"
          />
        </HeroImage>
        <HeroText>
          <Badge>🎯 Formation Gratuite</Badge>
          <HeroTitle>
            Développement Mobile avec <GradientText>React Native</GradientText>
          </HeroTitle>
          <HeroDescription>
            Apprenez à créer 4 applications mobiles complètes : RunSport (E-commerce), SocialConnect 
            (Réseau social), SkyBooker (Réservation voyage) et SendMoney (Fintech). Une formation gratuite 
            qui vous enseigne React Native, les APIs backend, Git/GitHub et toutes les technologies du développement mobile moderne.
          </HeroDescription>
          <HeroStats>
            <Stat>
              <FaClock />
              <span>10,5 heures</span>
            </Stat>
            <Stat>
              <FaUsers />
              <span>58 étudiants</span>
            </Stat>
            <Stat>
              <FaGraduationCap />
              <span>Débutant</span>
            </Stat>
          </HeroStats>
          <CTAButton 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            onClick={onStartFormation}
          >
            <FaDownload />
            Commencer Maintenant - Gratuit
          </CTAButton>
        </HeroText>
      </HeroContent>
    </Container>
  </HeaderSection>
);

// Overview Section Component
export const OverviewSection = ({ concepts, features, techStacks }) => (
  <>
    <Section>
      <SectionTitle>🎯 Ce que vous allez apprendre</SectionTitle>
      <ConceptsGrid>
        {concepts.map((concept, index) => (
          <ConceptCard key={index}>
            <ConceptIcon>
              <concept.icon />
            </ConceptIcon>
            <ConceptTitle>{concept.title}</ConceptTitle>
            <ConceptDescription>{concept.description}</ConceptDescription>
          </ConceptCard>
        ))}
      </ConceptsGrid>
    </Section>

    <Section>
      <SectionTitle>🚀 Avantages de cette formation</SectionTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <Feature key={index}>{feature}</Feature>
        ))}
      </FeaturesGrid>
    </Section>

    <Section>
      <SectionTitle>⚡ Technologies modernes pour développer une app</SectionTitle>
      <ProjectDescription>
        <p>
          Maîtrisez les technologies les plus récentes et demandées du marché pour créer 
          des applications mobiles performantes et évolutives comme les grandes entreprises tech.
        </p>
      </ProjectDescription>

      <TechStackComponent title={techStacks.frontend.title} items={techStacks.frontend.items} />
      <TechStackComponent title={techStacks.backend.title} items={techStacks.backend.items} />
      <TechStackComponent title={techStacks.stateStorage.title} items={techStacks.stateStorage.items} />
      <TechStackComponent title={techStacks.tools.title} items={techStacks.tools.items} />
    </Section>
  </>
);

// Curriculum Section Component
export const CurriculumSectionComponent = ({ modules }) => (
  <CurriculumSection>
    <SectionTitle>📚 Programme de formation</SectionTitle>
    <ModuleList>
      {modules.map((module, index) => (
        <ModuleComponent key={index} module={module} />
      ))}
    </ModuleList>
  </CurriculumSection>
);

// CTA Section Component
export const CTASection = ({ onStartFormation, title, description }) => (
  <FullWidthCTAWrapper className="full-width-cta">
    <CTASectionFullWidth>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <ProjectDescription>
          <p>{description}</p>
        </ProjectDescription>
        <CTAContainer>
          <CTAButton 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            onClick={onStartFormation}
          >
            <FaDownload />
            Commencer Maintenant - Gratuit
          </CTAButton>
        </CTAContainer>
      </Container>
    </CTASectionFullWidth>
  </FullWidthCTAWrapper>
);

// PropTypes
HeroSection.propTypes = {
  onStartFormation: PropTypes.func.isRequired
};

OverviewSection.propTypes = {
  concepts: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  techStacks: PropTypes.shape({
    frontend: PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    backend: PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    stateStorage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    tools: PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  }).isRequired
};

CurriculumSectionComponent.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    lessons: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired
};

CTASection.propTypes = {
  onStartFormation: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}; 