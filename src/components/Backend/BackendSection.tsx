import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { FaNodeJs, FaServer, FaDatabase, FaCode, FaShieldAlt, FaCog } from 'react-icons/fa';
import { SiSpringboot, SiSupabase } from 'react-icons/si';

interface BackendSectionProps {
  id?: string;
}

const BackendSection: React.FC<BackendSectionProps> = ({ id }) => {
  const backendTechnologies = [
    {
      icon: <FaNodeJs />,
      title: 'Node.js',
      description: 'Développement backend JavaScript/TypeScript performant et scalable',
      gradient: 'linear-gradient(135deg, #68a063 0%, #3c873a 100%)',
      features: [
        'API RESTful et GraphQL',
        'Microservices avec Express/Fastify',
        'WebSockets et temps réel',
        'Authentification JWT',
        'Intégration base de données (MongoDB, PostgreSQL)',
        'Gestion des files d\'attente (Bull, RabbitMQ)'
      ],
      useCases: 'Applications temps réel, APIs performantes, Microservices'
    },
    {
      icon: <SiSpringboot />,
      title: 'Spring Boot',
      description: 'Framework Java enterprise robuste pour applications critiques',
      gradient: 'linear-gradient(135deg, #6db33f 0%, #5a9e32 100%)',
      features: [
        'Architecture microservices',
        'Spring Security pour l\'authentification',
        'JPA/Hibernate pour ORM',
        'Spring Cloud pour systèmes distribués',
        'Tests unitaires et d\'intégration',
        'Monitoring avec Actuator'
      ],
      useCases: 'Applications enterprise, Systèmes bancaires, E-commerce complexe'
    },
    {
      icon: <SiSupabase />,
      title: 'Supabase',
      description: 'Backend-as-a-Service open source avec base de données PostgreSQL',
      gradient: 'linear-gradient(135deg, #3ecf8e 0%, #2b9e6f 100%)',
      features: [
        'Base de données PostgreSQL instantanée',
        'Authentification intégrée (OAuth, Magic Links)',
        'API auto-générées (REST, GraphQL)',
        'Stockage de fichiers',
        'Functions serverless Edge',
        'Temps réel avec subscriptions'
      ],
      useCases: 'Prototypes rapides, SaaS, Applications mobile-first'
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
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
          <SectionHeader>
            <IconContainer>
              <FaServer size={40} />
              <FaDatabase size={40} />
              <FaCog size={40} />
            </IconContainer>
            <Title>Technologies Backend Maîtrisées</Title>
            <Subtitle>
              Des solutions backend robustes et évolutives adaptées à vos besoins,
              du prototypage rapide aux systèmes enterprise critiques.
            </Subtitle>
          </SectionHeader>
        </motion.div>

        <TechGrid>
          {backendTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'spring', 0.3 + index * 0.15, 0.8)}
            >
              <TechCard gradient={tech.gradient}>
                <CardHeader>
                  <CardIcon>{tech.icon}</CardIcon>
                  <CardTitle>{tech.title}</CardTitle>
                </CardHeader>
                <CardDescription>{tech.description}</CardDescription>

                <FeaturesSection>
                  <FeaturesTitle>
                    <FaCode size={16} /> Ce qui est fait :
                  </FeaturesTitle>
                  <FeaturesList>
                    {tech.features.map((feature, idx) => (
                      <FeatureItem key={idx}>
                        <CheckIcon>✓</CheckIcon>
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeaturesList>
                </FeaturesSection>

                <UseCasesSection>
                  <UseCasesTitle>
                    <FaShieldAlt size={14} /> Cas d'usage :
                  </UseCasesTitle>
                  <UseCasesText>{tech.useCases}</UseCasesText>
                </UseCasesSection>

                <CardGlow />
              </TechCard>
            </motion.div>
          ))}
        </TechGrid>

        <motion.div variants={fadeIn('up', 'tween', 0.8, 1)}>
          <BottomContent>
            <HighlightText>
              Chaque projet est unique. Nous choisissons la technologie backend la plus adaptée
              à vos contraintes de performance, scalabilité et budget.
            </HighlightText>
          </BottomContent>
        </motion.div>
      </SectionContainer>
    </motion.div>
  );
};

export default BackendSection;

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #0f0f23 50%, #16213e 100%);
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
      radial-gradient(circle at 30% 30%, rgba(104, 160, 99, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(109, 179, 63, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    color: #6db33f;
    filter: drop-shadow(0 0 10px rgba(109, 179, 63, 0.3));
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #68a063 0%, #6db33f 50%, #3ecf8e 100%);
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
  max-width: 700px;
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

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const TechCard = styled.div<{ gradient: string }>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(109, 179, 63, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.gradient};
  }
`;

const CardGlow = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(109, 179, 63, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${TechCard}:hover & {
    opacity: 1;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: #6db33f;
  filter: drop-shadow(0 0 10px rgba(109, 179, 63, 0.3));

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: white;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const CardDescription = styled.p`
  color: #b8b8d1;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const FeaturesSection = styled.div`
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const FeaturesTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #e0e0ff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #6db33f;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  color: #c0c0d8;
  font-size: 0.9rem;
  line-height: 1.8;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const CheckIcon = styled.span`
  color: #3ecf8e;
  font-weight: bold;
  font-size: 1rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
`;

const UseCasesSection = styled.div`
  background: rgba(109, 179, 63, 0.1);
  border-radius: 10px;
  padding: 1rem;
  border-left: 3px solid #6db33f;
`;

const UseCasesTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: #3ecf8e;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UseCasesText = styled.p`
  color: #d0d0e8;
  font-size: 0.9rem;
  line-height: 1.5;
  font-style: italic;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
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
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border-left: 4px solid #6db33f;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;
