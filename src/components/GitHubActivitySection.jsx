import { useRef, useState, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import { GitHubCalendar } from 'react-github-calendar'
import 'react-github-calendar/tooltips.css'

export default function GitHubActivitySection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.05 })
    const [selectedYear, setSelectedYear] = useState('last')

    // Exact GitHub dark mode contribution palette
    const gitHubDarkTheme = {
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
    }

    const currentYear = new Date().getFullYear()
    const availableYears = useMemo(() => ['last', currentYear, currentYear - 1], [currentYear])

    return (
        <section ref={sectionRef} className="relative pt-12 pb-20 px-6 sm:px-12 lg:px-20 bg-black overflow-hidden">
            {/* Noise grain texture */}
            <div className="absolute inset-0 noise-texture opacity-[0.03]" />

            <div className="max-w-6xl mx-auto">
                {/* Prominent, interactive preview line — Bridge from Ventures to GitHub */}
                <div className="flex items-center justify-center mb-10">
                    <a
                        href="https://github.com/ChittHirpara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3.5 text-lg sm:text-xl font-semibold text-gray-200 hover:text-white transition-colors duration-300 py-2.5 px-6 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] backdrop-blur-sm shadow-lg shadow-black/40"
                    >
                        {/* GitHub Icon */}
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                        </svg>

                        {/* Text with animated underline */}
                        <span className="relative tracking-wide">
                            See more projects on GitHub
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-white group-hover:w-full transition-all duration-300 ease-out" />
                        </span>

                        {/* Interactive Animated Arrow */}
                        <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 border border-white/15 group-hover:bg-white group-hover:border-white group-hover:text-black group-hover:translate-x-1.5 transition-all duration-300">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-current transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>
                </div>

                {/* Section Header */}
                <div className="text-center mb-10">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                        transition={{ duration: 0.6 }}
                        className="text-[11px] uppercase tracking-[0.3em] text-purple-400 font-medium mb-3"
                    >
                        My Code Journey
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                    >
                        <span className="text-white">GitHub Activity</span>
                        <br />
                        <span
                            className="italic font-light bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                        >
                            && Open Source
                        </span>
                    </motion.h2>
                </div>

                {/* GitHub Contribution Graph Card */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 lg:p-10 overflow-hidden w-full shadow-2xl relative"
                    style={{
                        boxShadow: '0 4px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                    }}
                >
                    {/* Top Controls: GitHub Logo & Year Selector */}
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-6 pb-5 border-b border-white/[0.05] gap-4">
                        {/* GitHub Logo Header */}
                        <a
                            href="https://github.com/ChittHirpara"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 hover:opacity-90 transition-opacity"
                        >
                            <svg className="w-8 h-8 text-white group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span className="text-white font-semibold text-lg tracking-wide group-hover:text-green-400 transition-colors">
                                @ChittHirpara
                            </span>
                            <span className="text-xs text-gray-500 font-mono hidden sm:inline-flex items-center gap-1 group-hover:text-gray-400">
                                ↗
                            </span>
                        </a>

                        {/* Year Selector */}
                        <div className="flex bg-white/[0.03] p-1 rounded-lg border border-white/[0.08]" style={{ scrollbarWidth: 'none' }}>
                            {availableYears.map((y) => (
                                <button
                                    key={y}
                                    onClick={() => setSelectedYear(y)}
                                    className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all duration-300 ${selectedYear === y
                                        ? 'bg-white/10 text-white shadow-sm'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {y === 'last' ? 'Last Year' : y}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-x-auto w-full flex justify-center pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                        <div className="min-w-fit pr-4">
                            <GitHubCalendar
                                username="ChittHirpara"
                                year={selectedYear === 'last' ? undefined : selectedYear}
                                colorScheme="dark"
                                theme={gitHubDarkTheme}
                                blockSize={14}
                                blockMargin={5}
                                fontSize={14}
                                showWeekdayLabels={['mon', 'wed', 'fri']}
                                tooltips={{
                                    activity: {
                                        text: (activity) => {
                                            const count = activity.count
                                            const countStr = count === 0 ? 'No contributions' : `${count} contribution${count === 1 ? '' : 's'}`
                                            const dateParts = activity.date.split('-')
                                            const dateObj = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2]))
                                            const formattedDate = dateObj.toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })
                                            return `${countStr} on ${formattedDate}`
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
