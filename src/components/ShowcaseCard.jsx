import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ShowcaseCard() {
    const cardRef = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 })
    const rotateX = useTransform(mouseY, [-100, 100], [3, -3])
    const rotateY = useTransform(mouseX, [-100, 100], [-3, 3])

    function handleMouseMove(e) {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        x.set(e.clientX - rect.left - rect.width / 2)
        y.set(e.clientY - rect.top - rect.height / 2)
    }

    function handleMouseLeave() {
        x.set(0)
        y.set(0)
    }

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="p-6 sm:p-8 min-h-[440px] relative overflow-hidden flex flex-col justify-between select-none"
        >
            {/* Ambient Background Gradient Lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 via-rose-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            {/* Top Header Row — Right aligned to preserve clearance for the center clock on desktop */}
            <div className="relative z-10 text-right self-end max-w-full pl-0 sm:pl-20 lg:pl-32 mb-4">
                <div className="flex items-center justify-end mb-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
                        </span>
                        <span className="text-[10px] font-mono font-bold tracking-[0.22em] text-orange-400/90 uppercase">
                            CAREER TRAJECTORY
                        </span>
                    </div>
                </div>

                <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-extrabold text-white tracking-tight leading-tight">
                    Lead Software Engineer{' '}
                    <span className="inline-block bg-gradient-to-r from-orange-400 via-amber-300 to-rose-400 bg-clip-text text-transparent">
                        @ Noerax
                    </span>
                </h3>

                <div className="flex items-center justify-end gap-2 text-xs text-gray-400 mt-1.5 font-medium">
                    <span className="text-gray-500">Previously</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span className="text-gray-300">Software Developer @ Revoot</span>
                </div>
            </div>

            {/* Middle Section: Dual Bento Cards with 3D tilt */}
            <motion.div
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 my-2"
            >
                {/* 1. CURRENT VENTURE: NOERAX */}
                <motion.div
                    whileHover={{ y: -4, scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                    className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.01] border border-white/[0.12] hover:border-orange-500/50 hover:shadow-[0_12px_32px_-8px_rgba(249,115,22,0.25)] transition-all duration-300 flex flex-col justify-between group overflow-hidden min-h-[200px]"
                >
                    {/* Top specular highlight */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent pointer-events-none" />
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-orange-500/20 transition-all duration-500" />

                    <div>
                        {/* Company Header */}
                        <div className="flex items-center justify-between mb-3.5">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-black border border-white/15 p-1.5 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-orange-500/50 transition-all duration-300 flex-shrink-0">
                                    <img
                                        src="/logos/noerax-icon.png"
                                        alt="Noerax"
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none'
                                            e.target.nextSibling.style.display = 'block'
                                        }}
                                    />
                                    <span className="hidden text-white font-black text-sm">N</span>
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                                        Noerax
                                    </h4>
                                    <p className="text-[11px] text-gray-400 font-medium">Lead Software Engineer</p>
                                </div>
                            </div>
                            <span className="px-2.5 py-1 text-[9px] font-extrabold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 rounded-full uppercase flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.18)]">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                ACTIVE
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-gray-300 leading-relaxed font-light mb-3">
                            Architecting next-generation digital experiences, intelligent tools, and scalable web solutions.
                        </p>

                        {/* Skill Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {['Next.js', 'System Arch', 'AI Tools', 'TypeScript'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-[10px] text-gray-300 font-mono"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Link */}
                    <a
                        href="https://noerax.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] group/link"
                    >
                        <span className="font-mono text-orange-400/90 group-hover/link:text-orange-300 transition-colors flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400/60" />
                            noerax.com
                        </span>
                        <span className="text-gray-400 group-hover/link:text-white transition-colors flex items-center gap-1 font-medium">
                            Active Venture
                            <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </span>
                    </a>
                </motion.div>

                {/* 2. PAST EXPERIENCE: REVOOT */}
                <motion.div
                    whileHover={{ y: -4, scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                    className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-white/[0.005] border border-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_12px_32px_-8px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-between group overflow-hidden min-h-[200px]"
                >
                    {/* Top specular highlight */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-500" />

                    <div>
                        {/* Company Header */}
                        <div className="flex items-center justify-between mb-3.5">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-[#0b1329] border border-white/15 p-2 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-cyan-500/50 transition-all duration-300 flex-shrink-0">
                                    <img
                                        src="/logos/revoot.png"
                                        alt="Revoot"
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none'
                                            e.target.nextSibling.style.display = 'block'
                                        }}
                                    />
                                    <span className="hidden text-white font-black text-sm">R</span>
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        Revoot
                                    </h4>
                                    <p className="text-[11px] text-gray-400 font-medium">Software Developer</p>
                                </div>
                            </div>
                            <span className="px-2.5 py-1 text-[9px] font-bold tracking-wider text-gray-400 bg-white/5 border border-white/10 rounded-full uppercase">
                                FORMER
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-gray-400 leading-relaxed font-light mb-3">
                            Engineered core full-stack features, optimized application performance, and improved platform scale.
                        </p>

                        {/* Skill Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {['Full-Stack', 'Node.js', 'REST APIs', 'Performance'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] text-gray-400 font-mono"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Link */}
                    <a
                        href="https://app.revoot.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] group/link"
                    >
                        <span className="font-mono text-cyan-400/90 group-hover/link:text-cyan-300 transition-colors flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                            app.revoot.in
                        </span>
                        <span className="text-gray-400 group-hover/link:text-white transition-colors flex items-center gap-1 font-medium">
                            Prior Experience
                            <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </span>
                    </a>
                </motion.div>
            </motion.div>

            {/* Bottom Footer Quote */}
            <div className="relative z-10 flex items-center justify-between pt-3 text-[11px] text-gray-500 border-t border-white/[0.06]">
                <div className="flex items-center gap-2">
                    <span className="text-orange-400 text-xs">✦</span>
                    <span className="text-xs text-gray-300 font-medium tracking-wide">
                        Architecting High-Performance Digital Experiences
                    </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Ahmedabad, IN</span>
                    <span className="text-gray-700">•</span>
                    <span>IST (UTC+5:30)</span>
                </div>
            </div>
        </div>
    )
}
