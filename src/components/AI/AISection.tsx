'use client'

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { FaBrain, FaRobot, FaChartLine, FaLightbulb, FaMicrochip, FaNetworkWired } from 'react-icons/fa';
import AnimatedBackground from './AnimatedBackground';
import { useTranslation } from '../../hooks/useTranslation';

interface AISectionProps {
  id?: string;
}

const AISection: React.FC<AISectionProps> = ({ id }) => {
  const { t } = useTranslation();

  const aiFeatures = [
    {
      icon: <FaBrain />,
      title: t.aiSection.ai,
      description: t.aiSection.aiDesc,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: <FaRobot />,
      title: t.aiSection.automation,
      description: t.aiSection.automationDesc,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: <FaChartLine />,
      title: t.aiSection.predictive,
      description: t.aiSection.predictiveDesc,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: <FaLightbulb />,
      title: t.aiSection.innovation,
      description: t.aiSection.innovationDesc,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
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
        style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
      >
        {/* ::before pseudo-element replacement */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(247, 147, 251, 0.1) 0%, transparent 50%)'
          }}
        />

        <AnimatedBackground />

        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
          <div className="text-center mb-16 relative z-[2]">
            <div className="flex justify-center gap-4 mb-6 [&_svg]:text-[#667eea] [&_svg]:drop-shadow-[0_0_10px_rgba(102,126,234,0.3)]">
              <FaBrain size={40} />
              <FaMicrochip size={40} />
              <FaNetworkWired size={40} />
            </div>
            <h2
              className="text-5xl max-md:text-[2.2rem] max-[480px]:text-[1.8rem] font-extrabold mb-4 bg-clip-text"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.aiSection.title}
            </h2>
            <p className="text-[1.2rem] max-md:text-[1.1rem] max-md:px-4 max-[480px]:text-base max-[480px]:px-2 text-[#b8b8d1] leading-relaxed max-w-[600px] mx-auto">
              {t.aiSection.subtitle}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] max-md:grid-cols-1 gap-8 max-md:gap-6 max-[480px]:gap-4 mb-16 max-md:mb-12 max-[480px]:mb-8 relative z-[2]">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'spring', 0.3 + index * 0.1, 0.8)}
            >
              <div
                className="group bg-white/5 backdrop-blur-[10px] rounded-[20px] p-4 sm:p-8 border border-white/10 relative overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:border-[rgba(102,126,234,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                {/* Top gradient line (::before) */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: feature.gradient }}
                />
                <div className="text-[2.5rem] text-[#667eea] mb-6 drop-shadow-[0_0_10px_rgba(102,126,234,0.3)]">
                  {feature.icon}
                </div>
                <h3 className="text-[1.4rem] font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[#b8b8d1] leading-relaxed text-[0.95rem]">{feature.description}</p>
                {/* CardGlow */}
                <div
                  className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn('up', 'tween', 0.6, 1)}>
          <div className="text-center relative z-[2]">
            <p className="text-[1.3rem] italic text-[#e0e0ff] mb-8 p-8 bg-white/5 rounded-[15px] border-l-4 border-l-[#667eea] max-w-[700px] mx-auto">
              &quot;{t.aiSection.closingQuote}&quot;
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="text-white border-none py-4 px-10 rounded-full text-[1.1rem] font-semibold cursor-pointer transition-all duration-300 shadow-[0_5px_15px_rgba(102,126,234,0.2)]"
              style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
            >
              {t.aiSection.discoverProjects}
            </motion.button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default AISection;
