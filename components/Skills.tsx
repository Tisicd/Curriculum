import React from 'react'

const Skills: React.FC = () => {
  const skillGroups = {
    'Habilidades Técnicas / Operativas': [
      'Linux', 'Linux server administration', 'Monitoreo de procesos batch', 
      'Control de procesos batch / ETL', 'Gestión de logs y diagnóstico de fallos', 'SFTP / FTP / SCP', 
      'Bash / PowerShell scripting', 'Automatización de tareas repetitivas', 'Git / GitHub', 
      'Auditoría de TI', 'Soporte técnico', 'AWS (infraestructura y servicios relacionados)'
    ],
    'Programación / Desarrollo': [
      'Python', 'Java', 'C#', 'React / Node.js', 'Deep Learning', 
      'R / RStudio', 'WordPress'
    ],
    'Bases de Datos / Cloud': [
      'PostgreSQL', 'SQL Server', 'Validación de integridad de datos (checksums, conteos, registros)', 
      'Cloud services (AWS)'
    ],
    'Soft Skills / Profesionales': [
      'Control de estrés', 'Capacidad de respuesta bajo presión', 
      'Alta responsabilidad operativa', 'Atención al detalle', 
      'Cumplimiento de SLA', 'Comunicación técnica efectiva', 
      'Rigurosidad y orientación a procedimientos', 'Resolución de incidentes', 
      'Aprendizaje continuo'
    ],
    'Office / Herramientas de productividad': [
      'Word', 'Excel', 'Documentación técnica', 'Creación de bitácoras y reportes'
    ]
  }

  const strengths = [
    'Adaptabilidad a software',
    'Aprendizaje de idiomas',
    'Creatividad',
    'Comunicación',
    'Disponibilidad',
    'Eficiencia'
  ]

  return (
    <section className="card animate-fade-in">
      <h2 className="section-title">Habilidades</h2>
      <div className="space-y-8">
        {Object.entries(skillGroups).map(([groupName, skills]) => (
          <div key={groupName} className="animate-slide-up">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-primary-500 pl-4">
              {groupName}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="skill-tag"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-green-500 pl-4">
            Fortalezas Personales
          </h3>
          <div className="flex flex-wrap gap-3">
            {strengths.map((strength, index) => (
              <span 
                key={index}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:bg-green-200 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
