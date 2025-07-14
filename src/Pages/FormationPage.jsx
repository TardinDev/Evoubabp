import { useMemo } from "react";
import styled from "styled-components";

// Import groupé de tous les composants formation
import {
  FormationHeader,
  FormationCard,
  StatsSection,
  FormationFooter,
  FAQSection
} from "../components/formation";

// Import des données et hooks
import { formations, pageTexts } from "../utils/formationData";
import { useCountdown } from "../hooks/useCountdown";

export default function FormationPage() {
  const countdown = useCountdown();

  // Mémorisation des formations avec countdown pour optimiser les rendus
  const formationsWithCountdown = useMemo(() => {
    return formations.map(formation => ({
      ...formation,
      ...(formation.hasCountdown && { countdown })
    }));
  }, [countdown]);

  return (
    <PageWrapper>
      {/* 1. Header avec menu de navigation */}
      <FormationHeader />

      {/* 2. Section des formations */}
      <FormationsSection id="formations-grid">
        <SectionIntro>
          <IntroTitle>
            {pageTexts.intro.title.split(' ').map((word, index) => 
              word === 'Formations' ? (
                <GradientText key={index}>{word}</GradientText>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </IntroTitle>
          <IntroSubtitle>
            {pageTexts.intro.subtitle}
          </IntroSubtitle>
        </SectionIntro>

        <FormationsGrid>
          {formationsWithCountdown.map((formation, index) => (
            <FormationCard key={index} {...formation} index={index} />
          ))}
        </FormationsGrid>
      </FormationsSection>

      {/* 3. Section des statistiques et témoignages */}
      <StatsSection />

      {/* 4. Section FAQ */}
      <FAQSection />

      {/* 5. Footer avec contact et informations */}
      <FormationFooter />
    </PageWrapper>
  );
}

// Styles optimisés de la page
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

 