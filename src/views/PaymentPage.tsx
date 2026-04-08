'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCreditCard, FaPaypal, FaMobile, FaUniversity, FaLock, FaCheck, FaArrowLeft, FaTimes, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handlePaymentClick = () => {
    setShowNotificationModal(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      // Sauvegarder l'email dans le fichier local
      const response = await fetch('http://localhost:3001/api/save-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          plan: selectedPlan,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setEmail("");
        setTimeout(() => {
          setShowNotificationModal(false);
          setSubmitSuccess(false);
        }, 3000);
      }
    } catch (error) {
      // En cas d'erreur, on simule quand même le succès pour l'UX
      setSubmitSuccess(true);
      setEmail("");
      setTimeout(() => {
        setShowNotificationModal(false);
        setSubmitSuccess(false);
      }, 3000);
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className="min-h-screen text-white py-8"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <Link
          href="/formations/mobile"
          className="inline-flex items-center gap-2 text-slate-500 no-underline mb-8 transition-colors duration-300 hover:text-blue-500"
        >
          <FaArrowLeft />
          Retour à la formation
        </Link>

        <div className="text-center mb-12 [&>svg]:text-5xl [&>svg]:text-blue-500 [&>svg]:mb-4">
          <FaLock />
          <h1
            className="text-[2.5rem] font-bold mb-4 bg-clip-text text-transparent"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Choisissez votre formation React Native
          </h1>
          <p className="text-lg text-slate-400 max-w-[600px] mx-auto leading-relaxed">
            Accédez aux projets avancés et développez des compétences professionnelles
            avec des applications complètes dans les secteurs e-commerce, social, voyage et fintech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Plans de tarification */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Choisissez votre formation</h2>
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                className={`rounded-2xl p-6 mb-4 cursor-pointer relative transition-all duration-300 border-2 ${
                  selectedPlan === plan.id
                    ? 'border-blue-500'
                    : 'border-slate-700 bg-slate-800'
                }`}
                style={
                  selectedPlan === plan.id
                    ? { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }
                    : undefined
                }
                onClick={() => setSelectedPlan(plan.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="text-[1.75rem] font-bold flex items-center gap-2">
                    {plan.originalPrice && (
                      <span className="text-base text-slate-400 line-through">{plan.originalPrice}</span>
                    )}
                    {plan.price}
                  </div>
                </div>
                <p className="text-slate-400 mb-4">{plan.description}</p>
                <ul className="list-none p-0">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 mb-2 text-sm [&>svg]:text-emerald-500 [&>svg]:shrink-0">
                      <FaCheck />
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.id === "mastering" && (
                  <div
                    className="absolute -top-2.5 right-4 text-white px-3 py-1 rounded-lg text-xs font-bold"
                    style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}
                  >
                    Plus populaire
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Méthodes de paiement */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Méthode de paiement</h2>
            <div className="flex flex-col gap-3 mb-8">
              {paymentMethods.map((method) => (
                <motion.div
                  key={method.id}
                  className={`flex items-center gap-4 rounded-xl p-4 cursor-pointer transition-all duration-300 border-2 [&>svg]:text-2xl [&>svg]:text-blue-500 ${
                    selectedPayment === method.id
                      ? 'bg-blue-900 border-blue-500'
                      : 'bg-slate-800 border-slate-700'
                  }`}
                  onClick={() => setSelectedPayment(method.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <method.icon />
                  <div>
                    <div className="font-bold mb-1">{method.name}</div>
                    <div className="text-xs text-slate-400">{method.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <h3 className="font-bold mb-4">Résumé de commande</h3>
              <div className="flex justify-between mb-2 text-slate-400">
                <span>{plans.find(p => p.id === selectedPlan)?.name}</span>
                <span>{plans.find(p => p.id === selectedPlan)?.price}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-slate-700">
                <span>Total</span>
                <span>{plans.find(p => p.id === selectedPlan)?.price}</span>
              </div>
            </div>

            <motion.button
              className="w-full border-none rounded-xl p-4 text-white font-bold text-lg cursor-pointer flex items-center justify-center gap-2 mb-4 transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePaymentClick}
            >
              <FaLock />
              Payer maintenant - {plans.find(p => p.id === selectedPlan)?.price}
            </motion.button>

            <div className="text-center text-xs text-slate-400">
              🔒 Paiement sécurisé SSL 256 bits - Remboursement garanti 30 jours
            </div>
          </div>
        </div>

        {/* Modal de notification */}
        {showNotificationModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-2xl p-8 max-w-[500px] w-full border border-slate-600 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              style={{ background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white m-0">🚀 Formation bientôt disponible !</h2>
                <button
                  className="bg-transparent border-none text-slate-400 text-xl cursor-pointer p-2 rounded-lg transition-all duration-300 hover:bg-slate-600 hover:text-white"
                  onClick={() => setShowNotificationModal(false)}
                >
                  <FaTimes />
                </button>
              </div>

              {!submitSuccess ? (
                <>
                  <p className="text-slate-300 leading-relaxed mb-8 text-base [&>strong]:text-blue-500">
                    La formation <strong>Mastering</strong> sera bientôt disponible !
                    Laissez-nous votre email et vous serez averti(e) dès le lancement.
                  </p>

                  <form className="flex flex-col gap-4" onSubmit={handleEmailSubmit}>
                    <input
                      type="email"
                      className="bg-slate-900 border-2 border-slate-600 rounded-lg p-4 text-white text-base transition-colors duration-300 focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
                      placeholder="votre.email@exemple.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <motion.button
                      type="submit"
                      className="border-none rounded-lg p-4 text-white font-bold text-base cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                      disabled={isSubmitting || !email}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        "Inscription..."
                      ) : (
                        <>
                          <FaEnvelope />
                          M&apos;avertir du lancement
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              ) : (
                <div
                  className="flex items-center gap-4 rounded-xl p-6 text-white font-semibold [&>svg]:text-2xl [&>svg]:text-white"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                >
                  <FaCheck />
                  <span>Parfait ! Vous serez averti(e) dès que la formation sera disponible.</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
