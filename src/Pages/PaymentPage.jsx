import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCreditCard, FaPaypal, FaMobile, FaUniversity, FaLock, FaCheck, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [selectedPayment, setSelectedPayment] = useState("card");

  const plans = [
    {
      id: "pro",
      name: "Formation Pro",
      price: "129€",
      description: "Maîtrisez les fondamentaux du développement mobile",
      features: [
        "RunSport - App E-commerce complète",
        "SocialConnect - Réseau social complet",
        "Code source complet pour chaque projet",
        "Vidéos tutoriels détaillées",
        "Support technique prioritaire",
        "Certificats de complétion",
        "Mises à jour gratuites à vie",
        "Accès communauté Discord"
      ]
    },
    {
      id: "mastering",
      name: "Formation Mastering",
      price: "149€",
      originalPrice: "199€",
      description: "Devenez un expert React Native avec 4 projets complets",
      features: [
        "Tout de la Formation Pro",
        "SkyBooker - App de réservation voyage", 
        "SendMoney - App fintech de transfert",
        "Guide de déploiement App Store/Play Store",
        "Templates UI/UX supplémentaires",
        "Masterclass architecture avancée",
        "Session mentoring 1-à-1 (30min)",
        "Accès communauté privée Slack",
        "Kit de ressources design (Figma)",
        "Roadmap carrière développeur mobile"
      ]
    }
  ];

  const paymentMethods = [
    {
      id: "card",
      name: "Carte bancaire",
      icon: FaCreditCard,
      description: "Visa, Mastercard, American Express"
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: FaPaypal,
      description: "Paiement sécurisé via PayPal"
    },
    {
      id: "mobile",
      name: "Paiement mobile",
      icon: FaMobile,
      description: "Orange Money, MTN Money, Moov Money"
    },
    {
      id: "bank",
      name: "Virement bancaire",
      icon: FaUniversity,
      description: "Virement direct depuis votre banque"
    }
  ];

  return (
    <PageWrapper>
      <Container>
        <BackLink to="/formations/mobile">
          <FaArrowLeft />
          Retour à la formation
        </BackLink>

        <Header>
          <FaLock />
          <Title>Choisissez votre formation React Native</Title>
          <Subtitle>
            Accédez aux projets avancés et développez des compétences professionnelles 
            avec des applications complètes dans les secteurs e-commerce, social, voyage et fintech.
          </Subtitle>
        </Header>

        <ContentGrid>
          {/* Plans de tarification */}
          <PlansSection>
            <SectionTitle>Choisissez votre formation</SectionTitle>
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                selected={selectedPlan === plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <PlanHeader>
                  <PlanName>{plan.name}</PlanName>
                  <PlanPrice>
                    {plan.originalPrice && (
                      <OriginalPrice>{plan.originalPrice}</OriginalPrice>
                    )}
                    {plan.price}
                  </PlanPrice>
                </PlanHeader>
                <PlanDescription>{plan.description}</PlanDescription>
                <FeaturesList>
                  {plan.features.map((feature, index) => (
                    <Feature key={index}>
                      <FaCheck />
                      {feature}
                    </Feature>
                  ))}
                </FeaturesList>
                {plan.id === "mastering" && <PopularBadge>Plus populaire</PopularBadge>}
              </PlanCard>
            ))}
          </PlansSection>

          {/* Méthodes de paiement */}
          <PaymentSection>
            <SectionTitle>Méthode de paiement</SectionTitle>
            <PaymentMethods>
              {paymentMethods.map((method) => (
                <PaymentMethod
                  key={method.id}
                  selected={selectedPayment === method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <method.icon />
                  <PaymentInfo>
                    <PaymentName>{method.name}</PaymentName>
                    <PaymentDesc>{method.description}</PaymentDesc>
                  </PaymentInfo>
                </PaymentMethod>
              ))}
            </PaymentMethods>

            <OrderSummary>
              <SummaryTitle>Résumé de commande</SummaryTitle>
              <SummaryItem>
                <span>{plans.find(p => p.id === selectedPlan)?.name}</span>
                <span>{plans.find(p => p.id === selectedPlan)?.price}</span>
              </SummaryItem>
              <SummaryTotal>
                <span>Total</span>
                <span>{plans.find(p => p.id === selectedPlan)?.price}</span>
              </SummaryTotal>
            </OrderSummary>

            <PaymentButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLock />
              Payer maintenant - {plans.find(p => p.id === selectedPlan)?.price}
            </PaymentButton>

            <SecurityNote>
              🔒 Paiement sécurisé SSL 256 bits - Remboursement garanti 30 jours
            </SecurityNote>
          </PaymentSection>
        </ContentGrid>
      </Container>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #ffffff;
  padding: 2rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #3b82f6;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  svg {
    font-size: 3rem;
    color: #3b82f6;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const PlansSection = styled.div``;

const PaymentSection = styled.div``;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #ffffff;
`;

const PlanCard = styled(motion.div)`
  background: ${props => props.selected ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : '#1e293b'};
  border: 2px solid ${props => props.selected ? '#3b82f6' : '#334155'};
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -10px;
  right: 1rem;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
`;

const PlanHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const PlanName = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
`;

const PlanPrice = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #94a3b8;
  text-decoration: line-through;
`;

const PlanDescription = styled.p`
  color: #94a3b8;
  margin-bottom: 1rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  svg {
    color: #10b981;
    flex-shrink: 0;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const PaymentMethod = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${props => props.selected ? '#1e40af' : '#1e293b'};
  border: 2px solid ${props => props.selected ? '#3b82f6' : '#334155'};
  border-radius: 0.75rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
    color: #3b82f6;
  }
`;

const PaymentInfo = styled.div``;

const PaymentName = styled.div`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const PaymentDesc = styled.div`
  font-size: 0.8rem;
  color: #94a3b8;
`;

const OrderSummary = styled.div`
  background: #1e293b;
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SummaryTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #94a3b8;
`;

const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.1rem;
  padding-top: 0.5rem;
  border-top: 1px solid #334155;
`;

const PaymentButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border: none;
  border-radius: 0.75rem;
  padding: 1rem;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SecurityNote = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: #94a3b8;
`; 