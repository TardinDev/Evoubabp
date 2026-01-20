import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBuilding, FaServer, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function MentionsLegalesPage() {
  return (
    <PageContainer>
      <BackgroundGradient />
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BackLink to="/">
            <FaArrowLeft /> Retour à l'accueil
          </BackLink>

          <PageTitle>Mentions Légales</PageTitle>
          <LastUpdate>Dernière mise à jour : Janvier 2026</LastUpdate>

          <Section>
            <SectionIcon><FaBuilding /></SectionIcon>
            <SectionTitle>1. Éditeur du site</SectionTitle>
            <SectionContent>
              <p>Le présent site web <strong>evoubabp.com</strong> est édité par :</p>
              <InfoCard>
                <InfoRow><strong>Raison sociale :</strong> Evoubabp Industries</InfoRow>
                <InfoRow><strong>Statut :</strong> Auto-entrepreneur</InfoRow>
                <InfoRow><strong>Responsable de publication :</strong> Davy Tardin</InfoRow>
                <InfoRow><strong>Adresse :</strong> France</InfoRow>
                <InfoRow><strong>Email :</strong> tardindavy@gmail.com</InfoRow>
                <InfoRow><strong>Téléphone :</strong> +33 7 66 45 07 71</InfoRow>
              </InfoCard>
            </SectionContent>
          </Section>

          <Section>
            <SectionIcon><FaServer /></SectionIcon>
            <SectionTitle>2. Hébergement</SectionTitle>
            <SectionContent>
              <p>Ce site est hébergé par :</p>
              <InfoCard>
                <InfoRow><strong>Hébergeur :</strong> Vercel Inc.</InfoRow>
                <InfoRow><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</InfoRow>
                <InfoRow><strong>Site web :</strong> https://vercel.com</InfoRow>
              </InfoCard>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>3. Propriété intellectuelle</SectionTitle>
            <SectionContent>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.)
                est la propriété exclusive d'Evoubabp Industries ou de ses partenaires et est protégé par les
                lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie
                des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans
                l'autorisation écrite préalable d'Evoubabp Industries.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient
                sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux
                dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>4. Limitation de responsabilité</SectionTitle>
            <SectionContent>
              <p>
                Evoubabp Industries s'efforce d'assurer au mieux l'exactitude et la mise à jour des
                informations diffusées sur ce site. Toutefois, Evoubabp Industries ne peut garantir
                l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p>
                En conséquence, Evoubabp Industries décline toute responsabilité :
              </p>
              <ul>
                <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site</li>
                <li>Et plus généralement, pour tous dommages, directs ou indirects, qu'elles qu'en soient les causes, origines, natures ou conséquences</li>
              </ul>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>5. Liens hypertextes</SectionTitle>
            <SectionContent>
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites internet. Evoubabp Industries
                n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu
                et aux éventuels collectes et traitements de données personnelles effectués par ces sites.
              </p>
              <p>
                La création de liens hypertextes vers le site evoubabp.com est soumise à l'accord préalable
                d'Evoubabp Industries.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>6. Droit applicable</SectionTitle>
            <SectionContent>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige,
                les tribunaux français seront seuls compétents.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionIcon><FaEnvelope /></SectionIcon>
            <SectionTitle>7. Contact</SectionTitle>
            <SectionContent>
              <p>
                Pour toute question relative aux présentes mentions légales ou pour toute demande concernant
                le site, vous pouvez nous contacter :
              </p>
              <ContactButtons>
                <ContactButton href="mailto:tardindavy@gmail.com">
                  <FaEnvelope /> tardindavy@gmail.com
                </ContactButton>
                <ContactButton href="https://wa.me/33766450771" target="_blank" rel="noopener noreferrer">
                  <FaPhone /> +33 7 66 45 07 71
                </ContactButton>
              </ContactButtons>
            </SectionContent>
          </Section>

        </motion.div>
      </ContentWrapper>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-height: 100vh;
  background: #0a0a0f;
  position: relative;
  overflow: hidden;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 40%);
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem 5rem;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2rem 1rem 4rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
    border-color: rgba(59, 130, 246, 0.3);
  }
`;

const PageTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const LastUpdate = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 3rem;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

const SectionIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
  border-radius: 10px;
  color: #3b82f6;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 1rem;
`;

const SectionContent = styled.div`
  color: #94a3b8;
  line-height: 1.8;

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  strong {
    color: #e2e8f0;
  }
`;

const InfoCard = styled.div`
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 1rem;
`;

const InfoRow = styled.p`
  margin-bottom: 0.5rem !important;

  &:last-child {
    margin-bottom: 0 !important;
  }
`;

const ContactButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
  }
`;
