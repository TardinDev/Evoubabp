import { useState } from "react";
import styled from "styled-components";
import { FaBrain, FaChartLine, FaRobot, FaLightbulb } from "react-icons/fa";
import SEOHead from "../components/SEO/SEOHead";

export default function MachineLearningPage() {
  const [activeExample, setActiveExample] = useState<string | null>(null);

  return (
    <PageWrapper>
      <SEOHead
        title="Formation Machine Learning | Intelligence Artificielle | Evoubap"
        description="Découvrez les fondamentaux du Machine Learning : apprentissage supervisé, non supervisé, réseaux de neurones. Formation accessible et intuitive."
        canonical="https://evoubap.com/formations/machine-learning"
      />
      {/* Header Section */}
      <Header>
        <HeaderContent>
          <BackButton href="/formations">← Retour aux formations</BackButton>
          <HeaderTitle>
            <FaBrain /> Apprentissage Automatique (Machine Learning)
          </HeaderTitle>
          <HeaderSubtitle>
            Découvrez les fondamentaux du Machine Learning de manière simple et intuitive
          </HeaderSubtitle>
        </HeaderContent>
      </Header>

      {/* Introduction Section */}
      <Section>
        <Container>
          <SectionTitle>🤔 Qu'est-ce que le Machine Learning?</SectionTitle>
          <IntroContent>
            <IntroText>
              Le Machine Learning (apprentissage automatique) est une branche de l'intelligence artificielle
              qui permet aux ordinateurs d'<strong>apprendre à partir de données</strong> sans être explicitement programmés.
            </IntroText>

            <ComparisonBox>
              <ComparisonItem>
                <ComparisonTitle>❌ Programmation Traditionnelle</ComparisonTitle>
                <ComparisonText>
                  Vous écrivez toutes les règles:<br/>
                  <code>Si température {'>'} 30°C alors "Il fait chaud"</code>
                </ComparisonText>
              </ComparisonItem>
              <ComparisonItem>
                <ComparisonTitle>✅ Machine Learning</ComparisonTitle>
                <ComparisonText>
                  L'ordinateur apprend les règles:<br/>
                  <code>Analyser 1000 exemples de températures → Déduire les règles</code>
                </ComparisonText>
              </ComparisonItem>
            </ComparisonBox>
          </IntroContent>
        </Container>
      </Section>

      {/* Types de ML Section */}
      <Section $bgColor="#f7fafc">
        <Container>
          <SectionTitle>📚 Les 3 Types Principaux de Machine Learning</SectionTitle>

          <TypesGrid>
            <TypeCard>
              <TypeIcon><FaChartLine /></TypeIcon>
              <TypeTitle>1. Apprentissage Supervisé</TypeTitle>
              <TypeDescription>
                L'algorithme apprend à partir de <strong>données étiquetées</strong> (exemples avec réponses).
              </TypeDescription>
              <ExampleBox>
                <ExampleTitle>💡 Exemple concret:</ExampleTitle>
                <ExampleText>
                  <strong>Détecter des spams</strong><br/>
                  • Données: 10,000 emails marqués "spam" ou "non-spam"<br/>
                  • L'algorithme apprend les caractéristiques des spams<br/>
                  • Il peut ensuite classifier de nouveaux emails
                </ExampleText>
              </ExampleBox>
              <UseCases>
                <UseCaseTitle>📌 Utilisations:</UseCaseTitle>
                • Reconnaissance d'images<br/>
                • Prévisions de prix<br/>
                • Diagnostic médical
              </UseCases>
            </TypeCard>

            <TypeCard>
              <TypeIcon><FaRobot /></TypeIcon>
              <TypeTitle>2. Apprentissage Non Supervisé</TypeTitle>
              <TypeDescription>
                L'algorithme découvre des <strong>patterns cachés</strong> dans des données non étiquetées.
              </TypeDescription>
              <ExampleBox>
                <ExampleTitle>💡 Exemple concret:</ExampleTitle>
                <ExampleText>
                  <strong>Segmentation de clients</strong><br/>
                  • Données: Historique d'achats de 50,000 clients<br/>
                  • L'algorithme groupe les clients similaires<br/>
                  • Découvre 5 types de clients différents
                </ExampleText>
              </ExampleBox>
              <UseCases>
                <UseCaseTitle>📌 Utilisations:</UseCaseTitle>
                • Recommandations (Netflix, Amazon)<br/>
                • Détection d'anomalies<br/>
                • Compression de données
              </UseCases>
            </TypeCard>

            <TypeCard>
              <TypeIcon><FaLightbulb /></TypeIcon>
              <TypeTitle>3. Apprentissage par Renforcement</TypeTitle>
              <TypeDescription>
                L'algorithme apprend par <strong>essais-erreurs</strong> avec un système de récompenses.
              </TypeDescription>
              <ExampleBox>
                <ExampleTitle>💡 Exemple concret:</ExampleTitle>
                <ExampleText>
                  <strong>Jeu d'échecs</strong><br/>
                  • L'IA joue des milliers de parties<br/>
                  • Récompense: +1 si victoire, -1 si défaite<br/>
                  • Elle améliore sa stratégie à chaque partie
                </ExampleText>
              </ExampleBox>
              <UseCases>
                <UseCaseTitle>📌 Utilisations:</UseCaseTitle>
                • Voitures autonomes<br/>
                • Jeux vidéo (AlphaGo)<br/>
                • Robotique
              </UseCases>
            </TypeCard>
          </TypesGrid>
        </Container>
      </Section>

      {/* Interactive Example Section */}
      <Section>
        <Container>
          <SectionTitle>🎮 Exemple Interactif: Classification de Fruits</SectionTitle>
          <InteractiveDescription>
            Voyons comment un algorithme de Machine Learning apprend à classifier des fruits!
          </InteractiveDescription>

          <StepsContainer>
            <Step $active={activeExample === 'step1'} onClick={() => setActiveExample('step1')}>
              <StepNumber>1</StepNumber>
              <StepTitle>Collecter les données</StepTitle>
              {activeExample === 'step1' && (
                <StepContent>
                  <StepText>
                    On mesure le <strong>poids</strong> et la <strong>couleur</strong> de 100 fruits:
                  </StepText>
                  <DataTable>
                    <thead>
                      <tr>
                        <th>Poids (g)</th>
                        <th>Couleur (0-255)</th>
                        <th>Fruit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>150</td>
                        <td>200 (rouge)</td>
                        <td>🍎 Pomme</td>
                      </tr>
                      <tr>
                        <td>120</td>
                        <td>50 (orange)</td>
                        <td>🍊 Orange</td>
                      </tr>
                      <tr>
                        <td>180</td>
                        <td>80 (jaune)</td>
                        <td>🍌 Banane</td>
                      </tr>
                      <tr>
                        <td>145</td>
                        <td>195 (rouge)</td>
                        <td>🍎 Pomme</td>
                      </tr>
                    </tbody>
                  </DataTable>
                </StepContent>
              )}
            </Step>

            <Step $active={activeExample === 'step2'} onClick={() => setActiveExample('step2')}>
              <StepNumber>2</StepNumber>
              <StepTitle>Entraîner le modèle</StepTitle>
              {activeExample === 'step2' && (
                <StepContent>
                  <StepText>
                    L'algorithme analyse les données et découvre les patterns:
                  </StepText>
                  <PatternBox>
                    <Pattern>
                      <PatternIcon>🍎</PatternIcon>
                      <PatternText>
                        <strong>Pommes:</strong> Poids ≈ 140-160g, Couleur rouge (190-210)
                      </PatternText>
                    </Pattern>
                    <Pattern>
                      <PatternIcon>🍊</PatternIcon>
                      <PatternText>
                        <strong>Oranges:</strong> Poids ≈ 110-130g, Couleur orange (40-60)
                      </PatternText>
                    </Pattern>
                    <Pattern>
                      <PatternIcon>🍌</PatternIcon>
                      <PatternText>
                        <strong>Bananes:</strong> Poids ≈ 170-190g, Couleur jaune (70-90)
                      </PatternText>
                    </Pattern>
                  </PatternBox>
                </StepContent>
              )}
            </Step>

            <Step $active={activeExample === 'step3'} onClick={() => setActiveExample('step3')}>
              <StepNumber>3</StepNumber>
              <StepTitle>Prédire de nouveaux fruits</StepTitle>
              {activeExample === 'step3' && (
                <StepContent>
                  <StepText>
                    On donne un nouveau fruit au modèle:
                  </StepText>
                  <PredictionBox>
                    <PredictionInput>
                      <strong>Nouveau fruit:</strong> Poids = 155g, Couleur = 205 (rouge)
                    </PredictionInput>
                    <PredictionArrow>↓</PredictionArrow>
                    <PredictionOutput>
                      <strong>Prédiction:</strong> 🍎 C'est une Pomme! (95% de confiance)
                    </PredictionOutput>
                  </PredictionBox>
                  <StepText>
                    Le modèle compare les caractéristiques aux patterns appris et fait une prédiction!
                  </StepText>
                </StepContent>
              )}
            </Step>
          </StepsContainer>

          <TryItButton onClick={() => {
            if (activeExample === null) setActiveExample('step1');
            else if (activeExample === 'step1') setActiveExample('step2');
            else if (activeExample === 'step2') setActiveExample('step3');
            else setActiveExample('step1');
          }}>
            {activeExample === null ? '▶️ Commencer l\'exemple' :
             activeExample === 'step3' ? '🔄 Recommencer' : '➡️ Étape suivante'}
          </TryItButton>
        </Container>
      </Section>

      {/* Concepts Clés Section */}
      <Section $bgColor="#f7fafc">
        <Container>
          <SectionTitle>🔑 Concepts Clés à Retenir</SectionTitle>

          <ConceptsGrid>
            <ConceptCard>
              <ConceptTitle>📊 Dataset (Jeu de données)</ConceptTitle>
              <ConceptText>
                Ensemble de données utilisées pour entraîner le modèle. Plus il y a de données de qualité,
                meilleur sera le modèle.
              </ConceptText>
              <ConceptExample>
                Ex: 10,000 photos de chats et chiens pour entraîner un classificateur
              </ConceptExample>
            </ConceptCard>

            <ConceptCard>
              <ConceptTitle>🎯 Features (Caractéristiques)</ConceptTitle>
              <ConceptText>
                Les attributs mesurables des données que le modèle utilise pour apprendre.
              </ConceptText>
              <ConceptExample>
                Ex: Pour une maison → superficie, nombre de chambres, localisation
              </ConceptExample>
            </ConceptCard>

            <ConceptCard>
              <ConceptTitle>🏋️ Training (Entraînement)</ConceptTitle>
              <ConceptText>
                Processus où le modèle apprend des patterns à partir des données d'entraînement.
              </ConceptText>
              <ConceptExample>
                Ex: Montrer 80% des données au modèle pour qu'il apprenne
              </ConceptExample>
            </ConceptCard>

            <ConceptCard>
              <ConceptTitle>✅ Testing (Test)</ConceptTitle>
              <ConceptText>
                Évaluation du modèle sur de nouvelles données qu'il n'a jamais vues.
              </ConceptText>
              <ConceptExample>
                Ex: Utiliser 20% des données pour vérifier la précision
              </ConceptExample>
            </ConceptCard>

            <ConceptCard>
              <ConceptTitle>⚠️ Overfitting (Surapprentissage)</ConceptTitle>
              <ConceptText>
                Quand le modèle mémorise les données d'entraînement au lieu d'apprendre les vrais patterns.
              </ConceptText>
              <ConceptExample>
                Ex: Un étudiant qui mémorise sans comprendre → échoue aux nouveaux problèmes
              </ConceptExample>
            </ConceptCard>

            <ConceptCard>
              <ConceptTitle>📈 Accuracy (Précision)</ConceptTitle>
              <ConceptText>
                Pourcentage de prédictions correctes sur l'ensemble des prédictions.
              </ConceptText>
              <ConceptExample>
                Ex: 95/100 prédictions correctes = 95% de précision
              </ConceptExample>
            </ConceptCard>
          </ConceptsGrid>
        </Container>
      </Section>

      {/* Algorithmes Populaires Section */}
      <Section>
        <Container>
          <SectionTitle>🛠️ Algorithmes ML Populaires pour Débutants</SectionTitle>

          <AlgorithmsGrid>
            <AlgorithmCard>
              <AlgorithmName>Régression Linéaire</AlgorithmName>
              <AlgorithmDescription>
                Prédit une valeur numérique basée sur une relation linéaire.
              </AlgorithmDescription>
              <AlgorithmExample>
                <strong>Exemple:</strong> Prédire le prix d'une maison selon sa superficie
              </AlgorithmExample>
              <AlgorithmFormula>
                y = mx + b<br/>
                (Prix = coefficient × superficie + constante)
              </AlgorithmFormula>
            </AlgorithmCard>

            <AlgorithmCard>
              <AlgorithmName>K-Nearest Neighbors (KNN)</AlgorithmName>
              <AlgorithmDescription>
                Classifie selon les K voisins les plus proches dans les données.
              </AlgorithmDescription>
              <AlgorithmExample>
                <strong>Exemple:</strong> Si 8/10 voisins proches sont des spams → C'est un spam
              </AlgorithmExample>
              <AlgorithmFormula>
                "Dis-moi qui sont tes voisins, je te dirai qui tu es"
              </AlgorithmFormula>
            </AlgorithmCard>

            <AlgorithmCard>
              <AlgorithmName>Decision Trees (Arbres de décision)</AlgorithmName>
              <AlgorithmDescription>
                Prend des décisions via une série de questions oui/non.
              </AlgorithmDescription>
              <AlgorithmExample>
                <strong>Exemple:</strong> Poids {'>'} 150g? → Oui → Couleur rouge? → Oui → Pomme!
              </AlgorithmExample>
              <AlgorithmFormula>
                Comme un organigramme de décisions
              </AlgorithmFormula>
            </AlgorithmCard>

            <AlgorithmCard>
              <AlgorithmName>Neural Networks (Réseaux de neurones)</AlgorithmName>
              <AlgorithmDescription>
                Inspiré du cerveau humain, compose de neurones artificiels connectés.
              </AlgorithmDescription>
              <AlgorithmExample>
                <strong>Exemple:</strong> Reconnaissance faciale, traduction automatique
              </AlgorithmExample>
              <AlgorithmFormula>
                Base du Deep Learning et de l'IA moderne
              </AlgorithmFormula>
            </AlgorithmCard>
          </AlgorithmsGrid>
        </Container>
      </Section>

      {/* Workflow ML Section */}
      <Section $bgColor="#f7fafc">
        <Container>
          <SectionTitle>🔄 Le Workflow d'un Projet ML</SectionTitle>

          <WorkflowContainer>
            <WorkflowStep>
              <WorkflowNumber>1️⃣</WorkflowNumber>
              <WorkflowContent>
                <WorkflowTitle>Définir le problème</WorkflowTitle>
                <WorkflowText>Quelle question voulez-vous résoudre?</WorkflowText>
              </WorkflowContent>
            </WorkflowStep>
            <WorkflowArrow>↓</WorkflowArrow>

            <WorkflowStep>
              <WorkflowNumber>2️⃣</WorkflowNumber>
              <WorkflowContent>
                <WorkflowTitle>Collecter les données</WorkflowTitle>
                <WorkflowText>Rassembler des données pertinentes et de qualité</WorkflowText>
              </WorkflowContent>
            </WorkflowStep>
            <WorkflowArrow>↓</WorkflowArrow>

            <WorkflowStep>
              <WorkflowNumber>3️⃣</WorkflowNumber>
              <WorkflowContent>
                <WorkflowTitle>Nettoyer les données</WorkflowTitle>
                <WorkflowText>Supprimer erreurs, doublons, valeurs manquantes</WorkflowText>
              </WorkflowContent>
            </WorkflowStep>
            <WorkflowArrow>↓</WorkflowArrow>

            <WorkflowStep>
              <WorkflowNumber>4️⃣</WorkflowNumber>
              <WorkflowContent>
                <WorkflowTitle>Choisir un algorithme</WorkflowTitle>
                <WorkflowText>Sélectionner le bon outil pour le problème</WorkflowText>
              </WorkflowContent>
            </WorkflowStep>
            <WorkflowArrow>↓</WorkflowArrow>

            <WorkflowStep>
              <WorkflowNumber>5️⃣</WorkflowNumber>
              <WorkflowContent>
                <WorkflowTitle>Entraîner le modèle</WorkflowTitle>
                <WorkflowText>Laisser l'algorithme apprendre des données</WorkflowText>
              </WorkflowContent>
            </WorkflowStep>
            <WorkflowArrow>↓</WorkflowArrow>

            <WorkflowStep>
              <WorkflowNumber>6️⃣</WorkflowNumber>
              <WorkflowContent>
                <WorkflowTitle>Évaluer la performance</WorkflowTitle>
                <WorkflowText>Tester sur de nouvelles données</WorkflowText>
              </WorkflowContent>
            </WorkflowStep>
            <WorkflowArrow>↓</WorkflowArrow>

            <WorkflowStep>
              <WorkflowNumber>7️⃣</WorkflowNumber>
              <WorkflowContent>
                <WorkflowTitle>Déployer en production</WorkflowTitle>
                <WorkflowText>Utiliser le modèle pour de vraies prédictions</WorkflowText>
              </WorkflowContent>
            </WorkflowStep>
          </WorkflowContainer>
        </Container>
      </Section>

      {/* Resources Section */}
      <Section>
        <Container>
          <SectionTitle>📚 Pour Aller Plus Loin</SectionTitle>

          <ResourcesGrid>
            <ResourceCard>
              <ResourceTitle>🐍 Python & Libraries</ResourceTitle>
              <ResourceText>
                • <strong>NumPy:</strong> Calculs mathématiques<br/>
                • <strong>Pandas:</strong> Manipulation de données<br/>
                • <strong>Scikit-learn:</strong> Algorithmes ML<br/>
                • <strong>TensorFlow/PyTorch:</strong> Deep Learning
              </ResourceText>
            </ResourceCard>

            <ResourceCard>
              <ResourceTitle>📖 Cours Recommandés</ResourceTitle>
              <ResourceText>
                • Machine Learning by Andrew Ng (Coursera)<br/>
                • Fast.ai - Practical Deep Learning<br/>
                • Google's ML Crash Course<br/>
                • Kaggle Learn
              </ResourceText>
            </ResourceCard>

            <ResourceCard>
              <ResourceTitle>💻 Projets Pratiques</ResourceTitle>
              <ResourceText>
                • Prédiction de prix immobiliers<br/>
                • Classification d'images (chats vs chiens)<br/>
                • Système de recommandation de films<br/>
                • Détection de fraude bancaire
              </ResourceText>
            </ResourceCard>
          </ResourcesGrid>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle>🚀 Prêt à Apprendre le Machine Learning?</CTATitle>
          <CTAText>
            Rejoignez notre formation complète et devenez expert en ML en quelques mois!
          </CTAText>
          <CTAButton href="/formations">Découvrir nos formations</CTAButton>
        </CTAContent>
      </CTASection>
    </PageWrapper>
  );
}

// Styled Components
const PageWrapper = styled.div`
  min-height: 100vh;
  background: white;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BackButton = styled.a`
  color: white;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border: 2px solid white;
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    background: white;
    color: #667eea;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeaderSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
`;

const Section = styled.section<{ $bgColor?: string }>`
  padding: 4rem 2rem;
  background: ${props => props.$bgColor || 'white'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2d3748;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const IntroContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 2rem;
`;

const ComparisonBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ComparisonItem = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background: #f7fafc;
`;

const ComparisonTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #2d3748;
`;

const ComparisonText = styled.p`
  color: #4a5568;
  line-height: 1.6;

  code {
    background: #e2e8f0;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }
`;

const TypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TypeCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TypeIcon = styled.div`
  font-size: 3rem;
  color: #667eea;
  margin-bottom: 1rem;
`;

const TypeTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const TypeDescription = styled.p`
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ExampleBox = styled.div`
  background: #edf2f7;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const ExampleTitle = styled.h4`
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const ExampleText = styled.p`
  color: #2d3748;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const UseCases = styled.div`
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #4a5568;
  line-height: 1.8;
`;

const UseCaseTitle = styled.h5`
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const InteractiveDescription = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 3rem;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Step = styled.div<{ $active: boolean }>`
  background: ${props => props.$active ? '#667eea' : 'white'};
  color: ${props => props.$active ? 'white' : '#2d3748'};
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid ${props => props.$active ? '#667eea' : '#e2e8f0'};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #667eea;
  }
`;

const StepNumber = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  background: currentColor;
  color: ${props => props.color === 'white' ? '#667eea' : 'white'};
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  margin-right: 1rem;
  filter: invert(1);
`;

const StepTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

const StepContent = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.3);
`;

const StepText = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
  overflow: hidden;

  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }

  th {
    font-weight: 600;
    background: rgba(255,255,255,0.1);
  }
`;

const PatternBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Pattern = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
`;

const PatternIcon = styled.span`
  font-size: 2rem;
`;

const PatternText = styled.p`
  flex: 1;
  margin: 0;
`;

const PredictionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const PredictionInput = styled.div`
  padding: 1rem;
  background: rgba(255,255,255,0.15);
  border-radius: 8px;
  width: 100%;
  text-align: center;
`;

const PredictionArrow = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const PredictionOutput = styled.div`
  padding: 1rem;
  background: rgba(255,255,255,0.15);
  border-radius: 8px;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
`;

const TryItButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ConceptsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ConceptCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #667eea;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ConceptTitle = styled.h3`
  color: #2d3748;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
`;

const ConceptText = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 0.75rem;
`;

const ConceptExample = styled.div`
  background: #edf2f7;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #667eea;
  font-style: italic;
`;

const AlgorithmsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const AlgorithmCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
`;

const AlgorithmName = styled.h3`
  color: #667eea;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const AlgorithmDescription = styled.p`
  color: #4a5568;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const AlgorithmExample = styled.div`
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #2d3748;
`;

const AlgorithmFormula = styled.div`
  background: #edf2f7;
  padding: 0.75rem;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #667eea;
`;

const WorkflowContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const WorkflowStep = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const WorkflowNumber = styled.div`
  font-size: 2rem;
`;

const WorkflowContent = styled.div`
  flex: 1;
`;

const WorkflowTitle = styled.h3`
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const WorkflowText = styled.p`
  color: #4a5568;
  font-size: 0.95rem;
`;

const WorkflowArrow = styled.div`
  text-align: center;
  font-size: 2rem;
  color: #667eea;
  margin: 0.5rem 0;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ResourceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const ResourceTitle = styled.h3`
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const ResourceText = styled.div`
  color: #4a5568;
  line-height: 1.8;
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 4rem 2rem;
  text-align: center;
  color: white;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #667eea;
  background: white;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
