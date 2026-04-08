'use client'

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { FaReact, FaCode, FaPalette, FaRocket, FaMobileAlt, FaCheckCircle } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

interface FrontendSectionProps {
  id?: string;
}

const FrontendSection: React.FC<FrontendSectionProps> = ({ id }) => {
  const frontendTechnologies = [
    {
      icon: <FaReact />,
      title: 'React',
      description: 'Bibliothèque JavaScript puissante pour construire des interfaces utilisateur modernes et réactives',
      gradient: 'linear-gradient(135deg, #61dafb 0%, #0088cc 100%)',
      features: [
        'Composants réutilisables et modulaires',
        'Virtual DOM pour performances optimales',
        'Hooks pour gestion d\'état simplifiée',
        'React Router pour navigation fluide',
        'Context API et Redux pour état global',
        'Server-Side Rendering (SSR) avec Next.js'
      ],
      useCases: 'Applications web complexes, SPA, Applications e-commerce'
    },
    {
      icon: <SiTypescript />,
      title: 'TypeScript',
      description: 'Superset de JavaScript offrant le typage statique pour un code plus robuste et maintenable',
      gradient: 'linear-gradient(135deg, #3178c6 0%, #235a97 100%)',
      features: [
        'Détection d\'erreurs à la compilation',
        'Autocomplétion intelligente (IntelliSense)',
        'Interfaces et types personnalisés',
        'Refactoring sécurisé et facilité',
        'Meilleure documentation du code',
        'Support des dernières fonctionnalités ES6+'
      ],
      useCases: 'Projets de grande envergure, Équipes multiples, Applications critiques'
    },
    {
      icon: <SiTailwindcss />,
      title: 'Tailwind CSS',
      description: 'Framework CSS utility-first permettant un développement rapide et un design cohérent',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      features: [
        'Classes utilitaires pour styling rapide',
        'Design responsive intégré',
        'Personnalisation complète via config',
        'Dark mode natif',
        'Optimisation automatique (PurgeCSS)',
        'Composants réutilisables avec @apply'
      ],
      useCases: 'Prototypage rapide, Design systems, Applications modernes'
    }
  ];

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <section
        id={id}
        className="relative overflow-hidden w-full max-w-[100vw] py-24 px-8 md:py-16 md:px-4 max-[480px]:py-12 max-[480px]:px-2"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
      >
        {/* Background radial gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(97, 218, 251, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(49, 120, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 60%)',
          }}
        />

        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
          <div className="text-center mb-16 md:mb-12 relative z-[2]">
            <div className="flex justify-center gap-6 mb-6">
              <FaReact size={40} style={{ color: '#61dafb', filter: 'drop-shadow(0 0 10px rgba(97, 218, 251, 0.4))' }} />
              <SiTypescript size={40} style={{ color: '#3178c6', filter: 'drop-shadow(0 0 10px rgba(49, 120, 198, 0.4))' }} />
              <SiTailwindcss size={40} style={{ color: '#06b6d4', filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.4))' }} />
            </div>
            <h2
              className="text-5xl md:text-[2.2rem] max-[480px]:text-[1.8rem] font-extrabold mb-4 bg-clip-text"
              style={{
                background: 'linear-gradient(135deg, #61dafb 0%, #3178c6 50%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Technologies Frontend Modernes
            </h2>
            <p className="text-[1.2rem] md:text-[1.1rem] max-[480px]:text-base text-slate-300 leading-relaxed max-w-[700px] mx-auto md:px-4 max-[480px]:px-2">
              Création d'interfaces utilisateur exceptionnelles et performantes
              avec les technologies les plus avancées de l'écosystème web.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-10 mb-16 md:mb-12 max-[480px]:mb-8 relative z-[2] md:grid-cols-1 md:gap-8 max-[480px]:gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))' }}>
          {frontendTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'spring', 0.3 + index * 0.15, 0.8)}
            >
              <div
                className="group backdrop-blur-[10px] rounded-[20px] p-10 max-[480px]:p-6 relative overflow-hidden transition-all duration-300 h-full flex flex-col hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(97, 218, 251, 0.3)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)'; }}
              >
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: tech.gradient }} />

                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[2.5rem] max-[480px]:text-[2rem]" style={{ color: '#61dafb', filter: 'drop-shadow(0 0 10px rgba(97, 218, 251, 0.3))' }}>
                    {tech.icon}
                  </div>
                  <h3 className="text-[1.6rem] max-[480px]:text-[1.4rem] font-bold text-white">{tech.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-base max-[480px]:text-[0.95rem] mb-6">{tech.description}</p>

                <div className="mb-6 flex-grow">
                  <h4 className="text-[1.1rem] font-semibold text-sky-100 mb-4 flex items-center gap-2">
                    <FaCode size={16} style={{ color: '#61dafb' }} /> Fonctionnalités clés :
                  </h4>
                  <ul className="list-none p-0 m-0">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="text-slate-300 text-[0.9rem] max-[480px]:text-[0.85rem] leading-[1.8] flex items-start gap-2 mb-2">
                        <span className="text-cyan-500 font-bold text-base shrink-0 mt-[0.1rem]">&#x2713;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[10px] p-4 border-l-[3px]" style={{ background: 'rgba(97, 218, 251, 0.1)', borderLeftColor: '#61dafb' }}>
                  <h4 className="text-[0.95rem] font-semibold text-cyan-500 mb-2 flex items-center gap-2">
                    <FaCheckCircle size={14} /> Cas d'usage :
                  </h4>
                  <p className="text-sky-100 text-[0.9rem] max-[480px]:text-[0.85rem] leading-6 italic">{tech.useCases}</p>
                </div>

                {/* Glow effect on hover */}
                <div
                  className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(97, 218, 251, 0.1) 0%, transparent 70%)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn('up', 'tween', 0.8, 1)}>
          <div className="text-center relative z-[2]">
            <p
              className="text-[1.3rem] md:text-[1.1rem] max-[480px]:text-base italic text-sky-100 p-8 md:p-6 max-[480px]:p-4 rounded-[15px] border-l-4 max-w-[800px] mx-auto flex items-center justify-center flex-wrap"
              style={{ background: 'rgba(255, 255, 255, 0.05)', borderLeftColor: '#61dafb' }}
            >
              <FaRocket style={{ display: 'inline', marginRight: '0.5rem' }} />
              La combinaison React + TypeScript + Tailwind CSS permet de créer des applications
              web ultra-performantes, maintenables et visuellement exceptionnelles.
            </p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default FrontendSection;
