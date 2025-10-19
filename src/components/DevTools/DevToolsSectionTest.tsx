import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaBug, FaCheckCircle, FaRocket, FaShieldAlt, FaCode, FaUserCheck } from "react-icons/fa";
import { useState } from "react";

const devProcessSteps = [
  {
    icon: FaCode,
    title: "Code Propre",
    description: "Code structuré, documenté et maintenable suivant les meilleures pratiques de développement",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
    metrics: ["Documentation complète", "Architecture modulaire", "Standards ESLint/Prettier"]
  },
  {
    icon: FaBug,
    title: "Tests Rigoureux",
    description: "Tests unitaires, d'intégration et end-to-end pour garantir la qualité du code",
    color: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444, #dc2626)",
    metrics: ["100% Code Coverage", "Tests automatisés", "CI/CD intégré"]
  },
  {
    icon: FaShieldAlt,
    title: "Sécurité Avancée",
    description: "Protection contre les vulnérabilités OWASP, chiffrement des données sensibles",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    metrics: ["Chiffrement SSL/TLS", "Protection OWASP", "Audit de sécurité"]
  },
  {
    icon: FaCheckCircle,
    title: "Validation Continue",
    description: "Intégration et déploiement continus (CI/CD) pour livrer rapidement et sans erreurs",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    metrics: ["Pipeline automatisé", "Déploiement continu", "Rollback instantané"]
  },
  {
    icon: FaUserCheck,
    title: "UX Optimisée",
    description: "Interface intuitive et accessible, testée par de vrais utilisateurs",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    metrics: ["Tests utilisateurs", "Accessibilité WCAG", "Design responsive"]
  },
  {
    icon: FaRocket,
    title: "Performance Maximale",
    description: "Optimisation du temps de chargement, lazy loading et mise en cache stratégique",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    metrics: ["< 2s chargement", "Lazy loading", "Cache optimisé"]
  }
];

const DevToolsSectionTest = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Section>
      <Container>
        <Header>
          <IconWrapper>
            <FaShieldAlt size={50} />
          </IconWrapper>
          <Title>Développement Rigoureux & Qualité Maximale</Title>
          <Subtitle>
            Chaque ligne de code est pensée, testée et optimisée pour vous offrir
            des applications robustes, sécurisées et performantes
          </Subtitle>
        </Header>

        <ContentWrapper>
          {/* Circular Process Selector */}
          <CircularProcess>
            <CenterHub>
              <AnimatePresence mode="wait">
                <CenterContent
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <ActiveIcon color={devProcessSteps[activeStep].color}>
                    {(() => {
                      const Icon = devProcessSteps[activeStep].icon;
                      return <Icon size={48} />;
                    })()}
                  </ActiveIcon>
                  <ActiveTitle>{devProcessSteps[activeStep].title}</ActiveTitle>
                </CenterContent>
              </AnimatePresence>
            </CenterHub>

            {devProcessSteps.map((step, index) => {
              const angle = (index * 360) / devProcessSteps.length - 90;
              const radius = 180;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <ProcessNode
                  key={index}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  active={activeStep === index}
                  color={step.color}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <step.icon size={24} />
                  <NodeConnector active={activeStep === index} color={step.color} />
                </ProcessNode>
              );
            })}
          </CircularProcess>

          {/* Details Panel */}
          <AnimatePresence mode="wait">
            <DetailsPanel
              key={activeStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <DetailHeader gradient={devProcessSteps[activeStep].gradient}>
                <DetailTitle>{devProcessSteps[activeStep].title}</DetailTitle>
              </DetailHeader>

              <DetailContent>
                <DetailDescription>
                  {devProcessSteps[activeStep].description}
                </DetailDescription>

                <MetricsList>
                  {devProcessSteps[activeStep].metrics.map((metric, idx) => (
                    <MetricItem
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <MetricIcon color={devProcessSteps[activeStep].color}>
                        <FaCheckCircle size={16} />
                      </MetricIcon>
                      <MetricText>{metric}</MetricText>
                    </MetricItem>
                  ))}
                </MetricsList>

                <ProgressIndicator>
                  {devProcessSteps.map((_, idx) => (
                    <ProgressDot
                      key={idx}
                      active={idx === activeStep}
                      color={devProcessSteps[idx].color}
                      onClick={() => setActiveStep(idx)}
                    />
                  ))}
                </ProgressIndicator>
              </DetailContent>
            </DetailsPanel>
          </AnimatePresence>
        </ContentWrapper>

        <StatsContainer>
          <StatItem>
            <StatNumber>100%</StatNumber>
            <StatLabel>Code Coverage</StatLabel>
          </StatItem>
          <StatDivider />
          <StatItem>
            <StatNumber>99.9%</StatNumber>
            <StatLabel>Disponibilité</StatLabel>
          </StatItem>
          <StatDivider />
          <StatItem>
            <StatNumber>&lt; 2s</StatNumber>
            <StatLabel>Temps de chargement</StatLabel>
          </StatItem>
          <StatDivider />
          <StatItem>
            <StatNumber>A+</StatNumber>
            <StatLabel>Score de sécurité</StatLabel>
          </StatItem>
        </StatsContainer>
      </Container>
    </Section>
  );
};

export default DevToolsSectionTest;

const Section = styled.section`
  padding: 6rem 2rem;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
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
  margin-bottom: 5rem;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  margin-bottom: 2rem;
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.25);
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
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

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const CircularProcess = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

const CenterHub = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 50%;
  border: 3px solid #e2e8f0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const CenterContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
`;

const ActiveIcon = styled.div<{ color: string }>`
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActiveTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 700;
  color: #1a202c;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const ProcessNode = styled(motion.div)<{ active: boolean; color: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${props => props.active ? props.color : '#ffffff'};
  color: ${props => props.active ? '#ffffff' : props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 3px solid ${props => props.color};
  box-shadow: ${props => props.active
    ? `0 8px 30px ${props.color}50`
    : '0 4px 15px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;
  z-index: 5;

  &:hover {
    box-shadow: 0 12px 40px ${props => `${props.color}60`};
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
`;

const NodeConnector = styled.div<{ active: boolean; color: string }>`
  position: absolute;
  width: 100px;
  height: 2px;
  background: ${props => props.active
    ? `linear-gradient(to right, ${props.color}, transparent)`
    : 'rgba(226, 232, 240, 0.5)'};
  top: 50%;
  right: 100%;
  transform-origin: right center;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 75px;
  }
`;

const DetailsPanel = styled(motion.div)`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 24px;
  border: 2px solid #e2e8f0;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
`;

const DetailHeader = styled.div<{ gradient: string }>`
  background: ${props => props.gradient};
  padding: 2rem;
  color: white;
`;

const DetailTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const DetailContent = styled.div`
  padding: 2.5rem;
`;

const DetailDescription = styled.p`
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const MetricsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const MetricItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    background: #f1f5f9;
    transform: translateX(8px);
  }
`;

const MetricIcon = styled.div<{ color: string }>`
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const MetricText = styled.span`
  font-size: 0.95rem;
  color: #334155;
  font-weight: 600;
`;

const ProgressIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #e2e8f0;
`;

const ProgressDot = styled.div<{ active: boolean; color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? props.color : '#cbd5e1'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? `0 0 12px ${props.color}80` : 'none'};

  &:hover {
    transform: scale(1.3);
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 2px solid #e2e8f0;
  border-radius: 24px;
  padding: 3rem 2rem;
  margin-top: 4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.div`
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const StatDivider = styled.div`
  width: 2px;
  height: 80px;
  background: linear-gradient(to bottom, transparent, #cbd5e1, transparent);

  @media (max-width: 768px) {
    display: none;
  }
`;
