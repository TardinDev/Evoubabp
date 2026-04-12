'use client'

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useEffect, useState, useCallback } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jean-Pierre Moussavou",
    role: "CEO",
    company: "Germe Invest",
    avatar: "/images/avatars/avatar1.jpg",
    content: "Davy a transformé notre vision en une plateforme d'investissement moderne et intuitive. Son expertise technique et sa compréhension des besoins métier ont été remarquables.",
    rating: 5,
    project: "Plateforme Germe Invest"
  },
  {
    id: 2,
    name: "Marie-Claire Ndong",
    role: "Directrice Marketing",
    company: "Manioc Gabon",
    avatar: "/images/avatars/avatar2.jpg",
    content: "Une collaboration exceptionnelle ! Davy a su créer une marketplace e-commerce qui reflète parfaitement notre identité. Les ventes ont augmenté de 150% depuis le lancement.",
    rating: 5,
    project: "E-commerce Manioc Gabon"
  },
  {
    id: 3,
    name: "Thomas Dubois",
    role: "CTO",
    company: "Sport Challenge",
    avatar: "/images/avatars/avatar3.jpg",
    content: "L'application mobile développée par Davy dépasse nos attentes. L'interface utilisateur est fluide, les performances sont excellentes. Un travail remarquable.",
    rating: 5,
    project: "App Mobile Sport Challenge"
  },
  {
    id: 4,
    name: "Sophie Lemaire",
    role: "Fondatrice",
    company: "DreamQuest",
    avatar: "/images/avatars/avatar4.jpg",
    content: "Davy a intégré l'IA de manière innovante dans notre projet. La visualisation 3D des rêves avec Three.js est bluffante. Un développeur créatif qui repousse les limites.",
    rating: 5,
    project: "DreamQuest - IA & 3D"
  },
  {
    id: 5,
    name: "Alexandre Martin",
    role: "Product Manager",
    company: "Binome Pay",
    avatar: "/images/avatars/avatar5.jpg",
    content: "Solution blockchain impeccable. Davy maîtrise parfaitement les technologies Web3 et a su créer une expérience utilisateur fluide pour notre app de paiement P2P.",
    rating: 5,
    project: "Binome Pay - Web3"
  },
];

interface TestimonialsSectionProps {
  id?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <style>{`
        @keyframes testimonial-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <section
        id={id || "testimonials"}
        className="relative py-8 px-4 bg-black overflow-hidden md:py-10 md:px-8 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px"
        style={{
          // @ts-ignore
          '--tw-before-bg': 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent)',
        }}
      >
        {/* Pseudo-element workaround: top border line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent)',
          }}
        />

        <div className="max-w-[1000px] mx-auto">
          <motion.div variants={fadeIn("up", "tween", 0.1, 0.8)}>
            <div className="text-center mb-6">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#ffd700] mb-4">
                Témoignages
              </span>
              <h2
                className="font-bold text-white mb-4 tracking-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Ils m&apos;ont fait <span className="text-[#ffd700]">confiance</span>
              </h2>
              <p className="text-[1.1rem] text-white/50 max-w-[400px] mx-auto">
                Des collaborations réussies avec des entreprises ambitieuses
              </p>
            </div>
          </motion.div>

          {/* CarouselWrapper */}
          <div className="relative overflow-hidden mb-6">
            {/* CarouselTrack */}
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  {/* TestimonialCard */}
                  <div
                    className="relative bg-[#0a0a0a] rounded-2xl p-5 sm:p-6 md:p-8 max-w-[800px] mx-auto"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {/* QuoteIcon */}
                    <div className="absolute top-8 right-8 text-[2.5rem] md:text-[2rem] md:top-6 md:right-6" style={{ color: 'rgba(255, 215, 0, 0.1)' }}>
                      <FaQuoteLeft />
                    </div>

                    {/* Content */}
                    <div className="mb-5">
                      <p className="text-xl md:text-[1.1rem] font-normal text-white/90 leading-loose mb-6">
                        {testimonial.content}
                      </p>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4 [&_svg]:text-[#ffd700] [&_svg]:text-[0.9rem]">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>

                      {/* ProjectBadge */}
                      <span
                        className="inline-block text-[0.8rem] font-medium text-white/40 px-4 py-2 rounded-full"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        {testimonial.project}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 md:w-12 md:h-12 rounded-full object-cover border-2 border-[#ffd700]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=ffd700&color=000&size=100&bold=true&font-size=0.4`;
                        }}
                      />
                      <div>
                        <h4 className="text-[1.1rem] font-semibold text-white mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-[0.9rem] text-white/50">
                          {testimonial.role}{' '}
                          <span className="text-white/30 mx-1">&#8226;</span>{' '}
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* CardAccent */}
                    <div
                      className="absolute bottom-0 left-8 right-8 h-[2px] opacity-50"
                      style={{
                        background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-3 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="h-1 rounded-sm border-none cursor-pointer transition-all duration-300 overflow-hidden relative"
                  style={{
                    width: index === currentIndex ? '40px' : '12px',
                    background: index === currentIndex ? 'transparent' : 'rgba(255, 255, 255, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    if (index !== currentIndex) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentIndex) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    }
                  }}
                >
                  <div
                    className="absolute top-0 left-0 h-full bg-[#ffd700]"
                    style={{
                      animation: index === currentIndex ? 'testimonial-progress 5s linear forwards' : 'none',
                      width: index === currentIndex ? '0%' : '0%',
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* StatsRow */}
          <div
            className="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 py-8"
            style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-[2rem] font-bold text-[#ffd700] mb-1">
                50+
              </div>
              <div className="text-[0.85rem] text-white/40 font-medium">
                Projets livrés
              </div>
            </div>
            <div className="w-px h-10" style={{ background: 'rgba(255, 255, 255, 0.1)' }} />
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-[2rem] font-bold text-[#ffd700] mb-1">
                100%
              </div>
              <div className="text-[0.85rem] text-white/40 font-medium">
                Satisfaction
              </div>
            </div>
            <div className="w-px h-10" style={{ background: 'rgba(255, 255, 255, 0.1)' }} />
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-[2rem] font-bold text-[#ffd700] mb-1">
                5.0
              </div>
              <div className="text-[0.85rem] text-white/40 font-medium">
                Note moyenne
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TestimonialsSection;
