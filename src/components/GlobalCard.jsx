import { useState, useEffect, useRef, Suspense, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import ErrorBoundary from './ErrorBoundary'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

// Timezone data with rotation angles (longitude-based)
const timezones = [
    { id: 'uk', code: 'GB', label: 'UK', country: 'United Kingdom', tz: 'Europe/London', rotation: 0 },
    { id: 'india', code: 'IN', label: 'India', country: 'India', tz: 'Asia/Kolkata', rotation: -1.4 },
    { id: 'usa', code: 'US', label: 'USA', country: 'United States', tz: 'America/New_York', rotation: 1.3 },
]

// Generate dotted sphere - continent-like pattern
function generateGlobePoints(count = 2000) {
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
        // Fibonacci sphere distribution for even coverage
        const phi = Math.acos(1 - 2 * (i + 0.5) / count)
        const theta = Math.PI * (1 + Math.sqrt(5)) * i

        const x = Math.cos(theta) * Math.sin(phi)
        const y = Math.cos(phi)
        const z = Math.sin(theta) * Math.sin(phi)

        // Create land-like patterns by filtering points
        const noise = Math.sin(x * 3) * Math.cos(y * 4) * Math.sin(z * 2.5)
        if (noise > -0.3) {
            positions[i * 3] = x
            positions[i * 3 + 1] = y
            positions[i * 3 + 2] = z
        }
    }

    return positions
}

// 3D Earth Globe
function Earth({ isVisible, targetRotation = 0 }) {
    const groupRef = useRef()
    const { mouse } = useThree()
    const baseRotation = useRef(0)

    const points = useMemo(() => generateGlobePoints(2000), [])

    useFrame((state) => {
        if (!groupRef.current || !isVisible) return

        // Smooth rotation to target country
        baseRotation.current = THREE.MathUtils.lerp(
            baseRotation.current,
            targetRotation,
            0.03
        )

        // Apply base rotation + slow idle drift
        groupRef.current.rotation.y = baseRotation.current + state.clock.elapsedTime * 0.015

        // Subtle mouse parallax
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            mouse.y * 0.15,
            0.03
        )
    })

    return (
        <group ref={groupRef} position={[0, -0.2, 0]}>
            {/* Core sphere with rim glow */}
            <Sphere args={[0.95, 32, 32]}>
                <meshBasicMaterial
                    color="#0a0a0a"
                    transparent
                    opacity={0.95}
                />
            </Sphere>

            {/* Atmospheric rim */}
            <Sphere args={[1.0, 32, 32]}>
                <meshBasicMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.04}
                    side={THREE.BackSide}
                />
            </Sphere>

            {/* Dotted continents */}
            <Points positions={points} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#a0a0a0"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    )
}

export default function GlobalCard() {
    const [activeZone, setActiveZone] = useState(timezones[1]) // Default India
    const [isVisible, setIsVisible] = useState(false)
    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        )
        if (cardRef.current) observer.observe(cardRef.current)
        return () => observer.disconnect()
    }, [])

    // Live clock
    const [times, setTimes] = useState({})
    useEffect(() => {
        const updateTimes = () => {
            const updated = {}
            timezones.forEach(tz => {
                updated[tz.id] = dayjs().tz(tz.tz).format('HH:mm')
            })
            setTimes(updated)
        }
        updateTimes()
        const interval = setInterval(updateTimes, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            ref={cardRef}
            className="relative rounded-3xl overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                minHeight: '300px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
        >
            {/* Noise grain texture */}
            <div className="absolute inset-0 noise-texture opacity-10" />

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-between" style={{ minHeight: '300px' }}>
                {/* Top Label */}
                <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3">
                        Available Globally
                    </p>
                    <h3 className="text-white text-xl font-bold leading-snug">
                        Adaptable across<br />time zones
                    </h3>
                </div>

                {/* Timezone pills */}
                <div className="flex flex-col items-end gap-2 mt-6">
                    {timezones.map((zone) => {
                        const isActive = zone.id === activeZone.id
                        return (
                            <motion.button
                                key={zone.id}
                                onClick={() => setActiveZone(zone)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                    ? 'border border-orange-500 text-white'
                                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className={`text-xs ${isActive ? 'text-orange-400' : 'text-gray-500'}`}>
                                    {zone.code}
                                </span>
                                <span>{zone.label}</span>
                                {times[zone.id] && (
                                    <span className={`text-xs ml-1 font-mono ${isActive ? 'text-white/70' : 'text-gray-600'}`}>
                                        {times[zone.id]}
                                    </span>
                                )}
                            </motion.button>
                        )
                    })}

                    {/* Remote badge */}
                    <div className="mt-2 text-right">
                        <div className="flex items-center justify-end gap-1 mb-1">
                            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-[10px] uppercase tracking-widest text-gray-500">Remote</span>
                        </div>
                        <p className="text-white font-semibold text-lg">{activeZone.label}</p>
                    </div>
                </div>
            </div>

            {/* 3D Globe - Large, Bottom Left */}
            <div className="absolute -bottom-20 -left-20 w-[380px] h-[380px]">
                <ErrorBoundary>
                    <Suspense fallback={
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-48 h-48 rounded-full border border-white/10 animate-pulse" />
                        </div>
                    }>
                        <Canvas
                            camera={{ position: [0, 0, 2.2], fov: 50 }}
                            dpr={[1, 1]}
                            gl={{ antialias: false, powerPreference: 'high-performance', preserveDrawingBuffer: false }}
                            style={{ background: 'transparent' }}
                            onCreated={({ gl }) => {
                                gl.domElement.addEventListener('webglcontextlost', (e) => e.preventDefault(), false)
                            }}
                        >
                            <Earth isVisible={isVisible} targetRotation={activeZone.rotation} />
                        </Canvas>
                    </Suspense>
                </ErrorBoundary>
            </div>
        </motion.div>
    )
}
