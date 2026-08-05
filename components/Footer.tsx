import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="border-t border-neutral-200 mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-sm font-semibold text-[#171717]">
              Christian Tisalema
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Ingeniero en Sistemas con enfoque en IA y automatización
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-neutral-600">
            <a
              href="mailto:letisidw@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-accent-600 transition-colors"
            >
              <FaEnvelope className="text-accent-400" />
              letisidw@gmail.com
            </a>
            <a
              href="tel:+593963819562"
              className="inline-flex items-center gap-1.5 hover:text-accent-600 transition-colors"
            >
              <FaPhone className="text-accent-400" />
              (+593) 96 381 9562
            </a>
            <a
              href="https://www.linkedin.com/in/david-tisalema-507043359"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent-600 transition-colors"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href="https://github.com/ChrisTisalema"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent-600 transition-colors"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
