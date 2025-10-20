import React from 'react'
import { FaPhone, FaUser } from 'react-icons/fa'

const References: React.FC = () => {
  const references = [
    {
      name: "Wellington Yepez",
      position: "Seguridad y Prevención",
      phone: "(+593) 99 894 7868"
    },
    {
      name: "Jefferson Albuja",
      position: "Desarrollador Senior",
      phone: "(+593) 98 716 4499"
    },
    {
      name: "Christian Pilapanta",
      position: "Productor Musical",
      phone: "(+593) 98 279 7446"
    }
  ]

  return (
    <section className="card animate-fade-in">
      <h2 className="section-title">Referencias</h2>
      <div className="flex flex-col gap-4">
        {references.map((ref, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 animate-slide-up" 
               style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <FaUser className="text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{ref.name}</h3>
                <p className="text-sm text-gray-600">{ref.position}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaPhone className="text-primary-600 text-sm" />
              <span className="text-sm">{ref.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default References
