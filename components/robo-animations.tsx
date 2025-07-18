"use client"

import { motion } from "framer-motion"
import { Bot } from "lucide-react"
import { useState, useEffect } from "react"

export function RoboAnimation() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    // No renderizar nada hasta que estemos en el cliente
    if (!isClient) {
        return null
    }

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
                className="absolute top-1/3 right-1/6 flex items-center justify-center"
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            >
                <div className="relative">
                    <motion.div
                        className="absolute -inset-6 bg-[#ee2a7b]/20 rounded-full blur-xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        animate={{
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        <Bot className="w-20 h-20 text-[#a21caf] drop-shadow-lg" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Segundo robot más pequeño */}
            <motion.div
                className="absolute bottom-1/3 left-1/6 flex items-center justify-center"
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                }}
            >
                <div className="relative">
                    <motion.div
                        className="absolute -inset-4 bg-[#ec4899]/25 rounded-full blur-lg"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                    <motion.div
                        animate={{
                            rotate: [0, -3, 3, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    >
                        <Bot className="w-14 h-14 text-[#a21caf] drop-shadow-lg" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
