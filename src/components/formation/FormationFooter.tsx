import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function FormationFooter() {
  return (
    <motion.div variants={fadeIn("up", "tween", 0.5, 1)}>
      <FooterWrapper id="footer-section">
        <FooterContent>
          <ContactSection>
            <SectionTitle>📞 Contactez-nous</SectionTitle>
            <ContactInfo>
              <ContactItem>
                <Icon>📧</Icon>
                <span>tardindavy@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <Icon>📱</Icon>
                <ContactLink href="https://wa.me/33766450771" target="_blank" rel="noopener noreferrer">
                  +33 7 66 45 07 71 (WhatsApp)
                </ContactLink>
              </ContactItem>
              <ContactItem>
                <Icon>📍</Icon>
                <span>Paris, France</span>
              </ContactItem>
            </ContactInfo>
          </ContactSection>
          
          <LinksSection>
            <SectionTitle>🔗 Liens Utiles</SectionTitle>
            <LinksList>
              <FooterLink href="/">Accueil</FooterLink>
              <FooterLink href="/#projects">Nos Projets</FooterLink>
              <FooterLink href="/#footer-section">Contact</FooterLink>
              <FooterLink href="https://www.linkedin.com/in/davy-tardin-11a7a1159/" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
            </LinksList>
          </LinksSection>
          
          <SocialSection>
            <SectionTitle>🌐 Suivez-nous</SectionTitle>
            <SocialLinks>
              <SocialLink href="https://www.linkedin.com/in/davy-tardin-11a7a1159/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" $platform="linkedin">
                <SocialIcon as={FaLinkedin} />
              </SocialLink>
              <SocialLink href="https://github.com/TardinDev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" $platform="github">
                <SocialIcon as={FaGithub} />
              </SocialLink>
            </SocialLinks>
          </SocialSection>
        </FooterContent>
        
        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Evoubabp Academy. Tous droits réservés.
          </Copyright>
          <LegalLinks>
            <LegalLink href="/politique-confidentialite">Politique de confidentialité</LegalLink>
            <LegalLink href="/cgu">Conditions d&rsquo;utilisation</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </FooterWrapper>
    </motion.div>
  );
}

const FooterWrapper = styled.footer`
  background: #000000;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20zm20 0c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 1;
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffd700;
`;

const ContactSection = styled.div``;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const Icon = styled.span`
  font-size: 1.25rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`;

const ContactLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

const LinksSection = styled.div``;

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffd700;
    transform: translateX(5px);
  }
`;

const SocialSection = styled.div``;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a<{ $platform?: 'youtube' | 'facebook' | 'linkedin' | 'github' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;

  &:hover {
    transform: translateY(-3px) scale(1.1);

    ${props => props.$platform === 'youtube' && `
      background: #FF0000;
      box-shadow: 0 8px 25px rgba(255, 0, 0, 0.4);
      color: white;
    `}

    ${props => props.$platform === 'facebook' && `
      background: #1877F2;
      box-shadow: 0 8px 25px rgba(24, 119, 242, 0.4);
      color: white;
    `}

    ${props => props.$platform === 'linkedin' && `
      background: #0A66C2;
      box-shadow: 0 8px 25px rgba(10, 102, 194, 0.4);
      color: white;
    `}

    ${props => props.$platform === 'github' && `
      background: #333333;
      box-shadow: 0 8px 25px rgba(51, 51, 51, 0.4);
      color: white;
    `}
  }
`;

const SocialIcon = styled.span`
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`;

const FooterBottom = styled.div`
  position: relative;
  z-index: 2;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const LegalLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffd700;
  }
`; 