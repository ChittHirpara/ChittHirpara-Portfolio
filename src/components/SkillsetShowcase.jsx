import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'
import ErrorBoundary from './ErrorBoundary'

const skills = [
    // Languages
    { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'C++', logo: 'https://cdn.simpleicons.org/cplusplus/00599C' },
    { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
    // Frontend
    { name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS3', logo: 'https://cdn.simpleicons.org/css/1572B6' },
    { name: 'ReactJS', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
    { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Motion', logo: 'https://cdn.simpleicons.org/framer/ffffff' },
    // Backend & APIs
    { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express.js', logo: 'https://cdn.simpleicons.org/express/ffffff' },
    { name: 'REST APIs', logo: 'https://cdn.simpleicons.org/fastapi/009688' },
    { name: 'JWT / OAuth', logo: 'https://cdn.simpleicons.org/jsonwebtokens/ffffff' },
    // Databases
    { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Firebase', logo: 'https://cdn.simpleicons.org/firebase/FFCA28' },
    { name: 'Prisma', logo: 'https://cdn.simpleicons.org/prisma/ffffff' },
    // Tools & DevOps
    { name: 'Git', logo: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/ffffff' },
    { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Postman', logo: 'https://cdn.simpleicons.org/postman/FF6C37' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Linux', logo: 'https://cdn.simpleicons.org/linux/FCC624' },
    // Cloud & Deploy
    { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/ffffff' },
    { name: 'Netlify', logo: 'https://cdn.simpleicons.org/netlify/00C7B7' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    // Other
    { name: 'Zustand', logo: 'https://cdn.simpleicons.org/react/8B5CF6' },
    { name: 'Expo', logo: 'https://cdn.simpleicons.org/expo/ffffff' },
    { name: 'Clerk', logo: 'https://cdn.simpleicons.org/clerk/6C47FF' },
]

function GlossySculpture({ scrollProgress }) {
    const groupRef = useRef()
    const breathingRef = useRef(0)

    useFrame((state, delta) => {
        if (!groupRef.current) return

        // Scroll-driven rotation - more responsive
        const scrollValue = scrollProgress ? scrollProgress.get() : 0
        const targetRotationY = scrollValue * Math.PI * 2.5
        const targetRotationX = Math.sin(scrollValue * Math.PI) * 0.35

        // Smooth lerp
        groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.06
        groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.06

        // Gentle breathing animation
        breathingRef.current += delta * 0.15
        const breathScale = 1 + Math.sin(breathingRef.current) * 0.02
        groupRef.current.scale.setScalar(breathScale * 0.58)
    })

    return (
        <group ref={groupRef} scale={0.58}>
            {/* Primary Torus Knot - Large outer with dark chrome & iridescent sheen */}
            <mesh>
                <torusKnotGeometry args={[1.2, 0.35, 96, 32, 2, 3]} />
                <meshStandardMaterial
                    color="#201a35"
                    metalness={0.92}
                    roughness={0.12}
                />
            </mesh>

            {/* Secondary Knot - Medium, rotated with deep violet slate */}
            <mesh rotation={[Math.PI / 3, Math.PI / 5, Math.PI / 6]} scale={0.75}>
                <torusKnotGeometry args={[1.1, 0.28, 64, 24, 3, 5]} />
                <meshStandardMaterial
                    color="#141829"
                    metalness={0.88}
                    roughness={0.16}
                />
            </mesh>

            {/* Inner Knot - Smaller, different weave */}
            <mesh rotation={[Math.PI / 6, Math.PI / 4, 0]} scale={0.55}>
                <torusKnotGeometry args={[1.0, 0.22, 48, 20, 5, 7]} />
                <meshStandardMaterial
                    color="#25122e"
                    metalness={0.85}
                    roughness={0.18}
                />
            </mesh>
        </group>
    )
}

export default function SkillsetShowcase() {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(true)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3])
    const y = useTransform(scrollYProgress, [0, 0.3], [30, 0])

    // Mount canvas immediately and observe
    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { rootMargin: '800px 0px 800px 0px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <motion.section
            ref={sectionRef}
            className="relative bg-black pt-12 pb-16 overflow-hidden z-10"
            style={{ opacity }}
        >
            {/* Noise & Vignette */}
            <div className="absolute inset-0 noise-texture opacity-5" />
            <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle, transparent 0%, transparent 50%, black 100%)' }} />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
                {/* 3D Sculpture — Procedural multi-point studio lighting */}
                <div className="h-[340px] sm:h-[400px] lg:h-[440px] mb-2">
                    {isVisible ? (
                        <ErrorBoundary>
                            <Suspense fallback={
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full border border-white/10 animate-pulse" />
                                </div>
                            }>
                                <Canvas
                                    camera={{ position: [0, 0, 4.6], fov: 45 }}
                                    dpr={[1, 1.5]}
                                    gl={{
                                        antialias: true,
                                        alpha: true,
                                        powerPreference: 'high-performance',
                                        preserveDrawingBuffer: false,
                                        failIfMajorPerformanceCaveat: false,
                                        toneMapping: THREE.ACESFilmicToneMapping,
                                        toneMappingExposure: 1.2,
                                    }}
                                    onCreated={({ gl }) => {
                                        gl.domElement.addEventListener('webglcontextlost', (e) => {
                                            e.preventDefault()
                                        }, false)
                                        gl.domElement.addEventListener('webglcontextrestored', () => {
                                            gl.setSize(gl.domElement.width, gl.domElement.height)
                                        }, false)
                                    }}
                                >
                                    {/* Base ambient lighting */}
                                    <ambientLight intensity={0.7} />

                                    {/* Key light for crisp reflections */}
                                    <directionalLight position={[5, 6, 5]} intensity={2.8} color="#ffffff" />

                                    {/* Vivid Purple/Pink rim light */}
                                    <directionalLight position={[-8, -4, -3]} intensity={4.2} color="#c084fc" />

                                    {/* Vivid Cyan/Teal specular fill */}
                                    <directionalLight position={[8, -3, 3]} intensity={3.8} color="#38bdf8" />

                                    {/* Warm top spotlight */}
                                    <spotLight
                                        position={[0, 8, 6]}
                                        intensity={3.5}
                                        color="#fb923c"
                                        angle={0.6}
                                        penumbra={0.8}
                                    />

                                    {/* Electric blue bottom fill */}
                                    <pointLight position={[0, -5, 2]} intensity={2.5} color="#818cf8" />

                                    <GlossySculpture scrollProgress={scrollYProgress} />
                                </Canvas>
                            </Suspense>
                        </ErrorBoundary>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full border border-white/10 animate-pulse" />
                        </div>
                    )}
                </div>

                {/* Typography Block */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 mt-2 relative z-20"
                    style={{ y }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Small Label */}
                    <p className="text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase mb-4">
                        My Skillset
                    </p>

                    {/* Main Headline */}
                    <h2 className="text-5xl lg:text-7xl font-bold tracking-tight">
                        The Magic{' '}
                        <span className="font-serif italic bg-gradient-to-r from-pink-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                            Behind
                        </span>
                    </h2>
                </motion.div>

                {/* Tech Pills Grid */}
                <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="group relative px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm
                         hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                         transition-all duration-500 cursor-pointer"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.03,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="flex items-center gap-2.5">
                                <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    className="w-5 h-5 object-contain flex-shrink-0"
                                    onError={(e) => { e.target.style.display = 'none' }}
                                />
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
                                    {skill.name}
                                </span>
                            </div>

                            {/* Inner glow on hover */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/0 via-orange-500/0 to-orange-500/0 
                            group-hover:from-pink-500/10 group-hover:via-orange-500/10 group-hover:to-orange-500/10 
                            transition-all duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
