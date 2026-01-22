import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { FaArrowRight, FaChartLine, FaClock, FaUsers, FaMobile, FaGlobe, FaRobot } from "react-icons/fa";
import { useState } from "react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  categoryIcon: React.ReactNode;
  image: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: React.ReactNode;
  }[];
  technologies: string[];
  duration: string;
  year: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "germe-invest",
    title: "Plateforme d'investissement Germe Invest",
    client: "Germe Invest",
    category: "Application Web",
    categoryIcon: <FaGlobe />,
    image: "/imagesAppsWeb/germeinvest.png",
    challenge: "Germe Invest avait besoin d'une plateforme moderne pour présenter ses services d'investissement et permettre aux clients de suivre leurs portefeuilles. L'ancien site était obsolète et ne reflétait pas le professionnalisme de l'entreprise.",
    solution: "Développement d'une plateforme responsive avec React et TypeScript, intégrant un dashboard client sécurisé, des graphiques de performance en temps réel et un système de prise de rendez-vous. Architecture optimisée pour la performance et le SEO.",
    results: [
      { metric: "Augmentation des leads", value: "+180%", icon: <FaChartLine /> },
      { metric: "Temps de chargement", value: "-65%", icon: <FaClock /> },
      { metric: "Nouveaux clients", value: "+45%", icon: <FaUsers /> },
    ],
    technologies: ["React", "TypeScript", "Styled Components", "Chart.js", "Node.js"],
    duration: "3 mois",
    year: "2024"
  },
  {
    id: "sport-challenge",
    title: "Application Mobile Sport Challenge",
    client: "Sport Challenge",
    category: "Application Mobile",
    categoryIcon: <FaMobile />,
    image: "/imagesAppsMobile/sportchallenge.png",
    challenge: "Créer une application mobile engageante permettant aux utilisateurs de découvrir et participer à des défis sportifs locaux. Le défi principal était de gamifier l'expérience tout en gardant une interface intuitive.",
    solution: "Application React Native avec Expo, utilisant des animations fluides (Reanimated), géolocalisation pour les défis locaux, système de points et classements, notifications push pour l'engagement utilisateur.",
    results: [
      { metric: "Téléchargements", value: "10K+", icon: <FaUsers /> },
      { metric: "Rétention J7", value: "68%", icon: <FaChartLine /> },
      { metric: "Note App Store", value: "4.8/5", icon: <FaChartLine /> },
    ],
    technologies: ["React Native", "Expo", "Reanimated", "Firebase", "TypeScript"],
    duration: "4 mois",
    year: "2024"
  },
  {
    id: "dreamquest",
    title: "DreamQuest - Visualisation IA des rêves",
    client: "DreamQuest",
    category: "IA & 3D",
    categoryIcon: <FaRobot />,
    image: "/imagesAppsWeb/dreamquest.png",
    challenge: "Transformer des descriptions textuelles de rêves en visualisations 3D immersives. Le défi technique était d'intégrer l'IA générative (OpenAI) avec une expérience 3D fluide dans le navigateur.",
    solution: "Application web combinant React, Three.js pour le rendu 3D, et l'API OpenAI pour l'interprétation et la génération d'images. Implémentation d'un système de sauvegarde des rêves et partage social.",
    results: [
      { metric: "Utilisateurs actifs", value: "5K+", icon: <FaUsers /> },
      { metric: "Rêves générés", value: "25K+", icon: <FaRobot /> },
      { metric: "Temps moyen session", value: "8 min", icon: <FaClock /> },
    ],
    technologies: ["React", "Three.js", "OpenAI API", "GSAP", "Supabase"],
    duration: "2 mois",
    year: "2024"
  },
];

interface CaseStudiesSectionProps {
  id?: string;
}

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ id }) => {
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null);

  const toggleStudy = (studyId: string) => {
    setExpandedStudy(expandedStudy === studyId ? null : studyId);
  };

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Section id={id || "case-studies"}>
        <Container>
          <motion.div variants={fadeIn("up", "tween", 0.1, 0.8)}>
            <Header>
              <TagLine>PORTFOLIO</TagLine>
              <Title>
                Études de <TitleGradient>cas</TitleGradient>
              </Title>
              <Subtitle>
                Découvrez en détail comment j&apos;ai aidé mes clients à atteindre leurs objectifs
              </Subtitle>
            </Header>
          </motion.div>

          <StudiesContainer>
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={fadeIn("up", "spring", 0.2 + index * 0.15, 0.8)}
              >
                <StudyCard expanded={expandedStudy === study.id}>
                  <StudyHeader onClick={() => toggleStudy(study.id)}>
                    <StudyImageWrapper>
                      <StudyImage
                        src={study.image}
                        alt={study.title}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.opacity = '0.3';
                        }}
                      />
                      <ImageOverlay />
                      <CategoryBadge>
                        {study.categoryIcon}
                        {study.category}
                      </CategoryBadge>
                      <YearBadge>{study.year}</YearBadge>
                    </StudyImageWrapper>

                    <StudyInfo>
                      <StudyClient>{study.client}</StudyClient>
                      <StudyTitle>{study.title}</StudyTitle>
                      <StudyMeta>
                        <MetaItem>
                          <FaClock /> {study.duration}
                        </MetaItem>
                      </StudyMeta>
                      <ExpandButton expanded={expandedStudy === study.id}>
                        Voir les détails <FaArrowRight />
                      </ExpandButton>
                    </StudyInfo>
                  </StudyHeader>

                  <StudyDetails expanded={expandedStudy === study.id}>
                    <DetailsGrid>
                      <DetailSection>
                        <DetailTitle>Le Défi</DetailTitle>
                        <DetailText>{study.challenge}</DetailText>
                      </DetailSection>

                      <DetailSection>
                        <DetailTitle>La Solution</DetailTitle>
                        <DetailText>{study.solution}</DetailText>
                      </DetailSection>
                    </DetailsGrid>

                    <ResultsSection>
                      <DetailTitle>Résultats</DetailTitle>
                      <ResultsGrid>
                        {study.results.map((result, idx) => (
                          <ResultCard key={idx}>
                            <ResultIcon>{result.icon}</ResultIcon>
                            <ResultValue>{result.value}</ResultValue>
                            <ResultMetric>{result.metric}</ResultMetric>
                          </ResultCard>
                        ))}
                      </ResultsGrid>
                    </ResultsSection>

                    <TechSection>
                      <DetailTitle>Technologies utilisées</DetailTitle>
                      <TechList>
                        {study.technologies.map((tech, idx) => (
                          <TechTag key={idx}>{tech}</TechTag>
                        ))}
                      </TechList>
                    </TechSection>
                  </StudyDetails>
                </StudyCard>
              </motion.div>
            ))}
          </StudiesContainer>
        </Container>
      </Section>
    </motion.div>
  );
};

export default CaseStudiesSection;

const Section = styled.section`
  position: relative;
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const TagLine = styled.span`
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: #ffd700;
  background: rgba(255, 215, 0, 0.1);
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

const TitleGradient = styled.span`
  background: linear-gradient(135deg, #ffd700 0%, #ff9500 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

const StudiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StudyCard = styled.div<{ expanded: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 215, 0, 0.3);
    transform: translateY(-4px);
  }
`;

const StudyHeader = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  cursor: pointer;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StudyImageWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const StudyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${StudyCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.3), rgba(22, 33, 62, 0.5));
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  color: white;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const YearBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 215, 0, 0.9);
  color: #1a1a2e;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
`;

const StudyInfo = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StudyClient = styled.span`
  font-size: 0.85rem;
  color: #ffd700;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const StudyTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StudyMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);

  svg {
    color: #ffd700;
  }
`;

const ExpandButton = styled.button<{ expanded: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid rgba(255, 215, 0, 0.3);
  color: #ffd700;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;

  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.expanded ? 'rotate(90deg)' : 'rotate(0)'};
  }

  &:hover {
    background: rgba(255, 215, 0, 0.1);
    border-color: #ffd700;
  }
`;

const StudyDetails = styled.div<{ expanded: boolean }>`
  max-height: ${props => props.expanded ? '1000px' : '0'};
  opacity: ${props => props.expanded ? 1 : 0};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  padding: ${props => props.expanded ? '0 2rem 2rem' : '0 2rem'};
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const DetailSection = styled.div``;

const DetailTitle = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffd700;
  margin-bottom: 1rem;
`;

const DetailText = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
`;

const ResultsSection = styled.div`
  margin-bottom: 2rem;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ResultCard = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 12px;
`;

const ResultIcon = styled.div`
  font-size: 1.5rem;
  color: #ffd700;
  margin-bottom: 0.75rem;
`;

const ResultValue = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
`;

const ResultMetric = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
`;

const TechSection = styled.div``;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechTag = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
`;
