import { IoIosMail } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import styled from 'styled-components';
import constants from "../../styles/contants";
import { motion } from 'framer-motion'; // for slow motion
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { useState, useCallback } from "react";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useActiveSectionContext } from "../../contexts/ActiveSectionContext";
// Composant de menu extrait
const Menu = ({ menuOpened }) => {
  return (
    <ul className="menu" style={getMenuStyles(menuOpened)}>
      <li><a href="#">Accueil</a></li>
      <li><a href="#projects">Projets</a></li>
      <li><a href="#howItWorks">Méthode</a></li>
      <li><Link to="/formations">Formations</Link></li>
      <li className="email">
        <p>tardindavy@gmail.com</p>
        <IoIosMail size={"60px"} />
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
    <HeaderStyles backgroundColor={activeColor}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{ once: false, amount: 0.25 }}
        className='container'
        style={{boxShadow: headerShadow}}>

        <div className='name' ><a href="Home" style={{color:"#4b0082"}}>Evoubap</a></div>

        <Menu menuOpened={menuOpened} />

        {/* for menu in small screen */}
        <div className="menu-icon" onClick={toggleMenu}>
          <BiMenuAltRight size={30} color="purple"/>
        </div>
      </motion.div>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.div<{ backgroundColor: string }>`
  background-color: ${props => props.backgroundColor};
  padding: 1rem 2rem;
  z-index: 99;
  opacity: 1;
  transform: none;
  position: sticky;
  top: 0;
  transition: background-color 500ms ease, all 300ms ease;


  .container {
    background-color: transparent;
    padding:0rem;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    flex-wrap: wrap;
    position: relative;
  }


  .name {
    font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
    font-weight: bold; 
    color: purple;
  }

  .menu {
    text-transform: uppercase;
    font-size: 1rem;
    list-style: none;
    gap: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width:640px), (max-width:640px) {
         position :absolute;
         list-style:none;
         gap:2rem;
         font-weight:500;
         flex-direction:column;
         right:0;
         top:3rem;
         width:50%;
         min-width:15rem;
         max-height: 80vh;
         overflow: auto;
         background:white;
         padding:2rem;
         display:flex;
         border-radius:2rem;
         transition: all 300ms ease;
         align-items:flex-start;
         justify-content:flex-end;
         border-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    }
  }


  .menu-icon {
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
      display: block;
    }
  }



  ul li {
    list-style: none;
   

    &:hover {
      color: ${constants.blue};
    }
  }


  a {
  text-decoration: none;
  color: black; /* Couleur noire pour les liens */
}

/* Forcer la couleur noire sur tous les états */
a:visited,
a:active,
a:hover,
a:focus {
  color: black;
}



  .email {
    text-transform: none;
    display: flex;
    gap: 0.1rem;
    flex-wrap: wrap;
    align-items: center;
    font-weight: bold;

    &:hover {
      color: ${constants.secondary};
    }

    svg {
      color: ${constants.secondary};
      padding: 5px;
      background-color: #fff;
      border-radius: 20px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
    }
  }



`;

export default Header;
