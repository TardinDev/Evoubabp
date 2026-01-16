import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import {
  HiOutlineLightBulb,
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineCheckCircle,
  HiArrowRight
} from "react-icons/hi";
import { FaReact, FaNodeJs, FaDatabase, FaRocket } from "react-icons/fa";
import { SiTypescript, SiSpringboot } from "react-icons/si";

interface HowItWorksProps {
  id?: string;
}

const processSteps = [
  {
    number: "01",
    title: "Analyse & Design",
    subtitle: "Comprendre vos besoins",
    description: "Définition des objectifs, analyse des besoins utilisateurs et création de maquettes UI/UX pour une expérience optimale.",
    icon: HiOutlineLightBulb,
    color: "#8b5cf6",
    deliverables: ["Cahier des charges", "Wireframes", "Maquettes Figma"],
  },
  {
    number: "02",
    title: "Frontend",
    subtitle: "Interfaces modernes",
    description: "Développement d'interfaces utilisateur réactives et performantes avec les technologies les plus récentes.",
    icon: HiOutlineCode,
    color: "#61dafb",
    techs: [
      { icon: FaReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
  },
  {
    number: "03",
    title: "Backend",
    subtitle: "Logique métier robuste",
    description: "Architecture serveur scalable, APIs RESTful sécurisées et gestion de base de données optimisée.",
    icon: HiOutlineServer,
    color: "#6db33f",
    techs: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiSpringboot, name: "Spring" },
    ],
  },
  {
    number: "04",
    title: "Déploiement",
    subtitle: "Mise en production",
    description: "Tests rigoureux, optimisation des performances et déploiement sur infrastructure cloud sécurisée.",
    icon: HiOutlineCheckCircle,
    color: "#f59e0b",
    deliverables: ["Tests QA", "CI/CD", "Monitoring"],
  },
];

const HowItWorks: React.FC<HowItWorksProps> = ({ id }) => {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Section id={id || "howItWorks"}>
        <GridOverlay />
        <GlowEffect />

        <Container>
          <motion.div variants={fadeIn("up", "tween", 0.1, 0.8)}>
            <HeaderSection>
              <TagLine>MÉTHODOLOGIE</TagLine>
              <MainTitle>
                Processus de
                <TitleGradient> Développement</TitleGradient>
              </MainTitle>
              <Subtitle>
                Une approche structurée et itérative pour transformer
                vos idées en produits digitaux performants
              </Subtitle>
            </HeaderSection>
          </motion.div>

          <TimelineContainer>
            <TimelineLine />

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", 0.2 + index * 0.15, 0.8)}
              >
                <StepCard index={index}>
                  <StepNumber color={step.color}>{step.number}</StepNumber>

                  <StepIconWrapper color={step.color}>
                    <step.icon size={28} />
                  </StepIconWrapper>

                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepSubtitle>{step.subtitle}</StepSubtitle>
                    <StepDescription>{step.description}</StepDescription>

                    {step.techs && (
                      <TechRow>
                        {step.techs.map((tech, idx) => (
                          <TechBadge key={idx} color={step.color}>
                            <tech.icon size={14} />
                            {tech.name}
                          </TechBadge>
                        ))}
                      </TechRow>
                    )}

                    {step.deliverables && (
                      <DeliverablesRow>
                        {step.deliverables.map((item, idx) => (
                          <DeliverableTag key={idx}>{item}</DeliverableTag>
                        ))}
                      </DeliverablesRow>
                    )}
                  </StepContent>

                  {index < processSteps.length - 1 && (
                    <StepConnector color={step.color}>
                      <HiArrowRight size={20} />
                    </StepConnector>
                  )}

                  <StepGlow color={step.color} />
                </StepCard>
              </motion.div>
            ))}
          </TimelineContainer>

          <motion.div variants={fadeIn("up", "tween", 0.8, 0.8)}>
            <BottomCTA>
              <CTAContent>
                <CTAIcon><FaRocket /></CTAIcon>
                <CTAText>
                  <CTATitle>Prêt à démarrer votre projet ?</CTATitle>
                  <CTADescription>
                    Discutons de vos besoins et trouvons la meilleure solution ensemble
                  </CTADescription>
                </CTAText>
              </CTAContent>
              <CTAButton href="#contact">
                Commencer
                <HiArrowRight />
              </CTAButton>
            </BottomCTA>
          </motion.div>
        </Container>
      </Section>
    </motion.div>
  );
};

export default HowItWorks;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

const Section = styled.section`
  position: relative;
  padding: 0 2rem 6rem 2rem;
  background: linear-gradient(180deg, #4b0082 0%, #380062 50%, #2d004f 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 1rem 4rem 1rem;
  }
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  pointer-events: none;
`;

const Container = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 2;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  padding-top: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding-top: 3rem;
  }
`;

const TagLine = styled.span`
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: #e0b0ff;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

const MainTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

const TitleGradient = styled.span`
  background: linear-gradient(135deg, #e0b0ff 0%, #ff9ecd 50%, #ffd700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`;

const TimelineContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  position: relative;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 80px;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg, #8b5cf6, #61dafb, #6db33f, #f59e0b);
  opacity: 0.3;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StepCard = styled.div<{ index: number }>`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const StepGlow = styled.div<{ color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${props => props.color};
  opacity: 0.8;
`;

const StepNumber = styled.span<{ color: string }>`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.color};
  opacity: 0.15;
  line-height: 1;
`;

const StepIconWrapper = styled.div<{ color: string }>`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => `${props.color}15`};
  border: 1px solid ${props => `${props.color}30`};
  border-radius: 14px;
  color: ${props => props.color};
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  ${StepCard}:hover & {
    transform: scale(1.1);
    background: ${props => `${props.color}25`};
  }
`;

const StepContent = styled.div`
  position: relative;
  z-index: 2;
`;

const StepTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
`;

const StepSubtitle = styled.span`
  display: block;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin-bottom: 1.25rem;
`;

const TechRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TechBadge = styled.span<{ color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.75rem;
  background: ${props => `${props.color}10`};
  border: 1px solid ${props => `${props.color}20`};
  border-radius: 6px;
  font-size: 0.8rem;
  color: ${props => props.color};
  font-weight: 500;
`;

const DeliverablesRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const DeliverableTag = styled.span`
  padding: 0.35rem 0.7rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
`;

const StepConnector = styled.div<{ color: string }>`
  position: absolute;
  right: -1.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  opacity: 0.5;
  z-index: 10;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const BottomCTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CTAContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CTAIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(224, 176, 255, 0.2));
  border-radius: 16px;
  color: #ffd700;
  font-size: 1.5rem;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const CTAText = styled.div``;

const CTATitle = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
`;

const CTADescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ffd700, #ffb700);
  color: #2d004f;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;
