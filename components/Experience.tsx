import React from 'react'
import { motion } from 'framer-motion'

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Practicante en Desarrollo e Innovación Tecnológica Educativa',
      meta: 'Instituto de Investigaciones Económicas, UCE \u00b7 360 horas \u00b7 Ago 2024 – Ago 2025',
      description:
        'Desarrollé una aplicación web fullstack orientada a reducir la repitencia estudiantil mediante herramientas académicas interactivas. La plataforma —construida con Flask, PostgreSQL, Redis y Docker bajo arquitectura MVC— integró un sistema de autenticación completo con JWT, validación de correos institucionales y paneles personalizados para estudiantes, docentes y administración. Implementé un módulo multimedia con gestión de videos educativos, chatbots de apoyo académico y calculadoras interactivas desarrolladas con JavaScript y MathJS. Configuré Redis para manejo de sesiones seguras y desplegué el entorno completo con Docker, manteniendo control de versiones con GitHub. Además, coordiné la integración de recursos externos como GeoGebra, Desmos, Wolfram Alpha y Photomath en el ecosistema de la plataforma.',
    },
    {
      title: 'Agente de Atención al Cliente y Gestión Comercial',
      meta: 'Conecta Plus \u00b7 Ecuador \u00b7 2024 – 2025',
      description:
        'Gestioné atención a clientes a través de canales telefónicos, aplicando técnicas de comunicación efectiva y negociación para fortalecer la retención y fidelización. Mantuve cumplimiento consistente de KPIs operativos relacionados con productividad, tiempo de atención y calidad de servicio, manejando simultáneamente múltiples solicitudes en entornos de alta demanda. Registré y di seguimiento a casos mediante sistemas CRM, colaborando con equipos de soporte para la escalación oportuna de incidencias complejas.',
    },
    {
      title: 'Técnico Audiovisual y Soporte IT',
      meta: 'Productora Independiente \u00b7 Ecuador \u00b7 2023 – 2024',
      description:
        'Brindé soporte técnico audiovisual en más de 30 sesiones de grabación, operando cámaras con control manual de ISO, obturador y encuadre, y configurando iluminación profesional mediante esquemas Rembrandt y de tres puntos, lo que redujo en un 25% los tiempos de set-up. Gestioné inventario y mantenimiento preventivo de más de 50 equipos, realicé reparaciones básicas de hardware y resolví incidentes de audio con micrófonos lavalier y de condensador en tiempo real. Complementé con producción de contenido digital y documentación de procedimientos operativos.',
    },
    {
      title: 'Mesero de Banquetes',
      meta: 'Hotel Hilton Colon \u00b7 Ecuador \u00b7 2022 – 2023',
      description:
        'Atención a más de 200 clientes por evento en entornos de alto volumen, manteniendo los estándares de servicio de una cadena hotelera internacional. Coordinación en tiempo real con cocina, logística y operaciones, manejo de requerimientos y reclamos con enfoque al cliente, y apoyo en ventas mediante upselling.',
    },
    {
      title: 'Auxiliar de Artes Gráficas',
      meta: 'Instituto Geográfico Militar \u00b7 Ecuador \u00b7 2018',
      description:
        'Gestión de inventario y control de troqueles optimizando en un 20% los tiempos de búsqueda de insumos. Control de calidad visual y dimensional de productos gráficos, suministro logístico de materiales y mantenimiento básico de maquinaria bajo metodología 5S.',
    },
  ]

  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
      <span className="section-label">Experiencia</span>

      <motion.div
        className="space-y-10"
        {...container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-60px' }}
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            {...item}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <h3 className="font-display text-base font-semibold text-[#171717] tracking-tight">
              {exp.title}
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5 mb-2.5">
              {exp.meta}
            </p>
            <p className="text-[15px] leading-relaxed text-neutral-700 max-w-2xl">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Experience
