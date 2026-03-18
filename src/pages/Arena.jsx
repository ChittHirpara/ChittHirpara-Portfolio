import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import Navbar from '../components/Navbar'
import ClosingSection from '../components/ClosingSection'

// ─── Hackathon Data ──────────────────────────────────────────────
const offlineHackathons = [
    {
        id: 1,
        name: 'HackNUthon 5.0',
        tagline: 'National Level Hackathon',
        date: 'March 2025',
        location: 'Nirma University, Ahmedabad',
        project: 'RuneHub',
        description: 'Built a full-stack learning platform with interactive coding challenges, real-time collaboration, and AI-powered code review in 36 hours.',
        result: 'Top 10',
        resultColor: 'text-yellow-400',
        resultBg: 'bg-yellow-500/10 border-yellow-500/30',
        team: 4,
        duration: '36 hours',
        tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'OpenAI'],
        photo: '/images/chitt-1.jpg',
    },
    {
        id: 2,
        name: 'dotSlash 8.0',
        tagline: 'SVNIT Flagship Hackathon',
        date: 'February 2025',
        location: 'SVNIT, Surat',
        project: 'Rune AI',
        description: 'Created an AI-powered writing assistant with grammar correction, tone adjustment, and content generation using custom fine-tuned models.',
        result: 'Finalist',
        resultColor: 'text-emerald-400',
        resultBg: 'bg-emerald-500/10 border-emerald-500/30',
        team: 3,
        duration: '24 hours',
        tech: ['Next.js', 'Python', 'FastAPI', 'Whisper', 'TailwindCSS'],
        photo: '/images/chitt-2.png',
    },
    {
        id: 3,
        name: 'CodeStorm 3.0',
        tagline: 'Inter-College Hackathon',
        date: 'January 2025',
        location: 'GEC Gandhinagar',
        project: 'FleetFlow',
        description: 'Developed a fleet management dashboard with real-time vehicle tracking, route optimization, and predictive maintenance alerts.',
        result: 'Participant',
        resultColor: 'text-blue-400',
        resultBg: 'bg-blue-500/10 border-blue-500/30',
        team: 4,
        duration: '24 hours',
        tech: ['React', 'Express', 'PostgreSQL', 'Mapbox', 'Chart.js'],
        photo: '/images/chitt-4.jpg',
    },
]

const onlineHackathons = [
    { id: 4, name: 'ETH India 2024', project: 'DeFi Dashboard', result: 'Submitted', tech: ['React', 'Solidity', 'Ethers.js'] },
    { id: 5, name: 'MLH Global Hack', project: 'StudyBuddy AI', result: 'Top 20', tech: ['Next.js', 'OpenAI', 'Supabase'] },
    { id: 6, name: 'HackThisFall 4.0', project: 'EcoTrack', result: 'Completed', tech: ['React', 'Firebase', 'Chart.js'] },
    { id: 7, name: 'Devpost AI Challenge', project: 'VoiceNotes Pro', result: 'Submitted', tech: ['Python', 'Whisper', 'React'] },
    { id: 8, name: 'Google Solution Challenge', project: 'MedConnect', result: 'Regional Finalist', tech: ['Flutter', 'Firebase', 'ML Kit'] },
    { id: 9, name: 'BuildWithAI Hackathon', project: 'CodeReview Bot', result: 'Completed', tech: ['Node.js', 'GPT-4', 'GitHub API'] },
    { id: 10, name: 'HackWithInfy 2024', project: 'SmartPark', result: 'Shortlisted', tech: ['React', 'IoT', 'MongoDB'] },
    { id: 11, name: 'Hack4Bengal 3.0', project: 'AgriSense', result: 'Submitted', tech: ['React', 'Python', 'TensorFlow'] },
    { id: 12, name: 'Junction Asia', project: 'TravelMate', result: 'Completed', tech: ['Next.js', 'Prisma', 'Stripe'] },
    { id: 13, name: 'IIITD Hackathon', project: 'CampusConnect', result: 'Top 15', tech: ['React Native', 'Express', 'Socket.io'] },
]

// ─── Animated Counter ─────────────────────────────────────────────
function AnimatedCounter({ target, label, suffix = '' }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (!isInView) return
        let start = 0
        const duration = 2000
        const increment = target / (duration / 16)
        const timer = setInterval(() => {
            start += increment
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)
        return () => clearInterval(timer)
    }, [isInView, target])

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl lg:text-5xl font-bold tracking-tight">
                {count}{suffix}
            </div>
            <div className="text-xs tracking-[0.2em] text-gray-500 uppercase mt-2 font-medium">
                {label}
            </div>
        </div>
    )
}

// ─── Offline Hackathon Card ──────────────────────────────────────
function OfflineCard({ hack, index }) {
    const isEven = index % 2 === 0

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
                <div className="relative w-full lg:w-[45%] h-[300px] lg:h-[420px] overflow-hidden">
                    <img
                        src={hack.photo}
                        alt={hack.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
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
                        {/* Team */}
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Team of {hack.team}
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
                        <AnimatedCounter target={13} label="Hackathons" />
                        <AnimatedCounter target={3} label="Offline Events" />
                        <AnimatedCounter target={10} label="Online Events" />
                        <AnimatedCounter target={500} suffix="+" label="Hours Coded" />
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

            {/* ═══ CTA SECTION ═══ */}
            <section className="relative py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-orange-500/[0.06] rounded-full blur-[100px]" />
                        </div>

                        <p className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-6">
                            What's Next
                        </p>
                        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
                            Want to{' '}
                            <span className="font-serif italic bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                                hack together?
                            </span>
                        </h2>
                        <p className="text-gray-500 text-sm max-w-md mx-auto mt-6 leading-relaxed">
                            I'm always looking for the next challenge. If you're building something ambitious, let's team up.
                        </p>
                        <motion.a
                            href="mailto:chitthirpara@gmail.com"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-white text-black font-bold text-sm tracking-wider rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
                        >
                            LET'S CONNECT
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            <ClosingSection />
        </div>
    )
}
