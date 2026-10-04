'use client'

import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

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

const avantages = [
  "Code review de vos projets",
  "Aide sur vos blocages en temps réel",
  "Planning d'apprentissage sur mesure",
  "Sessions de mentorat en visio",
];

const featuredCount = formations.filter((f) => f.featured).length;
const regularCount = formations.length - featuredCount;

// Largeur de chaque carte pour que la grille (6 colonnes en lg, 2 en md) reste pleine
let regularSeen = 0;
const spans = formations.map((formation) => {
  if (formation.featured) return "lg:col-span-3";
  regularSeen += 1;
  const fromEnd = regularCount - regularSeen + 1;
  const md = regularCount % 2 === 1 && fromEnd === 1 ? "md:col-span-2" : "";
  let lg = "lg:col-span-2";
  if (regularCount % 3 === 2 && fromEnd <= 2) lg = "lg:col-span-3";
  if (regularCount % 3 === 1 && fromEnd === 1) lg = "lg:col-span-6";
  return `${md} ${lg}`;
});

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function FormationPage() {
  const countdown = useCountdown();

  return (
    <div className="bg-[#F8F7F1] min-h-screen text-[#0a0a0a] overflow-x-hidden">
      {/* 1. Header avec menu de navigation */}
      <FormationHeader />

      <main>
        {/* 2. Section des formations */}
        <section id="formations-grid" className="py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <h2
              className="font-extrabold leading-[1.1] tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.75rem)' }}
            >
              {pageTexts.intro.title}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-black/65 max-w-2xl mb-12">
              {pageTexts.intro.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-t border-l border-black/15">
              {formations.map((formation, index) => (
                <FormationCard
                  key={formation.title}
                  {...formation}
                  index={index}
                  countdown={formation.hasCountdown ? countdown : undefined}
                  className={spans[index]}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3. Section des statistiques et temoignages */}
        <StatsSection />

        {/* 4. Section FAQ */}
        <FAQSection />

        {/* 5. CTA contact personnalisé */}
        <section id="contact-section" className="px-6 md:px-10 pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto bg-[#0a0a0a] text-[#F8F7F1] p-8 md:p-14">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 lg:items-end">
              <div>
                <h2
                  className="font-extrabold leading-tight tracking-tight mb-3"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
                >
                  Besoin d&apos;un accompagnement personnalisé ?
                </h2>
                <p className="text-base leading-relaxed text-white/70 mb-7 max-w-xl">
                  Progressez plus vite avec un suivi individuel adapté à votre niveau et à vos objectifs.
                  Contactez Davy pour définir ensemble votre parcours.
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 m-0 p-0 list-none">
                  {avantages.map((avantage) => (
                    <li key={avantage} className="flex gap-3 text-sm text-white/85">
                      <span
                        aria-hidden="true"
                        className="shrink-0 mt-2 inline-block w-1 h-1 rounded-full bg-white"
                      />
                      <span>{avantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/33766450771?text=Bonjour%20Davy%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20un%20suivi%20personnalis%C3%A9%20pour%20ma%20formation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#25D366] hover:bg-[#1da851] text-[#0a0a0a] text-sm font-semibold no-underline transition-colors duration-300 ${focusRing}`}
                >
                  <FaWhatsapp aria-hidden="true" size={20} />
                  Contacter via WhatsApp
                </a>
                <a
                  href="mailto:tardindavy@gmail.com?subject=Suivi%20personnalis%C3%A9%20-%20Formation%20Evoubabp"
                  className={`inline-flex items-center justify-center gap-3 px-7 py-4 border border-white/40 hover:bg-white hover:text-[#0a0a0a] text-white text-sm font-semibold no-underline transition-colors duration-300 ${focusRing}`}
                >
                  <IoIosMail aria-hidden="true" size={20} />
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Footer avec contact et informations */}
      <FormationFooter />
    </div>
  );
}
