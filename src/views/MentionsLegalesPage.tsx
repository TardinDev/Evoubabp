'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft, FaBuilding, FaServer, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function MentionsLegalesPage() {
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
            Mentions Légales
          </h1>

          {/* LastUpdate */}
          <p className="text-slate-500 text-sm mb-12">
            Dernière mise à jour : Janvier 2026
          </p>

          {/* Section 1 */}
          <section className="mb-10 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] text-blue-500 mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' }}
            >
              <FaBuilding />
            </div>
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              1. Éditeur du site
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>Le présent site web <strong>evoubabp.com</strong> est édité par :</p>
              <div className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-6 mt-4">
                <p className="mb-2 last:mb-0"><strong>Raison sociale :</strong> Evoubabp Industries</p>
                <p className="mb-2 last:mb-0"><strong>Statut :</strong> Auto-entrepreneur</p>
                <p className="mb-2 last:mb-0"><strong>Responsable de publication :</strong> Davy Tardin</p>
                <p className="mb-2 last:mb-0"><strong>Adresse :</strong> France</p>
                <p className="mb-2 last:mb-0"><strong>Email :</strong> tardindavy@gmail.com</p>
                <p className="!mb-0"><strong>Téléphone :</strong> +33 7 66 45 07 71</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] text-blue-500 mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' }}
            >
              <FaServer />
            </div>
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              2. Hébergement
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>Ce site est hébergé par :</p>
              <div className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-6 mt-4">
                <p className="mb-2 last:mb-0"><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p className="mb-2 last:mb-0"><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                <p className="!mb-0"><strong>Site web :</strong> https://vercel.com</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              3. Propriété intellectuelle
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.)
                est la propriété exclusive d&apos;Evoubabp Industries ou de ses partenaires et est protégé par les
                lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie
                des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans
                l&apos;autorisation écrite préalable d&apos;Evoubabp Industries.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient
                sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux
                dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              4. Limitation de responsabilité
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Evoubabp Industries s&apos;efforce d&apos;assurer au mieux l&apos;exactitude et la mise à jour des
                informations diffusées sur ce site. Toutefois, Evoubabp Industries ne peut garantir
                l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p>
                En conséquence, Evoubabp Industries décline toute responsabilité :
              </p>
              <ul>
                <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                <li>Pour tous dommages résultant d&apos;une intrusion frauduleuse d&apos;un tiers ayant entraîné une modification des informations mises à disposition sur le site</li>
                <li>Et plus généralement, pour tous dommages, directs ou indirects, qu&apos;elles qu&apos;en soient les causes, origines, natures ou conséquences</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              5. Liens hypertextes
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Le site peut contenir des liens hypertextes vers d&apos;autres sites internet. Evoubabp Industries
                n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu
                et aux éventuels collectes et traitements de données personnelles effectués par ces sites.
              </p>
              <p>
                La création de liens hypertextes vers le site evoubabp.com est soumise à l&apos;accord préalable
                d&apos;Evoubabp Industries.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-10 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              6. Droit applicable
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige,
                les tribunaux français seront seuls compétents.
              </p>
            </div>
          </section>

          {/* Section 7 - Contact */}
          <section className="mb-10 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] text-blue-500 mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' }}
            >
              <FaEnvelope />
            </div>
            <h2 className="text-[1.4rem] font-semibold text-slate-200 mb-4">
              7. Contact
            </h2>
            <div className="text-[#94a3b8] leading-[1.8] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-6 [&_ul_li]:mb-2 [&_strong]:text-slate-200">
              <p>
                Pour toute question relative aux présentes mentions légales ou pour toute demande concernant
                le site, vous pouvez nous contacter :
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="mailto:tardindavy@gmail.com"
                  className="inline-flex items-center gap-2 py-3 px-6 text-white no-underline rounded-lg font-medium transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(59,130,246,0.3)]"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                >
                  <FaEnvelope /> tardindavy@gmail.com
                </a>
                <a
                  href="https://wa.me/33766450771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 text-white no-underline rounded-lg font-medium transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(59,130,246,0.3)]"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                >
                  <FaPhone /> +33 7 66 45 07 71
                </a>
              </div>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}
