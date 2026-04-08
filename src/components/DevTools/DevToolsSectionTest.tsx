'use client'

import { motion, AnimatePresence } from "framer-motion";
import { FaBug, FaCheckCircle, FaRocket, FaShieldAlt, FaCode, FaUserCheck } from "react-icons/fa";
import { useState } from "react";

const devProcessSteps = [
  {
    icon: FaCode,
    title: "Code Propre",
    description: "Code structuré, documenté et maintenable suivant les meilleures pratiques de développement",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
    metrics: ["Documentation complète", "Architecture modulaire", "Standards ESLint/Prettier"]
  },
  {
    icon: FaBug,
    title: "Tests Rigoureux",
    description: "Tests unitaires, d'intégration et end-to-end pour garantir la qualité du code",
    color: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444, #dc2626)",
    metrics: ["100% Code Coverage", "Tests automatisés", "CI/CD intégré"]
  },
  {
    icon: FaShieldAlt,
    title: "Sécurité Avancée",
    description: "Protection contre les vulnérabilités OWASP, chiffrement des données sensibles",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    metrics: ["Chiffrement SSL/TLS", "Protection OWASP", "Audit de sécurité"]
  },
  {
    icon: FaCheckCircle,
    title: "Validation Continue",
    description: "Intégration et déploiement continus (CI/CD) pour livrer rapidement et sans erreurs",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    metrics: ["Pipeline automatisé", "Déploiement continu", "Rollback instantané"]
  },
  {
    icon: FaUserCheck,
    title: "UX Optimisée",
    description: "Interface intuitive et accessible, testée par de vrais utilisateurs",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    metrics: ["Tests utilisateurs", "Accessibilité WCAG", "Design responsive"]
  },
  {
    icon: FaRocket,
    title: "Performance Maximale",
    description: "Optimisation du temps de chargement, lazy loading et mise en cache stratégique",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    metrics: ["< 2s chargement", "Lazy loading", "Cache optimisé"]
  }
];

const DevToolsSectionTest = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <style>{`
        @keyframes devtest-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
      <section className="relative overflow-hidden py-24 px-8 max-md:py-16 max-md:px-4 bg-white">
        {/* ::before pseudo-element */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.03) 0%, transparent 50%)'
          }}
        />

        <div className="max-w-[1400px] mx-auto relative z-[1]">
          {/* Header */}
          <div className="text-center mb-20">
            <div
              className="inline-flex items-center justify-center w-[100px] h-[100px] rounded-full text-white mb-8 shadow-[0_20px_40px_rgba(16,185,129,0.25)]"
              style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                animation: 'devtest-float 3s ease-in-out infinite',
              }}
            >
              <FaShieldAlt size={50} />
            </div>
            <h2 className="text-5xl max-md:text-[2rem] font-black text-[#1a202c] mb-6 leading-tight">
              Développement Rigoureux & Qualité Maximale
            </h2>
            <p className="text-[1.25rem] max-md:text-[1.1rem] text-slate-500 max-w-[700px] mx-auto leading-[1.7]">
              Chaque ligne de code est pensée, testée et optimisée pour vous offrir
              des applications robustes, sécurisées et performantes
            </p>
          </div>

          {/* Content Wrapper */}
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-lg:gap-12 items-center mb-20">
            {/* Circular Process */}
            <div className="relative w-[min(450px,90vw)] h-[min(450px,90vw)] max-md:w-[min(350px,90vw)] max-md:h-[min(350px,90vw)] mx-auto">
              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] max-md:w-[140px] max-md:h-[140px] rounded-full border-[3px] border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.1)] flex items-center justify-center z-10" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-2 p-4"
                  >
                    <div className="flex items-center justify-center" style={{ color: devProcessSteps[activeStep].color }}>
                      {(() => {
                        const Icon = devProcessSteps[activeStep].icon;
                        return <Icon size={48} />;
                      })()}
                    </div>
                    <h4 className="text-[0.9rem] max-md:text-[0.75rem] font-bold text-[#1a202c] text-center">
                      {devProcessSteps[activeStep].title}
                    </h4>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Process Nodes */}
              {devProcessSteps.map((step, index) => {
                const angle = (index * 360) / devProcessSteps.length - 90;
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2 w-[70px] h-[70px] max-md:w-[55px] max-md:h-[55px] rounded-full flex items-center justify-center cursor-pointer z-[5] transition-all duration-300"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      background: activeStep === index ? step.color : '#ffffff',
                      color: activeStep === index ? '#ffffff' : step.color,
                      border: `3px solid ${step.color}`,
                      boxShadow: activeStep === index
                        ? `0 8px 30px ${step.color}50`
                        : '0 4px 15px rgba(0, 0, 0, 0.1)',
                    }}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <step.icon size={24} />
                    {/* Node Connector */}
                    <div
                      className="absolute top-1/2 right-full w-[100px] max-md:w-[75px] h-0.5 transition-all duration-300"
                      style={{
                        background: activeStep === index
                          ? `linear-gradient(to right, ${step.color}, transparent)`
                          : 'rgba(226, 232, 240, 0.5)',
                        transformOrigin: 'right center',
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Details Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border-2 border-slate-200 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}
              >
                <div className="p-8 text-white" style={{ background: devProcessSteps[activeStep].gradient }}>
                  <h3 className="text-[2rem] max-md:text-2xl font-extrabold m-0">
                    {devProcessSteps[activeStep].title}
                  </h3>
                </div>

                <div className="p-10">
                  <p className="text-[1.1rem] text-slate-600 leading-[1.8] mb-8">
                    {devProcessSteps[activeStep].description}
                  </p>

                  <div className="flex flex-col gap-4 mb-8">
                    {devProcessSteps[activeStep].metrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 transition-all duration-300 hover:bg-slate-100 hover:translate-x-2"
                      >
                        <div className="flex items-center justify-center shrink-0" style={{ color: devProcessSteps[activeStep].color }}>
                          <FaCheckCircle size={16} />
                        </div>
                        <span className="text-[0.95rem] text-slate-700 font-semibold">{metric}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex justify-center gap-3 mt-8 pt-8 border-t-2 border-slate-200">
                    {devProcessSteps.map((_, idx) => (
                      <div
                        key={idx}
                        className="w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-[1.3]"
                        style={{
                          background: idx === activeStep ? devProcessSteps[idx].color : '#cbd5e1',
                          boxShadow: idx === activeStep ? `0 0 12px ${devProcessSteps[idx].color}80` : 'none',
                        }}
                        onClick={() => setActiveStep(idx)}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats Container */}
          <div className="flex max-md:flex-col justify-around items-center border-2 border-slate-200 rounded-3xl py-12 px-8 max-md:gap-8 max-md:py-8 max-md:px-4 mt-16 shadow-[0_10px_30px_rgba(0,0,0,0.05)]" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}>
            <div className="text-center p-4 transition-transform duration-300 hover:scale-105">
              <div
                className="text-5xl max-md:text-[2.5rem] font-black mb-2 bg-clip-text"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                100%
              </div>
              <div className="text-slate-500 text-[0.95rem] font-semibold uppercase tracking-[1.5px]">Code Coverage</div>
            </div>
            <div className="w-0.5 h-20 max-md:hidden" style={{ background: 'linear-gradient(to bottom, transparent, #cbd5e1, transparent)' }} />
            <div className="text-center p-4 transition-transform duration-300 hover:scale-105">
              <div
                className="text-5xl max-md:text-[2.5rem] font-black mb-2 bg-clip-text"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                99.9%
              </div>
              <div className="text-slate-500 text-[0.95rem] font-semibold uppercase tracking-[1.5px]">Disponibilité</div>
            </div>
            <div className="w-0.5 h-20 max-md:hidden" style={{ background: 'linear-gradient(to bottom, transparent, #cbd5e1, transparent)' }} />
            <div className="text-center p-4 transition-transform duration-300 hover:scale-105">
              <div
                className="text-5xl max-md:text-[2.5rem] font-black mb-2 bg-clip-text"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                &lt; 2s
              </div>
              <div className="text-slate-500 text-[0.95rem] font-semibold uppercase tracking-[1.5px]">Temps de chargement</div>
            </div>
            <div className="w-0.5 h-20 max-md:hidden" style={{ background: 'linear-gradient(to bottom, transparent, #cbd5e1, transparent)' }} />
            <div className="text-center p-4 transition-transform duration-300 hover:scale-105">
              <div
                className="text-5xl max-md:text-[2.5rem] font-black mb-2 bg-clip-text"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                A+
              </div>
              <div className="text-slate-500 text-[0.95rem] font-semibold uppercase tracking-[1.5px]">Score de sécurité</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevToolsSectionTest;
