import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Objectives from '../components/Objectives'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
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
        <title>Christian Tisalema — Ingeniero en Sistemas</title>
        <meta name="description" content="Ingeniero en Sistemas con enfoque en IA y automatización. Portafolio profesional de Christian Tisalema." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Ingeniería en Sistemas, IA, automatización, desarrollo web, FastAPI, Next.js, Ecuador" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div id="cv-content">
        <Header />

        <main className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="space-y-24 md:space-y-32 py-16 md:py-24">
            <Objectives />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Courses />
            <References />
          </div>
        </main>

        <div className="max-w-3xl mx-auto px-6 md:px-8 pb-8">
          <PdfButtons />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Home
