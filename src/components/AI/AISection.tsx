import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { FaBrain, FaRobot, FaChartLine, FaLightbulb } from 'react-icons/fa';
import { SiOpenai, SiTensorflow } from 'react-icons/si';
import AnimatedBackground from './AnimatedBackground';

interface AISectionProps {
  id?: string;
}

const AISection: React.FC<AISectionProps> = ({ id }) => {
  const aiFeatures = [
    {
      icon: <FaBrain />,
      title: 'Intelligence Artificielle',
      description: 'Intégration de modèles IA avancés pour automatiser et optimiser vos processus métier.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: <FaRobot />,
      title: 'Automatisation Intelligente',
      description: 'Robots conversationnels et assistants virtuels pour améliorer l\'expérience utilisateur.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: <FaChartLine />,
      title: 'Analyse Prédictive',
      description: 'Algorithmes de machine learning pour prédire les tendances et optimiser les décisions.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation Continue',
      description: 'Solutions créatives alimentées par l\'IA pour transformer votre vision en réalité.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
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
        <AnimatedBackground />
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
          <SectionHeader>
            <IconContainer>
              <SiOpenai size={40} />
              <SiTensorflow size={40} />
            </IconContainer>
            <Title>L'IA au Cœur de Nos Solutions</Title>
            <Subtitle>
              Nous intégrons l'intelligence artificielle dans chaque projet pour créer des applications
              innovantes, intelligentes et tournées vers l'avenir.
            </Subtitle>
          </SectionHeader>
        </motion.div>

        <FeaturesGrid>
          {aiFeatures.map((feature, index) => (
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
              "L'avenir appartient à ceux qui comprennent que l'IA n'est pas juste une technologie,
              mais un partenaire pour innover."
            </HighlightText>
            <CTAButton
              as={motion.button}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir nos projets IA
            </CTAButton>
          </BottomContent>
        </motion.div>
      </SectionContainer>
    </motion.div>
  );
};

export default AISection;

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;

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
      radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(247, 147, 251, 0.1) 0%, transparent 50%);
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
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    color: #667eea;
    filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.3));
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
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
  color: #b8b8d1;
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
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
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
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${FeatureCard}:hover & {
    opacity: 1;
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.3));
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: #b8b8d1;
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
  color: #e0e0ff;
  margin-bottom: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border-left: 4px solid #667eea;
  max-width: 700px;
  margin: 0 auto 2rem auto;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);

  &:hover {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  }
`;