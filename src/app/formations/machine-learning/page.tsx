import type { Metadata } from 'next'
import MachineLearningPage from '@/views/MachineLearningPage'

export const metadata: Metadata = {
  title: 'Formation machine learning pour débutants : 3 projets guidés',
  description:
    "Apprenez le machine learning sans prérequis : le principe expliqué simplement, puis trois projets guidés dans Google Colab. Reconnaître un chat d'un chien, ranger ses dépenses bancaires, choisir quoi cuisiner avec ce qu'il reste dans le frigo.",
  alternates: { canonical: '/formations/machine-learning' },
}

export default function MachineLearning() {
  return <MachineLearningPage />
}
