import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { fadeIn } from "../../utils/motion";

const stats = [
  { number: 56, label: "Étudiants formés", suffix: "+", icon: "👥" },
  { number: 96, label: "Taux de satisfaction", suffix: "%", icon: "⭐" },
  { number: 4, label: "Formations disponibles", suffix: "", icon: "📚" },
  { number: 850, label: "Heures de contenu", suffix: "h", icon: "⏱️" }
];

function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

Counter.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  suffix: PropTypes.string
};

export default function StatsSection() {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.3, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <StatsContainer id="stats-section">
        <SectionTitle>
          🌟 <GradientText>Nos Résultats</GradientText> Parlent d&rsquo;Eux-Mêmes
        </SectionTitle>
        
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              as={motion.div}
              whileHover={{ 
                y: -8,
                scale: 1.05 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <StatNumber>
                <Counter end={stat.number} suffix={stat.suffix} />
              </StatNumber>
              <StatLabel>{stat.label}</StatLabel>
              <StatGlow />
            </StatCard>
          ))}
        </StatsGrid>
        
        <TestimonialSection>
          <TestimonialQuote>
            &ldquo;Grâce à Evoubabp Academy, j&rsquo;ai pu transformer ma passion en carrière. 
            Les formations sont exceptionnelles et le suivi personnalisé fait toute la différence !&rdquo;
          </TestimonialQuote>
          <TestimonialAuthor>
            <AuthorAvatar>👨‍💻</AuthorAvatar>
            <AuthorInfo>
              <AuthorName>Alexandre Martin</AuthorName>
              <AuthorTitle>Développeur Full-Stack chez TechCorp</AuthorTitle>
            </AuthorInfo>
          </TestimonialAuthor>
        </TestimonialSection>
      </StatsContainer>
    </motion.div>
  );
}

const StatsContainer = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 1;
  }
`;

const SectionTitle = styled.h2`
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 4rem;
  color: #2d3748;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatsGrid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
`;

const StatCard = styled.div`
  position: relative;
  background: white;
  border-radius: 20px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  cursor: pointer;
  overflow: hidden;
`;

const StatGlow = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
  
  ${StatCard}:hover & {
    opacity: 1;
  }
`;

const StatIcon = styled.div`
  position: relative;
  z-index: 2;
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
`;

const StatNumber = styled.div`
  position: relative;
  z-index: 2;
  font-size: 3.5rem;
  font-weight: 900;
  color: #667eea;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
`;

const StatLabel = styled.div`
  position: relative;
  z-index: 2;
  font-size: 1.1rem;
  color: #718096;
  font-weight: 600;
`;

const TestimonialSection = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
`;

const TestimonialQuote = styled.blockquote`
  font-size: 1.5rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 2rem;
  font-style: italic;
  text-align: center;
  position: relative;
  
  &::before, &::after {
    content: '"';
    font-size: 4rem;
    color: #667eea;
    position: absolute;
    opacity: 0.3;
  }
  
  &::before {
    top: -1rem;
    left: -1rem;
  }
  
  &::after {
    bottom: -3rem;
    right: -1rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.25rem;
`;

const AuthorTitle = styled.div`
  font-size: 1rem;
  color: #718096;
  font-weight: 500;
`; 