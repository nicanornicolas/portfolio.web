'use client'

import React from 'react'
import Link from 'next/link'
import { UilLinkedinAlt, UilTwitterAlt, UilGithubAlt } from '@iconscout/react-unicons'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nicanornicolas64',
    icon: <UilLinkedinAlt size="24" />
  },
  {
    name: 'Twitter',
    href: 'https://x.com/Nik_aNo',
    icon: <UilTwitterAlt size="24" />
  },
  {
    name: 'GitHub',
    href: 'https://github.com/nicanornicolas',
    icon: <UilGithubAlt size="24" />
  }
]

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-500 dark:text-primary-400">
              Computer Engineer
            </h3>
            <p className="text-gray-400 dark:text-gray-300 text-sm">
              Crafting innovative solutions at the intersection of technology and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200 dark:text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200 dark:text-gray-100">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700"
                  aria-label={`${social.name} Profile`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Nicanor Nicolas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 