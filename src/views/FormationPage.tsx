'use client'

import { useMemo } from "react";

// Import groupe de tous les composants formation
import {
  FormationHeader,
  FormationCard,
  StatsSection,
  FormationFooter,
  FAQSection
} from "../components/formation";

// Import des donnees et hooks
import { formations, pageTexts } from "../utils/formationData";
import { useCountdown } from "../hooks/useCountdown";

export default function FormationPage() {
  const countdown = useCountdown();

  // Memorisation des formations avec countdown pour optimiser les rendus
  const formationsWithCountdown = useMemo(() => {
    return formations.map(formation => ({
      ...formation,
      ...(formation.hasCountdown && { countdown })
    }));
  }, [countdown]);

  return (
    <div className="bg-white min-h-screen text-[#1a202c] overflow-x-hidden">
      {/* 1. Header avec menu de navigation */}
      <FormationHeader />

      {/* 2. Section des formations */}
      <section id="formations-grid" className="py-20 px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-3xl font-black mb-6 text-[#2d3748]">
            {pageTexts.intro.title.split(' ').map((word, index) =>
              word === 'Formations' ? (
                <span
                  key={index}
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(45deg, #667eea, #764ba2)' }}
                >
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h2>
          <p className="text-xl md:text-base text-[#718096] max-w-[800px] mx-auto leading-relaxed">
            {pageTexts.intro.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 md:gap-10">
          {formationsWithCountdown.map((formation, index) => (
            <FormationCard key={index} {...formation} index={index} />
          ))}
        </div>
      </section>

      {/* 3. Section des statistiques et temoignages */}
      <StatsSection />

      {/* 4. Section FAQ */}
      <FAQSection />

      {/* 5. Footer avec contact et informations */}
      <FormationFooter />
    </div>
  );
}
