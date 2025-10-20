import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Contacto</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Profesional competente y responsable con experiencia en atención al cliente, 
            soporte técnico y producción audiovisual. Disponible inmediatamente para nuevas oportunidades.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <a 
              href="mailto:leitsidw@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <FaEnvelope />
              <span>letisidw@gmail.com</span>
            </a>
            <a 
              href="tel:+593963819562"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <FaPhone />
              <span>(+593) 96 381 9562</span>
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt />
              <span>Av. Mariscal Sucre N71877 y La Esperanza</span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/david-tisalema-507043359" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Christian Tisalema. CV Profesional Interactivo desarrollado con Next.js y Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
