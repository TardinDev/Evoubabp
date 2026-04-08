'use client'

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { FaDocker, FaBoxOpen, FaServer, FaShip, FaLayerGroup, FaCogs } from 'react-icons/fa';
import AnimatedDockerBackground from './AnimatedDockerBackground';

interface DockerSectionProps {
    id?: string;
}

const DockerSection: React.FC<DockerSectionProps> = ({ id }) => {
    const dockerFeatures = [
        {
            icon: <FaDocker />,
            title: 'Containerisation',
            description: 'Isolation complète des applications pour une sécurité et une stabilité maximales.',
            gradient: 'linear-gradient(135deg, #0db7ed 0%, #38bdf8 100%)'
        },
        {
            icon: <FaShip />,
            title: 'Portabilité Ultime',
            description: 'Développez une fois, déployez partout. Cohérence parfaite entre dev, test et prod.',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
        },
        {
            icon: <FaLayerGroup />,
            title: 'Microservices',
            description: 'Architecture modulaire facilitant la maintenance et l\'évolution de vos systèmes.',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)'
        },
        {
            icon: <FaCogs />,
            title: 'DevOps & CI/CD',
            description: 'Pipelines automatisés pour des déploiements rapides, fiables et fréquents.',
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
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
                className="relative overflow-hidden w-full max-w-[100vw] py-24 px-8 max-md:py-16 max-md:px-4 max-[480px]:py-12 max-[480px]:px-2"
                style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #172554 100%)' }}
            >
                {/* ::before pseudo-element replacement */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(circle at 10% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 40%)'
                    }}
                />

                <AnimatedDockerBackground />

                <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
                    <div className="text-center mb-16 relative z-[2]">
                        <div className="flex justify-center items-center gap-6 mb-6 [&_svg]:text-[#38bdf8] [&_svg]:drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">
                            <FaDocker size={50} />
                            <FaServer size={40} />
                            <FaBoxOpen size={40} />
                        </div>
                        <h2
                            className="text-5xl max-md:text-[2.2rem] max-[480px]:text-[1.8rem] font-extrabold mb-4 bg-clip-text"
                            style={{
                                background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Solutions Docker & DevOps
                        </h2>
                        <p className="text-[1.2rem] max-md:text-[1.1rem] max-md:px-4 max-[480px]:text-base max-[480px]:px-2 text-slate-300 leading-relaxed max-w-[600px] mx-auto">
                            Accélérez votre transformation numérique avec des architectures conteneurisées
                            modernes, robustes et évolutives.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] max-md:grid-cols-1 gap-8 max-md:gap-6 max-[480px]:gap-4 mb-16 max-md:mb-12 max-[480px]:mb-8 relative z-[2]">
                    {dockerFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn('up', 'spring', 0.3 + index * 0.1, 0.8)}
                        >
                            <div
                                className="group backdrop-blur-[10px] rounded-[20px] p-4 sm:p-8 border border-[rgba(148,163,184,0.1)] relative overflow-hidden transition-all duration-300 h-full hover:-translate-y-2.5 hover:border-[rgba(56,189,248,0.3)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.4)] hover:bg-[rgba(30,41,59,0.6)]"
                                style={{ background: 'rgba(30, 41, 59, 0.4)' }}
                            >
                                {/* Top gradient line (::before) */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[3px]"
                                    style={{ background: feature.gradient }}
                                />
                                <div className="text-[2.5rem] text-[#38bdf8] mb-6 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">
                                    {feature.icon}
                                </div>
                                <h3 className="text-[1.4rem] font-bold text-slate-100 mb-4">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-[0.95rem]">{feature.description}</p>
                                {/* CardGlow */}
                                <div
                                    className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)' }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div variants={fadeIn('up', 'tween', 0.6, 1)}>
                    <div className="text-center relative z-[2]">
                        <p className="text-[1.3rem] italic text-slate-200 mb-8 p-8 rounded-[15px] border-l-4 border-l-[#38bdf8] max-w-[700px] mx-auto" style={{ background: 'rgba(30, 41, 59, 0.4)' }}>
                            &quot;La conteneurisation n&apos;est pas qu&apos;une technologie, c&apos;est la pierre angulaire
                            d&apos;une infrastructure agile et résiliente.&quot;
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white border-none py-4 px-10 rounded-full text-[1.1rem] font-semibold cursor-pointer transition-all duration-300 shadow-[0_5px_15px_rgba(2,132,199,0.3)]"
                            style={{ background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)' }}
                        >
                            Moderniser votre infrastructure
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default DockerSection;
