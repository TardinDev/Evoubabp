import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { FaReact, FaCode, FaPalette, FaRocket, FaMobileAlt, FaCheckCircle } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

interface FrontendSectionProps {
  id?: string;
}

const FrontendSection: React.FC<FrontendSectionProps> = ({ id }) => {
  const frontendTechnologies = [
    {
      icon: <FaReact />,
      title: 'React',
      description: 'Bibliothèque JavaScript puissante pour construire des interfaces utilisateur modernes et réactives',
      gradient: 'linear-gradient(135deg, #61dafb 0%, #0088cc 100%)',
      features: [
        'Composants réutilisables et modulaires',
        'Virtual DOM pour performances optimales',
        'Hooks pour gestion d\'état simplifiée',
        'React Router pour navigation fluide',
        'Context API et Redux pour état global',
        'Server-Side Rendering (SSR) avec Next.js'
      ],
      useCases: 'Applications web complexes, SPA, Applications e-commerce'
    },
    {
      icon: <SiTypescript />,
      title: 'TypeScript',
      description: 'Superset de JavaScript offrant le typage statique pour un code plus robuste et maintenable',
      gradient: 'linear-gradient(135deg, #3178c6 0%, #235a97 100%)',
      features: [
        'Détection d\'erreurs à la compilation',
        'Autocomplétion intelligente (IntelliSense)',
        'Interfaces et types personnalisés',
        'Refactoring sécurisé et facilité',
        'Meilleure documentation du code',
        'Support des dernières fonctionnalités ES6+'
      ],
      useCases: 'Projets de grande envergure, Équipes multiples, Applications critiques'
    },
    {
      icon: <SiTailwindcss />,
      title: 'Tailwind CSS',
      description: 'Framework CSS utility-first permettant un développement rapide et un design cohérent',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      features: [
        'Classes utilitaires pour styling rapide',
        'Design responsive intégré',
        'Personnalisation complète via config',
        'Dark mode natif',
        'Optimisation automatique (PurgeCSS)',
        'Composants réutilisables avec @apply'
      ],
      useCases: 'Prototypage rapide, Design systems, Applications modernes'
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
              <FaReact size={40} />
              <SiTypescript size={40} />
              <SiTailwindcss size={40} />
            </IconContainer>
            <Title>Technologies Frontend Modernes</Title>
            <Subtitle>
              Création d'interfaces utilisateur exceptionnelles et performantes
              avec les technologies les plus avancées de l'écosystème web.
            </Subtitle>
          </SectionHeader>
        </motion.div>

        <TechGrid>
          {frontendTechnologies.map((tech, index) => (
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
                    <FaCode size={16} /> Fonctionnalités clés :
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
                    <FaCheckCircle size={14} /> Cas d'usage :
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
              <FaRocket style={{ display: 'inline', marginRight: '0.5rem' }} />
              La combinaison React + TypeScript + Tailwind CSS permet de créer des applications
              web ultra-performantes, maintenables et visuellement exceptionnelles.
            </HighlightText>
          </BottomContent>
        </motion.div>
      </SectionContainer>
    </motion.div>
  );
};

export default FrontendSection;

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
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
      radial-gradient(circle at 20% 20%, rgba(97, 218, 251, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(49, 120, 198, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 60%);
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
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  svg {
    &:nth-child(1) {
      color: #61dafb;
      filter: drop-shadow(0 0 10px rgba(97, 218, 251, 0.4));
    }
    &:nth-child(2) {
      color: #3178c6;
      filter: drop-shadow(0 0 10px rgba(49, 120, 198, 0.4));
    }
    &:nth-child(3) {
      color: #06b6d4;
      filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.4));
    }
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #61dafb 0%, #3178c6 50%, #06b6d4 100%);
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
  color: #cbd5e1;
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
    border-color: rgba(97, 218, 251, 0.3);
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
  background: radial-gradient(circle, rgba(97, 218, 251, 0.1) 0%, transparent 70%);
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
  color: #61dafb;
  filter: drop-shadow(0 0 10px rgba(97, 218, 251, 0.3));

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
  color: #cbd5e1;
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
  color: #e0f2fe;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #61dafb;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  color: #cbd5e1;
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
  color: #06b6d4;
  font-weight: bold;
  font-size: 1rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
`;

const UseCasesSection = styled.div`
  background: rgba(97, 218, 251, 0.1);
  border-radius: 10px;
  padding: 1rem;
  border-left: 3px solid #61dafb;
`;

const UseCasesTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: #06b6d4;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UseCasesText = styled.p`
  color: #e0f2fe;
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
  color: #e0f2fe;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border-left: 4px solid #61dafb;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;
