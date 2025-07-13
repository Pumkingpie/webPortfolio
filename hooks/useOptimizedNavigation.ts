'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

export function useOptimizedNavigation() {
    const router = useRouter();
    const [isNavigating, setIsNavigating] = useState(false);

    const navigateTo = useCallback(async (href: string) => {
        // Feedback inmediato
        setIsNavigating(true);
        
        // Pequeño delay para mostrar feedback visual
        await new Promise(resolve => setTimeout(resolve, 50));
        
        // Navegación
        router.push(href);
        
        // Reset del estado después de la navegación
        setTimeout(() => {
            setIsNavigating(false);
        }, 300);
    }, [router]);

    return {
        navigateTo,
        isNavigating
    };
} 