'use client'

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function FormationFooter() {
  return (
    <motion.div variants={fadeIn("up", "tween", 0.5, 1)}>
      <footer
        id="footer-section"
        className="bg-black text-white relative overflow-hidden"
      >
        {/* Background pattern overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20zm20 0c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />

        <div className="relative z-[2] max-w-[1200px] mx-auto pt-16 px-8 pb-8 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12 md:text-left text-center">
          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#ffd700]">
              {"\u{1F4DE}"} Contactez-nous
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-lg transition-transform duration-300 ease-in-out hover:translate-x-[5px]">
                <span className="text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{"\u{1F4E7}"}</span>
                <span>tardindavy@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-lg transition-transform duration-300 ease-in-out hover:translate-x-[5px]">
                <span className="text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{"\u{1F4F1}"}</span>
                <a
                  href="https://wa.me/33766450771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 no-underline transition-colors duration-300 ease-in-out hover:text-[#ffd700]"
                >
                  +33 7 66 45 07 71 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-4 text-lg transition-transform duration-300 ease-in-out hover:translate-x-[5px]">
                <span className="text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{"\u{1F4CD}"}</span>
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#ffd700]">
              {"\u{1F517}"} Liens Utiles
            </h3>
            <div className="flex flex-col gap-4">
              <a href="/" className="text-white/80 no-underline text-lg transition-all duration-300 ease-in-out hover:text-[#ffd700] hover:translate-x-[5px]">Accueil</a>
              <a href="/#projects" className="text-white/80 no-underline text-lg transition-all duration-300 ease-in-out hover:text-[#ffd700] hover:translate-x-[5px]">Nos Projets</a>
              <a href="/#footer-section" className="text-white/80 no-underline text-lg transition-all duration-300 ease-in-out hover:text-[#ffd700] hover:translate-x-[5px]">Contact</a>
              <a href="https://www.linkedin.com/in/davy-tardin-11a7a1159/" target="_blank" rel="noopener noreferrer" className="text-white/80 no-underline text-lg transition-all duration-300 ease-in-out hover:text-[#ffd700] hover:translate-x-[5px]">LinkedIn</a>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#ffd700]">
              {"\u{1F310}"} Suivez-nous
            </h3>
            <div className="flex gap-4 justify-start md:justify-start max-md:justify-center">
              <a
                href="https://www.linkedin.com/in/davy-tardin-11a7a1159/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-[50px] h-[50px] bg-white/10 rounded-full no-underline transition-all duration-300 ease-in-out backdrop-blur-[10px] border border-white/20 text-white hover:-translate-y-[3px] hover:scale-110 hover:bg-[#0A66C2] hover:shadow-[0_8px_25px_rgba(10,102,194,0.4)]"
              >
                <FaLinkedin className="text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
              </a>
              <a
                href="https://github.com/TardinDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-[50px] h-[50px] bg-white/10 rounded-full no-underline transition-all duration-300 ease-in-out backdrop-blur-[10px] border border-white/20 text-white hover:-translate-y-[3px] hover:scale-110 hover:bg-[#333333] hover:shadow-[0_8px_25px_rgba(51,51,51,0.4)]"
              >
                <FaGithub className="text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-[2] border-t border-white/10 p-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-center md:text-left">
          <div className="text-white/70 text-base">
            &copy; {new Date().getFullYear()} Evoubabp Academy. Tous droits reserves.
          </div>
          <div className="flex gap-4 md:gap-8">
            <a href="/politique-confidentialite" className="text-white/70 no-underline text-sm transition-colors duration-300 ease-in-out hover:text-[#ffd700]">
              Politique de confidentialite
            </a>
            <a href="/cgu" className="text-white/70 no-underline text-sm transition-colors duration-300 ease-in-out hover:text-[#ffd700]">
              Conditions d&rsquo;utilisation
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
