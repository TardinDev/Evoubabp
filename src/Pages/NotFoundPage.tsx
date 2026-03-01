import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SEOHead from "../components/SEO/SEOHead";

export default function NotFoundPage() {
  return (
    <PageContainer>
      <SEOHead
        title="Page non trouvée | Evoubap"
        description="La page que vous recherchez n'existe pas ou a été déplacée."
        canonical="https://evoubap.com/"
      />
      <Content>
        <ErrorCode>404</ErrorCode>
        <Title>Page non trouvée</Title>
        <Description>
          La page que vous recherchez n'existe pas ou a été déplacée.
        </Description>
        <HomeLink to="/">Retour à l'accueil</HomeLink>
      </Content>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const Content = styled.div`
  text-align: center;
  color: white;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 800;
  margin: 0;
  line-height: 1;
  opacity: 0.9;

  @media (max-width: 480px) {
    font-size: 5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 16px 0;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  opacity: 0.85;
  margin-bottom: 32px;
`;

const HomeLink = styled(Link)`
  display: inline-block;
  padding: 14px 32px;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;
