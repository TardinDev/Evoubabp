import PropTypes from "prop-types";
import {
  ProjectSection,
  SectionTitle,
  ProjectDescription,
  ProjectImage,
  ProjectImageSmall,
  TechStackComponent,
  LockedContentWrapper,
  LockedProjectOverlay,
  BlurredContent
} from "./MobileFormationComponents";

// Free Project Component (RunSport)
export const FreeProjectSection = ({ project }) => (
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
export const ProjectSectionComponent = ({ project, onPremiumClick }) => {
  if (project.isPremium) {
    return <PremiumProjectSection project={project} onPremiumClick={onPremiumClick} />;
  }
  return <FreeProjectSection project={project} />;
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
  project: projectPropType.isRequired
};

PremiumProjectSection.propTypes = {
  project: projectPropType.isRequired,
  onPremiumClick: PropTypes.func.isRequired
};

ProjectSectionComponent.propTypes = {
  project: projectPropType.isRequired,
  onPremiumClick: PropTypes.func.isRequired
}; 