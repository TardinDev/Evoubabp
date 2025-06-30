import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FaGraduationCap, FaBookOpen, FaLaptopCode, FaMobile } from "react-icons/fa";

// Import groupé de tous les composants formation
import {
  FormationHeader,
  FormationCard,
  StatsSection,
  FormationFooter
} from "../components/formation";

// Hook personnalisé pour le countdown
const useCountdown = () => {
  const [countdown, setCountdown] = useState("");

  const updateCountdown = useCallback(() => {
    const now = new Date();
    let nextSession = new Date();

    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    const daysUntilFriday = (5 - day + 7) % 7 || 7;
    nextSession.setDate(now.getDate() + daysUntilFriday);
    nextSession.setHours(21, 0, 0, 0);

    if (day === 5 && (hour < 21 || (hour === 21 && minutes === 0))) {
      nextSession = new Date();
      nextSession.setHours(21, 0, 0, 0);
    }

    if (now >= nextSession) {
      nextSession.setDate(nextSession.getDate() + 7);
    }

    const diff = nextSession - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    setCountdown(
      `${days}d ${hours.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    );
  }, []);

  useEffect(() => {
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [updateCountdown]);

  return countdown;
};

export default function FormationPage() {
  const countdown = useCountdown();

  // Données des formations avec countdown pour le Live Coding
  const formations = [
    {
      icon: FaGraduationCap,
      title: "Développement Web Moderne",
      text: "Maîtrisez React, Next.js, TypeScript et les technologies web les plus demandées. Créez des applications web performantes et évolutives."
    },
    {
      icon: FaMobile,
      title: "Développement Mobile Cross-Platform",
      text: "Développez des applications mobiles avec React Native et Expo. Une formation complète pour créer des apps iOS et Android."
    },
    {
      icon: FaBookOpen,
      title: "Tech Business & Entrepreneuriat",
      text: "Apprenez à lancer votre startup tech, comprendre le marché digital et développer une stratégie commerciale gagnante."
    },
    {
      icon: FaLaptopCode,
      title: "Live Coding & Mentoring",
      text: "Sessions de coding en direct avec un expert. Résolvez des problèmes réels et bénéficiez d&rsquo;un accompagnement personnalisé.",
      countdown // Countdown uniquement pour cette formation
    }
  ];

  return (
    <PageWrapper>
      {/* 1. Header avec menu de navigation */}
      <FormationHeader />

      {/* 2. Section des formations */}
      <FormationsSection id="formations-grid">
        <SectionIntro>
          <IntroTitle>
            🎯 Nos <GradientText>Formations</GradientText> d&rsquo;Excellence
          </IntroTitle>
          <IntroSubtitle>
            Des programmes intensifs conçus par des experts pour vous faire 
            passer au niveau supérieur dans votre carrière tech
          </IntroSubtitle>
        </SectionIntro>

        <FormationsGrid>
          {formations.map((formation, index) => (
            <FormationCard key={index} {...formation} index={index} />
          ))}
        </FormationsGrid>
      </FormationsSection>

      {/* 3. Section des statistiques et témoignages */}
      <StatsSection />

      {/* 4. Section FAQ */}
      <FAQSection id="faq-section">
        <FAQTitle>❓ Questions Fréquentes</FAQTitle>
        <FAQSubtitle>
          Tout ce que vous devez savoir sur nos formations
        </FAQSubtitle>
        <FAQGrid>
          <FAQItem>
            <Question>Les formations sont-elles certifiantes ?</Question>
            <Answer>
              Oui, vous recevrez un certificat de réussite reconnu par l&rsquo;industrie 
              à la fin de chaque formation, validant vos nouvelles compétences.
            </Answer>
          </FAQItem>
          
          <FAQItem>
            <Question>Quel est le niveau requis ?</Question>
            <Answer>
              Nos formations s&rsquo;adaptent à tous les niveaux, du débutant au développeur 
              expérimenté souhaitant se perfectionner dans les dernières technologies.
            </Answer>
          </FAQItem>
          
          <FAQItem>
            <Question>Y a-t-il un suivi après la formation ?</Question>
            <Answer>
              Vous bénéficiez d&rsquo;un accompagnement de 3 mois post-formation 
              et d&rsquo;un accès à vie à notre communauté d&rsquo;anciens élèves.
            </Answer>
          </FAQItem>
          
          <FAQItem>
            <Question>Les formations sont-elles en présentiel ?</Question>
            <Answer>
              Nous proposons des formats hybrides : en ligne, présentiel à Paris, 
              et des sessions immersives selon vos préférences et disponibilités.
            </Answer>
          </FAQItem>
          
          <FAQItem>
            <Question>Quels sont les horaires des formations ?</Question>
            <Answer>
              Les formations sont flexibles avec des sessions en soirée et weekend. 
              Les Live Coding ont lieu chaque vendredi à 21h.
            </Answer>
          </FAQItem>
          
          <FAQItem>
            <Question>Y a-t-il des prérequis techniques ?</Question>
            <Answer>
              Un ordinateur avec accès internet suffit. Nous fournissons tous les outils 
              et ressources nécessaires pour suivre les formations.
            </Answer>
          </FAQItem>
        </FAQGrid>
      </FAQSection>

      {/* 5. Footer avec contact et informations */}
      <FormationFooter />
    </PageWrapper>
  );
}

// Styles de la page
const PageWrapper = styled.div`
  background: white;
  min-height: 100vh;
  color: #1a202c;
  overflow-x: hidden;
`;

const FormationsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionIntro = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const IntroTitle = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  color: #2d3748;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const IntroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #718096;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FormationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FAQSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239CA3AF' fill-opacity='0.03'%3E%3Cpath d='M15 15c0-8.284-6.716-15-15-15v15h15zm15 0c0-8.284-6.716-15-15-15v15h15z'/%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 1;
  }
`;

const FAQTitle = styled.h2`
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: #2d3748;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FAQSubtitle = styled.p`
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 1.1rem;
  color: #718096;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FAQGrid = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const Question = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const Answer = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 1rem;
`;

 