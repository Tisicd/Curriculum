import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const Courses: React.FC = () => {
  const { t } = useLanguage()
  const courses = t.courses

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="section-label">{courses.label}</span>

      <div className="space-y-5">
        {courses.entries.map((course, i) => (
          <div key={i}>
            <h3 className="font-display text-sm font-semibold text-[#171717] tracking-tight">
              {course.title}
            </h3>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl leading-relaxed">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Courses
