'use client'

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { fadeIn } from "../../utils/motion";

const stats = [
  { number: 56, label: "Etudiants formes", suffix: "+", icon: "\u{1F465}" },
  { number: 96, label: "Taux de satisfaction", suffix: "%", icon: "\u2B50" },
  { number: 4, label: "Formations disponibles", suffix: "", icon: "\u{1F4DA}" },
  { number: 850, label: "Heures de contenu", suffix: "h", icon: "\u23F1\uFE0F" }
];

function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime!) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

Counter.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  suffix: PropTypes.string
};

export default function StatsSection() {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.3, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <section
        id="stats-section"
        className="py-20 px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
      >
        {/* Background pattern overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />

        <h2 className="relative z-[2] text-center text-5xl md:text-3xl font-black mb-16 text-[#2d3748]">
          {"\u{1F31F}"} <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(45deg, #667eea, #764ba2)' }}
          >Nos Resultats</span> Parlent d&rsquo;Eux-Memes
        </h2>

        <div className="relative z-[2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.05
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="relative bg-white rounded-[20px] py-10 px-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-white/30 backdrop-blur-[20px] cursor-pointer overflow-hidden group"
            >
              <div className="relative z-[2] text-5xl mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
                {stat.icon}
              </div>
              <div className="relative z-[2] text-[3.5rem] font-black text-[#667eea] mb-2 font-mono">
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="relative z-[2] text-lg text-[#718096] font-semibold">
                {stat.label}
              </div>
              {/* Glow effect on hover */}
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(102,126,234,0.1),transparent_70%)] opacity-0 transition-opacity duration-300 ease-in-out z-[1] group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-[2] max-w-[800px] mx-auto bg-white rounded-[20px] p-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/30 backdrop-blur-[20px]">
          <blockquote className="text-2xl md:text-xl leading-relaxed text-[#4a5568] mb-8 italic text-center relative">
            <span className="absolute -top-4 -left-4 text-[4rem] text-[#667eea] opacity-30">&ldquo;</span>
            Grace a Evoubabp Academy, j&rsquo;ai pu transformer ma passion en carriere.
            Les formations sont exceptionnelles et le suivi personnalise fait toute la difference !
            <span className="absolute -bottom-12 -right-4 text-[4rem] text-[#667eea] opacity-30">&rdquo;</span>
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="text-5xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
              {"\u{1F468}\u200D\u{1F4BB}"}
            </div>
            <div className="text-left">
              <div className="text-xl font-bold text-[#2d3748] mb-1">
                Alexandre Martin
              </div>
              <div className="text-base text-[#718096] font-medium">
                Developpeur Full-Stack chez TechCorp
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
