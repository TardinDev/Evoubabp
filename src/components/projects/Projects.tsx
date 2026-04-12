'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { MdPhoneIphone, MdSchool } from 'react-icons/md'
import { FaBrain } from 'react-icons/fa'
import dynamic from 'next/dynamic'
import type { IconType } from 'react-icons'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

import webDevelopmentAnimation from '../../shared/assets/animations/webDevelopment.json'
import saasAnimation from '../../shared/assets/animations/saas.json'
import mobileAnimation from '../../shared/assets/animations/mobile.json'
import learningAnimation from '../../shared/assets/animations/learning.json'

gsap.registerPlugin(ScrollTrigger)

interface ProjectsProps {
  id?: string
}

interface ServiceData {
  key: string
  title: string
  description: string
  Icon: IconType
  vercelLink?: string
  color: string
  animationData: object
  gradientFrom: string
  gradientTo: string
}

const services: ServiceData[] = [
  {
    key: 'web',
    title: 'Développement Web/SAAS',
    description:
      "Nous créons des applications web et SAAS de toute complexité, sans limites d'intégration ni d'évolutivité, en gérant efficacement et rapidement les entrées, les sorties, les bases de données et de multiples composants externes.",
    Icon: HiOutlineDesktopComputer,
    vercelLink: 'voir les projets sur Vercel',
    color: '#286F6C',
    animationData: webDevelopmentAnimation,
    gradientFrom: 'rgba(40, 111, 108, 0.12)',
    gradientTo: 'rgba(40, 111, 108, 0.04)',
  },
  {
    key: 'saas',
    title: 'Intelligence Artificielle',
    description:
      "Nos solutions IA sont conçues pour automatiser vos processus, analyser vos données et fournir des insights prédictifs pour transformer votre entreprise grâce à l'intelligence artificielle.",
    Icon: FaBrain,
    color: '#EEC048',
    animationData: saasAnimation,
    gradientFrom: 'rgba(238, 192, 72, 0.12)',
    gradientTo: 'rgba(238, 192, 72, 0.04)',
  },
  {
    key: 'mobile',
    title: 'Développement Mobile',
    description:
      'Nous créons des applications mobiles haute performance avec React Native, optimisées pour les plateformes Android et iOS.',
    Icon: MdPhoneIphone,
    color: '#F26440',
    animationData: mobileAnimation,
    gradientFrom: 'rgba(242, 100, 64, 0.12)',
    gradientTo: 'rgba(242, 100, 64, 0.04)',
  },
  {
    key: 'learning',
    title: 'Apprentissage React',
    description:
      "Notre programme d'apprentissage React propose des projets pratiques et des conseils d'experts pour vous aider à maîtriser les concepts fondamentaux et avancés du développement avec React.",
    Icon: MdSchool,
    color: '#4A90E2',
    animationData: learningAnimation,
    gradientFrom: 'rgba(74, 144, 226, 0.12)',
    gradientTo: 'rgba(74, 144, 226, 0.04)',
  },
]

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)
  const orb3Ref = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const detailRefs = useRef<(HTMLDivElement | null)[]>([])
  const lottieContainerRefs = useRef<(HTMLDivElement | null)[]>([])
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const bgLayerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true })

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLElement[]
      const details = detailRefs.current.filter(Boolean) as HTMLElement[]
      const dots = dotRefs.current.filter(Boolean) as HTMLElement[]
      const bgLayers = bgLayerRefs.current.filter(Boolean) as HTMLElement[]
      const lottieContainers = lottieContainerRefs.current.filter(Boolean) as HTMLElement[]
      const numServices = services.length

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // ============================
      // INITIAL STATES
      // ============================
      details.forEach((detail, i) => {
        gsap.set(detail, {
          opacity: i === 0 ? 1 : 0,
          yPercent: i === 0 ? 0 : 20,
          visibility: i === 0 ? 'visible' : 'hidden',
        })
      })

      lottieContainers.forEach((container, i) => {
        gsap.set(container, {
          scale: i === 0 ? 1 : 0.8,
          opacity: i === 0 ? 1 : 0,
        })
      })

      cards.forEach((card, i) => {
        gsap.set(card, {
          scale: i === 0 ? 1.03 : 0.97,
          opacity: i === 0 ? 1 : 0.45,
          borderLeftWidth: '4px',
          borderLeftStyle: 'solid',
          borderLeftColor: i === 0 ? services[i].color : 'transparent',
          boxShadow: i === 0 ? `0 4px 24px ${services[i].color}25` : 'none',
          background: i === 0
            ? 'linear-gradient(135deg, #d4e4fa, #e8effa)'
            : 'linear-gradient(135deg, #e4ecf5, #f5f7fa)',
        })
      })

      bgLayers.forEach((layer, i) => {
        gsap.set(layer, { opacity: i === 0 ? 1 : 0 })
      })

      dots.forEach((dot, i) => {
        gsap.set(dot, {
          scale: i === 0 ? 1.4 : 1,
          width: i === 0 ? 28 : 10,
          backgroundColor: i === 0 ? services[0].color : '#cbd5e1',
        })
      })

      gsap.set(orb1Ref.current, { backgroundColor: services[0].color })
      gsap.set(orb2Ref.current, { backgroundColor: services[0].color })
      gsap.set(orb3Ref.current, { backgroundColor: services[0].color })

      // ============================
      // TITLE ENTRANCE
      // ============================
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // ============================
      // PARALLAX ORBS
      // ============================
      if (!prefersReducedMotion) {
        const orbRefs = [orb1Ref, orb2Ref, orb3Ref]
        const orbMovements = [
          { y: -70, x: 40 },
          { y: 50, x: -30 },
          { y: -40, x: -50 },
        ]
        orbRefs.forEach((ref, i) => {
          gsap.to(ref.current, {
            y: orbMovements[i].y,
            x: orbMovements[i].x,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5 + i * 0.5,
            },
          })
        })

        const shapes = gsap.utils.toArray<HTMLElement>('.projects-float-shape')
        shapes.forEach((shape, i) => {
          gsap.to(shape, {
            y: i % 2 === 0 ? -50 : 40,
            rotation: i % 2 === 0 ? 90 : -90,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5 + i * 0.5,
            },
          })
        })
      }

      // ============================
      // MAIN PINNED TIMELINE
      // ============================
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${numServices * window.innerHeight}`,
          pin: true,
          scrub: prefersReducedMotion ? 0 : 1.5,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (numServices - 1),
            duration: { min: 0.2, max: 0.5 },
            delay: 0,
            ease: 'power1.inOut',
          },
        },
      })

      for (let i = 0; i < numServices - 1; i++) {
        const fromIdx = i
        const toIdx = i + 1
        const label = `step${i}`

        // Card deactivation
        tl.to(cards[fromIdx], {
          scale: 0.97,
          opacity: 0.45,
          borderLeftColor: 'transparent',
          boxShadow: 'none',
          background: 'linear-gradient(135deg, #e4ecf5, #f5f7fa)',
          duration: 1,
          ease: 'power2.inOut',
        }, label)

        // Card activation
        tl.to(cards[toIdx], {
          scale: 1.03,
          opacity: 1,
          borderLeftColor: services[toIdx].color,
          boxShadow: `0 4px 24px ${services[toIdx].color}25`,
          background: 'linear-gradient(135deg, #d4e4fa, #e8effa)',
          duration: 1,
          ease: 'power2.inOut',
        }, label)

        // Detail panel: old exits
        tl.to(details[fromIdx], {
          opacity: 0,
          yPercent: -20,
          duration: 0.6,
          ease: 'power2.in',
          onComplete: () => {
            gsap.set(details[fromIdx], { visibility: 'hidden' })
          },
        }, label)

        // Detail panel: new enters
        tl.fromTo(details[toIdx],
          { opacity: 0, yPercent: 20, visibility: 'visible' },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          `${label}+=0.3`
        )

        // Lottie slide transition: old exits UP, new enters from BOTTOM
        tl.to(lottieContainers[fromIdx], {
          yPercent: -60,
          opacity: 0,
          scale: 0.85,
          duration: 0.5,
          ease: 'power2.in',
        }, label)

        tl.fromTo(lottieContainers[toIdx],
          { yPercent: 60, opacity: 0, scale: 0.85 },
          { yPercent: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' },
          `${label}+=0.3`
        )

        // Background gradient crossfade
        tl.to(bgLayers[fromIdx], {
          opacity: 0,
          duration: 1,
          ease: 'power1.inOut',
        }, label)
        tl.to(bgLayers[toIdx], {
          opacity: 1,
          duration: 1,
          ease: 'power1.inOut',
        }, label)

        // Orb color shifts
        tl.to(orb1Ref.current, {
          backgroundColor: services[toIdx].color,
          x: toIdx % 2 === 0 ? -50 : 70,
          y: toIdx % 2 === 0 ? -30 : 40,
          scale: 0.9 + (toIdx % 3) * 0.1,
          duration: 1,
          ease: 'sine.inOut',
        }, label)
        tl.to(orb2Ref.current, {
          backgroundColor: services[toIdx].color,
          x: toIdx % 2 === 0 ? 80 : -60,
          y: toIdx % 2 === 0 ? 50 : -40,
          scale: 0.7 + (toIdx % 2) * 0.3,
          duration: 1,
          ease: 'sine.inOut',
        }, label)
        tl.to(orb3Ref.current, {
          backgroundColor: services[toIdx].color,
          duration: 1,
          ease: 'sine.inOut',
        }, label)

        // Progress dots
        tl.to(dots[fromIdx], {
          scale: 1,
          width: 10,
          backgroundColor: '#cbd5e1',
          duration: 0.3,
        }, label)
        tl.to(dots[toIdx], {
          scale: 1.4,
          width: 28,
          backgroundColor: services[toIdx].color,
          duration: 0.3,
        }, label)

        // Hold pause
        tl.to({}, { duration: 0.4 })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative overflow-hidden min-h-screen"
      aria-label="Services proposés"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 z-0">
        {services.map((service, i) => (
          <div
            key={service.key}
            ref={(el) => { bgLayerRefs.current[i] = el }}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${service.gradientFrom}, #f5f7fa 50%, ${service.gradientTo})`,
              willChange: 'opacity',
            }}
          />
        ))}
      </div>

      {/* Ambient glow orbs */}
      <div
        ref={orb1Ref}
        className="absolute w-[450px] h-[450px] max-md:w-[250px] max-md:h-[250px] rounded-full blur-[120px] max-md:blur-[70px] opacity-15 pointer-events-none z-0"
        style={{ top: '15%', left: '5%', willChange: 'transform, background-color' }}
      />
      <div
        ref={orb2Ref}
        className="absolute w-[400px] h-[400px] max-md:w-[220px] max-md:h-[220px] rounded-full blur-[110px] max-md:blur-[65px] opacity-15 pointer-events-none z-0"
        style={{ top: '55%', right: '5%', willChange: 'transform, background-color' }}
      />
      <div
        ref={orb3Ref}
        className="absolute w-[300px] h-[300px] max-md:w-[180px] max-md:h-[180px] rounded-full blur-[100px] max-md:blur-[60px] opacity-10 pointer-events-none z-0"
        style={{ bottom: '10%', left: '40%', willChange: 'transform, background-color' }}
      />

      {/* Floating decorative shapes */}
      <div
        className="projects-float-shape absolute w-[16px] h-[16px] border-2 border-[rgba(40,111,108,0.15)] rounded pointer-events-none z-0"
        style={{ top: '10%', left: '8%', willChange: 'transform' }}
      />
      <div
        className="projects-float-shape absolute w-[12px] h-[12px] border-2 border-[rgba(238,192,72,0.15)] rounded-full pointer-events-none z-0"
        style={{ top: '60%', right: '10%', willChange: 'transform' }}
      />
      <div
        className="projects-float-shape absolute w-[14px] h-[14px] border-2 border-[rgba(74,144,226,0.15)] rounded pointer-events-none z-0"
        style={{ bottom: '20%', left: '50%', willChange: 'transform' }}
      />

      {/* Pinned Content */}
      <div className="flex flex-col justify-center items-center min-h-screen py-10 px-4 sm:px-8 relative z-[1]">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-10">
          <h2 className="text-xl sm:text-[2.2rem] font-bold text-[#3a3b3c] mb-2">
            Services Proposés
          </h2>
          <p className="text-[1.05rem] text-[#6c757d] max-w-[500px] mx-auto">
            Donner vie à vos idées dans vos délais et votre budget.
          </p>
        </div>

        {/* Split-screen container */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1200px] items-center md:items-start">
          {/* LEFT: Service cards */}
          <div className="flex-[2] flex flex-col gap-3 md:gap-4 w-full max-w-full md:max-w-[600px]">
            {services.map((service, i) => (
              <div
                key={service.key}
                ref={(el) => { cardRefs.current[i] = el }}
                className="flex items-center gap-4 rounded-xl p-4 sm:p-5 cursor-pointer"
                style={{ willChange: 'transform, opacity, box-shadow, border-color' }}
              >
                <span className="text-[1.75rem] shrink-0" style={{ color: service.color }}>
                  <service.Icon />
                </span>
                <span className="text-[1.05rem] font-medium text-[#3a3b3c]">
                  {service.title}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT: Detail panels (stacked absolutely) */}
          <div className="flex-[1.5] relative w-full min-h-[420px] md:min-h-[400px]">
            {services.map((service, i) => (
              <div
                key={service.key}
                ref={(el) => { detailRefs.current[i] = el }}
                className="absolute inset-0 flex flex-col bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
                style={{
                  boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.08)',
                  willChange: 'transform, opacity',
                }}
              >
                <h3 className="text-[1.3rem] text-[#3a3b3c] mb-4 font-semibold">
                  {service.title}
                </h3>
                <p className="text-base text-[#6c757d] mb-4 leading-relaxed">
                  {service.description}{' '}
                  {service.vercelLink && (
                    <a
                      href="https://vercel.com/tardindevs-projects"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline"
                    >
                      <span className="text-[#4b0082] font-bold cursor-pointer">
                        {service.vercelLink}
                      </span>
                    </a>
                  )}
                </p>
                <div
                  ref={(el) => { lottieContainerRefs.current[i] = el }}
                  className="flex-1 flex items-center justify-center"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <Lottie
                    animationData={service.animationData}
                    loop
                    autoplay
                    style={{ width: '100%', maxHeight: '260px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {services.map((service, i) => (
            <div
              key={service.key}
              ref={(el) => { dotRefs.current[i] = el }}
              className="w-[10px] h-[10px] rounded-full bg-gray-300"
              style={{ willChange: 'transform, width, background-color' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
