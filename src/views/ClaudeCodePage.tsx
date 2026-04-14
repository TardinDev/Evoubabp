'use client'

import { FaRobot, FaWhatsapp, FaCheckCircle, FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

const etapes = [
  {
    num: "01",
    title: "Installation & prise en main de Claude Code",
    why: "Avant de courir, il faut savoir marcher. On installe l'outil, on comprend comment il fonctionne et on lance notre premier projet ensemble.",
    points: [
      "Installer Claude Code (npm, cl\u00e9 API Anthropic)",
      "Lancer Claude dans un projet existant",
      "Comprendre le fonctionnement : prompt \u2192 outils \u2192 action",
      "Premiers \u00e9changes : poser une question, demander une modification",
    ],
    projet: "On initialise le projet fil rouge : une application web compl\u00e8te que vous allez construire tout au long de la formation.",
    color: "#d4a574",
  },
  {
    num: "02",
    title: "Configurer CLAUDE.md \u2014 votre assistant sur mesure",
    why: "Sans instructions, l'IA improvise. Avec un bon CLAUDE.md, elle conna\u00eet votre stack, vos conventions et livre du code coh\u00e9rent d\u00e8s le d\u00e9part.",
    points: [
      "Cr\u00e9er le CLAUDE.md du projet avec /init",
      "D\u00e9finir la stack, la structure et les conventions",
      "R\u00e8gles de commit, fichiers \u00e0 ne pas toucher",
      "Tester la diff\u00e9rence avant/apr\u00e8s CLAUDE.md",
    ],
    projet: "On configure le CLAUDE.md de notre projet fil rouge pour que Claude g\u00e9n\u00e8re du code parfaitement adapt\u00e9 \u00e0 notre architecture.",
    color: "#48bb78",
  },
  {
    num: "03",
    title: "Ma\u00eetriser les skills & commandes avanc\u00e9es",
    why: "Coder avec l'IA ne se r\u00e9sume pas \u00e0 \"\u00e9cris-moi un composant\". Les vrais gains viennent des commandes de productivit\u00e9, des modes de travail et de l'automatisation.",
    points: [
      "Slash commands : /commit, /review, /compact...",
      "Plan Mode vs Auto Mode : quand utiliser lequel",
      "Les outils int\u00e9gr\u00e9s (Read, Edit, Bash, Grep, Glob...)",
      "Hooks syst\u00e8me et MCP Servers pour automatiser",
    ],
    projet: "On construit les premi\u00e8res pages et composants du projet en utilisant les commandes apprises. Claude g\u00e9n\u00e8re, vous validez et comprenez.",
    color: "#667eea",
  },
  {
    num: "04",
    title: "Coder aux standards web 2026",
    why: "Les technologies \u00e9voluent chaque ann\u00e9e. Un d\u00e9veloppeur qui code comme en 2024 livre du code obsol\u00e8te. Cette \u00e9tape vous met \u00e0 jour.",
    points: [
      "Next.js 15 App Router & Server Components/Actions",
      "React 19 : use(), useActionState, Suspense",
      "TypeScript strict mode (z\u00e9ro any, null safety)",
      "Tailwind CSS v4 : config CSS-first avec @theme",
      "Performance : Core Web Vitals (LCP, INP, CLS)",
    ],
    projet: "On int\u00e8gre le backend, l'authentification et le styling du projet fil rouge en appliquant chaque standard appris.",
    color: "#764ba2",
  },
  {
    num: "05",
    title: "GEO \u2014 Rendre votre site visible aux IA",
    why: "En 2026, les utilisateurs cherchent sur ChatGPT, Perplexity et Gemini autant que sur Google. Si votre site n'est pas optimis\u00e9 pour ces moteurs g\u00e9n\u00e9ratifs, vous perdez une part massive de trafic.",
    points: [
      "GEO vs SEO : ce qui change et pourquoi \u00e7a compte",
      "Donn\u00e9es structur\u00e9es : Schema.org, JSON-LD",
      "Contenu citable et format\u00e9 pour les LLMs",
      "Balises s\u00e9mantiques, FAQ, r\u00e9ponses directes",
      "Strat\u00e9gie de visibilit\u00e9 multi-moteurs (Google + IA)",
    ],
    projet: "On impl\u00e9mente le GEO sur notre projet : m\u00e9tadonn\u00e9es, donn\u00e9es structur\u00e9es, contenu optimis\u00e9 pour que le site soit cit\u00e9 par les IA.",
    color: "#e53e3e",
  },
  {
    num: "06",
    title: "Finalisation, d\u00e9ploiement & bonnes pratiques",
    why: "Un projet non d\u00e9ploy\u00e9 n'existe pas. On finalise, on d\u00e9ploie et on met en place les bonnes pratiques pour continuer \u00e0 progresser apr\u00e8s la formation.",
    points: [
      "D\u00e9ploiement sur Vercel en production",
      "Tests et code review avec Claude (/review)",
      "Accessibilit\u00e9 WCAG 2.2 : audit et corrections",
      "Workflow quotidien id\u00e9al avec Claude Code",
    ],
    projet: "On d\u00e9ploie le projet final en production. Vous repartez avec une application compl\u00e8te, d\u00e9ploy\u00e9e et optimis\u00e9e.",
    color: "#1a1a2e",
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
          <p className="text-xl opacity-90 max-w-[700px] leading-relaxed mb-4">
            Une formation progressive o&ugrave; vous construisez un vrai projet de A &agrave; Z
            en apprenant Claude Code, les standards web 2026 et le GEO.
          </p>
          <p className="text-base text-white/60 max-w-[700px] leading-relaxed mb-8">
            De l&apos;installation jusqu&apos;au d&eacute;ploiement, chaque &eacute;tape s&apos;appuie sur la pr&eacute;c&eacute;dente.
            Vous ne regardez pas, vous codez.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-sm font-bold text-[#d4a574]">Formation payante</span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">6 &eacute;tapes progressives</span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">1 projet fil rouge</span>
          </div>
        </div>
      </header>

      {/* Le concept */}
      <section className="py-14 px-8 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#2d3748]">
            Le concept : apprendre en construisant
          </h2>
          <p className="text-lg text-[#4a5568] leading-relaxed mb-8 max-w-[800px]">
            Pas de th&eacute;orie creuse. Vous suivez un <strong>parcours en 6 &eacute;tapes</strong> et
            vous construisez un <strong>projet r&eacute;el</strong> tout au long de la formation.
            Chaque notion apprise est imm&eacute;diatement appliqu&eacute;e sur votre projet.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#f7fafc] rounded-xl">
              <div className="text-4xl mb-3">{"\u{1F6E0}\uFE0F"}</div>
              <h3 className="font-bold text-[#2d3748] mb-1">Installation</h3>
              <p className="text-[#718096] text-sm m-0">&Eacute;tapes 1-2</p>
            </div>
            <div className="text-center p-6 bg-[#f7fafc] rounded-xl">
              <div className="text-4xl mb-3">{"\u{1F680}"}</div>
              <h3 className="font-bold text-[#2d3748] mb-1">Construction</h3>
              <p className="text-[#718096] text-sm m-0">&Eacute;tapes 3-5</p>
            </div>
            <div className="text-center p-6 bg-[#f7fafc] rounded-xl">
              <div className="text-4xl mb-3">{"\u{1F30D}"}</div>
              <h3 className="font-bold text-[#2d3748] mb-1">D&eacute;ploiement</h3>
              <p className="text-[#718096] text-sm m-0">&Eacute;tape 6</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="py-16 px-8 bg-[#f7fafc]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#2d3748]">
            Le parcours complet
          </h2>
          <p className="text-center text-[#718096] mb-12 max-w-[600px] mx-auto">
            6 &eacute;tapes progressives. Chaque &eacute;tape s&apos;appuie sur la pr&eacute;c&eacute;dente et fait avancer le projet.
          </p>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#e2e8f0] hidden md:block" />

            <div className="space-y-8">
              {etapes.map((etape, i) => (
                <div key={i} className="relative">
                  {/* Cercle sur la ligne */}
                  <div
                    className="absolute left-3.5 top-8 w-5 h-5 rounded-full border-4 border-white z-10 hidden md:block"
                    style={{ background: etape.color }}
                  />

                  <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden md:ml-16">
                    {/* En-tête */}
                    <div className="flex items-center gap-4 p-6 pb-4">
                      <span
                        className="text-2xl font-black flex-shrink-0"
                        style={{ color: etape.color }}
                      >
                        {etape.num}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-lg font-bold text-[#2d3748] m-0">{etape.title}</h3>
                          {i === 4 && (
                            <span className="px-2.5 py-0.5 bg-[#e53e3e]/10 text-[#e53e3e] text-xs font-bold rounded-full uppercase">Nouveau 2026</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 pb-6">
                      {/* Pourquoi */}
                      <div className="bg-[#fffbeb] border-l-4 border-[#d69e2e] p-3 mb-5 rounded-r-lg">
                        <p className="text-[#744210] text-sm m-0 italic">{etape.why}</p>
                      </div>

                      {/* Points clés */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                        {etape.points.map((point, j) => (
                          <div key={j} className="flex items-start gap-2.5 p-1.5">
                            <FaCheckCircle className="text-xs mt-1 flex-shrink-0" style={{ color: etape.color }} />
                            <span className="text-[#4a5568] text-sm">{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Projet fil rouge */}
                      <div
                        className="p-4 rounded-xl text-sm"
                        style={{ background: `${etape.color}10`, borderLeft: `3px solid ${etape.color}` }}
                      >
                        <span className="font-bold text-[#2d3748]">Projet fil rouge : </span>
                        <span className="text-[#4a5568]">{etape.projet}</span>
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-[#a0aec0] text-xs">
                        <FaLock className="text-[10px]" />
                        <span>D&eacute;tail complet accessible apr&egrave;s inscription</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau incitation */}
      <section
        className="py-10 px-8 text-center"
        style={{ background: 'linear-gradient(135deg, #d4a574, #f0c27f)' }}
      >
        <p className="text-[#1a1a2e] text-lg font-bold max-w-[600px] mx-auto m-0">
          Formation dispens&eacute;e personnellement par Davy Tardin.
          Places limit&eacute;es pour garantir un suivi de qualit&eacute;.
        </p>
      </section>

      {/* CTA Contact */}
      <section className="py-20 px-8 bg-white">
        <div
          className="max-w-[900px] mx-auto rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
              Pr&ecirc;t &agrave; construire votre projet ?
            </h2>
            <p className="text-lg text-center opacity-90 mb-8 max-w-[650px] mx-auto leading-relaxed">
              Contactez-moi pour r&eacute;server votre place. On d&eacute;finit ensemble
              le planning, le format et le tarif adapt&eacute;s &agrave; votre niveau.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-[550px] mx-auto">
              {[
                "Formation individuelle ou petit groupe",
                "Vous construisez un vrai projet",
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
