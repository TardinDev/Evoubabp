import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { FaReact, FaJava, FaShieldAlt, FaExternalLinkAlt, FaGithub, FaFileAlt, FaUserCheck, FaDatabase, FaLock } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiTypescript } from 'react-icons/si';

interface FullStackSpringSectionProps {
  id?: string;
}

const FullStackSpringSection: React.FC<FullStackSpringSectionProps> = ({ id }) => {
  const project = {
    title: 'Déclaration de Naissance',
    subtitle: 'Plateforme administrative officielle',
    year: '2024',
    description: 'Application web de gestion des déclarations de naissance permettant aux citoyens de déclarer une naissance en ligne et aux agents administratifs de traiter les demandes de manière sécurisée et efficace.',
    image: '/images/declaration-naissance.png',
    liveUrl: '#',
    githubUrl: '#',
    features: [
      {
        icon: <FaFileAlt />,
        title: 'Déclaration en ligne',
        desc: 'Formulaire guidé étape par étape'
      },
      {
        icon: <FaUserCheck />,
        title: 'Validation agents',
        desc: 'Interface de traitement sécurisée'
      },
      {
        icon: <FaLock />,
        title: 'Données protégées',
        desc: 'Chiffrement et conformité RGPD'
      },
    ],
    stack: {
      frontend: ['React', 'TypeScript', 'Material-UI', 'React Query'],
      backend: ['Java 17', 'Spring Boot', 'Spring Security', 'PostgreSQL']
    }
  };

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <SectionContainer id={id}>
        <BackgroundPattern />
        <GoldAccent />

        <ContentWrapper>
          <motion.div variants={fadeIn('up', 'tween', 0.05, 0.8)}>
            <SectionTitleArea>
              <SectionTagLine>FULLSTACK JAVA</SectionTagLine>
              <SectionMainTitle>
                <TitleAccent>React</TitleAccent>
                <TitleDivider>+</TitleDivider>
                <TitleAccent className="spring">Spring Boot</TitleAccent>
              </SectionMainTitle>
              <SectionSubtitle>
                Architecture enterprise robuste pour applications critiques
              </SectionSubtitle>
            </SectionTitleArea>
          </motion.div>

          <TopSection>
            <motion.div variants={fadeIn('right', 'tween', 0.1, 0.8)}>
              <HeaderContent>
                <OfficialBadge>
                  <BadgeIcon><FaShieldAlt /></BadgeIcon>
                  <BadgeText>APPLICATION OFFICIELLE</BadgeText>
                </OfficialBadge>

                <MainTitle>
                  Déclaration de
                  <TitleHighlight>Naissance</TitleHighlight>
                </MainTitle>

                <Subtitle>
                  Solution digitale pour la modernisation des services
                  d'état civil — Simplifier les démarches administratives
                  tout en garantissant la sécurité des données sensibles.
                </Subtitle>

                <TechBadges>
                  <TechBadge type="frontend">
                    <FaReact /> React
                  </TechBadge>
                  <TechBadge type="backend">
                    <SiSpringboot /> Spring Boot
                  </TechBadge>
                  <TechBadge type="db">
                    <SiPostgresql /> PostgreSQL
                  </TechBadge>
                </TechBadges>
              </HeaderContent>
            </motion.div>

            <motion.div variants={fadeIn('left', 'spring', 0.2, 0.8)}>
              <ProjectPreview>
                <PreviewFrame>
                  <FrameHeader>
                    <FrameDots>
                      <FrameDot />
                      <FrameDot />
                      <FrameDot />
                    </FrameDots>
                    <FrameUrl>etat-civil.gouv.ga/declaration</FrameUrl>
                  </FrameHeader>
                  <PreviewContent>
                    <PreviewImage
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.opacity = '0';
                      }}
                    />
                    <PreviewPlaceholder>
                      <PlaceholderIcon>
                        <FaFileAlt size={48} />
                      </PlaceholderIcon>
                      <PlaceholderText>Interface de déclaration</PlaceholderText>
                    </PreviewPlaceholder>
                  </PreviewContent>
                </PreviewFrame>
                <FloatingCard position="top-right">
                  <FloatingCardIcon><FaShieldAlt /></FloatingCardIcon>
                  <FloatingCardText>Sécurisé</FloatingCardText>
                </FloatingCard>
                <FloatingCard position="bottom-left">
                  <FloatingCardIcon><FaDatabase /></FloatingCardIcon>
                  <FloatingCardText>RGPD</FloatingCardText>
                </FloatingCard>
              </ProjectPreview>
            </motion.div>
          </TopSection>

          <motion.div variants={fadeIn('up', 'tween', 0.3, 0.8)}>
            <FeaturesRow>
              {project.features.map((feature, idx) => (
                <FeatureCard key={idx} delay={idx * 0.1}>
                  <FeatureIconWrapper>
                    {feature.icon}
                  </FeatureIconWrapper>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDesc>{feature.desc}</FeatureDesc>
                </FeatureCard>
              ))}
            </FeaturesRow>
          </motion.div>

          <BottomSection>
            <motion.div variants={fadeIn('right', 'spring', 0.4, 0.8)}>
              <ArchitecturePanel>
                <PanelHeader>
                  <PanelTitle>Architecture technique</PanelTitle>
                  <PanelYear>{project.year}</PanelYear>
                </PanelHeader>

                <ArchDiagram>
                  <ArchLayer>
                    <LayerLabel>Frontend</LayerLabel>
                    <LayerContent frontend>
                      <LayerIcon><FaReact size={24} /></LayerIcon>
                      <LayerTechs>
                        {project.stack.frontend.map((tech, idx) => (
                          <LayerTech key={idx}>{tech}</LayerTech>
                        ))}
                      </LayerTechs>
                    </LayerContent>
                  </ArchLayer>

                  <ArchConnector>
                    <ConnectorLine />
                    <ConnectorLabel>HTTPS / JWT</ConnectorLabel>
                    <ConnectorLine />
                  </ArchConnector>

                  <ArchLayer>
                    <LayerLabel>Backend</LayerLabel>
                    <LayerContent backend>
                      <LayerIcon><SiSpringboot size={24} /></LayerIcon>
                      <LayerTechs>
                        {project.stack.backend.map((tech, idx) => (
                          <LayerTech key={idx}>{tech}</LayerTech>
                        ))}
                      </LayerTechs>
                    </LayerContent>
                  </ArchLayer>
                </ArchDiagram>
              </ArchitecturePanel>
            </motion.div>

            <motion.div variants={fadeIn('left', 'spring', 0.5, 0.8)}>
              <CTAPanel>
                <CTAContent>
                  <CTATitle>Projet réalisé</CTATitle>
                  <CTADescription>
                    Solution développée pour faciliter les démarches
                    administratives des citoyens et optimiser le travail
                    des agents d'état civil.
                  </CTADescription>

                  <CTAStats>
                    <CTAStat>
                      <CTAStatValue>100%</CTAStatValue>
                      <CTAStatLabel>Dématérialisé</CTAStatLabel>
                    </CTAStat>
                    <CTAStatDivider />
                    <CTAStat>
                      <CTAStatValue>24/7</CTAStatValue>
                      <CTAStatLabel>Disponible</CTAStatLabel>
                    </CTAStat>
                    <CTAStatDivider />
                    <CTAStat>
                      <CTAStatValue>RGPD</CTAStatValue>
                      <CTAStatLabel>Conforme</CTAStatLabel>
                    </CTAStat>
                  </CTAStats>

                  <CTAButtons>
                    <PrimaryButton href={project.liveUrl} target="_blank">
                      <FaExternalLinkAlt /> Voir le projet
                    </PrimaryButton>
                    <SecondaryButton href={project.githubUrl} target="_blank">
                      <FaGithub /> Code source
                    </SecondaryButton>
                  </CTAButtons>
                </CTAContent>
              </CTAPanel>
            </motion.div>
          </BottomSection>
        </ContentWrapper>
      </SectionContainer>
    </motion.div>
  );
};

export default FullStackSpringSection;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #0a0a0f 0%, #0f1419 50%, #0a0a0f 100%);
  overflow: hidden;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236db33f' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
`;

const GoldAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #0a0a0f, #6db33f, #0a0a0f);
  background-size: 200% 100%;
  animation: ${shimmer} 3s linear infinite;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 2;
`;

const SectionTitleArea = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SectionTagLine = styled.span`
  display: inline-block;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: #6db33f;
  background: rgba(109, 179, 63, 0.1);
  padding: 0.5rem 1rem;
  border: 1px solid rgba(109, 179, 63, 0.2);
  margin-bottom: 1.5rem;
`;

const SectionMainTitle = styled.h2`
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const TitleAccent = styled.span`
  color: #61dafb;

  &.spring {
    color: #6db33f;
  }
`;

const TitleDivider = styled.span`
  color: rgba(255, 255, 255, 0.3);
  font-weight: 300;
`;

const SectionSubtitle = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const HeaderContent = styled.div``;

const OfficialBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(109, 179, 63, 0.15);
  color: #6db33f;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid rgba(109, 179, 63, 0.3);
  margin-bottom: 1.5rem;
`;

const BadgeIcon = styled.span`
  font-size: 0.9rem;
`;

const BadgeText = styled.span`
  font-family: 'DM Sans', 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
`;

const MainTitle = styled.h3`
  font-family: 'Playfair Display', 'Georgia', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: white;
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

const TitleHighlight = styled.span`
  display: block;
  color: #6db33f;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0.1em;
    left: 0;
    width: 100%;
    height: 0.15em;
    background: linear-gradient(90deg, #6db33f, transparent);
    opacity: 0.6;
  }
`;

const Subtitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 500px;
`;

const TechBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechBadge = styled.span<{ type: 'frontend' | 'backend' | 'db' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;

  ${props => {
    switch(props.type) {
      case 'frontend':
        return `
          background: rgba(97, 218, 251, 0.1);
          color: #61dafb;
          border: 1px solid rgba(97, 218, 251, 0.2);
        `;
      case 'backend':
        return `
          background: rgba(109, 179, 63, 0.1);
          color: #6db33f;
          border: 1px solid rgba(109, 179, 63, 0.2);
        `;
      case 'db':
        return `
          background: rgba(51, 103, 145, 0.15);
          color: #64b5f6;
          border: 1px solid rgba(51, 103, 145, 0.3);
        `;
    }
  }}
`;

const ProjectPreview = styled.div`
  position: relative;
`;

const PreviewFrame = styled.div`
  background: #1a1a24;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.2),
    0 20px 50px rgba(0, 0, 0, 0.4);
`;

const FrameHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: #252530;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const FrameDots = styled.div`
  display: flex;
  gap: 6px;
`;

const FrameDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
`;

const FrameUrl = styled.div`
  flex: 1;
  text-align: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(0, 0, 0, 0.3);
  padding: 0.35rem 1rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const PreviewContent = styled.div`
  position: relative;
  aspect-ratio: 16/10;
  background: linear-gradient(135deg, #1a1a2e, #0f0f1a);
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
`;

const PreviewPlaceholder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const PlaceholderIcon = styled.div`
  color: #6db33f;
  opacity: 0.3;
`;

const PlaceholderText = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.4);
`;

const FloatingCard = styled.div<{ position: 'top-right' | 'bottom-left' }>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(109, 179, 63, 0.15);
  border: 1px solid rgba(109, 179, 63, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${float} 4s ease-in-out infinite;

  ${props => props.position === 'top-right' ? `
    top: -1rem;
    right: -1rem;
    animation-delay: 0s;
  ` : `
    bottom: 1rem;
    left: -1rem;
    animation-delay: 2s;
  `}

  @media (max-width: 768px) {
    display: none;
  }
`;

const FloatingCardIcon = styled.div`
  color: #6db33f;
  font-size: 1rem;
`;

const FloatingCardText = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
`;

const FeaturesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div<{ delay: number }>`
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(109, 179, 63, 0.2);
  }
`;

const FeatureIconWrapper = styled.div`
  width: 56px;
  height: 56px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(109, 179, 63, 0.2), rgba(109, 179, 63, 0.05));
  border: 1px solid rgba(109, 179, 63, 0.2);
  border-radius: 12px;
  color: #6db33f;
  font-size: 1.25rem;
`;

const FeatureTitle = styled.h4`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
`;

const FeatureDesc = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.5;
`;

const BottomSection = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ArchitecturePanel = styled.div`
  background: rgba(109, 179, 63, 0.08);
  border: 1px solid rgba(109, 179, 63, 0.15);
  border-radius: 16px;
  padding: 2rem;
  color: white;
`;

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const PanelTitle = styled.h4`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
`;

const PanelYear = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: #6db33f;
  background: rgba(109, 179, 63, 0.15);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
`;

const ArchDiagram = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ArchLayer = styled.div``;

const LayerLabel = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;
`;

const LayerContent = styled.div<{ frontend?: boolean; backend?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${props => props.frontend
    ? 'rgba(97, 218, 251, 0.1)'
    : 'rgba(109, 179, 63, 0.1)'
  };
  border: 1px solid ${props => props.frontend
    ? 'rgba(97, 218, 251, 0.2)'
    : 'rgba(109, 179, 63, 0.2)'
  };
  border-radius: 8px;
`;

const LayerIcon = styled.div`
  color: rgba(255, 255, 255, 0.8);
`;

const LayerTechs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const LayerTech = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
`;

const ArchConnector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 1rem;
`;

const ConnectorLine = styled.div`
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(109, 179, 63, 0.5), transparent);
`;

const ConnectorLabel = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: #6db33f;
  white-space: nowrap;
`;

const CTAPanel = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CTAContent = styled.div``;

const CTATitle = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const CTAStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  background: rgba(109, 179, 63, 0.08);
  border: 1px solid rgba(109, 179, 63, 0.15);
  border-radius: 10px;
  margin-bottom: 1.5rem;
`;

const CTAStat = styled.div`
  text-align: center;
  flex: 1;
`;

const CTAStatValue = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #6db33f;
`;

const CTAStatLabel = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const CTAStatDivider = styled.div`
  width: 1px;
  height: 30px;
  background: rgba(255, 255, 255, 0.1);
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex: 1;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #6db33f, #5a9e32);
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(109, 179, 63, 0.3);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex: 1;
  padding: 0.875rem 1.5rem;
  background: transparent;
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;
