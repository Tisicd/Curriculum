import React from 'react'
import { FaCalendarAlt, FaBuilding } from 'react-icons/fa'

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Técnico Audiovisual y Soporte IT",
      company: "Productora Independiente",
      period: "2023 - 2024",
      location: "Ecuador",
      achievements: [
        "Manejo técnico de cámaras (ISO, obturador, encuadre). Soporte en 30+ sesiones de grabación",
        "Configuración de iluminación profesional (Rembrandt, 3 puntos), reduciendo en 25% tiempos de set-up",
        "Gestión de inventario y mantenimiento preventivo de 50+ equipos audiovisuales",
        "Producción y edición de contenido (gaming/tech) con entregas puntuales en 100% de proyectos",
        "Configuración de audio (lavalier/condensador) y resolución de incidentes en tiempo real",
        "Reparaciones básicas de hardware (cámaras, luces, PCs, monitores)",
        "Documentación de procedimientos y checklist operativos para el equipo"
      ]
    },
    {
      title: "Mesero de Banquetes",
      company: "Hotel Hilton Colon",
      period: "2022 - 2023",
      location: "Ecuador",
      achievements: [
        "Atención a 200+ clientes por evento, manteniendo altos estándares de servicio",
        "Resolución de requerimientos y reclamos en tiempo real con enfoque al cliente",
        "Coordinación efectiva con cocina, logística y operaciones para garantizar tiempos",
        "Apoyo en ventas y recomendación de productos (upselling) durante eventos"
      ]
    },
    {
      title: "Auxiliar de Artes Gráficas",
      company: "Instituto Geográfico Militar",
      period: "2018",
      location: "Ecuador",
      achievements: [
        "Inventario y control de troqueles, optimizando búsqueda de insumos en 20%",
        "Suministro y movimiento logístico de materiales para líneas de producción",
        "Control de calidad visual y dimensional de productos gráficos",
        "Mantenimiento básico de maquinaria y orden 5S del área de trabajo"
      ]
    }
  ]

  return (
    <section className="card animate-fade-in">
      <h2 className="section-title">Experiencia Laboral</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-primary-200 pl-6 animate-slide-up" 
               style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <div className="flex items-center gap-2 text-primary-600 mb-2">
                  <FaBuilding className="text-sm" />
                  <span className="font-medium">{exp.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt />
                  <span>{exp.period}</span>
                </div>
                <span>{exp.location}</span>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="flex items-start gap-2 text-gray-700">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
