import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'
import Image from 'next/image'

const Header: React.FC = () => {
  const downloadCV = () => {
    // Función para descargar CV en PDF con fondo blanco y alta resolución
    const element = document.getElementById('cv-content') as HTMLElement | null
    if (!element) return

    const originalClassName = element.className
    // Forzar fondo blanco temporal para evitar tono grisáceo en el PDF
    element.classList.add('bg-white')

    import('html2canvas').then((html2canvas) => {
      import('jspdf').then((jsPDF) => {
        const scale = Math.max(2, Math.floor(window.devicePixelRatio || 2))
        html2canvas.default(element, {
          backgroundColor: '#ffffff',
          scale,
          useCORS: true,
          logging: false,
          windowWidth: element.scrollWidth,
          windowHeight: element.scrollHeight,
          scrollY: -window.scrollY,
        }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png')
          const pdf = new jsPDF.default('p', 'mm', 'a4')
          const imgWidth = 210
          const pageHeight = 295
          const imgHeight = (canvas.height * imgWidth) / canvas.width
          let heightLeft = imgHeight
          let position = 0

          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST')
          heightLeft -= pageHeight

          while (heightLeft > 0) {
            position = heightLeft - imgHeight
            pdf.addPage()
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST')
            heightLeft -= pageHeight
          }

          pdf.save('CV_Profesional.pdf')
          // Restaurar clases originales
          element.className = originalClassName
        })
      })
    })
  }

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden ring-2 ring-primary-200 no-select no-pointer">
            <Image src={"/assets/images/avatar.png"} alt="Foto de perfil" width={96} height={96} className="object-cover" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Christian Tisalema</h1>
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2 className="text-xl text-primary-600">Ingeniería en Sistemas</h2>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-300">Disponibilidad inmediata</span>
          </div>
          <p className="text-gray-600 mb-6">Profesional competente y responsable con experiencia en atención al cliente, soporte técnico y producción audiovisual</p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-primary-600" />
              <span>leitsidw@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-primary-600" />
              <span>(+593) 96 381 9562</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary-600" />
              <span>Av. Mariscal Sucre N71877 y La Esperanza</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <a 
              href="https://www.linkedin.com/in/david-tisalema-507043359" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="no-print">
            <div className="flex justify-center">
              <></>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
