'use client'

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { useState } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaCheckCircle,
  FaExclamationCircle
} from "react-icons/fa";

interface ContactSectionProps {
  id?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  projectType: "",
  budget: "",
  message: ""
};

const inputClassName =
  "w-full px-5 py-4 rounded-xl text-white text-base transition-all duration-300 outline-none placeholder:text-white/40 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.1)]";

const inputStyle = {
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
};

const inputFocusStyle = {
  borderColor: '#ffd700',
  background: 'rgba(255, 255, 255, 0.1)',
};

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      const mailtoLink = `mailto:tardindavy@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject} - ${formData.projectType}`
      )}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\nType de projet: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData(initialFormData);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = '#ffd700';
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
  };

  const socialPlatformColors: Record<string, { bg: string; border: string }> = {
    linkedin: { bg: '#0a66c2', border: '#0a66c2' },
    github: { bg: '#333', border: '#333' },
    whatsapp: { bg: '#25d366', border: '#25d366' },
  };

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <style>{`
        @keyframes contact-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes contact-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <section
        id={id || "contact"}
        className="relative py-16 px-4 overflow-hidden md:py-24 md:px-8"
        style={{
          background: 'linear-gradient(180deg, #4b0082 0%, #380062 50%, #2d004f 100%)',
        }}
      >
        {/* BackgroundPattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* GlowEffect */}
        <div
          className="absolute top-[30%] right-[10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 60%)',
          }}
        />

        <div className="relative max-w-[1200px] mx-auto z-[2]">
          <motion.div variants={fadeIn("up", "tween", 0.1, 0.8)}>
            <div className="text-center mb-8 md:mb-12">
              <span
                className="inline-block font-mono text-xs tracking-[0.3em] text-[#ffd700] px-4 py-2 rounded mb-6"
                style={{
                  background: 'rgba(255, 215, 0, 0.1)',
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                }}
              >
                CONTACT
              </span>
              <h2
                className="font-bold text-white mb-4"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                }}
              >
                Discutons de votre{' '}
                <span
                  className="bg-clip-text"
                  style={{
                    background: 'linear-gradient(135deg, #ffd700 0%, #ff9500 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  projet
                </span>
              </h2>
              <p className="text-[1.125rem] text-white/70 max-w-[500px] mx-auto leading-relaxed">
                Une idée ? Un projet ? Contactez-moi et transformons votre vision en réalité
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.5fr] md:gap-12">
            <motion.div variants={fadeIn("right", "spring", 0.2, 0.8)}>
              <div className="flex flex-col gap-6">
                {/* Email Card */}
                <div
                  className="flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 hover:translate-x-2"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl text-[#ffd700] text-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 149, 0, 0.1))',
                    }}
                  >
                    <FaEnvelope />
                  </div>
                  <div className="flex-1">
                    <span className="block text-[0.8rem] text-white/50 uppercase tracking-wider mb-1">
                      Email
                    </span>
                    <a
                      href="mailto:tardindavy@gmail.com"
                      className="text-[1.1rem] text-white no-underline transition-colors duration-300 hover:text-[#ffd700]"
                    >
                      tardindavy@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div
                  className="flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 hover:translate-x-2"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl text-[#ffd700] text-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 149, 0, 0.1))',
                    }}
                  >
                    <FaWhatsapp />
                  </div>
                  <div className="flex-1">
                    <span className="block text-[0.8rem] text-white/50 uppercase tracking-wider mb-1">
                      WhatsApp
                    </span>
                    <a
                      href="https://wa.me/33766450771"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[1.1rem] text-white no-underline transition-colors duration-300 hover:text-[#ffd700]"
                    >
                      +33 7 66 45 07 71
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div
                  className="flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 hover:translate-x-2"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl text-[#ffd700] text-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 149, 0, 0.1))',
                    }}
                  >
                    <FaMapMarkerAlt />
                  </div>
                  <div className="flex-1">
                    <span className="block text-[0.8rem] text-white/50 uppercase tracking-wider mb-1">
                      Localisation
                    </span>
                    <span className="block text-[1.1rem] text-white">
                      France, Europe
                    </span>
                    <span className="block text-[0.85rem] text-white/50 mt-1">
                      Disponible en remote worldwide
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-4">
                  {[
                    { href: "https://www.linkedin.com/in/davy-tardin-11a7a1159/", platform: "linkedin", icon: <FaLinkedin /> },
                    { href: "https://github.com/TardinDev", platform: "github", icon: <FaGithub /> },
                    { href: "https://wa.me/33766450771", platform: "whatsapp", icon: <FaWhatsapp /> },
                  ].map((social) => (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-xl text-white text-xl transition-all duration-300 hover:translate-y-[-4px]"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                      onMouseEnter={(e) => {
                        const colors = socialPlatformColors[social.platform];
                        e.currentTarget.style.background = colors.bg;
                        e.currentTarget.style.borderColor = colors.border;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                {/* Availability Badge */}
                <div
                  className="flex items-center gap-3 px-6 py-4 rounded-xl text-green-500 font-medium mt-4"
                  style={{
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                  }}
                >
                  <span
                    className="w-2.5 h-2.5 bg-green-500 rounded-full"
                    style={{ animation: 'contact-pulse 2s infinite' }}
                  />
                  Disponible pour de nouveaux projets
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn("left", "spring", 0.3, 0.8)}>
              <div
                className="rounded-3xl p-4 sm:p-6 md:p-10 backdrop-blur-[10px]"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[0.9rem] font-medium text-white/90 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        placeholder="Votre nom"
                        required
                        className={inputClassName}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-[0.9rem] font-medium text-white/90 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        placeholder="votre@email.com"
                        required
                        className={inputClassName}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.9rem] font-medium text-white/90 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      placeholder="Ex: Développement d'une application mobile"
                      required
                      className={inputClassName}
                      style={inputStyle}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[0.9rem] font-medium text-white/90 mb-2">
                        Type de projet
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        onFocus={handleInputFocus as any}
                        onBlur={handleInputBlur as any}
                        className={`${inputClassName} cursor-pointer [&_option]:bg-[#2d004f] [&_option]:text-white`}
                        style={inputStyle}
                      >
                        <option value="">Sélectionner...</option>
                        <option value="mobile">Application Mobile</option>
                        <option value="web">Application Web</option>
                        <option value="fullstack">Projet FullStack</option>
                        <option value="consulting">Consulting</option>
                        <option value="formation">Formation</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[0.9rem] font-medium text-white/90 mb-2">
                        Budget estimé
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        onFocus={handleInputFocus as any}
                        onBlur={handleInputBlur as any}
                        className={`${inputClassName} cursor-pointer [&_option]:bg-[#2d004f] [&_option]:text-white`}
                        style={inputStyle}
                      >
                        <option value="">Sélectionner...</option>
                        <option value="<5k">&lt; 5 000 EUR</option>
                        <option value="5k-10k">5 000 - 10 000 EUR</option>
                        <option value="10k-25k">10 000 - 25 000 EUR</option>
                        <option value="25k-50k">25 000 - 50 000 EUR</option>
                        <option value=">50k">&gt; 50 000 EUR</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.9rem] font-medium text-white/90 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={handleInputFocus as any}
                      onBlur={handleInputBlur as any}
                      placeholder="Décrivez votre projet, vos objectifs et vos besoins..."
                      rows={5}
                      required
                      className={`${inputClassName} resize-y min-h-[120px]`}
                      style={inputStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 border-none rounded-xl text-[#2d004f] text-[1.1rem] font-semibold cursor-pointer transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(255,215,0,0.4)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                    style={{
                      background: 'linear-gradient(135deg, #ffd700, #ff9500)',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="w-5 h-5 rounded-full"
                          style={{
                            border: '2px solid rgba(45, 0, 79, 0.3)',
                            borderTopColor: '#2d004f',
                            animation: 'contact-spin 0.8s linear infinite',
                          }}
                        />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Envoyer le message
                      </>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <div
                      className="flex items-center gap-3 px-6 py-4 rounded-xl text-[0.95rem] text-green-500"
                      style={{
                        background: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid rgba(34, 197, 94, 0.3)',
                      }}
                    >
                      <FaCheckCircle />
                      Message envoyé avec succès ! Je vous répondrai rapidement.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div
                      className="flex items-center gap-3 px-6 py-4 rounded-xl text-[0.95rem] text-red-500"
                      style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                      }}
                    >
                      <FaExclamationCircle />
                      Une erreur est survenue. Veuillez réessayer.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactSection;
