import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

// Eager — visible immediately
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HeroLayout from '../components/HeroLayout'
import SEO from '../components/SEO'

// Lazy — loaded only when needed (below fold)
const ProjectShowcase = lazy(() => import('../components/ProjectShowcase'))
const SkillsetShowcase = lazy(() => import('../components/SkillsetShowcase'))
const RibbonStrip = lazy(() => import('../components/RibbonStrip'))
const AboutSection = lazy(() => import('../components/AboutSection'))
const CertificationSection = lazy(() => import('../components/CertificationSection'))
const DecodingLogicSection = lazy(() => import('../components/DecodingLogicSection'))
const ClosingSection = lazy(() => import('../components/ClosingSection'))

// Minimal placeholder while lazy chunks load
const SectionFallback = () => <div className="min-h-[200px]" />

export default function Home() {
    // Initialize Lenis smooth scrolling
    

    return (
        <div className="relative bg-black">
            <SEO title="Home" description="Chitt Hirpara — Full Stack Developer & AI Engineer based in Ahmedabad, India. Building premium digital experiences with React, Next.js, Node.js, and AI." />
            {/* Noise Texture Overlay */}
            <div className="fixed inset-0 noise-texture pointer-events-none z-0" />

            {/* Navbar */}
            <Navbar />

            {/* First Section: Hero with "CHITT HIRPARA" headline */}
            <HeroSection />

            {/* Second Section: 5-Panel Glassmorphism Grid */}
            <HeroLayout />

            {/* Section Divider - VENTURE SHOWCASE */}
            <Suspense fallback={<SectionFallback />}>
                <section className="relative py-16 sm:py-20 px-6 sm:px-12">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.p
                            className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Crafting Modern Experiences
                        </motion.p>
                        <motion.h2
                            className="text-6xl lg:text-7xl font-bold tracking-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                        >
                            VENTURE{' '}
                            <span className="font-serif italic bg-gradient-to-r from-pink-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                                SHOWCASE
                            </span>
                        </motion.h2>
                        <motion.div
                            className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-8"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1.4, delay: 0.4 }}
                        />
                    </div>
                </section>

                {/* Third Section: Horizontal Scrolling Project Showcase */}
                <ProjectShowcase />

                {/* Bridge: See More Projects on GitHub */}
                <div className="relative py-12 flex items-center justify-center">
                    <a
                        href="https://github.com/ChittHirpara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3.5 text-lg sm:text-xl font-semibold text-gray-200 hover:text-white transition-colors duration-300 py-2.5 px-6 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] backdrop-blur-sm shadow-lg shadow-black/40"
                    >
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                        <span className="relative tracking-wide">
                            See more projects on GitHub
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-white group-hover:w-full transition-all duration-300 ease-out" />
                        </span>
                        <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 border border-white/15 group-hover:bg-white group-hover:border-white group-hover:text-black group-hover:translate-x-1.5 transition-all duration-300">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-current transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>
                </div>
            </Suspense>

            {/* Fourth Section: Skillset Showcase with 3D Sculpture */}
            <Suspense fallback={<SectionFallback />}>
                <SkillsetShowcase />
            </Suspense>

            {/* Fifth Section: Cinematic Ribbon Strip */}
            <Suspense fallback={<SectionFallback />}>
                <RibbonStrip />
            </Suspense>

            {/* Sixth Section: About Section */}
            <Suspense fallback={<SectionFallback />}>
                <AboutSection />
            </Suspense>

            {/* Seventh Section: Certification Showcase */}
            <Suspense fallback={<SectionFallback />}>
                <CertificationSection />
            </Suspense>

            {/* Eighth Section: Decoding Logic - Behind the Curtains */}
            <Suspense fallback={<SectionFallback />}>
                <DecodingLogicSection />
            </Suspense>

            {/* Ninth Section: Closing / Footer */}
            <Suspense fallback={<SectionFallback />}>
                <ClosingSection />
            </Suspense>
        </div>
    )
}
