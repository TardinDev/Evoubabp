'use client'

import Link from "next/link";
import { FaMicrophone, FaCogs, FaSearch, FaLock, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import type { IconType } from "react-icons";

const ACCENT = '#4b0082';
const INK = '#0a0a0a';
const PAPER = '#F8F7F1';

interface Capacite {
  Icon: IconType;
  title: string;
  description: string;
  exemples: string[];
}

const capacites: Capacite[] = [
  {
    Icon: FaMicrophone,
    title: "Il vous écoute et vous répond",
    description: "Vous parlez, il comprend et répond à voix haute. Pas besoin de clavier pour lui confier une tâche.",
    exemples: [
      "Donner un ordre à la voix",
      "Recevoir la réponse à l'oral",
      "Enchaîner plusieurs demandes dans la même conversation",
    ],
  },
  {
    Icon: FaCogs,
    title: "Il agit sur votre ordinateur",
    description: "Les gestes répétitifs de la journée, il les fait à votre place, sur demande.",
    exemples: [
      "Ouvrir vos applications",
      "Ranger et renommer vos fichiers",
      "Envoyer un email, gérer votre agenda",
    ],
  },
  {
    Icon: FaSearch,
    title: "Il cherche et résume",
    description: "Il lit pour vous et vous rend l'essentiel, sous la forme qui vous arrange.",
    exemples: [
      "Recherche sur le web",
      "Lecture de documents et de PDF",
      "Résumés et comptes rendus",
    ],
  },
  {
    Icon: FaLock,
    title: "Il reste chez vous",
    description: "L'assistant tourne sur votre machine. Vos fichiers et vos conversations ne sont pas envoyés à des tiers.",
    exemples: [
      "Fonctionne en local",
      "Vos données restent sur votre disque",
      "Vous décidez de ce qu'il a le droit de faire",
    ],
  },
];

const etapes = [
  {
    title: "Installation sur votre machine",
    text: "On installe ensemble tout ce qu'il faut sur votre PC ou votre Mac, et on vérifie que l'assistant démarre.",
  },
  {
    title: "La voix",
    text: "On branche le micro et la synthèse vocale : vous lui parlez, il vous répond.",
  },
  {
    title: "Les premières automatisations",
    text: "On lui apprend vos tâches courantes : ouvrir vos applications, ranger un dossier, préparer un email.",
  },
  {
    title: "Recherche et résumés",
    text: "On lui donne accès au web et à vos documents pour qu'il cherche, lise et résume.",
  },
  {
    title: "Votre Jarvis, à votre façon",
    text: "On l'ajuste à votre quotidien : vos commandes, vos habitudes, ce qu'il peut faire seul et ce qu'il doit vous demander.",
  },
];

const prerequis = [
  "Un PC ou un Mac",
  "Un micro (celui de l'ordinateur suffit)",
  "Une connexion internet pour l'installation",
];

const inclus = [
  "Formation dispensée personnellement par Davy Tardin",
  "En visio ou en présentiel à Paris",
  "Vous repartez avec l'assistant installé et fonctionnel",
  "Tarif sur devis selon vos besoins",
];

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export default function JarvisPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PAPER, color: INK }}>
      {/* Header */}
      <header className="bg-[#4b0082] text-white py-14 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/formations"
            className={`inline-block mb-10 py-2 px-4 border border-white/40 text-sm text-white no-underline transition-colors duration-300 hover:bg-white hover:text-[#4b0082] ${focusRing} focus-visible:outline-white`}
          >
            {"←"} Retour aux formations
          </Link>

          <span className="block font-mono text-xs tracking-[0.3em] uppercase mb-6 text-white/70">
            Nouvelle formation
          </span>

          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-6 max-w-3xl"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
          >
            Avoir son propre Jarvis sur son PC ou son Mac
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-white/85 max-w-2xl">
            Un assistant qui vous répond à la voix, agit sur votre ordinateur,
            cherche et résume pour vous. Il tourne sur votre machine : vos données n&apos;en sortent pas.
          </p>
        </div>
      </header>

      {/* Capacités */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.75rem)' }}
          >
            Ce que votre Jarvis <span style={{ color: ACCENT }}>sait faire</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-black/65 max-w-2xl mb-12">
            Quatre capacités, mises en place une par une pendant la formation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-black/15">
            {capacites.map(({ Icon, title, description, exemples }) => (
              <article
                key={title}
                className="border-r border-b border-black/15 p-7 md:p-9 transition-colors duration-300 hover:bg-white"
              >
                <Icon aria-hidden="true" className="text-2xl mb-6" style={{ color: ACCENT }} />
                <h3 className="font-bold text-xl md:text-2xl leading-tight mb-3">{title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-black/70 mb-5">{description}</p>
                <ul className="space-y-2">
                  {exemples.map((ex) => (
                    <li key={ex} className="flex gap-3 text-sm text-black/80">
                      <span
                        aria-hidden="true"
                        className="shrink-0 mt-2 inline-block w-1 h-1 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Déroulé */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16">
          <div>
            <h2
              className="font-extrabold leading-[1.1] tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.75rem)' }}
            >
              Le déroulé
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-black/65">
              On construit l&apos;assistant sur votre propre ordinateur, étape par étape.
              À la fin, il est installé et vous savez le faire évoluer.
            </p>
          </div>

          <ol className="list-none m-0 p-0 border-t border-black/15">
            {etapes.map((etape, i) => (
              <li key={etape.title} className="border-b border-black/15 py-6 grid sm:grid-cols-[7rem_1fr] gap-2 sm:gap-6">
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.18em] pt-1"
                  style={{ color: ACCENT }}
                >
                  Étape {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-lg leading-tight mb-1.5">{etape.title}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-black/70 m-0">{etape.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Prérequis + format */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            { label: "Ce qu'il vous faut", items: prerequis },
            { label: "Le format", items: inclus },
          ].map(({ label, items }) => (
            <div key={label} className="bg-white border border-black/10 p-7 md:p-9">
              <h2
                className="font-mono text-[11px] uppercase tracking-[0.22em] mb-5"
                style={{ color: ACCENT }}
              >
                {label}
              </h2>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-black/80">
                    <span
                      aria-hidden="true"
                      className="shrink-0 mt-2.5 inline-block w-1 h-1 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Contact */}
      <section className="px-6 md:px-10 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto bg-[#0a0a0a] text-[#F8F7F1] p-8 md:p-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-xl">
              <h2
                className="font-extrabold leading-tight tracking-tight mb-3"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
              >
                Réserver votre place
              </h2>
              <p className="text-base leading-relaxed text-white/70 m-0">
                Écrivez-moi : on fixe ensemble la date, le format et le tarif.
                Réponse sous 24h.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/33766450771?text=Bonjour%20Davy%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20la%20formation%20Jarvis."
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-semibold no-underline whitespace-nowrap transition-colors duration-300 ${focusRing} focus-visible:outline-white`}
              >
                <FaWhatsapp aria-hidden="true" size={20} />
                Me contacter sur WhatsApp
              </a>
              <a
                href="mailto:tardindavy@gmail.com?subject=Formation%20Jarvis%20-%20Demande%20d'information"
                className={`inline-flex items-center justify-center gap-3 px-7 py-4 border border-white/40 hover:bg-white hover:text-[#0a0a0a] text-white text-sm font-semibold no-underline whitespace-nowrap transition-colors duration-300 ${focusRing} focus-visible:outline-white`}
              >
                <IoIosMail aria-hidden="true" size={20} />
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
