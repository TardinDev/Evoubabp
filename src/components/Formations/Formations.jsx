import styled from "styled-components";
import { FaGraduationCap, FaVideo, FaBookOpen, FaLaptopCode } from "react-icons/fa";

export default function FormationPage() {
  return (
    <PageWrapper>
      <Header>
        <Logo>Evoubabp Academy</Logo>
        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/method">Method</NavLink>
          <NavLink href="/academy" className="font-semibold">Academy</NavLink>
        </Nav>
      </Header>

      <IntroSection>
        <IntroTitle>🎓 Explore Our Trainings</IntroTitle>
        <IntroText>
          Learn web development, app building, and tech entrepreneurship through hands-on courses built for real-world success.
        </IntroText>
      </IntroSection>

      <Grid>
        <Card>
          <FaGraduationCap className="text-purple-600 mb-3" size={32} />
          <CardTitle>Fullstack Web Dev</CardTitle>
          <CardText>
            Learn HTML, CSS, JS, React, Node, and databases to build complete apps from scratch.
          </CardText>
        </Card>

        <Card>
          <FaVideo className="text-purple-600 mb-3" size={32} />
          <CardTitle>Video-based Learning</CardTitle>
          <CardText>
            Access structured video courses with real coding examples and projects.
          </CardText>
        </Card>

        <Card>
          <FaBookOpen className="text-purple-600 mb-3" size={32} />
          <CardTitle>Tech & Business</CardTitle>
          <CardText>
            Understand how to turn code into products and navigate the tech startup ecosystem.
          </CardText>
        </Card>

        <Card>
          <FaLaptopCode className="text-purple-600 mb-3" size={32} />
          <CardTitle>Live Coding Workshops</CardTitle>
          <CardText>
            Join hands-on sessions to practice building apps live with guidance.
          </CardText>
        </Card>
      </Grid>

      <Footer>
        © {new Date().getFullYear()} Evoubabp. All rights reserved.
      </Footer>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background: white;
  min-height: 100vh;
  color: #1a202c;
`;

const Header = styled.header`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #7e22ce;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

const IntroSection = styled.section`
  text-align: center;
  padding: 3rem 1rem;
  background: #f5f3ff;
`;

const IntroTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const IntroText = styled.p`
  font-size: 1.125rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled.section`
  padding: 2.5rem 1.5rem;
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const Card = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  font-size: 0.875rem;
  color: #4a5568;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 0.875rem;
  color: #a0aec0;
  padding: 2rem 0;
`;
