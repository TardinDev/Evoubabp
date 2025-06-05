// LanguageModal.tsx
import { useState, useEffect } from 'react'
import i18n from './i18n'
import React from 'react'

const LanguageModal = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const lang = localStorage.getItem('lang')
    if (!lang) {
      setShowModal(true)
    } else {
      i18n.changeLanguage(lang)
    }
  }, [])

  const selectLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
    setShowModal(false)
  }

  if (!showModal) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg text-center">
        <h2 className="text-xl mb-4">Choisissez votre langue</h2>
        <button className="m-2 px-4 py-2 bg-blue-500 text-white" onClick={() => selectLanguage('fr')}>
          Français
        </button>
        <button className="m-2 px-4 py-2 bg-green-500 text-white" onClick={() => selectLanguage('en')}>
          English
        </button>
      </div>
    </div>
  )
}

export default LanguageModal
