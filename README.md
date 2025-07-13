# 🚀 Santiago Martinez - Portafolio Web

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.3-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> Portafolio personal moderno y responsive desarrollado con las últimas tecnologías web. Diseñado para mostrar proyectos, habilidades técnicas y experiencia profesional de manera elegante e interactiva.

## ✨ Características

### 🎨 **Diseño y UX**

- **Diseño moderno y minimalista** con paleta de colores profesional
- **Totalmente responsive** - optimizado para móviles, tablets y desktop
- **Animaciones fluidas** con Framer Motion para una experiencia inmersiva
- **Navegación suave** con scroll optimizado y indicador de progreso
- **Efectos visuales** como partículas flotantes y reflejos del cursor

### 🛠️ **Funcionalidades**

- **Sección Hero** con animaciones de texto y llamadas a la acción
- **Sobre Mí** con información personal y experiencia profesional
- **Portafolio** con proyectos destacados y enlaces a demos/código
- **Habilidades Técnicas** con iconos de tecnologías
- **Formulario de Contacto** con validación y medidas de seguridad
- **Navegación inteligente** con optimización de rutas

### 🔒 **Seguridad y Performance**

- **Validación de formularios** con sanitización de inputs
- **Rate limiting** para prevenir spam
- **Optimización de imágenes** con Next.js Image
- **Lazy loading** de componentes no críticos
- **Fuentes optimizadas** con preload y fallbacks
- **SEO optimizado** con metadatos y estructura semántica

## 🚀 Tecnologías Utilizadas

### **Frontend**

- **Next.js 15.3.5** - Framework React con App Router
- **React 19.0.0** - Biblioteca de interfaz de usuario
- **TypeScript 5.0** - Tipado estático para JavaScript
- **Tailwind CSS 4.0** - Framework CSS utility-first
- **Framer Motion 12.23.3** - Biblioteca de animaciones

### **Herramientas de Desarrollo**

- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **Turbopack** - Bundler rápido para desarrollo

### **Librerías Adicionales**

- **Lucide React** - Iconos modernos
- **Class Variance Authority** - Sistema de variantes de componentes
- **i18next** - Internacionalización (preparado para múltiples idiomas)

## 📦 Instalación

### Prerrequisitos

- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

### Pasos de instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/Pumkingpie/webPortfolio.git
cd webPortfolio
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecutar en desarrollo**

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abrir en el navegador**

```
http://localhost:3000
```

### Scripts disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo con Turbopack
npm run build    # Construye la aplicación para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 📁 Estructura del Proyecto

```
webPortfolio/
├── app/                     # App Router de Next.js
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página principal
├── components/             # Componentes React
│   ├── common/             # Componentes comunes
│   │   ├── CursorReflection.tsx
│   │   ├── NavigationProgress.tsx
│   │   ├── OptimizedLink.tsx
│   │   └── index.ts
│   ├── layout/             # Componentes de layout
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── sections/           # Secciones principales
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── index.ts
│   ├── ui/                 # Componentes de UI
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── index.ts
│   ├── floating-paper.tsx  # Animaciones de fondo
│   └── robo-animations.tsx # Animaciones de robots
├── hooks/                  # Custom hooks
│   └── useOptimizedNavigation.ts
├── lib/                    # Utilidades y configuraciones
│   └── animationConfig.ts
├── public/                 # Archivos estáticos
└── [archivos de configuración]
```

## 🎯 Características Destacadas

### **Optimización de Performance**

- **Lazy loading** de componentes pesados
- **Optimización de imágenes** automática
- **Preload** de recursos críticos
- **Animaciones optimizadas** para móviles
- **Bundle splitting** automático

### **Accesibilidad**

- **Navegación por teclado** completa
- **Etiquetas ARIA** apropiadas
- **Contraste de colores** optimizado
- **Estructura semántica** HTML

### **SEO**

- **Metadatos** dinámicos
- **Open Graph** tags
- **Sitemap** automático
- **Robots.txt** configurado

## 🌐 Despliegue

### **Vercel (Recomendado)**

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El despliegue será automático en cada push

### **Netlify**

1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de salida: `.next`

### **GitHub Pages**

Requiere configuración adicional para Next.js estático.

## 🔧 Configuración y Personalización

### **Personalización del Contenido**

- **Colores**: Modifica la paleta en `tailwind.config.ts`
- **Contenido**: Actualiza textos directamente en los componentes de secciones
- **Proyectos**: Edita el array de proyectos en `components/sections/Portfolio.tsx`
- **Habilidades**: Modifica las tecnologías en `components/sections/Skills.tsx`
- **Información de contacto**: Actualiza en `components/sections/Contact.tsx`

### **Configuración de Seguridad**

- **Formulario de contacto**: Incluye validación, sanitización y rate limiting
- **Sin variables de entorno sensibles**: Configuración directa en componentes
- **Protección contra XSS**: Sanitización automática de inputs
- **Rate limiting**: Máximo 3 envíos por minuto por IP

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

⭐ **Si te gusta este proyecto, ¡déjame una estrella en GitHub!**
