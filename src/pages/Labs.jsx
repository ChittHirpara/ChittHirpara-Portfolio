import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from '../components/Navbar'
import LabSection from '../components/LabSection'
import ClosingSection from '../components/ClosingSection'
import SEO from '../components/SEO';

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

        let frameId
        function raf(time) {
            lenis.raf(time)
            frameId = requestAnimationFrame(raf)
        }
        frameId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(frameId)
            lenis.destroy()
        }
    }, [])

    return (
        <div className="relative bg-black min-h-screen">
            <SEO title="Labs" description="Explore the Labs page of Chitt Hirpara portfolio." />
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
