'use client'

import { FaRobot, FaTerminal, FaFileCode, FaGlobe, FaWhatsapp, FaCheckCircle, FaSearch, FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

const modules = [
  {
    icon: <FaTerminal className="text-2xl" />,
    title: "Les Skills Claude Code",
    why: "Parce qu'un d\u00e9veloppeur qui ma\u00eetrise les bons outils code 10x plus vite que celui qui tape tout \u00e0 la main.",
    points: [
      "Slash commands essentielles (/init, /commit, /review...)",
      "Modes Plan et Auto : quand utiliser lequel",
      "Les 8 outils int\u00e9gr\u00e9s (Read, Edit, Bash, Grep...)",
      "Hooks syst\u00e8me et MCP Servers",
    ],
    color: "#d4a574",
  },
  {
    icon: <FaFileCode className="text-2xl" />,
    title: "Le fichier CLAUDE.md",
    why: "Parce que sans instructions claires, l'IA improvise. Avec un bon CLAUDE.md, elle conna\u00eet votre projet et livre du code coh\u00e9rent d\u00e8s le d\u00e9part.",
    points: [
      "Qu'est-ce que CLAUDE.md et pourquoi c'est la cl\u00e9",
      "O\u00f9 le placer (global, projet, settings)",
      "Quoi mettre dedans : stack, conventions, r\u00e8gles",
      "G\u00e9n\u00e9rer automatiquement avec /init",
    ],
    color: "#48bb78",
  },
  {
    icon: <FaGlobe className="text-2xl" />,
    title: "Standards Web 2026",
    why: "Parce que les technologies \u00e9voluent chaque ann\u00e9e. Ce qui \u00e9tait moderne en 2024 est d\u00e9j\u00e0 obsol\u00e8te. Vous devez coder avec les standards actuels.",
    points: [
      "Next.js 15 App Router & Server Actions",
      "React 19 (use(), Actions, Suspense)",
      "TypeScript strict mode obligatoire",
      "Tailwind CSS v4 (config CSS-first, @theme)",
      "Core Web Vitals & accessibilit\u00e9 WCAG 2.2",
    ],
    color: "#667eea",
  },
  {
    icon: <FaSearch className="text-2xl" />,
    title: "GEO \u2014 Generative Engine Optimization",
    why: "Parce que Google n'est plus le seul point d'entr\u00e9e. En 2026, ChatGPT, Perplexity, Gemini et Claude g\u00e9n\u00e8rent des r\u00e9ponses directes. Si votre site n'est pas optimis\u00e9 pour ces IA, vous \u00eates invisible.",
    points: [
      "GEO vs SEO : comprendre la diff\u00e9rence",
      "Donn\u00e9es structur\u00e9es (Schema.org, JSON-LD)",
      "Contenu citable et format\u00e9 pour les LLMs",
      "Balises s\u00e9mantiques, FAQ et r\u00e9ponses directes",
      "Strat\u00e9gie de visibilit\u00e9 multi-moteurs (Google + IA)",
    ],
    color: "#e53e3e",
  },
];

export default function ClaudeCodePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header
        className="text-white py-16 px-8"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
      >
        <div className="max-w-[1000px] mx-auto">
          <Link href="/formations" className="text-white no-underline inline-block mb-6 py-2 px-4 border-2 border-white/40 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1a1a2e]">
            {"\u2190"} Retour aux formations
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <FaRobot className="text-5xl text-[#d4a574]" />
            <h1 className="text-4xl md:text-3xl font-bold">Coder avec l&apos;IA - Claude Code</h1>
          </div>
          <p className="text-xl opacity-90 max-w-[700px] leading-relaxed mb-8">
            Une formation courte et dense pour ma&icirc;triser Claude Code,
            les standards web 2026 et le GEO. Vous codez plus vite, mieux,
            et votre site est visible partout.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-sm font-bold text-[#d4a574]">Formation payante</span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Courte &amp; dense</span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Suivi personnalis&eacute;</span>
          </div>
        </div>
      </header>

      {/* Pourquoi cette formation */}
      <section className="py-14 px-8 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#2d3748]">
            Pourquoi cette formation ?
          </h2>
          <p className="text-lg text-[#4a5568] leading-relaxed mb-8 max-w-[800px]">
            En 2026, deux comp&eacute;tences s&eacute;parent les d&eacute;veloppeurs qui r&eacute;ussissent des autres :
            <strong> savoir coder avec l&apos;IA</strong> et <strong>rendre son contenu visible aux moteurs g&eacute;n&eacute;ratifs</strong>.
            Cette formation vous donne les deux.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#f7fafc] rounded-xl">
              <div className="text-4xl font-black text-[#d4a574] mb-2">10x</div>
              <p className="text-[#4a5568] text-sm m-0">Plus rapide avec Claude Code qu&apos;en codant seul</p>
            </div>
            <div className="text-center p-6 bg-[#f7fafc] rounded-xl">
              <div className="text-4xl font-black text-[#e53e3e] mb-2">GEO</div>
              <p className="text-[#4a5568] text-sm m-0">Le nouveau SEO pour les moteurs IA (ChatGPT, Perplexity...)</p>
            </div>
            <div className="text-center p-6 bg-[#f7fafc] rounded-xl">
              <div className="text-4xl font-black text-[#667eea] mb-2">2026</div>
              <p className="text-[#4a5568] text-sm m-0">Standards &agrave; jour : Next.js 15, React 19, Tailwind v4</p>
            </div>
          </div>
        </div>
      </section>

      {/* Les modules */}
      <section className="py-16 px-8 bg-[#f7fafc]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#2d3748]">
            Ce que vous allez apprendre
          </h2>
          <p className="text-center text-[#718096] mb-12 max-w-[600px] mx-auto">
            4 modules essentiels. Chaque point est enseign&eacute; en d&eacute;tail pendant la formation avec des exercices pratiques.
          </p>

          <div className="space-y-8">
            {modules.map((mod, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="flex items-center gap-4 p-6 pb-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: mod.color }}
                  >
                    {mod.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-[#2d3748] m-0">Module {i + 1} : {mod.title}</h3>
                      {i === 3 && (
                        <span className="px-2.5 py-0.5 bg-[#e53e3e]/10 text-[#e53e3e] text-xs font-bold rounded-full uppercase">Essentiel 2026</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="bg-[#fffbeb] border-l-4 border-[#d69e2e] p-3 mb-5 rounded-r-lg">
                    <p className="text-[#744210] text-sm m-0 italic">{mod.why}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {mod.points.map((point, j) => (
                      <div key={j} className="flex items-start gap-2.5 p-2">
                        <FaCheckCircle className="text-xs mt-1 flex-shrink-0" style={{ color: mod.color }} />
                        <span className="text-[#4a5568] text-sm">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-[#a0aec0] text-xs">
                    <FaLock className="text-[10px]" />
                    <span>Contenu d&eacute;taill&eacute; accessible apr&egrave;s inscription</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau incitation intermédiaire */}
      <section
        className="py-10 px-8 text-center"
        style={{ background: 'linear-gradient(135deg, #d4a574, #f0c27f)' }}
      >
        <p className="text-[#1a1a2e] text-lg font-bold max-w-[600px] mx-auto m-0">
          Cette formation est dispens&eacute;e personnellement par Davy Tardin.
          Places limit&eacute;es pour garantir un suivi de qualit&eacute;.
        </p>
      </section>

      {/* CTA Contact principal */}
      <section className="py-20 px-8 bg-white">
        <div
          className="max-w-[900px] mx-auto rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
              Pr&ecirc;t &agrave; passer au niveau sup&eacute;rieur ?
            </h2>
            <p className="text-lg text-center opacity-90 mb-8 max-w-[650px] mx-auto leading-relaxed">
              Contactez-moi pour r&eacute;server votre place. On d&eacute;finit ensemble
              le planning, le format et le tarif adapt&eacute;s &agrave; votre niveau.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-[550px] mx-auto">
              {[
                "Formation individuelle ou petit groupe",
                "Exercices sur votre propre projet",
                "Support WhatsApp apr\u00e8s la formation",
                "Tarif sur devis selon vos besoins",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-[#d4a574] flex-shrink-0" />
                  <span className="text-white/90 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/33766450771?text=Bonjour%20Davy%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20la%20formation%20Claude%20Code%20%2B%20GEO."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-[#25D366] text-white no-underline transition-all duration-300 hover:bg-[#1da851] hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp size={22} />
                Me contacter sur WhatsApp
              </a>
              <a
                href="mailto:tardindavy@gmail.com?subject=Formation%20Claude%20Code%20%2B%20GEO%20-%20Demande%20d'information"
                className="flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-white/15 text-white border-2 border-white/30 no-underline transition-all duration-300 hover:bg-white/25 hover:scale-105 backdrop-blur-sm"
              >
                <IoIosMail size={22} />
                Envoyer un email
              </a>
            </div>

            <p className="text-center text-white/50 text-xs mt-6 m-0">
              R&eacute;ponse sous 24h. Formation disponible en visio ou en pr&eacute;sentiel &agrave; Paris.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
