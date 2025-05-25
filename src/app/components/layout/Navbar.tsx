'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => {
        const element = document.querySelector(link.href)
        if (element) {
          const rect = element.getBoundingClientRect()
          return {
            id: link.href.substring(1), // remove #
            offsetTop: rect.top + window.scrollY,
            offsetBottom: rect.bottom + window.scrollY
          }
        }
        return null
      }).filter((section): section is { id: string; offsetTop: number; offsetBottom: number } => section !== null)

      const scrollPosition = window.scrollY + 100 // offset for navbar height

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (scrollPosition >= section.offsetTop) {
          setActiveSection(section.id)
          break
        }
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navLinks])

  const handleLinkClick = (href: string) => {
    setActiveSection(href.substring(1))
    setIsOpen(false)
  }

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md dark:shadow-gray-700/50 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Computer Engineer<span className="text-primary-500 dark:text-primary-400">.</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none ml-2"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                onClick={() => handleLinkClick(link.href)}
                className={`text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative py-2 ${
                  activeSection === link.href.substring(1) ? 'font-semibold text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
                )}
              </Link>
            </li>
          ))}
          {/* Download CV Button for Desktop */}
          <li>
            <a
              href="/Nicanor_Nicolas_CV.pdf"
              download
              className="btn btn-outline ml-4 px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-white transition-colors rounded-lg"
            >
              Download CV <i className="uil uil-file-alt ml-1"></i>
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md md:hidden shadow-lg">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className={`text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative py-2 ${
                      activeSection === link.href.substring(1) ? 'font-semibold text-blue-600 dark:text-blue-400' : ''
                    }`}
                    onClick={() => handleLinkClick(link.href)}
                  >
                    {link.label}
                    {activeSection === link.href.substring(1) && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
                    )}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Nicanor_Nicolas_CV.pdf"
                  download
                  className="btn btn-outline my-2 px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-white transition-colors rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Download CV <i className="uil uil-file-alt ml-1"></i>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 