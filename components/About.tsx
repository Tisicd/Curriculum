import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  const languages = [
    { name: 'Español', label: 'Nativo' },
    { name: 'Inglés', label: 'B1 — Intermedio' },
    { name: 'Francés', label: 'A2 — Básico' },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="section-label">Sobre mí</span>

      <div className="prose-cv max-w-2xl">
        <p>
          Egresado de Ingeniería en Sistemas Informáticos de la Universidad Central del Ecuador,
          con malla curricular completa y título en trámite. Mi formación combina fundamentos
          sólidos en ciencias de la computación con experiencia práctica en desarrollo fullstack,
          automatización de procesos y soluciones con inteligencia artificial.
        </p>
        <p>
          He participado en proyectos que abarcan desde plataformas web con arquitectura hexagonal
          (FastAPI, PostgreSQL, Redis, Next.js) hasta sistemas de GPS en tiempo real con módulos
          de detección acústica de anomalías. Actualmente desarrollo un motor de validación de pagos.
        </p>
        <p>
          Me caracterizo por mi capacidad de aprendizaje autónomo, atención al detalle y enfoque
          en resultados. Disfruto trabajar en entornos colaborativos donde pueda aportar soluciones
          técnicas creativas mientras construyo una trayectoria sólida en el ecosistema tecnológico
          de Ecuador y Latinoamérica.
        </p>
      </div>

      <div className="mt-10 pt-8 border-t border-neutral-200">
        <h3 className="font-display text-sm font-medium text-[#171717] mb-4">Idiomas</h3>
        <div className="flex flex-wrap gap-6">
          {languages.map((lang, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="font-medium text-[#171717] text-sm">{lang.name}</span>
              <span className="text-xs text-neutral-500">{lang.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default About
