'use client'

import { IoIosMail } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { useState, useCallback } from "react";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import Link from "next/link";
import PropTypes from 'prop-types';
import { useActiveSectionContext } from "../../contexts/ActiveSectionContext";

// Composant de menu extrait
const Menu = ({ menuOpened }) => {
  return (
    <ul
      className="uppercase text-base list-none gap-6 cursor-pointer flex justify-around items-center sm:static sm:flex-row sm:w-auto sm:max-h-none sm:overflow-visible sm:bg-transparent sm:p-0 sm:rounded-none sm:items-center sm:justify-around max-sm:absolute max-sm:list-none max-sm:gap-8 max-sm:font-medium max-sm:flex-col max-sm:right-0 max-sm:top-12 max-sm:w-1/2 max-sm:w-[85vw] max-sm:max-w-[15rem] max-sm:max-h-[80vh] max-sm:overflow-auto max-sm:bg-white max-sm:p-8 max-sm:flex max-sm:rounded-2xl max-sm:transition-all max-sm:duration-300 max-sm:items-start max-sm:justify-end max-sm:shadow-md"
      style={getMenuStyles(menuOpened)}
    >
      <li className="list-none hover:text-accent-blue">
        <Link href="/" className="no-underline text-black visited:text-black active:text-black hover:text-black focus:text-black">
          Accueil
        </Link>
      </li>
      <li className="list-none hover:text-accent-blue">
        <a href="#app-showcase" className="no-underline text-black visited:text-black active:text-black hover:text-black focus:text-black">
          Projets
        </a>
      </li>
      <li className="list-none hover:text-accent-blue">
        <a href="#howItWorks" className="no-underline text-black visited:text-black active:text-black hover:text-black focus:text-black">
          Methode
        </a>
      </li>
      <li className="list-none hover:text-accent-blue">
        <Link href="/formations" className="no-underline text-black visited:text-black active:text-black hover:text-black focus:text-black">
          Formations
        </Link>
      </li>
      <li className="normal-case flex gap-[0.1rem] flex-wrap items-center font-bold hover:text-secondary list-none">
        <p>tardindavy@gmail.com</p>
        <IoIosMail size={"52px"} className="text-secondary p-[5px] bg-white rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.35)]" />
      </li>
    </ul>
  );
};

Menu.propTypes = {
  menuOpened: PropTypes.bool.isRequired
};

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const { activeColor } = useActiveSectionContext();

  const toggleMenu = useCallback(() => {
    setMenuOpened(prev => !prev);
  }, []);

  return (
    <div
      className="py-3 px-6 z-[99] opacity-100 sticky top-0 transition-all duration-300 ease-in-out"
      style={{ backgroundColor: activeColor, transition: 'background-color 500ms ease, all 300ms ease' }}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{ once: false, amount: 0.25 }}
        className="bg-transparent p-0 flex justify-between font-medium flex-wrap relative"
        style={{ boxShadow: headerShadow }}
      >
        <div className="font-bold text-purple-800" style={{ fontSize: 'clamp(1.3rem, 3.5vw + 0.9rem, 2.6rem)' }}>
          <a href="Home" className="text-[#4b0082] no-underline">Evoubap</a>
        </div>

        <Menu menuOpened={menuOpened} />

        {/* for menu in small screen */}
        <div className="hidden md:hidden max-md:block cursor-pointer" onClick={toggleMenu}>
          <BiMenuAltRight size={26} color="purple" />
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
