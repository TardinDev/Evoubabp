import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { FaDocker, FaBoxOpen, FaServer, FaShip, FaLayerGroup, FaCogs } from 'react-icons/fa';
import AnimatedDockerBackground from './AnimatedDockerBackground';

interface DockerSectionProps {
    id?: string;
}

const DockerSection: React.FC<DockerSectionProps> = ({ id }) => {
    const dockerFeatures = [
        {
            icon: <FaDocker />,
            title: 'Containerisation',
            description: 'Isolation complète des applications pour une sécurité et une stabilité maximales.',
            gradient: 'linear-gradient(135deg, #0db7ed 0%, #38bdf8 100%)' // Docker Blue
        },
        {
            icon: <FaShip />,
            title: 'Portabilité Ultime',
            description: 'Développez une fois, déployez partout. Cohérence parfaite entre dev, test et prod.',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' // Darker Blue
        },
        {
            icon: <FaLayerGroup />,
            title: 'Microservices',
            description: 'Architecture modulaire facilitant la maintenance et l\'évolution de vos systèmes.',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' // Indigo
        },
        {
            icon: <FaCogs />,
            title: 'DevOps & CI/CD',
            description: 'Pipelines automatisés pour des déploiements rapides, fiables et fréquents.',
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' // Violet
        }
    ];

    return (
        <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <SectionContainer id={id}>
                <AnimatedDockerBackground />
                <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
                    <SectionHeader>
                        <IconContainer>
                            <FaDocker size={50} />
                            <FaServer size={40} />
                            <FaBoxOpen size={40} />
                        </IconContainer>
                        <Title>Solutions Docker & DevOps</Title>
                        <Subtitle>
                            Accélérez votre transformation numérique avec des architectures conteneurisées
                            modernes, robustes et évolutives.
                        </Subtitle>
                    </SectionHeader>
                </motion.div>

                <FeaturesGrid>
                    {dockerFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn('up', 'spring', 0.3 + index * 0.1, 0.8)}
                        >
                            <FeatureCard gradient={feature.gradient}>
                                <CardIcon>{feature.icon}</CardIcon>
                                <CardTitle>{feature.title}</CardTitle>
                                <CardDescription>{feature.description}</CardDescription>
                                <CardGlow />
                            </FeatureCard>
                        </motion.div>
                    ))}
                </FeaturesGrid>

                <motion.div variants={fadeIn('up', 'tween', 0.6, 1)}>
                    <BottomContent>
                        <HighlightText>
                            "La conteneurisation n'est pas qu'une technologie, c'est la pierre angulaire
                            d'une infrastructure agile et résiliente."
                        </HighlightText>
                        <CTAButton
                            as={motion.button}
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Moderniser votre infrastructure
                        </CTAButton>
                    </BottomContent>
                </motion.div>
            </SectionContainer>
        </motion.div>
    );
};

export default DockerSection;

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #172554 100%); // Slate to Dark Blue
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 10% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 90% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 40%);
    pointer-events: none;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  svg {
    color: #38bdf8;
    filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.3));
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #cbd5e1; // Slate 300
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const FeatureCard = styled.div<{ gradient: string }>`
  background: rgba(30, 41, 59, 0.4); // Slate 800 with opacity
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(148, 163, 184, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(56, 189, 248, 0.3);
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.4);
    background: rgba(30, 41, 59, 0.6);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.gradient};
  }
`;

const CardGlow = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${FeatureCard}:hover & {
    opacity: 1;
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: #38bdf8;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.3));
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #f1f5f9; // Slate 100
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: #94a3b8; // Slate 400
  line-height: 1.6;
  font-size: 0.95rem;
`;

const BottomContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
`;

const HighlightText = styled.p`
  font-size: 1.3rem;
  font-style: italic;
  color: #e2e8f0; // Slate 200
  margin-bottom: 2rem;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.4);
  border-radius: 15px;
  border-left: 4px solid #38bdf8;
  max-width: 700px;
  margin: 0 auto 2rem auto;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(2, 132, 199, 0.3);

  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #0284c7 100%);
  }
`;
