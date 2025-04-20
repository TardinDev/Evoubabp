import { IoIosMail } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";  // Import the menu icon
import styled from 'styled-components';
import constants from "../../styles/contants";
import { motion } from 'framer-motion'; // for slow motion
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { useState } from "react";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { Link } from "react-router-dom";



const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  return (
    <HeaderStyles>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{ once: false, amount: 0.25 }}
        className='container'
        style={{boxShadow: headerShadow}}>

        <div className='name' ><a href="Home" style={{color:"#4b0082"}}>Evoubabp</a></div>
        <ul className="menu" style={getMenuStyles(menuOpened)}>
          <li><a href="#">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#howItWorks">Method</a></li>
          <li><Link to="/formations">Formations</Link></li>
          <li className="email">
            <p>tardindavy@gmail.com</p>
            <IoIosMail size={"60px"} />
          </li>
        </ul>

        {/* for menu in small screen */}
        <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>
          <BiMenuAltRight size={30} color="purple"/>
        </div>
      </motion.div>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.div`
  background-color: #F8F7F1;
  padding: 1rem 2rem;
  z-index: 99;
  opacity: 1;
  transform: none;
  position: sticky;
  top: 0;
  transition: all 300ms ease;
  

  .container {
    background-color: #F8F7F1; 
    padding:0rem;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    flex-wrap: wrap;
    position: relative;
  }


  .name {
    font-size: 4.5rem;
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

    /* @media (max-width: 768px) {
      flex-direction: column;
      position: absolute;
      top: 70px;
      right: ${props => props.menuOpened ? '0' : '-100%'};
      width: 100%;
      background-color: #F8F7F1;
      transition: right 0.3s ease;
    } */

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
