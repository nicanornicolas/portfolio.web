'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          Tech Sorcerer
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white/80 backdrop-blur-md md:hidden">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-800 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 