import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const technologies = [
  {
    name: "React Native",
    version: "v0.74",
    description: "Framework pour créer des applications mobiles natives",
    icon: "⚛️",
    color: "#61DAFB",
    bgGradient: "linear-gradient(135deg, #61DAFB20, #61DAFB10)",
    category: "mobile"
  },
  {
    name: "Expo",
    version: "v51",
    description: "Plateforme pour développer des applications React Native",
    icon: "🚀",
    color: "#000020",
    bgGradient: "linear-gradient(135deg, #00002020, #00002010)",
    category: "mobile"
  },
  {
    name: "Expo Router",
    version: "v3",
    description: "Système de navigation basé sur les fichiers",
    icon: "🧭",
    color: "#000020",
    bgGradient: "linear-gradient(135deg, #00002020, #00002010)",
    category: "mobile"
  },
  {
    name: "React",
    version: "v18",
    description: "Bibliothèque JavaScript pour créer des interfaces utilisateur",
    icon: "⚛️",
    color: "#61DAFB",
    bgGradient: "linear-gradient(135deg, #61DAFB20, #61DAFB10)",
    category: "web"
  },
  {
    name: "Next.js",
    version: "v14",
    description: "Framework React full-stack avec SSR et SSG",
    icon: "▲",
    color: "#000000",
    bgGradient: "linear-gradient(135deg, #00000020, #00000010)",
    category: "web"
  },
  {
    name: "Vite",
    version: "v5",
    description: "Outil de build ultra-rapide pour les projets web",
    icon: "⚡",
    color: "#646CFF",
    bgGradient: "linear-gradient(135deg, #646CFF20, #646CFF10)",
    category: "web"
  },
  {
    name: "TypeScript",
    version: "v5",
    description: "JavaScript avec typage statique",
    icon: "📘",
    color: "#3178C6",
    bgGradient: "linear-gradient(135deg, #3178C620, #3178C610)",
    category: "both"
  },
  {
    name: "Tailwind CSS",
    version: "v3",
    description: "Framework CSS utility-first pour le design",
    icon: "🎨",
    color: "#06B6D4",
    bgGradient: "linear-gradient(135deg, #06B6D420, #06B6D410)",
    category: "web"
  },
  {
    name: "Styled Components",
    version: "v6",
    description: "CSS-in-JS pour styliser les composants React",
    icon: "💅",
    color: "#DB7093",
    bgGradient: "linear-gradient(135deg, #DB709320, #DB709310)",
    category: "web"
  },
  {
    name: "React Router",
    version: "v6",
    description: "Routage déclaratif pour les applications React",
    icon: "🛣️",
    color: "#CA4245",
    bgGradient: "linear-gradient(135deg, #CA424520, #CA424510)",
    category: "web"
  },
  {
    name: "Zustand",
    version: "v4",
    description: "Gestionnaire d'état léger pour React",
    icon: "🐻",
    color: "#FF6B6B",
    bgGradient: "linear-gradient(135deg, #FF6B6B20, #FF6B6B10)",
    category: "both"
  },
  {
    name: "Tanstack Query",
    version: "v5",
    description: "Gestion des données et cache pour React",
    icon: "🔄",
    color: "#FF4154",
    bgGradient: "linear-gradient(135deg, #FF415420, #FF415410)",
    category: "both"
  },
  {
    name: "Framer Motion",
    version: "v11",
    description: "Bibliothèque d'animations pour React",
    icon: "🎭",
    color: "#0055FF",
    bgGradient: "linear-gradient(135deg, #0055FF20, #0055FF10)",
    category: "web"
  },
  {
    name: "Reanimated",
    version: "v3",
    description: "Bibliothèque d'animations performantes",
    icon: "✨",
    color: "#4A90E2",
    bgGradient: "linear-gradient(135deg, #4A90E220, #4A90E210)",
    category: "mobile"
  },
  {
    name: "Gesture Handler",
    version: "v2",
    description: "Gestion avancée des gestes tactiles",
    icon: "👆",
    color: "#7B68EE",
    bgGradient: "linear-gradient(135deg, #7B68EE20, #7B68EE10)",
    category: "mobile"
  }
];

const TechUsed = () => {
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
          
          <TechGrid>
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeIn(
                  index % 2 === 0 ? "left" : "right", 
                  "spring", 
                  index * 0.1, 
                  1
                )}
              >
                <TechCard bgGradient={tech.bgGradient} color={tech.color}>
                  <CardHeader>
                    <IconContainer>
                      <TechIcon>{tech.icon}</TechIcon>
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
                </TechCard>
              </motion.div>
            ))}
          </TechGrid>
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

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const TechCard = styled.div`
  background: ${props => props.bgGradient};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 1rem;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.color}40;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const TechIcon = styled.span`
  font-size: 1.5rem;
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

const StatusIndicator = styled.div`
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

export default TechUsed; 