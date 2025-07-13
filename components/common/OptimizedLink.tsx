'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { useOptimizedNavigation } from '@/hooks/useOptimizedNavigation';

interface OptimizedLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: 'default' | 'button';
    size?: 'sm' | 'md' | 'lg';
}

export function OptimizedLink({
    href,
    children,
    className = '',
    onClick,
    variant = 'default',
    size = 'md'
}: OptimizedLinkProps) {
    const { navigateTo, isNavigating } = useOptimizedNavigation();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        // Ejecutar onClick si existe
        if (onClick) {
            onClick();
        }

        // Navegación optimizada
        navigateTo(href);
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.02 },
        tap: { scale: 0.98 },
        loading: { scale: 0.95 }
    };

    const linkVariants = {
        initial: { opacity: 1 },
        hover: { opacity: 0.8 },
        loading: { opacity: 0.6 }
    };

    if (variant === 'button') {
        const sizeClasses = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg'
        };

        return (
            <motion.button
                className={`rounded-md font-medium transition-colors ${sizeClasses[size]} ${className}`}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                animate={isNavigating ? "loading" : "initial"}
                onClick={handleClick}
                disabled={isNavigating}
            >
                {isNavigating ? (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mx-auto"
                    />
                ) : (
                    children
                )}
            </motion.button>
        );
    }

    return (
        <motion.div
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            animate={isNavigating ? "loading" : "initial"}
        >
            <Link
                href={href}
                className={`${className} ${isNavigating ? 'pointer-events-none' : ''}`}
                onClick={handleClick}
            >
                {children}
            </Link>
        </motion.div>
    );
} 