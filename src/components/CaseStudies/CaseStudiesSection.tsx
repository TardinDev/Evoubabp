'use client'

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
      <style>{`
        .cs-study-card:hover .cs-study-image {
          transform: scale(1.05);
        }
      `}</style>

      <section
        id={id || "case-studies"}
        className="relative py-24 px-8 overflow-hidden md:py-16 md:px-4"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
        }}
      >
        <div className="relative max-w-[1200px] mx-auto z-[2]">
          <motion.div variants={fadeIn("up", "tween", 0.1, 0.8)}>
            <div className="text-center mb-16 md:mb-12">
              <span
                className="inline-block font-mono text-xs tracking-[0.3em] text-[#ffd700] px-4 py-2 rounded mb-6"
                style={{
                  background: 'rgba(255, 215, 0, 0.1)',
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                }}
              >
                PORTFOLIO
              </span>
              <h2
                className="font-bold text-white mb-4"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                }}
              >
                Études de{' '}
                <span
                  className="bg-clip-text"
                  style={{
                    background: 'linear-gradient(135deg, #ffd700 0%, #ff9500 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  cas
                </span>
              </h2>
              <p className="text-[1.125rem] text-white/60 max-w-[500px] mx-auto leading-relaxed">
                Découvrez en détail comment j&apos;ai aidé mes clients à atteindre leurs objectifs
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={fadeIn("up", "spring", 0.2 + index * 0.15, 0.8)}
              >
                <div
                  className="cs-study-card rounded-[20px] overflow-hidden transition-all duration-400 hover:translate-y-[-4px]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  {/* StudyHeader */}
                  <div
                    className="grid cursor-pointer grid-cols-1 md:grid-cols-[300px_1fr]"
                    onClick={() => toggleStudy(study.id)}
                  >
                    {/* StudyImageWrapper */}
                    <div className="relative h-[200px] md:h-[180px] overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="cs-study-image w-full h-full object-cover transition-transform duration-400"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.opacity = '0.3';
                        }}
                      />
                      {/* ImageOverlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.3), rgba(22, 33, 62, 0.5))',
                        }}
                      />
                      {/* CategoryBadge */}
                      <span className="absolute top-4 left-4 flex items-center gap-2 backdrop-blur-[10px] text-white text-[0.8rem] px-4 py-2 rounded-[20px]" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
                        {study.categoryIcon}
                        {study.category}
                      </span>
                      {/* YearBadge */}
                      <span
                        className="absolute top-4 right-4 font-mono text-xs font-semibold px-3 py-1.5 rounded"
                        style={{ background: 'rgba(255, 215, 0, 0.9)', color: '#1a1a2e' }}
                      >
                        {study.year}
                      </span>
                    </div>

                    {/* StudyInfo */}
                    <div className="p-8 flex flex-col justify-center">
                      <span className="text-[0.85rem] text-[#ffd700] font-medium mb-2 uppercase tracking-wider">
                        {study.client}
                      </span>
                      <h3
                        className="text-2xl md:text-xl font-semibold text-white mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {study.title}
                      </h3>
                      <div className="flex gap-6 mb-4">
                        <span className="flex items-center gap-2 text-[0.9rem] text-white/60 [&_svg]:text-[#ffd700]">
                          <FaClock /> {study.duration}
                        </span>
                      </div>
                      <button
                        className="inline-flex items-center gap-2 bg-transparent px-6 py-3 rounded-lg text-[0.9rem] font-medium cursor-pointer transition-all duration-300 w-fit text-[#ffd700] hover:bg-[rgba(255,215,0,0.1)]"
                        style={{
                          border: '1px solid rgba(255, 215, 0, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#ffd700';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                        }}
                      >
                        Voir les détails{' '}
                        <FaArrowRight
                          className="transition-transform duration-300"
                          style={{
                            transform: expandedStudy === study.id ? 'rotate(90deg)' : 'rotate(0)',
                          }}
                        />
                      </button>
                    </div>
                  </div>

                  {/* StudyDetails */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: expandedStudy === study.id ? '1000px' : '0',
                      opacity: expandedStudy === study.id ? 1 : 0,
                      padding: expandedStudy === study.id ? '0 2rem 2rem' : '0 2rem',
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {/* DetailsGrid */}
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-6 mb-8">
                      <div>
                        <h4
                          className="text-[1.1rem] font-semibold text-[#ffd700] mb-4"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          Le Défi
                        </h4>
                        <p className="text-[0.95rem] text-white/70 leading-loose">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4
                          className="text-[1.1rem] font-semibold text-[#ffd700] mb-4"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          La Solution
                        </h4>
                        <p className="text-[0.95rem] text-white/70 leading-loose">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* ResultsSection */}
                    <div className="mb-8">
                      <h4
                        className="text-[1.1rem] font-semibold text-[#ffd700] mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Résultats
                      </h4>
                      <div className="grid grid-cols-3 sm:grid-cols-1 gap-4">
                        {study.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="text-center p-6 rounded-xl"
                            style={{
                              background: 'rgba(255, 215, 0, 0.05)',
                              border: '1px solid rgba(255, 215, 0, 0.1)',
                            }}
                          >
                            <div className="text-2xl text-[#ffd700] mb-3">
                              {result.icon}
                            </div>
                            <div
                              className="text-[2rem] font-bold text-white mb-1"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              {result.value}
                            </div>
                            <div className="text-[0.85rem] text-white/60">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* TechSection */}
                    <div>
                      <h4
                        className="text-[1.1rem] font-semibold text-[#ffd700] mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Technologies utilisées
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 rounded-[20px] text-[0.85rem] text-white/80"
                            style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CaseStudiesSection;
