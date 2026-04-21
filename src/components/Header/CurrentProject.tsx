'use client'

import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReactquery,
  SiNodedotjs,
  SiVite,
  SiPostgresql,
  SiDocker,
  SiPrisma
} from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";
import { useTranslation } from "../../hooks/useTranslation";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";

interface TechItem {
  Icon: IconType;
  name: string;
  color: string;
}

const TECHS: TechItem[] = [
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: FaReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: SiReactquery, name: "React Query", color: "#FF4154" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#3C873A" },
  { Icon: SiVite, name: "Vite", color: "#646CFF" },
  { Icon: SiPrisma, name: "Prisma", color: "#A5B4FC" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#60A5FA" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
];

const PROGRESS = 80;

export default function CurrentProject() {
  const { t } = useTranslation();

  const handleViewMore = () => {
    const target = document.getElementById('app-showcase');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#4b0082]">

      <div
        className="relative z-[1] w-full px-3 sm:px-4 py-4"
      >
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {/* LEFT — Project details */}
          <div
            className="cp-fade-right rounded-xl p-4 sm:p-5 flex flex-col gap-3 backdrop-blur-sm"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}
          >
            {/* Status badge */}
            <div className="flex items-center gap-2 self-start px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-emerald-300 uppercase">
                {t.currentProject.statusInProgress}
              </span>
            </div>

            <h2 className="text-white font-bold text-lg sm:text-xl leading-tight">
              {t.currentProject.title}
            </h2>

            <p className="text-white/80 text-[0.85rem] sm:text-[0.9rem] leading-relaxed">
              {t.currentProject.description}
            </p>

            {/* Progress bar */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] sm:text-xs font-medium text-white/60 uppercase tracking-wider">
                  {t.currentProject.progressLabel}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  {t.currentProject.progress}
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full overflow-hidden bg-white/10">
                <div
                  className="cp-progress-bar h-full rounded-full bg-emerald-400"
                  style={{ ['--progress-target' as string]: `${PROGRESS}%` } as CSSProperties}
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Tech stack + CTA */}
          <div
            className="cp-fade-left rounded-xl p-4 sm:p-5 flex flex-col gap-3 backdrop-blur-sm"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}
          >
            <h2 className="text-white font-bold text-lg sm:text-xl">
              {t.currentProject.techUsed}
            </h2>

            <div
              className="cp-fade-up grid grid-cols-5 gap-1.5 sm:gap-2"
            >
              {TECHS.map(({ Icon, name, color }) => (
                <div
                  key={name}
                  title={name}
                  className="group flex flex-col items-center justify-center gap-1 py-2 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 cursor-pointer"
                >
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 group-hover:scale-110"
                    style={{ color }}
                  />
                  <span
                    className="text-[8px] sm:text-[9px] font-medium text-white/60 group-hover:text-white transition-colors duration-300 text-center px-1 leading-tight"
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleViewMore}
              className="cp-fade-up-late group inline-flex items-center justify-center gap-2 self-start px-4 py-2 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#7C3AED] hover:bg-[#6d28d9] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t.currentProject.viewMore}</span>
              <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
