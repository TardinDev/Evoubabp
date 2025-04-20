import PropTypes from "prop-types";
import styled from "styled-components";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";


const contents = [
  {
    "name": "Design and Analysis",
    "text": "Define the application's requirements and design a suitable user interface. This phase includes mockups to ensure a smooth experience across all platforms.",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    "name": "Frontend Development",
    "text": "Build user interfaces using modern technologies like React for web and React Native for mobile.",
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    "name": "Backend Development",
    "text": "Develop server logic and configure databases to ensure optimal functionality and performance.",
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
  {
    "name": "Testing and Deployment",
    "text": "Perform quality testing, fix bugs, and deploy the application on the server for a successful production launch.",
    icon: HiOutlineDesktopComputer,
    bg: "#4A90E2",
  },
];

const ContentItem = ({ item, index }) => (
  <StyledContentItem bg={item.bg} offset={index % 2 === 1}>
    <div className="icon">
      <item.icon size={48} />
    </div>
    <h4>{item.name}</h4>
    <p>{item.text}</p>
  </StyledContentItem>
);

ContentItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Shapes = () => (
  <>
    <Shape src="https://cdn.easyfrontend.com/pictures/sketch/sketch3.png" style={{ top: 0, left: 0 }} />
    <Shape src="https://cdn.easyfrontend.com/pictures/sketch/sketch2.png" style={{ bottom: 0, right: 0 }} />
    <Shape src="https://cdn.easyfrontend.com/pictures/sketch/sketch3.png" style={{ top: 0, right: 0 }} />
  </>
);

const HowItWorks = () => (
  <Section id="howItWorks">
    <Shapes />
    <Container>
      <Title > Application Development Process  </Title>
      <ContentGrid>
        {contents.map((item, i) => (
          <ContentGridItem key={i}>
            <ContentItem index={i + 1} item={item} />
          </ContentGridItem>
        ))}
      </ContentGrid>
    </Container>
  </Section>
);

const Section = styled.section`
  padding: 2rem 0.5rem;
  background-color: ${({ theme }) => (theme === "dark" ? "#0b1727" : "white")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "#27272a")};
  position: relative;
  z-index: 1;
  margin-bottom: 3rem; /* Ajoute un espace en bas pour éviter le débordement */
`;

const Container = styled.div`
  padding: 0 1rem;
  max-width: 100%;
  margin: auto;
  overflow-x: hidden; /* Évite tout débordement horizontal */
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  color: #1d1e20;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
  cursor:pointer;

  @media (min-width: 768px) {
    margin-top: 1rem;
  }
`;

const ContentGridItem = styled.div`
  grid-column: span 12;

  @media (min-width: 640px) {
    grid-column: span 6;
  }
  @media (min-width: 1024px) {
    grid-column: span 3;
  }
`;

const StyledContentItem = styled.div`
  background-color: ${({ bg }) => bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ bg }) => `0px 4px 10px ${bg}`};
  color: #1d1e20;
  font-size: 15px;
  border-radius: 1rem;
  text-align: center;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: ${({ bg }) => `0px 8px 16px ${bg}`};
    color: #27272a;
  }

  ${({ offset }) => offset && `@media (min-width: 1024px) { margin-top: 4rem; }`}

  .icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.1);
      color: #1d1e20;
    }
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #27272a;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }
  }

  p {
    opacity: 0.85;
    margin-top: 1rem;
    line-height: 1.5;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
      color: #1d1e20;
    }
  }
`;

const Shape = styled.img`
  position: absolute;
  max-width: 200px;
  z-index: -1;
`;

export default HowItWorks;
