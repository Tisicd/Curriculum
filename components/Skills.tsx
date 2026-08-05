import React from 'react'
import { motion } from 'framer-motion'

const Skills: React.FC = () => {
  const skillGroups = [
    {
      label: 'IA / Machine Learning',
      skills: [
        'Python', 'FastAPI', 'Deep Learning', 'Computer Vision',
        'Detección acústica de anomalías', 'Clasificación de imágenes',
        'Procesamiento de datos', 'R / RStudio',
      ],
    },
    {
      label: 'Backend / Bases de Datos',
      skills: [
        'Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Redis',
        'SQLAlchemy', 'asyncpg', 'SQL Server', 'JWT / Autenticación',
        'Arquitectura hexagonal', 'Docker',
      ],
    },
    {
      label: 'Frontend / Desarrollo Web',
      skills: [
        'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
        'Framer Motion', 'JavaScript', 'HTML5 / CSS3',
        'MathJS', 'WordPress',
      ],
    },
    {
      label: 'Cloud / Infraestructura / DevOps',
      skills: [
        'Docker', 'Linux', 'Bash / PowerShell', 'AWS',
        'Git / GitHub', 'SFTP / FTP / SCP', 'Vercel',
        'Monitoreo de procesos ETL', 'Gestión de logs',
      ],
    },
    {
      label: 'Herramientas / Productividad',
      skills: [
        'Documentación técnica', 'BPMN 2.0', 'Excel',
        'Edición de video', 'Producción audiovisual',
        'Control de versiones (Git)',
      ],
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="section-label">Habilidades</span>

      <div className="space-y-8">
        {skillGroups.map((group, gi) => (
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
