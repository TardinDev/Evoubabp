import Link from "next/link";

const navLinks = [
  { href: "#formations-grid", label: "Formations" },
  { href: "#stats-section", label: "Résultats" },
  { href: "#faq-section", label: "FAQ" },
  { href: "#contact-section", label: "Contact" },
];

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function FormationHeader() {
  return (
    <header className="bg-[#4b0082] text-white">
      {/* Barre de navigation */}
      <div className="border-b border-white/15">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <Link
            href="/"
            className={`self-start py-2 text-lg font-extrabold tracking-tight text-white no-underline ${focusRing}`}
          >
            Evoubabp Academy
          </Link>

          <nav aria-label="Navigation de la page formations" className="flex flex-wrap items-center gap-x-6 gap-y-1 -ml-0 text-sm font-medium">
            <Link
              href="/"
              className={`py-3 text-white/80 hover:text-white no-underline transition-colors duration-300 ${focusRing}`}
            >
              Accueil
            </Link>
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`py-3 text-white/80 hover:text-white no-underline transition-colors duration-300 ${focusRing}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <span className="block font-mono text-xs tracking-[0.3em] uppercase mb-6 text-white/70">
          Formations tech
        </span>

        <h1
          className="font-extrabold leading-[1.05] tracking-tight mb-6 max-w-3xl"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
        >
          Transformez votre passion en expertise
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-white/85 max-w-2xl mb-10">
          Des formations tech pour développer vos compétences et accélérer
          votre carrière dans le développement moderne.
        </p>

        <a
          href="#formations-grid"
          className={`group inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-[#F8F7F1] text-[#4b0082] text-sm font-semibold tracking-wide no-underline transition-colors duration-300 ${focusRing}`}
        >
          <span>Découvrir les formations</span>
          <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
            {"↓"}
          </span>
        </a>
      </div>
    </header>
  );
}
