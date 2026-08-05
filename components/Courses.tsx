import React from 'react'
import { motion } from 'framer-motion'

const Courses: React.FC = () => {
  const courses = [
    {
      title: 'Cajero Comercial y Bancario',
      description:
        'Formación orientada al desempeño competente del rol de cajero bancario, cubriendo aspectos técnicos, normativos y de atención al cliente.',
    },
    {
      title: 'Asistente de Crédito y Cobranzas',
      description:
        'Habilidades analíticas, técnicas y de comunicación para la gestión efectiva de créditos y cobranzas, asegurando el cumplimiento de regulaciones y políticas establecidas.',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="section-label">Cursos</span>

      <div className="space-y-5">
        {courses.map((course, i) => (
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
