'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft, FaShieldAlt, FaCookieBite, FaUserShield, FaEnvelope } from 'react-icons/fa';

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* BackgroundGradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 40%)',
        }}
      />

      {/* ContentWrapper */}
      <div className="relative max-w-[900px] mx-auto px-4 md:px-8 py-8 md:py-12 pb-16 md:pb-20 z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* BackLink */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#94a3b8] no-underline text-[0.95rem] mb-8 py-2 px-4 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 ease-in-out hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/30"
          >
            <FaArrowLeft /> Retour à l&apos;accueil
          </Link>

          {/* PageTitle */}
          <h1
            className="font-bold bg-gradient-to-br from-blue-500 to-violet-500 bg-clip-text text-transparent mb-2"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Politique de Confidentialité
          </h1>

          {/* LastUpdate */}
          <p className="text-slate-500 text-sm mb-8">
            Dernière mise à jour : Janvier 2026
          </p>

          {/* IntroSection */}
          <div
            className="border border-blue-500/20 rounded-2xl px-8 py-6 mb-8"
            style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))' }}
          >
            <p className="text-slate-200 leading-[1.8] m-0">
              Chez Evoubabp Industries, nous accordons une grande importance à la protection de vos
              données personnelles. Cette politique de confidentialité vous informe sur la manière
              dont nous collectons, utilisons et protégeons vos informations conformément au
              Règlement Général sur la Protection des Données (RGPD).
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] text-blue-500 mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' }}
            >
              <FaUserShield />
            </div>
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              1. Responsable du traitement
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>Le responsable du traitement des données personnelles est :</p>
              <div className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-6 mt-4">
                <p className="mb-2 last:mb-0"><strong>Evoubabp Industries</strong></p>
                <p className="mb-2 last:mb-0">Représenté par : Davy Tardin</p>
                <p className="mb-2 last:mb-0">Email : tardindavy@gmail.com</p>
                <p className="!mb-0">Téléphone : +33 7 66 45 07 71</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              2. Données collectées
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>Nous pouvons collecter les données suivantes :</p>

              <div className="my-6 pl-4 border-l-[3px] border-blue-500/30">
                <h3 className="text-[1.1rem] font-semibold text-slate-200 mb-3">
                  Données fournies directement par vous :
                </h3>
                <ul>
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Message ou demande via le formulaire de contact</li>
                  <li>Informations relatives à un projet (dans le cadre d&apos;une demande de devis)</li>
                </ul>
              </div>

              <div className="my-6 pl-4 border-l-[3px] border-blue-500/30">
                <h3 className="text-[1.1rem] font-semibold text-slate-200 mb-3">
                  Données collectées automatiquement :
                </h3>
                <ul>
                  <li>Adresse IP</li>
                  <li>Type de navigateur et version</li>
                  <li>Système d&apos;exploitation</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Source de trafic (site référent)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              3. Finalités du traitement
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>Vos données sont collectées pour les finalités suivantes :</p>
              <ul>
                <li>Répondre à vos demandes de contact ou de devis</li>
                <li>Vous fournir nos services de développement d&apos;applications</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Établir des statistiques de fréquentation anonymes</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              4. Base légale du traitement
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>Le traitement de vos données repose sur :</p>
              <ul>
                <li><strong>Votre consentement</strong> : lorsque vous remplissez un formulaire de contact</li>
                <li><strong>L&apos;exécution d&apos;un contrat</strong> : dans le cadre de la fourniture de nos services</li>
                <li><strong>Notre intérêt légitime</strong> : pour améliorer nos services et la sécurité du site</li>
                <li><strong>Nos obligations légales</strong> : conservation des données de facturation</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              5. Durée de conservation
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>Vos données personnelles sont conservées pendant :</p>
              <ul>
                <li><strong>Données de contact</strong> : 3 ans après le dernier contact</li>
                <li><strong>Données clients</strong> : durée de la relation commerciale + 5 ans (obligations légales)</li>
                <li><strong>Données de navigation</strong> : 13 mois maximum</li>
                <li><strong>Cookies</strong> : 13 mois maximum</li>
              </ul>
            </div>
          </section>

          {/* Section 6 - Cookies */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] text-blue-500 mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' }}
            >
              <FaCookieBite />
            </div>
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              6. Cookies
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>Notre site utilise des cookies pour :</p>

              <div className="my-6 pl-4 border-l-[3px] border-blue-500/30">
                <h3 className="text-[1.1rem] font-semibold text-slate-200 mb-3">
                  Cookies essentiels :
                </h3>
                <p>
                  Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
                </p>
              </div>

              <div className="my-6 pl-4 border-l-[3px] border-blue-500/30">
                <h3 className="text-[1.1rem] font-semibold text-slate-200 mb-3">
                  Cookies analytiques :
                </h3>
                <p>
                  Nous utilisons Google Analytics pour comprendre comment les visiteurs utilisent notre site.
                  Ces données sont anonymisées et nous aident à améliorer l&apos;expérience utilisateur.
                </p>
              </div>

              <p>
                Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
              </p>
            </div>
          </section>

          {/* Section 7 - Vos droits */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] text-blue-500 mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' }}
            >
              <FaShieldAlt />
            </div>
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              7. Vos droits
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 mt-4">
                <div className="bg-blue-500/5 border border-blue-500/15 rounded-[10px] p-4 transition-all duration-300 ease-in-out hover:bg-blue-500/10 hover:border-blue-500/30">
                  <h4 className="text-base font-semibold text-blue-500 mb-2">Droit d&apos;accès</h4>
                  <p className="text-sm text-[#94a3b8] !m-0">Obtenir une copie de vos données personnelles</p>
                </div>
                <div className="bg-blue-500/5 border border-blue-500/15 rounded-[10px] p-4 transition-all duration-300 ease-in-out hover:bg-blue-500/10 hover:border-blue-500/30">
                  <h4 className="text-base font-semibold text-blue-500 mb-2">Droit de rectification</h4>
                  <p className="text-sm text-[#94a3b8] !m-0">Corriger des données inexactes ou incomplètes</p>
                </div>
                <div className="bg-blue-500/5 border border-blue-500/15 rounded-[10px] p-4 transition-all duration-300 ease-in-out hover:bg-blue-500/10 hover:border-blue-500/30">
                  <h4 className="text-base font-semibold text-blue-500 mb-2">Droit à l&apos;effacement</h4>
                  <p className="text-sm text-[#94a3b8] !m-0">Demander la suppression de vos données</p>
                </div>
                <div className="bg-blue-500/5 border border-blue-500/15 rounded-[10px] p-4 transition-all duration-300 ease-in-out hover:bg-blue-500/10 hover:border-blue-500/30">
                  <h4 className="text-base font-semibold text-blue-500 mb-2">Droit à la portabilité</h4>
                  <p className="text-sm text-[#94a3b8] !m-0">Recevoir vos données dans un format structuré</p>
                </div>
                <div className="bg-blue-500/5 border border-blue-500/15 rounded-[10px] p-4 transition-all duration-300 ease-in-out hover:bg-blue-500/10 hover:border-blue-500/30">
                  <h4 className="text-base font-semibold text-blue-500 mb-2">Droit d&apos;opposition</h4>
                  <p className="text-sm text-[#94a3b8] !m-0">Vous opposer au traitement de vos données</p>
                </div>
                <div className="bg-blue-500/5 border border-blue-500/15 rounded-[10px] p-4 transition-all duration-300 ease-in-out hover:bg-blue-500/10 hover:border-blue-500/30">
                  <h4 className="text-base font-semibold text-blue-500 mb-2">Droit à la limitation</h4>
                  <p className="text-sm text-[#94a3b8] !m-0">Limiter le traitement de vos données</p>
                </div>
              </div>
              <p className="mt-6">
                Pour exercer ces droits, contactez-nous à : <strong>tardindavy@gmail.com</strong>
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              8. Sécurité des données
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Nous mettons en oeuvre des mesures techniques et organisationnelles appropriées pour
                protéger vos données personnelles contre tout accès non autorisé, modification,
                divulgation ou destruction :
              </p>
              <ul>
                <li>Chiffrement SSL/TLS pour toutes les communications</li>
                <li>Hébergement sécurisé chez Vercel</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Mises à jour régulières de sécurité</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              9. Transfert de données
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Vos données peuvent être transférées vers des pays situés en dehors de l&apos;Union Européenne
                (notamment les États-Unis pour l&apos;hébergement Vercel et les services Google Analytics).
              </p>
              <p>
                Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types,
                certifications) conformément au RGPD.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              10. Réclamation
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Si vous estimez que le traitement de vos données personnelles constitue une violation
                du RGPD, vous avez le droit d&apos;introduire une réclamation auprès de la CNIL :
              </p>
              <div className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-6 mt-4">
                <p className="mb-2 last:mb-0"><strong>Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</strong></p>
                <p className="mb-2 last:mb-0">3 Place de Fontenoy, TSA 80715</p>
                <p className="mb-2 last:mb-0">75334 Paris Cedex 07</p>
                <p className="!mb-0">Site web : www.cnil.fr</p>
              </div>
            </div>
          </section>

          {/* Section 11 - Contact */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] text-blue-500 mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' }}
            >
              <FaEnvelope />
            </div>
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              11. Contact
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="mailto:tardindavy@gmail.com"
                  className="inline-flex items-center gap-2 py-3 px-6 text-white no-underline rounded-lg font-medium transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(59,130,246,0.3)]"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                >
                  <FaEnvelope /> tardindavy@gmail.com
                </a>
              </div>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}
