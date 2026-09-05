import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaWrench, FaRobot, FaDatabase, FaServer } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const Especializacion: React.FC = () => {
  const { t } = useLanguage()
  const data = t.especializacion

  const icons = [FaWrench, FaRobot, FaDatabase, FaServer]

  const container = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.08 } },
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
      <span className="section-label">{data.label}</span>

      <motion.div
        className="space-y-4"
        {...container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-60px' }}
      >
        {data.items.map((entry, i) => {
          const Icon = icons[i] || FaCheck
          return (
            <motion.div
              key={i}
              {...item}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="flex items-start gap-4 p-5 rounded-2xl border border-accent-100 bg-white"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-accent-600 text-white flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-[15px] font-semibold text-[#171717] tracking-tight flex items-center gap-2">
                  <FaCheck className="text-accent-500 text-xs" />
                  {entry.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 mt-1.5 max-w-2xl">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.section>
  )
}

export default Especializacion
