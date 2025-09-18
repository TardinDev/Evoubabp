import PropTypes from "prop-types";
import styled from "styled-components";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";


const contents = [
  {
    "name": "Conception et Analyse",
    "text": "Définir les exigences de l'application et concevoir une interface utilisateur adaptée. Cette phase inclut des maquettes pour assurer une expérience fluide sur toutes les plateformes.",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    "name": "Développement Frontend",
    "text": "Construire des interfaces utilisateur avec des technologies modernes comme React pour le web et React Native pour le mobile.",
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    "name": "Développement Backend",
    "text": "Développer la logique serveur et configurer les bases de données pour assurer une fonctionnalité et des performances optimales.",
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
  {
    "name": "Tests et Déploiement",
    "text": "Effectuer des tests de qualité, corriger les bugs et déployer l'application sur le serveur pour un lancement en production réussi.",
    icon: HiOutlineDesktopComputer,
    bg: "#4A90E2",
  },
];

const ContentItem = ({ item, index }) => (
  <StyledContentItem bg={item.bg} offset={index % 2 === 1}>
    <div className="icon">
      <item.icon size={48} />
    </div>
    <h4>{item.name}</h4>
    <p>{item.text}</p>
  </StyledContentItem>
);

ContentItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Shapes = () => (
  <>
    <Shape src="https://cdn.easyfrontend.com/pictures/sketch/sketch3.png" style={{ top: 0, left: 0 }} />
    <Shape src="https://cdn.easyfrontend.com/pictures/sketch/sketch2.png" style={{ bottom: 0, right: 0 }} />
    <Shape src="https://cdn.easyfrontend.com/pictures/sketch/sketch3.png" style={{ top: 0, right: 0 }} />
  </>
);

interface HowItWorksProps {
  id?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ id }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
    <Section id={id || "howItWorks"}>
      <Shapes />
      <Container>
        <motion.div variants={fadeIn("up", "tween", 0.1, 1)}>
          <Title>Processus de Développement d&apos;Applications</Title>
        </motion.div>
        <ContentGrid>
          {contents.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn(
                i % 2 === 0 ? "left" : "right",
                "spring",
                i * 0.2,
                1
              )}
            >
              <ContentGridItem>
                <ContentItem index={i + 1} item={item} />
              </ContentGridItem>
            </motion.div>
          ))}
        </ContentGrid>
      </Container>
    </Section>
  </motion.div>
);

const Section = styled.section`
  padding: 2rem 0.5rem;
  background-color: ${({ theme }) => (theme === "dark" ? "#0b1727" : "white")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "#27272a")};
  position: relative;
  z-index: 1;
  margin-bottom: 0;
`;

const Container = styled.div`
  padding: 0 1rem;
  max-width: 100%;
  margin: auto;
  overflow-x: hidden; /* Évite tout débordement horizontal */
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  color: #1d1e20;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  cursor: pointer;
  max-width: 100%;
  padding: 1rem 0;

  @media (max-width: 480px) {
    gap: 0.8rem;
    padding: 0.5rem 0;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 3rem;
    margin-top: 2rem;
    overflow-x: auto;
    justify-content: flex-start;

    /* Style de la scrollbar */
    scrollbar-width: thin;
    scrollbar-color: #d1d5db #f3f4f6;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #f3f4f6;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #9ca3af;
    }
  }

  @media (min-width: 1200px) {
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: visible;
  }
`;

const ContentGridItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    min-width: 300px;
    max-width: 350px;
    flex-shrink: 0;
  }

  @media (min-width: 1200px) {
    min-width: 250px;
    max-width: 280px;
    flex: 1;
  }
`;

const StyledContentItem = styled.div`
  background-color: ${({ bg }) => bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ bg }) => `0px 6px 20px ${bg}40`};
  color: #1d1e20;
  font-size: 16px;
  border-radius: 1.5rem;
  text-align: center;
  padding: 1.5rem;
  width: 100%;
  min-height: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 220px;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
    min-height: 300px;
    font-size: 16px;
  }

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: ${({ bg }) => `0px 12px 25px ${bg}60`};
    color: #27272a;
  }

  ${({ offset }) => offset && `@media (min-width: 1024px) { margin-top: 0; }`}

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #ffffff;
    transition: transform 0.3s ease, color 0.3s ease;

    @media (max-width: 480px) {
      font-size: 2.5rem;
      margin-bottom: 0.8rem;
    }

    @media (min-width: 768px) {
      font-size: 4rem;
      margin-bottom: 2rem;
    }

    &:hover {
      transform: scale(1.2);
      color: #1d1e20;
    }
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
    color: #27272a;
    transition: color 0.3s ease;

    @media (max-width: 480px) {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    @media (min-width: 768px) {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }

    &:hover {
      color: #ffffff;
    }
  }

  p {
    opacity: 0.9;
    margin-top: 0.8rem;
    line-height: 1.4;
    font-size: 0.9rem;
    transition: opacity 0.3s ease;

    @media (max-width: 480px) {
      font-size: 0.8rem;
      line-height: 1.3;
      margin-top: 0.5rem;
    }

    @media (min-width: 768px) {
      font-size: 1rem;
      line-height: 1.6;
      margin-top: 1rem;
    }

    &:hover {
      opacity: 1;
      color: #1d1e20;
    }
  }
`;

const Shape = styled.img`
  position: absolute;
  max-width: 200px;
  z-index: -1;
`;

export default HowItWorks;
