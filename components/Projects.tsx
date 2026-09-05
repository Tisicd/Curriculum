import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const Projects: React.FC = () => {
  const { t } = useLanguage()
  const cases = t.cases

  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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
      <span className="section-label">{cases.label}</span>

      <p className="prose-cv max-w-2xl mb-10">
        {cases.intro}
      </p>

      <motion.div
        className="space-y-12"
        {...container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-60px' }}
      >
        {cases.items.map((project, i) => (
          <motion.div
            key={i}
            {...item}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <h3 className="font-display text-xl font-semibold text-[#171717] tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-accent-600 font-medium mt-0.5">
              {project.subtitle}
            </p>
            <p className="text-xs text-neutral-500 font-medium mt-1 uppercase tracking-wider">
              {project.roleLabel}: {project.role}
            </p>
            {project.impact && (
              <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg bg-accent-50 border border-accent-100 px-4 py-2.5 max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-700">
                  {project.impactLabel}:
                </span>
                {project.impact.map((value, vi) => (
                  <span key={vi} className="inline-flex items-center gap-1.5 text-sm text-neutral-700">
                    <FaCheck className="text-accent-500 text-[10px]" />
                    {value}
                  </span>
                ))}
              </div>
            )}
            <p className="text-[15px] leading-relaxed text-neutral-700 mt-3 max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tech.map((tech, ti) => (
                <span key={ti} className="skill-pill text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Transfer to support */}
      <motion.div
        className="mt-12 pt-10 border-t border-neutral-200"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h3 className="font-display text-lg font-semibold text-[#171717] tracking-tight">
          {cases.transferTitle}
        </h3>
        <p className="text-sm text-neutral-500 mt-2 max-w-xl">
          {cases.transferLead}
        </p>
        <ul className="mt-4 space-y-2.5 max-w-xl">
          {cases.transferItems.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
              <FaArrowRight className="text-accent-400 text-xs mt-1 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Project in development */}
      <motion.div
        className="mt-12 pt-10 border-t border-neutral-200"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <h3 className="font-display text-lg font-semibold text-[#171717] tracking-tight">
          {cases.devTitle}
        </h3>
        <p className="text-xs text-neutral-400 font-medium mt-0.5 uppercase tracking-wider">
          {cases.devBadge}
        </p>
        <p className="text-sm text-neutral-500 mt-2 max-w-xl">
          {cases.devDescription}
        </p>
      </motion.div>
    </motion.section>
  )
}

export default Projects
