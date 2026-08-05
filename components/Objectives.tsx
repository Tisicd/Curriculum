import React from 'react'
import { motion } from 'framer-motion'

const Objectives: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="section-label">Objetivo</span>
      <p className="text-lg leading-relaxed text-neutral-700 max-w-2xl">
        Integrarme como{' '}
        <strong className="font-semibold text-[#171717]">
          Ingeniero en Sistemas con enfoque en IA y automatización
        </strong>{' '}
        en un equipo donde pueda aplicar mis habilidades en desarrollo de software,
        arquitecturas backend modernas y soluciones basadas en inteligencia artificial.
        Busco contribuir desde el primer día en proyectos de impacto —ya sea en pasantías,
        posiciones trainee o colaboraciones freelance— mientras construyo una trayectoria
        sólida en el sector tecnológico ecuatoriano y latinoamericano.
      </p>
    </motion.section>
  )
}

export default Objectives
