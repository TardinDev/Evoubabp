import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { applicationsData } from "../../data/applicationsData";
import { Application } from "../../types/applications";
import AppCard from "./AppCard";
import AppModal from "./AppModal";

const AppShowcaseSection = () => {
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (app: Application) => {
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedApp(null), 300);
  };

  return (
    <>
      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Section id="projects">
          <motion.div variants={fadeIn("up", "tween", 0.1, 1)}>
            <SectionContainer>
              <Title>Applications Mobiles</Title>
              <Description>Quelques applications mobiles que j&apos;ai développées.</Description>
              <CardsContainer>
                {applicationsData.mobile.map((app, index) => (
                  <AppCard
                    key={`mobile-${index}`}
                    app={app}
                    index={index}
                    type="mobile"
                    variants={fadeIn("right", "spring", index * 0.2, 1)}
                    onCardClick={handleCardClick}
                  />
                ))}
              </CardsContainer>
            </SectionContainer>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
            <SectionContainer>
              <Title>Applications Web</Title>
              <Description>Des applications web que j&apos;ai développées pour mes clients.</Description>
              <CardsContainer>
                {applicationsData.web.map((app, index) => (
                  <AppCard
                    key={`web-${index}`}
                    app={app}
                    index={index}
                    type="web"
                    variants={fadeIn("left", "spring", index * 0.2, 1)}
                  />
                ))}
              </CardsContainer>
            </SectionContainer>
          </motion.div>
        </Section>
      </motion.div>

      <AppModal
        app={selectedApp}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

const Section = styled.section`
  padding: 1rem 2rem 2rem 2rem;
  background-color: #d4e4fa;
`;

const SectionContainer = styled.div`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1f2937;
`;

const Description = styled.p`
  color: #6b7280;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;

  @media (max-width: 767px) {
    flex-direction: column;
    flex-wrap: wrap;
    overflow-x: visible;
    align-items: center;
  }

  /* Style de la scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #d1d5db #f3f4f6;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f3f4f6;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
`;

export default AppShowcaseSection;
