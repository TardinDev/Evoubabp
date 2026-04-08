'use client'

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

export default function ApplicationsSection() {
  return (
    <section
      id="applications"
      className="py-20 px-8 rounded-2xl my-8 w-full max-w-[100vw] overflow-x-hidden md:py-12 md:px-4 max-[480px]:py-8 max-[480px]:px-3 max-[480px]:rounded-lg max-[480px]:my-4"
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
        className="max-w-[1200px] mx-auto text-center"
      >
        <h2 className="text-4xl md:text-3xl max-[480px]:text-[1.6rem] font-bold text-[#3a3b3c] mb-4 max-[480px]:mb-3">Applications</h2>
        <p className="text-[1.2rem] md:text-[1.05rem] max-[480px]:text-[0.95rem] text-[#6c757d] mb-12 md:mb-8 max-[480px]:mb-6 max-[480px]:px-2">
          Applications mobiles et web que j&rsquo;ai développées
        </p>

        {/* Section Mobile Apps */}
        <div className="grid gap-8 md:grid-cols-1 md:gap-6 max-[480px]:gap-4 mb-12 md:mb-8 max-[480px]:mb-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="bg-white rounded-2xl p-6 md:p-5 max-[480px]:p-4 max-[480px]:rounded-lg transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div className="mb-4 max-[480px]:mb-3 flex justify-center items-center">
              <img
                src="/imagesAppsMobile/zopgomobile.png"
                alt="Zopgo Mobile App"
                className="w-[60%] max-w-[200px] md:w-[50%] md:max-w-[150px] max-[480px]:w-[45%] max-[480px]:max-w-[120px] max-[480px]:rounded-[0.35rem] h-auto rounded-lg object-contain transition-transform duration-300 hover:scale-105"
                style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              />
            </div>
            <h3 className="text-2xl md:text-[1.3rem] max-[480px]:text-[1.1rem] font-semibold text-[#2d3748] mb-2 max-[480px]:mb-[0.4rem]">E-commerce Mobile</h3>
            <p className="text-[#4a5568] text-base md:text-[0.95rem] max-[480px]:text-sm leading-6 md:leading-[1.4] max-[480px]:leading-[1.4]">
              Une application e-commerce complète avec gestion d&rsquo;inventaire en temps réel et traitement sécurisé des paiements.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-5 max-[480px]:p-4 max-[480px]:rounded-lg transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div className="mb-4 max-[480px]:mb-3 flex justify-center items-center">
              <img
                src="/imagesAppsMobile/instanjobmobile.png"
                alt="InstanJob Mobile App"
                className="w-[60%] max-w-[200px] md:w-[50%] md:max-w-[150px] max-[480px]:w-[45%] max-[480px]:max-w-[120px] max-[480px]:rounded-[0.35rem] h-auto rounded-lg object-contain transition-transform duration-300 hover:scale-105"
                style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              />
            </div>
            <h3 className="text-2xl md:text-[1.3rem] max-[480px]:text-[1.1rem] font-semibold text-[#2d3748] mb-2 max-[480px]:mb-[0.4rem]">Finance Mobile</h3>
            <p className="text-[#4a5568] text-base md:text-[0.95rem] max-[480px]:text-sm leading-6 md:leading-[1.4] max-[480px]:leading-[1.4]">
              Application de gestion financière personnelle avec suivi des dépenses, outils de budgétisation et surveillance de portefeuille.
            </p>
          </div>
        </div>

        {/* Section Web Apps */}
        <div className="grid gap-8 md:grid-cols-1 md:gap-6 max-[480px]:gap-4 mb-12 md:mb-8 max-[480px]:mb-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="bg-white rounded-2xl p-6 md:p-5 max-[480px]:p-4 max-[480px]:rounded-lg transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div className="mb-4 max-[480px]:mb-3 flex justify-center items-center">
              <img
                src="/imagesAppsMobile/zopgoscreen.png"
                alt="Zopgo Web App"
                className="w-[60%] max-w-[200px] md:w-[50%] md:max-w-[150px] max-[480px]:w-[45%] max-[480px]:max-w-[120px] max-[480px]:rounded-[0.35rem] h-auto rounded-lg object-contain transition-transform duration-300 hover:scale-105"
                style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              />
            </div>
            <h3 className="text-2xl md:text-[1.3rem] max-[480px]:text-[1.1rem] font-semibold text-[#2d3748] mb-2 max-[480px]:mb-[0.4rem]">Système de Gestion</h3>
            <p className="text-[#4a5568] text-base md:text-[0.95rem] max-[480px]:text-sm leading-6 md:leading-[1.4] max-[480px]:leading-[1.4]">
              Plateforme de gestion complète pour les entreprises avec suivi de projet, collaboration d&rsquo;équipe et allocation des ressources.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-5 max-[480px]:p-4 max-[480px]:rounded-lg transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div className="mb-4 max-[480px]:mb-3 flex justify-center items-center">
              <img
                src="https://via.placeholder.com/400x250?text=Web+App+2"
                alt="Web App 2"
                className="w-[60%] max-w-[200px] md:w-[50%] md:max-w-[150px] max-[480px]:w-[45%] max-[480px]:max-w-[120px] max-[480px]:rounded-[0.35rem] h-auto rounded-lg object-contain transition-transform duration-300 hover:scale-105"
                style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              />
            </div>
            <h3 className="text-2xl md:text-[1.3rem] max-[480px]:text-[1.1rem] font-semibold text-[#2d3748] mb-2 max-[480px]:mb-[0.4rem]">Visualisation de Données</h3>
            <p className="text-[#4a5568] text-base md:text-[0.95rem] max-[480px]:text-sm leading-6 md:leading-[1.4] max-[480px]:leading-[1.4]">
              Tableau de bord interactif de visualisation de données pour analyser et présenter des ensembles de données complexes avec mises à jour en temps réel.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
