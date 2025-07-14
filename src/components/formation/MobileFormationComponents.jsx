import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCheck, FaLock } from "react-icons/fa";
import PropTypes from "prop-types";

// === LAYOUT COMPONENTS ===
export const PageWrapper = styled.div`
  background: white;
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const HeaderSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 0 4rem;
`;

export const ContentSection = styled.section`
  padding: 4rem 0;
  
  &:has(.full-width-cta) {
    padding-bottom: 0;
  }
`;

// === HERO COMPONENTS ===
export const BackLink = styled(motion.a)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-bottom: 2rem;
  display: inline-block;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

export const HeroImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const AppMockup = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 500px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

export const HeroText = styled.div``;

export const Badge = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
`;

export const HeroStats = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  
  svg {
    color: #f093fb;
  }
`;

export const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(240, 147, 251, 0.4);
  }
`;

// === TAB NAVIGATION ===
export const TabNavigation = styled.section`
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const TabList = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  
  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`;

export const Tab = styled.button`
  background: ${props => props.active ? '#667eea' : 'transparent'};
  color: ${props => props.active ? 'white' : '#64748b'};
  border: 1px solid ${props => props.active ? '#667eea' : '#e2e8f0'};
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: ${props => props.active ? '#667eea' : '#f8fafc'};
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

export const TabContent = styled(motion.div)``;

// === CONTENT SECTIONS ===
export const Section = styled.div`
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1e293b;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// === CONCEPT CARDS ===
export const ConceptsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export const ConceptCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const ConceptIcon = styled.div`
  background: linear-gradient(135deg, #667eea, #764ba2);
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

export const ConceptTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1e293b;
`;

export const ConceptDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

// === FEATURES ===
export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

export const Feature = styled.div`
  padding: 1rem;
  background: #f8fafc;
  border-radius: 10px;
  font-weight: 500;
  color: #475569;
`;

// === TECH STACK ===
export const TechStack = styled.div`
  margin-top: 2rem;
`;

export const TechTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2d3748;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const TechItem = styled.span`
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
`;

// === CURRICULUM ===
export const CurriculumSection = styled.div`
  background: #f8fafc;
  border-radius: 15px;
  padding: 2rem;
`;

export const ModuleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Module = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
`;

export const ModuleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const ModuleNumber = styled.div`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
`;

export const ModuleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  flex: 1;
`;

export const ModuleDuration = styled.div`
  background: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const LessonList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Lesson = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #475569;
  
  svg {
    color: #10b981;
    flex-shrink: 0;
  }
`;

// === PROJECT SECTIONS ===
export const ProjectSection = styled.div`
  position: relative;
`;

export const ProjectDescription = styled.div`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 2rem;
`;

export const ProjectImage = styled.div`
  text-align: center;
  margin: 2rem 0;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const ProjectImageSmall = styled.div`
  text-align: center;
  margin: 2rem 0;
  
  img {
    max-width: 50%;
    max-height: 400px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    object-fit: contain;
    
    @media (max-width: 768px) {
      max-width: 70%;
      max-height: 350px;
    }
  }
`;

// === LOCKED CONTENT ===
export const LockedContentWrapper = styled.div`
  position: relative;
`;

export const LockedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
  border-radius: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(15, 23, 42, 0.85);
  }
`;

export const LockIcon = styled.div`
  font-size: 3rem;
  color: #3b82f6;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;

export const UnlockText = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const UnlockSubtext = styled.p`
  font-size: 1rem;
  color: #94a3b8;
  text-align: center;
  margin: 0;
`;

export const BlurredContent = styled.div`
  filter: blur(1.5px);
  pointer-events: none;
  opacity: 0.85;
`;

// === CTA SECTIONS ===
export const CTASectionFullWidth = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 4rem 0 4rem 0;
  text-align: center;
  color: white;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  position: relative;

  h2 {
    color: white;
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    opacity: 1;
  }
`;

export const FullWidthCTAWrapper = styled.div`
  margin: 3rem 0 0 0;
  
  &.full-width-cta {
    margin-bottom: 0;
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

// === UTILITY COMPONENTS ===
export const TechStackComponent = ({ title, items }) => (
  <TechStack>
    <TechTitle>{title}</TechTitle>
    <TechList>
      {items.map((item, index) => (
        <TechItem key={index}>{item}</TechItem>
      ))}
    </TechList>
  </TechStack>
);

export const ModuleComponent = ({ module }) => (
  <Module>
    <ModuleHeader>
      <ModuleNumber>{module.number}</ModuleNumber>
      <ModuleTitle>{module.title}</ModuleTitle>
      <ModuleDuration>{module.duration}</ModuleDuration>
    </ModuleHeader>
    <LessonList>
      {module.lessons.map((lesson, index) => (
        <Lesson key={index}>
          <FaCheck />
          {lesson}
        </Lesson>
      ))}
    </LessonList>
  </Module>
);

export const LockedProjectOverlay = ({ onPremiumClick }) => (
  <LockedOverlay onClick={onPremiumClick}>
    <LockIcon>
      <FaLock />
    </LockIcon>
    <UnlockText>Contenu Premium</UnlockText>
    <UnlockSubtext>Cliquez pour déverrouiller ce projet</UnlockSubtext>
  </LockedOverlay>
);

// PropTypes
TechStackComponent.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

ModuleComponent.propTypes = {
  module: PropTypes.shape({
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    lessons: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

LockedProjectOverlay.propTypes = {
  onPremiumClick: PropTypes.func.isRequired
}; 