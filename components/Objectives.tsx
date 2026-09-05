import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const Objectives: React.FC = () => {
  const { t } = useLanguage()
  const objetivo = t.objetivo

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="section-label">{objetivo.label}</span>
      <p className="text-lg leading-relaxed text-neutral-700 max-w-2xl">
        {objetivo.intro}{' '}
        <strong className="font-semibold text-[#171717]">
          {objetivo.role}
        </strong>{' '}
        {objetivo.detail}
      </p>
    </motion.section>
  )
}

export default Objectives
