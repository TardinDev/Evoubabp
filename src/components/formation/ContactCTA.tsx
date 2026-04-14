'use client'

import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const avantages = [
  "Code review de vos projets",
  "Aide sur vos blocages en temps réel",
  "Planning d'apprentissage sur mesure",
  "Sessions de mentorat en visio",
];

export default function ContactCTA() {
  return (
    <section className="py-20 px-8">
      <div
        className="max-w-[1000px] mx-auto rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Besoin d&apos;un accompagnement personnalis&eacute; ?
          </h2>
          <p className="text-lg md:text-xl text-center opacity-90 mb-10 max-w-[700px] mx-auto leading-relaxed">
            Progressez plus vite avec un suivi individuel adapt&eacute; &agrave; votre niveau et vos objectifs.
            Contactez Davy pour d&eacute;finir ensemble votre parcours.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-[600px] mx-auto">
            {avantages.map((avantage, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-300 text-lg flex-shrink-0" />
                <span className="text-white/95 font-medium">{avantage}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/33766450771?text=Bonjour%20Davy%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20un%20suivi%20personnalis%C3%A9%20pour%20ma%20formation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-[#25D366] text-white no-underline transition-all duration-300 hover:bg-[#1da851] hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp size={22} />
              Contacter via WhatsApp
            </a>
            <a
              href="mailto:tardindavy@gmail.com?subject=Suivi%20personnalis%C3%A9%20-%20Formation%20Evoubabp"
              className="flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-white/20 text-white border-2 border-white/40 no-underline transition-all duration-300 hover:bg-white/30 hover:scale-105 backdrop-blur-sm"
            >
              <IoIosMail size={22} />
              Envoyer un email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
