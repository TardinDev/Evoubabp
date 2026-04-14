'use client'

import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { FormationCardProps } from '../../shared/types';

export default function FormationCard({ icon: Icon, title, text, countdown, index, navigateUrl, featured }: FormationCardProps) {
  const router = useRouter();

  const cardColors = [
    { primary: '#667eea', secondary: '#764ba2', accent: '#ff6b6b' },
    { primary: '#3b82f6', secondary: '#06b6d4', accent: '#4facfe' },
    { primary: '#4facfe', secondary: '#00f2fe', accent: '#43e97b' },
    { primary: '#43e97b', secondary: '#38f9d7', accent: '#667eea' }
  ];

  const featuredColors = { primary: '#1a1a2e', secondary: '#0f3460', accent: '#d4a574' };
  const colorScheme = featured ? featuredColors : cardColors[index % cardColors.length];

  const handleClick = () => {
    if (navigateUrl) {
      router.push(navigateUrl);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleClick();
  };

  if (featured) {
    return (
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.01
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        onClick={handleClick}
        className="relative rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] cursor-pointer col-span-full"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
      >
        {/* Animated glow border */}
        <div
          className="absolute inset-0 rounded-[24px] z-0"
          style={{
            padding: '2px',
            background: 'linear-gradient(135deg, #d4a574, #f0c27f, #d4a574)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Badge Nouveau */}
        <div className="absolute top-6 right-6 z-10">
          <span className="relative px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1a1a2e] bg-gradient-to-r from-[#d4a574] to-[#f0c27f] shadow-lg">
            Nouveau
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4a574] to-[#f0c27f] animate-ping opacity-30" />
          </span>
        </div>

        {/* Content */}
        <div className="relative z-[2] p-10 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          {/* Icon */}
          <div
            className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-2xl text-white"
            style={{
              background: 'linear-gradient(135deg, #d4a574, #f0c27f)',
              boxShadow: '0 12px 35px rgba(212, 165, 116, 0.4)'
            }}
          >
            <Icon size={48} className="text-[#1a1a2e]" />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white leading-tight">
              {title}
            </h3>
            <p className="text-base md:text-lg text-white/75 leading-relaxed mb-6 max-w-[700px]">
              {text}
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button
                onClick={handleButtonClick}
                className="border-none py-3.5 px-8 rounded-full text-[#1a1a2e] font-bold cursor-pointer transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(212,165,116,0.5)] flex items-center gap-2 group"
                style={{ background: 'linear-gradient(135deg, #d4a574, #f0c27f)' }}
              >
                <span>D&eacute;couvrir la formation</span>
                <span className="transition-transform duration-300 group-hover:translate-x-[4px]">{"\u2192"}</span>
              </button>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-[#48bb78] animate-pulse" />
                Formation courte &amp; dense
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute top-[15%] left-[5%] w-2 h-2 rounded-full bg-[#d4a574]/30 animate-float" />
          <div className="absolute bottom-[20%] right-[10%] w-3 h-3 rounded-full bg-[#f0c27f]/20 animate-float-delayed" />
          <div className="absolute top-[60%] left-[40%] w-1.5 h-1.5 rounded-full bg-[#d4a574]/25 animate-float" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{
        y: -10,
        rotateY: 5,
        scale: 1.02
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onClick={handleClick}
      className="relative bg-white rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] backdrop-blur-[20px] border border-white/30 transition-all duration-300 ease-in-out"
      style={{
        cursor: navigateUrl ? 'pointer' : 'default',
      }}
    >
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-[3]"
        style={{ background: `linear-gradient(90deg, ${colorScheme.primary}, ${colorScheme.secondary})` }}
      />

      {/* Card background gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: `linear-gradient(135deg, ${colorScheme.primary}15, ${colorScheme.secondary}10)` }}
      />

      {/* Card content */}
      <div className="relative z-[2] p-8 h-full flex flex-col min-h-[350px]">
        {/* Icon */}
        <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 rounded-[20px] text-white"
          style={{
            background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
            boxShadow: `0 8px 25px ${colorScheme.primary}40`
          }}
        >
          <Icon size={40} />
          {/* Icon Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full -z-[1]"
            style={{ background: `radial-gradient(circle, ${colorScheme.accent}30, transparent 70%)` }}
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 mb-6">
          <h3 className="text-2xl font-bold mb-4 text-[#2d3748] leading-tight flex flex-col gap-2">
            {title}
            {navigateUrl && (
              <small className="text-xs font-medium text-[#667eea] opacity-80 italic">
                {"\u{1F446}"} Cliquez pour decouvrir
              </small>
            )}
          </h3>
          <p className="text-base text-[#718096] leading-relaxed mb-4">
            {text}
          </p>

          {countdown && (
            <div
              className="rounded-xl p-4 mt-4"
              style={{
                background: 'linear-gradient(135deg, #667eea15, #764ba215)',
                border: '1px solid #667eea30'
              }}
            >
              <div className="text-sm text-[#667eea] font-semibold mb-2">
                {"\u23F0"} Prochaine session
              </div>
              <div className="text-xl font-extrabold text-[#4a5568] font-mono">
                {countdown}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-auto">
          <button
            onClick={handleButtonClick}
            className="border-none py-3 px-6 rounded-[25px] text-white font-semibold cursor-pointer transition-all duration-300 ease-in-out flex items-center gap-2 hover:-translate-y-[2px] group"
            style={{
              background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
              boxShadow: `0 4px 15px ${colorScheme.primary}40`
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 6px 20px ${colorScheme.primary}60`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 4px 15px ${colorScheme.primary}40`;
            }}
          >
            <span>S&rsquo;inscrire</span>
            <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[3px]">{"\u2192"}</span>
          </button>

          <div
            className="py-2 px-4 rounded-[15px] font-semibold text-sm"
            style={{
              background: `${colorScheme.accent}20`,
              color: colorScheme.accent,
              border: `1px solid ${colorScheme.accent}30`
            }}
          >
            Gratuit
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div
          className="absolute animate-float w-2 h-2 rounded-full"
          style={{
            top: '20%',
            left: '10%',
            background: `${colorScheme.accent}60`
          }}
        />
        <div
          className="absolute animate-float-delayed w-2 h-2 rounded-full"
          style={{
            top: '70%',
            right: '15%',
            background: `${colorScheme.accent}60`
          }}
        />
      </div>
    </motion.div>
  );
}

FormationCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  countdown: PropTypes.string,
  index: PropTypes.number.isRequired,
  navigateUrl: PropTypes.string,
  featured: PropTypes.bool
};
