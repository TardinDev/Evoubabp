'use client'

import { useState } from "react";
import { FaBrain, FaChartLine, FaRobot, FaLightbulb } from "react-icons/fa";

export default function MachineLearningPage() {
  const [activeExample, setActiveExample] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header
        className="text-white py-16 px-8 text-center"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <a
            href="/formations"
            className="text-white no-underline inline-block mb-8 py-2 px-4 border-2 border-white rounded-lg transition-all duration-300 hover:bg-white hover:text-[#667eea]"
          >
            {"\u2190"} Retour aux formations
          </a>
          <h1 className="text-5xl md:text-3xl mb-4 flex items-center justify-center gap-4">
            <FaBrain /> Apprentissage Automatique (Machine Learning)
          </h1>
          <p className="text-xl opacity-90">
            Decouvrez les fondamentaux du Machine Learning de maniere simple et intuitive
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2.5rem] md:text-[1.8rem] text-center mb-12 text-[#2d3748]">
            {"\u{1F914}"} Qu&apos;est-ce que le Machine Learning?
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <p className="text-xl leading-[1.8] text-[#4a5568] mb-8">
              Le Machine Learning (apprentissage automatique) est une branche de l&apos;intelligence artificielle
              qui permet aux ordinateurs d&apos;<strong>apprendre a partir de donnees</strong> sans etre explicitement programmes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-[#f7fafc]">
                <h3 className="text-xl mb-4 text-[#2d3748]">{"\u274C"} Programmation Traditionnelle</h3>
                <p className="text-[#4a5568] leading-relaxed [&>code]:bg-[#e2e8f0] [&>code]:py-0.5 [&>code]:px-2 [&>code]:rounded [&>code]:text-sm">
                  Vous ecrivez toutes les regles:<br/>
                  <code>Si temperature {'>'} 30{"\u00B0"}C alors &quot;Il fait chaud&quot;</code>
                </p>
              </div>
              <div className="p-6 rounded-lg bg-[#f7fafc]">
                <h3 className="text-xl mb-4 text-[#2d3748]">{"\u2705"} Machine Learning</h3>
                <p className="text-[#4a5568] leading-relaxed [&>code]:bg-[#e2e8f0] [&>code]:py-0.5 [&>code]:px-2 [&>code]:rounded [&>code]:text-sm">
                  L&apos;ordinateur apprend les regles:<br/>
                  <code>Analyser 1000 exemples de temperatures {"\u2192"} Deduire les regles</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de ML Section */}
      <section className="py-16 px-8 bg-[#f7fafc]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2.5rem] md:text-[1.8rem] text-center mb-12 text-[#2d3748]">
            {"\u{1F4DA}"} Les 3 Types Principaux de Machine Learning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-[5px]">
              <div className="text-5xl text-[#667eea] mb-4"><FaChartLine /></div>
              <h3 className="text-2xl text-[#2d3748] mb-4">1. Apprentissage Supervise</h3>
              <p className="text-[#4a5568] mb-6 leading-relaxed">
                L&apos;algorithme apprend a partir de <strong>donnees etiquetees</strong> (exemples avec reponses).
              </p>
              <div className="bg-[#edf2f7] p-6 rounded-lg mb-6">
                <h4 className="text-[#667eea] mb-2">{"\u{1F4A1}"} Exemple concret:</h4>
                <p className="text-[#2d3748] leading-relaxed text-[0.95rem]">
                  <strong>Detecter des spams</strong><br/>
                  {"\u2022"} Donnees: 10,000 emails marques &quot;spam&quot; ou &quot;non-spam&quot;<br/>
                  {"\u2022"} L&apos;algorithme apprend les caracteristiques des spams<br/>
                  {"\u2022"} Il peut ensuite classifier de nouveaux emails
                </p>
              </div>
              <div className="bg-[#f7fafc] p-4 rounded-lg text-sm text-[#4a5568] leading-[1.8]">
                <h5 className="text-[#2d3748] mb-2">{"\u{1F4CC}"} Utilisations:</h5>
                {"\u2022"} Reconnaissance d&apos;images<br/>
                {"\u2022"} Previsions de prix<br/>
                {"\u2022"} Diagnostic medical
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-[5px]">
              <div className="text-5xl text-[#667eea] mb-4"><FaRobot /></div>
              <h3 className="text-2xl text-[#2d3748] mb-4">2. Apprentissage Non Supervise</h3>
              <p className="text-[#4a5568] mb-6 leading-relaxed">
                L&apos;algorithme decouvre des <strong>patterns caches</strong> dans des donnees non etiquetees.
              </p>
              <div className="bg-[#edf2f7] p-6 rounded-lg mb-6">
                <h4 className="text-[#667eea] mb-2">{"\u{1F4A1}"} Exemple concret:</h4>
                <p className="text-[#2d3748] leading-relaxed text-[0.95rem]">
                  <strong>Segmentation de clients</strong><br/>
                  {"\u2022"} Donnees: Historique d&apos;achats de 50,000 clients<br/>
                  {"\u2022"} L&apos;algorithme groupe les clients similaires<br/>
                  {"\u2022"} Decouvre 5 types de clients differents
                </p>
              </div>
              <div className="bg-[#f7fafc] p-4 rounded-lg text-sm text-[#4a5568] leading-[1.8]">
                <h5 className="text-[#2d3748] mb-2">{"\u{1F4CC}"} Utilisations:</h5>
                {"\u2022"} Recommandations (Netflix, Amazon)<br/>
                {"\u2022"} Detection d&apos;anomalies<br/>
                {"\u2022"} Compression de donnees
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-[5px]">
              <div className="text-5xl text-[#667eea] mb-4"><FaLightbulb /></div>
              <h3 className="text-2xl text-[#2d3748] mb-4">3. Apprentissage par Renforcement</h3>
              <p className="text-[#4a5568] mb-6 leading-relaxed">
                L&apos;algorithme apprend par <strong>essais-erreurs</strong> avec un systeme de recompenses.
              </p>
              <div className="bg-[#edf2f7] p-6 rounded-lg mb-6">
                <h4 className="text-[#667eea] mb-2">{"\u{1F4A1}"} Exemple concret:</h4>
                <p className="text-[#2d3748] leading-relaxed text-[0.95rem]">
                  <strong>Jeu d&apos;echecs</strong><br/>
                  {"\u2022"} L&apos;IA joue des milliers de parties<br/>
                  {"\u2022"} Recompense: +1 si victoire, -1 si defaite<br/>
                  {"\u2022"} Elle ameliore sa strategie a chaque partie
                </p>
              </div>
              <div className="bg-[#f7fafc] p-4 rounded-lg text-sm text-[#4a5568] leading-[1.8]">
                <h5 className="text-[#2d3748] mb-2">{"\u{1F4CC}"} Utilisations:</h5>
                {"\u2022"} Voitures autonomes<br/>
                {"\u2022"} Jeux video (AlphaGo)<br/>
                {"\u2022"} Robotique
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Example Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2.5rem] md:text-[1.8rem] text-center mb-12 text-[#2d3748]">
            {"\u{1F3AE}"} Exemple Interactif: Classification de Fruits
          </h2>
          <p className="text-center text-xl text-[#4a5568] mb-12">
            Voyons comment un algorithme de Machine Learning apprend a classifier des fruits!
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {/* Step 1 */}
            <div
              onClick={() => setActiveExample('step1')}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:border-[#667eea] ${
                activeExample === 'step1'
                  ? 'bg-[#667eea] text-white border-[#667eea]'
                  : 'bg-white text-[#2d3748] border-[#e2e8f0]'
              }`}
            >
              <span className="inline-block w-10 h-10 rounded-full text-center leading-10 font-bold mr-4" style={{ background: 'currentColor', filter: 'invert(1)' }}>1</span>
              <span className="text-xl font-semibold">Collecter les donnees</span>
              {activeExample === 'step1' && (
                <div className="mt-6 pt-6 border-t border-white/30">
                  <p className="mb-4 leading-relaxed">
                    On mesure le <strong>poids</strong> et la <strong>couleur</strong> de 100 fruits:
                  </p>
                  <table className="w-full border-collapse bg-white/10 rounded-lg overflow-hidden">
                    <thead>
                      <tr>
                        <th className="p-3 text-left font-semibold bg-white/10 border-b border-white/20">Poids (g)</th>
                        <th className="p-3 text-left font-semibold bg-white/10 border-b border-white/20">Couleur (0-255)</th>
                        <th className="p-3 text-left font-semibold bg-white/10 border-b border-white/20">Fruit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-3 border-b border-white/20">150</td><td className="p-3 border-b border-white/20">200 (rouge)</td><td className="p-3 border-b border-white/20">{"\u{1F34E}"} Pomme</td></tr>
                      <tr><td className="p-3 border-b border-white/20">120</td><td className="p-3 border-b border-white/20">50 (orange)</td><td className="p-3 border-b border-white/20">{"\u{1F34A}"} Orange</td></tr>
                      <tr><td className="p-3 border-b border-white/20">180</td><td className="p-3 border-b border-white/20">80 (jaune)</td><td className="p-3 border-b border-white/20">{"\u{1F34C}"} Banane</td></tr>
                      <tr><td className="p-3">145</td><td className="p-3">195 (rouge)</td><td className="p-3">{"\u{1F34E}"} Pomme</td></tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Step 2 */}
            <div
              onClick={() => setActiveExample('step2')}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:border-[#667eea] ${
                activeExample === 'step2'
                  ? 'bg-[#667eea] text-white border-[#667eea]'
                  : 'bg-white text-[#2d3748] border-[#e2e8f0]'
              }`}
            >
              <span className="inline-block w-10 h-10 rounded-full text-center leading-10 font-bold mr-4" style={{ background: 'currentColor', filter: 'invert(1)' }}>2</span>
              <span className="text-xl font-semibold">Entrainer le modele</span>
              {activeExample === 'step2' && (
                <div className="mt-6 pt-6 border-t border-white/30">
                  <p className="mb-4 leading-relaxed">
                    L&apos;algorithme analyse les donnees et decouvre les patterns:
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                      <span className="text-3xl">{"\u{1F34E}"}</span>
                      <p className="flex-1 m-0"><strong>Pommes:</strong> Poids {"\u2248"} 140-160g, Couleur rouge (190-210)</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                      <span className="text-3xl">{"\u{1F34A}"}</span>
                      <p className="flex-1 m-0"><strong>Oranges:</strong> Poids {"\u2248"} 110-130g, Couleur orange (40-60)</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                      <span className="text-3xl">{"\u{1F34C}"}</span>
                      <p className="flex-1 m-0"><strong>Bananes:</strong> Poids {"\u2248"} 170-190g, Couleur jaune (70-90)</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step 3 */}
            <div
              onClick={() => setActiveExample('step3')}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:border-[#667eea] ${
                activeExample === 'step3'
                  ? 'bg-[#667eea] text-white border-[#667eea]'
                  : 'bg-white text-[#2d3748] border-[#e2e8f0]'
              }`}
            >
              <span className="inline-block w-10 h-10 rounded-full text-center leading-10 font-bold mr-4" style={{ background: 'currentColor', filter: 'invert(1)' }}>3</span>
              <span className="text-xl font-semibold">Predire de nouveaux fruits</span>
              {activeExample === 'step3' && (
                <div className="mt-6 pt-6 border-t border-white/30">
                  <p className="mb-4 leading-relaxed">
                    On donne un nouveau fruit au modele:
                  </p>
                  <div className="flex flex-col items-center gap-4 p-8 bg-white/10 rounded-lg mb-4">
                    <div className="p-4 bg-white/15 rounded-lg w-full text-center">
                      <strong>Nouveau fruit:</strong> Poids = 155g, Couleur = 205 (rouge)
                    </div>
                    <div className="text-3xl font-bold">{"\u2193"}</div>
                    <div className="p-4 bg-white/15 rounded-lg w-full text-center text-xl">
                      <strong>Prediction:</strong> {"\u{1F34E}"} C&apos;est une Pomme! (95% de confiance)
                    </div>
                  </div>
                  <p className="leading-relaxed">
                    Le modele compare les caracteristiques aux patterns appris et fait une prediction!
                  </p>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => {
              if (activeExample === null) setActiveExample('step1');
              else if (activeExample === 'step1') setActiveExample('step2');
              else if (activeExample === 'step2') setActiveExample('step3');
              else setActiveExample('step1');
            }}
            className="block mx-auto py-4 px-8 text-lg font-semibold text-white border-none rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
          >
            {activeExample === null ? '\u25B6\uFE0F Commencer l\'exemple' :
             activeExample === 'step3' ? '\u{1F504} Recommencer' : '\u27A1\uFE0F Etape suivante'}
          </button>
        </div>
      </section>

      {/* Concepts Cles Section */}
      <section className="py-16 px-8 bg-[#f7fafc]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2.5rem] md:text-[1.8rem] text-center mb-12 text-[#2d3748]">
            {"\u{1F511}"} Concepts Cles a Retenir
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            {[
              { title: "\u{1F4CA} Dataset (Jeu de donnees)", text: "Ensemble de donnees utilisees pour entrainer le modele. Plus il y a de donnees de qualite, meilleur sera le modele.", example: "Ex: 10,000 photos de chats et chiens pour entrainer un classificateur" },
              { title: "\u{1F3AF} Features (Caracteristiques)", text: "Les attributs mesurables des donnees que le modele utilise pour apprendre.", example: "Ex: Pour une maison \u2192 superficie, nombre de chambres, localisation" },
              { title: "\u{1F3CB}\uFE0F Training (Entrainement)", text: "Processus ou le modele apprend des patterns a partir des donnees d'entrainement.", example: "Ex: Montrer 80% des donnees au modele pour qu'il apprenne" },
              { title: "\u2705 Testing (Test)", text: "Evaluation du modele sur de nouvelles donnees qu'il n'a jamais vues.", example: "Ex: Utiliser 20% des donnees pour verifier la precision" },
              { title: "\u26A0\uFE0F Overfitting (Surapprentissage)", text: "Quand le modele memorise les donnees d'entrainement au lieu d'apprendre les vrais patterns.", example: "Ex: Un etudiant qui memorise sans comprendre \u2192 echoue aux nouveaux problemes" },
              { title: "\u{1F4C8} Accuracy (Precision)", text: "Pourcentage de predictions correctes sur l'ensemble des predictions.", example: "Ex: 95/100 predictions correctes = 95% de precision" }
            ].map((concept, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-l-4 border-[#667eea] shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                <h3 className="text-[#2d3748] mb-3 text-xl">{concept.title}</h3>
                <p className="text-[#4a5568] leading-relaxed mb-3">{concept.text}</p>
                <div className="bg-[#edf2f7] p-3 rounded-md text-sm text-[#667eea] italic">
                  {concept.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Algorithmes Populaires Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2.5rem] md:text-[1.8rem] text-center mb-12 text-[#2d3748]">
            {"\u{1F6E0}\uFE0F"} Algorithmes ML Populaires pour Debutants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
            {[
              { name: "Regression Lineaire", desc: "Predit une valeur numerique basee sur une relation lineaire.", example: "Predire le prix d'une maison selon sa superficie", formula: "y = mx + b\n(Prix = coefficient \u00D7 superficie + constante)" },
              { name: "K-Nearest Neighbors (KNN)", desc: "Classifie selon les K voisins les plus proches dans les donnees.", example: "Si 8/10 voisins proches sont des spams \u2192 C'est un spam", formula: "\"Dis-moi qui sont tes voisins, je te dirai qui tu es\"" },
              { name: "Decision Trees (Arbres de decision)", desc: "Prend des decisions via une serie de questions oui/non.", example: `Poids > 150g? \u2192 Oui \u2192 Couleur rouge? \u2192 Oui \u2192 Pomme!`, formula: "Comme un organigramme de decisions" },
              { name: "Neural Networks (Reseaux de neurones)", desc: "Inspire du cerveau humain, compose de neurones artificiels connectes.", example: "Reconnaissance faciale, traduction automatique", formula: "Base du Deep Learning et de l'IA moderne" }
            ].map((algo, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] text-center">
                <h3 className="text-[#667eea] text-xl mb-4">{algo.name}</h3>
                <p className="text-[#4a5568] mb-4 leading-relaxed">{algo.desc}</p>
                <div className="bg-[#f7fafc] p-4 rounded-lg mb-4 text-sm text-[#2d3748]">
                  <strong>Exemple:</strong> {algo.example}
                </div>
                <div className="bg-[#edf2f7] p-3 rounded-md font-mono text-sm text-[#667eea] whitespace-pre-line">
                  {algo.formula}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow ML Section */}
      <section className="py-16 px-8 bg-[#f7fafc]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2.5rem] md:text-[1.8rem] text-center mb-12 text-[#2d3748]">
            {"\u{1F504}"} Le Workflow d&apos;un Projet ML
          </h2>

          <div className="max-w-[600px] mx-auto">
            {[
              { num: "1\uFE0F\u20E3", title: "Definir le probleme", text: "Quelle question voulez-vous resoudre?" },
              { num: "2\uFE0F\u20E3", title: "Collecter les donnees", text: "Rassembler des donnees pertinentes et de qualite" },
              { num: "3\uFE0F\u20E3", title: "Nettoyer les donnees", text: "Supprimer erreurs, doublons, valeurs manquantes" },
              { num: "4\uFE0F\u20E3", title: "Choisir un algorithme", text: "Selectionner le bon outil pour le probleme" },
              { num: "5\uFE0F\u20E3", title: "Entrainer le modele", text: "Laisser l'algorithme apprendre des donnees" },
              { num: "6\uFE0F\u20E3", title: "Evaluer la performance", text: "Tester sur de nouvelles donnees" },
              { num: "7\uFE0F\u20E3", title: "Deployer en production", text: "Utiliser le modele pour de vraies predictions" }
            ].map((step, index, arr) => (
              <div key={index}>
                <div className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                  <div className="text-3xl">{step.num}</div>
                  <div className="flex-1">
                    <h3 className="text-[#2d3748] mb-2">{step.title}</h3>
                    <p className="text-[#4a5568] text-[0.95rem]">{step.text}</p>
                  </div>
                </div>
                {index < arr.length - 1 && (
                  <div className="text-center text-3xl text-[#667eea] my-2">{"\u2193"}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2.5rem] md:text-[1.8rem] text-center mb-12 text-[#2d3748]">
            {"\u{1F4DA}"} Pour Aller Plus Loin
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
              <h3 className="text-[#667eea] mb-4 text-xl">{"\u{1F40D}"} Python & Libraries</h3>
              <div className="text-[#4a5568] leading-[1.8]">
                {"\u2022"} <strong>NumPy:</strong> Calculs mathematiques<br/>
                {"\u2022"} <strong>Pandas:</strong> Manipulation de donnees<br/>
                {"\u2022"} <strong>Scikit-learn:</strong> Algorithmes ML<br/>
                {"\u2022"} <strong>TensorFlow/PyTorch:</strong> Deep Learning
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
              <h3 className="text-[#667eea] mb-4 text-xl">{"\u{1F4D6}"} Cours Recommandes</h3>
              <div className="text-[#4a5568] leading-[1.8]">
                {"\u2022"} Machine Learning by Andrew Ng (Coursera)<br/>
                {"\u2022"} Fast.ai - Practical Deep Learning<br/>
                {"\u2022"} Google&apos;s ML Crash Course<br/>
                {"\u2022"} Kaggle Learn
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
              <h3 className="text-[#667eea] mb-4 text-xl">{"\u{1F4BB}"} Projets Pratiques</h3>
              <div className="text-[#4a5568] leading-[1.8]">
                {"\u2022"} Prediction de prix immobiliers<br/>
                {"\u2022"} Classification d&apos;images (chats vs chiens)<br/>
                {"\u2022"} Systeme de recommandation de films<br/>
                {"\u2022"} Detection de fraude bancaire
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 px-8 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[2.5rem] md:text-[1.8rem] mb-4">
            {"\u{1F680}"} Pret a Apprendre le Machine Learning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez notre formation complete et devenez expert en ML en quelques mois!
          </p>
          <a
            href="/formations"
            className="inline-block py-4 px-10 text-lg font-semibold text-[#667eea] bg-white rounded-lg no-underline transition-transform duration-300 hover:scale-105"
          >
            Decouvrir nos formations
          </a>
        </div>
      </section>
    </div>
  );
}
