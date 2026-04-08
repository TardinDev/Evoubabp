'use client'

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import {
  HiOutlineLightBulb,
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineLockClosed
} from "react-icons/hi";
import { FaReact, FaNodeJs, FaRocket, FaGitAlt, FaDocker, FaKey, FaLock } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiGithubactions, SiVitest, SiEslint, SiPrettier, SiSentry, SiJsonwebtokens, SiSpringsecurity } from "react-icons/si";

interface HowItWorksProps {
  id?: string;
}

const processSteps = [
  {
    number: "01",
    title: "Analyse & Design",
    subtitle: "Comprendre vos besoins",
    description: "Définition des objectifs, analyse des besoins utilisateurs et création de maquettes UI/UX pour une expérience optimale.",
    icon: HiOutlineLightBulb,
    color: "#8b5cf6",
    deliverables: ["Cahier des charges", "Wireframes", "Maquettes Figma"],
  },
  {
    number: "02",
    title: "Frontend",
    subtitle: "Interfaces modernes",
    description: "Développement d'interfaces utilisateur réactives et performantes avec les technologies les plus récentes.",
    icon: HiOutlineCode,
    color: "#61dafb",
    techs: [
      { icon: FaReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
  },
  {
    number: "03",
    title: "Backend",
    subtitle: "Logique métier robuste",
    description: "Architecture serveur scalable, APIs RESTful sécurisées et gestion de base de données optimisée.",
    icon: HiOutlineServer,
    color: "#6db33f",
    techs: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiSpringboot, name: "Spring Boot" },
      { icon: FaLock, name: "Clerk" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: SiSpringsecurity, name: "Spring Security" },
    ],
  },
  {
    number: "04",
    title: "Qualité & CI/CD",
    subtitle: "Automatisation complète",
    description: "Pipeline d'intégration continue, tests automatisés et déploiement sécurisé avec monitoring en temps réel.",
    icon: HiOutlineShieldCheck,
    color: "#f59e0b",
    techs: [
      { icon: SiGithubactions, name: "GitHub Actions" },
      { icon: FaDocker, name: "Docker" },
      { icon: SiVitest, name: "Vitest" },
    ],
  },
];

const devPractices = [
  {
    icon: SiGithubactions,
    title: "CI/CD",
    description: "Build et déploiement automatiques sur chaque commit",
    color: "#2088FF",
  },
  {
    icon: SiVitest,
    title: "Tests Automatisés",
    description: "Tests unitaires et d'intégration avec couverture de code",
    color: "#6E9F18",
  },
  {
    icon: SiEslint,
    title: "Linting",
    description: "Analyse statique du code pour garantir la qualité",
    color: "#4B32C3",
  },
  {
    icon: SiPrettier,
    title: "Formatage",
    description: "Code formaté automatiquement pour une cohérence parfaite",
    color: "#F7B93E",
  },
  {
    icon: FaGitAlt,
    title: "Pre-commit Hooks",
    description: "Vérifications automatiques avant chaque commit",
    color: "#F05032",
  },
  {
    icon: SiSentry,
    title: "Monitoring",
    description: "Suivi des erreurs et performances en production",
    color: "#362D59",
  },
];

const HowItWorks: React.FC<HowItWorksProps> = ({ id }) => {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <style>{`
        @keyframes hiw-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .hiw-step-card:hover .hiw-step-icon-wrapper {
          transform: scale(1.1);
        }
        .hiw-practice-card:hover .hiw-practice-icon-wrapper {
          transform: scale(1.1);
        }
        .hiw-cta-button:hover svg {
          transform: translateX(4px);
        }
      `}</style>

      <section
        id={id || "howItWorks"}
        className="relative px-4 pb-16 pt-0 md:px-8 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #4b0082 0%, #380062 50%, #2d004f 100%)',
        }}
      >
        {/* GridOverlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* GlowEffect */}
        <div
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-[1400px] mx-auto z-[2]">
          <motion.div variants={fadeIn("up", "tween", 0.1, 0.8)}>
            <div className="text-center mb-20 pt-16 md:mb-12 md:pt-12">
              <span
                className="inline-block font-mono text-xs tracking-[0.3em] text-[#e0b0ff] px-4 py-2 rounded mb-6"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                MÉTHODOLOGIE
              </span>
              <h2
                className="font-bold text-white leading-tight mb-6"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                }}
              >
                Processus de
                <span
                  className="bg-clip-text"
                  style={{
                    background: 'linear-gradient(135deg, #e0b0ff 0%, #ff9ecd 50%, #ffd700 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {' '}Développement
                </span>
              </h2>
              <p className="text-[1.15rem] text-white/70 max-w-[600px] mx-auto leading-relaxed">
                Une approche structurée et itérative pour transformer
                vos idées en produits digitaux performants
              </p>
            </div>
          </motion.div>

          {/* Timeline Container */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 relative mb-16">
            {/* Timeline Line - only visible on xl */}
            <div
              className="absolute top-[80px] left-[10%] right-[10%] h-[2px] opacity-30 hidden xl:block"
              style={{
                background: 'linear-gradient(90deg, #8b5cf6, #61dafb, #6db33f, #f59e0b)',
              }}
            />

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", 0.2 + index * 0.15, 0.8)}
              >
                <div
                  className="hiw-step-card relative rounded-[20px] p-8 sm:p-6 overflow-hidden backdrop-blur-[10px] transition-all duration-400 hover:translate-y-[-8px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  {/* StepNumber */}
                  <span
                    className="absolute top-6 right-6 text-[2.5rem] font-bold opacity-15 leading-none"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: step.color,
                    }}
                  >
                    {step.number}
                  </span>

                  {/* StepIconWrapper */}
                  <div
                    className="hiw-step-icon-wrapper w-14 h-14 flex items-center justify-center rounded-[14px] mb-6 transition-all duration-300"
                    style={{
                      background: `${step.color}15`,
                      border: `1px solid ${step.color}30`,
                      color: step.color,
                    }}
                  >
                    <step.icon size={28} />
                  </div>

                  {/* StepContent */}
                  <div className="relative z-[2]">
                    <h3
                      className="text-[1.4rem] font-semibold text-white mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <span className="block text-[0.85rem] text-white/50 mb-4">
                      {step.subtitle}
                    </span>
                    <p className="text-[0.95rem] text-white/70 leading-relaxed mb-5">
                      {step.description}
                    </p>

                    {step.techs && (
                      <div className="flex gap-2 flex-wrap">
                        {step.techs.map((tech, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[0.8rem] font-medium"
                            style={{
                              background: `${step.color}10`,
                              border: `1px solid ${step.color}20`,
                              color: step.color,
                            }}
                          >
                            <tech.icon size={14} />
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {step.deliverables && (
                      <div className="flex gap-2 flex-wrap">
                        {step.deliverables.map((item, idx) => (
                          <span
                            key={idx}
                            className="py-1.5 px-3 rounded-[20px] text-xs text-white/80 font-medium"
                            style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* StepConnector - only on xl */}
                  {index < processSteps.length - 1 && (
                    <div
                      className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 hidden xl:flex items-center justify-center opacity-50 z-10"
                      style={{ color: step.color }}
                    >
                      <HiArrowRight size={20} />
                    </div>
                  )}

                  {/* StepGlow */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-80"
                    style={{ background: step.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dev Practices Section */}
          <motion.div variants={fadeIn("up", "tween", 0.7, 0.8)}>
            <div
              className="mb-16 p-4 sm:p-6 md:p-12 md:mb-12 rounded-3xl backdrop-blur-[10px]"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="text-center mb-12 md:mb-8">
                <span
                  className="inline-block font-mono text-[0.7rem] tracking-[0.25em] text-[#ffd700] px-3 py-1.5 rounded mb-4"
                  style={{
                    background: 'rgba(255, 215, 0, 0.1)',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                  }}
                >
                  DÉVELOPPEMENT RIGOUREUX
                </span>
                <h3
                  className="font-semibold text-white mb-3"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  }}
                >
                  Outils & Bonnes Pratiques
                </h3>
                <p className="text-base text-white/60 max-w-[600px] mx-auto leading-relaxed">
                  Un workflow professionnel pour garantir la qualité, la fiabilité et la maintenabilité du code
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4">
                {devPractices.map((practice, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", "spring", 0.1 + index * 0.1, 0.6)}
                  >
                    <div
                      className="hiw-practice-card flex items-start gap-4 p-5 rounded-[14px] transition-all duration-300 hover:translate-y-[-4px]"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      }}
                    >
                      <div
                        className="hiw-practice-icon-wrapper w-11 h-11 min-w-[44px] flex items-center justify-center rounded-[10px] transition-all duration-300"
                        style={{
                          background: `${practice.color}15`,
                          border: `1px solid ${practice.color}25`,
                          color: practice.color,
                        }}
                      >
                        <practice.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h4
                          className="text-base font-semibold text-white mb-1"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {practice.title}
                        </h4>
                        <p className="text-[0.85rem] text-white/60 leading-normal">
                          {practice.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeIn("up", "tween", 0.8, 0.8)}>
            <div
              className="flex items-center justify-between gap-8 p-8 rounded-[20px] backdrop-blur-[10px] md:flex-col md:text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <div className="flex items-center gap-6 md:flex-col">
                <div
                  className="w-[60px] h-[60px] flex items-center justify-center rounded-2xl text-[#ffd700] text-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(224, 176, 255, 0.2))',
                    animation: 'hiw-pulse 2s ease-in-out infinite',
                  }}
                >
                  <FaRocket />
                </div>
                <div>
                  <h4
                    className="text-[1.25rem] font-semibold text-white mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Prêt à démarrer votre projet ?
                  </h4>
                  <p className="text-[0.95rem] text-white/60">
                    Discutons de vos besoins et trouvons la meilleure solution ensemble
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="hiw-cta-button inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base no-underline whitespace-nowrap transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(255,215,0,0.4)]"
                style={{
                  background: 'linear-gradient(135deg, #ffd700, #ffb700)',
                  color: '#2d004f',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Commencer
                <HiArrowRight />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HowItWorks;
