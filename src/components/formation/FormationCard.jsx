import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function FormationCard({ icon: Icon, title, text, countdown, index, navigateUrl }) {
  const navigate = useNavigate();
  
  const cardColors = [
    { primary: '#667eea', secondary: '#764ba2', accent: '#ff6b6b' },
    { primary: '#3b82f6', secondary: '#06b6d4', accent: '#4facfe' },
    { primary: '#4facfe', secondary: '#00f2fe', accent: '#43e97b' },
    { primary: '#43e97b', secondary: '#38f9d7', accent: '#667eea' }
  ];

  const colorScheme = cardColors[index % cardColors.length];

  const handleClick = () => {
    if (navigateUrl) {
      navigate(navigateUrl);
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Empêche la propagation vers la carte
    handleClick();
  };

  return (
    <CardWrapper
      whileHover={{ 
        y: -10,
        rotateY: 5,
        scale: 1.02
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      colorScheme={colorScheme}
      onClick={handleClick}
      clickable={!!navigateUrl}
    >
      <CardBackground colorScheme={colorScheme} />
      
      <CardContent>
        <IconWrapper colorScheme={colorScheme}>
          <Icon size={40} />
          <IconGlow colorScheme={colorScheme} />
        </IconWrapper>
        
        <TextContent>
          <CardTitle>
            {title}
            {navigateUrl && <ClickableIndicator>👆 Cliquez pour découvrir</ClickableIndicator>}
          </CardTitle>
          <CardDescription>{text}</CardDescription>
          
          {countdown && (
            <CountdownSection>
              <CountdownLabel>⏰ Prochaine session</CountdownLabel>
              <CountdownTimer>{countdown}</CountdownTimer>
            </CountdownSection>
          )}
        </TextContent>
        
        <CardFooter>
          <EnrollButton colorScheme={colorScheme} onClick={handleButtonClick}>
            <span>S&rsquo;inscrire</span>
            <ArrowIcon>→</ArrowIcon>
          </EnrollButton>
          
          <PriceTag colorScheme={colorScheme}>
            Gratuit
          </PriceTag>
        </CardFooter>
      </CardContent>
      
      <FloatingElements>
        <FloatingDot style={{ top: '20%', left: '10%' }} colorScheme={colorScheme} />
        <FloatingDot style={{ top: '70%', right: '15%' }} colorScheme={colorScheme} />
      </FloatingElements>
    </CardWrapper>
  );
}

FormationCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  countdown: PropTypes.string,
  index: PropTypes.number.isRequired,
  navigateUrl: PropTypes.string
};

const CardWrapper = styled(motion.div)`
  position: relative;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${props => props.clickable ? '0 15px 50px rgba(0, 0, 0, 0.15)' : '0 10px 40px rgba(0, 0, 0, 0.1)'};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.colorScheme.primary}, ${props => props.colorScheme.secondary});
    z-index: 3;
  }
`;

const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    ${props => props.colorScheme.primary}15, 
    ${props => props.colorScheme.secondary}10
  );
  z-index: 1;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 350px;
`;

const IconWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  border-radius: 20px;
  background: linear-gradient(135deg, ${props => props.colorScheme.primary}, ${props => props.colorScheme.secondary});
  color: white;
  box-shadow: 0 8px 25px ${props => props.colorScheme.primary}40;
`;

const IconGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, ${props => props.colorScheme.accent}30, transparent 70%);
  z-index: -1;
`;

const TextContent = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2d3748;
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ClickableIndicator = styled.small`
  font-size: 0.75rem;
  font-weight: 500;
  color: #667eea;
  opacity: 0.8;
  font-style: italic;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #718096;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CountdownSection = styled.div`
  background: linear-gradient(135deg, #667eea15, #764ba215);
  border-radius: 12px;
  padding: 1rem;
  margin-top: 1rem;
  border: 1px solid #667eea30;
`;

const CountdownLabel = styled.div`
  font-size: 0.875rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CountdownTimer = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: #4a5568;
  font-family: 'Courier New', monospace;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const EnrollButton = styled.button`
  background: linear-gradient(135deg, ${props => props.colorScheme.primary}, ${props => props.colorScheme.secondary});
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px ${props => props.colorScheme.primary}40;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${props => props.colorScheme.primary}60;
  }
`;

const ArrowIcon = styled.span`
  transition: transform 0.3s ease;
  
  ${EnrollButton}:hover & {
    transform: translateX(3px);
  }
`;

const PriceTag = styled.div`
  background: ${props => props.colorScheme.accent}20;
  color: ${props => props.colorScheme.accent};
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-weight: 600;
  font-size: 0.875rem;
  border: 1px solid ${props => props.colorScheme.accent}30;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.colorScheme.accent}60;
  animation: float 3s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  &:nth-child(2) {
    animation-delay: 1.5s;
  }
`; 