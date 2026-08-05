import React from 'react'
import { motion } from 'framer-motion'

const Education: React.FC = () => {
  const education = [
    {
      title: 'Ingeniería en Sistemas Informáticos',
      institution: 'Universidad Central del Ecuador',
      meta: 'Egresado — Malla curricular completa',
      description:
        'Todos los créditos académicos aprobados. Título en trámite mediante examen complexivo (programado diciembre 2026). Formación integral en ciencias de la computación, desarrollo de software, bases de datos, inteligencia artificial y gestión de proyectos tecnológicos.',
    },
    {
      title: 'Bachiller en Ciencias',
      institution: 'Instituto Nacional Mejía',
      meta: '2014 – 2016',
      description: 'Miembro del club de Taekwondo durante el período académico.',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="section-label">Educación</span>

      <div className="space-y-8">
        {education.map((edu, i) => (
          <div key={i}>
            <h3 className="font-display text-base font-semibold text-[#171717] tracking-tight">
              {edu.title}
            </h3>
            <p className="text-sm text-accent-600 font-medium mt-0.5">
              {edu.institution}
            </p>
            <p className="text-xs text-neutral-500 mt-0.5 mb-2">
              {edu.meta}
            </p>
            <p className="text-[15px] leading-relaxed text-neutral-700 max-w-xl">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Education
