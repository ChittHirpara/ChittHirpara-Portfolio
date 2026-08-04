import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
    const [isHovered, setIsHovered] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const onMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            if (!isVisible) setIsVisible(true)
        }

        const onMouseOver = (e) => {
            const target = e.target
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovered(true)
            } else {
                setIsHovered(false)
            }
        }

        const onMouseLeave = () => setIsVisible(false)

        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseover', onMouseOver)
        document.addEventListener('mouseleave', onMouseLeave)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseover', onMouseOver)
            document.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [isVisible])

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden lg:block">
            {/* Small glowing core dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 rounded-full bg-orange-400 mix-blend-screen shadow-[0_0_15px_#f97316]"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? '#38bdf8' : '#f97316',
                }}
                transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.1 }}
            />

            {/* Smooth trailing ambient glow ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-orange-400/40 pointer-events-none"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovered ? 1.8 : 1,
                    borderColor: isHovered ? 'rgba(56, 189, 248, 0.6)' : 'rgba(249, 115, 22, 0.4)',
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 25, mass: 0.2 }}
            />
        </div>
    )
}
