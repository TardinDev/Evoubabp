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
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
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
    color: #06b6d4;
  }
`;

export const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
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
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
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
  border-radius: 0.375rem;
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
`;

export const ConceptCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const ConceptIcon = styled.div`
  background: linear-gradient(135deg, #667eea, #764ba2);
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  color: white;
  font-size: 1.25rem;
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

// === COURSE CONTENT ===
export const CourseContainer = styled.div`
  margin-top: 1rem;
  background: #0f172a;
  padding: 2rem 0;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  position: relative;
  min-height: 600px;
  
  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: 500px;
  }
`;

export const CourseInnerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 250px 1fr;
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
`;

export const CourseSidebar = styled.div`
  background: #1e293b;
  border-radius: 0.375rem;
  padding: 1.5rem;
  height: fit-content;
  border: 1px solid #334155;
  
  @media (max-width: 768px) {
    order: 3;
  }
`;

export const CourseMainContent = styled.div`
  background: #1e293b;
  border-radius: 0.375rem;
  padding: 2rem;
  border: 1px solid #334155;
  
  @media (max-width: 1024px) {
    order: 1;
  }
  
  @media (max-width: 768px) {
    order: 1;
  }
`;



export const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SectionItem = styled.button`
  background: ${props => props.active ? '#3b82f6' : '#0f172a'};
  color: ${props => props.active ? 'white' : '#e2e8f0'};
  border: 1px solid ${props => props.active ? '#3b82f6' : '#475569'};
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  
  &:hover {
    background: ${props => props.active ? '#2563eb' : '#334155'};
    border-color: #3b82f6;
    color: white;
  }
`;



export const CodeBlock = styled.pre`
  background: #0f172a;
  color: #e2e8f0;
  padding: 1.5rem;
  border-radius: 0.375rem;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  border: 1px solid #334155;
  
  .comment {
    color: #64748b;
  }
  
  .keyword {
    color: #60a5fa;
  }
  
  .string {
    color: #34d399;
  }
`;



export const SidebarTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #f1f5f9;
  margin-bottom: 1rem;
`;

export const VideoContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-radius: 0.375rem;
  border: 1px solid #334155;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
  }
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const VideoPlaceholder = styled.div`
  color: #64748b;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 2rem;
  
  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #06b6d4;
    filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.3));
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 500;
  }
  
  .duration {
    display: inline-block;
    background: rgba(6, 182, 212, 0.2);
    color: #06b6d4;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    border: 1px solid rgba(6, 182, 212, 0.3);
  }
`;

export const MainContentTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #f1f5f9;
  margin-bottom: 1.5rem;
`;

export const LessonSection = styled.div`
  margin-bottom: 2rem;
`;

export const ContentItem = styled.div`
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 0.375rem;
  padding: 1rem;
  margin-bottom: 1rem;
  
  h5 {
    color: #e2e8f0;
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  
  p {
    color: #94a3b8;
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const FinalCodeButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.active ? '#06b6d4' : '#1e293b'};
  color: ${props => props.active ? '#0f172a' : '#e2e8f0'};
  border: 1px solid ${props => props.active ? '#06b6d4' : '#334155'};
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
  
  &:hover {
    background: ${props => props.active ? '#0891b2' : '#334155'};
    transform: translateY(-1px);
  }
  
  svg {
    font-size: 0.875rem;
  }
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