import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';

const CursorReflection = () => {
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);
    const controls = useAnimation();
    const [isClicked, setIsClicked] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrame: number;
        const move = (e: MouseEvent) => {
            animationFrame = requestAnimationFrame(() => {
                cursorX.set(e.clientX);
                cursorY.set(e.clientY);
            });
        };
        window.addEventListener('mousemove', move);
        return () => {
            window.removeEventListener('mousemove', move);
            cancelAnimationFrame(animationFrame);
        };
    }, [cursorX, cursorY]);

    useEffect(() => {
        const handleClick = () => {
            setIsClicked(true);
            controls.start({
                scale: [1, 1.5, 1],
                background: [
                    'radial-gradient(circle, rgba(103,101,240,0.25) 0%, rgba(103,101,240,0.10) 60%, transparent 100%)',
                    'radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(103,101,240,0.20) 60%, transparent 100%)',
                    'radial-gradient(circle, rgba(103,101,240,0.25) 0%, rgba(103,101,240,0.10) 60%, transparent 100%)',
                ],
                transition: { duration: 0.4, times: [0, 0.5, 1] }
            }).then(() => setIsClicked(false));
        };
        window.addEventListener('mousedown', handleClick);
        return () => window.removeEventListener('mousedown', handleClick);
    }, [controls]);

    return (
        <motion.div
            ref={ref}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 100,
            }}
            aria-hidden="true"
        >
            <motion.div
                animate={controls}
                style={{
                    position: 'fixed',
                    left: cursorX,
                    top: cursorY,
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(103,101,240,0.25) 0%, rgba(103,101,240,0.10) 60%, transparent 100%)',
                    filter: 'blur(8px)',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </motion.div>
    );
};

export default CursorReflection; 