import React from 'react'
import { FaBullseye } from 'react-icons/fa'

const Objectives: React.FC = () => {
  const objectives = [
    'Aplicar conocimientos en desarrollo (React/Node.js) y automatización con Python.',
    'Aportar en soporte técnico especializado con foco en atención al cliente y resolución de incidentes.',
    'Desarrollar carrera en el sector IT ecuatoriano participando en proyectos de impacto.'
  ]

  return (
    <section className="card animate-fade-in">
      <h2 className="section-title">Objetivo Profesional</h2>
      <ul className="space-y-2">
        {objectives.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="mt-1 text-primary-600"><FaBullseye /></span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Objectives


