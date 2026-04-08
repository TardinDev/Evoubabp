import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D2F3F',
        secondary: '#286F6C',
        accent: {
          blue: '#615EFC',
          red: '#FF204E',
        },
        'secondary-white': '#E7E7E7',
        bg: {
          primary: '#F8F7F1',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1500px',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
export default config
