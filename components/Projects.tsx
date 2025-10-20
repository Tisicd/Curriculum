import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaCogs } from 'react-icons/fa'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Sistema de Monitoreo Automatizado de Procesos Batch",
      description: "Plataforma desarrollada en Python para monitoreo en tiempo real de procesos ETL críticos con alertas automáticas y dashboard interactivo.",
      technologies: ["Python", "PostgreSQL", "Linux", "Bash Scripting", "AWS"],
      category: "Automatización",
      icon: FaCogs,
      github: "https://github.com/carlos-mendoza/batch-monitor",
      demo: "#"
    },
    {
      title: "Herramienta de Auditoría de Logs Bancarios",
      description: "Sistema de análisis y auditoría de logs de transacciones bancarias con detección de anomalías y reportes automatizados.",
      technologies: ["Python", "SQL Server", "Deep Learning", "Linux"],
      category: "Auditoría",
      icon: FaDatabase,
      github: "https://github.com/carlos-mendoza/log-auditor",
      demo: "#"
    },
    {
      title: "Portal de Gestión de Incidentes",
      description: "Aplicación web React para gestión de tickets de soporte técnico con integración a sistemas de monitoreo y notificaciones.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      category: "Desarrollo Web",
      icon: FaCode,
      github: "https://github.com/carlos-mendoza/incident-portal",
      demo: "#"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Automatización': return 'bg-blue-100 text-blue-800'
      case 'Auditoría': return 'bg-green-100 text-green-800'
      case 'Desarrollo Web': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section className="card animate-fade-in">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const IconComponent = project.icon
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 animate-slide-up"
                 style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <IconComponent className="text-primary-600" />
                </div>
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="skill-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  <FaGithub />
                  <span>Código</span>
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  <FaExternalLinkAlt />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
