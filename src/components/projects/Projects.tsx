import { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MdCloud, MdPhoneIphone, MdSchool } from 'react-icons/md';
import { FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import Lottie from 'lottie-react';

import webDevelopmentAnimation from '../../shared/assets/animations/webDevelopment.json';
import saasAnimation from '../../shared/assets/animations/saas.json';
import mobileAnimation from '../../shared/assets/animations/mobile.json';
import learningAnimation from '../../shared/assets/animations/learning.json';

interface ProjectsProps {
  id?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const [selectedService, setSelectedService] = useState('web');

  const serviceContent = {
    web: {
      title: 'Développement Web/SAAS',
      description:
      "Nous créons des applications web et SAAS de toute complexité, sans limites d'intégration ni d'évolutivité, en gérant efficacement et rapidement les entrées, les sorties, les bases de données et de multiples composants externes.",
      icon: <HiOutlineDesktopComputer />,
      vercelLink:"voir les projets sur Vercel",
      color: '#286F6C',
      animationData: webDevelopmentAnimation,
    },
    saas: {
      title: 'Intelligence Artificielle',
      description:
        'Nos solutions IA sont conçues pour automatiser vos processus, analyser vos données et fournir des insights prédictifs pour transformer votre entreprise grâce à l\'intelligence artificielle.',
      icon: <FaBrain />,
      color: '#EEC048',
      animationData: saasAnimation,
    },
    mobile: {
      title: 'Développement Mobile',
      description:
        'Nous créons des applications mobiles haute performance avec React Native, optimisées pour les plateformes Android et iOS.',
      icon: <MdPhoneIphone />,
      color: '#F26440',
      animationData: mobileAnimation,
    },
    learning: {
      title: 'Apprentissage React',
      description:
      "Notre programme d’apprentissage React propose des projets pratiques et des conseils d’experts pour vous aider à maîtriser les concepts fondamentaux et avancés du développement avec React.",
      icon: <MdSchool />,
      color: '#4A90E2',
      animationData: learningAnimation,
    },
  };

  return (
    <SectionContainer id={id}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn('up', 'spring', 0.2, 1)}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Title>Services Proposés</Title>
                  <Subtitle>Donner vie à vos idées dans vos délais et votre budget.</Subtitle>
      </motion.div>

      <ContentContainer>
        <TextContainer>
          <ServiceList>
            {Object.keys(serviceContent).map((service) => (
              <ServiceItem
                key={service}
                onClick={() => setSelectedService(service)}
                active={selectedService === service}
              >
                <ServiceIcon color={serviceContent[service].color}>
                  {serviceContent[service].icon}
                </ServiceIcon>
                <ServiceText>{serviceContent[service].title}</ServiceText>
              </ServiceItem>
            ))}
          </ServiceList>
        </TextContainer>

        <ImageContainer
          as={motion.div}
          variants={fadeIn('left', 'spring', 0.2, 1.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <DescriptionTitle>{serviceContent[selectedService].title}</DescriptionTitle>
          <DescriptionText>{serviceContent[selectedService].description} <a href="https://vercel.com/tardindevs-projects" target="_blank" rel="noopener noreferrer" className="link-certificat"><span style={{color:"#4b0082", fontWeight:"bold", cursor:'pointer',}}>{serviceContent[selectedService].vercelLink}</span></a></DescriptionText>
          <Lottie
            animationData={serviceContent[selectedService].animationData}
            loop
            autoplay
            style={{ width: '100%', maxHeight: '300px', marginTop: '1rem' }}
          />
        </ImageContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Projects;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem;
  gap: 2rem;
  background: linear-gradient(135deg, #f5f7fa, #e4ecf5);
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #3a3b3c;
  text-align: center;
  margin-top: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 767px) {
    gap: 3rem;
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 767px) {
    max-width: 100%;
    order: 1;
  }
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 767px) {
    gap: 1.5rem;
  }
`;

const ServiceItem = styled.li`
  display: flex;
  align-items: center;
  background: ${({ active }) =>
    active ? 'linear-gradient(135deg, #d4e4fa, #e8effa)' : 'linear-gradient(135deg, #e4ecf5, #f5f7fa)'};
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #d4e4fa, #e8effa);
    transform: scale(1.05);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    cursor:pointer;
  }
`;

const ServiceIcon = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
  color: ${({ color }) => color};
`;

const ServiceText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #3a3b3c;
`;

const ImageContainer = styled.div`
  flex: 1.5;
  background-color: #f8f9fa;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (max-width: 767px) {
    padding: 1.5rem;
    order: 2;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const DescriptionTitle = styled.h3`
  font-size: 1.5rem;
  color: #3a3b3c;
  margin-bottom: 1rem;
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 1.5rem;

  a {
    text-Decoration:none;
  }
`;

