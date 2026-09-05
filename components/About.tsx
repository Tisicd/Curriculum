import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const About: React.FC = () => {
  const { t } = useLanguage()
  const about = t.about

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="section-label">{about.label}</span>

      <div className="prose-cv max-w-2xl">
        {about.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 pt-8 border-t border-neutral-200">
        <h3 className="font-display text-sm font-medium text-[#171717] mb-4">
          {about.ventaja.title}
        </h3>

        <div className="overflow-x-auto rounded-2xl border border-accent-100 bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-accent-100 bg-accent-50">
                <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#171717]">
                  {about.ventaja.columns.feature}
                </th>
                <th className="py-3 px-4 text-center text-xs font-semibold uppercase tracking-wider text-accent-700">
                  {about.ventaja.columns.me}
                </th>
                <th className="py-3 px-4 text-center text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {about.ventaja.columns.generic}
                </th>
              </tr>
            </thead>
            <tbody>
              {about.ventaja.rows.map((row, i) => (
                <tr key={i} className="border-b border-neutral-100 last:border-b-0">
                  <td className="py-2.5 px-4 text-sm text-neutral-700">{row.feature}</td>
                  <td className="py-2.5 px-4 text-center">
                    <FaCheck className="inline-block text-accent-600 text-sm" />
                  </td>
                  <td className="py-2.5 px-4 text-center">
                    <FaTimes className="inline-block text-neutral-300 text-sm" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-neutral-400 mt-3 max-w-xl italic">
          {about.footnote}
        </p>
      </div>

      <div className="mt-10 pt-8 border-t border-neutral-200">
        <h3 className="font-display text-sm font-medium text-[#171717] mb-4">
          {about.idiomasLabel}
        </h3>
        <div className="flex flex-wrap gap-6">
          {about.languages.map((lang, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="font-medium text-[#171717] text-sm">{lang.name}</span>
              <span className="text-xs text-neutral-500">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default About
