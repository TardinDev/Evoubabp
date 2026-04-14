'use client'

import { useState } from "react";
import { FaRobot, FaTerminal, FaFileCode, FaGlobe, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

export default function ClaudeCodePage() {
  const [activeTab, setActiveTab] = useState<'skills' | 'claude-md' | 'standards'>('skills');

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header
        className="text-white py-16 px-8"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <Link href="/formations" className="text-white no-underline inline-block mb-6 py-2 px-4 border-2 border-white/40 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1a1a2e]">
            {"\u2190"} Retour aux formations
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <FaRobot className="text-5xl text-[#d4a574]" />
            <h1 className="text-4xl md:text-3xl font-bold">Coder avec l&apos;IA - Claude Code</h1>
          </div>
          <p className="text-xl opacity-90 max-w-[800px] leading-relaxed">
            Ma&icirc;trisez Claude Code pour coder 10x plus vite. Les skills essentiels,
            le fichier CLAUDE.md, et les standards web 2026 en une formation courte et dense.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-white/15 rounded-full text-sm font-medium backdrop-blur-sm">Formation courte</span>
            <span className="px-4 py-2 bg-white/15 rounded-full text-sm font-medium backdrop-blur-sm">100% pratique</span>
            <span className="px-4 py-2 bg-white/15 rounded-full text-sm font-medium backdrop-blur-sm">Suivi personnalis&eacute;</span>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#2d3748]">
            Pourquoi apprendre &agrave; coder avec l&apos;IA en 2026 ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#f7fafc] p-6 rounded-xl">
              <h3 className="text-lg font-bold text-[#2d3748] mb-3">Le probl&egrave;me</h3>
              <p className="text-[#4a5568] leading-relaxed">
                En 2026, les d&eacute;veloppeurs qui n&apos;utilisent pas l&apos;IA perdent un temps
                consid&eacute;rable sur des t&acirc;ches r&eacute;p&eacute;titives : boilerplate, debugging,
                refactoring, tests. Les recruteurs attendent d&eacute;sormais la ma&icirc;trise des outils IA.
              </p>
            </div>
            <div className="bg-[#f0fff4] p-6 rounded-xl">
              <h3 className="text-lg font-bold text-[#276749] mb-3">La solution : Claude Code</h3>
              <p className="text-[#2f855a] leading-relaxed">
                Claude Code est le CLI officiel d&apos;Anthropic. Il lit votre codebase, &eacute;dite vos fichiers,
                ex&eacute;cute des commandes, fait des recherches web et g&egrave;re vos commits Git.
                Tout &ccedil;a directement dans votre terminal.
              </p>
            </div>
          </div>

          <div className="bg-[#1a202c] text-[#e2e8f0] p-6 rounded-xl">
            <div className="text-sm text-[#a0aec0] mb-2">Installation rapide :</div>
            <pre className="text-sm leading-relaxed overflow-x-auto m-0">{`# Installer Claude Code
npm install -g @anthropic-ai/claude-code

# Lancer dans votre projet
cd mon-projet
claude

# C'est tout ! Claude analyse votre codebase et est prêt à coder.`}</pre>
          </div>
        </div>
      </section>

      {/* Navigation par onglets */}
      <section className="py-16 px-8 bg-[#f7fafc]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#2d3748]">
            Programme de la Formation
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'skills' as const, label: 'Skills Claude Code', icon: <FaTerminal /> },
              { id: 'claude-md' as const, label: 'Le fichier CLAUDE.md', icon: <FaFileCode /> },
              { id: 'standards' as const, label: 'Standards Web 2026', icon: <FaGlobe /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border-2 cursor-pointer transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#1a1a2e] text-white border-[#1a1a2e]'
                    : 'bg-white text-[#2d3748] border-[#e2e8f0] hover:border-[#1a1a2e]'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1 : Skills Claude Code */}
          {activeTab === 'skills' && (
            <div className="space-y-8">
              {/* Commandes essentielles */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-6">Commandes essentielles (Slash Commands)</h3>
                <p className="text-[#4a5568] mb-6 leading-relaxed">
                  Claude Code fonctionne avec des commandes pr&eacute;fix&eacute;es par <code className="bg-[#edf2f7] px-2 py-0.5 rounded text-sm">/</code> que vous tapez directement dans le chat.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { cmd: "/init", desc: "Initialise un fichier CLAUDE.md pour votre projet en analysant votre codebase" },
                    { cmd: "/compact", desc: "Compresse le contexte de la conversation pour libérer de la mémoire" },
                    { cmd: "/review", desc: "Demande une code review de vos modifications en cours (git diff)" },
                    { cmd: "/commit", desc: "Crée un commit Git avec un message auto-généré basé sur vos changements" },
                    { cmd: "/help", desc: "Affiche l'aide complète avec toutes les commandes disponibles" },
                    { cmd: "/clear", desc: "Efface la conversation en cours et repart de zéro" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-[#f7fafc] rounded-lg">
                      <code className="text-[#d4a574] font-bold whitespace-nowrap text-sm">{item.cmd}</code>
                      <span className="text-[#4a5568] text-sm">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modes de travail */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-6">Modes de travail</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-2 border-[#d4a574] rounded-xl p-6">
                    <h4 className="text-lg font-bold text-[#d4a574] mb-3">Plan Mode</h4>
                    <p className="text-[#4a5568] text-sm leading-relaxed mb-3">
                      Claude explore votre codebase, con&ccedil;oit une strat&eacute;gie d&apos;impl&eacute;mentation
                      et vous la pr&eacute;sente <strong>avant d&apos;&eacute;crire du code</strong>. Id&eacute;al pour les t&acirc;ches complexes.
                    </p>
                    <div className="bg-[#f7fafc] p-3 rounded-lg text-sm text-[#4a5568]">
                      Quand l&apos;utiliser : nouvelles features, refactoring, changements multi-fichiers
                    </div>
                  </div>
                  <div className="border-2 border-[#0f3460] rounded-xl p-6">
                    <h4 className="text-lg font-bold text-[#0f3460] mb-3">Mode Auto (par d&eacute;faut)</h4>
                    <p className="text-[#4a5568] text-sm leading-relaxed mb-3">
                      Claude ex&eacute;cute directement les modifications demand&eacute;es. Il lit, &eacute;dite, cr&eacute;e des fichiers
                      et lance des commandes. Vous validez chaque action.
                    </p>
                    <div className="bg-[#f7fafc] p-3 rounded-lg text-sm text-[#4a5568]">
                      Quand l&apos;utiliser : corrections rapides, ajout de fonctions, debugging
                    </div>
                  </div>
                </div>
              </div>

              {/* Outils intégrés */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-6">Outils int&eacute;gr&eacute;s</h3>
                <p className="text-[#4a5568] mb-6 leading-relaxed">
                  Claude Code dispose d&apos;outils sp&eacute;cialis&eacute;s qu&apos;il utilise automatiquement selon le contexte :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { name: "Read", desc: "Lire des fichiers, images, PDFs, notebooks" },
                    { name: "Edit", desc: "Modifier des fichiers avec remplacement précis" },
                    { name: "Write", desc: "Créer de nouveaux fichiers" },
                    { name: "Bash", desc: "Exécuter des commandes terminal (git, npm, etc.)" },
                    { name: "Grep", desc: "Rechercher du contenu dans les fichiers (regex)" },
                    { name: "Glob", desc: "Trouver des fichiers par pattern (*.tsx)" },
                    { name: "WebSearch", desc: "Chercher sur le web pour des infos à jour" },
                    { name: "WebFetch", desc: "Récupérer et analyser le contenu d'une URL" },
                  ].map((tool, i) => (
                    <div key={i} className="bg-[#f7fafc] p-4 rounded-lg text-center">
                      <code className="text-[#d4a574] font-bold text-sm">{tool.name}</code>
                      <p className="text-[#4a5568] text-xs mt-2 m-0">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hooks & MCP */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-6">Hooks &amp; MCP Servers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-[#2d3748] mb-3">Hooks syst&egrave;me</h4>
                    <p className="text-[#4a5568] text-sm leading-relaxed mb-4">
                      Les hooks ex&eacute;cutent des commandes shell automatiquement en r&eacute;ponse aux actions de Claude.
                      Configur&eacute;s dans <code className="bg-[#edf2f7] px-2 py-0.5 rounded text-xs">.claude/settings.json</code>.
                    </p>
                    <div className="bg-[#1a202c] text-[#e2e8f0] p-4 rounded-lg text-sm overflow-x-auto">
                      <pre className="m-0">{`// Exemple : linter après chaque édition
{
  "hooks": {
    "afterEdit": {
      "command": "npx eslint --fix \${file}"
    }
  }
}`}</pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#2d3748] mb-3">MCP Servers</h4>
                    <p className="text-[#4a5568] text-sm leading-relaxed mb-4">
                      Le Model Context Protocol permet de connecter Claude &agrave; des outils externes :
                      bases de donn&eacute;es, APIs, services cloud, Figma, etc.
                    </p>
                    <div className="bg-[#1a202c] text-[#e2e8f0] p-4 rounded-lg text-sm overflow-x-auto">
                      <pre className="m-0">{`// .claude/settings.json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["-y", "supabase-mcp"]
    }
  }
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Raccourcis clavier */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-6">Raccourcis clavier essentiels</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { key: "Escape", desc: "Annuler l'action en cours" },
                    { key: "Tab", desc: "Accepter une suggestion" },
                    { key: "Ctrl+C", desc: "Interrompre Claude" },
                    { key: "Ctrl+L", desc: "Effacer le terminal" },
                    { key: "Shift+Tab", desc: "Basculer en Plan mode" },
                    { key: "Enter", desc: "Envoyer le message" },
                  ].map((shortcut, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-[#f7fafc] rounded-lg">
                      <kbd className="bg-[#1a202c] text-white px-3 py-1.5 rounded-md text-xs font-mono font-bold min-w-[80px] text-center">{shortcut.key}</kbd>
                      <span className="text-[#4a5568] text-sm">{shortcut.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2 : CLAUDE.md */}
          {activeTab === 'claude-md' && (
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-4">Qu&apos;est-ce que CLAUDE.md ?</h3>
                <p className="text-[#4a5568] leading-relaxed mb-6">
                  Le fichier <code className="bg-[#edf2f7] px-2 py-0.5 rounded text-sm">CLAUDE.md</code> est
                  le fichier d&apos;instructions persistantes de Claude Code. Il est lu automatiquement &agrave; chaque
                  d&eacute;marrage et permet de personnaliser le comportement de Claude pour votre projet.
                  C&apos;est <strong>la cl&eacute; pour obtenir des r&eacute;sultats pr&eacute;cis et coh&eacute;rents</strong>.
                </p>

                <div className="bg-[#fffbeb] border-l-4 border-[#d69e2e] p-4 mb-6 rounded-r-lg">
                  <h4 className="font-bold text-[#975a16] mb-1">Pourquoi c&apos;est indispensable</h4>
                  <p className="text-[#744210] text-sm m-0">
                    Sans CLAUDE.md, Claude d&eacute;couvre votre projet &agrave; chaque conversation. Avec un bon CLAUDE.md,
                    il conna&icirc;t d&eacute;j&agrave; votre stack, vos conventions et votre architecture. R&eacute;sultat : des r&eacute;ponses
                    plus rapides et plus pertinentes d&egrave;s le d&eacute;part.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-6">O&ugrave; placer le fichier ?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#f7fafc] p-5 rounded-xl border-2 border-[#e2e8f0]">
                    <code className="text-[#d4a574] font-bold text-sm">~/. claude/CLAUDE.md</code>
                    <p className="text-[#4a5568] text-sm mt-2 mb-1"><strong>Global</strong></p>
                    <p className="text-[#718096] text-xs m-0">Instructions valables pour tous vos projets (pr&eacute;f&eacute;rences personnelles, style de code)</p>
                  </div>
                  <div className="bg-[#f0fff4] p-5 rounded-xl border-2 border-[#c6f6d5]">
                    <code className="text-[#276749] font-bold text-sm">./CLAUDE.md</code>
                    <p className="text-[#276749] text-sm mt-2 mb-1"><strong>Projet (recommand&eacute;)</strong></p>
                    <p className="text-[#718096] text-xs m-0">&Agrave; la racine du projet, commit&eacute; dans Git. Partag&eacute; avec l&apos;&eacute;quipe.</p>
                  </div>
                  <div className="bg-[#f7fafc] p-5 rounded-xl border-2 border-[#e2e8f0]">
                    <code className="text-[#d4a574] font-bold text-sm">.claude/settings.json</code>
                    <p className="text-[#4a5568] text-sm mt-2 mb-1"><strong>Settings</strong></p>
                    <p className="text-[#718096] text-xs m-0">Config technique : permissions, hooks, MCP servers</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-4">Quoi mettre dans CLAUDE.md ?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Stack technique (frameworks, versions, BDD)",
                    "Structure du projet (dossiers, conventions de nommage)",
                    "Conventions de code (style, patterns, linting)",
                    "Règles de commit (format, langue, co-author)",
                    "Instructions spécifiques (ne pas toucher tel fichier, toujours tester)",
                    "Contexte métier (type de projet, utilisateurs cibles)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-[#f7fafc] rounded-lg">
                      <FaCheckCircle className="text-[#48bb78] mt-0.5 flex-shrink-0" />
                      <span className="text-[#4a5568] text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-lg font-bold text-[#2d3748] mb-4">Exemple complet de CLAUDE.md :</h4>
                <div className="bg-[#1a202c] text-[#e2e8f0] p-6 rounded-xl overflow-x-auto">
                  <pre className="text-sm leading-relaxed m-0">{`# Mon Projet - Instructions pour Claude

## Stack technique
- Next.js 15 (App Router, Server Components)
- React 19, TypeScript 5 (strict mode)
- Tailwind CSS v4
- Supabase (auth, BDD, storage)
- Vercel (déploiement)

## Structure du projet
- src/app/ → Routes (App Router)
- src/components/ → Composants réutilisables
- src/lib/ → Utilitaires, clients API
- src/types/ → Types TypeScript partagés

## Conventions de code
- Composants : PascalCase (ex: UserProfile.tsx)
- Fonctions/variables : camelCase
- Fichiers utilitaires : kebab-case
- Toujours utiliser "use client" si hooks ou événements
- Préférer les Server Components par défaut
- Ne JAMAIS utiliser \`any\` en TypeScript

## Règles de commit
- Messages en français
- Format : type: description (feat:, fix:, refactor:)
- Toujours ajouter Co-Authored-By pour Claude

## À ne pas modifier
- .env.local (secrets)
- prisma/migrations/ (géré par Prisma)`}</pre>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-4">Commande rapide : /init</h3>
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Pas envie d&apos;&eacute;crire votre CLAUDE.md de z&eacute;ro ? La commande <code className="bg-[#edf2f7] px-2 py-0.5 rounded text-sm">/init</code> analyse
                  automatiquement votre codebase et g&eacute;n&egrave;re un CLAUDE.md de base que vous pouvez ensuite personnaliser.
                </p>
                <div className="bg-[#1a202c] text-[#e2e8f0] p-4 rounded-lg text-sm">
                  <pre className="m-0">{`# Dans votre terminal, une fois Claude lancé :
> /init

# Claude va analyser votre projet et créer CLAUDE.md
# Vous pouvez ensuite l'éditer pour ajouter vos conventions`}</pre>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3 : Standards Web 2026 */}
          {activeTab === 'standards' && (
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-4">Les standards &agrave; ma&icirc;triser en 2026</h3>
                <p className="text-[#4a5568] leading-relaxed mb-6">
                  Le web &eacute;volue vite. Voici les technologies et pratiques que tout d&eacute;veloppeur doit conna&icirc;tre
                  en 2026, et comment Claude Code vous aide &agrave; les adopter.
                </p>
              </div>

              {/* Next.js 15 */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold text-sm">N</div>
                  <h3 className="text-xl font-bold text-[#2d3748]">Next.js 15 &amp; App Router</h3>
                </div>
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  L&apos;App Router est le standard. Les Server Components sont utilis&eacute;s par d&eacute;faut, les Client Components
                  uniquement quand n&eacute;cessaire (interactivit&eacute;, hooks).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#f0fff4] p-4 rounded-lg">
                    <h4 className="text-sm font-bold text-[#276749] mb-2">Server Components (par d&eacute;faut)</h4>
                    <ul className="text-xs text-[#2f855a] space-y-1 list-disc pl-4 m-0">
                      <li>Rendu c&ocirc;t&eacute; serveur, z&eacute;ro JS envoy&eacute; au client</li>
                      <li>Acc&egrave;s direct &agrave; la BDD, fichiers, APIs</li>
                      <li>async/await dans les composants</li>
                    </ul>
                  </div>
                  <div className="bg-[#ebf8ff] p-4 rounded-lg">
                    <h4 className="text-sm font-bold text-[#2c5282] mb-2">Server Actions</h4>
                    <ul className="text-xs text-[#2b6cb0] space-y-1 list-disc pl-4 m-0">
                      <li>Fonctions serveur appel&eacute;es depuis le client</li>
                      <li>Remplacent les API routes pour les mutations</li>
                      <li>Directive &quot;use server&quot; en haut de la fonction</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-[#1a202c] text-[#e2e8f0] p-4 rounded-lg text-sm mt-4 overflow-x-auto">
                  <pre className="m-0">{`// app/actions.ts
"use server"

export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  await db.user.create({ data: { name } });
  revalidatePath("/users");
}`}</pre>
                </div>
              </div>

              {/* React 19 */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#61dafb] rounded-lg flex items-center justify-center text-[#1a202c] font-bold text-sm">R</div>
                  <h3 className="text-xl font-bold text-[#2d3748]">React 19</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#f7fafc] p-4 rounded-lg">
                    <code className="text-[#d4a574] text-sm font-bold">use()</code>
                    <p className="text-[#4a5568] text-xs mt-2 m-0">Nouveau hook pour lire des Promises et du Context directement dans le rendu</p>
                  </div>
                  <div className="bg-[#f7fafc] p-4 rounded-lg">
                    <code className="text-[#d4a574] text-sm font-bold">Actions</code>
                    <p className="text-[#4a5568] text-xs mt-2 m-0">useActionState et useFormStatus pour g&eacute;rer les soumissions de formulaires</p>
                  </div>
                  <div className="bg-[#f7fafc] p-4 rounded-lg">
                    <code className="text-[#d4a574] text-sm font-bold">Suspense</code>
                    <p className="text-[#4a5568] text-xs mt-2 m-0">Chargement progressif avec fallback, int&eacute;gr&eacute; au streaming SSR</p>
                  </div>
                </div>
              </div>

              {/* TypeScript strict */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#3178c6] rounded-lg flex items-center justify-center text-white font-bold text-sm">TS</div>
                  <h3 className="text-xl font-bold text-[#2d3748]">TypeScript Strict Mode</h3>
                </div>
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  En 2026, le strict mode est obligatoire sur tout projet professionnel. Z&eacute;ro <code className="bg-[#edf2f7] px-2 py-0.5 rounded text-xs">any</code>,
                  types exhaustifs, null checks syst&eacute;matiques.
                </p>
                <div className="bg-[#1a202c] text-[#e2e8f0] p-4 rounded-lg text-sm overflow-x-auto">
                  <pre className="m-0">{`// tsconfig.json — config recommandée 2026
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true
  }
}`}</pre>
                </div>
              </div>

              {/* Tailwind v4 */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#06b6d4] rounded-lg flex items-center justify-center text-white font-bold text-sm">TW</div>
                  <h3 className="text-xl font-bold text-[#2d3748]">Tailwind CSS v4</h3>
                </div>
                <p className="text-[#4a5568] leading-relaxed mb-4">
                  Tailwind v4 passe &agrave; une configuration CSS-first. Plus de <code className="bg-[#edf2f7] px-2 py-0.5 rounded text-xs">tailwind.config.js</code>,
                  tout se configure directement dans votre CSS avec <code className="bg-[#edf2f7] px-2 py-0.5 rounded text-xs">@theme</code>.
                </p>
                <div className="bg-[#1a202c] text-[#e2e8f0] p-4 rounded-lg text-sm overflow-x-auto">
                  <pre className="m-0">{`/* app.css — Tailwind v4 */
@import "tailwindcss";

@theme {
  --color-brand: #667eea;
  --color-brand-dark: #764ba2;
  --font-display: "Inter", sans-serif;
  --breakpoint-xs: 475px;
}`}</pre>
                </div>
              </div>

              {/* Performance & Accessibilité */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-6">Performance &amp; Accessibilit&eacute;</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-[#2d3748] mb-4">Core Web Vitals 2026</h4>
                    <div className="space-y-3">
                      {[
                        { metric: "LCP", desc: "Largest Contentful Paint < 2.5s", detail: "Temps de chargement du plus gros élément visible" },
                        { metric: "INP", desc: "Interaction to Next Paint < 200ms", detail: "Réactivité aux interactions utilisateur" },
                        { metric: "CLS", desc: "Cumulative Layout Shift < 0.1", detail: "Stabilité visuelle (pas de sauts de layout)" },
                      ].map((item, i) => (
                        <div key={i} className="bg-[#f7fafc] p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="bg-[#48bb78] text-white text-xs font-bold px-2 py-0.5 rounded">{item.metric}</span>
                            <span className="text-[#2d3748] text-sm font-medium">{item.desc}</span>
                          </div>
                          <p className="text-[#718096] text-xs m-0">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#2d3748] mb-4">Accessibilit&eacute; WCAG 2.2</h4>
                    <div className="space-y-3">
                      {[
                        "Tous les éléments interactifs accessibles au clavier",
                        "Attributs aria-label sur les boutons sans texte",
                        "Contraste de couleurs suffisant (ratio 4.5:1 minimum)",
                        "Structure sémantique (h1 → h2 → h3, landmarks)",
                        "Alt text sur toutes les images",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-[#4a5568]">
                          <FaCheckCircle className="text-[#48bb78] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Biome / ESLint */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <h3 className="text-xl font-bold text-[#2d3748] mb-4">Outils de qualit&eacute; de code</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#f7fafc] p-5 rounded-xl">
                    <h4 className="font-bold text-[#2d3748] mb-2">Biome</h4>
                    <p className="text-[#4a5568] text-sm m-0">
                      Remplace ESLint + Prettier en un seul outil ultra-rapide (Rust). Linting, formatage et import sorting.
                    </p>
                  </div>
                  <div className="bg-[#f7fafc] p-5 rounded-xl">
                    <h4 className="font-bold text-[#2d3748] mb-2">ESLint Flat Config</h4>
                    <p className="text-[#4a5568] text-sm m-0">
                      Si vous restez sur ESLint, la flat config (<code className="text-xs">eslint.config.js</code>) remplace le <code className="text-xs">.eslintrc</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Contact — Inscription */}
      <section className="py-20 px-8 bg-white">
        <div
          className="max-w-[1000px] mx-auto rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Cette formation vous int&eacute;resse ?
            </h2>
            <p className="text-lg text-center opacity-90 mb-6 max-w-[700px] mx-auto leading-relaxed">
              Formation courte et personnalis&eacute;e, dispens&eacute;e par Davy Tardin.
              Contactez-moi pour d&eacute;finir ensemble le format, le planning et le tarif
              adapt&eacute;s &agrave; votre niveau et vos objectifs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-[600px] mx-auto">
              {[
                "Formation individuelle ou petit groupe",
                "Exercices pratiques sur votre propre projet",
                "Support WhatsApp après la formation",
                "Tarif sur devis selon vos besoins",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#d4a574] text-lg flex-shrink-0" />
                  <span className="text-white/95 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/33766450771?text=Bonjour%20Davy%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20la%20formation%20Claude%20Code."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-[#25D366] text-white no-underline transition-all duration-300 hover:bg-[#1da851] hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp size={22} />
                Me contacter sur WhatsApp
              </a>
              <a
                href="mailto:tardindavy@gmail.com?subject=Formation%20Claude%20Code%20-%20Demande%20d'information"
                className="flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-white/15 text-white border-2 border-white/30 no-underline transition-all duration-300 hover:bg-white/25 hover:scale-105 backdrop-blur-sm"
              >
                <IoIosMail size={22} />
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
