import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import { FaGraduationCap, FaBookOpen, FaLaptopCode, FaMobile } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

// Composant de carte extrait
const FormationCard = ({ icon: Icon, title, text, countdown }) => (
  <Card>
    <Icon className="text-purple-600 mb-3" size={32} />
    <CardTitle>{title}</CardTitle>
    <CardText>{text}</CardText>
    {countdown && <ClockText>Prochaine session dans : {countdown}</ClockText>}
  </Card>
);

FormationCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  countdown: PropTypes.string
};

// Hook personnalisé pour le countdown
const useCountdown = () => {
  const [countdown, setCountdown] = useState("");

  const updateCountdown = useCallback(() => {
    const now = new Date();
    let nextSession = new Date();

    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    const daysUntilFriday = (5 - day + 7) % 7 || 7;
    nextSession.setDate(now.getDate() + daysUntilFriday);
    nextSession.setHours(21, 0, 0, 0);

    if (day === 5 && (hour < 21 || (hour === 21 && minutes === 0))) {
      nextSession = new Date();
      nextSession.setHours(21, 0, 0, 0);
    }

    if (now >= nextSession) {
      nextSession.setDate(nextSession.getDate() + 7);
    }

    const diff = nextSession - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    setCountdown(
      `${days}d ${hours.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    );
  }, []);

  useEffect(() => {
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [updateCountdown]);

  return countdown;
};

export default function FormationPage() {
  const countdown = useCountdown();
  const { t } = useTranslation();

  const formations = [
    {
      icon: FaGraduationCap,
      title: t('formations.webDev.title'),
      text: t('formations.webDev.description')
    },
    {
      icon: FaMobile,
      title: t('formations.mobileDev.title'),
      text: t('formations.mobileDev.description')
    },
    {
      icon: FaBookOpen,
      title: t('formations.techBusiness.title'),
      text: t('formations.techBusiness.description')
    },
    {
      icon: FaLaptopCode,
      title: t('formations.liveCoding.title'),
      text: t('formations.liveCoding.description'),
      countdown
    }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <PageWrapper>
        <motion.div variants={fadeIn("down", "tween", 0.1, 1)}>
          <Header>
            <Logo>Evoubabp Academy</Logo>
            <Nav>
              <NavLink href="/">{t('common.home')}</NavLink>
              <NavLink href="#projects">{t('common.projects')}</NavLink>
              <NavLink href="#method">{t('common.method')}</NavLink>
              <NavLink href="#academy" className="font-semibold">{t('common.formations')}</NavLink>
            </Nav>
          </Header>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
          <IntroSection>
            <IntroTitle>🎓 {t('formations.title')}</IntroTitle>
            <IntroText>
              {t('formations.subtitle')}
            </IntroText>
          </IntroSection>
        </motion.div>

        <Grid>
          {formations.map((formation, index) => (
            <motion.div
              key={index}
              variants={fadeIn(
                index % 2 === 0 ? "left" : "right",
                "spring",
                index * 0.2,
                1
              )}
            >
              <FormationCard {...formation} />
            </motion.div>
          ))}
        </Grid>

        <motion.div variants={fadeIn("up", "tween", 0.5, 1)}>
          <Footer>
            © {new Date().getFullYear()} Evoubabp. Tous droits réservés.
          </Footer>
        </motion.div>
      </PageWrapper>
    </motion.div>
  );
}

const PageWrapper = styled.div`
  background: white;
  min-height: 100vh;
  color: #1a202c;
`;

const Header = styled.header`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #7e22ce;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

const IntroSection = styled.section`
  text-align: center;
  padding: 3rem 1rem;
  background: #f5f3ff;
`;

const IntroTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const IntroText = styled.p`
  font-size: 1.125rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled.section`
  padding: 2.5rem 1.5rem;
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const Card = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  font-size: 0.875rem;
  color: #4a5568;
`;

const ClockText = styled.p`
  margin-top: 1rem;
  font-weight: bold;
  color: #7e22ce;
  font-size: 1rem;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 0.875rem;
  color: #a0aec0;
  padding: 2rem 0;
`;
