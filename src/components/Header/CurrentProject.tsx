import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { 
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReactquery,
  SiNodedotjs,
  SiVite,
  SiPostgresql,
  SiDocker,
  SiPrisma
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

import Lottie from "lottie-react";
import progressBar from "../../shared/assets/animations/progressBar.json";
import ChevronDown from "../../shared/assets/animations/chevronDown.json";

export default function CurrentProject() {
  const handleIcon = () => {
    alert("Naviguez vers le bas pour voir plus de projets !");
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <CurrentProjectStyle>
        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="left-side"
        >
          <h1>Projet Actuel</h1>
          <p>
            Actuellement, je travaille sur un projet logiciel visant à faciliter
            les connexions entre investisseurs et acteurs locaux. L&apos;objectif est de
            permettre des investissements dans divers secteurs, favorisant ainsi le
            développement de régions propices au bien-être de la population.
          </p>
          <div className="progressAndPercent">
            <div className="progress-bar">
              <Lottie animationData={progressBar} loop autoplay />
            </div>
            <p className="completion-text">80% Terminé</p>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn("left", "tween", 0.3, 1)}
          className="technologies"
        >
          <h1> Technologies  Utilisées </h1>
          <motion.div 
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="icons"
          >
            <SiTypescript size={56} color="#3178C6" />
            <FaReact size={56} color="#61DAFB" />
            <SiNextdotjs size={56} color="#000000" />
            <SiTailwindcss size={56} color="#06B6D4" />
            <SiReactquery size={56} color="#FF4154" />
            <SiNodedotjs size={56} color="#3C873A" />
            <SiVite size={48} color="#646CFF" />
            <SiPrisma size={56} color="#2D3748" />
            <SiPostgresql size={56} color="#316192" />
            <SiDocker size={56} color="#2496ED" />
          </motion.div>

          <motion.div 
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="seeMore" 
            onClick={handleIcon}
          >
            <h5>Voir plus de projets</h5>
            <div className="see-more-animation">
              <Lottie animationData={ChevronDown} loop autoplay />
            </div>
          </motion.div>
        </motion.div>
      </CurrentProjectStyle>
    </motion.div>
  );
}

const CurrentProjectStyle = styled.div`
  background-color: #4b0082;
  padding: 1rem 5vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  h1 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #fff;
    margin-top: 0.5rem;
  }

  .left-side {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;
  }

  .progressAndPercent {
    display: flex;
    align-items: center;
    

    .progress-bar {
      width: 100%;
      max-width: 300px;
      height:110px;
    }

    .completion-text {
      font-size: 1.5rem;
      color: #fff;
    }
  }

  .technologies {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      margin-bottom: 1rem;
    }

    .icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;

      svg {
        transition: transform 0.3s ease-in-out;
        cursor: pointer;
      }

      svg:hover {
        transform: scale(1.2);
      }
    }

    .seeMore {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
      cursor: pointer;

      h5 {
        color: #fff;
        font-size: 1.2rem;
        transition: color 0.3s ease-in-out;
      }

      h5:hover {
        color: #ccc;
      }

      .see-more-animation {
        width: 5rem;
        height: 2rem;
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    .progressAndPercent {
      margin-top: 1rem;

      .progress-bar {
        max-width: 200px;
      }
    }

    .icons {
      gap: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }

    .icons {
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .seeMore h5 {
      font-size: 1rem;
    }
  }
`;
