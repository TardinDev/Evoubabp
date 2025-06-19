import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { useTranslation } from 'react-i18next';

export default function ApplicationsSection() {
  const { t } = useTranslation();

  return (
    <SectionContainer id="applications">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn('up', 'spring', 0.2, 1)}
        viewport={{ once: true, amount: 0.2 }}
        className="content"
      >
        <Title>{t('applications.title')}</Title>
        <Subtitle>{t('applications.subtitle')}</Subtitle>

        {/* Section Mobile Apps */}
        <GridContainer>
          <Card>
            <ImageContainer>
              <img
                src="/imagesAppsMobile/zopgomobile.png"
                alt="Zopgo Mobile App"
              />
            </ImageContainer>
            <CardTitle>{t('applications.mobile.ecommerce.title')}</CardTitle>
            <CardText>{t('applications.mobile.ecommerce.description')}</CardText>
          </Card>

          <Card>
            <ImageContainer>
              <img
                src="/imagesAppsMobile/instanjobmobile.png"
                alt="InstanJob Mobile App"
              />
            </ImageContainer>
            <CardTitle>{t('applications.mobile.finance.title')}</CardTitle>
            <CardText>{t('applications.mobile.finance.description')}</CardText>
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
            <CardTitle>{t('applications.web.management.title')}</CardTitle>
            <CardText>{t('applications.web.management.description')}</CardText>
          </Card>

          <Card>
            <ImageContainer>
              <img
                src="https://via.placeholder.com/400x250?text=Web+App+2"
                alt="Web App 2"
              />
            </ImageContainer>
            <CardTitle>{t('applications.web.data.title')}</CardTitle>
            <CardText>{t('applications.web.data.description')}</CardText>
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

  .content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #3a3b3c;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 3rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
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
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.5;
`; 