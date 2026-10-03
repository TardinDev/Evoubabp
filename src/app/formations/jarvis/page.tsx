import type { Metadata } from 'next'
import JarvisPage from '@/views/JarvisPage'

export const metadata: Metadata = {
  title: 'Formation : avoir son propre Jarvis sur son PC ou son Mac',
  description:
    "Installez et configurez votre assistant IA personnel : commande vocale, automatisation du PC, recherche et résumés, le tout en local sur votre machine.",
}

export default function Jarvis() {
  return <JarvisPage />
}
