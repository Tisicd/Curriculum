import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone } from 'react-icons/fa'

const References: React.FC = () => {
  const references = [
    {
      name: 'Wellington Yepez',
      role: 'Seguridad y Prevención',
      phone: '099 993 0086',
    },
    {
      name: 'Jefferson Albuja',
      role: 'Desarrollador Senior',
      phone: '096 299 2697',
    },
    {
      name: 'Christian Pilapanta',
      role: 'Productor Musical',
      phone: '098 468 1015',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="section-label">Referencias</span>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {references.map((ref, i) => (
          <div key={i}>
            <p className="font-display text-sm font-semibold text-[#171717]">
              {ref.name}
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">{ref.role}</p>
            <p className="text-xs text-neutral-600 mt-2 flex items-center gap-1.5">
              <FaPhone className="text-[10px] text-accent-400" />
              {ref.phone}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default References
