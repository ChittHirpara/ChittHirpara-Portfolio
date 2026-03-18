import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

/* ─── Status Bar Icons (SVG inline) ──────────────────────────────────────── */
function StatusBar({ time, light = false }) {
    const c = light ? 'text-white/60' : 'text-white/50'
    return (
        <div className={`flex items-center justify-between px-3 py-1.5 ${c}`} style={{ fontSize: '8px' }}>
            <span className="font-semibold tracking-tight">{time}</span>
            <div className="flex items-center gap-1">
                {/* Signal */}
                <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
                    <rect x="0" y="5" width="2" height="3" rx="0.5" opacity="0.4" />
                    <rect x="2.5" y="3.5" width="2" height="4.5" rx="0.5" opacity="0.6" />
                    <rect x="5" y="2" width="2" height="6" rx="0.5" opacity="0.8" />
                    <rect x="7.5" y="0" width="2" height="8" rx="0.5" />
                </svg>
                {/* Wifi */}
                <svg width="11" height="8" viewBox="0 0 11 8" fill="currentColor">
                    <path d="M5.5 6.5a1 1 0 100 2 1 1 0 000-2z" />
                    <path d="M2.5 4.5C3.4 3.6 4.4 3 5.5 3s2.1.6 3 1.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                    <path d="M0.5 2.5C1.9 1.1 3.6 0 5.5 0s3.6 1.1 5 2.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />
                </svg>
                {/* Battery */}
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <rect x="0.5" y="1" width="13" height="6" rx="1.5" stroke="currentColor" strokeWidth="1" opacity="0.7" />
                    <rect x="13.5" y="2.5" width="1.5" height="3" rx="0.75" fill="currentColor" opacity="0.7" />
                    <rect x="1.5" y="2" width="10" height="4" rx="0.75" fill="currentColor" />
                </svg>
            </div>
        </div>
    )
}

/* ─── RuneHub Screen ─────────────────────────────────────────────────────── */
function RuneHubScreen() {
    return (
        <div className="w-full h-full bg-[#0d0d0d] flex flex-col">
            <div className="px-4 pt-2 pb-3 flex-1 flex flex-col">
                {/* Nav */}
                <div className="flex items-center justify-between mb-4">
                    <span style={{ fontSize: 9 }} className="text-white/40 font-medium">RuneHub</span>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="text-white/40">
                        <rect y="0" width="14" height="1.5" rx="0.75" fill="currentColor" />
                        <rect y="4.25" width="14" height="1.5" rx="0.75" fill="currentColor" />
                        <rect y="8.5" width="14" height="1.5" rx="0.75" fill="currentColor" />
                    </svg>
                </div>

                {/* Hero */}
                <div className="mb-3">
                    <h2 style={{ fontSize: 20, lineHeight: 1.1, fontWeight: 800 }} className="text-white">RuneHub</h2>
                    <p style={{ fontSize: 6.5, lineHeight: 1.5 }} className="text-white/50 mt-1.5">
                        Master programming with interactive tutorials, examples, and exercises. Learn at your own pace with hands-on coding practice and real-world projects.
                    </p>
                </div>

                {/* CTAs */}
                <div className="space-y-1.5 mt-auto">
                    <div className="bg-orange-500 rounded-lg py-2 flex items-center justify-center">
                        <span style={{ fontSize: 7.5, fontWeight: 700 }} className="text-white">Start Learning  →</span>
                    </div>
                    <div className="border border-white/20 rounded-lg py-1.5 flex items-center justify-center gap-1">
                        <span style={{ fontSize: 7, fontWeight: 500 }} className="text-white/70">Try RuneAI</span>
                        <span style={{ fontSize: 7 }} className="text-white/40">↗</span>
                    </div>
                </div>
            </div>

            {/* Bottom stats strip */}
            <div className="border-t border-white/10 px-3 py-2 flex justify-between">
                {[['150+', 'Learning Modules'], ['12', 'Tech Tracks'], ['24/7', 'Access'], ['300+', 'Problems']].map(([n, l]) => (
                    <div key={l} className="text-center">
                        <p style={{ fontSize: 8, fontWeight: 800 }} className="text-orange-500">{n}</p>
                        <p style={{ fontSize: 4.5 }} className="text-white/30 leading-tight">{l}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ─── Rune Screen ───────────────────────────────────────────────────────── */
function RuneScreen() {
    return (
        <div className="w-full h-full bg-[#111111] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-2 pb-3 mt-1">
                <span style={{ fontSize: 11, fontWeight: 700 }} className="text-white">Rune</span>
                <div className="flex items-center gap-2.5">
                    <span style={{ fontSize: 13 }} className="text-white/50">⚙</span>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="text-white/50">
                        <rect y="0" width="14" height="1.5" rx="0.75" fill="currentColor" />
                        <rect y="4.25" width="14" height="1.5" rx="0.75" fill="currentColor" />
                        <rect y="8.5" width="14" height="1.5" rx="0.75" fill="currentColor" />
                    </svg>
                </div>
            </div>

            {/* Welcome */}
            <div className="px-5 pb-3">
                <h2 style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.25 }} className="text-white">Welcome aboard Parth 👋</h2>
                <p style={{ fontSize: 6.5, lineHeight: 1.55 }} className="text-white/45 mt-2">
                    Unlock your potential with Rune. Explore powerful tools designed to streamline your workflow and boost your productivity!
                </p>
            </div>

            {/* Search */}
            <div className="mx-4 bg-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="text-white/30 flex-shrink-0">
                    <circle cx="3.5" cy="3.5" r="3" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M6 6l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span style={{ fontSize: 7 }} className="text-white/30">Search for tools...</span>
            </div>
            <p style={{ fontSize: 6 }} className="mx-4 mt-2 text-white/30">
                Not sure what to look for?{' '}
                <span className="text-orange-400 underline">Browse all tools →</span>
            </p>

            {/* Section title */}
            <div className="mx-4 mt-3 pt-2 border-t border-white/10">
                <p style={{ fontSize: 9, fontWeight: 700 }} className="text-white">🧠 Text &amp; Writing Tools</p>
                <p style={{ fontSize: 6 }} className="text-white/40 mt-0.5">Powerful tools for writing, editing, and managing text content</p>
            </div>

            {/* Tool card */}
            <div className="mx-4 mt-2 bg-white/[0.06] rounded-xl p-2.5 flex items-start gap-2">
                <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 text-base">📋</div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                        <p style={{ fontSize: 7.5, fontWeight: 700 }} className="text-white">Online Clipboard</p>
                        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded px-1 py-0.5">
                            <span style={{ fontSize: 5 }} className="text-yellow-400 font-bold">★ Popular</span>
                        </div>
                    </div>
                    <p style={{ fontSize: 5.5 }} className="text-white/40 mt-0.5 leading-tight">For temporarily storing and sharing text online</p>
                </div>
            </div>
        </div>
    )
}

/* ─── Rune AI Screen ────────────────────────────────────────────────────── */
function RuneAIScreen() {
    return (
        <div className="w-full h-full bg-[#0e0e0e] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-3 pt-2 pb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                        <span style={{ fontSize: 7 }}>io</span>
                    </div>
                    <span style={{ fontSize: 8, fontWeight: 700 }} className="text-white">Rune AI</span>
                </div>
                <div className="w-5 h-5 rounded-lg bg-white/5 flex items-center justify-center">
                    <span style={{ fontSize: 8 }} className="text-white/40">📷</span>
                </div>
            </div>

            {/* New Chat */}
            <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06]">
                <span style={{ fontSize: 9 }} className="text-white/50">+</span>
                <span style={{ fontSize: 7.5, fontWeight: 500 }} className="text-white/70">New Chat</span>
            </div>

            {/* Menu items */}
            {[
                { icon: '💬', color: 'text-orange-400', label: 'Conversations' },
                { icon: '✦', color: 'text-blue-400', label: 'Discover' },
            ].map(item => (
                <div key={item.label} className="flex items-center gap-2 px-3 py-1.5 border-b border-white/[0.05]">
                    <span style={{ fontSize: 8 }} className={item.color}>{item.icon}</span>
                    <span style={{ fontSize: 7 }} className="text-white/60">{item.label}</span>
                </div>
            ))}

            {/* Recent */}
            <div className="px-3 pt-2 flex-1">
                <p style={{ fontSize: 5.5 }} className="uppercase tracking-widest text-white/25 mb-1">Recent</p>
                {['Mersenne Prime Expon...', 'Solving the Constant Eq...', 'Ancient Symbolic Mystery'].map(chat => (
                    <div key={chat} className="flex items-center gap-1.5 py-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50 flex-shrink-0" />
                        <span style={{ fontSize: 6 }} className="text-white/45 truncate">{chat}</span>
                    </div>
                ))}
            </div>

            {/* Daily usage */}
            <div className="px-3 pt-2 pb-1 border-t border-white/10">
                <p style={{ fontSize: 5.5 }} className="uppercase tracking-widest text-white/25 mb-1.5">Daily Usage</p>
                {[
                    { label: 'Messages', pct: 85, cap: 'Unlimited', color: 'bg-green-500' },
                    { label: 'Models', pct: 30, cap: '9 / 190', color: 'bg-orange-500' },
                ].map(bar => (
                    <div key={bar.label} className="mb-1.5">
                        <div className="flex justify-between mb-0.5">
                            <span style={{ fontSize: 5.5 }} className="text-white/40">{bar.label}</span>
                            <span style={{ fontSize: 5.5 }} className="text-white/25">{bar.cap}</span>
                        </div>
                        <div className="h-[2px] bg-white/10 rounded-full">
                            <div className={`h-full ${bar.color} rounded-full`} style={{ width: `${bar.pct}%` }} />
                        </div>
                    </div>
                ))}

                {/* User */}
                <div className="flex items-center gap-1.5 pt-1 border-t border-white/10 mt-1">
                    <div className="w-4 h-4 rounded-full bg-orange-500/20 flex-shrink-0" />
                    <span style={{ fontSize: 6 }} className="text-white/45">Parth Sharma</span>
                </div>
            </div>
        </div>
    )
}

/* ─── Phone Frame ─────────────────────────────────────────────────────── */
function PhoneFrame({ children, width = 140, height = 280, radius = 22, notch = false, tilt = 0, floatAnim }) {
    return (
        <motion.div
            style={{
                width,
                height,
                rotate: tilt,
                flexShrink: 0,
                position: 'relative',
                /* Outer metallic bezel */
                borderRadius: radius,
                background: 'linear-gradient(145deg, #2d2d2d 0%, #181818 40%, #222 100%)',
                padding: '3px',
                boxShadow: `
                    0 0 0 0.5px rgba(255,255,255,0.08),
                    0 30px 60px rgba(0,0,0,0.85),
                    0 8px 20px rgba(0,0,0,0.5),
                    inset 0 1px 0 rgba(255,255,255,0.09)
                `,
            }}
            {...floatAnim}
        >
            {/* Screen glass */}
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: radius - 3,
                    overflow: 'hidden',
                    background: '#0d0d0d',
                    position: 'relative',
                }}
            >
                {notch && (
                    <div
                        style={{
                            position: 'absolute', top: 6, left: '50%',
                            transform: 'translateX(-50%)',
                            width: 36, height: 8,
                            background: '#000',
                            borderRadius: 8,
                            zIndex: 30,
                        }}
                    />
                )}
                {children}
            </div>

            {/* Side button highlights */}
            <div style={{
                position: 'absolute', top: 50, right: -3, width: 3, height: 18,
                background: 'linear-gradient(to right, #333, #555)',
                borderRadius: '0 2px 2px 0',
            }} />
            <div style={{
                position: 'absolute', top: 44, left: -3, width: 3, height: 14,
                background: 'linear-gradient(to left, #333, #555)',
                borderRadius: '2px 0 0 2px',
            }} />
            <div style={{
                position: 'absolute', top: 62, left: -3, width: 3, height: 14,
                background: 'linear-gradient(to left, #333, #555)',
                borderRadius: '2px 0 0 2px',
            }} />

            {/* Subtle screen glare top-left */}
            <div style={{
                position: 'absolute', inset: 3, borderRadius: radius - 4,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.045) 0%, transparent 40%)',
                pointerEvents: 'none', zIndex: 50,
            }} />
        </motion.div>
    )
}

/* ─── ShowcaseCard ────────────────────────────────────────────────────────── */
export default function ShowcaseCard() {
    const cardRef = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 })
    const rotateX = useTransform(mouseY, [-100, 100], [4, -4])
    const rotateY = useTransform(mouseX, [-100, 100], [-4, 4])

    function handleMouseMove(e) {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        x.set(e.clientX - rect.left - rect.width / 2)
        y.set(e.clientY - rect.top - rect.height / 2)
    }
    function handleMouseLeave() { x.set(0); y.set(0) }

    return (
        <div className="p-7 min-h-[400px] relative overflow-hidden flex flex-col">
            {/* Header top-right */}
            <div className="relative z-10 text-right mb-6">
                <h4 className="text-3xl font-semibold">
                    Founder of{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 font-serif italic">
                        Rune
                    </span>
                </h4>
                <p className="text-gray-500 font-serif italic mt-1.5 text-sm">
                    &lt; Crafting Digital Experiences /&gt;
                </p>
            </div>

            {/* Phones stage */}
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="flex-1 flex items-end justify-center gap-[-8px] relative"
            // negative gap to overlap phones slightly
            >
                {/* Left — RuneHub */}
                <PhoneFrame
                    width={122} height={238} radius={20} tilt={-10}
                    floatAnim={{
                        animate: { y: [0, -8, 0] },
                        transition: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
                    }}
                >
                    <StatusBar time="12:01" />
                    <RuneHubScreen />
                </PhoneFrame>

                {/* Center — Rune (largest) */}
                <div style={{ zIndex: 10, marginLeft: -10, marginRight: -10 }}>
                    <PhoneFrame
                        width={158} height={300} radius={26} notch tilt={0}
                        floatAnim={{
                            animate: { y: [0, -12, 0] },
                            transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0 }
                        }}
                    >
                        <StatusBar time="11:59" />
                        <RuneScreen />
                    </PhoneFrame>
                </div>

                {/* Right — Rune AI */}
                <PhoneFrame
                    width={110} height={216} radius={18} tilt={10}
                    floatAnim={{
                        animate: { y: [0, -7, 0] },
                        transition: { duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }
                    }}
                >
                    <StatusBar time="5:14" />
                    <RuneAIScreen />
                </PhoneFrame>
            </motion.div>

            {/* Ambient glow */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-600/10 via-pink-500/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-purple-500/5 blur-3xl pointer-events-none" />
        </div>
    )
}
