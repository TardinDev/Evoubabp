'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'
import { FaStripe, FaPaypal, FaApplePay, FaGooglePay, FaUniversity, FaMobileAlt, FaBitcoin, FaShieldAlt, FaCheckCircle, FaFileSignature, FaClipboardList } from 'react-icons/fa'
import { useTranslation } from '../../hooks/useTranslation'
import type { ReactNode } from 'react'

interface PaymentsSectionProps {
  id?: string
}

interface ProviderKey {
  key: 'stripe' | 'paypal' | 'wallets' | 'sepa' | 'mobileMoney' | 'crypto'
  icon: ReactNode
  accent: string
}

const providers: ProviderKey[] = [
  { key: 'stripe',      icon: <FaStripe className="text-3xl" />,       accent: '#635bff' },
  { key: 'paypal',      icon: <FaPaypal className="text-3xl" />,       accent: '#003087' },
  { key: 'wallets',     icon: (
    <span className="inline-flex items-center gap-1">
      <FaApplePay className="text-3xl" />
      <FaGooglePay className="text-3xl" />
    </span>
  ), accent: '#0a0a0f' },
  { key: 'sepa',        icon: <FaUniversity className="text-3xl" />,   accent: '#1d4ed8' },
  { key: 'mobileMoney', icon: <FaMobileAlt className="text-3xl" />,    accent: '#f59e0b' },
  { key: 'crypto',      icon: <FaBitcoin className="text-3xl" />,      accent: '#f7931a' },
]

const PaymentsSection: React.FC<PaymentsSectionProps> = ({ id }) => {
  const { t } = useTranslation()

  const trustItems = [
    { icon: <FaShieldAlt />,      title: t.payments.trustPciTitle,      desc: t.payments.trustPciDesc },
    { icon: <FaCheckCircle />,    title: t.payments.trustScaTitle,      desc: t.payments.trustScaDesc },
    { icon: <FaFileSignature />,  title: t.payments.trustWebhooksTitle, desc: t.payments.trustWebhooksDesc },
    { icon: <FaClipboardList />,  title: t.payments.trustAuditTitle,    desc: t.payments.trustAuditDesc },
  ]

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <section
        id={id}
        className="relative py-16 px-4 md:py-24 md:px-8 overflow-hidden bg-gradient-to-b from-[#f8f7ff] via-white to-[#f0f0ff]"
      >
        {/* Decorative gradient blob */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #635bff 0%, transparent 70%)' }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}
        />

        {/* Header */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.1, 1)}
          className="relative max-w-5xl mx-auto text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest border-2 border-[#635bff] text-[#635bff] bg-white/80 backdrop-blur-sm mb-6">
            {t.payments.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0a0f] leading-tight mb-4">
            {t.payments.title}{' '}
            <span className="bg-gradient-to-r from-[#635bff] to-[#f59e0b] bg-clip-text text-transparent">
              {t.payments.titleHighlight}
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#0a0a0f]/70 max-w-3xl mx-auto leading-relaxed">
            {t.payments.subtitle}
          </p>
        </motion.div>

        {/* Providers grid */}
        <div className="relative max-w-7xl mx-auto grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {providers.map(({ key, icon, accent }, idx) => {
            const p = t.payments.providers[key]
            return (
              <motion.article
                key={key}
                variants={fadeIn('up', 'tween', 0.1 + idx * 0.05, 0.8)}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl border border-[#0a0a0f]/8 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="h-1.5 w-full" style={{ background: accent }} />

                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md"
                      style={{ background: accent }}
                    >
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0a0a0f] leading-tight">
                        {p.name}
                      </h3>
                      <p className="text-sm text-[#0a0a0f]/60 font-medium">
                        {p.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#0a0a0f]/75 leading-relaxed mb-5">
                    {p.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-[#0a0a0f]/80"
                      >
                        <FaCheckCircle
                          className="mt-0.5 shrink-0"
                          style={{ color: accent }}
                          aria-hidden="true"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[#0a0a0f]/8">
                    <p className="text-xs uppercase tracking-wider font-bold text-[#0a0a0f]/50 mb-1">
                      Use cases
                    </p>
                    <p className="text-sm text-[#0a0a0f]/75">{p.useCases}</p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Trust band */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative max-w-7xl mx-auto mt-16 md:mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start gap-2 p-5 rounded-xl bg-white/90 border border-[#635bff]/15 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[#635bff]/10 text-[#635bff] flex items-center justify-center text-lg">
                  {item.icon}
                </div>
                <h4 className="text-sm md:text-base font-bold text-[#0a0a0f]">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-[#0a0a0f]/65 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className="relative max-w-4xl mx-auto mt-14 md:mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a0a0f] mb-3">
            {t.payments.ctaTitle}
          </h3>
          <p className="text-base text-[#0a0a0f]/70 mb-6 max-w-2xl mx-auto">
            {t.payments.ctaSubtitle}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#635bff] to-[#4b0082] text-white font-bold text-base no-underline shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            {t.payments.ctaButton}
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default PaymentsSection
