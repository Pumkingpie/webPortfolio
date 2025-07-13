'use client';
import { Card, CardContent } from '@/components/ui'
import { OptimizedLink } from '@/components/common'
import { motion } from "framer-motion"
import Image from "next/image";
function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Plataforma E-commerce",
      description: "Una plataforma e-commerce full-stack construida con React, Node.js y MongoDB",
      image: "https://picsum.photos/600/400?random=1",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project"
    },
    {
      id: 2,
      title: "Aplicación de Gestión de Tareas",
      description: "Una aplicación colaborativa de gestión de tareas con actualizaciones en tiempo real",
      image: "https://picsum.photos/600/400?random=2",
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project"
    },
    {
      id: 3,
      title: "Panel de Redes Sociales",
      description: "Panel de análisis para métricas y engagement de redes sociales",
      image: "https://picsum.photos/600/400?random=3",
      tags: ["TypeScript", "Next.js", "Chart.js"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project"
    },
    {
      id: 4,
      title: "Aplicación del Clima",
      description: "Aplicación de pronóstico del clima en tiempo real con servicios de ubicación",
      image: "https://picsum.photos/600/400?random=4",
      tags: ["React", "OpenWeather API", "Geolocation"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project"
    },
    {
      id: 5,
      title: "Buscador de Recetas",
      description: "Busca y guarda tus recetas favoritas con seguimiento de ingredientes",
      image: "https://picsum.photos/600/400?random=5",
      tags: ["React", "Redux", "Spoonacular API"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project"
    },
    {
      id: 6,
      title: "Sitio Web de Portafolio",
      description: "Sitio web de portafolio personal construido con tecnologías modernas",
      image: "https://picsum.photos/600/400?random=6",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project"
    }
  ];
  return (
    <section id="work" className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Trabajos Destacados</h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto aspect-[3/2] object-cover rounded-lg mb-4"
                    loading={project.id <= 3 ? "eager" : "lazy"}
                    priority={project.id <= 2}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#A1A9FF] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#4F46CF] text-white text-sm rounded-full "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <OptimizedLink
                    href={project.demoLink}
                    variant="button"
                    className="flex-1 bg-[#5B56E0] hover:bg-[#6765F0] text-white"
                  >
                    Demo en Vivo
                  </OptimizedLink>
                  <OptimizedLink
                    href={project.codeLink}
                    variant="button"
                    className="flex-1 bg-[#27246C] hover:bg-[#21205A] text-white"
                  >
                    Ver Código
                  </OptimizedLink>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { Portfolio };
