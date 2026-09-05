export type Language = 'es' | 'en'

interface LanguageOption {
  name: string
  level: string
}

interface HeaderContent {
  subtitle: string
  tagline: string
  status: string
  location: string
  download: string
}

interface ObjetivoContent {
  label: string
  intro: string
  role: string
  detail: string
}

interface EspecializacionItem {
  title: string
  description: string
}

interface EspecializacionContent {
  label: string
  items: EspecializacionItem[]
}

interface VentajaRow {
  feature: string
}

interface VentajaContent {
  title: string
  columns: { feature: string; me: string; generic: string }
  rows: VentajaRow[]
}

interface AboutContent {
  label: string
  paragraphs: string[]
  ventaja: VentajaContent
  footnote: string
  idiomasLabel: string
  languages: LanguageOption[]
}

interface SkillGroup {
  label: string
  skills: string[]
}

interface SkillsContent {
  label: string
  groups: SkillGroup[]
}

interface CaseContent {
  title: string
  subtitle: string
  role: string
  roleLabel: string
  impactLabel?: string
  impact?: string[]
  description: string
  tech: string[]
}

interface CasesContent {
  label: string
  intro: string
  items: CaseContent[]
  transferTitle: string
  transferLead: string
  transferItems: string[]
  devTitle: string
  devBadge: string
  devDescription: string
}

interface ExperienceEntry {
  title: string
  meta: string
  description: string
  points?: string[]
  resultsLabel?: string
  results?: string[]
}

interface ExperienceContent {
  label: string
  entries: ExperienceEntry[]
}

interface EducationEntry {
  title: string
  institution: string
  meta: string
  description: string
}

interface EducationContent {
  label: string
  entries: EducationEntry[]
}

interface CourseEntry {
  title: string
  description: string
}

interface CoursesContent {
  label: string
  entries: CourseEntry[]
}

interface ReferenceEntry {
  name: string
  role: string
  phone: string
}

interface ReferencesContent {
  label: string
  entries: ReferenceEntry[]
}

interface MetaContent {
  title: string
  description: string
  keywords: string
}

interface UiContent {
  print: string
  footerTagline: string
}

export interface Dictionary {
  meta: MetaContent
  header: HeaderContent
  objetivo: ObjetivoContent
  especializacion: EspecializacionContent
  about: AboutContent
  skills: SkillsContent
  cases: CasesContent
  experience: ExperienceContent
  education: EducationContent
  courses: CoursesContent
  references: ReferencesContent
  ui: UiContent
}

export const es: Dictionary = {
  meta: {
    title: 'Christian Tisalema — Especialista en Soporte Técnico e IA',
    description:
      'Especialista en Soporte Técnico N2 e implementación de soluciones IA. Configuración, troubleshooting y soporte de sistemas en producción. Christian Tisalema, Quito, Ecuador.',
    keywords:
      'Soporte Técnico N2, Help Desk, IA, Inteligencia Artificial, chatbots, automatización, troubleshooting, PostgreSQL, Redis, Docker, Quito, Ecuador',
  },
  header: {
    subtitle: 'Especialista en Soporte Técnico e Implementación de Soluciones IA',
    tagline: 'Soporte Técnico N2 · Configuración de Sistemas IA · Automatización de Procesos',
    status: 'Egresado de Ingeniería en Sistemas — Disponible para posiciones presenciales y remotas',
    location: 'Quito, Ecuador',
    download: 'Descargar CV',
  },
  objetivo: {
    label: 'Objetivo',
    intro: 'Integrarme como',
    role: 'Especialista en Soporte Técnico (Nivel N2) con especialización en sistemas de inteligencia artificial',
    detail:
      'en un equipo donde pueda garantizar la configuración, el mantenimiento y la resolución de incidentes de soluciones IA y plataformas web en producción —chatbots, automatización de procesos y sistemas de alta concurrencia—. Aporto profundidad técnica en backend e infraestructura (Python, PostgreSQL, Redis, Docker) que me permite diagnosticar y resolver problemas a nivel de API, base de datos y despliegue, sin depender del desarrollador.',
  },
  especializacion: {
    label: 'Especialización técnica',
    items: [
      {
        title: 'Soporte Técnico N2 con especialización en sistemas IA',
        description:
          'Configuración, resolución de problemas y escalación de sistemas de inteligencia artificial en producción. Diagnóstico de incidentes en chatbots, APIs y plataformas web de arquitectura compleja.',
      },
      {
        title: 'Implementación de soluciones de automatización y chatbots',
        description:
          'Despliegue y mantenimiento de sistemas de procesamiento de datos y análisis predictivo — comparable a casos reales en Ecuador como el chatbot Sophi del Banco del Pacífico o los asistentes virtuales del retail.',
      },
      {
        title: 'Profundidad técnica full-stack en sistemas IA',
        description:
          'Python + Deep Learning + APIs: análisis de tonos de piel, detección acústica de anomalías y Computer Vision. Me permite diagnosticar y resolver problemas a nivel de backend e infraestructura, no solo de escritorio.',
      },
      {
        title: 'Gestión de incidentes en entornos de alta concurrencia',
        description:
          'PostgreSQL, Redis y sistemas distribuidos con Docker. Troubleshooting de APIs, bases de datos, caché y capas de infraestructura cuando algo falla en producción.',
      },
    ],
  },
  about: {
    label: 'Sobre mí',
    paragraphs: [
      'Egresado de Ingeniería en Sistemas Informáticos de la Universidad Central del Ecuador, con formación profunda en inteligencia artificial y arquitectura backend. Entiendo cómo funcionan los sistemas IA (training, deployment, monitoring), pero mi perfil profesional se orienta a hacerlos funcionar en producción: configurarlos, diagnosticarlos y darles soporte continuo.',
      'En Ecuador, empresas como el Banco del Pacífico (Sophi), retail y fintech implementan IA pero carecen de especialistas que las gestionen. Esa es la intersección que ocupo: Soporte Técnico N2 + comprensión profunda de sistemas IA, permitiéndome resolver problemas a nivel de API, base de datos e infraestructura sin esperar al desarrollador.',
    ],
    ventaja: {
      title: 'Ventaja competitiva',
      columns: {
        feature: 'Capacidad',
        me: 'Mi perfil',
        generic: 'Help Desk genérico',
      },
      rows: [
        { feature: 'Soporte Técnico N2' },
        { feature: 'Entendimiento profundo de sistemas IA' },
        { feature: 'Diagnóstico backend (APIs, DB, logs, infraestructura)' },
        { feature: 'Configuración y soporte de chatbots y automatización' },
        { feature: 'Resolución de incidentes sin depender del desarrollador' },
      ],
    },
    footnote:
      'Casos en Ecuador: Banco del Pacífico (chatbot Sophi) · Retail (asistentes virtuales) · Fintech (análisis predictivo).',
    idiomasLabel: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'B1 — Intermedio' },
      { name: 'Francés', level: 'A2 — Básico' },
    ],
  },
  skills: {
    label: 'Habilidades',
    groups: [
      {
        label: 'Soporte Técnico & Gestión de Incidentes',
        skills: [
          'Soporte N1/N2',
          'Help Desk',
          'Gestión de incidentes',
          'Ticket Management',
          'Escalación de tickets',
          'Incident Response',
          'Troubleshooting de aplicaciones web',
          'Troubleshooting de APIs',
          'Monitoreo de sistemas',
          'Performance Monitoring',
          'Gestión de logs',
          'Análisis de errores',
          'Documentación de procedimientos',
          'CRM / Gestión de tickets',
        ],
      },
      {
        label: 'IA & Automatización (Especialización)',
        skills: [
          'Chatbots y asistentes virtuales',
          'Sistemas de análisis predictivo',
          'Automatización de procesos',
          'Integración de APIs IA',
          'Computer Vision',
          'Detección de anomalías',
          'Clasificación de imágenes',
          'Deep Learning',
          'Procesamiento de datos',
          'R / RStudio',
        ],
      },
      {
        label: 'Backend & Infraestructura',
        skills: [
          'Python',
          'FastAPI',
          'Flask',
          'PostgreSQL',
          'Redis',
          'SQL Server',
          'SQLAlchemy',
          'asyncpg',
          'Docker',
          'Linux',
          'Bash / PowerShell',
          'Monitoreo de procesos ETL',
          'JWT / Autenticación',
        ],
      },
      {
        label: 'Frontend & Integración',
        skills: [
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'JavaScript',
          'Integración de APIs',
          'Webhooks',
          'Framer Motion',
          'HTML5 / CSS3',
        ],
      },
      {
        label: 'Herramientas & Productividad',
        skills: [
          'Git / GitHub',
          'Control de versiones',
          'Documentación técnica',
          'BPMN 2.0',
          'Excel',
          'Comunicación técnica',
          'Edición de video',
          'Producción audiovisual',
        ],
      },
    ],
  },
  cases: {
    label: 'Casos de soporte & IA',
    intro:
      'Estos proyectos están contados desde mi rol técnico: además de construirlos, aprendí a configurarlos, monitorearlos y documentarlos para darles soporte en producción. Esa es la experiencia que una empresa de help desk o de sistemas no encuentra todos los días.',
    items: [
      {
        title: 'RutaSegura / BusTrack',
        subtitle: 'GPS en tiempo real y detección acústica de anomalías',
        role: 'Implementación y soporte de sistemas IA',
        roleLabel: 'Rol',
        description:
          'Conozco el pipeline completo de un sistema IA en producción: cómo se entrena el modelo de Deep Learning, cómo se despliega (FastAPI + Docker) y cómo se monitorea (logs, errores, performance). Si algo falla en el pipeline de detección acústica de anomalías, puedo diagnosticarlo. Es el tipo de IA que el mercado ecuatoriano está adoptando (chatbots, asistentes virtuales, análisis predictivo).',
        tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Deep Learning', 'Computer Vision', 'Docker'],
      },
      {
        title: 'color-analysis-module',
        subtitle: 'Sistema de IA con arquitectura escalable',
        role: 'Implementación de IA de extremo a extremo',
        roleLabel: 'Rol',
        impactLabel: 'Impacto medible',
        impact: ['Testing automatizado con >90% de cobertura'],
        description:
          'Detección de tonos de piel con MediaPipe (Computer Vision) y recomendaciones personalizadas (Machine Learning), con decisión de ejecución client-side vs server-side y testing robusto. Demuestra que puedo implementar, testear y desplegar sistemas IA — y por lo tanto configurarlos, monitorearlos y darles soporte.',
        tech: ['Python', 'MediaPipe', 'Computer Vision', 'Machine Learning', 'Testing'],
      },
      {
        title: 'City Pet',
        subtitle: 'Plataforma Comunitaria para Mascotas',
        role: 'Soporte de sistemas de alta concurrencia',
        roleLabel: 'Rol',
        description:
          'Backend de alta concurrencia con FastAPI y asyncpg sobre PostgreSQL, Redis como caché y sesiones, y despliegue en contenedores Docker. Experiencia directa en la gestión de carga: diagnosticar cuellos de botella, latencia por caché y problemas de performance en producción.',
        tech: ['FastAPI', 'asyncpg', 'PostgreSQL', 'Redis', 'Docker', 'Performance'],
      },
      {
        title: 'KIPU',
        subtitle: 'Plataforma de Reservas para Intercambios Culturales',
        role: 'Soporte técnico + arquitectura mantenible',
        roleLabel: 'Rol',
        description:
          'Sistema web diseñado y soportado pensando en su operación en producción: configuración de monitoreo y logs, y procedimientos de troubleshooting documentados para que cada incidente tuviera un camino claro de resolución. Backend con arquitectura hexagonal sobre FastAPI, PostgreSQL y Redis, frontend en Next.js y TypeScript, y despliegue con Docker.',
        tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Next.js', 'TypeScript', 'Docker', 'Monitoreo', 'Documentación'],
      },
      {
        title: 'Tziwu',
        subtitle: 'Sitio Web Corporativo',
        role: 'Implementación y despliegue web',
        roleLabel: 'Rol',
        description:
          'Sitio corporativo con diseño responsivo y animaciones fluidas. Desarrollado con Next.js, Framer Motion y Tailwind CSS. Optimizado para SEO y rendimiento.',
        tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'SEO'],
      },
      {
        title: 'Indicador 19 / CACES-ABET',
        subtitle: 'Rediseño BPMN para Acreditación Académica',
        role: 'Documentación y gestión de procesos',
        roleLabel: 'Rol',
        description:
          'Rediseño de procesos institucionales para la acreditación de la UCE ante CACES y ABET. Modelado y documentación de flujos en BPMN 2.0, con diagramas XML estandarizados para facilitar la auditoría de indicadores de calidad educativa.',
        tech: ['BPMN 2.0', 'XML', 'Documentación', 'Gestión de Procesos'],
      },
    ],
    transferTitle: 'Lo que esto significa para un rol de soporte',
    transferLead: 'He implementado sistemas complejos de IA, lo que me permite:',
    transferItems: [
      'Entender requisitos técnicos de empresas que usan IA en producción',
      'Configurar y monitorear esos sistemas (chatbots, automatización)',
      'Resolver problemas antes de que escalen',
      'Documentar procesos para que otros puedan mantenerlos',
    ],
    devTitle: 'Motor de Validación de Pagos',
    devBadge: 'En desarrollo',
    devDescription:
      'Sistema de validación y verificación de transacciones. Los detalles técnicos y de implementación se mantienen bajo confidencialidad.',
  },
  experience: {
    label: 'Experiencia',
    entries: [
      {
        title: 'Practicante en Desarrollo e Innovación Tecnológica Educativa',
        meta: 'Instituto de Investigaciones Económicas, UCE · 360 horas · Ago 2024 – Ago 2025',
        description:
          'Rol inicial: desarrollador full-stack. Rol final: especialista en soporte técnico de la plataforma en producción. Implementación de una plataforma educativa (Flask, PostgreSQL, Redis, arquitectura MVC) con un componente completo de soporte técnico a usuarios.',
        points: [
          'Gestión de incidentes técnicos en una plataforma web de arquitectura compleja (Flask, PostgreSQL, Redis, MVC)',
          'Soporte a 200+ usuarios (estudiantes, docentes y administración): troubleshooting de accesos, sesiones, autenticación JWT, base de datos y caché',
          'Implementación de chatbots de apoyo académico (IA) para resolver consultas frecuentes',
          'Integración de 5 herramientas STEM (GeoGebra, Desmos, Wolfram Alpha, Photomath) y calculadoras interactivas con MathJS',
          'Configuración de infraestructura: Redis (sesiones seguras y caché distribuido), Docker (despliegue y mantenimiento), monitoreo de procesos y análisis de logs',
          'Escalación de incidentes a nivel de infraestructura y documentación de procedimientos de troubleshooting',
        ],
        resultsLabel: 'Resultado medible',
        results: [
          'Plataforma con 0% de downtime durante toda la operación',
          '200+ usuarios soportados sin retrasos críticos',
          '15% de reducción en consultas técnicas repetitivas (chatbot IA)',
          '5 herramientas STEM integradas en un solo ecosistema',
        ],
      },
      {
        title: 'Técnico Audiovisual y Soporte IT',
        meta: 'Productora Independiente · Ecuador · 2023 – 2024',
        description:
          'Operación técnica y troubleshooting en ambiente de producción. Soporte en tiempo real y bajo presión, con gestión de inventario y mantenimiento preventivo de equipos.',
        points: [
          'Resolución rápida de fallas de hardware (cámaras, micrófonos, iluminación) en tiempo real durante las grabaciones',
          'Diagnóstico y corrección inmediata de problemas de audio en vivo (micrófonos lavalier y de condensador)',
          'Gestión de inventario técnico de 50+ dispositivos con sistema de tracking de activos',
          'Reparaciones básicas de hardware y documentación del estado de los equipos y de los procedimientos',
        ],
        resultsLabel: 'Resultado medible',
        results: [
          '25% de mejora en eficiencia operativa al dejar cada equipo configurado y listo',
          '30+ sesiones de grabación soportadas en tiempo real',
          '50+ dispositivos gestionados con mantenimiento preventivo',
        ],
      },
      {
        title: 'Agente de Atención al Cliente y Gestión Comercial',
        meta: 'Conecta Plus · Ecuador · 2024 – 2025',
        description:
          'Atención a clientes en canales telefónicos con registro y seguimiento de incidencias técnicas y comerciales mediante CRM, y escalación oportuna a equipos de soporte en entornos de alta demanda.',
        points: [
          'Gestión de incidencias y escalación de tickets a equipos de soporte técnico',
          'Cumplimiento consistente de KPIs de productividad, tiempo de atención y calidad de servicio',
          'Manejo simultáneo de múltiples solicitudes en entornos de alta demanda',
        ],
      },
      {
        title: 'Mesero de Banquetes',
        meta: 'Hotel Hilton Colon · Ecuador · 2022 – 2023',
        description:
          'Atención a 200+ clientes por evento en entornos de alto volumen, manteniendo estándares de servicio internacionales. Coordinación en tiempo real con operaciones y manejo de reclamos con enfoque al cliente.',
      },
      {
        title: 'Auxiliar de Artes Gráficas',
        meta: 'Instituto Geográfico Militar · Ecuador · 2018',
        description:
          'Gestión de inventario, control de calidad y mantenimiento básico de maquinaria bajo metodología 5S, con 20% de mejora en tiempos de búsqueda de insumos.',
      },
    ],
  },
  education: {
    label: 'Educación',
    entries: [
      {
        title: 'Ingeniería en Sistemas Informáticos',
        institution: 'Universidad Central del Ecuador',
        meta: 'Egresado — Malla curricular completa',
        description:
          'Todos los créditos académicos aprobados. Título en trámite mediante examen complexivo (programado diciembre 2026). Formación con énfasis en inteligencia artificial, automatización y arquitectura backend: ciencias de la computación, desarrollo de software, bases de datos, IA y gestión de proyectos tecnológicos.',
      },
      {
        title: 'Bachiller en Ciencias',
        institution: 'Instituto Nacional Mejía',
        meta: '2014 – 2016',
        description: 'Miembro del club de Taekwondo durante el período académico.',
      },
    ],
  },
  courses: {
    label: 'Cursos',
    entries: [
      {
        title: 'Cajero Comercial y Bancario',
        description:
          'Formación orientada al desempeño competente del rol de cajero bancario, cubriendo aspectos técnicos, normativos y de atención al cliente.',
      },
      {
        title: 'Asistente de Crédito y Cobranzas',
        description:
          'Habilidades analíticas, técnicas y de comunicación para la gestión efectiva de créditos y cobranzas, asegurando el cumplimiento de regulaciones y políticas establecidas.',
      },
    ],
  },
  references: {
    label: 'Referencias',
    entries: [
      { name: 'Wellington Yepez', role: 'Seguridad y Prevención', phone: '099 993 0086' },
      { name: 'Jefferson Albuja', role: 'Desarrollador Senior', phone: '096 299 2697' },
      { name: 'Christian Pilapanta', role: 'Productor Musical', phone: '098 468 1015' },
    ],
  },
  ui: {
    print: 'Imprimir / Guardar PDF',
    footerTagline: 'Especialista en Soporte Técnico e Implementación de Soluciones IA',
  },
}

export const en: Dictionary = {
  meta: {
    title: 'Christian Tisalema — Technical Support Specialist & AI',
    description:
      'Technical Support Level N2 specialist and AI solutions implementer. Configuration, troubleshooting and support of production systems. Christian Tisalema, Quito, Ecuador.',
    keywords:
      'Technical Support N2, Help Desk, AI, Artificial Intelligence, chatbots, automation, troubleshooting, PostgreSQL, Redis, Docker, Quito, Ecuador',
  },
  header: {
    subtitle: 'Technical Support Specialist & AI Solutions Implementation',
    tagline: 'Technical Support N2 · AI Systems Configuration · Process Automation',
    status: 'Systems Engineering Graduate — Available for on-site and remote positions',
    location: 'Quito, Ecuador',
    download: 'Download CV',
  },
  objetivo: {
    label: 'Objective',
    intro: 'To join as a',
    role: 'Technical Support Specialist (Level N2) specialized in artificial intelligence systems',
    detail:
      'in a team where I can ensure configuration, maintenance and incident resolution for AI solutions and web platforms in production —chatbots, process automation and high-concurrency systems—. I bring technical depth in backend and infrastructure (Python, PostgreSQL, Redis, Docker) that lets me diagnose and resolve issues at API, database and deployment level without depending on a developer.',
  },
  especializacion: {
    label: 'Technical specialization',
    items: [
      {
        title: 'Technical Support N2 with AI systems specialization',
        description:
          'Configuration, troubleshooting and escalation of artificial intelligence systems in production. Incident diagnosis in chatbots, APIs and complex architecture web platforms.',
      },
      {
        title: 'Implementation of automation and chatbot solutions',
        description:
          'Deployment and maintenance of data processing and predictive analytics systems — comparable to real cases in Ecuador such as Banco del Pacífico\u2019s Sophi chatbot or retail virtual assistants.',
      },
      {
        title: 'Full-stack technical depth in AI systems',
        description:
          'Python + Deep Learning + APIs: skin tone analysis, acoustic anomaly detection and Computer Vision. It allows me to diagnose and solve problems at backend and infrastructure level, not just at the desktop level.',
      },
      {
        title: 'Incident management in high-concurrency environments',
        description:
          'PostgreSQL, Redis and distributed systems with Docker. Troubleshooting of APIs, databases, cache and infrastructure layers when something fails in production.',
      },
    ],
  },
  about: {
    label: 'About me',
    paragraphs: [
      'Graduate in Computer Systems Engineering from Universidad Central del Ecuador, with deep training in artificial intelligence and backend architecture. I understand how AI systems work (training, deployment, monitoring), but my professional profile is focused on making them work in production: configuring, diagnosing and providing continuous support.',
      'In Ecuador, companies such as Banco del Pacífico (Sophi), retail and fintech implement AI but lack specialists to manage it. That is the intersection I occupy: Technical Support N2 + deep understanding of AI systems, which lets me solve problems at API, database and infrastructure level without waiting for the developer.',
    ],
    ventaja: {
      title: 'Competitive advantage',
      columns: {
        feature: 'Capability',
        me: 'My profile',
        generic: 'Generic Help Desk',
      },
      rows: [
        { feature: 'Technical Support N2' },
        { feature: 'Deep understanding of AI systems' },
        { feature: 'Backend diagnosis (APIs, DB, logs, infrastructure)' },
        { feature: 'Chatbot & automation configuration and support' },
        { feature: 'Incident resolution without depending on the developer' },
      ],
    },
    footnote:
      'Cases in Ecuador: Banco del Pacífico (Sophi chatbot) · Retail (virtual assistants) · Fintech (predictive analytics).',
    idiomasLabel: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'B1 — Intermediate' },
      { name: 'French', level: 'A2 — Basic' },
    ],
  },
  skills: {
    label: 'Skills',
    groups: [
      {
        label: 'Technical Support & Incident Management',
        skills: [
          'L1/L2 Support',
          'Help Desk',
          'Incident Management',
          'Ticket Management',
          'Ticket Escalation',
          'Incident Response',
          'Web Application Troubleshooting',
          'API Troubleshooting',
          'System Monitoring',
          'Performance Monitoring',
          'Log Management',
          'Error Analysis',
          'Procedure Documentation',
          'CRM / Ticket Management',
        ],
      },
      {
        label: 'AI & Automation (Specialization)',
        skills: [
          'Chatbots and Virtual Assistants',
          'Predictive Analytics Systems',
          'Process Automation',
          'AI API Integration',
          'Computer Vision',
          'Anomaly Detection',
          'Image Classification',
          'Deep Learning',
          'Data Processing',
          'R / RStudio',
        ],
      },
      {
        label: 'Backend & Infrastructure',
        skills: [
          'Python',
          'FastAPI',
          'Flask',
          'PostgreSQL',
          'Redis',
          'SQL Server',
          'SQLAlchemy',
          'asyncpg',
          'Docker',
          'Linux',
          'Bash / PowerShell',
          'ETL Process Monitoring',
          'JWT / Authentication',
        ],
      },
      {
        label: 'Frontend & Integration',
        skills: [
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'JavaScript',
          'API Integration',
          'Webhooks',
          'Framer Motion',
          'HTML5 / CSS3',
        ],
      },
      {
        label: 'Tools & Productivity',
        skills: [
          'Git / GitHub',
          'Version Control',
          'Technical Documentation',
          'BPMN 2.0',
          'Excel',
          'Technical Communication',
          'Video Editing',
          'Audiovisual Production',
        ],
      },
    ],
  },
  cases: {
    label: 'Support cases & AI',
    intro:
      'These projects are told from my technical role: beyond building them, I learned to configure, monitor and document them to provide production support. That is the kind of experience a help desk or systems company does not find every day.',
    items: [
      {
        title: 'RutaSegura / BusTrack',
        subtitle: 'Real-time GPS and Acoustic Anomaly Detection',
        role: 'AI systems implementation and support',
        roleLabel: 'Role',
        description:
          'I know the complete pipeline of an AI system in production: how the Deep Learning model is trained, how it is deployed (FastAPI + Docker) and how it is monitored (logs, errors, performance). If something fails in the acoustic anomaly detection pipeline, I can diagnose it. This is the kind of AI the Ecuadorian market is adopting (chatbots, virtual assistants, predictive analytics).',
        tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Deep Learning', 'Computer Vision', 'Docker'],
      },
      {
        title: 'color-analysis-module',
        subtitle: 'AI System with Scalable Architecture',
        role: 'End-to-end AI implementation',
        roleLabel: 'Role',
        impactLabel: 'Measurable impact',
        impact: ['Automated testing with >90% coverage'],
        description:
          'Skin tone detection with MediaPipe (Computer Vision) and personalized recommendations (Machine Learning), with client-side vs server-side execution decision and robust testing. It proves I can implement, test and deploy AI systems — and therefore configure, monitor and support them.',
        tech: ['Python', 'MediaPipe', 'Computer Vision', 'Machine Learning', 'Testing'],
      },
      {
        title: 'City Pet',
        subtitle: 'Community Platform for Pets',
        role: 'High-concurrency systems support',
        roleLabel: 'Role',
        description:
          'High-concurrency backend with FastAPI and asyncpg on PostgreSQL, Redis for cache and sessions, and Docker container deployment. Direct experience in load management: diagnosing bottlenecks, cache latency and production performance issues.',
        tech: ['FastAPI', 'asyncpg', 'PostgreSQL', 'Redis', 'Docker', 'Performance'],
      },
      {
        title: 'KIPU',
        subtitle: 'Reservation Platform for Cultural Exchanges',
        role: 'Technical support + maintainable architecture',
        roleLabel: 'Role',
        description:
          'Web system designed and supported with production operation in mind: monitoring and logging configuration, and documented troubleshooting procedures so every incident had a clear resolution path. Backend with hexagonal architecture on FastAPI, PostgreSQL and Redis, Next.js and TypeScript frontend, and Docker deployment.',
        tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Next.js', 'TypeScript', 'Docker', 'Monitoring', 'Documentation'],
      },
      {
        title: 'Tziwu',
        subtitle: 'Corporate Website',
        role: 'Web implementation and deployment',
        roleLabel: 'Role',
        description:
          'Corporate site with responsive design and smooth animations. Built with Next.js, Framer Motion and Tailwind CSS. Optimized for SEO and performance.',
        tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'SEO'],
      },
      {
        title: 'Indicator 19 / CACES-ABET',
        subtitle: 'BPMN Redesign for Academic Accreditation',
        role: 'Process documentation and management',
        roleLabel: 'Role',
        description:
          'Redesign of institutional processes for UCE accreditation with CACES and ABET. Process modeling and documentation in BPMN 2.0, with standardized XML diagrams to facilitate the audit of educational quality indicators.',
        tech: ['BPMN 2.0', 'XML', 'Documentation', 'Process Management'],
      },
    ],
    transferTitle: 'What this means for a support role',
    transferLead: 'I have implemented complex AI systems, which allows me to:',
    transferItems: [
      'Understand the technical requirements of companies using AI in production',
      'Configure and monitor those systems (chatbots, automation)',
      'Solve problems before they escalate',
      'Document processes so others can maintain them',
    ],
    devTitle: 'Payment Validation Engine',
    devBadge: 'In development',
    devDescription:
      'Transaction validation and verification system. Technical and implementation details remain under confidentiality.',
  },
  experience: {
    label: 'Experience',
    entries: [
      {
        title: 'Intern in Educational Technology Development and Innovation',
        meta: 'Institute of Economic Research, UCE · 360 hours · Aug 2024 – Aug 2025',
        description:
          'Initial role: full-stack developer. Final role: platform technical support specialist in production. Implementation of an educational platform (Flask, PostgreSQL, Redis, MVC architecture) with a complete user support component.',
        points: [
          'Technical incident management on a complex architecture web platform (Flask, PostgreSQL, Redis, MVC)',
          'Support for 200+ users (students, teachers and administration): troubleshooting of access, sessions, JWT authentication, database and cache',
          'Implementation of academic support chatbots (AI) to handle frequent queries',
          'Integration of 5 STEM tools (GeoGebra, Desmos, Wolfram Alpha, Photomath) and MathJS interactive calculators',
          'Infrastructure configuration: Redis (secure sessions and distributed cache), Docker (deployment and maintenance), process monitoring and log analysis',
          'Incident escalation at infrastructure level and troubleshooting procedure documentation',
        ],
        resultsLabel: 'Measurable results',
        results: [
          'Platform with 0% downtime during full operation',
          '200+ supported users without critical delays',
          '15% reduction in repetitive technical queries (AI chatbot)',
          '5 STEM tools integrated into a single ecosystem',
        ],
      },
      {
        title: 'Audiovisual Technician and IT Support',
        meta: 'Independent Production Company · Ecuador · 2023 – 2024',
        description:
          'Technical operation and troubleshooting in a production environment. Real-time, high-pressure support, with equipment inventory management and preventive maintenance.',
        points: [
          'Quick hardware failure resolution (cameras, microphones, lighting) in real time during recordings',
          'Immediate diagnosis and correction of live audio issues (lavalier and condenser microphones)',
          'Technical inventory management of 50+ devices with asset tracking system',
          'Basic hardware repairs and equipment status and procedure documentation',
        ],
        resultsLabel: 'Measurable results',
        results: [
          '25% improvement in operational efficiency by leaving every setup configured and ready',
          '30+ recording sessions supported in real time',
          '50+ managed devices with preventive maintenance',
        ],
      },
      {
        title: 'Customer Service and Commercial Management Agent',
        meta: 'Conecta Plus · Ecuador · 2024 – 2025',
        description:
          'Customer service over phone channels with registration and follow-up of technical and commercial incidents through CRM, and timely escalation to support teams in high-demand environments.',
        points: [
          'Incident management and ticket escalation to technical support teams',
          'Consistent compliance with productivity, handling-time and service-quality KPIs',
          'Simultaneous handling of multiple requests in high-demand environments',
        ],
      },
      {
        title: 'Banquet Server',
        meta: 'Hilton Colon Hotel · Ecuador · 2022 – 2023',
        description:
          'Service to 200+ clients per event in high-volume environments, maintaining international service standards. Real-time coordination with operations and client-focused complaint handling.',
      },
      {
        title: 'Graphic Arts Assistant',
        meta: 'Military Geographic Institute · Ecuador · 2018',
        description:
          'Inventory management, quality control and basic machinery maintenance under 5S methodology, with 20% improvement in input search times.',
      },
    ],
  },
  education: {
    label: 'Education',
    entries: [
      {
        title: 'Computer Systems Engineering',
        institution: 'Universidad Central del Ecuador',
        meta: 'Graduate — Full curriculum completed',
        description:
          'All academic credits approved. Degree in process via comprehensive exam (scheduled December 2026). Training with emphasis on artificial intelligence, automation and backend architecture: computer science, software development, databases, AI and technology project management.',
      },
      {
        title: 'Bachelor of Science',
        institution: 'Instituto Nacional Mejía',
        meta: '2014 – 2016',
        description: 'Member of the Taekwondo club during the academic period.',
      },
    ],
  },
  courses: {
    label: 'Courses',
    entries: [
      {
        title: 'Commercial and Banking Cashier',
        description:
          'Training focused on the competent performance of the bank cashier role, covering technical, regulatory and customer service aspects.',
      },
      {
        title: 'Credit and Collections Assistant',
        description:
          'Analytical, technical and communication skills for the effective management of credit and collections, ensuring compliance with established regulations and policies.',
      },
    ],
  },
  references: {
    label: 'References',
    entries: [
      { name: 'Wellington Yepez', role: 'Security and Prevention', phone: '099 993 0086' },
      { name: 'Jefferson Albuja', role: 'Senior Developer', phone: '096 299 2697' },
      { name: 'Christian Pilapanta', role: 'Music Producer', phone: '098 468 1015' },
    ],
  },
  ui: {
    print: 'Print / Save PDF',
    footerTagline: 'Technical Support Specialist & AI Solutions Implementation',
  },
}
