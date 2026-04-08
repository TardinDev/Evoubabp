'use client'

import { FaClock, FaUsers, FaGraduationCap, FaDownload, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
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
  HeroButtonsContainer,
  ContactButton,
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
  CTAContainer,
  AdvancedFeaturesComponent
} from "./MobileFormationComponents";

// Hero Section Component
export const HeroSection = ({ onStartFormation }) => {
  const handleContactClick = () => {
    const subject = encodeURIComponent("Question sur la formation React Native");
    const body = encodeURIComponent(`Bonjour,

J'ai une question concernant votre formation React Native Mobile.

Ma question :
[Ecrivez votre question ici]

Merci de votre reponse rapide !

Cordialement`);

    window.location.href = `mailto:tardindavy@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <HeaderSection>
      <Container>
        <BackLink as={Link} href="/formations">{"\u2190"} Retour aux formations</BackLink>
        <HeroContent>
          <HeroImage>
            <AppMockup
              src="/imagesFormations/RunSport.png"
              alt="Application RunSport - Formation React Native"
            />
          </HeroImage>
          <HeroText>
            <Badge>{"\u{1F3AF}"} Formation Gratuite</Badge>
            <HeroTitle>
              Developpement Mobile avec <GradientText>React-Native</GradientText>
            </HeroTitle>
            <HeroDescription>
              Apprenez a creer 4 applications mobiles completes : RunSport (E-commerce), SocialConnect
              (Reseau social), SkyBooker(Reservation voyage) et SendMoney (Fintech). Une formation
              qui vous enseigne React-Native, les APIs, le backend, Git/GitHub et toutes les technologies du developpement mobile moderne.
            </HeroDescription>
            <HeroStats>
              <Stat>
                <FaClock />
                <span>10,5 heures</span>
              </Stat>
              <Stat>
                <FaUsers />
                <span>58 etudiants</span>
              </Stat>
              <Stat>
                <FaGraduationCap />
                <span>Debutant</span>
              </Stat>
            </HeroStats>

            <HeroButtonsContainer>
              <CTAButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onStartFormation}
              >
                <FaDownload />
                Commencer Maintenant - Gratuit
              </CTAButton>

              <ContactButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
              >
                <FaEnvelope />
                Une question ? Je reponds immediatement !
              </ContactButton>
            </HeroButtonsContainer>
          </HeroText>
        </HeroContent>
      </Container>
    </HeaderSection>
  );
};

// Overview Section Component
export const OverviewSection = ({ concepts, features, techStacks }) => (
  <>
    <Section>
      <SectionTitle>{"\u{1F3AF}"} Ce que vous allez apprendre</SectionTitle>
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
      <SectionTitle>{"\u{1F680}"} Avantages de cette formation</SectionTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <Feature key={index}>{feature}</Feature>
        ))}
      </FeaturesGrid>
    </Section>

    <AdvancedFeaturesComponent
      features={[
        {
          icon: "\u{1F916}",
          title: "IA pour recommandation personnalisee",
          description: "Integrez l'intelligence artificielle pour proposer du contenu personnalise a vos utilisateurs"
        },
        {
          icon: "\u{1F446}",
          title: "Auth biometrique",
          description: "Authentification securisee par empreinte digitale et reconnaissance faciale"
        },
        {
          icon: "\u{1F4B3}",
          title: "Paiement Stripe + Apple Pay",
          description: "Integration complete des systemes de paiement modernes et securises"
        },
        {
          icon: "\u{1F319}",
          title: "Mode sombre automatique",
          description: "Theme adaptatif base sur les preferences systeme de l'utilisateur"
        },
        {
          icon: "\u{1F514}",
          title: "Notifications push segmentees",
          description: "Systeme de notifications ciblees et personnalisees par segments d'utilisateurs"
        },
        {
          icon: "\u{1F4AC}",
          title: "Chat support IA",
          description: "Assistant virtuel intelligent pour le support client 24/7"
        },
        {
          icon: "\u2728",
          title: "Animations fluides et feed interactif",
          description: "Interface utilisateur moderne avec animations et interactions fluides"
        },
        {
          icon: "\u{1F4CD}",
          title: "Chat utilisateur + favoris + geoloc boutique",
          description: "Systeme social complet avec geolocalisation et fonctionnalites communautaires"
        }
      ]}
    />

    <Section>
      <SectionTitle>{"\u26A1"} Technologies modernes pour developper une app</SectionTitle>
      <ProjectDescription>
        <p>
          Maitrisez les technologies les plus recentes et demandees du marche pour creer
          des applications mobiles performantes et evolutives comme les grandes entreprises tech.
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
    <SectionTitle>{"\u{1F4DA}"} Programme de formation</SectionTitle>
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
