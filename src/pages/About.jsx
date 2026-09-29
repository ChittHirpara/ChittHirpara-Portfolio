import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import GitHubActivitySection from '../components/GitHubActivitySection'
import DecodingLogicSection from '../components/DecodingLogicSection'
import ClosingSection from '../components/ClosingSection'
import SEO from '../components/SEO'

export default function About() {
    return (
        <div className="relative bg-black min-h-screen">
            <SEO title="About" description="Learn about Chitt Hirpara — his journey from C programming to full-stack development, AI engineering, and hackathons. Lead Software Engineer at Noerax." />
            {/* Noise Texture Overlay */}
            <div className="fixed inset-0 noise-texture pointer-events-none z-0" />

            {/* Navbar */}
            <Navbar />

            {/* About Hero */}
            <AboutHero />

            {/* About Section with 3 stacked photos */}
            <AboutSection />

            {/* Experience Timeline Section */}
            <ExperienceSection />

            {/* GitHub Activity Section */}
            <GitHubActivitySection />

            {/* Decoding Logic - Behind the Curtains */}
            <DecodingLogicSection />

            {/* Closing / Footer */}
            <ClosingSection />
        </div>
    )
}

