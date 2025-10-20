import React from 'react'

const About: React.FC = () => {
  const languages = [
    { name: 'Español', percentage: 100 },
    { name: 'Inglés', percentage: 65 },
    { name: 'Francés', percentage: 55 },
  ]

  return (
    <section className="card animate-fade-in">
      <h2 className="section-title">Sobre Mí</h2>
      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          Profesional competente y responsable. Destaco por mi habilidad para resolver problemas 
          de forma rápida y eficiente, colaborando con equipos técnicos y creativos para cumplir 
          con los objetivos de cada proyecto en tiempo y forma. Deseo aportar mi precisión y 
          atención al detalle a un nuevo desafío.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Mi experiencia incluye manejo técnico de equipos audiovisuales, configuración de audio, 
          atención al cliente en eventos masivos y trabajo en entornos de alta demanda. 
          Busco aplicar mis conocimientos técnicos y habilidades de comunicación en 
          proyectos desafiantes que me permitan seguir creciendo profesionalmente.
        </p>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-primary-500 pb-2">
            Idiomas
          </h3>
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{lang.name}</span>
                  <span className="text-sm text-gray-600">{lang.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
