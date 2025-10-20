import React from 'react'
import { useReactToPrint } from 'react-to-print'
import { FaPrint } from 'react-icons/fa'

type Props = {
  targetId?: string
  className?: string
}

const PdfButtons: React.FC<Props> = ({ targetId = 'cv-content', className = '' }) => {
  const handlePrint = useReactToPrint({
    content: () => document.getElementById(targetId) as HTMLElement,
    documentTitle: 'CV_Profesional',
    removeAfterPrint: true,
    pageStyle: `@page { size: A4; margin: 12mm }`,
  })

  return (
    <div className={`no-print ${className}`}>
      <button onClick={handlePrint} className="btn-primary flex items-center gap-2 mx-auto">
        <FaPrint /> Imprimir/Guardar PDF
      </button>
    </div>
  )
}

export default PdfButtons


