import { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MdCloud, MdPhoneIphone, MdSchool } from 'react-icons/md';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import Lottie from 'lottie-react';

import webDevelopmentAnimation from '/public/lottiesimages/webDevelopment.json';
import saasAnimation from '/public/lottiesimages/saas.json';
import mobileAnimation from '/public/lottiesimages/mobile.json';
import learningAnimation from '/public/lottiesimages/learning.json';

const Projects = () => {
  const [selectedService, setSelectedService] = useState('web');

  const serviceContent = {
    web: {
      title: 'Web Development',
      description:
        'We build applications of any complexity with no limits on integrations or scalability, handling multiple inputs, outputs, databases, and external components efficiently and swiftly.',
      icon: <HiOutlineDesktopComputer />,
      color: '#286F6C',
      animationData: webDevelopmentAnimation,
    },
    saas: {
      title: 'SAAS',
      description:
        'Our SAAS solutions are designed to scale with your business, ensuring secure and reliable access across devices and platforms.',
      icon: <MdCloud />,
      color: '#EEC048',
      animationData: saasAnimation,
    },
    mobile: {
      title: 'Mobile Development',
      description:
        'We create high-performance mobile applications using React Native, optimized for both Android and iOS platforms.',
      icon: <MdPhoneIphone />,
      color: '#F26440',
      animationData: mobileAnimation,
    },
    learning: {
      title: 'Learning React',
      description:
        'Our Learning React program offers hands-on projects and expert guidance, helping you master the fundamentals and advanced concepts of React development.',
      icon: <MdSchool />,
      color: '#4A90E2',
      animationData: learningAnimation,
    },
  };

  return (
    <SectionContainer id="projects">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn('up', 'spring', 0.2, 1)}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Title>Provided Services</Title>
        <Subtitle>Bringing your ideas to life within your timeline and budget.</Subtitle>
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
          <DescriptionText>{serviceContent[selectedService].description}</DescriptionText>
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
`;

const TextContainer = styled.div`
  flex: 2;
  max-width: 600px;
  margin: 0 auto;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

  @media (min-width: 768px) {
    text-align: left;
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
`;

