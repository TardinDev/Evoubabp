import styled, { keyframes } from "styled-components";
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
      <Section id={id || "testimonials"}>
        <Container>
          <motion.div variants={fadeIn("up", "tween", 0.1, 0.8)}>
            <Header>
              <Overline>Témoignages</Overline>
              <Title>
                Ils m&apos;ont fait <GoldText>confiance</GoldText>
              </Title>
              <Description>
                Des collaborations réussies avec des entreprises ambitieuses
              </Description>
            </Header>
          </motion.div>

          <CarouselWrapper>
            <CarouselTrack
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <Slide key={testimonial.id}>
                  <TestimonialCard>
                    <QuoteIcon>
                      <FaQuoteLeft />
                    </QuoteIcon>

                    <Content>
                      <Quote>{testimonial.content}</Quote>

                      <Rating>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </Rating>

                      <ProjectBadge>{testimonial.project}</ProjectBadge>
                    </Content>

                    <Author>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=ffd700&color=000&size=100&bold=true&font-size=0.4`;
                        }}
                      />
                      <AuthorInfo>
                        <AuthorName>{testimonial.name}</AuthorName>
                        <AuthorRole>
                          {testimonial.role} <Separator>•</Separator> {testimonial.company}
                        </AuthorRole>
                      </AuthorInfo>
                    </Author>

                    <CardAccent />
                  </TestimonialCard>
                </Slide>
              ))}
            </CarouselTrack>

            <Pagination>
              {testimonials.map((_, index) => (
                <PaginationDot
                  key={index}
                  active={index === currentIndex}
                  onClick={() => goToSlide(index)}
                >
                  <DotProgress active={index === currentIndex} />
                </PaginationDot>
              ))}
            </Pagination>
          </CarouselWrapper>

          <StatsRow>
            <StatBlock>
              <StatNumber>50+</StatNumber>
              <StatText>Projets livrés</StatText>
            </StatBlock>
            <StatDivider />
            <StatBlock>
              <StatNumber>100%</StatNumber>
              <StatText>Satisfaction</StatText>
            </StatBlock>
            <StatDivider />
            <StatBlock>
              <StatNumber>5.0</StatNumber>
              <StatText>Note moyenne</StatText>
            </StatBlock>
          </StatsRow>
        </Container>
      </Section>
    </motion.div>
  );
};

export default TestimonialsSection;

const progressAnimation = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

const Section = styled.section`
  position: relative;
  padding: 2.5rem 2rem;
  background: #000000;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent);
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Overline = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ffd700;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

const GoldText = styled.span`
  color: #ffd700;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  max-width: 400px;
  margin: 0 auto;
`;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Slide = styled.div`
  min-width: 100%;
  padding: 0 1rem;
`;

const TestimonialCard = styled.div`
  position: relative;
  background: #0a0a0a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CardAccent = styled.div`
  position: absolute;
  bottom: 0;
  left: 2rem;
  right: 2rem;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffd700, transparent);
  opacity: 0.5;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2.5rem;
  color: rgba(255, 215, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
    top: 1.5rem;
    right: 1.5rem;
  }
`;

const Content = styled.div`
  margin-bottom: 1.25rem;
`;

const Quote = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;

  svg {
    color: #ffd700;
    font-size: 0.9rem;
  }
`;

const ProjectBadge = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ffd700;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
`;

const AuthorRole = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
`;

const Separator = styled.span`
  color: rgba(255, 255, 255, 0.3);
  margin: 0 0.25rem;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const PaginationDot = styled.button<{ active: boolean }>`
  width: ${props => props.active ? '40px' : '12px'};
  height: 4px;
  border-radius: 2px;
  border: none;
  background: ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.2)'};
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    background: ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.3)'};
  }
`;

const DotProgress = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #ffd700;
  animation: ${props => props.active ? progressAnimation : 'none'} 5s linear forwards;
  width: ${props => props.active ? '0%' : '0%'};
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 640px) {
    gap: 1.5rem;
  }
`;

const StatBlock = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 0.25rem;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const StatText = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
`;

const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
`;
