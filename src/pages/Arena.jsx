import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import Navbar from '../components/Navbar'
import ClosingSection from '../components/ClosingSection'
import ContactModal from '../components/ContactModal'
import CombatRecordHUD, { AnimatedCounter } from '../components/CombatRecordHUD'
import SEO from '../components/SEO';

// ─── Hackathon Data ──────────────────────────────────────────────
const offlineHackathons = [
    {
        id: 1,
        name: "CRAFATHON '26",
        tagline: 'Team Runtime Rebels',
        date: 'Recent',
        location: 'Offline',
        project: 'Behavioural Continuous Authentication',
        description: 'Built a secure banking system that silently monitors tap rhythm, swipe velocity & scroll patterns to flag imposters in real-time using a trust score (0-100).',
        result: 'Participant',
        resultColor: 'text-blue-400',
        resultBg: 'bg-blue-500/10 border-blue-500/30',
        team: 4,
        duration: '36 hours',
        tech: ['React/Next', 'Python/Flask', 'scikit-learn', 'WebSockets', 'React Native'],
        photos: [
            '/images/crafathon.jpg',
            '/images/crafathon_1.jpg',
            '/images/crafathon_2.jpg',
            '/images/crafathon_3.jpg',
            '/images/crafathon_4.jpg',
            '/images/crafathon_5.jpg'
        ],
        links: {
            github: 'https://github.com/ChittHirpara/CRAFTATHON_GU',
            live: 'https://craftathon-gu.vercel.app/'
        }
    },
    {
        id: 2,
        name: 'HackCrux 2026',
        tagline: 'GDG LNMIIT Jaipur',
        date: 'Recent',
        location: 'LNMIIT, Jaipur',
        project: 'COS (Cognitive Operating System)',
        description: 'Built a local AI voice pipeline and semantic memory system that tracks cognitive states to prevent context-switching delays. Fully simultaneous voice-overlay AI.',
        result: 'Participant',
        resultColor: 'text-emerald-400',
        resultBg: 'bg-emerald-500/10 border-emerald-500/30',
        team: 4,
        duration: '30 hours',
        tech: ['FastAPI', 'FAISS', 'Three.js', 'React', 'Whisper'],
        photos: [
            '/images/hackcrux_1.jpg',
            '/images/hackcrux_2.jpg',
            '/images/hackcrux_3.jpg',
            '/images/hackcrux_4.jpg',
            '/images/hackcrux_5.jpg',
            '/images/hackcrux_6.jpg'
        ],
        links: {
            github: 'https://github.com/ChittHirpara/HackCruz-COS'
        }
    },
    {
        id: 3,
        name: 'Odoo Hackathon',
        tagline: 'Engineering & System Design',
        date: 'Recent',
        location: 'Offline',
        project: 'Odoo PLM System',
        description: 'Designed a Product Lifecycle Management (PLM) system where engineering changes are proposed, reviewed, approved, and versioned instead of direct database edits.',
        result: 'Participant',
        resultColor: 'text-blue-400',
        resultBg: 'bg-blue-500/10 border-blue-500/30',
        team: 4,
        duration: '24 hours',
        tech: ['Odoo', 'Python', 'System Design', 'PostgreSQL'],
        photos: [
            '/images/odoo_1.jpg',
            '/images/odoo_2.jpg',
            '/images/odoo_3.jpg',
            '/images/odoo_4.jpg',
            '/images/odoo_5.jpg',
            '/images/odoo_6.jpg'
        ],
        links: {
            github: 'https://github.com/ChittHirpara/Odoo_X_GV_PLM'
        }
    },
    {
        id: 4,
        name: 'Hack the Tank 3.0',
        tagline: 'National Level Hackathon',
        date: 'Recent',
        location: 'SVNIT, Surat',
        project: 'ReturnIQ',
        description: 'Built an AI-powered autonomous return inspection and hyperlocal drop-off system designed to transform e-commerce returns from a loss center into a revenue recovery engine.',
        result: 'Top 4',
        resultColor: 'text-yellow-400',
        resultBg: 'bg-yellow-500/10 border-yellow-500/30',
        team: 3,
        duration: '30 hours',
        tech: ['AI', 'System Design', 'Logistics', 'Ecommerce', 'Python'],
        photos: [
            '/images/hackthetank_1.jpg',
            '/images/hackthetank_2.jpg',
            '/images/hackthetank_3.jpg',
            '/images/hackthetank_4.jpg',
            '/images/hackthetank_5.jpg',
            '/images/hackthetank_6.jpg'
        ],
        links: {}
    },
    {
        id: 5,
        name: 'ElectroSphere 2K26',
        tagline: 'Team InnovateX',
        date: 'Recent',
        location: 'Offline',
        project: 'ThreatLens',
        description: 'Led the design of an ethical, static cybersecurity analysis and threat-modeling platform focused on explainability, defense, and responsible security education.',
        result: '2nd Place',
        resultColor: 'text-purple-400',
        resultBg: 'bg-purple-500/10 border-purple-500/30',
        team: 5,
        duration: '24 hours',
        tech: ['CyberSecurity', 'ThreatModeling', 'Static Analysis', 'React'],
        photos: [
            '/images/threatlens_1.jpg',
            '/images/threatlens_2.jpg',
            '/images/threatlens_3.jpg',
            '/images/threatlens_4.jpg',
            '/images/threatlens_5.jpg'
        ],
        links: {
            github: 'https://github.com/ChittHirpara/ThreatLens',
            live: 'https://threatlens-topaz.vercel.app/'
        }
    },
    {
        id: 6,
        name: 'innoVAltion',
        tagline: 'Intuitive.ai at DA-IICT',
        date: 'Recent',
        location: 'DA-IICT, Gandhinagar',
        project: 'innoVAltion Challenge',
        description: 'Led the team to the offline finals of an intense 48-hour hackathon out of 1180 competing teams. Built, debugged, and presented a complete solution while managing tight deadlines and rapid prototyping.',
        result: 'Finalist',
        resultColor: 'text-orange-400',
        resultBg: 'bg-orange-500/10 border-orange-500/30',
        team: 4,
        duration: '48 hours',
        tech: ['AI', 'Rapid Prototyping', 'System Design', 'Intuitive.ai'],
        photos: [
            '/images/daiict_1.jpg',
            '/images/daiict_2.jpg',
            '/images/daiict_3.jpg',
            '/images/daiict_4.jpg'
        ],
        links: {
            github: 'https://github.com/ChittHirpara/daiict'
        }
    },
]

const onlineHackathons = [
    { id: 7,  name: 'Meta PyTorch Hackathon', project: 'NetPulse SRE Benchmark', result: 'Submitted', tech: ['PyTorch', 'Groq', 'Node.js'] },
    { id: 8,  name: 'Smart India Hackathon', project: 'AgriCert Platform', result: 'Participated', tech: ['React', 'Node.js', 'MongoDB'] },
    { id: 9,  name: 'Postman API Hackathon', project: 'API Flow Monitor', result: 'Submitted', tech: ['Node.js', 'Postman', 'Express'] },
    { id: 10, name: 'CodeChef Hackathon', project: 'Algo Animator', result: 'Submitted', tech: ['React', 'GSAP', 'Vercel'] },
]

// ─── Offline Hackathon Card ──────────────────────────────────────
function OfflineCard({ hack, index }) {
    const isEven = index % 2 === 0
    
    const photosList = hack.photos || (hack.photo ? [hack.photo] : [])
    const [currentPhoto, setCurrentPhoto] = useState(0)

    const nextPhoto = (e) => {
        e.preventDefault();
        setCurrentPhoto((prev) => (prev + 1) % photosList.length);
    };

    const prevPhoto = (e) => {
        e.preventDefault();
        setCurrentPhoto((prev) => (prev - 1 + photosList.length) % photosList.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group"
        >
            <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 rounded-3xl overflow-hidden border border-white/[0.06] bg-[rgba(18,18,18,0.6)] backdrop-blur-xl hover:border-white/[0.12] transition-all duration-500`}>
                {/* Photo */}
                <div className="relative w-full lg:w-[45%] h-[300px] lg:h-[420px] overflow-hidden bg-black/50">
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={currentPhoto}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            src={photosList[currentPhoto]}
                            alt={`${hack.name} photo ${currentPhoto + 1}`}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                        />
                    </AnimatePresence>
                    
                    {/* Navigation Arrows */}
                    {photosList.length > 1 && (
                        <>
                            <button 
                                onClick={prevPhoto}
                                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white/70 hover:bg-black/80 hover:text-white backdrop-blur-md transition-all z-20 border border-white/5 hover:border-white/20"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button 
                                onClick={nextPhoto}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white/70 hover:bg-black/80 hover:text-white backdrop-blur-md transition-all z-20 border border-white/5 hover:border-white/20"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </>
                    )}
                    
                    {/* Dots for slider indicator */}
                    {photosList.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                            {photosList.map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === currentPhoto ? 'w-5 bg-orange-500' : 'w-1.5 bg-white/40'}`} 
                                />
                            ))}
                        </div>
                    )}
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* Result badge */}
                    <div className={`absolute top-5 left-5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border ${hack.resultBg}`}>
                        <span className={hack.resultColor}>{hack.result}</span>
                    </div>
                    {/* Duration badge */}
                    <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-[10px] font-medium tracking-wider uppercase bg-white/10 backdrop-blur-md border border-white/10 text-white/70">
                        {hack.duration}
                    </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-[55%] p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                        {/* Event meta */}
                        <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] text-gray-500 uppercase font-medium mb-4">
                            <span>{hack.date}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-600" />
                            <span>{hack.location}</span>
                        </div>

                        {/* Event name */}
                        <h3 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                            {hack.name}
                        </h3>
                        <p className="text-sm text-orange-400/80 font-medium mt-1">{hack.tagline}</p>

                        {/* Project */}
                        <div className="mt-6">
                            <div className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold mb-2">
                                What I Built
                            </div>
                            <h4 className="text-xl font-bold text-white/90">{hack.project}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed mt-2 max-w-md">
                                {hack.description}
                            </p>
                        </div>
                    </div>

                    {/* Bottom: Tech + Team */}
                    <div className="mt-8 flex flex-col gap-4">
                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                            {hack.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wider bg-white/[0.04] border border-white/[0.08] text-gray-400"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        {/* Team and Links */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Team of {hack.team}
                            </div>
                            
                            {/* Actions / Links */}
                            {hack.links && (
                                <div className="flex items-center gap-2">
                                    {hack.links.github && (
                                        <a href={hack.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/5 hover:border-white/20">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    )}
                                    {hack.links.live && (
                                        <a href={hack.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 hover:text-orange-300 transition-all border border-orange-500/20 hover:border-orange-500/40 text-xs font-semibold tracking-wide uppercase">
                                            <span>Live App</span>
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

// ─── Online Hackathon Card ───────────────────────────────────────
function OnlineCard({ hack, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative p-6 rounded-2xl border border-white/[0.06] bg-[rgba(18,18,18,0.5)] backdrop-blur-lg hover:border-orange-500/20 hover:bg-[rgba(25,20,15,0.6)] transition-all duration-[400ms] cursor-default"
        >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/[0.03] to-transparent pointer-events-none" />

            {/* Top row */}
            <div className="flex justify-between items-start relative">
                <div>
                    <h4 className="text-base font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                        {hack.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{hack.project}</p>
                </div>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-orange-400/70 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20 shrink-0">
                    {hack.result}
                </span>
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-1.5 mt-4 relative">
                {hack.tech.map((t) => (
                    <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[9px] font-medium tracking-wider bg-white/[0.03] border border-white/[0.06] text-gray-500"
                    >
                        {t}
                    </span>
                ))}
            </div>

            {/* Online badge */}
            <div className="flex items-center gap-1.5 mt-4 text-[10px] text-gray-600 relative">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 animate-pulse" />
                Online
            </div>
        </motion.div>
    )
}

// ─── Main Arena Page ─────────────────────────────────────────────
export default function Arena() {
    const [modalOpen, setModalOpen] = useState(false)
    
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        })

        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add((time) => lenis.raf(time * 1000))
        gsap.ticker.lagSmoothing(0)

        return () => lenis.destroy()
    }, [])

    return (
        <div className="relative bg-black min-h-screen">
            <SEO title="Arena" description="Explore the Arena page of Chitt Hirpara portfolio." />
            {/* Noise */}
            <div className="fixed inset-0 noise-texture pointer-events-none z-0" />

            <Navbar />

            {/* ═══ HERO ═══ */}
            <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/[0.04] rounded-full blur-[150px]" />
                    <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/[0.03] rounded-full blur-[120px]" />
                </div>

                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">
                        Hackathon Arena
                    </span>
                    <div className="w-8 h-px bg-gray-700" />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-center leading-[0.85]"
                >
                    BUILT
                    <br />
                    <span className="font-serif italic bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                        under pressure.
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-gray-500 text-sm md:text-base max-w-lg text-center mt-8 leading-relaxed"
                >
                    48 hours. Zero excuses. From idea to deployment — every hackathon
                    is a sprint to prove what's possible.
                </motion.p>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-12 flex flex-col items-center gap-2"
                >
                    <span className="text-[9px] tracking-[0.3em] text-gray-600 uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"
                    />
                </motion.div>
            </section>

            {/* ═══ STATS BAR ═══ */}
            <section className="relative py-20 px-6 border-y border-white/[0.04]">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                        <AnimatedCounter target={10} label="Hackathons" />
                        <AnimatedCounter target={6} label="Offline Events" />
                        <AnimatedCounter target={4} label="Online Events" />
                        <AnimatedCounter target={600} suffix="+" label="Hours Coded" />
                    </div>
                </div>
            </section>

            {/* ═══ SECTION DIVIDER: OFFLINE ═══ */}
            <section className="relative py-24 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.p
                        className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        On The Ground
                    </motion.p>
                    <motion.h2
                        className="text-5xl lg:text-7xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        OFFLINE{' '}
                        <span className="font-serif italic bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                            BATTLES
                        </span>
                    </motion.h2>
                    <motion.div
                        className="w-24 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent mx-auto mt-8"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.4, delay: 0.4 }}
                    />
                </div>
            </section>

            {/* ═══ OFFLINE HACKATHON CARDS ═══ */}
            <section className="relative px-6 pb-20">
                <div className="max-w-6xl mx-auto flex flex-col gap-12">
                    {offlineHackathons.map((hack, i) => (
                        <OfflineCard key={hack.id} hack={hack} index={i} />
                    ))}
                </div>
            </section>

            {/* ═══ SECTION DIVIDER: ONLINE ═══ */}
            <section className="relative py-24 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.p
                        className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Remote Warfare
                    </motion.p>
                    <motion.h2
                        className="text-5xl lg:text-7xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        ONLINE{' '}
                        <span className="font-serif italic bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                            RAIDS
                        </span>
                    </motion.h2>
                    <motion.div
                        className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mx-auto mt-8"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.4, delay: 0.4 }}
                    />
                </div>
            </section>

            {/* ═══ ONLINE HACKATHON GRID ═══ */}
            <section className="relative px-6 pb-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {onlineHackathons.map((hack, i) => (
                        <OnlineCard key={hack.id} hack={hack} index={i} />
                    ))}
                </div>
            </section>

            {/* ═══ COMBAT RECORD SECTION ═══ */}
            <CombatRecordHUD />

            <ClosingSection />
            
            {/* Contact Modal */}
            <AnimatePresence>
                {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
            </AnimatePresence>
        </div>
    )
}
