import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects: React.FC = () => {
  const featured = [
    {
      title: 'KIPU',
      subtitle: 'Plataforma de Reservas para Intercambios Culturales',
      description:
        'Plataforma web para gestión de reservas en programas de intercambio cultural en Quito. Construida con arquitectura hexagonal sobre FastAPI, PostgreSQL y Redis, con frontend en Next.js y TypeScript. Incluye autenticación JWT, panel de administración con métricas de ocupación y despliegue con Docker.',
      tech: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Next.js', 'TypeScript', 'Docker', 'Arq. Hexagonal'],
      github: '#',
      demo: '#',
    },
    {
      title: 'RutaSegura / BusTrack',
      subtitle: 'GPS en tiempo real y detección acústica de anomalías',
      description:
        'Plataforma de geolocalización y seguridad para transporte público. Incluye un módulo de detección acústica de anomalías —concebido, entrenado e implementado como parte del core del producto— que replica principios del oído humano para identificar eventos de riesgo mediante análisis de patrones sonoros en tiempo real.',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Deep Learning', 'GPS Tracking', 'Next.js', 'Docker'],
      github: '#',
      demo: '#',
    },
    {
      title: 'City Pet',
      subtitle: 'Plataforma Comunitaria para Mascotas',
      description:
        'Plataforma que conecta dueños de mascotas con servicios veterinarios y adopciones. Backend de alta concurrencia con FastAPI y asyncpg sobre PostgreSQL, Redis como caché y sesiones, y despliegue en contenedores Docker.',
      tech: ['FastAPI', 'asyncpg', 'PostgreSQL', 'Redis', 'Docker'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Tziwu',
      subtitle: 'Sitio Web Corporativo',
      description:
        'Sitio corporativo con diseño responsivo y animaciones fluidas. Desarrollado con Next.js, Framer Motion para microinteracciones y Tailwind CSS para un diseño mantenible. Optimizado para SEO y rendimiento.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'SEO'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Indicador 19 / CACES-ABET',
      subtitle: 'Rediseño BPMN para Acreditación Académica',
      description:
        'Rediseño de procesos institucionales para la acreditación de la UCE ante CACES y ABET. Modelado y documentación de flujos en BPMN 2.0, con diagramas XML estandarizados para facilitar la auditoría de indicadores de calidad educativa.',
      tech: ['BPMN 2.0', 'XML', 'Documentación Interactiva', 'Gestión de Procesos'],
      github: '#',
      demo: '#',
    },
  ]

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
      <span className="section-label">Proyectos</span>

      <motion.div
        className="space-y-12"
        {...container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-60px' }}
      >
        {featured.map((project, i) => (
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
            <p className="text-[15px] leading-relaxed text-neutral-700 mt-3 max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tech.map((t, ti) => (
                <span key={ti} className="skill-pill text-xs">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project in development */}
      <motion.div
        className="mt-12 pt-10 border-t border-neutral-200"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h3 className="font-display text-lg font-semibold text-[#171717] tracking-tight">
          Motor de Validación de Pagos
        </h3>
        <p className="text-xs text-neutral-400 font-medium mt-0.5 uppercase tracking-wider">
          En desarrollo
        </p>
        <p className="text-sm text-neutral-500 mt-2 max-w-xl">
          Sistema de validación y verificación de transacciones. Los detalles técnicos y de
          implementación se mantienen bajo confidencialidad.
        </p>
      </motion.div>

      {/* Early learning mention */}
      <motion.div
        className="mt-6 text-xs text-neutral-400 max-w-xl leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        Primer acercamiento a Computer Vision y Deep Learning durante el pregrado mediante un
        proyecto de clasificación de imágenes médicas con dataset abierto —un ejercicio de
        aprendizaje que marcó el inicio de mi interés por la inteligencia artificial.
      </motion.div>
    </motion.section>
  )
}

export default Projects
