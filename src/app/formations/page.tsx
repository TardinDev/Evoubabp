import type { Metadata } from 'next'
import FormationPage from '@/views/FormationPage'

export const metadata: Metadata = {
  title: 'Formations tech : IA, web, mobile et machine learning',
  description:
    "Formations pratiques par Davy Tardin : créer son propre Jarvis, coder avec Claude Code, développement web et mobile, machine learning, live coding chaque vendredi.",
}

export default function Formations() {
  return <FormationPage />
}
