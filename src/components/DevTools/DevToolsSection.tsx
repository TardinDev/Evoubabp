'use client'

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { FaRobot, FaBug, FaChartLine, FaShieldAlt, FaCode, FaBell, FaUserTie, FaLightbulb, FaBrain } from "react-icons/fa";

const DevToolsSection = () => {
  return (
    <>
      <style>{`
        @keyframes devtools-pulseGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        @keyframes devtools-badgePulse {
          0%, 100% {
            box-shadow:
              0 0 20px rgba(217, 119, 6, 0.3),
              inset 0 0 20px rgba(255, 255, 255, 0.05);
          }
          50% {
            box-shadow:
              0 0 30px rgba(217, 119, 6, 0.5),
              inset 0 0 30px rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <section
          className="relative overflow-hidden py-24 px-8"
          style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #0f172a 50%, #1e293b 100%)' }}
        >
          {/* ::before pseudo-element */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 20% 20%, rgba(217, 119, 6, 0.15) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(225, 29, 72, 0.15) 0%, transparent 40%)',
              animation: 'devtools-pulseGlow 8s ease-in-out infinite',
            }}
          />
          {/* ::after pseudo-element (top line) */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(217, 119, 6, 0.5), rgba(124, 58, 237, 0.5), rgba(225, 29, 72, 0.5), transparent)' }}
          />

          <div className="max-w-[1400px] mx-auto relative z-[1]">
            <motion.div variants={fadeIn("up", "tween", 0.1, 1)}>
              <div className="text-center mb-12">
                <div
                  className="inline-flex items-center gap-3 py-3 px-8 border-2 rounded-full text-[#fbbf24] text-[0.9rem] font-bold tracking-wider uppercase mb-8 backdrop-blur-[10px]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.2), rgba(124, 58, 237, 0.2))',
                    borderColor: 'rgba(217, 119, 6, 0.4)',
                    animation: 'devtools-badgePulse 3s ease-in-out infinite',
                  }}
                >
                  <span className="flex items-center text-[1.2rem] text-[#fbbf24]"><FaUserTie /></span>
                  Expertise & Excellence
                </div>
                <h2
                  className="text-5xl max-md:text-[2rem] font-bold mb-6 bg-clip-text"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Développement Rigoureux, Assisté par l&apos;IA
                </h2>
                <p className="text-[1.3rem] max-md:text-[1.05rem] text-slate-300 max-w-[900px] mx-auto leading-[1.9] text-center">
                  Chez TardinDavy, nous ne faisons pas du &quot;vibe coding&quot;. Nous sommes d&apos;abord des
                  <span
                    className="font-semibold bg-clip-text"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  > développeurs experts</span> qui utilisent l&apos;IA comme
                  <span
                    className="font-semibold bg-clip-text"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  > accélérateur</span>, pas comme remplacement.
                  Chaque ligne de code est <span
                    className="font-semibold bg-clip-text"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >minutieusement scrutée</span> et validée.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 my-12 mb-16">
                {/* Philosophy Card 1 */}
                <div className="flex gap-6 p-8 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-[10px] transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:-translate-y-[5px]">
                  <div
                    className="w-[60px] h-[60px] min-w-[60px] rounded-[15px] flex items-center justify-center"
                    style={{
                      background: '#3b82f620',
                      border: '2px solid #3b82f640',
                      color: '#3b82f6',
                    }}
                  >
                    <FaUserTie size={32} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[1.25rem] font-bold text-white mb-3">L&apos;Humain d&apos;abord</h4>
                    <p className="text-[0.95rem] text-slate-300 leading-[1.7] [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                      L&apos;expertise humaine reste au coeur du processus. L&apos;IA propose,
                      <strong> le développeur décide, valide et optimise</strong>.
                    </p>
                  </div>
                </div>

                {/* Philosophy Card 2 */}
                <div className="flex gap-6 p-8 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-[10px] transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:-translate-y-[5px]">
                  <div
                    className="w-[60px] h-[60px] min-w-[60px] rounded-[15px] flex items-center justify-center"
                    style={{
                      background: '#7c3aed20',
                      border: '2px solid #7c3aed40',
                      color: '#7c3aed',
                    }}
                  >
                    <FaLightbulb size={32} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[1.25rem] font-bold text-white mb-3">IA = Accélérateur</h4>
                    <p className="text-[0.95rem] text-slate-300 leading-[1.7] [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                      Les outils IA permettent de <strong>gagner du temps sur les tâches répétitives</strong>
                      {' '}pour se concentrer sur l&apos;architecture et l&apos;innovation.
                    </p>
                  </div>
                </div>

                {/* Philosophy Card 3 */}
                <div className="flex gap-6 p-8 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-[10px] transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:-translate-y-[5px]">
                  <div
                    className="w-[60px] h-[60px] min-w-[60px] rounded-[15px] flex items-center justify-center"
                    style={{
                      background: '#e11d4820',
                      border: '2px solid #e11d4840',
                      color: '#e11d48',
                    }}
                  >
                    <FaShieldAlt size={32} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[1.25rem] font-bold text-white mb-3">Contrôle Total</h4>
                    <p className="text-[0.95rem] text-slate-300 leading-[1.7] [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                      Chaque suggestion d&apos;IA est <strong>analysée, testée et validée</strong> selon
                      nos standards de qualité exigeants.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section Divider */}
            <div className="flex items-center gap-8 my-16 mb-12">
              <div className="flex-1 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, rgba(217, 119, 6, 0.5), transparent)' }} />
              <h3 className="text-2xl font-bold text-[#fbbf24] whitespace-nowrap uppercase tracking-[0.1em]">
                Nos Outils d&apos;Excellence
              </h3>
              <div className="flex-1 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, rgba(217, 119, 6, 0.5), transparent)' }} />
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] max-md:grid-cols-1 gap-10 mb-16">
              {/* Claude Code Card */}
              <motion.div variants={fadeIn("up", "spring", 0.3, 1)}>
                <div
                  className="relative overflow-hidden rounded-3xl p-10 transition-all duration-400 hover:-translate-y-3 hover:scale-[1.02] before:content-[''] before:absolute before:inset-0 before:pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                    border: '2px solid rgba(217, 119, 6, 0.5)',
                    boxShadow: '0 0 40px rgba(217, 119, 6, 0.3)',
                  }}
                >
                  {/* before pseudo-element overlay */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)' }} />

                  {/* Featured Badge */}
                  <div className="absolute top-6 right-6 py-2 px-4 bg-white/95 rounded-[20px] text-[0.75rem] font-bold text-[#D97706] uppercase tracking-wider shadow-[0_4px_12px_rgba(0,0,0,0.2)] z-[2]">
                    Assistant Principal
                  </div>

                  {/* Card Glow */}
                  <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, #D9770640 0%, transparent 70%)' }} />

                  {/* Tool Header */}
                  <div className="text-center mb-8 relative z-[1]">
                    <div className="w-20 h-20 mx-auto mb-6 bg-white/95 rounded-[20px] flex items-center justify-center text-[#D97706] shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-110 hover:rotate-[5deg]">
                      <FaBrain size={40} />
                    </div>
                    <h3 className="text-[2rem] font-bold text-white mb-2">Claude Code</h3>
                    <p className="text-base text-white/80 font-medium">Assistant IA de Développement Expert</p>
                  </div>

                  {/* Tool Description */}
                  <p className="text-[1.125rem] text-white/90 leading-[1.8] mb-8 relative z-[1] [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                    Claude Code est notre assistant de développement de confiance. Il accélère la création
                    de code, mais <strong>chaque suggestion est rigoureusement examinée</strong> par
                    TardinDavy avant intégration. L&apos;IA propose, l&apos;expert valide.
                  </p>

                  {/* Features List */}
                  <div className="flex flex-col gap-6 mb-8 relative z-[1]">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 min-w-[40px] bg-white/95 rounded-[10px] flex items-center justify-center text-[#D97706] text-[1.125rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                        <FaCode />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[1.125rem] font-semibold text-white mb-2">Génération de Code Intelligente</h4>
                        <p className="text-[0.9375rem] text-white/80 leading-relaxed [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                          Accélère le développement en proposant des solutions pertinentes, toujours
                          <strong> revues et optimisées</strong> par un développeur expert avant validation
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 min-w-[40px] bg-white/95 rounded-[10px] flex items-center justify-center text-[#D97706] text-[1.125rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                        <FaUserTie />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[1.125rem] font-semibold text-white mb-2">Validation Humaine Systématique</h4>
                        <p className="text-[0.9375rem] text-white/80 leading-relaxed [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                          Aucun code généré n&apos;est intégré sans une <strong>analyse minutieuse</strong> :
                          architecture, performance, sécurité, maintenabilité et best practices
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 min-w-[40px] bg-white/95 rounded-[10px] flex items-center justify-center text-[#D97706] text-[1.125rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                        <FaLightbulb />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[1.125rem] font-semibold text-white mb-2">Gain de Temps, Pas de Compromis</h4>
                        <p className="text-[0.9375rem] text-white/80 leading-relaxed [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                          Permet de se concentrer sur l&apos;architecture et la logique métier complexe
                          en déléguant les tâches répétitives, <strong>sans sacrifier la qualité</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Impact Badge */}
                  <div className="bg-white/95 rounded-xl py-4 px-6 text-center relative z-[1] shadow-[0_4px_20px_rgba(0,0,0,0.15)]" style={{ border: '2px solid #D9770640' }}>
                    <p className="text-base font-bold text-[#1a202c] m-0">+400% de productivité avec contrôle qualité à 100%</p>
                  </div>
                </div>
              </motion.div>

              {/* CodeRabbit Card */}
              <motion.div variants={fadeIn("left", "spring", 0.4, 1)}>
                <div
                  className="relative overflow-hidden rounded-3xl p-10 transition-all duration-400 hover:-translate-y-3 hover:scale-[1.02] before:content-[''] before:absolute before:inset-0 before:pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)' }} />

                  {/* Card Glow */}
                  <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, #7C3AED40 0%, transparent 70%)' }} />

                  <div className="text-center mb-8 relative z-[1]">
                    <div className="w-20 h-20 mx-auto mb-6 bg-white/95 rounded-[20px] flex items-center justify-center text-[#7C3AED] shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-110 hover:rotate-[5deg]">
                      <FaRobot size={40} />
                    </div>
                    <h3 className="text-[2rem] font-bold text-white mb-2">CodeRabbit</h3>
                    <p className="text-base text-white/80 font-medium">Revue de Code Intelligente</p>
                  </div>

                  <p className="text-[1.125rem] text-white/90 leading-[1.8] mb-8 relative z-[1] [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                    CodeRabbit est notre assistant IA qui révolutionne le processus de revue de code.
                    Il analyse automatiquement chaque ligne de code, détecte les anomalies et garantit
                    les meilleures pratiques de développement.
                  </p>

                  <div className="flex flex-col gap-6 mb-8 relative z-[1]">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 min-w-[40px] bg-white/95 rounded-[10px] flex items-center justify-center text-[#7C3AED] text-[1.125rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                        <FaCode />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[1.125rem] font-semibold text-white mb-2">Analyse Automatique</h4>
                        <p className="text-[0.9375rem] text-white/80 leading-relaxed [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                          Revue intelligente de chaque pull request avec détection de bugs,
                          vulnérabilités de sécurité et anti-patterns
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 min-w-[40px] bg-white/95 rounded-[10px] flex items-center justify-center text-[#7C3AED] text-[1.125rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                        <FaChartLine />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[1.125rem] font-semibold text-white mb-2">Suggestions d&apos;Amélioration</h4>
                        <p className="text-[0.9375rem] text-white/80 leading-relaxed [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                          Recommandations contextuelles pour optimiser les performances,
                          améliorer la lisibilité et réduire la complexité du code
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 min-w-[40px] bg-white/95 rounded-[10px] flex items-center justify-center text-[#7C3AED] text-[1.125rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                        <FaShieldAlt />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[1.125rem] font-semibold text-white mb-2">Qualité Garantie</h4>
                        <p className="text-[0.9375rem] text-white/80 leading-relaxed [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                          Assurance qualité continue avec respect des standards de code et
                          prévention des régressions avant la fusion
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/95 rounded-xl py-4 px-6 text-center relative z-[1] shadow-[0_4px_20px_rgba(0,0,0,0.15)]" style={{ border: '2px solid #7C3AED40' }}>
                    <p className="text-base font-bold text-[#1a202c] m-0">-60% de bugs détectés en amont</p>
                  </div>
                </div>
              </motion.div>

              {/* Sentry Card */}
              <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
                <div
                  className="relative overflow-hidden rounded-3xl p-10 transition-all duration-400 hover:-translate-y-3 hover:scale-[1.02] before:content-[''] before:absolute before:inset-0 before:pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)' }} />

                  {/* Card Glow */}
                  <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, #E11D4840 0%, transparent 70%)' }} />

                  <div className="text-center mb-8 relative z-[1]">
                    <div className="w-20 h-20 mx-auto mb-6 bg-white/95 rounded-[20px] flex items-center justify-center text-[#E11D48] shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-110 hover:rotate-[5deg]">
                      <FaBug size={40} />
                    </div>
                    <h3 className="text-[2rem] font-bold text-white mb-2">Sentry</h3>
                    <p className="text-base text-white/80 font-medium">Monitoring en Temps Réel</p>
                  </div>

                  <p className="text-[1.125rem] text-white/90 leading-[1.8] mb-8 relative z-[1] [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                    Sentry est notre système de surveillance qui veille sur vos applications 24/7.
                    Il capture chaque erreur, trace son origine et nous alerte instantanément pour
                    une résolution ultra-rapide.
                  </p>

                  <div className="flex flex-col gap-6 mb-8 relative z-[1]">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 min-w-[40px] bg-white/95 rounded-[10px] flex items-center justify-center text-[#E11D48] text-[1.125rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                        <FaBug />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[1.125rem] font-semibold text-white mb-2">Détection Proactive</h4>
                        <p className="text-[0.9375rem] text-white/80 leading-relaxed [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                          Capture automatique des erreurs avec stack traces détaillées,
                          contexte utilisateur et informations d&apos;environnement
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 min-w-[40px] bg-white/95 rounded-[10px] flex items-center justify-center text-[#E11D48] text-[1.125rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                        <FaBell />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[1.125rem] font-semibold text-white mb-2">Alertes Instantanées</h4>
                        <p className="text-[0.9375rem] text-white/80 leading-relaxed [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                          Notifications en temps réel sur les incidents critiques avec
                          priorisation intelligente et escalade automatique
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 min-w-[40px] bg-white/95 rounded-[10px] flex items-center justify-center text-[#E11D48] text-[1.125rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                        <FaChartLine />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[1.125rem] font-semibold text-white mb-2">Analyse Approfondie</h4>
                        <p className="text-[0.9375rem] text-white/80 leading-relaxed [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                          Tableaux de bord détaillés avec tendances, métriques de performance
                          et insights pour améliorer la stabilité des applications
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/95 rounded-xl py-4 px-6 text-center relative z-[1] shadow-[0_4px_20px_rgba(0,0,0,0.15)]" style={{ border: '2px solid #E11D4840' }}>
                    <p className="text-base font-bold text-[#1a202c] m-0">99.9% de disponibilité garantie</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Expertise Section */}
            <motion.div variants={fadeIn("up", "tween", 0.7, 1)}>
              <div className="my-16 mb-12">
                <div
                  className="flex max-md:flex-col gap-8 items-center p-12 max-md:p-8 max-md:text-center rounded-3xl backdrop-blur-[10px] relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.15), rgba(124, 58, 237, 0.15))',
                    border: '2px solid rgba(217, 119, 6, 0.3)',
                  }}
                >
                  {/* before pseudo overlay */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 100%, rgba(217, 119, 6, 0.2), transparent 50%)' }} />

                  <div className="w-[100px] h-[100px] min-w-[100px] rounded-[20px] flex items-center justify-center text-white shadow-[0_10px_40px_rgba(217,119,6,0.4)] relative z-[1]" style={{ background: 'linear-gradient(135deg, #D97706, #B45309)' }}>
                    <FaUserTie size={48} />
                  </div>
                  <div className="flex-1 relative z-[1]">
                    <h3 className="text-[1.75rem] font-bold text-[#fbbf24] mb-4">L&apos;Expertise TardinDavy : Votre Garantie Qualité</h3>
                    <p className="text-[1.1rem] text-slate-200 leading-[1.8] [&_strong]:text-[#fbbf24] [&_strong]:font-semibold">
                      En tant que développeur expert, je ne me contente jamais de copier-coller du code généré par IA.
                      Chaque ligne est <strong>analysée, comprise, optimisée et testée</strong>. L&apos;IA m&apos;aide à aller plus vite,
                      mais c&apos;est <strong>mon expertise qui garantit la qualité, la sécurité et la maintenabilité</strong> de vos projets.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benefits Section */}
            <motion.div variants={fadeIn("up", "tween", 0.8, 1)}>
              <div className="rounded-3xl p-12 px-8 backdrop-blur-[10px]" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3
                  className="text-[2.25rem] font-bold text-center mb-12 bg-clip-text"
                  style={{
                    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  L&apos;Impact Concret sur Vos Projets
                </h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
                  <div className="text-center py-8 px-6 bg-white/[0.03] rounded-[1.25rem] border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.08] hover:border-[rgba(217,119,6,0.4)] hover:shadow-[0_10px_30px_rgba(217,119,6,0.2)]">
                    <div className="text-[2rem] text-[#fbbf24] mb-4"><FaChartLine /></div>
                    <div
                      className="text-[3.5rem] font-bold mb-3 bg-clip-text"
                      style={{
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      95%
                    </div>
                    <p className="text-base text-slate-300 font-medium leading-normal">Réduction du temps de débogage</p>
                  </div>

                  <div className="text-center py-8 px-6 bg-white/[0.03] rounded-[1.25rem] border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.08] hover:border-[rgba(217,119,6,0.4)] hover:shadow-[0_10px_30px_rgba(217,119,6,0.2)]">
                    <div className="text-[2rem] text-[#fbbf24] mb-4"><FaShieldAlt /></div>
                    <div
                      className="text-[3.5rem] font-bold mb-3 bg-clip-text"
                      style={{
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      100%
                    </div>
                    <p className="text-base text-slate-300 font-medium leading-normal">Code validé par un expert</p>
                  </div>

                  <div className="text-center py-8 px-6 bg-white/[0.03] rounded-[1.25rem] border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.08] hover:border-[rgba(217,119,6,0.4)] hover:shadow-[0_10px_30px_rgba(217,119,6,0.2)]">
                    <div className="text-[2rem] text-[#fbbf24] mb-4"><FaLightbulb /></div>
                    <div
                      className="text-[3.5rem] font-bold mb-3 bg-clip-text"
                      style={{
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      3x
                    </div>
                    <p className="text-base text-slate-300 font-medium leading-normal">Plus rapide sans compromis qualité</p>
                  </div>

                  <div className="text-center py-8 px-6 bg-white/[0.03] rounded-[1.25rem] border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.08] hover:border-[rgba(217,119,6,0.4)] hover:shadow-[0_10px_30px_rgba(217,119,6,0.2)]">
                    <div className="text-[2rem] text-[#fbbf24] mb-4"><FaBug /></div>
                    <div
                      className="text-[3.5rem] font-bold mb-3 bg-clip-text"
                      style={{
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      99.9%
                    </div>
                    <p className="text-base text-slate-300 font-medium leading-normal">De disponibilité garantie</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default DevToolsSection;
