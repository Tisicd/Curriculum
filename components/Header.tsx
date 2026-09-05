import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage, LanguageToggle } from '../context/LanguageContext'

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
}

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()
  useEffect(() => { setMounted(true) }, [])

  const downloadCV = () => {
    const element = document.getElementById('cv-content') as HTMLElement | null
    if (!element) return

    const originalClassName = element.className
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

          pdf.save('Christian_Tisalema_CV.pdf')
          element.className = originalClassName
        })
      })
    })
  }

  const transition = { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }

  return (
    <header className="relative border-b border-neutral-200 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="flex-1">
            {mounted && (
              <>
                <motion.div
                  {...fadeInUp}
                  transition={{ ...transition, delay: 0 }}
                >
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src="/assets/images/avatar.png"
                      alt="Christian Tisalema"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#171717] mb-3">
                    Christian Tisalema
                  </h1>
                  <p className="font-display text-lg md:text-xl text-accent-600 font-medium mb-2">
                    {t.header.subtitle}
                  </p>
                  <p className="font-display text-[13px] text-neutral-500 font-medium">
                    {t.header.tagline}
                  </p>
                  <p className="text-[13px] text-neutral-500 mt-1">
                    {t.header.status}
                  </p>
                </motion.div>

                <motion.div
                  {...fadeInUp}
                  transition={{ ...transition, delay: 0.1 }}
                  className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-600 mt-6"
                >
                  <a href="mailto:letisidw@gmail.com" className="inline-flex items-center gap-2 hover:text-accent-600 transition-colors">
                    <FaEnvelope className="text-accent-400 text-xs" />
                    <span>letisidw@gmail.com</span>
                  </a>
                  <a href="tel:+593963819562" className="inline-flex items-center gap-2 hover:text-accent-600 transition-colors">
                    <FaPhone className="text-accent-400 text-xs" />
                    <span>(+593) 96 381 9562</span>
                  </a>
                  <span className="inline-flex items-center gap-2">
                    <FaMapMarkerAlt className="text-accent-400 text-xs" />
                    <span>{t.header.location}</span>
                  </span>
                </motion.div>

                <motion.div
                  {...fadeInUp}
                  transition={{ ...transition, delay: 0.2 }}
                  className="flex items-center gap-5 mt-5"
                >
                  <a
                    href="https://www.linkedin.com/in/david-tisalema-507043359"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-accent-600 transition-colors"
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Tisicd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-accent-600 transition-colors"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://tziwu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-accent-600 transition-colors"
                  >
                    <FaGlobe />
                    <span>tziwu.com</span>
                  </a>
                  <a
                    href="https://lumentuio.tziwu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-accent-600 transition-colors"
                  >
                    <FaGlobe />
                    <span>Lumentuio</span>
                  </a>
                  <a
                    href="https://www.instagram.com/71z1.ec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-accent-600 transition-colors"
                  >
                    <FaInstagram />
                    <span>Instagram</span>
                  </a>
                </motion.div>
              </>
            )}
          </div>

          {mounted && (
            <motion.div
              {...fadeInUp}
              transition={{ ...transition, delay: 0.3 }}
              className="no-print flex flex-col items-start gap-4 flex-shrink-0"
            >
              <LanguageToggle />
              <button
                onClick={downloadCV}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                           border border-accent-200 text-accent-700 text-sm font-medium
                           hover:bg-accent-50 hover:border-accent-300 transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t.header.download}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
