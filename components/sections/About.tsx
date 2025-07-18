'use client';
import { OptimizedLink } from '@/components/common'
import { motion } from "framer-motion";
import Image from 'next/image';


function About() {
  return (
    <section id="about" className="text-white ">
      <motion.div
        className="w-full px-4 py-16"
        initial={{ opacity: 0, y: 100 }}  // Empieza invisibles y desplazadas
        whileInView={{ opacity: 1, y: 0 }}  // Se vuelven visibles y se desplazan a su posición
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Sobre Mí</h2>
              <h3 className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'>¡Hola! Soy Santiago Martinez</h3>
              <p className="text-gray-200">
                Soy un desarrollador full-stack apasionado con experiencia en tecnologías frontend y backend. Mis habilidades incluyen Python y varios frameworks frontend. Me enfoco en crear soluciones limpias, eficientes y escalables que resuelven problemas del mundo real.
              </p>
              <ul className="list-disc list-inside text-pink-300">
                <li>Frontend: HTML, CSS, JavaScript, TypeScript, React</li>
                <li>Backend: Python</li>
                <li>Framework: Next.js</li>
                <li>Base de Datos: MySQL</li>
                <li>Otros: Git, APIs RESTful, Metodologías Ágiles</li>
              </ul>
              <OptimizedLink href="/cv.pdf" variant="button" className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:brightness-110 transition-all duration-300">
                Descargar CV
              </OptimizedLink>
            </div>
            <div className="relative h-[400px] flex items-center justify-center">
              <motion.div
                className="absolute left-0 top-0 w-64 h-64 bg-[#181028] border-2 border-pink-500/30 rounded-br-[100px] shadow-lg"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
              />
              <motion.div
                className="absolute right-0 bottom-0 w-48 h-48 bg-[#181028] border-2 border-yellow-400/20 shadow-lg"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
              />
              <motion.div
                className="absolute left-32 top-32 w-32 h-32 bg-[#272046] border-2 border-purple-600/30 shadow-lg"
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 45, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
              />
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 100, delay: 0.8 }}
                >
                  <Image
                    src="https://picsum.photos/300/300"
                    alt="Avatar de Desarrollador Full-Stack"
                    width={300}
                    height={300}
                    className="rounded-full border-4 border-white object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export { About };

