import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from '../components/Navbar'
import LabSection from '../components/LabSection'
import ClosingSection from '../components/ClosingSection'

export default function Labs() {
    // Initialize Lenis smooth scrolling
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <div className="relative bg-black min-h-screen">
            {/* Noise Texture Overlay */}
            <div className="fixed inset-0 noise-texture pointer-events-none z-0" />

            {/* Navbar */}
            <Navbar />

            {/* Spacer for navbar */}
            <div className="h-24" />

            {/* Lab Section */}
            <LabSection />

            {/* Closing / Footer */}
            <ClosingSection />
        </div>
    )
}
