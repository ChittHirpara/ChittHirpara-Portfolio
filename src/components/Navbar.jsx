import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
// Using profile photo instead of AI-generated logo

export default function Navbar() {
    const { isDark, toggleTheme } = useTheme()
    const [isMoreOpen, setIsMoreOpen] = useState(false)
    const location = useLocation()

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Work', path: '/work' },
        { name: 'Arena', path: '/arena' },
        { name: 'Resume', path: '/resume' },
        { name: 'Links', path: '/links' },
    ]

    const moreItems = [
        { name: 'Uses', description: 'My gear & software', path: '/uses', icon: 'uses' },
        { name: 'Guestbook', description: 'Sign my wall', path: '/guestbook', icon: 'guestbook' },
    ]

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="max-w-[1600px] mx-auto glass-nav rounded-full px-6 sm:px-8 py-4 flex items-center justify-between">
                {/* Left: Logo + Subtitle */}
                <div className="flex items-center gap-4 sm:gap-6">
                    <Link to="/">
                        <motion.img
                            src="/images/chitt-3.png"
                            alt="Chitt Hirpara"
                            className="w-12 h-12 rounded-full object-cover block border-2 border-white/20"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        />
                    </Link>
                    <div className="hidden sm:flex flex-col">
                        <span className="text-[10px] sm:text-xs font-medium tracking-wider text-emerald-400 uppercase leading-tight">
                            CREATIVE ENGINEER
                        </span>
                        <span className="text-[10px] sm:text-xs font-medium tracking-wider text-emerald-400 uppercase leading-tight">
                            BUILDING THE FUTURE
                        </span>
                    </div>
                </div>

                {/* Right: Nav Links + Theme Toggle + CTA */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Navigation Pills */}
                    <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full p-1">
                        {navItems.map((item, index) => {
                            const isActive = location.pathname === item.path
                            return (
                                <Link key={item.name} to={item.path}>
                                    <motion.div
                                        className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${isActive ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white'
                                            }`}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                                        whileHover={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            scale: 1.05,
                                        }}
                                    >
                                        {item.name}
                                    </motion.div>
                                </Link>
                            )
                        })}

                        {/* More Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsMoreOpen(true)}
                            onMouseLeave={() => setIsMoreOpen(false)}
                        >
                            <motion.button
                                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full flex items-center gap-1 ${isMoreOpen ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white'
                                    }`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                whileHover={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    scale: 1.05,
                                }}
                            >
                                More
                                <motion.svg
                                    className="w-3 h-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    animate={{ rotate: isMoreOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </motion.svg>
                            </motion.button>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {isMoreOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                                        className="absolute top-full right-0 mt-3 p-2.5 rounded-2xl bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 shadow-2xl w-max"
                                    >
                                        <div className="flex gap-2">
                                            {/* Labs Card - Featured */}
                                            <Link to="/labs" className="flex-shrink-0" onClick={() => setIsMoreOpen(false)}>
                                                <motion.div
                                                    className="w-40 h-[132px] rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-violet-800 p-4 flex flex-col justify-end relative overflow-hidden group cursor-pointer"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {/* Background icon */}
                                                    <div className="absolute top-3 right-3 opacity-30 group-hover:opacity-50 transition-opacity">
                                                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M7 2v2h1v14a4 4 0 008 0V4h1V2H7zm4 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm2-4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-white font-semibold text-base mb-0.5">Labs</h3>
                                                        <p className="text-white/70 text-[10px] leading-tight">
                                                            Experimental playground & tools
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            </Link>

                                            {/* Right side menu items */}
                                            <div className="flex flex-col gap-1 flex-1">
                                                {moreItems.map((item) => (
                                                    <Link key={item.name} to={item.path} onClick={() => setIsMoreOpen(false)}>
                                                        <motion.div
                                                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                                                            whileHover={{ x: 4 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                                {item.name === 'Links' ? (
                                                                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                                                    </svg>
                                                                ) : item.name === 'Uses' ? (
                                                                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                    </svg>
                                                                ) : item.name === 'Guestbook' ? (
                                                                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                ) : null}
                                                            </div>
                                                            <div>
                                                                <h4 className="text-white font-medium text-sm">{item.name}</h4>
                                                                <p className="text-gray-500 text-xs">{item.description}</p>
                                                            </div>
                                                        </motion.div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Theme Toggle */}
                    <motion.button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isDark ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        )}
                    </motion.button>

                    {/* Book a Call Button */}
                    <Link to="/book">
                        <motion.div
                            className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-white/20"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Book a Call
                        </motion.div>
                    </Link>
                </div>
            </div>
        </motion.nav>
    )
}
