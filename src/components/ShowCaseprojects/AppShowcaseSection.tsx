'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { applicationsData } from "../../data/applicationsData";
import { Application } from "../../types/applications";
import AppCard from "./AppCard";
import AppModal from "./AppModal";
import { useTranslation } from '../../hooks/useTranslation';

const AppShowcaseSection = () => {
  const { t } = useTranslation();
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
        variants={staggerContainer(0.05, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <section id="projects" className="px-4 sm:px-6 pt-3 pb-6" style={{ backgroundColor: '#d4e4fa' }}>
          <motion.div variants={fadeIn("up", "tween", 0.1, 1)}>
            <div className="mb-8 last:mb-0">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{t.appShowcase.mobileApps}</h2>
              <p className="text-gray-500 mb-5 text-sm">{t.appShowcase.mobileAppsDesc}</p>
              <div className="showcase-cards-container flex flex-nowrap gap-1 md:gap-3 overflow-x-auto pb-3" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d1d5db #f3f4f6' }}>
                {applicationsData.mobile.map((app, index) => (
                  <AppCard
                    key={`mobile-${index}`}
                    app={app}
                    index={index}
                    type="mobile"
                    variants={fadeIn("right", "spring", index * 0.08, 0.6)}
                    onCardClick={handleCardClick}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
            <div className="mb-8 last:mb-0">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{t.appShowcase.webApps}</h2>
              <p className="text-gray-500 mb-5 text-sm">{t.appShowcase.webAppsDesc}</p>
              <div className="showcase-cards-container flex flex-nowrap gap-3 md:gap-6 overflow-x-auto pb-3" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d1d5db #f3f4f6' }}>
                {applicationsData.web.map((app, index) => (
                  <AppCard
                    key={`web-${index}`}
                    app={app}
                    index={index}
                    type="web"
                    variants={fadeIn("left", "spring", index * 0.08, 0.6)}
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
