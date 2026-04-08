'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaBug, FaShieldAlt, FaChartLine, FaCheckCircle, FaArrowRight, FaStar, FaCode, FaRocket } from "react-icons/fa";

// Composant icône Claude (étoile orange)
const ClaudeIcon = ({ size = 24 }: { size?: number }) => (
  <FaStar size={size} />
);

const ToolsSection = () => {
  const [activeToolIndex, setActiveToolIndex] = useState(0);

  const tools = [
    {
      name: "CodeRabbit",
      icon: FaRobot,
      color: "#FF6B35",
      gradient: "linear-gradient(135deg, #FF6B35, #F7931E)",
      description: "Assistant IA qui révise automatiquement votre code",
      tagline: "Révision de code intelligente",
      features: [
        "Révision de code automatique par IA",
        "Suggestions d'amélioration en temps réel",
        "Détection des bugs et vulnérabilités",
        "Optimisation des performances"
      ],
      stats: { value: "95%", label: "Bugs détectés" }
    },
    {
      name: "Claude Code",
      icon: ClaudeIcon,
      color: "#FF6B35",
      gradient: "linear-gradient(135deg, #FF6B35, #F7931E)",
      description: "Assistant de développement IA par Anthropic",
      tagline: "Développement assisté par IA",
      features: [
        "Génération de code intelligent",
        "Refactoring et optimisation",
        "Documentation automatique",
        "Debugging assisté par IA"
      ],
      stats: { value: "10x", label: "Plus productif" }
    },
    {
      name: "Sentry",
      icon: FaBug,
      color: "#362D59",
      gradient: "linear-gradient(135deg, #362D59, #5B4B8A)",
      description: "Monitoring en temps réel de vos applications",
      tagline: "Monitoring & Performance",
      features: [
        "Tracking des erreurs en production",
        "Monitoring de performance",
        "Alertes en temps réel",
        "Analyse des crashs utilisateurs"
      ],
      stats: { value: "99.9%", label: "Disponibilité" }
    }
  ];

  const activeTool = tools[activeToolIndex];

  return (
    <>
      <style>{`
        @keyframes tools-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      <section className="relative overflow-hidden py-24 px-8 max-md:py-16 max-md:px-4 bg-[#d4e4fa]">
        {/* ::before pseudo-element */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)'
          }}
        />

        <div className="max-w-[1400px] mx-auto relative z-[1]">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center gap-6 mb-8 [&_svg]:text-[#667eea] [&_svg]:drop-shadow-[0_4px_8px_rgba(102,126,234,0.3)]">
              <FaShieldAlt size={35} />
              <FaChartLine size={35} />
              <FaCode size={35} />
            </div>
            <h2 className="text-5xl max-md:text-[2rem] font-black text-[#1a202c] mb-6 leading-tight">
              Outils de{" "}
              <span
                className="bg-clip-text"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Pointe
              </span>{" "}
              pour un Code{" "}
              <span
                className="bg-clip-text"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Impeccable
              </span>
            </h2>
            <p className="text-[1.25rem] max-md:text-[1.1rem] text-slate-500 max-w-[800px] mx-auto leading-[1.7]">
              Je suis développeur expérimenté mais conscient que le domaine du code évolue.
              Je m&apos;adapte parfaitement avec les outils modernes pour garantir la qualité,
              la sécurité et la performance de chaque ligne de code.
            </p>
          </div>

          {/* Workflow Container */}
          <div className="bg-white rounded-[30px] p-12 max-md:p-4 max-md:px-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] mb-12">
            {/* Timeline */}
            <div className="flex max-md:flex-col justify-between items-start mb-12 relative max-md:gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="flex-1 flex flex-col max-md:flex-row items-center max-md:items-center text-center max-md:text-left cursor-pointer relative transition-all duration-300 py-6 px-4 rounded-[15px] max-md:gap-4"
                  style={{
                    background: activeToolIndex === index ? 'linear-gradient(135deg, #f8fafc, #f1f5f9)' : 'transparent',
                  }}
                  onClick={() => setActiveToolIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="w-20 h-20 max-md:w-[60px] max-md:h-[60px] rounded-[20px] flex items-center justify-center mb-4 max-md:mb-0 transition-all duration-400 [&_svg]:transition-all"
                    style={{
                      background: activeToolIndex === index ? tool.color : `${tool.color}15`,
                      color: activeToolIndex === index ? 'white' : tool.color,
                      boxShadow: activeToolIndex === index
                        ? `0 15px 35px ${tool.color}40`
                        : `0 8px 16px ${tool.color}20`,
                      transform: activeToolIndex === index ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    <tool.icon size={28} />
                  </div>
                  <div
                    className="text-[1.25rem] max-md:text-[1.1rem] font-bold mb-2 transition-colors duration-300"
                    style={{ color: activeToolIndex === index ? '#1a202c' : '#64748b' }}
                  >
                    {tool.name}
                  </div>
                  <div
                    className="text-[0.9rem] max-md:text-[0.85rem] font-medium transition-colors duration-300"
                    style={{ color: activeToolIndex === index ? '#64748b' : '#94a3b8' }}
                  >
                    {tool.tagline}
                  </div>
                  {/* Timeline Connector */}
                  {index < tools.length - 1 && (
                    <div className="absolute top-10 -right-1/2 w-full h-[3px] max-md:hidden -z-[1]" style={{ background: 'linear-gradient(90deg, #e2e8f0, #cbd5e1)' }} />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Detail Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeToolIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="border-2 border-slate-200 rounded-[20px] p-10 max-md:p-6"
                style={{ background: 'linear-gradient(135deg, #fafbfc, #f8fafc)' }}
              >
                {/* Detail Header */}
                <div className="flex max-md:flex-col items-center gap-8 max-md:gap-4 mb-8 pb-8 max-md:text-center border-b-2 border-slate-200">
                  <div
                    className="w-[100px] h-[100px] rounded-[25px] text-white flex items-center justify-center shrink-0"
                    style={{
                      background: activeTool.gradient,
                      boxShadow: `0 15px 40px ${activeTool.color}40`,
                    }}
                  >
                    <activeTool.icon size={50} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[2rem] max-md:text-2xl font-extrabold text-[#1a202c] mb-2">
                      {activeTool.name}
                    </h3>
                    <p className="text-[1.1rem] text-slate-500 leading-relaxed">
                      {activeTool.description}
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mb-8">
                  {activeTool.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 py-4 px-6 bg-white rounded-xl border border-slate-200 transition-all duration-300 hover:translate-x-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] [&_svg]:shrink-0"
                    >
                      <FaCheckCircle color={activeTool.color} size={20} />
                      <span className="text-slate-600 text-[0.95rem] font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="flex max-md:flex-col justify-between items-center pt-8 max-md:gap-6 border-t-2 border-slate-200">
                  <div
                    className="bg-white rounded-[15px] py-6 px-8 text-center"
                    style={{
                      border: `2px solid ${activeTool.color}40`,
                      boxShadow: `0 8px 20px ${activeTool.color}15`,
                    }}
                  >
                    <div
                      className="text-[2.5rem] font-black mb-2 bg-clip-text"
                      style={{
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {activeTool.stats.value}
                    </div>
                    <div className="text-slate-500 text-[0.9rem] font-semibold uppercase tracking-[1px]">
                      {activeTool.stats.label}
                    </div>
                  </div>
                  <a
                    className="flex items-center gap-3 text-[1.1rem] font-bold no-underline cursor-pointer transition-all duration-300 hover:gap-4 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[5px]"
                    style={{ color: activeTool.color }}
                  >
                    En savoir plus <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom CTA */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-12 max-md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex max-md:flex-col items-center justify-between gap-8 max-md:text-center">
              <div className="text-[#667eea]" style={{ animation: 'tools-bounce 2s ease-in-out infinite' }}>
                <FaRocket size={48} />
              </div>
              <h3 className="flex-1 text-[1.75rem] max-md:text-2xl font-bold text-[#1a202c] m-0">
                Prêt à bénéficier d&apos;un code de qualité professionnelle ?
              </h3>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(102, 126, 234, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="text-white border-none rounded-full py-5 px-12 max-md:w-full max-md:py-4 max-md:px-8 text-[1.1rem] max-md:text-base font-bold cursor-pointer transition-all duration-300 shadow-[0_10px_30px_rgba(102,126,234,0.3)] whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
              >
                Démarrer un projet
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolsSection;
