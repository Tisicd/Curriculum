import React from 'react'
import { FaCertificate, FaBook } from 'react-icons/fa'

const Courses: React.FC = () => {
  const courses = [
    {
      title: "Cajero Comercial y Bancario",
      description: "Orientado a desempeñar competentemente el rol de cajero bancario, asegurando familiaridad con los aspectos técnicos, normativos y de atención al cliente de la profesión."
    },
    {
      title: "Asistente de Crédito y Cobranzas",
      description: "Enfocado en equipar a las personas con las habilidades analíticas, técnicas y de comunicación necesarias para gestionar efectivamente créditos y cobranzas, asegurando el cumplimiento de regulaciones y políticas establecidas."
    }
  ]

  return (
    <section className="card animate-fade-in">
      <h2 className="section-title">Cursos y Capacitaciones</h2>
      <div className="space-y-6">
        {courses.map((course, index) => (
          <div key={index} className="border-l-4 border-primary-200 pl-6 animate-slide-up" 
               style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaCertificate className="text-primary-600 text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-700 leading-relaxed">{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Courses
