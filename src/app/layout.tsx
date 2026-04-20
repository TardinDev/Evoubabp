import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import VisitNotifier from '@/components/VisitNotifier'
import GATracker from '@/components/Analytics/GATracker'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://evoubap.com'),
  title: {
    default: 'Davy Tardin — Développeur React & React Native Freelance à Paris',
    template: '%s | Evoubap',
  },
  description:
    'Développeur React freelance à Paris, spécialisé React Native, Node.js et TypeScript. Création d\'applications web et mobiles performantes. Disponible pour missions freelance et CDI.',
  keywords: [
    'développeur React Paris',
    'React Native freelance',
    'TypeScript',
    'Node.js',
    'freelance',
    'Paris',
    'développeur full-stack',
    'applications mobiles',
    'applications web',
  ],
  authors: [{ name: 'Davy Tardin' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://evoubap.com/',
    siteName: 'Evoubap',
    title: 'Davy Tardin — Développeur React & React Native Freelance à Paris',
    description:
      'Développeur React freelance à Paris, spécialisé React Native, Node.js et TypeScript. Création d\'applications web et mobiles performantes. Disponible pour missions freelance et CDI.',
    images: [{ url: '/evoubapfavicon.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davy Tardin — Développeur React & React Native Freelance à Paris',
    description:
      'Développeur React freelance à Paris, spécialisé React Native, Node.js et TypeScript. Création d\'applications web et mobiles performantes.',
    images: ['/evoubapfavicon.jpeg'],
  },
  icons: {
    icon: [
      { url: '/evoubap-logos/evoubap-icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/evoubap-logos/evoubap-icon.svg',
    apple: '/evoubap-logos/evoubap-icon.svg',
  },
  other: {
    'ai-content-declaration':
      'Ce site est le portfolio professionnel de Davy Tardin, développeur full-stack. Il propose des formations en développement web et mobile.',
    'theme-color': '#667eea',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://evoubap.com/#person',
      name: 'Davy Tardin',
      url: 'https://evoubap.com',
      jobTitle: 'Développeur React & React Native Freelance',
      description:
        'Développeur React freelance à Paris, spécialisé React Native, Node.js et TypeScript. Création d\'applications web et mobiles performantes.',
      knowsAbout: [
        'React',
        'React Native',
        'Node.js',
        'TypeScript',
        'Machine Learning',
        'Docker',
        'Spring Boot',
        'Tailwind CSS',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Paris',
        addressRegion: 'Île-de-France',
        addressCountry: 'FR',
      },
      worksFor: { '@type': 'Organization', name: 'Freelance' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services de développement',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Développement React & React Native',
              description:
                'Création d\'applications web et mobiles avec React et React Native',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Développement Backend Node.js',
              description:
                'APIs REST et microservices avec Node.js et TypeScript',
            },
          },
        ],
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://evoubap.com/#website',
      url: 'https://evoubap.com',
      name: 'Evoubap',
      description:
        'Portfolio et formations de Davy Tardin, développeur full-stack',
      publisher: { '@id': 'https://evoubap.com/#organization' },
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'Organization',
      '@id': 'https://evoubap.com/#organization',
      name: 'Evoubap',
      url: 'https://evoubap.com',
      founder: { '@id': 'https://evoubap.com/#person' },
      description:
        'Evoubap — Développement d\'applications web et mobiles, formations en développement',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
          <VisitNotifier />
          <Suspense fallback={null}>
            <GATracker />
          </Suspense>
          {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-32XX2B66ZV"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-32XX2B66ZV');
          `}
        </Script>
      </body>
    </html>
  )
}
