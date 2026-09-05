import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const PdfButtons: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useLanguage()
  const handlePrint = () => {
    window.print()
  }

  return (
    <motion.div
      className={`no-print ${className || ''}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <button
        onClick={handlePrint}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                   border border-accent-200 text-accent-700 text-sm font-medium
                   hover:bg-accent-50 hover:border-accent-300 transition-colors duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 12H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
        {t.ui.print}
      </button>
    </motion.div>
  )
}

export default PdfButtons
