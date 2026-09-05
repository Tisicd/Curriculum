import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const Experience: React.FC = () => {
  const { t } = useLanguage()
  const experience = t.experience

  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const item = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="section-label">{experience.label}</span>

      <motion.div
        className="space-y-10"
        {...container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-60px' }}
      >
        {experience.entries.map((exp, i) => (
          <motion.div
            key={i}
            {...item}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <h3 className="font-display text-base font-semibold text-[#171717] tracking-tight">
              {exp.title}
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5 mb-2.5">
              {exp.meta}
            </p>
            <p className="text-[15px] leading-relaxed text-neutral-700 max-w-2xl">
              {exp.description}
            </p>
            {exp.points && (
              <ul className="mt-3 space-y-2 max-w-2xl">
                {exp.points.map((point, pi) => (
                  <li key={pi} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-neutral-700">
                    <FaCheck className="text-accent-500 text-xs mt-1.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {exp.results && (
              <div className="mt-4 max-w-2xl rounded-xl border border-accent-200 bg-accent-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-700 mb-2">
                  {exp.resultsLabel}
                </p>
                <ul className="space-y-1.5">
                  {exp.results.map((result, ri) => (
                    <li key={ri} className="flex items-start gap-2 text-sm text-neutral-700">
                      <FaCheck className="text-accent-600 text-xs mt-1 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Experience
