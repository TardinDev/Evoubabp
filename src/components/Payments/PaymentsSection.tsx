'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'
import {
  FaStripe,
  FaPaypal,
  FaApplePay,
  FaGooglePay,
  FaUniversity,
  FaMobileAlt,
  FaBitcoin,
} from 'react-icons/fa'
import { useTranslation } from '../../hooks/useTranslation'
import type { ReactNode } from 'react'

interface PaymentsSectionProps {
  id?: string
}

type ProviderKey =
  | 'stripe'
  | 'paypal'
  | 'wallets'
  | 'sepa'
  | 'mobileMoney'
  | 'crypto'

interface ProviderEntry {
  key: ProviderKey
  logo: ReactNode
  brand: string
}

const ACCENT = '#4b0082'
const INK = '#0a0a0a'
const PAPER = '#F8F7F1'

const providers: ProviderEntry[] = [
  { key: 'stripe',      brand: '#635BFF', logo: <FaStripe className="text-[2.6rem]" /> },
  { key: 'paypal',      brand: '#003087', logo: <FaPaypal className="text-3xl" /> },
  {
    key: 'wallets',
    brand: '#1A1A1A',
    logo: (
      <span className="inline-flex items-center gap-2">
        <FaApplePay className="text-3xl" />
        <FaGooglePay className="text-3xl" />
      </span>
    ),
  },
  { key: 'sepa',        brand: '#003399', logo: <FaUniversity className="text-2xl" /> },
  { key: 'mobileMoney', brand: '#FF7900', logo: <FaMobileAlt className="text-2xl" /> },
  { key: 'crypto',      brand: '#F7931A', logo: <FaBitcoin className="text-2xl" /> },
]

const PaymentsSection: React.FC<PaymentsSectionProps> = ({ id }) => {
  const { t } = useTranslation()

  const trustItems = [
    { label: t.payments.trustPciTitle, desc: t.payments.trustPciDesc },
    { label: t.payments.trustScaTitle, desc: t.payments.trustScaDesc },
    {
      label: t.payments.trustWebhooksTitle,
      desc: t.payments.trustWebhooksDesc,
    },
    { label: t.payments.trustAuditTitle, desc: t.payments.trustAuditDesc },
  ]

  return (
    <motion.div
      variants={staggerContainer(0.08, 0.15)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <section
        id={id}
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundColor: PAPER, color: INK }}
      >
        <div className="relative max-w-6xl mx-auto px-6 md:px-10">
          {/* En-tête de section */}
          <motion.header
            variants={fadeIn('up', 'tween', 0.05, 0.8)}
            className="text-center mb-14 md:mb-20"
          >
            <span
              className="inline-block font-mono text-xs tracking-[0.3em] uppercase mb-6 px-4 py-2 rounded"
              style={{
                color: ACCENT,
                backgroundColor: 'rgba(75, 0, 130, 0.08)',
              }}
            >
              {t.payments.badge}
            </span>

            <h2
              className="font-extrabold mb-5 leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              {t.payments.title}{' '}
              <span style={{ color: ACCENT }}>
                {t.payments.titleHighlight}
              </span>
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-black/65 max-w-2xl mx-auto">
              {t.payments.subtitle}
            </p>
          </motion.header>

          {/* Grille des providers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/15">
            {providers.map(({ key, logo, brand }, idx) => {
              const p = t.payments.providers[key]
              return (
                <motion.article
                  key={key}
                  variants={fadeIn('up', 'tween', 0.05 + idx * 0.04, 0.6)}
                  className="group relative border-r border-b border-black/15 p-7 md:p-9 transition-colors duration-300 hover:bg-white"
                >
                  {/* Logo couleur de marque */}
                  <div
                    className="mb-7 transition-transform duration-300 group-hover:scale-[1.04] origin-left"
                    style={{ color: brand }}
                  >
                    {logo}
                  </div>

                  <h3 className="font-bold text-xl md:text-2xl leading-tight mb-1.5">
                    {p.name}
                  </h3>

                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.18em] mb-5"
                    style={{ color: brand }}
                  >
                    {p.tagline}
                  </p>

                  <p className="text-[0.95rem] leading-relaxed text-black/70 mb-6">
                    {p.description}
                  </p>

                  <ul className="space-y-2 mb-7">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-3 text-sm text-black/80"
                      >
                        <span
                          aria-hidden="true"
                          className="shrink-0 select-none mt-2 inline-block w-1 h-1 rounded-full"
                          style={{ backgroundColor: brand }}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-5 border-t border-black/10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/45 mb-1.5">
                      {t.payments.useCasesLabel}
                    </p>
                    <p className="text-sm text-black/70 leading-snug">
                      {p.useCases}
                    </p>
                  </div>

                  {/* Filet d'accent au hover — couleur de marque */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-0 transition-[width] duration-500 ease-out group-hover:w-full"
                    style={{ backgroundColor: brand }}
                  />
                </motion.article>
              )
            })}
          </div>

          {/* Bande de confiance */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 0.8)}
            className="mt-20 md:mt-28"
          >
            <div className="text-center mb-10">
              <span
                className="inline-block font-mono text-xs tracking-[0.3em] uppercase px-4 py-2 rounded"
                style={{
                  color: ACCENT,
                  backgroundColor: 'rgba(75, 0, 130, 0.08)',
                }}
              >
                {t.payments.complianceLabel}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-black/10 p-6 hover:border-black/25 transition-colors duration-300"
                >
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.22em] mb-3"
                    style={{ color: ACCENT }}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed text-black/75">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 0.8)}
            className="mt-20 md:mt-28 border-t border-black/15 pt-12 md:pt-14"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div className="max-w-xl">
                <h3
                  className="font-extrabold mb-3 leading-tight tracking-tight"
                  style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)' }}
                >
                  {t.payments.ctaTitle}
                </h3>
                <p className="text-base text-black/65 leading-relaxed">
                  {t.payments.ctaSubtitle}
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 self-start md:self-auto px-8 py-4 text-[#F8F7F1] text-sm font-semibold tracking-wide no-underline whitespace-nowrap transition-colors duration-300"
                style={{ backgroundColor: INK }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = ACCENT)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = INK)
                }
              >
                <span>{t.payments.ctaButton}</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default PaymentsSection
