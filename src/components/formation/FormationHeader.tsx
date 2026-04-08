'use client'

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (path) => {
    if (path === '/') {
      router.push('/');
    } else {
      scrollToSection(path.replace('#', ''));
    }
  };

  return (
    <motion.div variants={fadeIn("down", "tween", 0.1, 1)}>
      <header
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Header nav bar */}
        <div className="relative z-10 py-6 px-8 flex justify-between items-center backdrop-blur-[10px] bg-white/10 border-b border-white/20">
          <div className="flex flex-col gap-1">
            <h1
              className="text-[1.75rem] md:text-[1.5rem] font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => router.push('/')}
            >
              {"\u{1F393}"} Evoubabp Academy
            </h1>
            <span className="text-sm md:text-xs text-white/80 font-medium">
              Excellence en Formation Tech
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            <button onClick={() => handleNavigation('/')} className="bg-transparent border-none text-white/90 font-medium transition-all duration-300 ease-in-out py-2 px-4 rounded-[20px] cursor-pointer text-base hover:text-white hover:bg-white/10 hover:-translate-y-[2px]">Accueil</button>
            <button onClick={() => scrollToSection('formations-grid')} className="bg-transparent border-none text-white/90 font-medium transition-all duration-300 ease-in-out py-2 px-4 rounded-[20px] cursor-pointer text-base hover:text-white hover:bg-white/10 hover:-translate-y-[2px]">Nos Formations</button>
            <button onClick={() => scrollToSection('stats-section')} className="bg-transparent border-none text-white/90 font-medium transition-all duration-300 ease-in-out py-2 px-4 rounded-[20px] cursor-pointer text-base hover:text-white hover:bg-white/10 hover:-translate-y-[2px]">Statistiques</button>
            <button onClick={() => scrollToSection('faq-section')} className="bg-transparent border-none text-white/90 font-medium transition-all duration-300 ease-in-out py-2 px-4 rounded-[20px] cursor-pointer text-base hover:text-white hover:bg-white/10 hover:-translate-y-[2px]">FAQ</button>
            <button onClick={() => scrollToSection('footer-section')} className="bg-transparent border-none text-white/90 font-medium transition-all duration-300 ease-in-out py-2 px-4 rounded-[20px] cursor-pointer text-base hover:text-white hover:bg-white/10 hover:-translate-y-[2px]">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="hidden max-md:flex flex-col gap-1 bg-transparent border-none cursor-pointer p-2"
          >
            <span
              className="w-[25px] h-[3px] bg-white rounded-sm transition-all duration-300 ease-in-out"
              style={{ transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}
            />
            <span
              className="w-[25px] h-[3px] bg-white rounded-sm transition-all duration-300 ease-in-out"
              style={{ opacity: isMenuOpen ? 0 : 1 }}
            />
            <span
              className="w-[25px] h-[3px] bg-white rounded-sm transition-all duration-300 ease-in-out"
              style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}
            />
          </button>
        </div>

        {/* Mobile Nav */}
        <nav
          className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-[20px] transition-all duration-300 ease-in-out z-[9] py-4 shadow-[0_10px_25px_rgba(0,0,0,0.1)] md:hidden"
          style={{
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? 'visible' : 'hidden'
          }}
        >
          <button onClick={() => handleNavigation('/')} className="block w-full py-4 px-8 text-left bg-transparent border-none text-[#333] font-medium text-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[rgba(102,126,234,0.1)] hover:text-[#667eea]">{"\u{1F3E0}"} Accueil</button>
          <button onClick={() => scrollToSection('formations-grid')} className="block w-full py-4 px-8 text-left bg-transparent border-none text-[#333] font-medium text-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[rgba(102,126,234,0.1)] hover:text-[#667eea]">{"\u{1F4DA}"} Nos Formations</button>
          <button onClick={() => scrollToSection('stats-section')} className="block w-full py-4 px-8 text-left bg-transparent border-none text-[#333] font-medium text-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[rgba(102,126,234,0.1)] hover:text-[#667eea]">{"\u{1F4CA}"} Statistiques</button>
          <button onClick={() => scrollToSection('faq-section')} className="block w-full py-4 px-8 text-left bg-transparent border-none text-[#333] font-medium text-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[rgba(102,126,234,0.1)] hover:text-[#667eea]">{"\u2753"} FAQ</button>
          <button onClick={() => scrollToSection('footer-section')} className="block w-full py-4 px-8 text-left bg-transparent border-none text-[#333] font-medium text-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[rgba(102,126,234,0.1)] hover:text-[#667eea]">{"\u{1F4DE}"} Contact</button>
        </nav>

        {/* Hero Section */}
        <div className="relative z-[2] text-center py-16 px-8 pb-24 text-white">
          <h2 className="text-[3.5rem] md:text-[2.5rem] font-black leading-[1.1] mb-6">
            Transformez votre{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(45deg, #ffd700, #ffb347)' }}
            >
              Passion
            </span>{' '}
            en{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(45deg, #ffd700, #ffb347)' }}
            >
              Expertise
            </span>
          </h2>
          <p className="text-xl md:text-base text-white/90 max-w-[700px] mx-auto mb-10 leading-relaxed">
            Des formations tech de pointe pour developper vos competences
            et accelerer votre carriere dans le developpement moderne
          </p>
          <button
            onClick={() => scrollToSection('formations-grid')}
            className="border-none py-4 px-10 rounded-full text-white text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out inline-flex items-center gap-3 shadow-[0_8px_25px_rgba(255,107,107,0.3)] hover:-translate-y-[3px] hover:shadow-[0_12px_35px_rgba(255,107,107,0.4)] active:-translate-y-[1px] group"
            style={{ background: 'linear-gradient(45deg, #ff6b6b, #feca57)' }}
          >
            <span>Decouvrir nos formations</span>
            <span className="text-xl transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]">{"\u2192"}</span>
          </button>
        </div>
      </header>
    </motion.div>
  );
}
