// ================================================================
// SISTEMA DE TRADUCCIÓN CV: ESPAÑOL / INGLÉS
// ================================================================
// Uso: <CVProvider> envuelve toda la app, luego cualquier componente 
// puede usar useLanguage() para acceder al idioma y traducciones

import React, { createContext, useContext, useState, useEffect } from 'react';

// ================================================================
// 1. DICCIONARIO DE TRADUCCIONES
// ================================================================

const translations = {
  es: {
    // ENCABEZADO
    header: {
      title: 'Christian Tisalema',
      subtitle: 'Especialista en Soporte Técnico e Implementación de Soluciones IA',
      subsubtitle: 'Soporte Técnico N2 · Configuración de Sistemas IA · Automatización de Procesos',
      status: 'Egresado de Ingeniería en Sistemas — Disponible para posiciones presenciales y remotas',
      email: 'letisidw@gmail.com',
      phone: '(+593) 96 381 9562',
      location: 'Quito, Ecuador',
    },

    // OBJETIVO
    objetivo: {
      title: 'OBJETIVO',
      content: 'Integrarme como Especialista en Soporte Técnico (Nivel N2) con especialización en sistemas de inteligencia artificial en un equipo donde pueda garantizar la configuración, el mantenimiento y la resolución de incidentes de soluciones IA y plataformas web en producción.',
      highlight: 'Aporto profundidad técnica en backend e infraestructura (Python, PostgreSQL, Redis, Docker) que me permite diagnosticar y resolver problemas a nivel de API, base de datos y despliegue.',
    },

    // ESPECIALIZACIÓN TÉCNICA
    especializacion: {
      title: 'ESPECIALIZACIÓN TÉCNICA',
      items: [
        {
          title: 'Soporte Técnico N2 con especialización en sistemas IA',
          description: 'Configuración, resolución de problemas y escalación de sistemas de inteligencia artificial en producción. Diagnóstico de incidentes en chatbots, APIs y plataformas web de arquitectura compleja.',
        },
        {
          title: 'Implementación de soluciones de automatización y chatbots',
          description: 'Despliegue y mantenimiento de sistemas de procesamiento de datos y análisis predictivo — comparable a casos reales en Ecuador como el chatbot Sophi del Banco del Pacífico o los asistentes virtuales del retail.',
        },
        {
          title: 'Profundidad técnica full-stack en sistemas IA',
          description: 'Python + Deep Learning + APIs: análisis de tonos de piel, detección acústica de anomalías y Computer Vision. Me permite diagnosticar y resolver problemas a nivel de backend e infraestructura.',
        },
        {
          title: 'Gestión de incidentes en entornos de alta concurrencia',
          description: 'PostgreSQL, Redis y sistemas distribuidos con Docker. Troubleshooting de APIs, bases de datos, caché y capas de infraestructura cuando algo falla en producción.',
        },
      ],
    },

    // SOBRE MÍ
    sobreMi: {
      title: 'SOBRE MÍ',
      paragraph1: 'Egresado de Ingeniería en Sistemas Informáticos de la Universidad Central del Ecuador, con formación profunda en inteligencia artificial y arquitectura backend. Entiendo cómo funcionan los sistemas IA (training, deployment, monitoring), pero mi perfil profesional se orienta a hacerlos funcionar en producción: configurarlos, diagnosticarlos y darles soporte continuo.',
      paragraph2: 'En Ecuador, empresas como Banco del Pacífico (Sophi), retail y fintech implementan IA pero carecen de especialistas que las gestionen. Esa es la intersección que ocupo: Soporte Técnico N2 + comprensión profunda de sistemas IA, permitiéndome resolver problemas a nivel de API, base de datos e infraestructura sin esperar al desarrollador.',
    },

    // VENTAJA COMPETITIVA
    ventaja: {
      title: 'VENTAJA COMPETITIVA',
      myProfile: 'Mi Perfil',
      genericHelp: 'Help Desk Genérico',
      items: [
        { feature: 'Soporte Técnico N2', me: true, other: false },
        { feature: 'Entendimiento IA (Deep Learning)', me: true, other: false },
        { feature: 'Diagnóstico Backend (APIs, DB, Logs)', me: true, other: false },
        { feature: 'Configuración de Chatbots', me: true, other: false },
        { feature: 'Resolución sin depender del Developer', me: true, other: false },
      ],
    },

    // IDIOMAS
    idiomas: {
      title: 'IDIOMAS',
      spanish: 'Español',
      native: 'Nativo',
      english: 'Inglés',
      intermediate: 'B1 — Intermedio',
      french: 'Francés',
      basic: 'A2 — Básico',
    },

    // HABILIDADES
    habilidades: {
      title: 'HABILIDADES',
      sections: {
        soporte: {
          title: 'Soporte Técnico & Troubleshooting',
          skills: ['Soporte N1/N2', 'Help Desk', 'Gestión de incidentes', 'Escalación de tickets', 'Troubleshooting de aplicaciones web', 'Troubleshooting de APIs', 'Monitoreo de sistemas', 'Gestión de logs', 'Análisis de errores', 'Resolución bajo presión', 'Documentación de procedimientos', 'CRM / Gestión de tickets'],
        },
        ia: {
          title: 'IA & Automatización (Especialización)',
          skills: ['Chatbots y asistentes virtuales', 'Sistemas de análisis predictivo', 'Automatización de procesos', 'Integración de APIs IA', 'Computer Vision', 'Detección de anomalías', 'Clasificación de imágenes', 'Deep Learning', 'Procesamiento de datos', 'R / RStudio'],
        },
        backend: {
          title: 'Backend & Infraestructura',
          skills: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Redis', 'SQL Server', 'SQLAlchemy', 'asyncpg', 'Docker', 'Linux', 'Bash / PowerShell', 'Monitoreo de procesos', 'ETL', 'JWT / Autenticación'],
        },
        frontend: {
          title: 'Frontend & Integración',
          skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Integración de APIs', 'Webhooks', 'Framer Motion', 'HTML5 / CSS3'],
        },
        herramientas: {
          title: 'Herramientas & Productividad',
          skills: ['Git / GitHub', 'Control de versiones', 'Documentación técnica', 'BPMN 2.0', 'Excel', 'Comunicación técnica', 'Edición de video', 'Producción audiovisual'],
        },
      },
    },

    // CASOS DE SOPORTE
    casos: {
      title: 'CASOS DE SOPORTE & IA',
      intro: 'Estos proyectos están contados desde mi rol técnico: además de construirlos, aprendí a configurarlos, monitorearlos y documentarlos para darles soporte en producción.',
      projects: {
        kipu: {
          name: 'KIPU',
          subtitle: 'Plataforma de Reservas para Intercambios Culturales',
          role: 'ROL: SOPORTE TÉCNICO + ARQUITECTURA MANTENIBLE',
          description: 'Sistema web diseñado y soportado pensando en su operación en producción: configuración de monitoreo y logs, y procedimientos de troubleshooting documentados para que cada incidente tuviera un camino claro de resolución.',
          stack: 'FastAPI PostgreSQL Redis Next.js TypeScript Docker Monitoreo Documentación',
        },
        rutasegura: {
          name: 'RutaSegura / BusTrack',
          subtitle: 'GPS en tiempo real y detección acústica de anomalías',
          role: 'ROL: IMPLEMENTACIÓN Y SOPORTE DE SISTEMAS IA',
          description: 'Conozco el pipeline completo de un sistema IA en producción: cómo se entrena el modelo de Deep Learning, cómo se despliega (FastAPI + Docker) y cómo se monitorea (logs, errores, performance). Si algo falla en el pipeline de detección acústica de anomalías, puedo diagnosticarlo.',
          stack: 'Python FastAPI PostgreSQL Redis Deep Learning Computer Vision Docker',
        },
        citypet: {
          name: 'City Pet',
          subtitle: 'Plataforma Comunitaria para Mascotas',
          role: 'ROL: SOPORTE DE SISTEMAS DE ALTA CONCURRENCIA',
          description: 'Backend de alta concurrencia con FastAPI y asyncpg sobre PostgreSQL, Redis como caché y sesiones, y despliegue en contenedores Docker. Experiencia directa en la gestión de carga.',
          stack: 'FastAPI asyncpg PostgreSQL Redis Docker Performance',
        },
        color: {
          name: 'color-analysis-module',
          subtitle: 'Sistema de IA con arquitectura escalable',
          role: 'ROL: IMPLEMENTACIÓN DE IA DE EXTREMO A EXTREMO',
          description: 'Detección de tonos de piel con MediaPipe (Computer Vision) y recomendaciones personalizadas (Machine Learning), con decisión de ejecución client-side vs server-side y testing robusto (>90% de cobertura).',
          stack: 'Python MediaPipe Computer Vision Machine Learning Testing',
        },
      },
    },

    // EXPERIENCIA
    experiencia: {
      title: 'EXPERIENCIA',
      uceTitle: 'Practicante en Desarrollo e Innovación Tecnológica Educativa',
      uceCompany: 'Instituto de Investigaciones Económicas, UCE · 360 horas · Ago 2024 – Ago 2025',
      uceRole: 'Rol inicial: desarrollador full-stack. Rol final: especialista en soporte técnico.',
      uceBullets: [
        'Gestión de incidentes técnicos en una plataforma web de arquitectura compleja',
        'Soporte a 200+ usuarios (estudiantes, docentes y administración)',
        'Implementación de chatbots de apoyo académico (IA) que redujeron un 15% las consultas técnicas',
        'Integración de 5 herramientas STEM (GeoGebra, Desmos, Wolfram Alpha, Photomath)',
        'Configuración de infraestructura: Redis, Docker, monitoreo de procesos y análisis de logs',
        'Escalación de incidentes a nivel de infraestructura y documentación de procedimientos',
      ],
      uceResult: 'Resultado: plataforma con 0% de downtime, 200+ usuarios soportados sin retrasos críticos y 15% menos consultas repetitivas gracias al chatbot.',

      audiovisualTitle: 'Técnico Audiovisual y Soporte IT',
      audiovisualCompany: 'Productora Independiente · Ecuador · 2023 – 2024',
      audiovisualBullets: [
        'Resolución rápida de fallas de hardware en tiempo real durante grabaciones',
        'Diagnóstico y corrección inmediata de problemas de audio en vivo',
        'Gestión de inventario técnico de 50+ dispositivos con sistema de tracking',
        'Reparaciones básicas de hardware y documentación de procedimientos',
      ],
      audiovisualResult: 'Resultado: 25% de mejora en eficiencia operativa al dejar cada equipo configurado y listo para la siguiente sesión.',

      conectasTitle: 'Agente de Atención al Cliente y Gestión Comercial',
      conectasCompany: 'Conecta Plus · Ecuador · 2024 – 2025',
      conectasBullets: [
        'Atención a clientes en canales telefónicos',
        'Gestión de incidencias y escalación de tickets',
        'Cumplimiento consistente de KPIs operativos',
        'Manejo simultáneo de múltiples solicitudes en entornos de alta demanda',
      ],

      meseroTitle: 'Mesero de Banquetes',
      meseroCompany: 'Hotel Hilton Colon · Ecuador · 2022 – 2023',
      meseroDescription: 'Atención a 200+ clientes/evento. Coordinación en tiempo real, standards de servicio internacional.',

      auxiliarTitle: 'Auxiliar de Artes Gráficas',
      auxiliarCompany: 'Instituto Geográfico Militar · Ecuador · 2018',
      auxiliarDescription: 'Gestión de inventario, control de calidad, metodología 5S. 20% mejora en eficiencia.',
    },

    // EDUCACIÓN
    educacion: {
      title: 'EDUCACIÓN',
      ingenieriaTitle: 'Ingeniería en Sistemas Informáticos',
      ingenieriaSchool: 'Universidad Central del Ecuador',
      ingenieriaStatus: 'Egresado — Malla curricular completa',
      ingenieriaDescription: 'Todos los créditos académicos aprobados. Título en trámite mediante examen complexivo (programado diciembre 2026). Formación con énfasis en inteligencia artificial, automatización y arquitectura backend.',

      bachillerTitle: 'Bachiller en Ciencias',
      bachillerSchool: 'Instituto Nacional Mejía',
      bachillerDates: '2014 – 2016',
      bachillerDescription: 'Miembro del club de Taekwondo durante el período académico.',

      cursosTitle: 'CURSOS',
      cursoCajero: 'Cajero Comercial y Bancario',
      cursoAsistente: 'Asistente de Crédito y Cobranzas',
    },

    // REFERENCIAS
    referencias: {
      title: 'REFERENCIAS',
      wellington: 'Wellington Yepez - Seguridad y Prevención',
      jefferson: 'Jefferson Albuja - Desarrollador Senior',
      christian: 'Christian Pilapanta - Productor Musical',
    },

    // BOTONES Y UI
    ui: {
      languageToggle: 'ESP / ENG',
      spanish: 'Español',
      english: 'English',
      showMore: 'Mostrar más',
      showLess: 'Mostrar menos',
      download: 'Descargar CV',
    },
  },

  en: {
    // HEADER
    header: {
      title: 'Christian Tisalema',
      subtitle: 'Technical Support Specialist & AI Solutions Implementation',
      subsubtitle: 'Technical Support N2 · AI Systems Configuration · Process Automation',
      status: 'Systems Engineering Graduate — Available for on-site and remote positions',
      email: 'letisidw@gmail.com',
      phone: '(+593) 96 381 9562',
      location: 'Quito, Ecuador',
    },

    // OBJECTIVE
    objetivo: {
      title: 'OBJECTIVE',
      content: 'Join as a Technical Support Specialist (Level N2) with specialization in artificial intelligence systems where I can ensure configuration, maintenance and incident resolution for AI solutions and web platforms in production.',
      highlight: 'I bring deep technical expertise in backend and infrastructure (Python, PostgreSQL, Redis, Docker) that enables me to diagnose and resolve issues at the API, database and deployment levels.',
    },

    // SPECIALIZATION
    especializacion: {
      title: 'TECHNICAL SPECIALIZATION',
      items: [
        {
          title: 'Technical Support N2 with AI systems specialization',
          description: 'Configuration, troubleshooting and escalation of artificial intelligence systems in production. Incident diagnosis in chatbots, APIs and complex architecture web platforms.',
        },
        {
          title: 'Implementation of automation and chatbot solutions',
          description: 'Deployment and maintenance of data processing systems and predictive analytics — comparable to real cases in Ecuador such as Banco del Pacífico\'s Sophi chatbot or retail virtual assistants.',
        },
        {
          title: 'Full-stack technical depth in AI systems',
          description: 'Python + Deep Learning + APIs: skin tone analysis, acoustic anomaly detection and Computer Vision. Enables me to diagnose and solve problems at backend and infrastructure level.',
        },
        {
          title: 'Incident management in high-concurrency environments',
          description: 'PostgreSQL, Redis and distributed systems with Docker. Troubleshooting of APIs, databases, cache and infrastructure layers when production fails.',
        },
      ],
    },

    // ABOUT ME
    sobreMi: {
      title: 'ABOUT ME',
      paragraph1: 'Graduate of Systems Engineering from Central University of Ecuador, with deep training in artificial intelligence and backend architecture. I understand how AI systems work (training, deployment, monitoring), but my professional profile is oriented toward making them work in production: configuring, diagnosing and supporting them continuously.',
      paragraph2: 'In Ecuador, companies like Banco del Pacífico (Sophi), retail and fintech implement AI but lack specialists to manage it. That\'s exactly the intersection I occupy: Technical Support N2 + deep understanding of AI systems, allowing me to solve problems at API, database and infrastructure level without waiting for a developer.',
    },

    // COMPETITIVE ADVANTAGE
    ventaja: {
      title: 'COMPETITIVE ADVANTAGE',
      myProfile: 'My Profile',
      genericHelp: 'Generic Help Desk',
      items: [
        { feature: 'Technical Support N2', me: true, other: false },
        { feature: 'AI Understanding (Deep Learning)', me: true, other: false },
        { feature: 'Backend Diagnosis (APIs, DB, Logs)', me: true, other: false },
        { feature: 'Chatbot Configuration', me: true, other: false },
        { feature: 'Resolution without Developer dependency', me: true, other: false },
      ],
    },

    // LANGUAGES
    idiomas: {
      title: 'LANGUAGES',
      spanish: 'Spanish',
      native: 'Native',
      english: 'English',
      intermediate: 'B1 — Intermediate',
      french: 'French',
      basic: 'A2 — Basic',
    },

    // SKILLS
    habilidades: {
      title: 'TECHNICAL SKILLS',
      sections: {
        soporte: {
          title: 'Technical Support & Troubleshooting',
          skills: ['Level 1/2 Support', 'Help Desk', 'Incident Management', 'Ticket Escalation', 'Web Application Troubleshooting', 'API Troubleshooting', 'System Monitoring', 'Log Management', 'Error Analysis', 'Pressure Resolution', 'Procedure Documentation', 'CRM / Ticket Management'],
        },
        ia: {
          title: 'AI & Automation (Specialization)',
          skills: ['Chatbots and Virtual Assistants', 'Predictive Analysis Systems', 'Process Automation', 'AI API Integration', 'Computer Vision', 'Anomaly Detection', 'Image Classification', 'Deep Learning', 'Data Processing', 'R / RStudio'],
        },
        backend: {
          title: 'Backend & Infrastructure',
          skills: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Redis', 'SQL Server', 'SQLAlchemy', 'asyncpg', 'Docker', 'Linux', 'Bash / PowerShell', 'Process Monitoring', 'ETL', 'JWT / Authentication'],
        },
        frontend: {
          title: 'Frontend & Integration',
          skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'API Integration', 'Webhooks', 'Framer Motion', 'HTML5 / CSS3'],
        },
        herramientas: {
          title: 'Tools & Productivity',
          skills: ['Git / GitHub', 'Version Control', 'Technical Documentation', 'BPMN 2.0', 'Excel', 'Technical Communication', 'Video Editing', 'Audiovisual Production'],
        },
      },
    },

    // SUPPORT CASES
    casos: {
      title: 'TECHNICAL CASES & AI',
      intro: 'These projects are told from my technical role: beyond building them, I learned to configure, monitor and document them to provide production support.',
      projects: {
        kipu: {
          name: 'KIPU',
          subtitle: 'Reservation Platform for Cultural Exchange',
          role: 'ROLE: TECHNICAL SUPPORT + MAINTAINABLE ARCHITECTURE',
          description: 'Web system designed and supported with production operation in mind: monitoring and logging configuration, and documented troubleshooting procedures so each incident had a clear resolution path.',
          stack: 'FastAPI PostgreSQL Redis Next.js TypeScript Docker Monitoring Documentation',
        },
        rutasegura: {
          name: 'RutaSegura / BusTrack',
          subtitle: 'Real-time GPS and Acoustic Anomaly Detection',
          role: 'ROLE: AI SYSTEMS IMPLEMENTATION & SUPPORT',
          description: 'I know the complete pipeline of a production AI system: how the Deep Learning model is trained, how it\'s deployed (FastAPI + Docker) and how it\'s monitored (logs, errors, performance). If something fails in the acoustic anomaly detection pipeline, I can diagnose it.',
          stack: 'Python FastAPI PostgreSQL Redis Deep Learning Computer Vision Docker',
        },
        citypet: {
          name: 'City Pet',
          subtitle: 'Community Platform for Pets',
          role: 'ROLE: HIGH-CONCURRENCY SYSTEMS SUPPORT',
          description: 'High-concurrency backend with FastAPI and asyncpg on PostgreSQL, Redis for cache and sessions, and Docker container deployment. Direct experience in load management.',
          stack: 'FastAPI asyncpg PostgreSQL Redis Docker Performance',
        },
        color: {
          name: 'color-analysis-module',
          subtitle: 'AI System with Scalable Architecture',
          role: 'ROLE: END-TO-END AI IMPLEMENTATION',
          description: 'Skin tone detection with MediaPipe (Computer Vision) and personalized recommendations (Machine Learning), with client-side vs server-side execution decision and robust testing (>90% coverage).',
          stack: 'Python MediaPipe Computer Vision Machine Learning Testing',
        },
      },
    },

    // EXPERIENCE
    experiencia: {
      title: 'EXPERIENCE',
      uceTitle: 'Intern in Educational Technology Development and Innovation',
      uceCompany: 'Institute of Economic Research, UCE · 360 hours · Aug 2024 – Aug 2025',
      uceRole: 'Initial role: full-stack developer. Final role: platform technical support specialist.',
      uceBullets: [
        'Technical incident management on complex architecture web platform',
        'Support for 200+ users (students, teachers and administration)',
        'Implementation of academic support chatbots (AI) that reduced 15% of technical queries',
        'Integration of 5 STEM tools (GeoGebra, Desmos, Wolfram Alpha, Photomath)',
        'Infrastructure configuration: Redis, Docker, process monitoring and log analysis',
        'Incident escalation at infrastructure level and troubleshooting procedure documentation',
      ],
      uceResult: 'Result: platform with 0% downtime, 200+ supported users without critical delays and 15% fewer repetitive queries thanks to the chatbot.',

      audiovisualTitle: 'Audiovisual Technician and IT Support',
      audiovisualCompany: 'Independent Production Company · Ecuador · 2023 – 2024',
      audiovisualBullets: [
        'Quick resolution of hardware failures in real-time during recordings',
        'Immediate diagnosis and correction of live audio issues',
        'Management of 50+ device technical inventory with tracking system',
        'Basic hardware repairs and procedure documentation',
      ],
      audiovisualResult: 'Result: 25% improvement in operational efficiency by leaving each equipment configured and ready for the next session.',

      conectasTitle: 'Customer Service and Commercial Management Agent',
      conectasCompany: 'Conecta Plus · Ecuador · 2024 – 2025',
      conectasBullets: [
        'Customer service on phone channels',
        'Incident management and ticket escalation',
        'Consistent KPI compliance',
        'Simultaneous handling of multiple requests in high-demand environments',
      ],

      meseroTitle: 'Banquet Server',
      meseroCompany: 'Hilton Colon Hotel · Ecuador · 2022 – 2023',
      meseroDescription: '200+ clients/event. Real-time coordination, international service standards.',

      auxiliarTitle: 'Graphic Arts Assistant',
      auxiliarCompany: 'Military Geographic Institute · Ecuador · 2018',
      auxiliarDescription: 'Inventory management, quality control, 5S methodology. 20% efficiency improvement.',
    },

    // EDUCATION
    educacion: {
      title: 'EDUCATION',
      ingenieriaTitle: 'Systems Engineering',
      ingenieriaSchool: 'Central University of Ecuador',
      ingenieriaStatus: 'Graduate — Complete curriculum',
      ingenieriaDescription: 'All academic credits approved. Degree in progress via comprehensive exam (scheduled December 2026). Training with emphasis on artificial intelligence, automation and backend architecture.',

      bachillerTitle: 'Bachelor of Science',
      bachillerSchool: 'Instituto Nacional Mejía',
      bachillerDates: '2014 – 2016',
      bachillerDescription: 'Member of the Taekwondo club during the academic period.',

      cursosTitle: 'COURSES',
      cursoCajero: 'Commercial and Banking Cashier',
      cursoAsistente: 'Credit and Collections Assistant',
    },

    // REFERENCES
    referencias: {
      title: 'REFERENCES',
      wellington: 'Wellington Yepez - Security and Prevention',
      jefferson: 'Jefferson Albuja - Senior Developer',
      christian: 'Christian Pilapanta - Music Producer',
    },

    // BUTTONS AND UI
    ui: {
      languageToggle: 'SPA / ENG',
      spanish: 'Spanish',
      english: 'English',
      showMore: 'Show more',
      showLess: 'Show less',
      download: 'Download CV',
    },
  },
};

// ================================================================
// 2. CONTEXT + PROVIDER
// ================================================================

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const CVProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    // Cargar preferencia guardada
    const savedLang = localStorage.getItem('cvLanguage') as Language | null;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('cvLanguage', lang);
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return `[${key}]`; // Fallback si no encuentra la key
      }
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ================================================================
// 3. CUSTOM HOOK
// ================================================================

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within CVProvider');
  }
  return context;
};

// ================================================================
// 4. COMPONENTES DE EJEMPLO
// ================================================================

// Botón de idioma (colocar en header)
export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => setLanguage('es')}
        className={`px-4 py-2 rounded font-medium transition ${
          language === 'es'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        🇪🇨 ESP
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded font-medium transition ${
          language === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        🇺🇸 ENG
      </button>
    </div>
  );
};

// Encabezado traducido
export const CVHeader: React.FC = () => {
  const { t } = useLanguage();
  const header = t('header');

  return (
    <header className="bg-white p-8 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{header.title}</h1>
            <p className="text-lg text-gray-700 mt-1">{header.subtitle}</p>
            <p className="text-sm text-gray-600 mt-1">{header.subsubtitle}</p>
            <p className="text-xs text-gray-500 mt-2">{header.status}</p>
          </div>
          <LanguageToggle />
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-700 mt-4">
          <span>📧 {header.email}</span>
          <span>📱 {header.phone}</span>
          <span>📍 {header.location}</span>
        </div>

        <div className="flex flex-wrap gap-4 text-sm mt-4">
          <a href="#" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            GitHub
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Portfolio
          </a>
        </div>
      </div>
    </header>
  );
};

// Sección Objetivo
export const ObjetivoSection: React.FC = () => {
  const { t } = useLanguage();
  const obj = t('objetivo');

  return (
    <section className="p-8 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{obj.title}</h2>
        <p className="text-gray-700 leading-relaxed mb-3">{obj.content}</p>
        <p className="text-gray-700 leading-relaxed font-medium text-blue-600">
          {obj.highlight}
        </p>
      </div>
    </section>
  );
};

// Sección Especialización
export const EspecializacionSection: React.FC = () => {
  const { t } = useLanguage();
  const esp = t('especializacion');

  return (
    <section className="p-8 border-b border-gray-200 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{esp.title}</h2>
        <div className="space-y-4">
          {esp.items.map((item: any, idx: number) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg border-l-4 border-blue-600"
            >
              <h3 className="font-semibold text-gray-900 mb-2">✓ {item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sección Habilidades
export const HabilidadesSection: React.FC = () => {
  const { t } = useLanguage();
  const hab = t('habilidades');

  return (
    <section className="p-8 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{hab.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(hab.sections).map(([key, section]: [string, any]) => (
            <div key={key}>
              <h3 className="font-bold text-gray-900 mb-3">{section.title}</h3>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sección Experiencia (resumida)
export const ExperienciaSection: React.FC = () => {
  const { t } = useLanguage();
  const exp = t('experiencia');

  return (
    <section className="p-8 border-b border-gray-200 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{exp.title}</h2>

        {/* UCE */}
        <div className="mb-8">
          <h3 className="font-bold text-lg text-gray-900">{exp.uceTitle}</h3>
          <p className="text-sm text-gray-600">{exp.uceCompany}</p>
          <p className="text-sm text-gray-700 mt-2 italic">{exp.uceRole}</p>
          <ul className="list-disc list-inside text-gray-700 text-sm mt-3 space-y-1">
            {exp.uceBullets.map((bullet: string, idx: number) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
          <p className="text-gray-700 font-medium text-sm mt-3">{exp.uceResult}</p>
        </div>

        {/* Audiovisual */}
        <div className="mb-8">
          <h3 className="font-bold text-lg text-gray-900">{exp.audiovisualTitle}</h3>
          <p className="text-sm text-gray-600">{exp.audiovisualCompany}</p>
          <ul className="list-disc list-inside text-gray-700 text-sm mt-3 space-y-1">
            {exp.audiovisualBullets.map((bullet: string, idx: number) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
          <p className="text-gray-700 font-medium text-sm mt-3">{exp.audiovisualResult}</p>
        </div>
      </div>
    </section>
  );
};

// ================================================================
// 5. COMPONENTE PRINCIPAL (Ejemplo de uso)
// ================================================================

export const CVApp: React.FC = () => {
  return (
    <CVProvider>
      <div className="bg-white">
        <CVHeader />
        <ObjetivoSection />
        <EspecializacionSection />
        <HabilidadesSection />
        <ExperienciaSection />
      </div>
    </CVProvider>
  );
};

export default CVApp;
