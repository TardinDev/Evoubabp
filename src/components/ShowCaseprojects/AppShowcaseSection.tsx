'use client'

import { useState } from "react";
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
      <style>{`
        .showcase-cards-container::-webkit-scrollbar {
          height: 8px;
        }
        .showcase-cards-container::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 4px;
        }
        .showcase-cards-container::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 4px;
        }
        .showcase-cards-container::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>

      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <section id="projects" className="px-4 sm:px-8 pt-4 pb-8" style={{ backgroundColor: '#d4e4fa' }}>
          <motion.div variants={fadeIn("up", "tween", 0.1, 1)}>
            <div className="mb-10 last:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Applications Mobiles</h2>
              <p className="text-gray-500 mb-6 text-base">Quelques applications mobiles que j&apos;ai développées.</p>
              <div className="showcase-cards-container flex flex-nowrap gap-4 sm:gap-6 overflow-x-auto pb-4 max-md:flex-col max-md:flex-wrap max-md:overflow-x-visible max-md:items-center" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d1d5db #f3f4f6' }}>
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
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
            <div className="mb-10 last:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Applications Web</h2>
              <p className="text-gray-500 mb-6 text-base">Des applications web que j&apos;ai développées pour mes clients.</p>
              <div className="showcase-cards-container flex flex-nowrap gap-4 sm:gap-6 overflow-x-auto pb-4 max-md:flex-col max-md:flex-wrap max-md:overflow-x-visible max-md:items-center" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d1d5db #f3f4f6' }}>
                {applicationsData.web.map((app, index) => (
                  <AppCard
                    key={`web-${index}`}
                    app={app}
                    index={index}
                    type="web"
                    variants={fadeIn("left", "spring", index * 0.2, 1)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </motion.div>

      <AppModal
        app={selectedApp}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default AppShowcaseSection;
