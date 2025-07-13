'use client';

import { motion } from "framer-motion";

export function GeometricShapes() {
  return (
    <motion.div
      className="relative w-full h-full hidden md:block"
      initial={{ opacity: 0 }}         // Inicia con opacidad 0
      animate={{ opacity: 1 }}         // Finaliza con opacidad 1
      transition={{ duration: 2 }}     // Duración de la animación
    >
      <motion.div
        className="absolute right-0 top-0 w-1/2 h-1/2 bg-[#001427] rounded-bl-full"
        initial={{ x: -100 }}          // Empieza desplazado a la izquierda
        animate={{ x: 0 }}             // Se mueve a su posición original
        transition={{ duration: 2 }}   // Duración de la animación
      />

      <motion.div
        className="absolute right-1/4 top-1/4 w-1/4 h-1/4 bg-[#708D81] rotate-45"
        initial={{ rotate: 0 }}        // Empieza sin rotación
        animate={{ rotate: 45 }}       // Rota 45 grados
        transition={{ duration: 2 }}   // Duración de la animación
      />

      <motion.div
        className="absolute right-0 bottom-0 w-2/3 h-1/3 bg-[#F4D03F] rounded-tl-full"
        initial={{ scale: 0 }}         // Empieza escalado a 0
        animate={{ scale: 1 }}         // Escala a tamaño normal
        transition={{ duration: 2 }}   // Duración de la animación
      />

      <motion.div
        className="absolute left-1/4 bottom-1/4 w-1/5 h-1/5 bg-white border-4 border-[#001427]"
        initial={{ opacity: 0 }}       // Empieza invisible
        animate={{ opacity: 1 }}       // Se vuelve visible
        transition={{ duration: 2 }}   // Duración de la animación
      />

      <motion.div
        className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-[#BF0603] clip-triangle"
        initial={{ scale: 0 }}         // Empieza escalado a 0
        animate={{ scale: 1 }}         // Escala a tamaño normal
        transition={{ duration: 2 }}   // Duración de la animación
      />
    </motion.div>
  );
}
