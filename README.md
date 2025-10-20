# CV Profesional Interactivo

Un CV profesional interactivo desarrollado con Next.js y Tailwind CSS, optimizado para operaciones bancarias y tecnología.

## 🚀 Características

- **Diseño Responsive**: Se adapta perfectamente a dispositivos móviles y desktop
- **Animaciones Suaves**: Transiciones y efectos hover profesionales
- **Descarga PDF**: Funcionalidad para descargar el CV en formato PDF
- **SEO Optimizado**: Meta tags y estructura optimizada para motores de búsqueda
- **Código Modular**: Componentes reutilizables y bien organizados
- **Paleta Profesional**: Colores corporativos azules con fondo limpio

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework de React para producción
- **React 18**: Biblioteca de interfaz de usuario
- **Tailwind CSS**: Framework de CSS utilitario
- **TypeScript**: Tipado estático para JavaScript
- **React Icons**: Iconografía moderna
- **jsPDF + html2canvas**: Generación de PDFs
- **Vercel**: Plataforma de despliegue

## 📋 Secciones del CV

1. **Header**: Información personal, contacto y botón de descarga PDF
2. **Sobre Mí**: Descripción profesional y objetivos
3. **Habilidades**: Organizadas por grupos (Técnicas, Programación, Bases de Datos, Soft Skills, Office)
4. **Experiencia**: Historial profesional con logros destacados
5. **Educación**: Formación académica y certificaciones
6. **Proyectos**: Portfolio de proyectos técnicos relevantes
7. **Footer**: Información de contacto y redes sociales

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos

- Node.js 18+ 
- npm o yarn
- Git

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/cv-profesional-interactivo.git
   cd cv-profesional-interactivo
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📦 Despliegue en Vercel

### Opción 1: Despliegue Automático desde GitHub

1. **Crear repositorio en GitHub**
   ```bash
   # Si no tienes un repositorio remoto
   git init
   git add .
   git commit -m "Initial commit: CV Profesional Interactivo"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/cv-profesional-interactivo.git
   git push -u origin main
   ```

2. **Conectar con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "New Project"
   - Selecciona tu repositorio `cv-profesional-interactivo`
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Haz clic en "Deploy"

3. **Configuración automática**
   - Vercel configurará automáticamente:
     - Build Command: `npm run build`
     - Output Directory: `.next`
     - Install Command: `npm install`

### Opción 2: Despliegue Manual con Vercel CLI

1. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login en Vercel**
   ```bash
   vercel login
   ```

3. **Desplegar**
   ```bash
   # En el directorio del proyecto
   vercel
   
   # Para producción
   vercel --prod
   ```

### Opción 3: Despliegue desde GitHub con configuración personalizada

1. **Crear archivo `vercel.json`** (opcional)
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "installCommand": "npm install",
     "framework": "nextjs"
   }
   ```

2. **Variables de entorno** (si las necesitas)
   - En el dashboard de Vercel, ve a tu proyecto
   - Settings → Environment Variables
   - Agrega las variables necesarias

## 🌐 Configuración de Dominio Personalizado

1. **En el dashboard de Vercel**
   - Ve a tu proyecto
   - Settings → Domains
   - Agrega tu dominio personalizado

2. **Configurar DNS**
   - Agrega un registro CNAME apuntando a tu proyecto de Vercel
   - Ejemplo: `cv.tudominio.com` → `tu-proyecto.vercel.app`

## 📱 Personalización

### Cambiar Información Personal

Edita los siguientes archivos para personalizar tu CV:

- `components/Header.tsx`: Información de contacto
- `components/About.tsx`: Descripción personal
- `components/Skills.tsx`: Habilidades por grupos
- `components/Experience.tsx`: Experiencia laboral
- `components/Education.tsx`: Educación y certificaciones
- `components/Projects.tsx`: Proyectos destacados

### Cambiar Colores

Modifica `tailwind.config.js` para cambiar la paleta de colores:

```javascript
colors: {
  primary: {
    // Cambia estos valores por tus colores corporativos
    500: '#3b82f6', // Azul principal
    600: '#2563eb', // Azul hover
  }
}
```

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `components/`
2. Importa y agrega en `pages/index.tsx`
3. Mantén la estructura de clases CSS consistente

## 🔧 Scripts Disponibles

```bash
npm run dev      # Desarrollo local
npm run build    # Build para producción
npm run start    # Servidor de producción
npm run lint     # Linter de código
```

## 📊 Optimizaciones Incluidas

- **Lazy Loading**: Carga diferida de imágenes
- **Code Splitting**: División automática del código
- **SEO**: Meta tags optimizados
- **Performance**: Optimizaciones de Next.js
- **Accessibility**: Estructura semántica HTML

## 🐛 Solución de Problemas

### Error de Build
```bash
# Limpiar caché
rm -rf .next
npm run build
```

### Problemas con PDF
- Asegúrate de que `html2canvas` y `jspdf` estén instalados
- Verifica que el elemento con id `cv-content` exista

### Problemas de Estilos
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- **Email**: letisidw@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/david-tisalema-507043359
- **GitHub**: https://github.com/Tisicd

---

⭐ Si este proyecto te fue útil, ¡dale una estrella en GitHub!
