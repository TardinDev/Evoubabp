import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaBug, FaShieldAlt, FaChartLine, FaCheckCircle, FaArrowRight, FaStar, FaCode, FaRocket } from "react-icons/fa";

// Composant icône Claude (étoile orange)
const ClaudeIcon = ({ size = 24 }: { size?: number }) => (
  <FaStar size={size} />
);

const ToolsSection = () => {
  const [activeToolIndex, setActiveToolIndex] = useState(0);

  const tools = [
    {
      name: "CodeRabbit",
      icon: FaRobot,
      color: "#FF6B35",
      gradient: "linear-gradient(135deg, #FF6B35, #F7931E)",
      description: "Assistant IA qui révise automatiquement votre code",
      tagline: "Révision de code intelligente",
      features: [
        "Révision de code automatique par IA",
        "Suggestions d'amélioration en temps réel",
        "Détection des bugs et vulnérabilités",
        "Optimisation des performances"
      ],
      stats: { value: "95%", label: "Bugs détectés" }
    },
    {
      name: "Claude Code",
      icon: ClaudeIcon,
      color: "#FF6B35",
      gradient: "linear-gradient(135deg, #FF6B35, #F7931E)",
      description: "Assistant de développement IA par Anthropic",
      tagline: "Développement assisté par IA",
      features: [
        "Génération de code intelligent",
        "Refactoring et optimisation",
        "Documentation automatique",
        "Debugging assisté par IA"
      ],
      stats: { value: "10x", label: "Plus productif" }
    },
    {
      name: "Sentry",
      icon: FaBug,
      color: "#362D59",
      gradient: "linear-gradient(135deg, #362D59, #5B4B8A)",
      description: "Monitoring en temps réel de vos applications",
      tagline: "Monitoring & Performance",
      features: [
        "Tracking des erreurs en production",
        "Monitoring de performance",
        "Alertes en temps réel",
        "Analyse des crashs utilisateurs"
      ],
      stats: { value: "99.9%", label: "Disponibilité" }
    }
  ];

  const activeTool = tools[activeToolIndex];

  return (
    <Section>
      <Container>
        <Header>
          <IconGroup>
            <FaShieldAlt size={35} />
            <FaChartLine size={35} />
            <FaCode size={35} />
          </IconGroup>
          <Title>
            Outils de <GradientText>Pointe</GradientText> pour un Code{" "}
            <GradientText>Impeccable</GradientText>
          </Title>
          <Subtitle>
            Je suis développeur expérimenté mais conscient que le domaine du code évolue.
            Je m'adapte parfaitement avec les outils modernes pour garantir la qualité,
            la sécurité et la performance de chaque ligne de code.
          </Subtitle>
        </Header>

        <WorkflowContainer>
          {/* Timeline horizontale avec les outils */}
          <Timeline>
            {tools.map((tool, index) => (
              <TimelineItem
                key={index}
                active={activeToolIndex === index}
                onClick={() => setActiveToolIndex(index)}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TimelineIconWrapper color={tool.color} active={activeToolIndex === index}>
                  <tool.icon size={28} />
                </TimelineIconWrapper>
                <TimelineLabel active={activeToolIndex === index}>
                  {tool.name}
                </TimelineLabel>
                <TimelineTagline active={activeToolIndex === index}>
                  {tool.tagline}
                </TimelineTagline>
                {index < tools.length - 1 && <TimelineConnector />}
              </TimelineItem>
            ))}
          </Timeline>

          {/* Affichage détaillé de l'outil sélectionné */}
          <AnimatePresence mode="wait">
            <DetailPanel
              key={activeToolIndex}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DetailHeader>
                <DetailIconWrapper color={activeTool.color} gradient={activeTool.gradient}>
                  <activeTool.icon size={50} />
                </DetailIconWrapper>
                <DetailInfo>
                  <DetailTitle>{activeTool.name}</DetailTitle>
                  <DetailDescription>{activeTool.description}</DetailDescription>
                </DetailInfo>
              </DetailHeader>

              <FeaturesGrid>
                {activeTool.features.map((feature, idx) => (
                  <FeatureBox
                    key={idx}
                    as={motion.div}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <FaCheckCircle color={activeTool.color} size={20} />
                    <FeatureText>{feature}</FeatureText>
                  </FeatureBox>
                ))}
              </FeaturesGrid>

              <StatsRow>
                <StatBadge color={activeTool.color}>
                  <StatValue>{activeTool.stats.value}</StatValue>
                  <StatLabel>{activeTool.stats.label}</StatLabel>
                </StatBadge>
                <LearnMoreLink color={activeTool.color}>
                  En savoir plus <FaArrowRight />
                </LearnMoreLink>
              </StatsRow>
            </DetailPanel>
          </AnimatePresence>
        </WorkflowContainer>

        <BottomCTA>
          <CTAContent>
            <CTAIcon><FaRocket size={48} /></CTAIcon>
            <CTAText>
              Prêt à bénéficier d'un code de qualité professionnelle ?
            </CTAText>
            <CTAButton
              as={motion.button}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(102, 126, 234, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Démarrer un projet
            </CTAButton>
          </CTAContent>
        </BottomCTA>
      </Container>
    </Section>
  );
};

export default ToolsSection;

const Section = styled.section`
  position: relative;
  padding: 6rem 2rem;
  background: #d4e4fa;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  svg {
    color: #667eea;
    filter: drop-shadow(0 4px 8px rgba(102, 126, 234, 0.3));
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: #1a202c;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const WorkflowContainer = styled.div`
  background: #ffffff;
  border-radius: 30px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Timeline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const TimelineItem = styled.div<{ active: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  padding: 1.5rem 1rem;
  border-radius: 15px;
  background: ${props => props.active ? 'linear-gradient(135deg, #f8fafc, #f1f5f9)' : 'transparent'};

  &:hover {
    background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  }

  @media (max-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 1rem;
  }
`;

const TimelineIconWrapper = styled.div<{ color: string; active: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: ${props => props.active ? props.color : `${props.color}15`};
  color: ${props => props.active ? 'white' : props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.active
    ? `0 15px 35px ${props.color}40`
    : `0 8px 16px ${props.color}20`};
  transform: ${props => props.active ? 'scale(1.1)' : 'scale(1)'};

  svg {
    filter: ${props => props.color === '#FF6B35' ? 'drop-shadow(0 2px 4px rgba(255, 107, 53, 0.3))' : 'none'};
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 0;
  }
`;

const TimelineLabel = styled.div<{ active: boolean }>`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.active ? '#1a202c' : '#64748b'};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TimelineTagline = styled.div<{ active: boolean }>`
  font-size: 0.9rem;
  color: ${props => props.active ? '#64748b' : '#94a3b8'};
  font-weight: 500;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const TimelineConnector = styled.div`
  position: absolute;
  top: 40px;
  right: -50%;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #e2e8f0, #cbd5e1);
  z-index: -1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DetailPanel = styled.div`
  background: linear-gradient(135deg, #fafbfc, #f8fafc);
  border: 2px solid #e2e8f0;
  border-radius: 20px;
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e2e8f0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const DetailIconWrapper = styled.div<{ color: string; gradient: string }>`
  width: 100px;
  height: 100px;
  border-radius: 25px;
  background: ${props => props.gradient};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 40px ${props => `${props.color}40`};
  flex-shrink: 0;

  svg {
    filter: ${props => props.color === '#FF6B35' ? 'drop-shadow(0 3px 6px rgba(255, 255, 255, 0.3))' : 'none'};
  }
`;

const DetailInfo = styled.div`
  flex: 1;
`;

const DetailTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const DetailDescription = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  }

  svg {
    flex-shrink: 0;
  }
`;

const FeatureText = styled.span`
  color: #475569;
  font-size: 0.95rem;
  font-weight: 500;
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 2px solid #e2e8f0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const StatBadge = styled.div<{ color: string }>`
  background: white;
  border: 2px solid ${props => props.color}40;
  border-radius: 15px;
  padding: 1.5rem 2rem;
  text-align: center;
  box-shadow: 0 8px 20px ${props => `${props.color}15`};
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const LearnMoreLink = styled.a<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${props => props.color};
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    gap: 1rem;
    color: ${props => props.color};

    svg {
      transform: translateX(5px);
    }
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

const BottomCTA = styled.div`
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CTAContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CTAIcon = styled.div`
  color: #667eea;
  animation: bounce 2s ease-in-out infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const CTAText = styled.h3`
  flex: 1;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;
