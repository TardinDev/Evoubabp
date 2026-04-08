'use client'

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { FaReact, FaJava, FaShieldAlt, FaExternalLinkAlt, FaGithub, FaFileAlt, FaUserCheck, FaDatabase, FaLock } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiTypescript } from 'react-icons/si';

interface FullStackSpringSectionProps {
  id?: string;
}

const FullStackSpringSection: React.FC<FullStackSpringSectionProps> = ({ id }) => {
  const project = {
    title: 'Déclaration de Naissance',
    subtitle: 'Plateforme administrative officielle',
    year: '2024',
    description: 'Application web de gestion des déclarations de naissance permettant aux citoyens de déclarer une naissance en ligne et aux agents administratifs de traiter les demandes de manière sécurisée et efficace.',
    image: '/images/declaration-naissance.png',
    liveUrl: '#',
    githubUrl: '#',
    features: [
      {
        icon: <FaFileAlt />,
        title: 'Déclaration en ligne',
        desc: 'Formulaire guidé étape par étape'
      },
      {
        icon: <FaUserCheck />,
        title: 'Validation agents',
        desc: 'Interface de traitement sécurisée'
      },
      {
        icon: <FaLock />,
        title: 'Données protégées',
        desc: 'Chiffrement et conformité RGPD'
      },
    ],
    stack: {
      frontend: ['React 19', 'TypeScript', 'Material-UI', 'React Query'],
      backend: ['Java 21', 'Spring Boot 4', 'Spring Security', 'PostgreSQL']
    }
  };

  const getTechBadgeStyles = (type: 'frontend' | 'backend' | 'db') => {
    switch (type) {
      case 'frontend':
        return {
          background: 'rgba(97, 218, 251, 0.1)',
          color: '#61dafb',
          border: '1px solid rgba(97, 218, 251, 0.2)',
        };
      case 'backend':
        return {
          background: 'rgba(109, 179, 63, 0.1)',
          color: '#6db33f',
          border: '1px solid rgba(109, 179, 63, 0.2)',
        };
      case 'db':
        return {
          background: 'rgba(51, 103, 145, 0.15)',
          color: '#64b5f6',
          border: '1px solid rgba(51, 103, 145, 0.3)',
        };
    }
  };

  return (
    <>
      <style>{`
        @keyframes fsspring-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fsspring-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <section
          id={id}
          className="relative py-24 px-8 md:py-16 md:px-4 overflow-hidden min-h-screen"
          style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0f1419 50%, #0a0a0f 100%)' }}
        >
          {/* Background Pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.5,
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236db33f' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />

          {/* Gold Accent (shimmer bar) */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: 'linear-gradient(90deg, #0a0a0f, #6db33f, #0a0a0f)',
              backgroundSize: '200% 100%',
              animation: 'fsspring-shimmer 3s linear infinite',
            }}
          />

          <div className="relative max-w-[1400px] mx-auto z-[2]">
            <motion.div variants={fadeIn('up', 'tween', 0.05, 0.8)}>
              <div className="text-center mb-16 md:mb-12">
                <span
                  className="inline-block text-xs mb-6 px-4 py-2"
                  style={{
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    letterSpacing: '0.3em',
                    color: '#6db33f',
                    background: 'rgba(109, 179, 63, 0.1)',
                    border: '1px solid rgba(109, 179, 63, 0.2)',
                  }}
                >
                  FULLSTACK JAVA
                </span>
                <h2
                  className="font-bold flex items-center justify-center gap-3 flex-wrap mb-4"
                  style={{
                    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    lineHeight: 1.1,
                  }}
                >
                  <span style={{ color: '#61dafb' }}>React</span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontWeight: 300 }}>+</span>
                  <span style={{ color: '#6db33f' }}>Spring Boot</span>
                </h2>
                <p
                  className="text-[1.15rem] max-w-[500px] mx-auto md:px-4"
                  style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.7 }}
                >
                  Architecture enterprise robuste pour applications critiques
                </p>
              </div>
            </motion.div>

            <div className="grid gap-16 mb-16 items-center max-[968px]:grid-cols-1 max-[968px]:gap-12" style={{ gridTemplateColumns: '1fr 1.1fr' }}>
              <motion.div variants={fadeIn('right', 'tween', 0.1, 0.8)}>
                <div>
                  {/* Official Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded mb-6"
                    style={{
                      background: 'rgba(109, 179, 63, 0.15)',
                      color: '#6db33f',
                      border: '1px solid rgba(109, 179, 63, 0.3)',
                    }}
                  >
                    <span className="text-[0.9rem]"><FaShieldAlt /></span>
                    <span
                      className="text-[0.7rem] font-bold"
                      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif", letterSpacing: '0.15em' }}
                    >
                      APPLICATION OFFICIELLE
                    </span>
                  </div>

                  <h3
                    className="font-semibold text-white mb-6"
                    style={{
                      fontFamily: "'Playfair Display', 'Georgia', serif",
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      lineHeight: 1.2,
                    }}
                  >
                    Déclaration de
                    <span className="block relative" style={{ color: '#6db33f' }}>
                      Naissance
                      <span
                        className="absolute bottom-[0.1em] left-0 w-full"
                        style={{
                          height: '0.15em',
                          background: 'linear-gradient(90deg, #6db33f, transparent)',
                          opacity: 0.6,
                        }}
                      />
                    </span>
                  </h3>

                  <p
                    className="text-[1.05rem] mb-8 max-w-[500px]"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: 'rgba(255, 255, 255, 0.6)',
                      lineHeight: 1.8,
                    }}
                  >
                    Solution digitale pour la modernisation des services
                    d'état civil — Simplifier les démarches administratives
                    tout en garantissant la sécurité des données sensibles.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {(['frontend', 'backend', 'db'] as const).map((type, idx) => {
                      const labels = [
                        { icon: <FaReact />, text: 'React' },
                        { icon: <SiSpringboot />, text: 'Spring Boot' },
                        { icon: <SiPostgresql />, text: 'PostgreSQL' },
                      ];
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-[0.85rem] font-medium"
                          style={{
                            ...getTechBadgeStyles(type),
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          {labels[idx].icon} {labels[idx].text}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn('left', 'spring', 0.2, 0.8)}>
                <div className="relative">
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{
                      background: '#1a1a24',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2), 0 20px 50px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <div
                      className="flex items-center gap-4 py-3 px-4"
                      style={{ background: '#252530', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
                    >
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.2)' }} />
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.2)' }} />
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.2)' }} />
                      </div>
                      <div
                        className="flex-1 text-center text-xs px-4 py-1 rounded"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: 'rgba(255, 255, 255, 0.5)',
                          background: 'rgba(0, 0, 0, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                        }}
                      >
                        etat-civil.gouv.ga/declaration
                      </div>
                    </div>
                    <div
                      className="relative"
                      style={{ aspectRatio: '16/10', background: 'linear-gradient(135deg, #1a1a2e, #0f0f1a)' }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover relative z-[2]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.opacity = '0';
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                        <div style={{ color: '#6db33f', opacity: 0.3 }}>
                          <FaFileAlt size={48} />
                        </div>
                        <span
                          className="text-[0.9rem]"
                          style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255, 255, 255, 0.4)' }}
                        >
                          Interface de déclaration
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Card - top-right */}
                  <div
                    className="absolute flex items-center gap-2 py-3 px-4 backdrop-blur-[10px] rounded-lg hidden md:flex"
                    style={{
                      top: '-1rem',
                      right: '-1rem',
                      background: 'rgba(109, 179, 63, 0.15)',
                      border: '1px solid rgba(109, 179, 63, 0.3)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                      animation: 'fsspring-float 4s ease-in-out infinite',
                      animationDelay: '0s',
                    }}
                  >
                    <div className="text-base" style={{ color: '#6db33f' }}><FaShieldAlt /></div>
                    <span className="text-[0.8rem] font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>Sécurisé</span>
                  </div>

                  {/* Floating Card - bottom-left */}
                  <div
                    className="absolute flex items-center gap-2 py-3 px-4 backdrop-blur-[10px] rounded-lg hidden md:flex"
                    style={{
                      bottom: '1rem',
                      left: '-1rem',
                      background: 'rgba(109, 179, 63, 0.15)',
                      border: '1px solid rgba(109, 179, 63, 0.3)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                      animation: 'fsspring-float 4s ease-in-out infinite',
                      animationDelay: '2s',
                    }}
                  >
                    <div className="text-base" style={{ color: '#6db33f' }}><FaDatabase /></div>
                    <span className="text-[0.8rem] font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>RGPD</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeIn('up', 'tween', 0.3, 0.8)}>
              <div className="grid grid-cols-3 md:grid-cols-1 gap-6 mb-16">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.05)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(109, 179, 63, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.03)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    }}
                  >
                    <div
                      className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl text-xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(109, 179, 63, 0.2), rgba(109, 179, 63, 0.05))',
                        border: '1px solid rgba(109, 179, 63, 0.2)',
                        color: '#6db33f',
                      }}
                    >
                      {feature.icon}
                    </div>
                    <h4 className="text-[1.1rem] font-semibold text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {feature.title}
                    </h4>
                    <p className="text-[0.9rem] leading-6" style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255, 255, 255, 0.5)' }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-8 max-[968px]:grid-cols-1" style={{ gridTemplateColumns: '1.2fr 1fr' }}>
              <motion.div variants={fadeIn('right', 'spring', 0.4, 0.8)}>
                <div
                  className="rounded-2xl p-8 text-white"
                  style={{
                    background: 'rgba(109, 179, 63, 0.08)',
                    border: '1px solid rgba(109, 179, 63, 0.15)',
                  }}
                >
                  <div
                    className="flex justify-between items-center mb-8 pb-4"
                    style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}
                  >
                    <h4 className="text-[1.1rem] font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Architecture technique</h4>
                    <span
                      className="text-[0.8rem] px-3 py-1 rounded"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: '#6db33f',
                        background: 'rgba(109, 179, 63, 0.15)',
                      }}
                    >
                      {project.year}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Frontend Layer */}
                    <div>
                      <div
                        className="text-[0.7rem] uppercase mb-2"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          letterSpacing: '0.1em',
                          color: 'rgba(255, 255, 255, 0.5)',
                        }}
                      >
                        Frontend
                      </div>
                      <div
                        className="flex items-center gap-4 p-4 rounded-lg"
                        style={{
                          background: 'rgba(97, 218, 251, 0.1)',
                          border: '1px solid rgba(97, 218, 251, 0.2)',
                        }}
                      >
                        <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}><FaReact size={24} /></div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.frontend.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[0.8rem] px-2.5 py-1 rounded"
                              style={{
                                fontFamily: "'DM Sans', sans-serif",
                                color: 'rgba(255, 255, 255, 0.7)',
                                background: 'rgba(255, 255, 255, 0.1)',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Connector */}
                    <div className="flex items-center gap-3 px-4">
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(109, 179, 63, 0.5), transparent)' }} />
                      <span
                        className="text-[0.65rem] whitespace-nowrap"
                        style={{ fontFamily: "'JetBrains Mono', monospace", color: '#6db33f' }}
                      >
                        HTTPS / JWT
                      </span>
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(109, 179, 63, 0.5), transparent)' }} />
                    </div>

                    {/* Backend Layer */}
                    <div>
                      <div
                        className="text-[0.7rem] uppercase mb-2"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          letterSpacing: '0.1em',
                          color: 'rgba(255, 255, 255, 0.5)',
                        }}
                      >
                        Backend
                      </div>
                      <div
                        className="flex items-center gap-4 p-4 rounded-lg"
                        style={{
                          background: 'rgba(109, 179, 63, 0.1)',
                          border: '1px solid rgba(109, 179, 63, 0.2)',
                        }}
                      >
                        <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}><SiSpringboot size={24} /></div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.backend.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[0.8rem] px-2.5 py-1 rounded"
                              style={{
                                fontFamily: "'DM Sans', sans-serif",
                                color: 'rgba(255, 255, 255, 0.7)',
                                background: 'rgba(255, 255, 255, 0.1)',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn('left', 'spring', 0.5, 0.8)}>
                <div
                  className="rounded-2xl p-8 flex flex-col justify-center"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Projet réalisé
                    </h4>
                    <p
                      className="text-[0.95rem] mb-6"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: 'rgba(255, 255, 255, 0.6)',
                        lineHeight: 1.7,
                      }}
                    >
                      Solution développée pour faciliter les démarches
                      administratives des citoyens et optimiser le travail
                      des agents d'état civil.
                    </p>

                    <div
                      className="flex items-center justify-between p-5 rounded-[10px] mb-6"
                      style={{
                        background: 'rgba(109, 179, 63, 0.08)',
                        border: '1px solid rgba(109, 179, 63, 0.15)',
                      }}
                    >
                      <div className="text-center flex-1">
                        <div className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#6db33f' }}>100%</div>
                        <div className="text-[0.7rem] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.05em' }}>Dématérialisé</div>
                      </div>
                      <div className="w-px h-[30px]" style={{ background: 'rgba(255, 255, 255, 0.1)' }} />
                      <div className="text-center flex-1">
                        <div className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#6db33f' }}>24/7</div>
                        <div className="text-[0.7rem] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.05em' }}>Disponible</div>
                      </div>
                      <div className="w-px h-[30px]" style={{ background: 'rgba(255, 255, 255, 0.1)' }} />
                      <div className="text-center flex-1">
                        <div className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#6db33f' }}>RGPD</div>
                        <div className="text-[0.7rem] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.05em' }}>Conforme</div>
                      </div>
                    </div>

                    <div className="flex gap-4 max-[480px]:flex-col">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 flex-1 py-3.5 px-6 text-white font-semibold text-[0.9rem] no-underline rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          background: 'linear-gradient(135deg, #6db33f, #5a9e32)',
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 20px rgba(109, 179, 63, 0.3)'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                      >
                        <FaExternalLinkAlt /> Voir le projet
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 flex-1 py-3.5 px-6 text-white font-semibold text-[0.9rem] no-underline bg-transparent rounded-lg transition-all duration-300 hover:bg-white/5"
                        style={{
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.3)'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.2)'; }}
                      >
                        <FaGithub /> Code source
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default FullStackSpringSection;
