'use client'

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { FaReact, FaNodeJs, FaTerminal, FaExternalLinkAlt, FaGithub, FaPlay, FaUniversity, FaUserGraduate, FaCloudUploadAlt, FaCloud } from 'react-icons/fa';
import { SiPostgresql, SiExpress, SiTypescript } from 'react-icons/si';

interface FullStackNodeSectionProps {
  id?: string;
}

const FullStackNodeSection: React.FC<FullStackNodeSectionProps> = ({ id }) => {
  const project = {
    title: 'University Management Dashboard',
    year: '2024',
    description: 'Système de gestion universitaire complet style Google Classroom avec authentification multi-rôles (Admin, Professeur, Étudiant), codes de rejoindre sécurisés et upload média via Cloudinary.',
    image: '/images/university-dashboard.png',
    liveUrl: 'https://university-management-dashboard-kappa.vercel.app/login',
    githubUrl: '#',
    stats: [
      { value: '3', label: 'Rôles' },
      { value: 'JWT', label: 'Auth sécurisée' },
      { value: 'PERN', label: 'Stack' },
    ],
    features: [
      { icon: <FaUserGraduate />, text: 'Multi-role Auth' },
      { icon: <FaUniversity />, text: 'Join Codes' },
      { icon: <FaCloudUploadAlt />, text: 'Cloudinary Upload' },
    ],
    stack: {
      frontend: [
        { name: 'React 19', icon: <FaReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
      ],
      backend: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Cloudinary', icon: <FaCloud /> },
      ]
    }
  };

  const terminalLines = [
    { type: 'comment', text: '// PERN Stack - University Management System' },
    { type: 'command', text: '$ npm run dev' },
    { type: 'output', text: '> PostgreSQL connected ✓' },
    { type: 'output', text: '> Express server on port 5000' },
    { type: 'success', text: '> Multi-role auth ready' },
  ];

  const getTerminalLineColor = (type: string) => {
    switch (type) {
      case 'comment': return 'text-white/30';
      case 'command': return 'text-[#61dafb]';
      case 'success': return 'text-[#68a063]';
      default: return 'text-white/70';
    }
  };

  return (
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <section
          id={id}
          className="relative py-16 px-4 md:py-24 md:px-8 overflow-hidden min-h-screen bg-[#0a0a0f]"
        >
          {/* Noise Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 pointer-events-none bg-[length:60px_60px]"
            style={{
              backgroundImage: 'linear-gradient(rgba(97, 218, 251, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(97, 218, 251, 0.03) 1px, transparent 1px)',
            }}
          />

          <div className="relative max-w-[1400px] mx-auto z-[2]">
            <motion.div variants={fadeIn('up', 'tween', 0.1, 0.8)}>
              <div className="mb-16 md:mb-12 md:text-center">
                <h2
                  className="mb-4 font-semibold md:text-[1.1rem] font-[Space_Grotesk,Inter,sans-serif] text-[clamp(2.25rem,3vw,2.75rem)] bg-[linear-gradient(135deg,#F1F1F1,#B0B0B0)] bg-clip-text text-transparent"
                >
                  J&apos;apporte une expertise FullStack à vos projets !
                </h2>
                <span
                  className="inline-block text-xs mb-6 px-4 py-2 font-[JetBrains_Mono,Fira_Code,monospace] tracking-[0.3em] text-[#61dafb] bg-[rgba(97,218,251,0.1)] border border-[rgba(97,218,251,0.2)]"
                >
                  FULLSTACK JAVASCRIPT
                </span>
                <h2
                  className="mb-6 font-bold flex items-center gap-2 flex-wrap md:justify-center font-[Space_Grotesk,Inter,sans-serif] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1]"
                >
                  <span className="text-[#61dafb]">React</span>
                  <span className="text-white/20 font-light">/</span>
                  <span className="text-[#68a063]">Node.js</span>
                </h2>
                <p className="text-[1.15rem] max-w-[500px] md:mx-auto text-white/60 leading-[1.7]">
                  Écosystème JavaScript unifié pour des applications
                  performantes et temps réel
                </p>
              </div>
            </motion.div>

            <div className="grid gap-12 mb-16 grid-cols-1 min-[968px]:grid-cols-[1fr_1.2fr] max-[968px]:gap-8">
              {/* Left Column */}
              <div className="flex flex-col gap-8">
                <motion.div variants={fadeIn('right', 'spring', 0.2, 0.8)}>
                  <div
                    className="rounded-xl overflow-hidden bg-[#1a1a24] border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.5)]"
                  >
                    <div
                      className="flex items-center gap-4 px-4 py-3.5 bg-[#252530] border-b border-white/5"
                    >
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
                      </div>
                      <div className="flex items-center gap-2 text-[0.8rem] font-[JetBrains_Mono,monospace] text-white/50">
                        <FaTerminal size={12} />
                        fullstack-app
                      </div>
                    </div>
                    <div className="p-6 font-[JetBrains_Mono,Fira_Code,monospace] text-[0.9rem] leading-[1.8]">
                      {terminalLines.map((line, idx) => (
                        <div
                          key={idx}
                          className={`overflow-hidden whitespace-nowrap w-0 ${getTerminalLineColor(line.type)}`}
                          style={{
                            animation: `fsnode-typeIn 0.5s ease forwards`,
                            animationDelay: `${idx * 0.3}s`,
                          }}
                        >
                          {line.text}
                        </div>
                      ))}
                      <span
                        className="inline-block w-[10px] h-[18px] ml-1 align-text-bottom bg-[#61dafb]"
                        style={{ animation: 'fsnode-blink 1s infinite' }}
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn('right', 'spring', 0.4, 0.8)}>
                  <div className="grid grid-cols-3 gap-4">
                    {project.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="text-center py-6 px-4 rounded-xl bg-[linear-gradient(135deg,rgba(97,218,251,0.08),rgba(104,160,99,0.05))] border border-white/[0.06]"
                      >
                        <div className="text-2xl font-bold text-white mb-1 font-[Space_Grotesk,sans-serif]">
                          {stat.value}
                        </div>
                        <div className="text-xs uppercase text-white/50 tracking-[0.1em]">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div>
                <motion.div variants={fadeIn('left', 'spring', 0.3, 0.8)}>
                  <div
                    className="rounded-[20px] overflow-hidden transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 bg-[#12121a] border border-white/[0.06]"
                  >
                    <div className="relative overflow-hidden aspect-video bg-[linear-gradient(135deg,#1a1a2e,#0f0f1a)]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover relative z-[2]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.opacity = '0';
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white/30">
                        <FaPlay size={40} className="opacity-50" />
                        <span className="text-[0.9rem] uppercase tracking-[0.15em]">Démo Live</span>
                      </div>
                      <span className="absolute top-4 right-4 backdrop-blur-[10px] text-white text-xs px-3 py-1.5 rounded z-[3] bg-black/70 font-[JetBrains_Mono,monospace]">
                        {project.year}
                      </span>
                    </div>

                    <div className="p-8">
                      <h3 className="text-[1.75rem] font-semibold text-white mb-3 font-[Space_Grotesk,sans-serif]">
                        {project.title}
                      </h3>
                      <p className="mb-6 text-white/60 leading-[1.7]">
                        {project.description}
                      </p>

                      <div className="flex gap-4">
                        <a
                          href="https://university-management-dashboard-kappa.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 py-3.5 px-6 font-semibold text-[0.9rem] no-underline rounded-lg transition-all duration-300 hover:-translate-y-0.5 bg-[#61dafb] text-[#0a0a0f] hover:bg-[#7de3ff]"
                        >
                          <FaExternalLinkAlt /> Voir Live
                        </a>
                        <a
                          href="https://github.com/TardinDev/University-Management-DashBoard"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 py-3.5 px-6 font-medium text-[0.9rem] text-white no-underline rounded-lg transition-all duration-300 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/30"
                        >
                          <FaGithub /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div variants={fadeIn('up', 'tween', 0.5, 0.8)}>
              <div
                className="flex items-stretch justify-center gap-8 p-12 md:flex-col md:p-8 rounded-[20px] bg-white/[0.02] border border-white/5"
              >
                {/* Frontend Stack */}
                <div className="flex-1 max-w-[300px]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl text-2xl bg-[linear-gradient(135deg,rgba(97,218,251,0.2),rgba(97,218,251,0.05))] text-[#61dafb]">
                      <FaReact />
                    </div>
                    <h4 className="text-xl font-semibold text-white font-[Space_Grotesk,sans-serif]">Frontend</h4>
                  </div>
                  <div className="flex flex-col gap-3">
                    {project.stack.frontend.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 py-3 px-4 rounded-[10px] transition-all duration-200 hover:translate-x-1 bg-white/[0.03] border border-white/5 hover:bg-white/[0.06]"
                      >
                        <div className="text-xl text-white/70">{tech.icon}</div>
                        <span className="text-[0.95rem] text-white/80">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 px-4 md:py-4 md:px-0">
                  <div
                    className="w-0.5 h-10 md:w-10 md:h-0.5 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.2),transparent)]"
                  />
                  <div
                    className="relative flex items-center justify-center w-[50px] h-[50px] rounded-full text-[0.7rem] bg-[#0a0a0f] border-2 border-[rgba(97,218,251,0.3)] font-[JetBrains_Mono,monospace] text-[#61dafb] tracking-[0.05em]"
                  >
                    <div
                      className="absolute rounded-full -inset-1 border-2 border-[rgba(97,218,251,0.3)]"
                      style={{ animation: 'fsnode-pulse 2s ease-in-out infinite' }}
                    />
                    API
                  </div>
                  <div
                    className="w-0.5 h-10 md:w-10 md:h-0.5 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.2),transparent)]"
                  />
                </div>

                {/* Backend Stack */}
                <div className="flex-1 max-w-[300px]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl text-2xl bg-[linear-gradient(135deg,rgba(104,160,99,0.2),rgba(104,160,99,0.05))] text-[#68a063]">
                      <FaNodeJs />
                    </div>
                    <h4 className="text-xl font-semibold text-white font-[Space_Grotesk,sans-serif]">Backend</h4>
                  </div>
                  <div className="flex flex-col gap-3">
                    {project.stack.backend.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 py-3 px-4 rounded-[10px] transition-all duration-200 hover:translate-x-1 bg-white/[0.03] border border-white/5 hover:bg-white/[0.06]"
                      >
                        <div className="text-xl text-white/70">{tech.icon}</div>
                        <span className="text-[0.95rem] text-white/80">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
  );
};

export default FullStackNodeSection;
