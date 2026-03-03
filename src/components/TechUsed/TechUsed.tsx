import styled from "styled-components";
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

      // Pinned timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${groups.length * window.innerHeight}`,
          pin: true,
          scrub: 0.8,
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
            duration: 1,
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
            duration: 1,
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

        // Group slides in with 3D
        tl.to(
          group,
          {
            xPercent: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "<0.1"
        );

        // Items cascade in with spring
        tl.to(
          items,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotation: 0,
            stagger: { each: 0.06, from: "start" },
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "<0.5"
        );

        // Hold
        tl.to(group, { duration: 0.6 });

        // ── EXIT ── (except last)
        if (i < groups.length - 1) {
          // Items scatter with parallax
          tl.to(items, {
            xPercent: (idx: number) => 50 + (idx % 3) * 30,
            y: (idx: number) => (idx % 2 === 0 ? -60 : 60),
            rotation: (idx: number) => (idx % 2 === 0 ? 15 : -15),
            opacity: 0,
            stagger: 0.03,
            duration: 0.7,
            ease: "power3.in",
          });

          // Step number fades
          if (stepNum) {
            tl.to(
              stepNum,
              { opacity: 0, scale: 1.3, duration: 0.4, ease: "power2.in" },
              "<0.1"
            );
          }

          // Group exits with 3D rotation
          tl.to(
            group,
            {
              xPercent: 120,
              rotationY: 15,
              opacity: 0,
              duration: 0.5,
              ease: "power2.in",
            },
            "<0.15"
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef}>
      {/* Ambient glow orbs */}
      <BackgroundOrb ref={orbRef} style={{ top: "25%", left: "5%" }} />
      <BackgroundOrb ref={orb2Ref} style={{ top: "55%", right: "5%" }} />

      {/* Floating decorative shapes */}
      <FloatingShape className="float-shape" style={{ top: "12%", left: "6%" }} />
      <FloatingShape
        className="float-shape"
        $variant="circle"
        style={{ top: "65%", right: "9%" }}
      />
      <FloatingShape className="float-shape" style={{ bottom: "18%", left: "48%" }} />

      <PinnedContent>
        <TitleContainer ref={titleRef}>
          <Title>Technologies Utilisées</Title>
          <Subtitle>
            Un stack moderne et performant pour créer des applications
            exceptionnelles
          </Subtitle>
        </TitleContainer>

        <ContentArea>
          {categories.map((category, catIndex) => (
            <CategoryGroup key={category.label} className="category-group">
              <StepNumber className="step-num" accentColor={category.accentColor}>
                {String(catIndex + 1).padStart(2, "0")}
                <StepTotal> / {String(categories.length).padStart(2, "0")}</StepTotal>
              </StepNumber>

              <CategoryLabel accentColor={category.accentColor}>
                <CategoryIconWrapper accentColor={category.accentColor}>
                  <category.icon size={20} />
                </CategoryIconWrapper>
                <CategoryLabelText>{category.label}</CategoryLabelText>
                <CategoryCount accentColor={category.accentColor}>
                  {category.techs.length}
                </CategoryCount>
                <CategoryLine accentColor={category.accentColor} />
              </CategoryLabel>

              <TechRow>
                {category.techs.map((tech) => (
                  <TechItem
                    key={tech.name}
                    className="tech-item"
                    color={tech.color}
                  >
                    <IconWrapper color={tech.color}>
                      <tech.icon size={22} color={tech.color} />
                    </IconWrapper>
                    <TechInfo>
                      <TechName>{tech.name}</TechName>
                      {tech.version && (
                        <TechVersion>{tech.version}</TechVersion>
                      )}
                    </TechInfo>
                  </TechItem>
                ))}
              </TechRow>
            </CategoryGroup>
          ))}
        </ContentArea>

        <ProgressBar>
          {categories.map((_, i) => (
            <ProgressDot
              key={i}
              ref={(el) => {
                dotsRef.current[i] = el;
              }}
            />
          ))}
        </ProgressBar>
      </PinnedContent>
    </Section>
  );
};

/* ── Styled Components ── */

const Section = styled.section`
  background: linear-gradient(160deg, #0f0c29 0%, #1a1a3e 40%, #24243e 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;

const BackgroundOrb = styled.div`
  position: absolute;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  filter: blur(130px);
  opacity: 0.2;
  pointer-events: none;
  will-change: transform, background-color;
  z-index: 0;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    filter: blur(80px);
  }
`;

const FloatingShape = styled.div<{ $variant?: string }>`
  position: absolute;
  width: ${(p) => (p.$variant === "circle" ? "14px" : "18px")};
  height: ${(p) => (p.$variant === "circle" ? "14px" : "18px")};
  border: 2px solid rgba(102, 126, 234, 0.15);
  border-radius: ${(p) => (p.$variant === "circle" ? "50%" : "4px")};
  pointer-events: none;
  will-change: transform;
  z-index: 0;
`;

const PinnedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2.5rem 2rem;
  position: relative;
  z-index: 1;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #667eea 0%, #a78bfa 50%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #94a3b8;
  max-width: 550px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ContentArea = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
`;

const CategoryGroup = styled.div`
  position: absolute;
  width: 100%;
  will-change: transform, opacity;
`;

const StepNumber = styled.div<{ accentColor: string }>`
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 0.5rem;
  color: transparent;
  -webkit-text-stroke: 1.5px ${(p) => `${p.accentColor}40`};
  will-change: transform, opacity;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StepTotal = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  -webkit-text-stroke-width: 1px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CategoryLabel = styled.div<{ accentColor: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const CategoryIconWrapper = styled.div<{ accentColor: string }>`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${(p) => `${p.accentColor}20`};
  color: ${(p) => p.accentColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CategoryLabelText = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #e2e8f0;
`;

const CategoryCount = styled.span<{ accentColor: string }>`
  font-size: 0.7rem;
  font-weight: 700;
  color: white;
  background: ${(p) => p.accentColor};
  padding: 0.2rem 0.6rem;
  border-radius: 10px;
  flex-shrink: 0;
`;

const CategoryLine = styled.div<{ accentColor: string }>`
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    ${(p) => `${p.accentColor}40`} 0%,
    transparent 100%
  );
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
`;

const TechItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border: 1.5px solid ${(p) => `${p.color}30`};
  border-radius: 60px;
  padding: 0.65rem 1.3rem 0.65rem 0.65rem;
  white-space: nowrap;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  cursor: default;
  will-change: transform, opacity;

  &:hover {
    transform: translateY(-5px) scale(1.06);
    box-shadow: 0 14px 40px ${(p) => `${p.color}30`};
    border-color: ${(p) => `${p.color}70`};
    background: rgba(255, 255, 255, 0.1);
  }
`;

const IconWrapper = styled.div<{ color: string }>`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${(p) => `${p.color}18`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.35s ease;

  ${TechItem}:hover & {
    transform: rotate(12deg) scale(1.15);
    background: ${(p) => `${p.color}30`};
    box-shadow: 0 0 20px ${(p) => `${p.color}40`};
  }
`;

const TechInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TechName = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #e2e8f0;
`;

const TechVersion = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 0.15rem 0.5rem;
  border-radius: 12px;
  letter-spacing: 0.3px;
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 2.5rem;
`;

const ProgressDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #334155;
  will-change: transform, width, background-color;
`;

export default TechUsed;
