import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const Skills: React.FC = () => {
  const { t } = useLanguage()
  const skills = t.skills

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="section-label">{skills.label}</span>

      <div className="space-y-8">
        {skills.groups.map((group, gi) => (
          <div key={gi}>
            <h3 className="font-display text-sm font-semibold text-[#171717] mb-3 tracking-tight">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <span key={si} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
