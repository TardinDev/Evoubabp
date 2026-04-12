'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact, FaCompass, FaBook, FaRoad, FaMagic, FaHandPointer,
  FaLayerGroup, FaNodeJs, FaJava, FaGitAlt, FaKey, FaUserShield,
  FaCode, FaServer, FaMobile, FaDatabase, FaTools
} from "react-icons/fa";
import {
  SiExpo, SiNextdotjs, SiVite, SiTailwindcss, SiStyledcomponents,
  SiReactquery, SiFramer, SiThreedotjs, SiGreensock, SiSpringboot,
  SiPostgresql, SiSupabase, SiFirebase, SiExpress, SiMongodb,
  SiPrisma, SiPostman
} from "react-icons/si";
import type { IconType } from "react-icons";

gsap.registerPlugin(ScrollTrigger);

interface Tech {
  name: string;
  version: string;
  icon: IconType;
  color: string;
}

interface Category {
  label: string;
  icon: IconType;
  accentColor: string;
  techs: Tech[];
}

const categories: Category[] = [
  {
    label: "Frontend",
    icon: FaCode,
    accentColor: "#667eea",
    techs: [
      { name: "React", version: "v19", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", version: "v16", icon: SiNextdotjs, color: "#000000" },
      { name: "Vite", version: "v7", icon: SiVite, color: "#646CFF" },
      { name: "TypeScript", version: "v5", icon: FaBook, color: "#3178C6" },
      { name: "Tailwind CSS", version: "v4", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Styled Components", version: "v6", icon: SiStyledcomponents, color: "#DB7093" },
      { name: "React Router", version: "v6", icon: FaRoad, color: "#CA4245" },
      { name: "Framer Motion", version: "v11", icon: SiFramer, color: "#0055FF" },
      { name: "Three.js", version: "v0.160", icon: SiThreedotjs, color: "#000000" },
      { name: "GSAP", version: "v3", icon: SiGreensock, color: "#88CE02" },
    ],
  },
  {
    label: "Backend",
    icon: FaServer,
    accentColor: "#339933",
    techs: [
      { name: "Node.js", version: "v22", icon: FaNodeJs, color: "#339933" },
      { name: "Express", version: "v5", icon: SiExpress, color: "#000000" },
      { name: "Spring Boot", version: "v4", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Java", version: "v21", icon: FaJava, color: "#ED8B00" },
    ],
  },
  {
    label: "Mobile",
    icon: FaMobile,
    accentColor: "#764ba2",
    techs: [
      { name: "React Native", version: "v0.83", icon: FaReact, color: "#61DAFB" },
      { name: "Expo", version: "v54", icon: SiExpo, color: "#000020" },
      { name: "Expo Router", version: "v3", icon: FaCompass, color: "#000020" },
      { name: "Reanimated", version: "v3", icon: FaMagic, color: "#4A90E2" },
      { name: "Gesture Handler", version: "v2", icon: FaHandPointer, color: "#7B68EE" },
      { name: "NativeWind", version: "v4", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    label: "Base de données",
    icon: FaDatabase,
    accentColor: "#4169E1",
    techs: [
      { name: "PostgreSQL", version: "v17", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", version: "v7", icon: SiMongodb, color: "#47A248" },
      { name: "Supabase", version: "v2", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Firebase", version: "v10", icon: SiFirebase, color: "#FFCA28" },
      { name: "Prisma", version: "v6", icon: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    label: "Outils & Auth",
    icon: FaTools,
    accentColor: "#FF6B6B",
    techs: [
      { name: "Zustand", version: "v4", icon: FaLayerGroup, color: "#FF6B6B" },
      { name: "Tanstack Query", version: "v5", icon: SiReactquery, color: "#FF4154" },
      { name: "Clerk", version: "v5", icon: FaUserShield, color: "#6C47FF" },
      { name: "JWT", version: "", icon: FaKey, color: "#000000" },
      { name: "Git", version: "v2", icon: FaGitAlt, color: "#F05032" },
      { name: "Postman", version: "v11", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

const TechUsed = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const groups = gsap.utils.toArray<HTMLElement>(".category-group");
      const accentColors = categories.map((c) => c.accentColor);

      // Initial states
      gsap.set(groups, {
        xPercent: -120,
        opacity: 0,
        rotationY: -15,
        transformPerspective: 1200,
      });
      gsap.set(orbRef.current, { backgroundColor: accentColors[0] });
      gsap.set(orb2Ref.current, { backgroundColor: accentColors[0] });

      // Title entrance
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Floating shapes subtle parallax
      const shapes = gsap.utils.toArray<HTMLElement>(".float-shape");
      shapes.forEach((shape, i) => {
        gsap.to(shape, {
          y: i % 2 === 0 ? -120 : 100,
          rotation: i % 2 === 0 ? 180 : -180,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5 + i * 0.5,
          },
        });
      });

      // Pinned timeline — slow‑motion scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${groups.length * window.innerHeight * 1.6}`,
          pin: true,
          scrub: 2,
          anticipatePin: 1,
        },
      });

      groups.forEach((group, i) => {
        const items = group.querySelectorAll<HTMLElement>(".tech-item");
        const stepNum = group.querySelector(".step-num");

        // Set varied initial positions per item
        gsap.set(items, {
          opacity: 0,
          scale: (idx: number) => 0.55 + (idx % 3) * 0.05,
          y: (idx: number) => (idx % 2 === 0 ? 70 : -50),
          rotation: (idx: number) => (idx % 3 - 1) * 8,
        });

        // ── ENTER ──

        // Orbs shift color & position
        tl.to(
          orbRef.current,
          {
            backgroundColor: accentColors[i],
            x: i % 2 === 0 ? -120 : 160,
            y: i % 2 === 0 ? -80 : 100,
            scale: 0.85 + (i % 3) * 0.15,
            duration: 1.8,
            ease: "sine.inOut",
          }
        );
        tl.to(
          orb2Ref.current,
          {
            backgroundColor: accentColors[i],
            x: i % 2 === 0 ? 220 : -140,
            y: i % 2 === 0 ? 120 : -100,
            scale: 0.55 + (i % 2) * 0.35,
            duration: 1.8,
            ease: "sine.inOut",
          },
          "<"
        );

        // Progress dots
        if (i > 0) {
          tl.to(
            dotsRef.current[i - 1],
            { scale: 1, width: 10, background: "#cbd5e1", duration: 0.3 },
            "<"
          );
        }
        tl.to(
          dotsRef.current[i],
          { scale: 1.4, width: 30, background: accentColors[i], duration: 0.3 },
          "<"
        );

        // Step number fades in
        if (stepNum) {
          tl.fromTo(
            stepNum,
            { opacity: 0, scale: 0.7 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
            "<0.1"
          );
        }

        // Group slides in with 3D — slow motion
        tl.to(
          group,
          {
            xPercent: 0,
            opacity: 1,
            rotationY: 0,
            duration: 2.2,
            ease: "power2.out",
          },
          "<0.1"
        );

        // Items cascade in with spring — slow motion
        tl.to(
          items,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotation: 0,
            stagger: { each: 0.14, from: "start" },
            duration: 1.2,
            ease: "back.out(1.4)",
          },
          "<0.6"
        );

        // Hold — longer pause
        tl.to(group, { duration: 1.4 });

        // ── EXIT ── (except last)
        if (i < groups.length - 1) {
          // Items scatter with parallax — slow motion
          tl.to(items, {
            xPercent: (idx: number) => 50 + (idx % 3) * 30,
            y: (idx: number) => (idx % 2 === 0 ? -60 : 60),
            rotation: (idx: number) => (idx % 2 === 0 ? 15 : -15),
            opacity: 0,
            stagger: 0.08,
            duration: 1.4,
            ease: "power2.in",
          });

          // Step number fades
          if (stepNum) {
            tl.to(
              stepNum,
              { opacity: 0, scale: 1.3, duration: 0.8, ease: "power2.in" },
              "<0.1"
            );
          }

          // Group exits with 3D rotation — slow motion
          tl.to(
            group,
            {
              xPercent: 120,
              rotationY: 15,
              opacity: 0,
              duration: 1,
              ease: "power2.in",
            },
            "<0.2"
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen"
      style={{ background: 'linear-gradient(160deg, #0f0c29 0%, #1a1a3e 40%, #24243e 100%)' }}
    >
      {/* Ambient glow orbs */}
      <div
        ref={orbRef}
        className="absolute w-[550px] h-[550px] max-md:w-[300px] max-md:h-[300px] rounded-full blur-[130px] max-md:blur-[80px] opacity-20 pointer-events-none z-0"
        style={{ top: "25%", left: "5%", willChange: 'transform, background-color' }}
      />
      <div
        ref={orb2Ref}
        className="absolute w-[550px] h-[550px] max-md:w-[300px] max-md:h-[300px] rounded-full blur-[130px] max-md:blur-[80px] opacity-20 pointer-events-none z-0"
        style={{ top: "55%", right: "5%", willChange: 'transform, background-color' }}
      />

      {/* Floating decorative shapes */}
      <div
        className="float-shape absolute w-[18px] h-[18px] border-2 border-[rgba(102,126,234,0.15)] rounded pointer-events-none z-0"
        style={{ top: "12%", left: "6%", willChange: 'transform' }}
      />
      <div
        className="float-shape absolute w-[14px] h-[14px] border-2 border-[rgba(102,126,234,0.15)] rounded-full pointer-events-none z-0"
        style={{ top: "65%", right: "9%", willChange: 'transform' }}
      />
      <div
        className="float-shape absolute w-[18px] h-[18px] border-2 border-[rgba(102,126,234,0.15)] rounded pointer-events-none z-0"
        style={{ bottom: "18%", left: "48%", willChange: 'transform' }}
      />

      {/* Pinned Content */}
      <div className="flex flex-col justify-center items-center min-h-screen py-10 px-4 sm:px-8 relative z-[1]">
        {/* Title Container */}
        <div ref={titleRef} className="text-center mb-10">
          <h2
            className="text-[2.5rem] max-md:text-[1.8rem] font-bold mb-3 bg-clip-text"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #a78bfa 50%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Technologies Utilisées
          </h2>
          <p className="text-[1.1rem] max-md:text-[0.95rem] text-slate-400 max-w-[550px] mx-auto leading-relaxed">
            Un stack moderne et performant pour créer des applications
            exceptionnelles
          </p>
        </div>

        {/* Content Area */}
        <div className="relative w-full max-w-[900px] min-h-[320px] flex items-center justify-center" style={{ perspective: '1200px' }}>
          {categories.map((category, catIndex) => (
            <div
              key={category.label}
              className="category-group absolute w-full"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Step Number */}
              <div
                className="step-num text-[3.5rem] max-md:text-[2.5rem] font-black leading-none mb-2 text-transparent"
                style={{
                  WebkitTextStroke: `1.5px ${category.accentColor}40`,
                  willChange: 'transform, opacity',
                }}
              >
                {String(catIndex + 1).padStart(2, "0")}
                <span
                  className="text-[1.2rem] max-md:text-[0.9rem] font-normal"
                  style={{ WebkitTextStrokeWidth: '1px' }}
                >
                  {" "}/ {String(categories.length).padStart(2, "0")}
                </span>
              </div>

              {/* Category Label */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${category.accentColor}20`,
                    color: category.accentColor,
                  }}
                >
                  <category.icon size={20} />
                </div>
                <span className="text-[1.25rem] font-bold text-slate-200">
                  {category.label}
                </span>
                <span
                  className="text-[0.7rem] font-bold text-white py-[0.2rem] px-[0.6rem] rounded-[10px] shrink-0"
                  style={{ background: category.accentColor }}
                >
                  {category.techs.length}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{
                    background: `linear-gradient(90deg, ${category.accentColor}40 0%, transparent 100%)`,
                  }}
                />
              </div>

              {/* Tech Row */}
              <div className="flex flex-wrap gap-[0.85rem]">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="tech-item flex items-center gap-[0.85rem] backdrop-blur-[12px] rounded-[60px] py-[0.65rem] pr-[1.3rem] pl-[0.65rem] whitespace-nowrap cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[5px] hover:scale-[1.06] hover:bg-white/10 group"
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: `1.5px solid ${tech.color}30`,
                      willChange: 'transform, opacity',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 14px 40px ${tech.color}30`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${tech.color}70`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                      (e.currentTarget as HTMLElement).style.borderColor = `${tech.color}30`;
                    }}
                  >
                    <div
                      className="w-[42px] h-[42px] rounded-full flex items-center justify-center shrink-0 transition-all duration-[350ms] group-hover:rotate-[12deg] group-hover:scale-[1.15]"
                      style={{
                        background: `${tech.color}18`,
                      }}
                    >
                      <tech.icon size={22} color={tech.color} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[0.95rem] font-semibold text-slate-200">
                        {tech.name}
                      </span>
                      {tech.version && (
                        <span
                          className="text-[0.7rem] font-semibold text-white py-[0.15rem] px-2 rounded-xl tracking-[0.3px]"
                          style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
                        >
                          {tech.version}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {categories.map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                dotsRef.current[i] = el;
              }}
              className="w-[10px] h-[10px] rounded-[10px] bg-slate-700"
              style={{ willChange: 'transform, width, background-color' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechUsed;
