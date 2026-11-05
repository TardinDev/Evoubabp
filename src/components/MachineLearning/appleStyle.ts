// Style commun aux pages Machine Learning (langage visuel inspiré d'apple.com) :
// fonds blanc / gris clair, texte quasi noir, une seule couleur d'accent (le violet de la marque),
// boutons en pastille, cartes arrondies, beaucoup d'espace. Aucun dégradé.

export const AP = {
  text: '#1D1D1F',
  text2: '#6E6E73',
  text3: '#86868B',
  gray: '#F5F5F7',
  white: '#FFFFFF',
  dark: '#1D1D1F',
  accent: '#4b0082',
  font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  mono: "'SF Mono', ui-monospace, Menlo, Monaco, Consolas, monospace",
} as const

export const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4b0082]'

export const container = 'max-w-[980px] mx-auto px-6'
export const containerWide = 'max-w-[1200px] mx-auto px-6'

export const section = 'py-20 md:py-28'

export const h1 =
  'font-semibold tracking-[-0.025em] leading-[1.05] text-[44px] sm:text-[56px] md:text-[72px] text-[#1D1D1F] m-0'
export const h2 =
  'font-semibold tracking-[-0.02em] leading-[1.08] text-[34px] sm:text-[40px] md:text-[48px] text-[#1D1D1F] m-0'
export const h3 = 'font-semibold tracking-[-0.01em] leading-[1.15] text-[24px] md:text-[28px] text-[#1D1D1F] m-0'
export const lead = 'text-[19px] md:text-[21px] leading-[1.45] text-[#6E6E73] m-0'
export const body = 'text-[17px] leading-[1.55] text-[#1D1D1F] m-0'
export const body2 = 'text-[17px] leading-[1.55] text-[#6E6E73] m-0'
export const small = 'text-[14px] leading-[1.45] text-[#6E6E73] m-0'

export const card = 'bg-white rounded-[18px] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]'
export const cardHover =
  'transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.10)] motion-reduce:transition-none'

export const btnPrimary = `inline-flex items-center justify-center rounded-full px-6 py-3 text-[17px] font-normal no-underline text-white bg-[#4b0082] hover:bg-[#3a0066] transition-colors duration-200 ${focusRing}`
export const btnSecondary = `inline-flex items-center justify-center rounded-full px-6 py-3 text-[17px] font-normal no-underline text-[#4b0082] border border-[#4b0082] hover:bg-[#4b0082] hover:text-white transition-colors duration-200 ${focusRing}`
export const link = `text-[#4b0082] no-underline hover:underline underline-offset-4 ${focusRing}`
