'use client'

import Link from "next/link";
import { useChatBot } from "../../contexts/ChatBotContext";
import { useTranslation } from '../../hooks/useTranslation';
import { FaComments, FaCode, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

export default function Footer() {
  const { openChatBot } = useChatBot();
  const { t } = useTranslation();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}
    >
      {/* Pseudo-element overlay via a div */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)'
        }}
      />

      {/* Footer container */}
      <div className="max-w-[1200px] mx-auto pt-12 px-4 sm:px-8 pb-8 relative z-[1]">
        {/* Top section */}
        <div className="grid grid-cols-[1fr_2fr] gap-12 mb-8 max-md:grid-cols-1 max-md:gap-8">
          {/* Brand section */}
          <div className="flex flex-col gap-6">
            {/* Brand logo */}
            <div className="flex items-center gap-3">
              {/* Logo icon */}
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center text-white"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              >
                <FaCode size={20} />
              </div>
              {/* Brand name */}
              <h2
                className="text-2xl font-bold bg-clip-text"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Evoubap
              </h2>
            </div>
            {/* Brand description */}
            <p className="text-[#94a3b8] leading-relaxed max-w-[300px]">
              {t.footer.brandDescription}
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/davy-tardin-11a7a1159/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-[10px] flex items-center justify-center transition-all duration-300 backdrop-blur-[10px] border border-white/10 bg-white/10 hover:-translate-y-0.5 [&_svg]:fill-[#94a3b8] [&_svg]:transition-[fill] [&_svg]:duration-300 hover:[&_svg]:fill-white"
                style={{ ['--tw-bg-opacity' as string]: undefined }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6, #8b5cf6)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/TardinDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-[10px] flex items-center justify-center transition-all duration-300 backdrop-blur-[10px] border border-white/10 bg-white/10 hover:-translate-y-0.5 [&_svg]:fill-[#94a3b8] [&_svg]:transition-[fill] [&_svg]:duration-300 hover:[&_svg]:fill-white"
                onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6, #8b5cf6)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Services column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-[#e2e8f0] mb-2">{t.footer.services}</h3>
              <a href="#app-showcase" className="text-[#94a3b8] no-underline transition-all duration-300 py-1 rounded hover:text-blue-500 hover:pl-2">{t.footer.mobileApps}</a>
              <a href="#app-showcase" className="text-[#94a3b8] no-underline transition-all duration-300 py-1 rounded hover:text-blue-500 hover:pl-2">{t.footer.webApps}</a>
              <a href="#howItWorks" className="text-[#94a3b8] no-underline transition-all duration-300 py-1 rounded hover:text-blue-500 hover:pl-2">{t.footer.saasDev}</a>
              <Link href="/formations" className="text-[#94a3b8] no-underline transition-all duration-300 py-1 rounded hover:text-blue-500 hover:pl-2">{t.footer.training}</Link>
              <Link href="/blog" className="text-[#94a3b8] no-underline transition-all duration-300 py-1 rounded hover:text-blue-500 hover:pl-2">{t.footer.blog}</Link>
              <a href="#howItWorks" className="text-[#94a3b8] no-underline transition-all duration-300 py-1 rounded hover:text-blue-500 hover:pl-2">{t.footer.consulting}</a>
            </div>

            {/* Technologies column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-[#e2e8f0] mb-2">{t.footer.technologies}</h3>
              <a href="#tech-used" className="text-[#94a3b8] no-underline transition-all duration-300 py-1 rounded hover:text-blue-500 hover:pl-2">React Native</a>
              <a href="#tech-used" className="text-[#94a3b8] no-underline transition-all duration-300 py-1 rounded hover:text-blue-500 hover:pl-2">React / Next.js</a>
              <a href="#tech-used" className="text-[#94a3b8] no-underline transition-all duration-300 py-1 rounded hover:text-blue-500 hover:pl-2">TypeScript</a>
              <a href="#tech-used" className="text-[#94a3b8] no-underline transition-all duration-300 py-1 rounded hover:text-blue-500 hover:pl-2">Node.js</a>
              <a href="#tech-used" className="text-[#94a3b8] no-underline transition-all duration-300 py-1 rounded hover:text-blue-500 hover:pl-2">Expo</a>
            </div>

            {/* Contact column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-[#e2e8f0] mb-2">{t.footer.contact}</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#94a3b8]">
                  <span className="flex items-center justify-center text-[#94a3b8]"><FaEnvelope size={14} /></span>
                  <a href="mailto:tardindavy@gmail.com" className="text-[#94a3b8] no-underline transition-colors duration-300 hover:text-blue-500">
                    tardindavy@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[#94a3b8]">
                  <span className="flex items-center justify-center text-[#94a3b8]"><FaPhone size={14} /></span>
                  <a href="https://wa.me/33766450771" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] no-underline transition-colors duration-300 hover:text-blue-500">
                    +33 7 66 45 07 71 (WhatsApp)
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[#94a3b8]">
                  <span className="flex items-center justify-center text-[#94a3b8]"><FaGlobe size={14} /></span>
                  <span>France, Europe</span>
                </div>
                <button
                  onClick={openChatBot}
                  className="flex items-center gap-2.5 border-none text-white py-3 px-5 rounded-[25px] cursor-pointer transition-all duration-300 text-[0.9rem] font-semibold mt-4 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(102,126,234,0.4)] active:translate-y-0"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                  }}
                >
                  <FaComments size={18} />
                  <span>{t.footer.chatWithMe}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px my-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.3), transparent)' }}
        />

        {/* Bottom section */}
        <div className="flex justify-between items-center flex-wrap gap-4 max-md:flex-col max-md:text-center">
          <p className="text-[#64748b] text-sm">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6 max-sm:flex-wrap max-sm:justify-center">
            <Link href="/politique-confidentialite" className="text-[#64748b] no-underline text-sm transition-colors duration-300 hover:text-blue-500">{t.footer.privacyPolicy}</Link>
            <Link href="/cgu" className="text-[#64748b] no-underline text-sm transition-colors duration-300 hover:text-blue-500">{t.footer.termsOfUse}</Link>
            <Link href="/mentions-legales" className="text-[#64748b] no-underline text-sm transition-colors duration-300 hover:text-blue-500">{t.footer.legalNotices}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
