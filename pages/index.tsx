import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Objectives from '../components/Objectives'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Courses from '../components/Courses'
import References from '../components/References'
import Footer from '../components/Footer'
import PdfButtons from '../components/PdfButtons'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CV Profesional - Christian Tisalema</title>
        <meta name="description" content="CV profesional interactivo de Christian Tisalema - Estudiante de Ingeniería en Sistemas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Ingeniería en Sistemas, Soporte Técnico, Desarrollo Web, React, Node.js, Python, AWS, Atención al Cliente, Ecuador, Disponibilidad inmediata" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <div id="cv-content">
          <Header />
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Columna lateral izquierda */}
              <div className="lg:col-span-1 space-y-6">
                <Objectives />
                <About />
                <References />
              </div>
              
              {/* Columna principal */}
              <div className="lg:col-span-2 space-y-8">
                <Education />
                <Courses />
                <Skills />
                <Experience />
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 pb-8">
            <PdfButtons className="flex justify-center" />
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Home
