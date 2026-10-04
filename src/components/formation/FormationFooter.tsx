import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const linkClass = `py-1.5 text-white/75 hover:text-white no-underline transition-colors duration-300 ${focusRing}`;
const headingClass = "font-mono text-[11px] uppercase tracking-[0.22em] text-white/50 mb-4";

export default function FormationFooter() {
  return (
    <footer id="footer-section" className="bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <h2 className={headingClass}>Contact</h2>
          <div className="flex flex-col items-start">
            <a href="mailto:tardindavy@gmail.com" className={linkClass}>
              tardindavy@gmail.com
            </a>
            <a
              href="https://wa.me/33766450771"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              +33 7 66 45 07 71 (WhatsApp)
            </a>
            <span className="py-1.5 text-white/75">Paris, France</span>
          </div>
        </div>

        <div>
          <h2 className={headingClass}>Liens utiles</h2>
          <div className="flex flex-col items-start">
            <Link href="/" className={linkClass}>Accueil</Link>
            <Link href="/#projects" className={linkClass}>Projets</Link>
            <Link href="/#contact" className={linkClass}>Contact</Link>
          </div>
        </div>

        <div>
          <h2 className={headingClass}>Réseaux</h2>
          <div className="flex flex-col items-start">
            <a
              href="https://www.linkedin.com/in/davy-tardin-11a7a1159/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2.5 ${linkClass}`}
            >
              <FaLinkedin aria-hidden="true" className="text-lg" />
              LinkedIn
            </a>
            <a
              href="https://github.com/TardinDev"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2.5 ${linkClass}`}
            >
              <FaGithub aria-hidden="true" className="text-lg" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-white/60">
          <span>&copy; {new Date().getFullYear()} Evoubabp Academy. Tous droits réservés.</span>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <Link href="/politique-confidentialite" className={linkClass}>
              Politique de confidentialité
            </Link>
            <Link href="/cgu" className={linkClass}>
              Conditions d&rsquo;utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
