import styled from "styled-components";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from "../../utils/motion";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import tardinimage from '/public/images/tardin.png'
import cv from '/public/documents/tardinDev.pdf'
import Lottie from "lottie-react";
import gitHubAnimation from "../../shared/assets/animations/gitHub.json";



export default function UnderHeader() {

  return (

    <UnderHeaderStyle>
      {/* Section container */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container"
      >
        <div className="upElement">
          <motion.span 
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="firstText"
          >
            Bonjour,<br /> Je suis Tardin.
          </motion.span>
          <motion.span 
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="secondText"
          >
            <span>Je conçois des solutions intelligentes</span>
            <br />
            <span>alimentées par l'IA pour transformer</span>
            <br/>
            <span>l'avenir de votre entreprise.</span>            
          </motion.span>
        </div>

        {/* Person image */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="person"
        >
          <img src={tardinimage} alt="Tardin" className="cover-image" />
        </motion.div>

        {/* CV download */}
        <motion.a 
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="CV" 
            href={cv} 
            download={cv} // attribut pour forcer le téléchargement
         >
            Télécharger mon CV
        </motion.a>

        {/* <motion.a 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="CV" href="mailto:tardindavy@gmail.com"
        >
          Download my CV
        </motion.a> */}

        {/* Down element */}
        <div className="downElement">
          <motion.div 
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="experience"
          >
            <div className="numberofyearsExperience">
              <div className="firstText">4</div>
              <div className="secondText">
                <div>Années</div>
                <div>d&apos;Expérience</div>
              </div>
            </div>
            <div className="iconsContact">
              <FaFacebook size={50} color="blue"/>
              <FaTiktok size={50} color="#000"/>
              <IoLogoWhatsapp size={50} color="green"/>
              <FaYoutube size={50} color="red"/>
            </div>
          </motion.div>

          <motion.div 
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="certificat-container"
>
          <div>
            Découvrez mes projets intégrant l'IA, l'automatisation intelligente <br/>
            et les dernières innovations technologiques sur Vercel et GitHub !
          </div>

          <div className="vercelAndGithub">
            <div className="certificat">
              <IoLogoVercel size={55} color="#000" className="icon-certificat" />
              <a href="https://vercel.com/tardindevs-projects" target="_blank" rel="noopener noreferrer" className="link-certificat"> <span href="vercel.com">Vercel</span></a>
            </div>

            <div className="certificat">
            <div style={{ height: "2rem", width: "3rem", }}>
              <Lottie 
                 animationData={gitHubAnimation}
                 loop
                 autoplay
               />
            </div>
          <a href="https://github.com/TardinDev" target="_blank" rel="noopener noreferrer" className="link-certificat"> <span href="github.com">GitHub</span> </a> 
            </div> 
          </div>
   
         </motion.div>

    
        </div>
      </motion.div>
    </UnderHeaderStyle>
  );
}

const UnderHeaderStyle = styled.div`
  background-color: #F8F7F1;

  .container {
    position: relative;
    background-color: #F8F7F1;
    padding: clamp(16px, 2vw, 30px) clamp(20px, 4vw, 50px);
    z-index: 1;
  }

  .person {
    position: absolute;
    bottom: 1rem;
    left: 25%;
    transform: translateX(-50%);
    z-index: 1;

    img {
      width: clamp(150px, 30vw, 320px);
      height: auto;
      object-fit: contain;
      border: 3px solid purple;
      border-radius: 50%;
      margin-bottom: 5px;
      opacity: 0.9;
      transition: all 0.3s ease;
    }

    &:hover img {
      opacity: 1;
      transform: scale(1.05);
    }

    @media (max-width: 640px) {
      position: relative;
      left: 0;
      transform: none;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
    }
  }

  .CV {
    position: absolute;
    top: 50%;
    left: 0;
    color: orange;
    margin-left: clamp(1rem, 4vw, 3rem);
    cursor:pointer;

    &: hover {
       background-color:#4b0082;
       color:#fff;
       font-size:30px;

       border:1px solid purple;
       border-radius:10px;

       padding:0.3rem 0.5rem;
       text-decoration:none;
       transition: all 0.5s ease-in-out; /* Ajout de la transition */

    }

    @media (max-width: 640px) {
      position: relative;
      display: none;
    }
  }

  .secondText {
      position: relative;
      border-radius: 10px;
      display: inline-block;
      cursor: pointer;
      padding: 0.5rem 1rem;
      transition: all 0.5s ease-in-out;
      color: black;
      font-weight: 600;
      z-index: 2;

      &: hover {
        background-color: #4b0082;
        color: #fff;
        transform: scale(1.1);
        border: 1px solid purple;
        border-radius: 10px;
        padding: 0.5rem 1rem;
        text-decoration: none;
        z-index: 10;
      }

      @media (max-width: 640px) {
      position: relative;
      display: none;
    }
  }

  .upElement {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: clamp(1.25rem, 2.2vw + 1rem, 2.25rem);
    @media (max-width: 640px) {
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }

  .firstText {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    padding: 0.5rem;
    border-radius: 10px;
    font-weight: 600;
    color: black;
    position: relative;
    z-index: 2;

    &:hover {
      background-color: #4b0082;
      color: #fff;
      transform: scale(1.1);
      border: 1px solid purple;
      border-radius: 10px;
      padding: 0.5rem 1rem;
      text-decoration: none;
      z-index: 10;
    }
  }

  .downElement {
    margin-top: clamp(4rem, 8vw, 12rem);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 20px;
    @media (max-width: 640px) {
      margin-top: 4rem;
      gap: 2rem;
    }
  }

  .experience {
    gap: 1rem;
    .numberofyearsExperience {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .iconsContact {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
      cursor: pointer;
      svg {
        transition: transform 0.3s ease-in-out;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  ${'' /* .certificat {
    display: flex;
    gap:10px;
    align-items: center;
    .iconCertificat {
      margin-bottom: 1rem;
      width: 3.5rem;
    }
  } */}

  
  .vercelAndGithub {

      display:flex;
      flex-direction:column;
      gap:1rem;
  }

  .certificat-container {
    display: flex;
    gap: 20px;
    align-items: center;
}

.certificat {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor:pointer;

    span {

      color:purple;
      font-weight:bold;
    }

.link-certificat {
    text-decoration: none; /* Enlève le soulignement */
    color: inherit; /* Utilise la couleur du texte parent */
}

}

.icon-certificat {
    margin-bottom: 1rem;
    width: 3.5rem;
}




`;
