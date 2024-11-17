import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReactrouter } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiVite } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGithub } from "react-icons/fa6";

import Lottie from "lottie-react";
import progressBar from "/public/lottiesimages/progressBar.json";
import ChevronDown from "/public/lottiesimages/chevronDown.json";

export default function CurrentProject() {
  const handleIcon = () => {
    alert("This is the true project!");
  };

  return (
    <CurrentProjectStyle>
      <div className="left-side">
        <h1>Current Project</h1>
        <p>
          “Currently, I am working on a software project aimed at facilitating
          connections between investors and local stakeholders. The goal is to
          enable investments in various sectors, thereby promoting the
          development of regions conducive to the well-being of the population.”
        </p>
        <div className="progressAndPercent">
          <div className="progress-bar">
            <Lottie animationData={progressBar} loop autoplay />
          </div>
          <p className="completion-text">80% Completed</p>
        </div>
      </div>

      <div className="technologies">
        <h1>
          Technologies
          <br />
          I Used
        </h1>
        <div className="icons">
          <IoLogoJavascript size={60} color="yellow" />
          <FaReact size={60} color="blue" />
          <SiReactrouter size={60} color="pink" />
          <DiNodejs size={60} color="green" />
          <SiVite size={50} color="#E49BFF" />
          <DiMongodb size={60} color="green" />
          <FaGithub size={60} color="black" />
        </div>

        <div className="seeMore" onClick={handleIcon}>
          <h5>See more projects</h5>
          <div className="see-more-animation">
            <Lottie animationData={ChevronDown} loop autoplay />
          </div>
        </div>
      </div>
    </CurrentProjectStyle>
  );
}

const CurrentProjectStyle = styled.div`
  background-color: #4b0082;
  padding: 1rem 5vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  h1 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #fff;
    margin-top: 0.5rem;
  }

  .left-side {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;
  }

  .progressAndPercent {
    display: flex;
    align-items: center;
    

    .progress-bar {
      width: 100%;
      max-width: 300px;
      height:110px;
    }

    .completion-text {
      font-size: 1.5rem;
      color: #fff;
    }
  }

  .technologies {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      margin-bottom: 1rem;
    }

    .icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;

      svg {
        transition: transform 0.3s ease-in-out;
        cursor: pointer;
      }

      svg:hover {
        transform: scale(1.2);
      }
    }

    .seeMore {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
      cursor: pointer;

      h5 {
        color: #fff;
        font-size: 1.2rem;
        transition: color 0.3s ease-in-out;
      }

      h5:hover {
        color: #ccc;
      }

      .see-more-animation {
        width: 5rem;
        height: 2rem;
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    .progressAndPercent {
      margin-top: 1rem;

      .progress-bar {
        max-width: 200px;
      }
    }

    .icons {
      gap: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }

    .icons {
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .seeMore h5 {
      font-size: 1rem;
    }
  }
`;
