import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaFileContract, FaHandshake, FaGavel, FaEnvelope } from 'react-icons/fa';

export default function CGUPage() {
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

          <PageTitle>Conditions Générales d'Utilisation</PageTitle>
          <LastUpdate>Dernière mise à jour : Janvier 2026</LastUpdate>

          <IntroSection>
            <p>
              Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation
              du site web evoubabp.com. En accédant à ce site, vous acceptez sans réserve les présentes
              conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
            </p>
          </IntroSection>

          <Section>
            <SectionIcon><FaFileContract /></SectionIcon>
            <SectionTitle>Article 1 - Objet</SectionTitle>
            <SectionContent>
              <p>
                Les présentes CGU ont pour objet de définir les modalités et conditions d'utilisation
                des services proposés sur le site evoubabp.com, ainsi que de définir les droits et
                obligations des parties dans ce cadre.
              </p>
              <p>
                Le site evoubabp.com est un site de présentation des services de développement
                d'applications mobiles et web proposés par Evoubabp Industries.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Article 2 - Mentions légales</SectionTitle>
            <SectionContent>
              <p>Le site est édité par :</p>
              <InfoCard>
                <InfoRow><strong>Evoubabp Industries</strong></InfoRow>
                <InfoRow>Responsable : Davy Tardin</InfoRow>
                <InfoRow>Email : tardindavy@gmail.com</InfoRow>
                <InfoRow>Hébergeur : Vercel Inc.</InfoRow>
              </InfoCard>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Article 3 - Accès au site</SectionTitle>
            <SectionContent>
              <p>
                Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
                Tous les coûts afférents à l'accès au site (matériel informatique, connexion Internet, etc.)
                sont à la charge exclusive de l'utilisateur.
              </p>
              <p>
                Evoubabp Industries met en œuvre tous les moyens raisonnables pour assurer un accès
                continu au site, mais n'est tenu à aucune obligation d'y parvenir. L'accès au site
                peut être interrompu à tout moment pour des raisons de maintenance, de mise à jour
                ou pour toute autre raison.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionIcon><FaHandshake /></SectionIcon>
            <SectionTitle>Article 4 - Services proposés</SectionTitle>
            <SectionContent>
              <p>Le site evoubabp.com propose les services suivants :</p>
              <ul>
                <li>Présentation des compétences en développement d'applications mobiles et web</li>
                <li>Showcase de projets réalisés</li>
                <li>Informations sur les formations disponibles</li>
                <li>Formulaire de contact et demande de devis</li>
                <li>Chatbot d'assistance</li>
              </ul>
              <p>
                Evoubabp Industries se réserve le droit de modifier, suspendre ou supprimer tout
                ou partie des services à tout moment, sans préavis.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Article 5 - Propriété intellectuelle</SectionTitle>
            <SectionContent>
              <p>
                L'ensemble des éléments du site (textes, images, logos, vidéos, graphismes, icônes,
                code source, etc.) est la propriété exclusive d'Evoubabp Industries ou fait l'objet
                d'une autorisation d'utilisation.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, transmission ou
                dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé
                que ce soit, et sur quelque support que ce soit, est interdite sans l'autorisation
                écrite préalable d'Evoubabp Industries.
              </p>
              <p>
                Toute utilisation non autorisée du site ou de son contenu constituerait une contrefaçon
                sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Article 6 - Responsabilités de l'utilisateur</SectionTitle>
            <SectionContent>
              <p>L'utilisateur s'engage à :</p>
              <ul>
                <li>Utiliser le site conformément à sa destination</li>
                <li>Ne pas porter atteinte au fonctionnement du site</li>
                <li>Ne pas tenter d'accéder frauduleusement aux systèmes informatiques</li>
                <li>Ne pas diffuser de contenu illicite via le formulaire de contact ou le chatbot</li>
                <li>Fournir des informations exactes lors de ses demandes de contact</li>
                <li>Respecter les droits des tiers et les lois en vigueur</li>
              </ul>
              <p>
                En cas de non-respect de ces obligations, Evoubabp Industries se réserve le droit
                de bloquer l'accès au site et d'engager toute action en justice.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Article 7 - Limitation de responsabilité</SectionTitle>
            <SectionContent>
              <p>
                Evoubabp Industries s'efforce de fournir des informations aussi précises que possible.
                Toutefois, les informations présentes sur le site sont données à titre indicatif et
                ne sauraient engager la responsabilité d'Evoubabp Industries.
              </p>
              <p>Evoubabp Industries ne pourra être tenu responsable :</p>
              <ul>
                <li>Des dommages directs ou indirects résultant de l'utilisation du site</li>
                <li>De l'impossibilité temporaire ou permanente d'accéder au site</li>
                <li>De la présence de virus ou programmes malveillants sur le site</li>
                <li>Des informations contenues sur les sites tiers vers lesquels des liens sont proposés</li>
                <li>De tout préjudice résultant d'une intrusion frauduleuse d'un tiers</li>
              </ul>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Article 8 - Liens hypertextes</SectionTitle>
            <SectionContent>
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites internet.
                Ces liens sont proposés à titre informatif et ne signifient pas qu'Evoubabp Industries
                approuve ou valide le contenu de ces sites.
              </p>
              <p>
                Evoubabp Industries n'exerce aucun contrôle sur ces sites et décline toute
                responsabilité quant à leur contenu et leur utilisation.
              </p>
              <p>
                La création de liens hypertextes vers le site evoubabp.com nécessite l'autorisation
                préalable d'Evoubabp Industries.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Article 9 - Protection des données personnelles</SectionTitle>
            <SectionContent>
              <p>
                La collecte et le traitement des données personnelles effectués sur ce site sont
                réalisés conformément au Règlement Général sur la Protection des Données (RGPD)
                et à la loi Informatique et Libertés.
              </p>
              <p>
                Pour plus d'informations sur le traitement de vos données personnelles, veuillez
                consulter notre <StyledLink to="/politique-confidentialite">Politique de Confidentialité</StyledLink>.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Article 10 - Cookies</SectionTitle>
            <SectionContent>
              <p>
                Le site utilise des cookies pour améliorer l'expérience utilisateur et réaliser
                des statistiques de visite. En continuant à naviguer sur le site, vous acceptez
                l'utilisation des cookies.
              </p>
              <p>
                Pour plus d'informations sur les cookies, consultez notre{' '}
                <StyledLink to="/politique-confidentialite">Politique de Confidentialité</StyledLink>.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Article 11 - Modification des CGU</SectionTitle>
            <SectionContent>
              <p>
                Evoubabp Industries se réserve le droit de modifier les présentes CGU à tout moment.
                Les modifications entrent en vigueur dès leur publication sur le site.
              </p>
              <p>
                Il est conseillé aux utilisateurs de consulter régulièrement cette page pour
                prendre connaissance des éventuelles modifications.
              </p>
              <p>
                L'utilisation du site après modification des CGU vaut acceptation des nouvelles conditions.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionIcon><FaGavel /></SectionIcon>
            <SectionTitle>Article 12 - Droit applicable et juridiction</SectionTitle>
            <SectionContent>
              <p>
                Les présentes CGU sont régies par le droit français.
              </p>
              <p>
                En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGU,
                les parties s'efforceront de trouver une solution amiable. À défaut, le litige
                sera soumis aux tribunaux français compétents.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Article 13 - Nullité partielle</SectionTitle>
            <SectionContent>
              <p>
                Si une ou plusieurs stipulations des présentes CGU sont tenues pour non valides
                ou déclarées comme telles en application d'une loi, d'un règlement ou à la suite
                d'une décision définitive d'une juridiction compétente, les autres stipulations
                garderont toute leur force et leur portée.
              </p>
            </SectionContent>
          </Section>

          <Section>
            <SectionIcon><FaEnvelope /></SectionIcon>
            <SectionTitle>Article 14 - Contact</SectionTitle>
            <SectionContent>
              <p>
                Pour toute question concernant les présentes CGU, vous pouvez nous contacter :
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

const StyledLink = styled(Link)`
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #8b5cf6;
    text-decoration: underline;
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
