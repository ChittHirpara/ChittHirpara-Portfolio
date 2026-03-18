import { useRef, useEffect, useState, memo } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const projects = [
    {
        id: 1,
        name: 'ThreatLens',
        title: 'ThreatLens',
        description: 'An advanced cybersecurity research and simulation platform designed to teach secure coding and vulnerability analysis safely. Built for students, educators, and hackathon judges to review vulnerabilities without ethical concerns or exploitation risks.',
        features: [
            'Secure educational environment for vulnerability analysis',
            'Interactive threat detection graphs and topology mapping',
            'Misuse-prevention architecture with ethical safeguards'
        ],
        tech: ['React', 'Cybersecurity', 'Next.js', 'Tailwind CSS', 'Node.js'],
        links: { live: 'https://threatlens-topaz.vercel.app/', code: 'https://github.com/ChittHirpara/ThreatLens' },
        gradient: 'from-blue-600 to-red-500',
        gradientColor: 'rgba(37, 99, 235, 0.8)',
        avatar: 'https://i.pravatar.cc/150?img=11',
        phones: [
            '/projects/threatlens.png',
            '/projects/threatlens.png'
        ],
        desktop: '/projects/threatlens.png',
    },
    {
        id: 2,
        name: 'AgriCert',
        title: 'AgriCert',
        description: 'A breakthrough blockchain-powered platform revolutionizing agricultural quality certification. By creating a "Trusted Triad", AgriCert eliminates paper-based fraud and delays, connecting Exporters, QA Agencies, and Customs in a unified, secure digital pipeline.',
        features: [
            'Cryptographic proof of purity for agricultural exports',
            'Streamlined workflows for QA agencies and customs',
            'Immutable batch verification and supply chain tracking'
        ],
        tech: ['Blockchain', 'React', 'Node.js', 'Cryptography', 'Tailwind CSS'],
        links: { live: 'https://agricert-khaki.vercel.app/', code: 'https://github.com/ChittHirpara/agricert-platform' },
        gradient: 'from-green-600 to-emerald-400',
        gradientColor: 'rgba(5, 150, 105, 0.8)',
        avatar: 'https://i.pravatar.cc/150?img=12',
        phones: [
            '/projects/agricert.png',
            '/projects/agricert.png'
        ],
        desktop: '/projects/agricert.png',
    },
    {
        id: 3,
        name: 'FleetFlow',
        title: 'FleetFlow',
        description: 'A Next-Gen full-stack fleet management system featuring intense operational tracking. It includes a bespoke 5-tier Role-Based Access Control, robust trip lifecycle management, and a live tracking UI for uncompromised logistics control.',
        features: [
            'AI-driven suspicious fuel defense (alerts >15% consumption anomalies)',
            'Real-Time WebSockets for live trips, GPS, and SOS alerts',
            '5-Tier RBAC with custom portals for Managers, Drivers, Dispatchers, etc.'
        ],
        tech: ['React', 'Node.js', 'WebSockets', 'AI/ML', 'Tailwind CSS', 'PostgreSQL'],
        links: { live: 'https://fleet-flow-smoky-eta.vercel.app/', code: 'https://github.com/ChittHirpara/FleetFlow' },
        gradient: 'from-blue-900 to-orange-500',
        gradientColor: 'rgba(30, 58, 138, 0.8)',
        avatar: 'https://i.pravatar.cc/150?img=13',
        phones: [
            '/projects/fleetflow.png',
            '/projects/fleetflow.png'
        ],
        desktop: '/projects/fleetflow.png',
    },
    {
        id: 4,
        name: 'Elite Auction Hub',
        title: 'CodingGita Auction',
        description: 'A live, competitive event auction platform designed with a premium black-and-gold styling. Engineered for rock-solid live performance with cross-tab synchronization and strict deterministic bidding queues for high-stakes events.',
        features: [
            'Real-time bidding with deterministic seeding and queue accuracy',
            'Live budget tracking and ceremonial audio event cues',
            'Crash-proof state recovery via LocalStorage and BroadcastChannel'
        ],
        tech: ['React', 'WebSockets', 'Tailwind CSS', 'Framer Motion', 'LocalStorage'],
        links: { live: 'https://codinggita-auction-arena.vercel.app/', code: 'https://github.com/ChittHirpara/elite-auction-hub' },
        gradient: 'from-yellow-500 to-amber-700',
        gradientColor: 'rgba(234, 179, 8, 0.8)',
        avatar: 'https://i.pravatar.cc/150?img=14',
        phones: [
            '/projects/auction-hub.png',
            '/projects/auction-hub.png'
        ],
        desktop: '/projects/auction-hub.png',
    },
    {
        id: 5,
        name: 'Algorithm Animator',
        title: 'Algorithm Animator',
        description: 'An interactive, visual learning tool that brings complex algorithms to life. Users can visualize sorting arrays, graph traversals, and dynamic programming in real-time, completely controlling playback speed and stepping through execution phases.',
        features: [
            'Live colorful animations of intricate sorting and searching algorithms',
            'Step-by-step playback controls (play/pause/speed adjustments)',
            'Beautiful dark-themed UI built for educational clarity'
        ],
        tech: ['React', 'Algorithms', 'Data Structures', 'Framer Motion', 'Tailwind CSS'],
        links: { live: 'https://algorithm-animator.vercel.app/', code: 'https://github.com/ChittHirpara/algorithm-animator' },
        gradient: 'from-purple-600 to-cyan-500',
        gradientColor: 'rgba(147, 51, 234, 0.8)',
        avatar: 'https://i.pravatar.cc/150?img=15',
        phones: [
            '/projects/algorithm-animator.png',
            '/projects/algorithm-animator.png'
        ],
        desktop: '/projects/algorithm-animator.png',
    }
]

export default function ProjectShowcase() {
    const sectionRef = useRef(null)
    const containerRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const section = sectionRef.current
        const container = containerRef.current
        if (!section || !container) return

        let ctx

        // Increased to 400ms so the page is fully settled before GSAP pins
        const timeout = setTimeout(() => {
            ctx = gsap.context(() => {
                const panels = gsap.utils.toArray('.project-panel')

                gsap.to(container, {
                    y: () => -(container.scrollHeight - window.innerHeight),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        pin: true,
                        anticipatePin: 1,   // prevents layout-shift scroll jump
                        scrub: 1,
                        start: 'top top',
                        snap: {
                            snapTo: 1 / (panels.length - 1),
                            duration: { min: 0.2, max: 0.5 },
                            ease: 'power1.inOut'
                        },
                        end: () => '+=' + (container.scrollHeight - window.innerHeight),
                        onUpdate: (self) => {
                            const idx = Math.round(self.progress * (panels.length - 1))
                            setActiveIndex(idx)
                        }
                    }
                })
                // Do NOT call ScrollTrigger.refresh() here — it causes a page scroll jump
            }, section)
        }, 400)

        return () => {
            clearTimeout(timeout)
            if (ctx) ctx.revert()
        }
    }, [])


    // Click timeline to jump to a project
    const scrollToProject = (index) => {
        const triggers = ScrollTrigger.getAll()
        const st = triggers.find(t => t.trigger === sectionRef.current)
        if (st) {
            const progress = index / (projects.length - 1)
            const scrollY = st.start + (st.end - st.start) * progress
            gsap.to(window, {
                scrollTo: { y: scrollY, autoKill: false },
                duration: 0.8,
                ease: 'power2.inOut'
            })
        }
    }

    return (
        <section
            ref={sectionRef}
            className="relative bg-black overflow-hidden"
            style={{ height: '100vh' }}
        >
            {/* Timeline Rail — Premium vertical nav */}
            <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-50 hidden lg:flex items-center gap-4">
                {/* Vertical rail */}
                <div className="relative flex flex-col items-center" style={{ height: '280px' }}>
                    {/* Background rail line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.08]" />

                    {/* Animated fill line */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-white/60 to-white/20 transition-all duration-700 ease-out"
                        style={{ height: `${(activeIndex / (projects.length - 1)) * 100}%` }}
                    />

                    {/* Dots */}
                    <div className="relative h-full flex flex-col justify-between py-0">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="relative cursor-pointer group flex items-center"
                                onClick={() => scrollToProject(index)}
                            >
                                {/* Dot */}
                                <div className="relative flex items-center justify-center w-5 h-5">
                                    {/* Active ring */}
                                    {activeIndex === index && (
                                        <div className="absolute inset-0 rounded-full border border-white/40 scale-[2] animate-ping opacity-30" />
                                    )}
                                    <div
                                        className={`rounded-full transition-all duration-500 ${activeIndex === index
                                            ? 'w-2 h-2 bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.35)]'
                                            : 'w-1.5 h-1.5 bg-white/25 group-hover:bg-white/50 group-hover:scale-125'
                                            }`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project name label — shown beside active dot */}
                <div className="flex flex-col justify-between py-0" style={{ height: '280px' }}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex items-center h-5 cursor-pointer"
                            onClick={() => scrollToProject(index)}
                        >
                            <span
                                className={`text-[9px] font-semibold tracking-[0.2em] uppercase transition-all duration-400 ${activeIndex === index
                                    ? 'text-white/80 opacity-100 translate-x-0'
                                    : 'text-white/20 opacity-60 -translate-x-1'
                                    }`}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vertically stacked panels container — GSAP animates y */}
            <div ref={containerRef} className="will-change-transform">
                {projects.map((project, index) => (
                    <ProjectPanel key={project.id} project={project} index={index} />
                ))}

                {/* See More Projects — at the bottom of last panel */}
                <div className="h-20 flex items-center justify-center">
                    <a
                        href="https://github.com/ChittHirpara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <span className="text-sm tracking-wider">See more projects on GitHub</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

const ProjectPanel = memo(function ProjectPanel({ project, index: _index }) {
    return (
        <div className="project-panel h-screen w-full flex items-center pl-24 lg:pl-32 pr-8 lg:pr-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-7xl mx-auto">
                {/* Left — Text */}
                <div className="flex flex-col justify-center">
                    {/* Colored Dash + Title */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${project.gradient}`} />
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">{project.title}</h2>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                        🚀 {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                        {project.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                                <span className="text-yellow-400 text-sm mt-0.5">✦</span>
                                <span className="text-xs text-gray-300 leading-relaxed">{feat}</span>
                            </div>
                        ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-gray-300">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                        <a
                            href={project.links?.live || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-6 py-2.5 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium hover:scale-105 transition-transform duration-300`}
                        >
                            View Project
                        </a>
                        <a
                            href={project.links?.code || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            Source Code
                        </a>
                    </div>
                </div>

                {/* Right — Device Mockups with solid gradient frame */}
                <div className="relative flex items-center justify-center">
                    {/* Solid gradient background panel */}
                    <div
                        className={`relative w-full h-[480px] lg:h-[560px] rounded-[32px] p-5 lg:p-6 bg-gradient-to-br ${project.gradient}`}
                        style={{ opacity: 0.85 }}
                    >
                        <div className="relative w-full h-full flex gap-4 lg:gap-5">
                            {/* Left — Stacked Phones */}
                            <div className="flex-shrink-0 w-[30%] flex flex-col gap-3 lg:gap-4 justify-center">
                                {project.phones.map((phone, i) => (
                                    <div
                                        key={i}
                                        className="w-full aspect-[9/16] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border-2 border-black/40"
                                    >
                                        <img
                                            src={phone}
                                            alt={`${project.title} phone ${i + 1}`}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Right — Large Desktop */}
                            <div className="flex-1 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border-2 border-black/40">
                                <img
                                    src={project.desktop}
                                    alt={`${project.title} desktop`}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Soft glow underneath */}
                    <div
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-24 blur-2xl rounded-full"
                        style={{ background: project.gradientColor, opacity: 0.3 }}
                    />
                </div>
            </div>
        </div>
    )
})
