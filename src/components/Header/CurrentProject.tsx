'use client'

import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReactquery,
  SiNodedotjs,
  SiVite,
  SiPostgresql,
  SiDocker,
  SiPrisma
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import progressBar from "../../shared/assets/animations/progressBar.json";
import ChevronDown from "../../shared/assets/animations/chevronDown.json";

export default function CurrentProject() {
  const handleIcon = () => {
    alert("Naviguez vers le bas pour voir plus de projets !");
  };

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="bg-[#4b0082] px-[5vw] py-4 flex flex-wrap justify-between gap-8 md:flex-row md:items-start max-md:flex-col max-md:items-center max-md:p-8 [&_h1]:text-white [&_h1]:text-xl max-[480px]:[&_h1]:text-xl [&_h1]:mb-2 [&_p]:text-base max-[480px]:[&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-white [&_p]:mt-2">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-1 flex flex-col justify-center max-w-[600px]"
        >
          <h1 className="text-white text-xl mb-2">Projet Actuel</h1>
          <p className="text-base leading-relaxed text-white mt-2">
            Actuellement, je travaille sur un projet logiciel visant à faciliter
            les connexions entre investisseurs et acteurs locaux. L&apos;objectif est de
            permettre des investissements dans divers secteurs, favorisant ainsi le
            développement de régions propices au bien-être de la population.
          </p>
          <div className="flex items-center max-md:mt-4">
            <div className="w-full max-w-[260px] h-[95px] max-md:max-w-[200px]">
              <Lottie animationData={progressBar} loop autoplay />
            </div>
            <p className="text-2xl text-white">80% Terminé</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.3, 1)}
          className="flex-1 flex flex-col items-center text-center"
        >
          <h1 className="text-white text-xl mb-4">Technologies Utilisées</h1>
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="flex flex-wrap justify-center gap-4 max-md:gap-2 [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-in-out [&_svg]:cursor-pointer [&_svg:hover]:scale-[1.2]"
          >
            <SiTypescript size={48} color="#3178C6" className="transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2] max-[480px]:w-10 max-[480px]:h-10" />
            <FaReact size={48} color="#61DAFB" className="transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2] max-[480px]:w-10 max-[480px]:h-10" />
            <SiNextdotjs size={48} color="#000000" className="transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2] max-[480px]:w-10 max-[480px]:h-10" />
            <SiTailwindcss size={48} color="#06B6D4" className="transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2] max-[480px]:w-10 max-[480px]:h-10" />
            <SiReactquery size={48} color="#FF4154" className="transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2] max-[480px]:w-10 max-[480px]:h-10" />
            <SiNodedotjs size={48} color="#3C873A" className="transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2] max-[480px]:w-10 max-[480px]:h-10" />
            <SiVite size={42} color="#646CFF" className="transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2] max-[480px]:w-10 max-[480px]:h-10" />
            <SiPrisma size={48} color="#2D3748" className="transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2] max-[480px]:w-10 max-[480px]:h-10" />
            <SiPostgresql size={48} color="#316192" className="transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2] max-[480px]:w-10 max-[480px]:h-10" />
            <SiDocker size={48} color="#2496ED" className="transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2] max-[480px]:w-10 max-[480px]:h-10" />
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="flex items-center gap-2 mt-2 cursor-pointer"
            onClick={handleIcon}
          >
            <h5 className="text-white text-base transition-colors duration-300 ease-in-out hover:text-gray-300 max-[480px]:text-base">Voir plus de projets</h5>
            <div className="w-20 h-8">
              <Lottie animationData={ChevronDown} loop autoplay />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
