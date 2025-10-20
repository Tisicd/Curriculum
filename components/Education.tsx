import React from 'react'
import { FaGraduationCap, FaCertificate, FaCalendarAlt } from 'react-icons/fa'

const Education: React.FC = () => {
  const education = [
    {
      type: "degree",
      title: "Ingeniería en Sistemas Informáticos",
      institution: "Universidad Central del Ecuador",
      period: "Actualmente - 9no Semestre",
      location: "Ecuador",
      description: "Estudiante de últimos semestres con enfoque en sistemas informáticos"
    },
    {
      type: "degree",
      title: "Bachiller en Ciencias",
      institution: "Instituto Nacional Mejía",
      period: "2014 - 2016",
      location: "Ecuador",
      description: "Miembro del club de Taekwondo durante el período académico"
    },
    {
      type: "degree",
      title: "Educación Básica",
      institution: "Escuela Fiscal Mixta Tarquino Idrobo",
      period: "Culminado en 2010",
      location: "Ecuador",
      description: "Educación primaria completada exitosamente"
    }
  ]

  return (
    <section className="card animate-fade-in">
      <h2 className="section-title">Educación</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4 animate-slide-up" 
               style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="flex-shrink-0">
              {edu.type === 'degree' ? (
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaGraduationCap className="text-primary-600 text-xl" />
                </div>
              ) : (
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FaCertificate className="text-green-600 text-xl" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{edu.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <FaCalendarAlt className="text-xs" />
                  <span>{edu.period}</span>
                </div>
              </div>
              <p className="text-primary-600 font-medium mb-1">{edu.institution}</p>
              <p className="text-gray-600 text-sm mb-2">{edu.location}</p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
