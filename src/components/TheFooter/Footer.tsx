import styled from "styled-components";
import { useChatBot } from "../../contexts/ChatBotContext";
import { FaComments } from "react-icons/fa";

export default function Footer() {
  const { openChatBot } = useChatBot();

  return (
    <FooterStyle>
      <FooterContainer>
        <TopSection>
          <BrandSection>
            <BrandLogo>
              <LogoIcon>🚀</LogoIcon>
              <BrandName>Evoubap</BrandName>
            </BrandLogo>
            <BrandDescription>
              Créateur d&apos;applications mobiles et web innovantes.
              Transformons vos idées en solutions digitales exceptionnelles.
            </BrandDescription>
            <SocialLinks>
              <SocialLink href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </SocialLink>
            </SocialLinks>
          </BrandSection>

          <LinksSection>
            <FooterColumn>
              <FooterTitle>Services</FooterTitle>
              <FooterLink href="#projects">Applications Mobile</FooterLink>
              <FooterLink href="#projects">Applications Web</FooterLink>
              <FooterLink href="#howItWorks">Développement SaaS</FooterLink>
              <FooterLink href="#">Formations</FooterLink>
              <FooterLink href="#">Consulting</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Technologies</FooterTitle>
              <FooterLink href="#">React Native</FooterLink>
              <FooterLink href="#">React / Next.js</FooterLink>
              <FooterLink href="#">TypeScript</FooterLink>
              <FooterLink href="#">Node.js</FooterLink>
              <FooterLink href="#">Expo</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Contact</FooterTitle>
              <ContactInfo>
                <ContactItem>
                  <ContactIcon>📧</ContactIcon>
                  <ContactLink href="mailto:tardindavy@gmail.com">
                    tardindavy@gmail.com
                  </ContactLink>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>📱</ContactIcon>
                  <span>+33 (0)7 XX XX XX XX</span>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>🌍</ContactIcon>
                  <span>France, Europe</span>
                </ContactItem>
                <ChatButton onClick={openChatBot}>
                  <FaComments size={18} />
                  <span>Discuter avec moi</span>
                </ChatButton>
              </ContactInfo>
            </FooterColumn>
          </LinksSection>
        </TopSection>

        <Divider />

        <BottomSection>
          <CopyRight>
            © 2025 Evoubabp Industries. Tous droits réservés.
          </CopyRight>
          <LegalLinks>
            <LegalLink href="#">Politique de confidentialité</LegalLink>
            <LegalLink href="#">Conditions d&apos;utilisation</LegalLink>
            <LegalLink href="#">Mentions légales</LegalLink>
          </LegalLinks>
        </BottomSection>
      </FooterContainer>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  position: relative;
  z-index: 1;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BrandLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const BrandName = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const BrandDescription = styled.p`
  color: #94a3b8;
  line-height: 1.6;
  max-width: 300px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  svg {
    fill: #94a3b8;
    transition: fill 0.3s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    transform: translateY(-2px);
    
    svg {
      fill: white;
    }
  }
`;

const LinksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #94a3b8;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.25rem 0;
  border-radius: 4px;
  
  &:hover {
    color: #3b82f6;
    padding-left: 0.5rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
`;

const ContactIcon = styled.span`
  font-size: 1rem;
`;

const ContactLink = styled.a`
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3b82f6;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.3), transparent);
  margin: 2rem 0;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CopyRight = styled.p`
  color: #64748b;
  font-size: 0.875rem;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const LegalLink = styled.a`
  color: #64748b;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3b82f6;
  }
`;

const BackToTop = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #3b82f6;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: #3b82f6;
    color: white;
    transform: translateY(-2px);
  }
`;

const BackToTopIcon = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;

const ChatButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;
