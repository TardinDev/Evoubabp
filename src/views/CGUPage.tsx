'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft, FaFileContract, FaHandshake, FaGavel, FaEnvelope } from 'react-icons/fa';

export default function CGUPage() {
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
            Conditions Générales d&apos;Utilisation
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
              Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation
              du site web evoubabp.com. En accédant à ce site, vous acceptez sans réserve les présentes
              conditions. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser ce site.
            </p>
          </div>

          {/* Article 1 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] text-blue-500 mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' }}
            >
              <FaFileContract />
            </div>
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 1 - Objet
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Les présentes CGU ont pour objet de définir les modalités et conditions d&apos;utilisation
                des services proposés sur le site evoubabp.com, ainsi que de définir les droits et
                obligations des parties dans ce cadre.
              </p>
              <p>
                Le site evoubabp.com est un site de présentation des services de développement
                d&apos;applications mobiles et web proposés par Evoubabp Industries.
              </p>
            </div>
          </section>

          {/* Article 2 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 2 - Mentions légales
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>Le site est édité par :</p>
              <div className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-6 mt-4">
                <p className="mb-2 last:mb-0"><strong>Evoubabp Industries</strong></p>
                <p className="mb-2 last:mb-0">Responsable : Davy Tardin</p>
                <p className="mb-2 last:mb-0">Email : tardindavy@gmail.com</p>
                <p className="!mb-0">Hébergeur : Vercel Inc.</p>
              </div>
            </div>
          </section>

          {/* Article 3 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 3 - Accès au site
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à Internet.
                Tous les coûts afférents à l&apos;accès au site (matériel informatique, connexion Internet, etc.)
                sont à la charge exclusive de l&apos;utilisateur.
              </p>
              <p>
                Evoubabp Industries met en oeuvre tous les moyens raisonnables pour assurer un accès
                continu au site, mais n&apos;est tenu à aucune obligation d&apos;y parvenir. L&apos;accès au site
                peut être interrompu à tout moment pour des raisons de maintenance, de mise à jour
                ou pour toute autre raison.
              </p>
            </div>
          </section>

          {/* Article 4 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] text-blue-500 mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' }}
            >
              <FaHandshake />
            </div>
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 4 - Services proposés
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>Le site evoubabp.com propose les services suivants :</p>
              <ul>
                <li>Présentation des compétences en développement d&apos;applications mobiles et web</li>
                <li>Showcase de projets réalisés</li>
                <li>Informations sur les formations disponibles</li>
                <li>Formulaire de contact et demande de devis</li>
                <li>Chatbot d&apos;assistance</li>
              </ul>
              <p>
                Evoubabp Industries se réserve le droit de modifier, suspendre ou supprimer tout
                ou partie des services à tout moment, sans préavis.
              </p>
            </div>
          </section>

          {/* Article 5 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 5 - Propriété intellectuelle
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                L&apos;ensemble des éléments du site (textes, images, logos, vidéos, graphismes, icônes,
                code source, etc.) est la propriété exclusive d&apos;Evoubabp Industries ou fait l&apos;objet
                d&apos;une autorisation d&apos;utilisation.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, transmission ou
                dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé
                que ce soit, et sur quelque support que ce soit, est interdite sans l&apos;autorisation
                écrite préalable d&apos;Evoubabp Industries.
              </p>
              <p>
                Toute utilisation non autorisée du site ou de son contenu constituerait une contrefaçon
                sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
              </p>
            </div>
          </section>

          {/* Article 6 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 6 - Responsabilités de l&apos;utilisateur
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>L&apos;utilisateur s&apos;engage à :</p>
              <ul>
                <li>Utiliser le site conformément à sa destination</li>
                <li>Ne pas porter atteinte au fonctionnement du site</li>
                <li>Ne pas tenter d&apos;accéder frauduleusement aux systèmes informatiques</li>
                <li>Ne pas diffuser de contenu illicite via le formulaire de contact ou le chatbot</li>
                <li>Fournir des informations exactes lors de ses demandes de contact</li>
                <li>Respecter les droits des tiers et les lois en vigueur</li>
              </ul>
              <p>
                En cas de non-respect de ces obligations, Evoubabp Industries se réserve le droit
                de bloquer l&apos;accès au site et d&apos;engager toute action en justice.
              </p>
            </div>
          </section>

          {/* Article 7 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 7 - Limitation de responsabilité
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Evoubabp Industries s&apos;efforce de fournir des informations aussi précises que possible.
                Toutefois, les informations présentes sur le site sont données à titre indicatif et
                ne sauraient engager la responsabilité d&apos;Evoubabp Industries.
              </p>
              <p>Evoubabp Industries ne pourra être tenu responsable :</p>
              <ul>
                <li>Des dommages directs ou indirects résultant de l&apos;utilisation du site</li>
                <li>De l&apos;impossibilité temporaire ou permanente d&apos;accéder au site</li>
                <li>De la présence de virus ou programmes malveillants sur le site</li>
                <li>Des informations contenues sur les sites tiers vers lesquels des liens sont proposés</li>
                <li>De tout préjudice résultant d&apos;une intrusion frauduleuse d&apos;un tiers</li>
              </ul>
            </div>
          </section>

          {/* Article 8 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 8 - Liens hypertextes
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Le site peut contenir des liens hypertextes vers d&apos;autres sites internet.
                Ces liens sont proposés à titre informatif et ne signifient pas qu&apos;Evoubabp Industries
                approuve ou valide le contenu de ces sites.
              </p>
              <p>
                Evoubabp Industries n&apos;exerce aucun contrôle sur ces sites et décline toute
                responsabilité quant à leur contenu et leur utilisation.
              </p>
              <p>
                La création de liens hypertextes vers le site evoubabp.com nécessite l&apos;autorisation
                préalable d&apos;Evoubabp Industries.
              </p>
            </div>
          </section>

          {/* Article 9 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 9 - Protection des données personnelles
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                La collecte et le traitement des données personnelles effectués sur ce site sont
                réalisés conformément au Règlement Général sur la Protection des Données (RGPD)
                et à la loi Informatique et Libertés.
              </p>
              <p>
                Pour plus d&apos;informations sur le traitement de vos données personnelles, veuillez
                consulter notre{' '}
                <Link
                  href="/politique-confidentialite"
                  className="text-blue-500 no-underline font-medium transition-colors duration-300 hover:text-violet-500 hover:underline"
                >
                  Politique de Confidentialité
                </Link>.
              </p>
            </div>
          </section>

          {/* Article 10 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 10 - Cookies
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Le site utilise des cookies pour améliorer l&apos;expérience utilisateur et réaliser
                des statistiques de visite. En continuant à naviguer sur le site, vous acceptez
                l&apos;utilisation des cookies.
              </p>
              <p>
                Pour plus d&apos;informations sur les cookies, consultez notre{' '}
                <Link
                  href="/politique-confidentialite"
                  className="text-blue-500 no-underline font-medium transition-colors duration-300 hover:text-violet-500 hover:underline"
                >
                  Politique de Confidentialité
                </Link>.
              </p>
            </div>
          </section>

          {/* Article 11 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 11 - Modification des CGU
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Evoubabp Industries se réserve le droit de modifier les présentes CGU à tout moment.
                Les modifications entrent en vigueur dès leur publication sur le site.
              </p>
              <p>
                Il est conseillé aux utilisateurs de consulter régulièrement cette page pour
                prendre connaissance des éventuelles modifications.
              </p>
              <p>
                L&apos;utilisation du site après modification des CGU vaut acceptation des nouvelles conditions.
              </p>
            </div>
          </section>

          {/* Article 12 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] text-blue-500 mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' }}
            >
              <FaGavel />
            </div>
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 12 - Droit applicable et juridiction
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Les présentes CGU sont régies par le droit français.
              </p>
              <p>
                En cas de litige relatif à l&apos;interprétation ou à l&apos;exécution des présentes CGU,
                les parties s&apos;efforceront de trouver une solution amiable. À défaut, le litige
                sera soumis aux tribunaux français compétents.
              </p>
            </div>
          </section>

          {/* Article 13 */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 13 - Nullité partielle
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Si une ou plusieurs stipulations des présentes CGU sont tenues pour non valides
                ou déclarées comme telles en application d&apos;une loi, d&apos;un règlement ou à la suite
                d&apos;une décision définitive d&apos;une juridiction compétente, les autres stipulations
                garderont toute leur force et leur portée.
              </p>
            </div>
          </section>

          {/* Article 14 - Contact */}
          <section className="mb-8 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] text-blue-500 mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' }}
            >
              <FaEnvelope />
            </div>
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              Article 14 - Contact
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Pour toute question concernant les présentes CGU, vous pouvez nous contacter :
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
