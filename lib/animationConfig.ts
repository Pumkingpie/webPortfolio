// Configuraciones de animación optimizadas para mejor INP

export const animationConfig = {
    // Transiciones de página
    pageTransition: {
        duration: 0.3,
        ease: "anticipate" as const,
        type: "tween" as const
    },

    // Animaciones de entrada
    fadeInUp: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: "easeOut" as const }
    },

    // Animaciones de escala
    scaleIn: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.3, ease: "easeOut" as const }
    },

    // Animaciones de stagger
    staggerContainer: {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    },

    // Variants para contenedores
    containerVariants: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    },

    // Variants para elementos individuales
    itemVariants: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    },

    // Configuración de viewport optimizada
    viewportConfig: {
        once: true,
        margin: "-100px",
        amount: 0.3
    },

    // Transiciones de hover optimizadas
    hoverTransition: {
        duration: 0.2,
        ease: "easeInOut" as const
    },

    // Transiciones de tap optimizadas
    tapTransition: {
        duration: 0.1,
        ease: "easeInOut" as const
    }
};

// Hook para obtener configuraciones específicas
export const useAnimationConfig = () => {
    return {
        ...animationConfig,
        // Configuraciones específicas para componentes
        hero: {
            ...animationConfig.containerVariants,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        },
        card: {
            ...animationConfig.scaleIn,
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 }
        }
    };
}; 