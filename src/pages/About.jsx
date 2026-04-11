import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import GitHubActivitySection from '../components/GitHubActivitySection'
import DecodingLogicSection from '../components/DecodingLogicSection'
import ClosingSection from '../components/ClosingSection'
import SEO from '../components/SEO';

export default function About() {
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
            <SEO title="About" description="Explore the About page of Chitt Hirpara portfolio." />
            {/* Noise Texture Overlay */}
            <div className="fixed inset-0 noise-texture pointer-events-none z-0" />

            {/* Navbar */}
            <Navbar />

            {/* About Hero */}
            <AboutHero />

            {/* About Section with 3 stacked photos */}
            <AboutSection />

            {/* Experience Timeline Section */}
            <ExperienceSection />

            {/* GitHub Activity Section */}
            <GitHubActivitySection />

            {/* Decoding Logic - Behind the Curtains */}
            <DecodingLogicSection />

            {/* Closing / Footer */}
            <ClosingSection />
        </div>
    )
}

