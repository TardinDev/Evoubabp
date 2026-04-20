'use client'

import { IoIosMail } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { useState, useCallback } from "react";
import Link from "next/link";
import EvoubapLogo from "./EvoubapLogo";
import { useActiveSectionContext } from "../../contexts/ActiveSectionContext";
import { useTranslation } from "../../hooks/useTranslation";

const subHeaderContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const subHeaderItem = {
  hidden: { opacity: 0, y: -12, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 420, damping: 22 },
  },
};

const Menu = ({ menuOpened }: { menuOpened: boolean }) => {
  const { t } = useTranslation();

  return (
    <ul
      className="uppercase text-base list-none gap-6 cursor-pointer flex justify-around items-center md:static md:flex-row md:w-auto md:max-h-none md:overflow-visible md:bg-transparent md:p-0 md:rounded-none md:items-center md:justify-around max-md:absolute max-md:list-none max-md:gap-6 max-md:font-medium max-md:flex-col max-md:right-0 max-md:top-12 max-md:w-[85vw] max-md:max-w-[15rem] max-md:max-h-[80vh] max-md:overflow-auto max-md:bg-white max-md:p-6 max-md:flex max-md:rounded-2xl max-md:transition-all max-md:duration-300 max-md:items-start max-md:justify-end max-md:shadow-md"
      style={getMenuStyles(menuOpened)}
    >
      <li className="list-none hover:text-accent-blue">
        <Link href="/" className="no-underline text-black visited:text-black active:text-black hover:text-black focus:text-black">
          {t.header.home}
        </Link>
      </li>
      <li className="list-none hover:text-accent-blue">
        <a href="#app-showcase" className="no-underline text-black visited:text-black active:text-black hover:text-black focus:text-black">
          {t.header.projects}
        </a>
      </li>
      <li className="list-none hover:text-accent-blue">
        <a href="#howItWorks" className="no-underline text-black visited:text-black active:text-black hover:text-black focus:text-black">
          {t.header.method}
        </a>
      </li>
      <li className="list-none hover:text-accent-blue">
        <Link href="/formations" className="no-underline text-black visited:text-black active:text-black hover:text-black focus:text-black">
          {t.header.training}
        </Link>
      </li>
      <li className="normal-case flex gap-[0.1rem] flex-wrap items-center font-bold hover:text-secondary list-none max-md:text-sm">
        <p>tardindavy@gmail.com</p>
        <IoIosMail size={"42px"} className="text-secondary p-[5px] bg-white rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.35)] max-md:w-9 max-md:h-9" />
      </li>
    </ul>
  );
};

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { activeColor } = useActiveSectionContext();
  const { language, toggleLanguage } = useTranslation();

  const toggleMenu = useCallback(() => {
    setMenuOpened(prev => !prev);
  }, []);

  return (
    <>
      <div
        className="py-0 px-3 sm:px-4 md:px-6 z-[99] opacity-100 sticky top-0 transition-all duration-300 ease-in-out"
        style={{ backgroundColor: activeColor, transition: 'background-color 500ms ease, all 300ms ease' }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={headerVariants}
          viewport={{ once: true, amount: 0.25 }}
          className="bg-transparent p-0 flex justify-between font-medium flex-wrap relative"
        >
          <div className="flex items-center mt-2 sm:mt-3 md:mt-4">
            <a href="/" aria-label="Evoubap — accueil" className="inline-flex items-center no-underline">
              <EvoubapLogo
                className="h-28 sm:h-32 md:h-36 lg:h-40 w-auto -my-9 sm:-my-10 md:-my-11 lg:-my-12"
              />
            </a>
          </div>

          <Menu menuOpened={menuOpened} />

          {/* for menu in small screen */}
          <div className="hidden max-md:block cursor-pointer" onClick={toggleMenu}>
            <BiMenuAltRight size={26} color="purple" />
          </div>
        </motion.div>

        {/* Sub-header bar: FullStack links + Language toggle */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={subHeaderContainer}
          className="flex justify-end items-center flex-wrap gap-1.5 sm:gap-2 md:gap-3 pt-0 pb-0.5"
        >
          <motion.a
            variants={subHeaderItem}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#fullstack-node"
            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold border-2 border-[#61dafb] text-[#0a0a0f] bg-[#61dafb]/90 backdrop-blur-sm hover:bg-[#61dafb] no-underline shadow-sm sm:shadow-md hover:shadow-lg whitespace-nowrap"
          >
            <span className="sm:hidden">Node</span>
            <span className="hidden sm:inline">React/NodeJs</span>
          </motion.a>
          <motion.a
            variants={subHeaderItem}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#fullstack-spring"
            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold border-2 border-[#6db33f] text-white bg-[#6db33f]/90 backdrop-blur-sm hover:bg-[#6db33f] no-underline shadow-sm sm:shadow-md hover:shadow-lg whitespace-nowrap"
          >
            <span className="sm:hidden">Spring</span>
            <span className="hidden sm:inline">React/Spring-Boot</span>
          </motion.a>
          <motion.a
            variants={subHeaderItem}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/33766450771"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold border-2 border-[#25D366] text-white bg-[#25D366]/90 backdrop-blur-sm hover:bg-[#25D366] no-underline shadow-sm sm:shadow-md hover:shadow-lg whitespace-nowrap"
            aria-label="Contact via WhatsApp"
          >
            <FaWhatsapp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </motion.a>
          <motion.button
            variants={subHeaderItem}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full text-[11px] sm:text-sm font-bold border-2 border-purple-800 text-purple-800 bg-white/90 backdrop-blur-sm hover:bg-purple-800 hover:text-white transition-colors duration-300 cursor-pointer shadow-sm sm:shadow-md hover:shadow-lg whitespace-nowrap"
            aria-label={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            <span className={language === 'fr' ? 'opacity-100' : 'opacity-40'}>FR</span>
            <span className="text-purple-400">|</span>
            <span className={language === 'en' ? 'opacity-100' : 'opacity-40'}>EN</span>
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}

export default Header;
