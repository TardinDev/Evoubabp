import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { useState } from "react";
import { FaReact, FaMobile, FaGlobe, FaBolt, FaCompass, FaBook, FaPalette, FaRoad, FaExchangeAlt, FaTheaterMasks, FaMagic, FaHandPointer, FaGamepad, FaStar, FaLayerGroup, FaSearch } from "react-icons/fa";
import { SiExpo, SiNextdotjs, SiVite, SiTailwindcss, SiStyledcomponents, SiReactquery, SiFramer, SiThreedotjs, SiGreensock } from "react-icons/si";

const technologies = [
  {
    name: "React Native",
    version: "v0.83",
    description: "Framework pour créer des applications mobiles natives",
    icon: FaReact,
    color: "#61DAFB",
    bgGradient: "linear-gradient(135deg, #61DAFB20, #61DAFB10)",
    category: "mobile"
  },
  {
    name: "Expo",
    version: "v54",
    description: "Plateforme pour développer des applications React Native",
    icon: SiExpo,
    color: "#000020",
    bgGradient: "linear-gradient(135deg, #00002020, #00002010)",
    category: "mobile"
  },
  {
    name: "Expo Router",
    version: "v3",
    description: "Système de navigation basé sur les fichiers",
    icon: FaCompass,
    color: "#000020",
    bgGradient: "linear-gradient(135deg, #00002020, #00002010)",
    category: "mobile"
  },
  {
    name: "React",
    version: "v19",
    description: "Bibliothèque JavaScript pour créer des interfaces utilisateur",
    icon: FaReact,
    color: "#61DAFB",
    bgGradient: "linear-gradient(135deg, #61DAFB20, #61DAFB10)",
    category: "web"
  },
  {
    name: "Next.js",
    version: "v16",
    description: "Framework React full-stack avec SSR et SSG",
    icon: SiNextdotjs,
    color: "#000000",
    bgGradient: "linear-gradient(135deg, #00000020, #00000010)",
    category: "web"
  },
  {
    name: "Vite",
    version: "v7",
    description: "Outil de build ultra-rapide pour les projets web",
    icon: SiVite,
    color: "#646CFF",
    bgGradient: "linear-gradient(135deg, #646CFF20, #646CFF10)",
    category: "web"
  },
  {
    name: "TypeScript",
    version: "v5",
    description: "JavaScript avec typage statique",
    icon: FaBook,
    color: "#3178C6",
    bgGradient: "linear-gradient(135deg, #3178C620, #3178C610)",
    category: "both"
  },
  {
    name: "Tailwind CSS",
    version: "v4",
    description: "Framework CSS utility-first pour le design",
    icon: SiTailwindcss,
    color: "#06B6D4",
    bgGradient: "linear-gradient(135deg, #06B6D420, #06B6D410)",
    category: "web"
  },
  {
    name: "Styled Components",
    version: "v6",
    description: "CSS-in-JS pour styliser les composants React",
    icon: SiStyledcomponents,
    color: "#DB7093",
    bgGradient: "linear-gradient(135deg, #DB709320, #DB709310)",
    category: "web"
  },
  {
    name: "React Router",
    version: "v6",
    description: "Routage déclaratif pour les applications React",
    icon: FaRoad,
    color: "#CA4245",
    bgGradient: "linear-gradient(135deg, #CA424520, #CA424510)",
    category: "web"
  },
  {
    name: "Zustand",
    version: "v4",
    description: "Gestionnaire d'état léger pour React",
    icon: FaLayerGroup,
    color: "#FF6B6B",
    bgGradient: "linear-gradient(135deg, #FF6B6B20, #FF6B6B10)",
    category: "both"
  },
  {
    name: "Tanstack Query",
    version: "v5",
    description: "Gestion des données et cache pour React",
    icon: SiReactquery,
    color: "#FF4154",
    bgGradient: "linear-gradient(135deg, #FF415420, #FF415410)",
    category: "both"
  },
  {
    name: "Framer Motion",
    version: "v11",
    description: "Bibliothèque d'animations pour React",
    icon: SiFramer,
    color: "#0055FF",
    bgGradient: "linear-gradient(135deg, #0055FF20, #0055FF10)",
    category: "web"
  },
  {
    name: "Reanimated",
    version: "v3",
    description: "Bibliothèque d'animations performantes",
    icon: FaMagic,
    color: "#4A90E2",
    bgGradient: "linear-gradient(135deg, #4A90E220, #4A90E210)",
    category: "mobile"
  },
  {
    name: "Gesture Handler",
    version: "v2",
    description: "Gestion avancée des gestes tactiles",
    icon: FaHandPointer,
    color: "#7B68EE",
    bgGradient: "linear-gradient(135deg, #7B68EE20, #7B68EE10)",
    category: "mobile"
  },
  {
    name: "Three.js",
    version: "v0.160",
    description: "Bibliothèque JavaScript pour créer des expériences 3D",
    icon: SiThreedotjs,
    color: "#000000",
    bgGradient: "linear-gradient(135deg, #00000020, #00000010)",
    category: "web"
  },
  {
    name: "GSAP",
    version: "v3",
    description: "Bibliothèque d'animations haute performance",
    icon: SiGreensock,
    color: "#88CE02",
    bgGradient: "linear-gradient(135deg, #88CE0220, #88CE0210)",
    category: "web"
  }
];

const TechUsed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "Tout", icon: FaLayerGroup },
    { id: "mobile", label: "Mobile", icon: FaMobile },
    { id: "web", label: "Web", icon: FaGlobe },
    { id: "both", label: "Fullstack", icon: FaBolt }
  ];

  const filteredTechnologies = selectedCategory === "all"
    ? technologies
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Section>
        <Container>
          <motion.div variants={fadeIn("up", "tween", 0.1, 1)}>
            <Header>
              <Title>Technologies Utilisées</Title>
              <Subtitle>
                Un stack moderne et performant pour créer des applications exceptionnelles
              </Subtitle>
            </Header>
          </motion.div>

          {/* Filtres de catégories */}
          <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
            <FilterContainer>
              {categories.map((category) => (
                <FilterButton
                  key={category.id}
                  active={selectedCategory === category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  as={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon size={18} />
                  {category.label}
                  <CountBadge active={selectedCategory === category.id}>
                    {category.id === "all"
                      ? technologies.length
                      : technologies.filter(t => t.category === category.id).length}
                  </CountBadge>
                </FilterButton>
              ))}
            </FilterContainer>
          </motion.div>

          {/* Grille de technologies avec AnimatePresence */}
          <TechGrid>
            <AnimatePresence mode="wait">
              {filteredTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <TechCard
                    bgGradient={tech.bgGradient}
                    color={tech.color}
                    isHovered={hoveredCard === index}
                  >
                    <CardGlow isVisible={hoveredCard === index} color={tech.color} />

                    <CardHeader>
                      <IconContainer color={tech.color}>
                        <tech.icon size={24} color={tech.color} />
                      </IconContainer>
                      <Version>{tech.version}</Version>
                    </CardHeader>

                    <CardContent>
                      <TechName>{tech.name}</TechName>
                      <TechDescription>{tech.description}</TechDescription>
                    </CardContent>

                    <CardFooter>
                      <StatusIndicator color={tech.color} />
                      <StatusText>Utilisé activement</StatusText>
                    </CardFooter>

                    {/* Badge catégorie */}
                    <CategoryBadge category={tech.category}>
                      {tech.category === "mobile" && <FaMobile size={16} />}
                      {tech.category === "web" && <FaGlobe size={16} />}
                      {tech.category === "both" && <FaBolt size={16} />}
                    </CategoryBadge>
                  </TechCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </TechGrid>

          {/* Message si aucune technologie */}
          {filteredTechnologies.length === 0 && (
            <EmptyState
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <EmptyIcon><FaSearch size={48} /></EmptyIcon>
              <EmptyText>Aucune technologie trouvée dans cette catégorie</EmptyText>
            </EmptyState>
          )}
        </Container>
      </Section>
    </motion.div>
  );
};

const Section = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${props => props.active
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    : 'rgba(255, 255, 255, 0.9)'};
  color: ${props => props.active ? 'white' : '#64748b'};
  border: 2px solid ${props => props.active ? '#667eea' : '#e2e8f0'};
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${props => props.active
    ? '0 10px 25px rgba(102, 126, 234, 0.3)'
    : '0 4px 12px rgba(0, 0, 0, 0.05)'};

  svg {
    flex-shrink: 0;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
    border-color: #667eea;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.25rem;
    font-size: 0.9rem;
  }
`;

const CountBadge = styled.span<{ active: boolean }>`
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.25)' : '#667eea'};
  color: ${props => props.active ? 'white' : 'white'};
  padding: 0.15rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  min-width: 24px;
  text-align: center;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  min-height: 400px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const TechCard = styled.div<{ bgGradient: string; color: string; isHovered: boolean }>`
  background: ${props => props.bgGradient};
  backdrop-filter: blur(10px);
  border: 2px solid ${props => props.isHovered ? props.color : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 1.25rem;
  padding: 1.75rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 1.25rem;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const CardGlow = styled.div<{ isVisible: boolean; color: string }>`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    ${props => props.color}30 0%,
    ${props => props.color}15 30%,
    transparent 70%
  );
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.5s ease;
  pointer-events: none;
  animation: ${props => props.isVisible ? 'rotate 6s linear infinite' : 'none'};
  z-index: 0;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const IconContainer = styled.div<{ color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: ${props => `${props.color}20`};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  ${TechCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 25px ${props => `${props.color}40`};
  }
`;


const Version = styled.span`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const CardContent = styled.div`
  margin-bottom: 1.5rem;
`;

const TechName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
`;

const TechDescription = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StatusIndicator = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.color};
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const StatusText = styled.span`
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
`;

const CategoryBadge = styled.div<{ category: string }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.25rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.4rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

const EmptyIcon = styled.div`
  margin-bottom: 1rem;
  opacity: 0.5;
  color: #64748b;
`;

const EmptyText = styled.p`
  font-size: 1.125rem;
  color: #64748b;
`;

export default TechUsed; 