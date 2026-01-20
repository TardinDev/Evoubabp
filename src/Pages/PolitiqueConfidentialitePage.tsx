import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaShieldAlt, FaCookieBite, FaUserShield, FaEnvelope } from 'react-icons/fa';

export default function PolitiqueConfidentialitePage() {
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

          <PageTitle>Politique de Confidentialité</PageTitle>
          <LastUpdate>Dernière mise à jour : Janvier 2026</LastUpdate>

          <IntroSection>
            <p>
              Chez Evoubabp Industries, nous accordons une grande importance à la protection de vos
              données personnelles. Cette politique de confidentialité vous informe sur la manière
              dont nous collectons, utilisons et protégeons vos informations conformément au
              Règlement Général sur la Protection des Données (RGPD).
            </p>
          </IntroSection>

          <Section>
            <SectionIcon><FaUserShield /></SectionIcon>
            <SectionTitle>1. Responsable du traitement</SectionTitle>
            <SectionContent>
              <p>Le responsable du traitement des données personnelles est :</p>
              <InfoCard>
                <InfoRow><strong>Evoubabp Industries</strong></InfoRow>
                <InfoRow>Représenté par : Davy Tardin</InfoRow>
                <InfoRow>Email : tardindavy@gmail.com</InfoRow>
                <InfoRow>Téléphone : +33 7 66 45 07 71</InfoRow>
              </InfoCard>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>2. Données collectées</SectionTitle>
            <SectionContent>
              <p>Nous pouvons collecter les données suivantes :</p>

              <SubSection>
                <SubTitle>Données fournies directement par vous :</SubTitle>
                <ul>
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Message ou demande via le formulaire de contact</li>
                  <li>Informations relatives à un projet (dans le cadre d'une demande de devis)</li>
                </ul>
              </SubSection>

              <SubSection>
                <SubTitle>Données collectées automatiquement :</SubTitle>
                <ul>
                  <li>Adresse IP</li>
                  <li>Type de navigateur et version</li>
                  <li>Système d'exploitation</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Source de trafic (site référent)</li>
                </ul>
              </SubSection>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>3. Finalités du traitement</SectionTitle>
            <SectionContent>
              <p>Vos données sont collectées pour les finalités suivantes :</p>
              <ul>
                <li>Répondre à vos demandes de contact ou de devis</li>
                <li>Vous fournir nos services de développement d'applications</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Établir des statistiques de fréquentation anonymes</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>4. Base légale du traitement</SectionTitle>
            <SectionContent>
              <p>Le traitement de vos données repose sur :</p>
              <ul>
                <li><strong>Votre consentement</strong> : lorsque vous remplissez un formulaire de contact</li>
                <li><strong>L'exécution d'un contrat</strong> : dans le cadre de la fourniture de nos services</li>
                <li><strong>Notre intérêt légitime</strong> : pour améliorer nos services et la sécurité du site</li>
                <li><strong>Nos obligations légales</strong> : conservation des données de facturation</li>
              </ul>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>5. Durée de conservation</SectionTitle>
            <SectionContent>
              <p>Vos données personnelles sont conservées pendant :</p>
              <ul>
                <li><strong>Données de contact</strong> : 3 ans après le dernier contact</li>
                <li><strong>Données clients</strong> : durée de la relation commerciale + 5 ans (obligations légales)</li>
                <li><strong>Données de navigation</strong> : 13 mois maximum</li>
                <li><strong>Cookies</strong> : 13 mois maximum</li>
              </ul>
            </SectionContent>
          </Section>

          <Section>
            <SectionIcon><FaCookieBite /></SectionIcon>
            <SectionTitle>6. Cookies</SectionTitle>
            <SectionContent>
              <p>Notre site utilise des cookies pour :</p>

              <SubSection>
                <SubTitle>Cookies essentiels :</SubTitle>
                <p>
                  Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
                </p>
              </SubSection>

              <SubSection>
                <SubTitle>Cookies analytiques :</SubTitle>
                <p>
                  Nous utilisons Google Analytics pour comprendre comment les visiteurs utilisent notre site.
                  Ces données sont anonymisées et nous aident à améliorer l'expérience utilisateur.
                </p>
              </SubSection>

              <p>
                Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionIcon><FaShieldAlt /></SectionIcon>
            <SectionTitle>7. Vos droits</SectionTitle>
            <SectionContent>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <RightsGrid>
                <RightCard>
                  <RightTitle>Droit d'accès</RightTitle>
                  <RightDesc>Obtenir une copie de vos données personnelles</RightDesc>
                </RightCard>
                <RightCard>
                  <RightTitle>Droit de rectification</RightTitle>
                  <RightDesc>Corriger des données inexactes ou incomplètes</RightDesc>
                </RightCard>
                <RightCard>
                  <RightTitle>Droit à l'effacement</RightTitle>
                  <RightDesc>Demander la suppression de vos données</RightDesc>
                </RightCard>
                <RightCard>
                  <RightTitle>Droit à la portabilité</RightTitle>
                  <RightDesc>Recevoir vos données dans un format structuré</RightDesc>
                </RightCard>
                <RightCard>
                  <RightTitle>Droit d'opposition</RightTitle>
                  <RightDesc>Vous opposer au traitement de vos données</RightDesc>
                </RightCard>
                <RightCard>
                  <RightTitle>Droit à la limitation</RightTitle>
                  <RightDesc>Limiter le traitement de vos données</RightDesc>
                </RightCard>
              </RightsGrid>
              <p style={{ marginTop: '1.5rem' }}>
                Pour exercer ces droits, contactez-nous à : <strong>tardindavy@gmail.com</strong>
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>8. Sécurité des données</SectionTitle>
            <SectionContent>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
                protéger vos données personnelles contre tout accès non autorisé, modification,
                divulgation ou destruction :
              </p>
              <ul>
                <li>Chiffrement SSL/TLS pour toutes les communications</li>
                <li>Hébergement sécurisé chez Vercel</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Mises à jour régulières de sécurité</li>
              </ul>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>9. Transfert de données</SectionTitle>
            <SectionContent>
              <p>
                Vos données peuvent être transférées vers des pays situés en dehors de l'Union Européenne
                (notamment les États-Unis pour l'hébergement Vercel et les services Google Analytics).
              </p>
              <p>
                Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types,
                certifications) conformément au RGPD.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>10. Réclamation</SectionTitle>
            <SectionContent>
              <p>
                Si vous estimez que le traitement de vos données personnelles constitue une violation
                du RGPD, vous avez le droit d'introduire une réclamation auprès de la CNIL :
              </p>
              <InfoCard>
                <InfoRow><strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong></InfoRow>
                <InfoRow>3 Place de Fontenoy, TSA 80715</InfoRow>
                <InfoRow>75334 Paris Cedex 07</InfoRow>
                <InfoRow>Site web : www.cnil.fr</InfoRow>
              </InfoCard>
            </SectionContent>
          </Section>

          <Section>
            <SectionIcon><FaEnvelope /></SectionIcon>
            <SectionTitle>11. Contact</SectionTitle>
            <SectionContent>
              <p>
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :
              </p>
              <ContactButtons>
                <ContactButton href="mailto:tardindavy@gmail.com">
                  <FaEnvelope /> tardindavy@gmail.com
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
  margin-bottom: 2rem;
`;

const IntroSection = styled.div`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;

  p {
    color: #e2e8f0;
    line-height: 1.8;
    margin: 0;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
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

const SubSection = styled.div`
  margin: 1.5rem 0;
  padding-left: 1rem;
  border-left: 3px solid rgba(59, 130, 246, 0.3);
`;

const SubTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.75rem;
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

const RightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const RightCard = styled.div`
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.1);
    border-color: rgba(59, 130, 246, 0.3);
  }
`;

const RightTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #3b82f6;
  margin-bottom: 0.5rem;
`;

const RightDesc = styled.p`
  font-size: 0.9rem;
  color: #94a3b8;
  margin: 0 !important;
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
