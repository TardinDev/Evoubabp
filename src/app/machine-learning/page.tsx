import type { Metadata } from 'next'
import MachineLearningLearnPage from '@/views/MachineLearningLearnPage'

export const metadata: Metadata = {
  title: 'Apprendre le machine learning : dataset, modèle, fonction coût, descente de gradient',
  description:
    "Les cinq briques du machine learning expliquées simplement : dataset, modèle, fonction coût, descente de gradient et évaluation, avec une démo interactive.",
  alternates: { canonical: '/machine-learning' },
}

export default function MachineLearning() {
  return <MachineLearningLearnPage />
}
