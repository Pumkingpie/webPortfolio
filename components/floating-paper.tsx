"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export function FloatingPaper({ count = 8 }) {
    const [isClient, setIsClient] = useState(false)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        setIsClient(true)
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        })

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // No renderizar nada hasta que estemos en el cliente
    if (!isClient) {
        return null
    }

    // Generar posiciones fijas para evitar cambios en cada render
    const positions = Array.from({ length: count }, (_, i) => ({
        x: ((i * 137) % dimensions.width) || 100,
        y: ((i * 233) % dimensions.height) || 100,
        delay: i * 0.5,
        duration: 25 + (i % 3) * 5,
    }))

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {positions.map((pos, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                        x: pos.x,
                        y: pos.y,
                        opacity: 0,
                    }}
                    animate={{
                        x: [
                            pos.x,
                            (pos.x + 200) % dimensions.width,
                            (pos.x - 150) % dimensions.width,
                            pos.x,
                        ],
                        y: [
                            pos.y,
                            (pos.y - 100) % dimensions.height,
                            (pos.y + 150) % dimensions.height,
                            pos.y,
                        ],
                        rotate: [0, 180, 360],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: pos.duration,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: pos.delay,
                    }}
                >
                    <div className="relative w-12 h-16 bg-[#27246C]/20 backdrop-blur-sm rounded-lg border border-[#4F46CF]/30 flex items-center justify-center transform hover:scale-110 transition-transform shadow-lg">
                        <FileText className="w-6 h-6 text-[#A1A9FF]/60" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6765F0]/10 to-transparent rounded-lg" />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
