import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import Navbar from '../components/Navbar'
import ClosingSection from '../components/ClosingSection'

const hardware = [
    {
        category: 'Workstation',
        items: [
            { name: 'MacBook Pro 16" (M3 Max)', desc: 'Main machine (64GB RAM)' },
            { name: 'Pro Display XDR', desc: '32-inch Retina 6K' },
            { name: 'Herman Miller Aeron', desc: 'Remastered - Mineral' },
        ]
    },
    {
        category: 'Peripherals',
        items: [
            { name: 'Keychron Q1 Pro', desc: 'Custom switches + keycaps' },
            { name: 'Logitech MX Master 3S', desc: 'The productivity goat' },
            { name: 'Sony WH-1000XM5', desc: 'Noise cancelling bliss' },
        ]
    }
]

const software = [
    {
        category: 'Development',
        items: [
            { name: 'VS Code', desc: 'With customized soothing theme' },
            { name: 'Warp Terminal', desc: 'Rust-based, blazingly fast' },
            { name: 'Docker', desc: 'Containerization & deployments' },
        ]
    },
    {
        category: 'Design & Productivity',
        items: [
            { name: 'Figma', desc: 'UI/UX design & prototyping' },
            { name: 'Notion', desc: 'Second brain / Documentation' },
            { name: 'Raycast', desc: 'Spotlight replacement on steroids' },
        ]
    }
]

function Section({ title, data, delayOffset = 0 }) {
    return (
        <div className="mb-20">
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: delayOffset }}
                className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-8 pl-1"
            >
                {title}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {data.map((group) => (
                    <div key={group.category}>
                        <motion.h4
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: delayOffset + 0.1 }}
                            className="text-lg font-medium text-white mb-6 border-b border-white/10 pb-4 inline-block pr-12"
                        >
                            {group.category}
                        </motion.h4>

                        <div className="space-y-6">
                            {group.items.map((item, itemIndex) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: delayOffset + 0.2 + (itemIndex * 0.05) }}
                                    className="group"
                                >
                                    <div className="flex items-baseline justify-between">
                                        <h5 className="text-gray-200 font-medium group-hover:text-violet-400 transition-colors">
                                            {item.name}
                                        </h5>
                                        <span className="text-sm text-gray-600 font-mono hidden sm:block">0{itemIndex + 1}</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Uses() {
    // Initialize Lenis smooth scrolling
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <div className="relative bg-black min-h-screen">
            {/* Noise Texture Overlay */}
            <div className="fixed inset-0 noise-texture pointer-events-none z-0" />

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-end px-6 sm:px-12 lg:px-20 pt-32 pb-20">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Label */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-6"
                    >
                        My Gear & Software
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[15vw] lg:text-[12vw] font-black tracking-tighter leading-[0.85] text-white mb-4"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                        USES
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed"
                    >
                        A curated list of the hardware, software, and tools I use to build things for the web.
                    </motion.p>
                </div>
            </section>

            {/* Content */}
            <section className="px-6 sm:px-12 lg:px-20 pb-20">
                <div className="max-w-7xl mx-auto">
                    <Section title="Hardware" data={hardware} delayOffset={0.4} />
                    <Section title="Software" data={software} delayOffset={0.6} />
                </div>
            </section>

            {/* Closing / Footer */}
            <ClosingSection />
        </div>
    )
}
