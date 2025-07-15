import { useState } from "react";
import PropTypes from "prop-types";
import { FaPlay, FaCode, FaVideo } from "react-icons/fa";
import {
  ProjectSection,
  SectionTitle,
  ProjectDescription,
  ProjectImage,
  ProjectImageSmall,
  TechStackComponent,
  LockedContentWrapper,
  LockedProjectOverlay,
  BlurredContent,
  CourseContainer,
  CourseInnerWrapper,
  CourseSidebar,
  CourseMainContent,
  SectionList,
  SectionItem,
  CodeBlock,
  SidebarTitle,
  VideoContainer,
  VideoWrapper,
  VideoPlaceholder,
  MainContentTitle,
  LessonSection,
  ContentItem,
  FinalCodeButton
} from "./MobileFormationComponents";

// Course Interactive Component
const CourseInteractive = ({ courseData }) => {
  const [activeSection, setActiveSection] = useState(courseData.sections[0]?.id || "");
  const [showFinalCode, setShowFinalCode] = useState(false);
  
  const currentSection = courseData.sections.find(section => section.id === activeSection);
  
  return (
    <CourseContainer>
      <CourseInnerWrapper>
        {/* Sidebar des sections */}
        <CourseSidebar>
          <SidebarTitle>📚 Contenu du cours</SidebarTitle>
          <SectionList>
            {courseData.sections.map((section) => (
              <SectionItem
                key={section.id}
                active={activeSection === section.id}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </SectionItem>
            ))}
          </SectionList>
        </CourseSidebar>
        
        {/* Contenu principal avec vidéos */}
        <CourseMainContent>
          {currentSection && (
            <>
              <MainContentTitle>{currentSection.title}</MainContentTitle>
              
              <VideoContainer>
                <FinalCodeButton 
                  active={showFinalCode}
                  onClick={() => setShowFinalCode(!showFinalCode)}
                >
                  {showFinalCode ? <FaVideo /> : <FaCode />}
                  {showFinalCode ? 'Retour Vidéo' : 'Code Final'}
                </FinalCodeButton>
                
                {!showFinalCode ? (
                  <VideoWrapper>
                    <VideoPlaceholder>
                      <FaPlay />
                      <p>Vidéo du cours - {currentSection.title}</p>
                      {currentSection.duration && (
                        <div className="duration">📹 {currentSection.duration}</div>
                      )}
                    </VideoPlaceholder>
                  </VideoWrapper>
                ) : (
                  <div style={{ 
                    background: '#0f172a',
                    border: '1px solid #334155',
                    borderRadius: '0.375rem',
                    padding: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <h5 style={{ 
                      color: '#06b6d4', 
                      marginBottom: '1rem',
                      fontSize: '1rem',
                      fontWeight: '600'
                    }}>
                      🎯 Code final de cette section
                    </h5>
                    <CodeBlock>
                      {currentSection.finalCode || currentSection.code}
                    </CodeBlock>
                  </div>
                )}
              </VideoContainer>
              
              <LessonSection>
                <ContentItem>
                  <h5>⏱️ Durée estimée</h5>
                  <p>{currentSection.duration || "15-30 minutes selon votre niveau"}</p>
                </ContentItem>
              </LessonSection>
            </>
          )}
        </CourseMainContent>
      </CourseInnerWrapper>
    </CourseContainer>
  );
};

CourseInteractive.propTypes = {
  courseData: PropTypes.shape({
    sections: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired
    })).isRequired
  }).isRequired
};

// Free Project Component (RunSport)
export const FreeProjectSection = ({ project, courseData }) => (
  <ProjectSection>
    <SectionTitle>{project.title}</SectionTitle>
    <ProjectDescription>
      <p>{project.description}</p>
    </ProjectDescription>
    
    <ProjectImage>
      <img src={project.image} alt={project.alt} />
    </ProjectImage>

    <TechStackComponent 
      title="🛠️ Technologies utilisées" 
      items={project.technologies} 
    />
    
    {courseData && (
      <>
        <div style={{ 
          marginTop: '3rem', 
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <a 
            href="https://github.com/tardyDev/RunSport-Assets/archive/refs/heads/main.zip"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            📦 Télécharger les assets
          </a>
        </div>
        <CourseInteractive courseData={courseData} />
      </>
    )}
  </ProjectSection>
);

// Premium Project Component (Social, Travel, SendMoney)
export const PremiumProjectSection = ({ project, onPremiumClick }) => (
  <ProjectSection>
    <SectionTitle>{project.title}</SectionTitle>
    <ProjectDescription>
      <p>{project.description}</p>
    </ProjectDescription>
    
    <LockedContentWrapper>
      <LockedProjectOverlay onPremiumClick={onPremiumClick} />
      
      <BlurredContent>
        {project.isSmallImage ? (
          <ProjectImageSmall>
            <img src={project.image} alt={project.alt} />
          </ProjectImageSmall>
        ) : (
          <ProjectImage>
            <img src={project.image} alt={project.alt} />
          </ProjectImage>
        )}

        <TechStackComponent 
          title="🛠️ Technologies utilisées" 
          items={project.technologies} 
        />

        {project.features && (
          <TechStackComponent 
            title="✨ Fonctionnalités principales" 
            items={project.features} 
          />
        )}

        {project.securityFeatures && (
          <TechStackComponent 
            title="🔒 Sécurité & Conformité" 
            items={project.securityFeatures} 
          />
        )}
      </BlurredContent>
    </LockedContentWrapper>
  </ProjectSection>
);

// Generic Project Component
export const ProjectSectionComponent = ({ project, onPremiumClick, courseData }) => {
  if (project.isPremium) {
    return <PremiumProjectSection project={project} onPremiumClick={onPremiumClick} />;
  }
  return <FreeProjectSection project={project} courseData={courseData} />;
};

// PropTypes
const projectPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  securityFeatures: PropTypes.arrayOf(PropTypes.string),
  isPremium: PropTypes.bool.isRequired,
  isSmallImage: PropTypes.bool
});

FreeProjectSection.propTypes = {
  project: projectPropType.isRequired,
  courseData: PropTypes.shape({
    sections: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired
    })).isRequired
  })
};

PremiumProjectSection.propTypes = {
  project: projectPropType.isRequired,
  onPremiumClick: PropTypes.func.isRequired
};

ProjectSectionComponent.propTypes = {
  project: projectPropType.isRequired,
  onPremiumClick: PropTypes.func.isRequired,
  courseData: PropTypes.shape({
    sections: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired
    })).isRequired
  })
}; 