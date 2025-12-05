import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

export default function ApplicationsSection() {
  return (
    <SectionContainer id="applications">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn('up', 'spring', 0.2, 1)}
        viewport={{ once: true, amount: 0.2 }}
        className="content"
      >
        <Title>Applications</Title>
        <Subtitle>Applications mobiles et web que j&rsquo;ai développées</Subtitle>

        {/* Section Mobile Apps */}
        <GridContainer>
          <Card>
            <ImageContainer>
              <img
                src="/imagesAppsMobile/zopgomobile.png"
                alt="Zopgo Mobile App"
              />
            </ImageContainer>
            <CardTitle>E-commerce Mobile</CardTitle>
            <CardText>Une application e-commerce complète avec gestion d&rsquo;inventaire en temps réel et traitement sécurisé des paiements.</CardText>
          </Card>

          <Card>
            <ImageContainer>
              <img
                src="/imagesAppsMobile/instanjobmobile.png"
                alt="InstanJob Mobile App"
              />
            </ImageContainer>
            <CardTitle>Finance Mobile</CardTitle>
            <CardText>Application de gestion financière personnelle avec suivi des dépenses, outils de budgétisation et surveillance de portefeuille.</CardText>
          </Card>
        </GridContainer>

        {/* Section Web Apps */}
        <GridContainer>
          <Card>
            <ImageContainer>
              <img
                src="/imagesAppsMobile/zopgoscreen.png"
                alt="Zopgo Web App"
              />
            </ImageContainer>
            <CardTitle>Système de Gestion</CardTitle>
            <CardText>Plateforme de gestion complète pour les entreprises avec suivi de projet, collaboration d&rsquo;équipe et allocation des ressources.</CardText>
          </Card>

          <Card>
            <ImageContainer>
              <img
                src="https://via.placeholder.com/400x250?text=Web+App+2"
                alt="Web App 2"
              />
            </ImageContainer>
            <CardTitle>Visualisation de Données</CardTitle>
            <CardText>Tableau de bord interactif de visualisation de données pour analyser et présenter des ensembles de données complexes avec mises à jour en temps réel.</CardText>
          </Card>
        </GridContainer>
      </motion.div>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f5f7fa, #e4ecf5);
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;

  .content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    margin: 1rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.75rem;
    border-radius: 8px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #3a3b3c;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 0.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    border-radius: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 60%;
    max-width: 200px;
    height: auto;
    border-radius: 0.5rem;
    object-fit: contain;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 768px) {
      width: 50%;
      max-width: 150px;
    }

    @media (max-width: 480px) {
      width: 45%;
      max-width: 120px;
      border-radius: 0.35rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 0.75rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
  }
`;

const CardText = styled.p`
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.4;
  }
`; 