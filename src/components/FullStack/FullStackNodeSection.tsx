import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { FaReact, FaNodeJs, FaTerminal, FaExternalLinkAlt, FaGithub, FaPlay, FaUniversity, FaUserGraduate, FaCloudUploadAlt, FaCloud } from 'react-icons/fa';
import { SiPostgresql, SiExpress, SiTypescript } from 'react-icons/si';

interface FullStackNodeSectionProps {
  id?: string;
}

const FullStackNodeSection: React.FC<FullStackNodeSectionProps> = ({ id }) => {
  const project = {
    title: 'University Management Dashboard',
    year: '2024',
    description: 'Système de gestion universitaire complet style Google Classroom avec authentification multi-rôles (Admin, Professeur, Étudiant), codes de rejoindre sécurisés et upload média via Cloudinary.',
    image: '/images/university-dashboard.png',
    liveUrl: '#',
    githubUrl: '#',
    stats: [
      { value: '3', label: 'Rôles' },
      { value: 'JWT', label: 'Auth sécurisée' },
      { value: 'PERN', label: 'Stack' },
    ],
    features: [
      { icon: <FaUserGraduate />, text: 'Multi-role Auth' },
      { icon: <FaUniversity />, text: 'Join Codes' },
      { icon: <FaCloudUploadAlt />, text: 'Cloudinary Upload' },
    ],
    stack: {
      frontend: [
        { name: 'React 18', icon: <FaReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
      ],
      backend: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Cloudinary', icon: <FaCloud /> },
      ]
    }
  };

  const terminalLines = [
    { type: 'comment', text: '// PERN Stack - University Management System' },
    { type: 'command', text: '$ npm run dev' },
    { type: 'output', text: '> PostgreSQL connected ✓' },
    { type: 'output', text: '> Express server on port 5000' },
    { type: 'success', text: '> Multi-role auth ready' },
  ];

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <SectionContainer id={id}>
        <NoiseOverlay />
        <GridPattern />

        <ContentWrapper>
          <motion.div variants={fadeIn('up', 'tween', 0.1, 0.8)}>
            <HeroTitle>J'applique du FullStack à ton projet !</HeroTitle>

            <HeaderArea>
              <TagLine>FULLSTACK JAVASCRIPT</TagLine>
              <MainTitle>
                <TitleAccent>React</TitleAccent>
                <TitleDivider>/</TitleDivider>
                <TitleAccent className="node">Node.js</TitleAccent>
              </MainTitle>
              <HeaderDescription>
                Écosystème JavaScript unifié pour des applications
                performantes et temps réel
              </HeaderDescription>
            </HeaderArea>
          </motion.div>

          <MainGrid>
            <LeftColumn>
              <motion.div variants={fadeIn('right', 'spring', 0.2, 0.8)}>
                <TerminalWindow>
                  <TerminalHeader>
                    <TerminalDots>
                      <Dot color="#ff5f56" />
                      <Dot color="#ffbd2e" />
                      <Dot color="#27ca3f" />
                    </TerminalDots>
                    <TerminalTitle>
                      <FaTerminal size={12} />
                      fullstack-app
                    </TerminalTitle>
                  </TerminalHeader>
                  <TerminalBody>
                    {terminalLines.map((line, idx) => (
                      <TerminalLine key={idx} type={line.type} delay={idx * 0.3}>
                        {line.text}
                      </TerminalLine>
                    ))}
                    <Cursor />
                  </TerminalBody>
                </TerminalWindow>
              </motion.div>

              <motion.div variants={fadeIn('right', 'spring', 0.4, 0.8)}>
                <StatsRow>
                  {project.stats.map((stat, idx) => (
                    <StatItem key={idx}>
                      <StatValue>{stat.value}</StatValue>
                      <StatLabel>{stat.label}</StatLabel>
                    </StatItem>
                  ))}
                </StatsRow>
              </motion.div>
            </LeftColumn>

            <RightColumn>
              <motion.div variants={fadeIn('left', 'spring', 0.3, 0.8)}>
                <ProjectCard>
                  <ProjectImageArea>
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.opacity = '0';
                      }}
                    />
                    <ImagePlaceholder>
                      <FaPlay size={40} />
                      <span>Démo Live</span>
                    </ImagePlaceholder>
                    <YearBadge>{project.year}</YearBadge>
                  </ProjectImageArea>

                  <ProjectContent>
                    <ProjectName>{project.title}</ProjectName>
                    <ProjectDesc>{project.description}</ProjectDesc>

                    <ActionButtons>
                      <PrimaryButton href={project.liveUrl} target="_blank">
                        <FaExternalLinkAlt /> Voir Live
                      </PrimaryButton>
                      <SecondaryButton href={project.githubUrl} target="_blank">
                        <FaGithub /> Code
                      </SecondaryButton>
                    </ActionButtons>
                  </ProjectContent>
                </ProjectCard>
              </motion.div>
            </RightColumn>
          </MainGrid>

          <motion.div variants={fadeIn('up', 'tween', 0.5, 0.8)}>
            <TechStackSection>
              <StackColumn>
                <StackHeader>
                  <StackIcon frontend><FaReact /></StackIcon>
                  <StackTitle>Frontend</StackTitle>
                </StackHeader>
                <TechGrid>
                  {project.stack.frontend.map((tech, idx) => (
                    <TechItem key={idx}>
                      <TechIcon>{tech.icon}</TechIcon>
                      <TechName>{tech.name}</TechName>
                    </TechItem>
                  ))}
                </TechGrid>
              </StackColumn>

              <StackDivider>
                <DividerLine />
                <DividerIcon>
                  <ConnectionPulse />
                  API
                </DividerIcon>
                <DividerLine />
              </StackDivider>

              <StackColumn>
                <StackHeader>
                  <StackIcon backend><FaNodeJs /></StackIcon>
                  <StackTitle>Backend</StackTitle>
                </StackHeader>
                <TechGrid>
                  {project.stack.backend.map((tech, idx) => (
                    <TechItem key={idx}>
                      <TechIcon>{tech.icon}</TechIcon>
                      <TechName>{tech.name}</TechName>
                    </TechItem>
                  ))}
                </TechGrid>
              </StackColumn>
            </TechStackSection>
          </motion.div>
        </ContentWrapper>
      </SectionContainer>
    </motion.div>
  );
};

export default FullStackNodeSection;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 1; }
`;

const typeIn = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 2rem;
  background: #0a0a0f;
  overflow: hidden;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const NoiseOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  pointer-events: none;
`;

const GridPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(97, 218, 251, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(97, 218, 251, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: white;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const HeaderArea = styled.div`
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    text-align: center;
  }
`;

const TagLine = styled.span`
  display: inline-block;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: #61dafb;
  background: rgba(97, 218, 251, 0.1);
  padding: 0.5rem 1rem;
  border: 1px solid rgba(97, 218, 251, 0.2);
  margin-bottom: 1.5rem;
`;

const MainTitle = styled.h2`
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TitleAccent = styled.span`
  color: #61dafb;

  &.node {
    color: #68a063;
  }
`;

const TitleDivider = styled.span`
  color: rgba(255, 255, 255, 0.2);
  font-weight: 300;
`;

const HeaderDescription = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 500px;
  line-height: 1.7;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RightColumn = styled.div``;

const TerminalWindow = styled.div`
  background: #1a1a24;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.05),
    0 20px 50px rgba(0, 0, 0, 0.5);
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1rem;
  background: #252530;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const TerminalDots = styled.div`
  display: flex;
  gap: 8px;
`;

const Dot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const TerminalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
`;

const TerminalBody = styled.div`
  padding: 1.5rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.8;
`;

const TerminalLine = styled.div<{ type: string; delay: number }>`
  color: ${props => {
    switch (props.type) {
      case 'comment': return 'rgba(255, 255, 255, 0.3)';
      case 'command': return '#61dafb';
      case 'success': return '#68a063';
      default: return 'rgba(255, 255, 255, 0.7)';
    }
  }};
  overflow: hidden;
  white-space: nowrap;
  animation: ${typeIn} 0.5s ease forwards;
  animation-delay: ${props => props.delay}s;
  width: 0;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 10px;
  height: 18px;
  background: #61dafb;
  margin-left: 4px;
  animation: ${blink} 1s infinite;
  vertical-align: text-bottom;
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem 1rem;
  background: linear-gradient(135deg, rgba(97, 218, 251, 0.08), rgba(104, 160, 99, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
`;

const StatValue = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ProjectCard = styled.div`
  background: #12121a;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-8px);
  }
`;

const ProjectImageArea = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #1a1a2e, #0f0f1a);
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
`;

const ImagePlaceholder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.3);

  svg {
    opacity: 0.5;
  }

  span {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }
`;

const YearBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  color: white;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  z-index: 3;
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectName = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.75rem;
`;

const ProjectDesc = styled.p`
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: #61dafb;
  color: #0a0a0f;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #7de3ff;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: transparent;
  color: white;
  font-weight: 500;
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

const TechStackSection = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 2rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const StackColumn = styled.div`
  flex: 1;
  max-width: 300px;
`;

const StackHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const StackIcon = styled.div<{ frontend?: boolean; backend?: boolean }>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 1.5rem;
  background: ${props => props.frontend
    ? 'linear-gradient(135deg, rgba(97, 218, 251, 0.2), rgba(97, 218, 251, 0.05))'
    : 'linear-gradient(135deg, rgba(104, 160, 99, 0.2), rgba(104, 160, 99, 0.05))'
  };
  color: ${props => props.frontend ? '#61dafb' : '#68a063'};
`;

const StackTitle = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
`;

const TechGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateX(4px);
  }
`;

const TechIcon = styled.div`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
`;

const TechName = styled.span`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
`;

const StackDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 1rem 0;
  }
`;

const DividerLine = styled.div`
  width: 2px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent);

  @media (max-width: 768px) {
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
  }
`;

const DividerIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #0a0a0f;
  border: 2px solid rgba(97, 218, 251, 0.3);
  border-radius: 50%;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #61dafb;
  letter-spacing: 0.05em;
`;

const ConnectionPulse = styled.div`
  position: absolute;
  inset: -4px;
  border: 2px solid rgba(97, 218, 251, 0.3);
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
`;
