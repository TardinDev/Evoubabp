'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from "../../utils/motion";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
const tardinimage = '/images/tardin.png'
const cv = '/documents/tardinDev.pdf'
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import gitHubAnimation from "../../shared/assets/animations/gitHub.json";
import { useState, useEffect } from "react";

const carouselWords = [
  "Tardin",
  <>Développeur<br />Logiciel</>
];

export default function UnderHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-bg-primary">
      {/* Section container */}
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="relative bg-bg-primary z-[1]"
        style={{ padding: 'clamp(16px, 2vw, 30px) clamp(20px, 4vw, 50px)' }}
      >
        {/* upElement */}
        <div
          className="flex justify-between items-center flex-wrap max-sm:justify-center max-sm:items-center max-sm:gap-8"
          style={{ fontSize: 'clamp(1.25rem, 2.2vw + 1rem, 2.25rem)' }}
        >
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="cursor-pointer transition-all duration-500 ease-in-out p-2 rounded-[10px] font-semibold text-black relative z-[2] -ml-6 hover:bg-[#4b0082] hover:text-white hover:scale-110 hover:border hover:border-purple-800 hover:rounded-[10px] hover:px-4 hover:py-2 hover:no-underline hover:z-10 group"
          >
            Bonjour,<br /> Je suis{" "}
            <span className="inline-block relative w-[280px] h-[2.4em] align-top">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  className="absolute left-0 top-0 text-black font-bold leading-[1.2] transition-colors duration-300 group-hover:text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {carouselWords[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            .
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="relative rounded-[10px] inline-block cursor-pointer px-4 py-2 transition-all duration-500 ease-in-out text-black font-semibold z-[2] hover:bg-[#4b0082] hover:text-white hover:scale-110 hover:border hover:border-purple-800 hover:rounded-[10px] hover:px-4 hover:py-2 hover:no-underline hover:z-10 max-sm:relative max-sm:hidden"
          >
            <span>Je conçois des solutions intelligentes</span>
            <br />
            <span>alimentées par l&apos;IA pour transformer</span>
            <br />
            <span>l&apos;avenir de votre entreprise.</span>
          </motion.span>
        </div>

        {/* Person image */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="absolute bottom-4 left-1/4 -translate-x-1/2 z-[1] max-sm:relative max-sm:left-0 max-sm:translate-x-0 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mt-8 group"
        >
          <img
            src={tardinimage}
            alt="Tardin"
            className="h-auto object-contain border-[3px] border-purple-800 rounded-full mb-[5px] opacity-90 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-105"
            style={{ width: 'clamp(150px, 30vw, 320px)' }}
          />
        </motion.div>

        {/* CV download */}
        <motion.a
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="absolute top-1/2 left-0 text-orange-500 cursor-pointer hover:bg-[#4b0082] hover:text-white hover:text-[30px] hover:border hover:border-purple-800 hover:rounded-[10px] hover:px-2 hover:py-[0.3rem] hover:no-underline transition-all duration-500 ease-in-out max-sm:relative max-sm:hidden"
          style={{ marginLeft: 'clamp(1rem, 4vw, 3rem)' }}
          href={cv}
          download={cv}
        >
          Télécharger mon CV
        </motion.a>

        {/* Down element */}
        <div
          className="flex flex-wrap justify-between text-xl max-sm:mt-16 max-sm:gap-8"
          style={{ marginTop: 'clamp(4rem, 8vw, 12rem)' }}
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="gap-4"
          >
            {/* numberofyearsExperience */}
            <div className="flex items-center gap-[10px]">
              <div className="cursor-pointer transition-all duration-500 ease-in-out p-2 rounded-[10px] font-semibold text-black relative z-[2] -ml-6 hover:bg-[#4b0082] hover:text-white hover:scale-110 hover:border hover:border-purple-800 hover:rounded-[10px] hover:px-4 hover:py-2 hover:no-underline hover:z-10">
                4
              </div>
              <div className="relative rounded-[10px] inline-block cursor-pointer px-4 py-2 transition-all duration-500 ease-in-out text-black font-semibold z-[2] hover:bg-[#4b0082] hover:text-white hover:scale-110 hover:border hover:border-purple-800 hover:rounded-[10px] hover:px-4 hover:py-2 hover:no-underline hover:z-10 max-sm:relative max-sm:hidden">
                <div>Années</div>
                <div>d&apos;Expérience</div>
              </div>
            </div>
            {/* iconsContact */}
            <div className="flex gap-4 mt-2 cursor-pointer [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-in-out hover:[&>svg]:scale-[1.2]">
              <FaFacebook size={50} color="blue" className="transition-transform duration-300 ease-in-out hover:scale-[1.2]" />
              <FaTiktok size={50} color="#000" className="transition-transform duration-300 ease-in-out hover:scale-[1.2]" />
              <IoLogoWhatsapp size={50} color="green" className="transition-transform duration-300 ease-in-out hover:scale-[1.2]" />
              <FaYoutube size={50} color="red" className="transition-transform duration-300 ease-in-out hover:scale-[1.2]" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex gap-5 items-center"
          >
            <div>
              Découvrez mes projets intégrant l&apos;IA, l&apos;automatisation intelligente <br />
              et les dernières innovations technologiques sur Vercel et GitHub !
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-[10px] items-center cursor-pointer">
                <IoLogoVercel size={55} color="#000" className="mb-4 w-14" />
                <a href="https://vercel.com/tardindevs-projects" target="_blank" rel="noopener noreferrer" className="no-underline text-inherit">
                  <span className="text-purple-800 font-bold">Vercel</span>
                </a>
              </div>

              <div className="flex gap-[10px] items-center cursor-pointer">
                <div style={{ height: "2rem", width: "3rem" }}>
                  <Lottie
                    animationData={gitHubAnimation}
                    loop
                    autoplay
                  />
                </div>
                <a href="https://github.com/TardinDev" target="_blank" rel="noopener noreferrer" className="no-underline text-inherit">
                  <span className="text-purple-800 font-bold">GitHub</span>
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
