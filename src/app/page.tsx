import { Metadata } from 'next'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import FeaturedProjects from './components/sections/FeaturedProjects'
import ContactForm from './components/sections/ContactForm'
import Footer from './components/layout/Footer'

export const metadata: Metadata = {
  title: 'Nicanor Nicolas - Computer Engineer Portfolio',
  description: 'Portfolio showcasing skills in web development, AI/ML, and blockchain',
  keywords: ['computer engineer', 'web development', 'AI', 'blockchain'],
  openGraph: {
    title: 'Nicanor Nicolas Portfolio',
    description: 'Experienced Computer Engineer specializing in innovative tech solutions',
    images: [{ url: '/images/profile.webp' }]
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
} 