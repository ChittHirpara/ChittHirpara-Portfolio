import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const Icons = {
    Gamepad: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="15" x2="15.01" y1="13" y2="13" /><line x1="18" x2="18.01" y1="11" y2="11" /><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" /></svg>
    ),
    ShoppingCart: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
    ),
    BarChart: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect width="4" height="7" x="7" y="10" rx="1" /><rect width="4" height="12" x="15" y="5" rx="1" /></svg>
    ),
    Briefcase: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.3 7H20.7" /><path d="M3 11v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M12 12h.01" /><path d="M8 12h.01" /><path d="M16 12h.01" /></svg>
    ),
    Trophy: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
    ),
    Bot: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
    ),
    Cloud: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
    ),
    Lightbulb: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
    )
}

const certifications = [
    {
        id: 1,
        title: 'Software Engineering Job Simulation',
        issuer: 'Electronic Arts (Forage)',
        logo: <Icons.Gamepad className="w-6 h-6 text-pink-400" />,
        description: 'Completed practical tasks including Feature Proposal, Game Object Class creation, Inventory System improvements, and Live Bugfixes.',
        year: '2026',
        credentialId: 'EA-FORAGE-2026',
        link: '#',
        certificate: '/certificates/Screenshot 2026-02-24 113855.png',
    },
    {
        id: 2,
        title: 'Advanced Software Engineering Job Simulation',
        issuer: 'Walmart Global Tech (Forage)',
        logo: <Icons.ShoppingCart className="w-6 h-6 text-sky-400" />,
        description: 'Completed tasks in Advanced Data Structures, Software Architecture, Relational Database Design, and Data Munging.',
        year: '2026',
        credentialId: 'WALMART-FORAGE-2026',
        link: '#',
        certificate: '/certificates/Screenshot 2026-02-24 113911.png',
    },
    {
        id: 3,
        title: 'Kharagpur Data Science Hackathon',
        issuer: 'IIT Kharagpur',
        logo: <Icons.BarChart className="w-6 h-6 text-emerald-400" />,
        description: 'Successfully participated in Round 1 of the 6th Edition of the Kharagpur Data Science Hackathon organized by KDAG.',
        year: '2026',
        credentialId: 'KDAG-HACK-2026',
        link: '#',
        certificate: '/certificates/Screenshot 2026-02-24 113936.png',
    },
    {
        id: 4,
        title: 'Certificate of Professional Exposure',
        issuer: 'Skillfied Mentor',
        logo: <Icons.Briefcase className="w-6 h-6 text-purple-400" />,
        description: 'Participated in a Professional Career Development & Industry Orientation Session focusing on industry expectations and skill development.',
        year: '2026',
        credentialId: 'SKILLFIED-2026',
        link: '#',
        certificate: '/certificates/Screenshot 2026-02-24 114005.png',
    },
    {
        id: 5,
        title: 'ElectroSphere 2K26 - 2nd Place Winner',
        issuer: 'Swaminarayan University',
        logo: <Icons.Trophy className="w-6 h-6 text-yellow-400" />,
        description: 'Awarded 2nd Place Winner in the Software Edition of ElectroSphere 2K26 organized by the TechX Club (Team Innovatex).',
        year: '2026',
        credentialId: 'ELECTROSPHERE-2026',
        link: '#',
        certificate: '/certificates/Screenshot 2026-02-24 114257.png',
    },
    {
        id: 6,
        title: 'Appian AI Application Challenge',
        issuer: 'IIT Madras (Shaastra 2026)',
        logo: <Icons.Bot className="w-6 h-6 text-indigo-400" />,
        description: 'Participated in the Appian AI Application Challenge 2026 of Shaastra 2026 organized by Indian Institute of Technology (IIT), Madras.',
        year: '2026',
        credentialId: 'IITM-APPIAN-2026',
        link: '#',
        certificate: '/certificates/Screenshot 2026-02-24 114336.png',
    },
    {
        id: 7,
        title: 'Solutions Architecture Job Simulation',
        issuer: 'AWS (Forage)',
        logo: <Icons.Cloud className="w-6 h-6 text-orange-400" />,
        description: 'Completed practical tasks involving designing a simple, scalable, hosting architecture on Amazon Web Services.',
        year: '2026',
        credentialId: 'AWS-FORAGE-2026',
        link: '#',
        certificate: '/certificates/Screenshot 2026-02-26 152612.png',
    },
    {
        id: 8,
        title: 'InnovAltion - Shaping Future Innovators',
        issuer: 'DA-IICT (Unstop Holiday Fest)',
        logo: <Icons.Lightbulb className="w-6 h-6 text-amber-400" />,
        description: 'Participated in InnovAltion organized by Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT), Gandhinagar.',
        year: '2025',
        credentialId: 'DAIICT-INNOVALTION-2025',
        link: '#',
        certificate: '/certificates/Screenshot 2026-02-26 152657.png',
    },
]

function CertificationCard({ cert, index, isInView, onClick }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(cert)}
            className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 overflow-hidden cursor-pointer"
            style={{
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
        >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-pink-500/5 via-transparent to-orange-500/5" />

            {/* Certificate preview on hover */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute inset-0 z-20 p-3"
                    >
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                            {/* Certificate image */}
                            <img
                                src={cert.certificate}
                                alt={`${cert.title} Certificate`}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            {/* Certificate info overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl">{cert.logo}</span>
                                    <span className="text-white font-semibold text-sm">{cert.issuer}</span>
                                </div>
                                <h4 className="text-white font-bold text-lg leading-tight mb-1">
                                    {cert.title}
                                </h4>
                                <p className="text-gray-400 text-xs">
                                    {cert.year} • {cert.credentialId}
                                </p>
                            </div>

                            {/* View full certificate badge */}
                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.15 }}
                                className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-1"
                            >
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg>
                                <span className="text-white text-xs font-medium">Click to View</span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Card content (hidden when hovering) */}
            <motion.div
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.2 }}
            >
                {/* Top row - Logo and title */}
                <div className="flex items-start gap-4 mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center text-2xl">
                        {cert.logo}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg leading-tight">
                            {cert.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                            Issued by {cert.issuer}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10 uppercase tracking-wide">
                    {cert.description}
                </p>

                {/* Bottom metadata */}
                <div className="flex items-center justify-between relative z-10 pt-4 border-t border-white/[0.05]">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{cert.year}</span>
                        <span className="text-gray-600">•</span>
                        <span className="font-mono">{cert.credentialId}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-gray-400 text-xs font-medium group-hover:text-white transition-colors duration-300">
                        <span>View Certificate</span>
                        <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">
                            →
                        </span>
                    </span>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default function CertificationSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
    const [selectedCert, setSelectedCert] = useState(null)

    // Lock body scroll when modal is open
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.body.style.overflow = selectedCert ? 'hidden' : 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [selectedCert])

    return (
        <section
            ref={sectionRef}
            className="relative py-32 px-6 sm:px-12 lg:px-20 bg-black overflow-hidden"
        >
            {/* Noise grain texture */}
            <div className="absolute inset-0 noise-texture opacity-5" />

            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_50%)]" />

            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-20">
                    {/* Top label */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-medium mb-6"
                    >
                        Professional Credentials
                    </motion.p>

                    {/* Main heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight"
                    >
                        <span className="text-white">The Proof </span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.22 }}
                            className="italic font-serif bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent"
                            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                        >
                            Behind
                        </motion.span>
                    </motion.h2>
                </div>

                {/* Certification cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <CertificationCard
                            key={cert.id}
                            cert={cert}
                            index={index}
                            isInView={isInView}
                            onClick={setSelectedCert}
                        />
                    ))}
                </div>
            </div>

            {/* Fullscreen Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl"
                        onClick={() => setSelectedCert(null)}
                    >
                        {/* Close button */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.2 }}
                            className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-50"
                            onClick={(e) => {
                                e.stopPropagation()
                                setSelectedCert(null)
                            }}
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden glass-card shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent clicks on the image from closing
                        >
                            {/* Certificate Image */}
                            <div className="w-full h-full flex items-center justify-center bg-black/50 p-2 sm:p-4 rounded-xl">
                                <img
                                    src={selectedCert.certificate}
                                    alt={`${selectedCert.title} Full Certificate`}
                                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                                />
                            </div>

                            {/* Info bar at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
                                <h3 className="text-white text-2xl font-bold mb-2">{selectedCert.title}</h3>
                                <div className="flex items-center gap-4 text-gray-300 text-sm">
                                    <span className="flex items-center gap-2">
                                        <span>{selectedCert.logo}</span>
                                        {selectedCert.issuer}
                                    </span>
                                    <span>•</span>
                                    <span>{selectedCert.year}</span>
                                    <span>•</span>
                                    <span className="font-mono text-xs">{selectedCert.credentialId}</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
