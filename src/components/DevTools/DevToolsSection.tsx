import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { FaRobot, FaBug, FaChartLine, FaShieldAlt, FaCode, FaBell, FaUserTie, FaLightbulb, FaBrain } from "react-icons/fa";

const DevToolsSection = () => {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Section>
        <Container>
          <motion.div variants={fadeIn("up", "tween", 0.1, 1)}>
            <Header>
              <Badge>
                <BadgeIcon><FaUserTie /></BadgeIcon>
                Expertise & Excellence
              </Badge>
              <Title>Développement Rigoureux, Assisté par l'IA</Title>
              <Subtitle>
                Chez TardinDavy, nous ne faisons pas du "vibe coding". Nous sommes d'abord des
                <HighlightText> développeurs experts</HighlightText> qui utilisent l'IA comme
                <HighlightText> accélérateur</HighlightText>, pas comme remplacement.
                Chaque ligne de code est <HighlightText>minutieusement scrutée</HighlightText> et validée.
              </Subtitle>
            </Header>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
            <PhilosophySection>
              <PhilosophyCard>
                <PhilosophyIcon color="#3b82f6">
                  <FaUserTie size={32} />
                </PhilosophyIcon>
                <PhilosophyContent>
                  <PhilosophyTitle>L'Humain d'abord</PhilosophyTitle>
                  <PhilosophyText>
                    L'expertise humaine reste au cœur du processus. L'IA propose,
                    <strong> le développeur décide, valide et optimise</strong>.
                  </PhilosophyText>
                </PhilosophyContent>
              </PhilosophyCard>

              <PhilosophyCard>
                <PhilosophyIcon color="#7c3aed">
                  <FaLightbulb size={32} />
                </PhilosophyIcon>
                <PhilosophyContent>
                  <PhilosophyTitle>IA = Accélérateur</PhilosophyTitle>
                  <PhilosophyText>
                    Les outils IA permettent de <strong>gagner du temps sur les tâches répétitives</strong>
                    pour se concentrer sur l'architecture et l'innovation.
                  </PhilosophyText>
                </PhilosophyContent>
              </PhilosophyCard>

              <PhilosophyCard>
                <PhilosophyIcon color="#e11d48">
                  <FaShieldAlt size={32} />
                </PhilosophyIcon>
                <PhilosophyContent>
                  <PhilosophyTitle>Contrôle Total</PhilosophyTitle>
                  <PhilosophyText>
                    Chaque suggestion d'IA est <strong>analysée, testée et validée</strong> selon
                    nos standards de qualité exigeants.
                  </PhilosophyText>
                </PhilosophyContent>
              </PhilosophyCard>
            </PhilosophySection>
          </motion.div>

          <SectionDivider>
            <DividerLine />
            <DividerText>Nos Outils d'Excellence</DividerText>
            <DividerLine />
          </SectionDivider>

          <ToolsGrid>
            {/* Claude Code Card */}
            <motion.div variants={fadeIn("up", "spring", 0.3, 1)}>
              <ToolCard gradient="linear-gradient(135deg, #D97706 0%, #B45309 100%)" featured>
                <FeaturedBadge>Assistant Principal</FeaturedBadge>
                <CardGlow color="#D97706" />

                <ToolHeader>
                  <IconWrapper color="#D97706">
                    <FaBrain size={40} />
                  </IconWrapper>
                  <ToolTitle>Claude Code</ToolTitle>
                  <ToolTagline>Assistant IA de Développement Expert</ToolTagline>
                </ToolHeader>

                <ToolDescription>
                  Claude Code est notre assistant de développement de confiance. Il accélère la création
                  de code, mais <strong>chaque suggestion est rigoureusement examinée</strong> par
                  TardinDavy avant intégration. L'IA propose, l'expert valide.
                </ToolDescription>

                <FeaturesList>
                  <FeatureItem>
                    <FeatureIcon color="#D97706">
                      <FaCode />
                    </FeatureIcon>
                    <FeatureText>
                      <FeatureTitle>Génération de Code Intelligente</FeatureTitle>
                      <FeatureDesc>
                        Accélère le développement en proposant des solutions pertinentes, toujours
                        <strong> revues et optimisées</strong> par un développeur expert avant validation
                      </FeatureDesc>
                    </FeatureText>
                  </FeatureItem>

                  <FeatureItem>
                    <FeatureIcon color="#D97706">
                      <FaUserTie />
                    </FeatureIcon>
                    <FeatureText>
                      <FeatureTitle>Validation Humaine Systématique</FeatureTitle>
                      <FeatureDesc>
                        Aucun code généré n'est intégré sans une <strong>analyse minutieuse</strong> :
                        architecture, performance, sécurité, maintenabilité et best practices
                      </FeatureDesc>
                    </FeatureText>
                  </FeatureItem>

                  <FeatureItem>
                    <FeatureIcon color="#D97706">
                      <FaLightbulb />
                    </FeatureIcon>
                    <FeatureText>
                      <FeatureTitle>Gain de Temps, Pas de Compromis</FeatureTitle>
                      <FeatureDesc>
                        Permet de se concentrer sur l'architecture et la logique métier complexe
                        en déléguant les tâches répétitives, <strong>sans sacrifier la qualité</strong>
                      </FeatureDesc>
                    </FeatureText>
                  </FeatureItem>
                </FeaturesList>

                <ImpactBadge color="#D97706">
                  <ImpactText>+400% de productivité avec contrôle qualité à 100%</ImpactText>
                </ImpactBadge>
              </ToolCard>
            </motion.div>

            {/* CodeRabbit Card */}
            <motion.div variants={fadeIn("left", "spring", 0.4, 1)}>
              <ToolCard gradient="linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)">
                <CardGlow color="#7C3AED" />

                <ToolHeader>
                  <IconWrapper color="#7C3AED">
                    <FaRobot size={40} />
                  </IconWrapper>
                  <ToolTitle>CodeRabbit</ToolTitle>
                  <ToolTagline>Revue de Code Intelligente</ToolTagline>
                </ToolHeader>

                <ToolDescription>
                  CodeRabbit est notre assistant IA qui révolutionne le processus de revue de code.
                  Il analyse automatiquement chaque ligne de code, détecte les anomalies et garantit
                  les meilleures pratiques de développement.
                </ToolDescription>

                <FeaturesList>
                  <FeatureItem>
                    <FeatureIcon color="#7C3AED">
                      <FaCode />
                    </FeatureIcon>
                    <FeatureText>
                      <FeatureTitle>Analyse Automatique</FeatureTitle>
                      <FeatureDesc>
                        Revue intelligente de chaque pull request avec détection de bugs,
                        vulnérabilités de sécurité et anti-patterns
                      </FeatureDesc>
                    </FeatureText>
                  </FeatureItem>

                  <FeatureItem>
                    <FeatureIcon color="#7C3AED">
                      <FaChartLine />
                    </FeatureIcon>
                    <FeatureText>
                      <FeatureTitle>Suggestions d'Amélioration</FeatureTitle>
                      <FeatureDesc>
                        Recommandations contextuelles pour optimiser les performances,
                        améliorer la lisibilité et réduire la complexité du code
                      </FeatureDesc>
                    </FeatureText>
                  </FeatureItem>

                  <FeatureItem>
                    <FeatureIcon color="#7C3AED">
                      <FaShieldAlt />
                    </FeatureIcon>
                    <FeatureText>
                      <FeatureTitle>Qualité Garantie</FeatureTitle>
                      <FeatureDesc>
                        Assurance qualité continue avec respect des standards de code et
                        prévention des régressions avant la fusion
                      </FeatureDesc>
                    </FeatureText>
                  </FeatureItem>
                </FeaturesList>

                <ImpactBadge color="#7C3AED">
                  <ImpactText>-60% de bugs détectés en amont</ImpactText>
                </ImpactBadge>
              </ToolCard>
            </motion.div>

            {/* Sentry Card */}
            <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
              <ToolCard gradient="linear-gradient(135deg, #E11D48 0%, #BE123C 100%)">
                <CardGlow color="#E11D48" />

                <ToolHeader>
                  <IconWrapper color="#E11D48">
                    <FaBug size={40} />
                  </IconWrapper>
                  <ToolTitle>Sentry</ToolTitle>
                  <ToolTagline>Monitoring en Temps Réel</ToolTagline>
                </ToolHeader>

                <ToolDescription>
                  Sentry est notre système de surveillance qui veille sur vos applications 24/7.
                  Il capture chaque erreur, trace son origine et nous alerte instantanément pour
                  une résolution ultra-rapide.
                </ToolDescription>

                <FeaturesList>
                  <FeatureItem>
                    <FeatureIcon color="#E11D48">
                      <FaBug />
                    </FeatureIcon>
                    <FeatureText>
                      <FeatureTitle>Détection Proactive</FeatureTitle>
                      <FeatureDesc>
                        Capture automatique des erreurs avec stack traces détaillées,
                        contexte utilisateur et informations d'environnement
                      </FeatureDesc>
                    </FeatureText>
                  </FeatureItem>

                  <FeatureItem>
                    <FeatureIcon color="#E11D48">
                      <FaBell />
                    </FeatureIcon>
                    <FeatureText>
                      <FeatureTitle>Alertes Instantanées</FeatureTitle>
                      <FeatureDesc>
                        Notifications en temps réel sur les incidents critiques avec
                        priorisation intelligente et escalade automatique
                      </FeatureDesc>
                    </FeatureText>
                  </FeatureItem>

                  <FeatureItem>
                    <FeatureIcon color="#E11D48">
                      <FaChartLine />
                    </FeatureIcon>
                    <FeatureText>
                      <FeatureTitle>Analyse Approfondie</FeatureTitle>
                      <FeatureDesc>
                        Tableaux de bord détaillés avec tendances, métriques de performance
                        et insights pour améliorer la stabilité des applications
                      </FeatureDesc>
                    </FeatureText>
                  </FeatureItem>
                </FeaturesList>

                <ImpactBadge color="#E11D48">
                  <ImpactText>99.9% de disponibilité garantie</ImpactText>
                </ImpactBadge>
              </ToolCard>
            </motion.div>
          </ToolsGrid>

          <motion.div variants={fadeIn("up", "tween", 0.7, 1)}>
            <ExpertiseSection>
              <ExpertiseBanner>
                <ExpertiseIcon>
                  <FaUserTie size={48} />
                </ExpertiseIcon>
                <ExpertiseContent>
                  <ExpertiseTitle>L'Expertise TardinDavy : Votre Garantie Qualité</ExpertiseTitle>
                  <ExpertiseDescription>
                    En tant que développeur expert, je ne me contente jamais de copier-coller du code généré par IA.
                    Chaque ligne est <strong>analysée, comprise, optimisée et testée</strong>. L'IA m'aide à aller plus vite,
                    mais c'est <strong>mon expertise qui garantit la qualité, la sécurité et la maintenabilité</strong> de vos projets.
                  </ExpertiseDescription>
                </ExpertiseContent>
              </ExpertiseBanner>
            </ExpertiseSection>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.8, 1)}>
            <BenefitsSection>
              <BenefitsTitle>L'Impact Concret sur Vos Projets</BenefitsTitle>
              <BenefitsGrid>
                <BenefitCard>
                  <BenefitIcon><FaChartLine /></BenefitIcon>
                  <BenefitNumber>95%</BenefitNumber>
                  <BenefitLabel>Réduction du temps de débogage</BenefitLabel>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon><FaShieldAlt /></BenefitIcon>
                  <BenefitNumber>100%</BenefitNumber>
                  <BenefitLabel>Code validé par un expert</BenefitLabel>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon><FaLightbulb /></BenefitIcon>
                  <BenefitNumber>3x</BenefitNumber>
                  <BenefitLabel>Plus rapide sans compromis qualité</BenefitLabel>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon><FaBug /></BenefitIcon>
                  <BenefitNumber>99.9%</BenefitNumber>
                  <BenefitLabel>De disponibilité garantie</BenefitLabel>
                </BenefitCard>
              </BenefitsGrid>
            </BenefitsSection>
          </motion.div>
        </Container>
      </Section>
    </motion.div>
  );
};

const Section = styled.section`
  padding: 6rem 2rem;
  background:
    linear-gradient(180deg, #0a0e1a 0%, #0f172a 50%, #1e293b 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 20%, rgba(217, 119, 6, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.12) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(225, 29, 72, 0.15) 0%, transparent 40%);
    pointer-events: none;
    animation: pulseGlow 8s ease-in-out infinite;
  }

  @keyframes pulseGlow {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 0.9; }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(217, 119, 6, 0.5), rgba(124, 58, 237, 0.5), rgba(225, 29, 72, 0.5), transparent);
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, rgba(217, 119, 6, 0.2), rgba(124, 58, 237, 0.2));
  border: 2px solid rgba(217, 119, 6, 0.4);
  border-radius: 50px;
  color: #fbbf24;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  box-shadow:
    0 0 20px rgba(217, 119, 6, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.05);
  animation: badgePulse 3s ease-in-out infinite;

  @keyframes badgePulse {
    0%, 100% {
      box-shadow:
        0 0 20px rgba(217, 119, 6, 0.3),
        inset 0 0 20px rgba(255, 255, 255, 0.05);
    }
    50% {
      box-shadow:
        0 0 30px rgba(217, 119, 6, 0.5),
        inset 0 0 30px rgba(255, 255, 255, 0.1);
    }
  }
`;

const BadgeIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #fbbf24;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #cbd5e1;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.9;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const HighlightText = styled.span`
  color: #fbbf24;
  font-weight: 600;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const PhilosophySection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0 4rem;
`;

const PhilosophyCard = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`;

const PhilosophyIcon = styled.div<{ color: string }>`
  width: 60px;
  height: 60px;
  min-width: 60px;
  background: ${props => props.color}20;
  border: 2px solid ${props => props.color}40;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
`;

const PhilosophyContent = styled.div`
  flex: 1;
`;

const PhilosophyTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
`;

const PhilosophyText = styled.p`
  font-size: 0.95rem;
  color: #cbd5e1;
  line-height: 1.7;

  strong {
    color: #fbbf24;
    font-weight: 600;
  }
`;

const SectionDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 4rem 0 3rem;
`;

const DividerLine = styled.div`
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(217, 119, 6, 0.5), transparent);
`;

const DividerText = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fbbf24;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ToolCard = styled.div<{ gradient: string; featured?: boolean }>`
  background: ${props => props.gradient};
  border-radius: 1.5rem;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border: ${props => props.featured
    ? '2px solid rgba(217, 119, 6, 0.5)'
    : '1px solid rgba(255, 255, 255, 0.1)'};
  box-shadow: ${props => props.featured
    ? '0 0 40px rgba(217, 119, 6, 0.3)'
    : '0 10px 30px rgba(0, 0, 0, 0.2)'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: ${props => props.featured
      ? '0 25px 70px rgba(217, 119, 6, 0.5)'
      : '0 20px 60px rgba(0, 0, 0, 0.4)'};
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #D97706;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const CardGlow = styled.div<{ color: string }>`
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, ${props => props.color}40 0%, transparent 70%);
  opacity: 0.3;
  pointer-events: none;
`;

const ToolHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

const IconWrapper = styled.div<{ color: string }>`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(5deg);
  }
`;

const ToolTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ToolTagline = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
`;

const ToolDescription = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;

  strong {
    color: #fbbf24;
    font-weight: 600;
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

const FeatureItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const FeatureIcon = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  font-size: 1.125rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FeatureText = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const FeatureDesc = styled.p`
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;

  strong {
    color: #fbbf24;
    font-weight: 600;
  }
`;

const ImpactBadge = styled.div<{ color: string }>`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  text-align: center;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 2px solid ${props => props.color}40;
`;

const ImpactText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
`;

const ExpertiseSection = styled.div`
  margin: 4rem 0 3rem;
`;

const ExpertiseBanner = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(217, 119, 6, 0.15), rgba(124, 58, 237, 0.15));
  border: 2px solid rgba(217, 119, 6, 0.3);
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 100% 100%, rgba(217, 119, 6, 0.2), transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
`;

const ExpertiseIcon = styled.div`
  width: 100px;
  height: 100px;
  min-width: 100px;
  background: linear-gradient(135deg, #D97706, #B45309);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 10px 40px rgba(217, 119, 6, 0.4);
  position: relative;
  z-index: 1;
`;

const ExpertiseContent = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;

const ExpertiseTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fbbf24;
  margin-bottom: 1rem;
`;

const ExpertiseDescription = styled.p`
  font-size: 1.1rem;
  color: #e2e8f0;
  line-height: 1.8;

  strong {
    color: #fbbf24;
    font-weight: 600;
  }
`;

const BenefitsSection = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 3rem 2rem;
  backdrop-filter: blur(10px);
`;

const BenefitsTitle = styled.h3`
  font-size: 2.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 3rem;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const BenefitCard = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(217, 119, 6, 0.4);
    box-shadow: 0 10px 30px rgba(217, 119, 6, 0.2);
  }
`;

const BenefitIcon = styled.div`
  font-size: 2rem;
  color: #fbbf24;
  margin-bottom: 1rem;
`;

const BenefitNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
`;

const BenefitLabel = styled.p`
  font-size: 1rem;
  color: #cbd5e1;
  font-weight: 500;
  line-height: 1.5;
`;

export default DevToolsSection;
