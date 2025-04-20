import styled from "styled-components";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from "../../utils/motion";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import tardinimage from '/public/images/tardin.png'
import cv from '/public/documents/tardinDev.pdf'
import Lottie from "lottie-react";
import gitHubAnimation from "/public/lottiesimages/gitHub.json"; // Assurez-vous que le chemin est correct



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
            Hey There,<br /> I am Tardin.
          </motion.span>
          <motion.span 
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="secondText"
          >
            <span >I develop great Projects</span> 
            <br />
            <span>to grow your business.</span>            
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
            Download my CV
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
              <div className="firstText">2</div>
              <div className="secondText">
                <div>Years</div>
                <div>Experiences</div>
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
          <div>You can test projects on vercel <br/>or check the code developpment on Github !</div>

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
    padding: 30px 50px;
    z-index: 1;
  }

  .person {
    position: absolute;
    bottom: -2rem;
    left: 33%;
    img {
      width: 45%;
      height: 45%;
      object-fit: contain;
      border: 3px solid purple;
      border-radius: 50%;
      margin-bottom: 5px;
    }
    @media (max-width: 640px) {
      position: relative;
      left: 0;
      background-size: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .CV {
    position: absolute;
    top: 50%;
    left: 0;
    color: orange;
    margin-left: 3rem;
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

  .upElement {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: 35px;
    @media (max-width: 640px) {
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }

  .downElement {
    margin-top: 12rem;
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
