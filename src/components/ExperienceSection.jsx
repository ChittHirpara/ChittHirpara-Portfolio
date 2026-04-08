import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const experiences = [
    {
        date: 'JUL 2025',
        company: 'The Foundation',
        location: 'Kalol, Gujarat',
        type: 'Day Zero',
        title: 'Logic & The C Language',
        highlights: [
            { text: 'Started with', keyword: 'C Programming', rest: ' — variables, loops, functions, pointers. Learning to think like a computer.' },
            { text: 'Understood', keyword: 'how memory works', rest: ' — stacks, heaps, addresses. The stuff most developers skip.' },
            { text: 'Solved problems on', keyword: 'pattern printing, recursion, and algorithms', rest: ' to build raw problem-solving instinct.' },
            { text: 'The mindset shift:', keyword: 'code is logic first, syntax second', rest: '.' },
        ],
        skills: ['C Programming', 'Logic Building', 'Algorithms', 'Problem Solving', 'Memory Concepts'],
    },
    {
        date: 'AUG 2025',
        company: 'The Web Begins',
        location: 'Home & Campus',
        type: 'Month 2',
        title: 'HTML & CSS — Pixels With Purpose',
        highlights: [
            { text: 'Learned', keyword: 'HTML5 semantic structure', rest: ' — stop using divs for everything, use the right elements.' },
            { text: 'Mastered', keyword: 'CSS Flexbox & Grid', rest: ' — layouts clicked instantly once I understood the box model.' },
            { text: 'Built', keyword: 'fully responsive static sites', rest: ' with media queries, custom properties, and smooth transitions.' },
            { text: 'First projects pushed to', keyword: 'GitHub', rest: ' — understood version control, commits, and branches.' },
        ],
        skills: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive Design', 'GitHub'],
    },
    {
        date: 'SEP 2025',
        company: 'Making Things Move',
        location: 'Deep Focus Mode',
        type: 'Month 3',
        title: 'JavaScript — The Language of the Web',
        highlights: [
            { text: 'Went deep into', keyword: 'vanilla JavaScript', rest: ' — data types, closures, scope, prototype chain.' },
            { text: 'Mastered', keyword: 'DOM manipulation & events', rest: ' — dynamically changing pages without any library.' },
            { text: 'Understood', keyword: 'async JavaScript', rest: ' — callbacks, Promises, async/await, and the event loop.' },
            { text: 'Built', keyword: 'real interactive UIs', rest: ' — to-do apps, weather dashboards, quiz engines — from scratch.' },
        ],
        skills: ['JavaScript ES6+', 'DOM', 'Async/Await', 'Promises', 'Fetch API', 'Event Loop'],
    },
    {
        date: 'OCT 2025',
        company: 'Going Frontend Pro',
        location: 'Component-Driven World',
        type: 'Month 4',
        title: 'React.js — Thinking in Components',
        highlights: [
            { text: 'Adopted', keyword: 'React.js', rest: ' — components, JSX, props, and one-directional data flow.' },
            { text: 'Learned', keyword: 'React Hooks', rest: ' deeply — useState, useEffect, useRef, useContext, custom hooks.' },
            { text: 'Implemented', keyword: 'state management patterns', rest: ' — lifting state, Context API, and when to use what.' },
            { text: 'Styled components using', keyword: 'Tailwind CSS', rest: ' — utility-first, fast iterations, no more CSS file chaos.' },
        ],
        skills: ['React.js', 'React Hooks', 'JSX', 'Context API', 'Tailwind CSS', 'Component Architecture'],
    },
    {
        date: 'NOV 2025',
        company: 'MERN Stack',
        location: 'Full Stack Territory',
        type: 'Month 5',
        title: 'Backend with Node.js & Express',
        highlights: [
            { text: 'Built', keyword: 'REST APIs with Node.js & Express', rest: ' — routes, middleware, controllers, error handling.' },
            { text: 'Integrated', keyword: 'MongoDB & Mongoose', rest: ' — schemas, models, queries, aggregation pipelines.' },
            { text: 'Implemented', keyword: 'JWT authentication', rest: ' — register, login, protected routes, token refresh flows.' },
            { text: 'Connected', keyword: 'React frontend to Express backend', rest: ' — the full MERN stack lived in one project for the first time.' },
        ],
        skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT Auth', 'MERN Stack'],
    },
    {
        date: 'DEC 2025',
        company: 'Firebase & Real-Time',
        location: 'Production Mindset',
        type: 'Month 6',
        title: 'Firebase & Deploying Real Products',
        highlights: [
            { text: 'Integrated', keyword: 'Firebase Authentication', rest: ' — Google, email/password, and session management.' },
            { text: 'Used', keyword: 'Firestore real-time database', rest: ' — live updates, listeners, and offline-first architecture.' },
            { text: 'Deployed apps on', keyword: 'Vercel & Firebase Hosting', rest: ' — CI/CD, environment variables, custom domains.' },
            { text: 'Understood', keyword: 'production concerns', rest: ' — performance, security rules, error tracking, and monitoring.' },
        ],
        skills: ['Firebase', 'Firestore', 'Firebase Auth', 'Vercel', 'Deployment', 'CI/CD Basics'],
    },
    {
        date: 'JAN 2026',
        company: 'Next.js & Advanced Frontend',
        location: 'Semester 2',
        type: 'Month 7',
        title: 'Next.js, SSR & Modern Architecture',
        highlights: [
            { text: 'Moved to', keyword: 'Next.js 14 with App Router', rest: ' — file-based routing, layouts, server & client components.' },
            { text: 'Implemented', keyword: 'Server-Side Rendering & Static Generation', rest: ' — SEO, performance, and the right rendering strategy for each page.' },
            { text: 'Added', keyword: 'Framer Motion animations', rest: ' — page transitions, scroll-driven effects, micro-interactions.' },
            { text: 'Built', keyword: 'this premium portfolio', rest: ' as the ultimate proof of modern frontend mastery.' },
        ],
        skills: ['Next.js 14', 'App Router', 'SSR', 'SSG', 'Framer Motion', 'SEO Optimization'],
    },
    {
        date: 'FEB 2026',
        company: 'AI / ML Exploration',
        location: 'Intelligence Layer',
        type: 'Month 8',
        title: 'Integrating AI into Products',
        highlights: [
            { text: 'Integrated', keyword: 'OpenAI API & Gemini API', rest: ' — building AI-powered features into real web apps.' },
            { text: 'Explored', keyword: 'Langchain & RAG pipelines', rest: ' — retrieval-augmented generation for smart, context-aware responses.' },
            { text: 'Built with', keyword: 'Hugging Face & FastAPI', rest: ' — Python-powered AI backends connected to React frontends.' },
            { text: 'Started learning', keyword: 'PyTorch fundamentals', rest: ' — tensors, autograd, and building neural networks from scratch.' },
        ],
        skills: ['OpenAI API', 'Gemini API', 'LangChain', 'FastAPI', 'Python', 'PyTorch', 'RAG'],
    },
    {
        date: 'MAR - APR 2026',
        company: 'Full Stack Mastery',
        location: 'Ahmedabad, Gujarat',
        type: 'Month 9–10 · Present',
        title: 'Building at Production Scale',
        highlights: [
            { text: 'Architecting', keyword: 'full-stack SaaS applications', rest: ' — auth, billing, dashboards, APIs, and deployment pipelines.' },
            { text: 'Deep focus on', keyword: 'system design & scalability', rest: ' — databases, caching, rate limiting, and API design patterns.' },
            { text: 'Mastered', keyword: 'TypeScript across the entire stack', rest: ' — end-to-end type safety from database to UI.' },
            { text: 'Still in Semester 2.', keyword: 'Building like a senior developer.', rest: '' },
        ],
        skills: ['TypeScript', 'SaaS Architecture', 'System Design', 'Prisma', 'PostgreSQL', 'Full-Stack Mastery'],
    },
    {
        date: "WHAT'S NEXT",
        company: 'The Horizon',
        location: 'Wherever the build takes me',
        type: 'Lifelong Learner',
        title: 'The Best Work Is Ahead',
        highlights: [
            { text: 'Every version of me is', keyword: 'better than yesterday\'s', rest: '. That\'s the only metric that matters.' },
            { text: 'Going deeper into', keyword: 'AI/ML, Web3, and distributed systems', rest: ' — the frontier of what\'s possible.' },
            { text: 'The goal:', keyword: 'become world-class', rest: ' at what I do — one commit, one product, one breakthrough at a time.' },
        ],
        skills: ['Web3', 'ML Engineering', 'Distributed Systems', 'World-Class Craft', 'Infinite Curiosity'],
    },
]

function ExperienceCard({ experience, index, isInView }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.3 + index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 relative"
        >
            {/* Left Side - Date & Company Info */}
            <div className="lg:text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                    {experience.date}
                </p>
                <h3
                    className="text-3xl lg:text-4xl italic font-light bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent mb-4"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                    {experience.company}
                </h3>
                <div className="flex lg:justify-end items-center gap-2 text-gray-400 text-sm mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{experience.location}</span>
                </div>
                <div className="flex lg:justify-end items-center gap-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{experience.type}</span>
                </div>
            </div>

            {/* Right Side - Role Details */}
            <div>
                <h4 className="text-2xl font-bold text-white mb-6">
                    {experience.title}
                </h4>

                <div className="space-y-4 mb-8">
                    {experience.highlights.map((highlight, i) => (
                        <p key={i} className="text-gray-400 text-sm leading-relaxed">
                            {highlight.text}{' '}
                            <span className="text-white font-medium">{highlight.keyword}</span>
                            {highlight.rest}
                        </p>
                    ))}
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-gray-300 text-xs font-medium hover:bg-white/[0.1] transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function ExperienceSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    })

    // Orb moves from 0% to 100% as user scrolls through the section
    const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <section ref={sectionRef} className="relative py-32 px-6 sm:px-12 lg:px-20 bg-black overflow-hidden">
            {/* Noise grain texture */}
            <div className="absolute inset-0 noise-texture opacity-[0.03]" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="text-[11px] uppercase tracking-[0.3em] text-pink-400 font-medium mb-6"
                    >
                        The Experience
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight"
                    >
                        <span className="text-white">Experience That</span>
                        <br />
                        <span className="text-white">Brings </span>
                        <span
                            className="italic font-light bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent"
                            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                        >
                            Ideas to Life
                        </span>
                    </motion.h2>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-1/2 lg:left-[300px] top-0 bottom-0 w-px transform -translate-x-1/2 lg:translate-x-0">
                        {/* Gradient line */}
                        <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-red-600/50 to-gray-800" />

                        {/* Moving Orb */}
                        <motion.div
                            style={{ top: orbY }}
                            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="relative w-10 h-10">
                                {/* Outer glow */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 blur-sm opacity-60" />
                                {/* Inner orb */}
                                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 shadow-lg">
                                    {/* Highlight */}
                                    <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/40" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Experience Cards */}
                    <div className="space-y-24 lg:pl-16">
                        {experiences.map((exp, index) => (
                            <ExperienceCard
                                key={exp.company}
                                experience={exp}
                                index={index}
                                isInView={isInView}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
