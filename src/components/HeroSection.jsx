import { motion } from 'framer-motion'

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12">
            {/* Vignette Overlay */}
            <div className="fixed inset-0 vignette pointer-events-none z-0" />

            {/* Center Hero Content */}
            <div className="relative z-10 text-center max-w-7xl mx-auto">
                {/* Main Headline */}
                {/* Main Headline */}
                <h1 className="headline-font leading-[0.9] tracking-tight text-white mb-8 overflow-hidden flex flex-col items-center drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    {/* Top Line: CHITT */}
                    <div className="text-[15vw] sm:text-[12vw] lg:text-[10vw] flex overflow-hidden leading-none pb-2">
                        {"CHITT".split("").map((char, index) => (
                            <motion.span
                                key={`chitt-${index}`}
                                className="inline-block"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: index * 0.05
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>

                    {/* Bottom Line: HIRPARA (Slightly smaller) */}
                    <div className="text-[12vw] sm:text-[10vw] lg:text-[8.5vw] flex overflow-hidden leading-none mt-0">
                        {"HIRPARA".split("").map((char, index) => (
                            <motion.span
                                key={`hirpara-${index}`}
                                className="inline-block"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.15 + (index * 0.05) // Slight delay after CHITT
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>
                </h1>

                {/* Supporting Text */}
                <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 font-light">
                        I DESIGN AND BUILD PRODUCTS THAT
                    </p>
                    <p className="serif-italic text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
                        deliver real impact.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Left: Location */}
            <motion.div
                className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] sm:text-xs text-gray-300 tracking-[0.2em] uppercase font-medium">
                        BASED IN NOIDA,
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-500 tracking-[0.15em] uppercase">
                        INDIA
                    </span>
                </div>
            </motion.div>

            {/* Bottom Right: Role */}
            <motion.div
                className="absolute bottom-6 sm:bottom-10 right-6 sm:right-12 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Stacked layers icon */}
                <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2L2 7l10 5 10-5-10-5z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2 17l10 5 10-5"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2 12l10 5 10-5"
                    />
                </svg>
                <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] sm:text-xs text-gray-300 tracking-[0.2em] uppercase font-medium">
                        FULL STACK DEV,
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-500 tracking-[0.15em] uppercase">
                        & DESIGNER
                    </span>
                </div>
            </motion.div>
        </section>
    )
}
