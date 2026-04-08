'use client'

import { useState } from 'react';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MdCloud, MdPhoneIphone, MdSchool } from 'react-icons/md';
import { FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import webDevelopmentAnimation from '../../shared/assets/animations/webDevelopment.json';
import saasAnimation from '../../shared/assets/animations/saas.json';
import mobileAnimation from '../../shared/assets/animations/mobile.json';
import learningAnimation from '../../shared/assets/animations/learning.json';

interface ProjectsProps {
  id?: string;
}

const serviceContentData: Record<string, {
  title: string;
  description: string;
  icon: React.ReactNode;
  vercelLink?: string;
  color: string;
  animationData: object;
}> = {
  web: {
    title: 'Développement Web/SAAS',
    description:
      "Nous créons des applications web et SAAS de toute complexité, sans limites d'intégration ni d'évolutivité, en gérant efficacement et rapidement les entrées, les sorties, les bases de données et de multiples composants externes.",
    icon: <HiOutlineDesktopComputer />,
    vercelLink: "voir les projets sur Vercel",
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
      "Notre programme d'apprentissage React propose des projets pratiques et des conseils d'experts pour vous aider à maîtriser les concepts fondamentaux et avancés du développement avec React.",
    icon: <MdSchool />,
    color: '#4A90E2',
    animationData: learningAnimation,
  },
};

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const [selectedService, setSelectedService] = useState('web');

  const serviceContent = serviceContentData;

  return (
    <section
      id={id}
      className="flex flex-col items-center px-4 sm:px-8 py-16 gap-8 rounded-2xl w-full max-w-[100vw] overflow-x-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f7fa, #e4ecf5)',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn('up', 'spring', 0.2, 1)}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-xl sm:text-[2.2rem] font-bold text-[#3a3b3c] text-center mt-4">
          Services Proposés
        </h2>
        <p className="text-[1.05rem] text-[#6c757d] text-center">
          Donner vie à vos idées dans vos délais et votre budget.
        </p>
      </motion.div>

      <div className="flex flex-col gap-12 w-full max-w-[1200px] md:flex-row md:justify-between md:items-start md:gap-8">
        <div className="flex-[2] max-w-full md:max-w-[600px] mx-auto w-full order-1 md:order-none">
          <ul className="list-none p-0 m-0 flex flex-col gap-6 md:gap-4">
            {Object.keys(serviceContent).map((service) => (
              <li
                key={service}
                onClick={() => setSelectedService(service)}
                className="flex items-center rounded-lg p-4 sm:p-6 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.15)]"
                style={{
                  background:
                    selectedService === service
                      ? 'linear-gradient(135deg, #d4e4fa, #e8effa)'
                      : 'linear-gradient(135deg, #e4ecf5, #f5f7fa)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    'linear-gradient(135deg, #d4e4fa, #e8effa)';
                }}
                onMouseLeave={(e) => {
                  if (selectedService !== service) {
                    (e.currentTarget as HTMLElement).style.background =
                      'linear-gradient(135deg, #e4ecf5, #f5f7fa)';
                  }
                }}
              >
                <span
                  className="text-[1.75rem] mr-4"
                  style={{ color: serviceContent[service].color }}
                >
                  {serviceContent[service].icon}
                </span>
                <span className="text-[1.05rem] font-medium text-[#3a3b3c]">
                  {serviceContent[service].title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          variants={fadeIn('left', 'spring', 0.2, 1.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-[1.5] bg-[#f8f9fa] rounded-2xl p-8 text-center md:text-left w-full order-2 md:order-none sm:p-6"
          style={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
        >
          <h3 className="text-[1.3rem] text-[#3a3b3c] mb-4">
            {serviceContent[selectedService].title}
          </h3>
          <p className="text-base text-[#6c757d] mb-6 [&_a]:no-underline">
            {serviceContent[selectedService].description}{' '}
            <a
              href="https://vercel.com/tardindevs-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <span
                style={{
                  color: '#4b0082',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                {serviceContent[selectedService].vercelLink}
              </span>
            </a>
          </p>
          <Lottie
            animationData={serviceContent[selectedService].animationData}
            loop
            autoplay
            style={{ width: '100%', maxHeight: '260px', marginTop: '1rem' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
