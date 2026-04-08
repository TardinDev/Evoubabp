'use client'

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { FaNodeJs, FaServer, FaDatabase, FaCode, FaShieldAlt, FaCog } from 'react-icons/fa';
import { SiSpringboot, SiSupabase } from 'react-icons/si';

interface BackendSectionProps {
  id?: string;
}

const BackendSection: React.FC<BackendSectionProps> = ({ id }) => {
  const backendTechnologies = [
    {
      icon: <FaNodeJs />,
      title: 'Node.js',
      description: 'Développement backend JavaScript/TypeScript performant et scalable',
      gradient: 'linear-gradient(135deg, #68a063 0%, #3c873a 100%)',
      features: [
        'API RESTful et GraphQL',
        'Microservices avec Express/Fastify',
        'WebSockets et temps réel',
        'Authentification JWT',
        'Intégration base de données (MongoDB, PostgreSQL)',
        'Gestion des files d\'attente (Bull, RabbitMQ)'
      ],
      useCases: 'Applications temps réel, APIs performantes, Microservices'
    },
    {
      icon: <SiSpringboot />,
      title: 'Spring Boot',
      description: 'Framework Java enterprise robuste pour applications critiques',
      gradient: 'linear-gradient(135deg, #6db33f 0%, #5a9e32 100%)',
      features: [
        'Architecture microservices',
        'Spring Security pour l\'authentification',
        'JPA/Hibernate pour ORM',
        'Spring Cloud pour systèmes distribués',
        'Tests unitaires et d\'intégration',
        'Monitoring avec Actuator'
      ],
      useCases: 'Applications enterprise, Systèmes bancaires, E-commerce complexe'
    },
    {
      icon: <SiSupabase />,
      title: 'Supabase',
      description: 'Backend-as-a-Service open source avec base de données PostgreSQL',
      gradient: 'linear-gradient(135deg, #3ecf8e 0%, #2b9e6f 100%)',
      features: [
        'Base de données PostgreSQL instantanée',
        'Authentification intégrée (OAuth, Magic Links)',
        'API auto-générées (REST, GraphQL)',
        'Stockage de fichiers',
        'Functions serverless Edge',
        'Temps réel avec subscriptions'
      ],
      useCases: 'Prototypes rapides, SaaS, Applications mobile-first'
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
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f23 50%, #16213e 100%)' }}
      >
        {/* Background radial gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(104, 160, 99, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(109, 179, 63, 0.1) 0%, transparent 50%)',
          }}
        />

        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
          <div className="text-center mb-16 md:mb-12 relative z-[2]">
            <div className="flex justify-center gap-4 mb-6">
              <FaServer size={40} style={{ color: '#6db33f', filter: 'drop-shadow(0 0 10px rgba(109, 179, 63, 0.3))' }} />
              <FaDatabase size={40} style={{ color: '#6db33f', filter: 'drop-shadow(0 0 10px rgba(109, 179, 63, 0.3))' }} />
              <FaCog size={40} style={{ color: '#6db33f', filter: 'drop-shadow(0 0 10px rgba(109, 179, 63, 0.3))' }} />
            </div>
            <h2
              className="text-5xl md:text-[2.2rem] max-[480px]:text-[1.8rem] font-extrabold mb-4 bg-clip-text"
              style={{
                background: 'linear-gradient(135deg, #68a063 0%, #6db33f 50%, #3ecf8e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Technologies Backend Maîtrisées
            </h2>
            <p className="text-[1.2rem] md:text-[1.1rem] max-[480px]:text-base text-[#b8b8d1] leading-relaxed max-w-[700px] mx-auto md:px-4 max-[480px]:px-2">
              Des solutions backend robustes et évolutives adaptées à vos besoins,
              du prototypage rapide aux systèmes enterprise critiques.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-10 mb-16 md:mb-12 max-[480px]:mb-8 relative z-[2] md:grid-cols-1 md:gap-8 max-[480px]:gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          {backendTechnologies.map((tech, index) => (
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
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(109, 179, 63, 0.3)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)'; }}
              >
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: tech.gradient }} />

                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[2.5rem] max-[480px]:text-[2rem]" style={{ color: '#6db33f', filter: 'drop-shadow(0 0 10px rgba(109, 179, 63, 0.3))' }}>
                    {tech.icon}
                  </div>
                  <h3 className="text-[1.6rem] max-[480px]:text-[1.4rem] font-bold text-white">{tech.title}</h3>
                </div>
                <p className="text-[#b8b8d1] leading-relaxed text-base max-[480px]:text-[0.95rem] mb-6">{tech.description}</p>

                <div className="mb-6 flex-grow">
                  <h4 className="text-[1.1rem] font-semibold text-[#e0e0ff] mb-4 flex items-center gap-2">
                    <FaCode size={16} style={{ color: '#6db33f' }} /> Ce qui est fait :
                  </h4>
                  <ul className="list-none p-0 m-0">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="text-[#c0c0d8] text-[0.9rem] max-[480px]:text-[0.85rem] leading-[1.8] flex items-start gap-2 mb-2">
                        <span className="text-[#3ecf8e] font-bold text-base shrink-0 mt-[0.1rem]">&#x2713;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[10px] p-4 border-l-[3px]" style={{ background: 'rgba(109, 179, 63, 0.1)', borderLeftColor: '#6db33f' }}>
                  <h4 className="text-[0.95rem] font-semibold text-[#3ecf8e] mb-2 flex items-center gap-2">
                    <FaShieldAlt size={14} /> Cas d'usage :
                  </h4>
                  <p className="text-[#d0d0e8] text-[0.9rem] max-[480px]:text-[0.85rem] leading-6 italic">{tech.useCases}</p>
                </div>

                {/* Glow effect on hover */}
                <div
                  className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(109, 179, 63, 0.1) 0%, transparent 70%)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn('up', 'tween', 0.8, 1)}>
          <div className="text-center relative z-[2]">
            <p
              className="text-[1.3rem] md:text-[1.1rem] max-[480px]:text-base italic text-[#e0e0ff] p-8 md:p-6 max-[480px]:p-4 rounded-[15px] border-l-4 max-w-[800px] mx-auto"
              style={{ background: 'rgba(255, 255, 255, 0.05)', borderLeftColor: '#6db33f' }}
            >
              Chaque projet est unique. Nous choisissons la technologie backend la plus adaptée
              à vos contraintes de performance, scalabilité et budget.
            </p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default BackendSection;
