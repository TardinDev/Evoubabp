import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (path) => {
    if (path === '/') {
      navigate('/');
    } else {
      // Pour les ancres, on scroll vers la section
      scrollToSection(path.replace('#', ''));
    }
  };

  return (
    <motion.div variants={fadeIn("down", "tween", 0.1, 1)}>
      <HeaderWrapper>
        <HeaderContent>
          <LogoSection>
            <Logo onClick={() => navigate('/')}>🎓 Evoubabp Academy</Logo>
            <Tagline>Excellence en Formation Tech</Tagline>
          </LogoSection>
          
          <DesktopNav>
            <NavLink onClick={() => handleNavigation('/')}>Accueil</NavLink>
            <NavLink onClick={() => scrollToSection('formations-grid')}>Nos Formations</NavLink>
            <NavLink onClick={() => scrollToSection('stats-section')}>Statistiques</NavLink>
            <NavLink onClick={() => scrollToSection('faq-section')}>FAQ</NavLink>
            <NavLink onClick={() => scrollToSection('footer-section')}>Contact</NavLink>
          </DesktopNav>

          <MobileMenuButton onClick={toggleMenu} $isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </HeaderContent>

        <MobileNav $isOpen={isMenuOpen}>
          <MobileNavLink onClick={() => handleNavigation('/')}>🏠 Accueil</MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection('formations-grid')}>📚 Nos Formations</MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection('stats-section')}>📊 Statistiques</MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection('faq-section')}>❓ FAQ</MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection('footer-section')}>📞 Contact</MobileNavLink>
        </MobileNav>
        
        <HeroSection>
          <HeroTitle>
            Transformez votre <GradientText>Passion</GradientText> en 
            <GradientText> Expertise</GradientText>
          </HeroTitle>
          <HeroSubtitle>
            Des formations tech de pointe pour développer vos compétences 
            et accélérer votre carrière dans le développement moderne
          </HeroSubtitle>
          <CTAButton onClick={() => scrollToSection('formations-grid')}>
            <span>Découvrir nos formations</span>
            <ArrowIcon>→</ArrowIcon>
          </CTAButton>
        </HeroSection>
      </HeaderWrapper>
    </motion.div>
  );
}

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    opacity: 0.1;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 10;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Logo = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Tagline = styled.span`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  span {
    width: 25px;
    height: 3px;
    background: white;
    transition: all 0.3s ease;
    border-radius: 2px;
    
    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
    }
  }
`;

const MobileNav = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 9;
  padding: 1rem 0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled.button`
  display: block;
  width: 100%;
  padding: 1rem 2rem;
  text-align: left;
  background: none;
  border: none;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }
`;

const HeroSection = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 4rem 2rem 6rem;
  color: white;
`;

const HeroTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(45deg, #ffd700, #ffb347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const ArrowIcon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  
  ${CTAButton}:hover & {
    transform: translateX(5px);
  }
`; 