'use client'

import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import Image from 'next/image'
import Link from 'next/link'
import { UilLinkedinAlt, UilTwitterAlt, UilGithubAlt } from '@iconscout/react-unicons'

const socialLinks = [
  { 
    href: 'https://www.linkedin.com/in/nicanornicolas64', 
    icon: <UilLinkedinAlt size="28" />, 
    label: 'LinkedIn' 
  },
  { 
    href: 'https://x.com/Nik_aNo', 
    icon: <UilTwitterAlt size="28" />, 
    label: 'Twitter' 
  },
  { 
    href: 'https://github.com/nicanornicolas', 
    icon: <UilGithubAlt size="28" />, 
    label: 'GitHub' 
  }
]

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const options = {
      strings: [
        'Computer Engineer', 
        'Web Developer', 
        'AI/ML Specialist', 
        'Blockchain Developer'
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    }

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options)
      return () => typed.destroy()
    }
  }, [])

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      {/* 3D Gradient Blob Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-secondary-100/20 to-primary-200/20 dark:from-primary-900/10 dark:via-secondary-900/10 dark:to-primary-800/10 animate-blob-rotate">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-200/30 dark:bg-primary-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary-200/30 dark:bg-secondary-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-100/30 dark:bg-primary-700/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Nicanor Nicolas
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-blue-600 dark:text-blue-400">
            I&apos;m a <span ref={typedRef} className="typed-cursor"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
            Experienced Computer Engineer with a diverse skill set in AI/ML, 
            software development, and blockchain technologies. Passionate about 
            creating innovative solutions that drive technological advancement.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            <button className="btn btn-primary btn-floating px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors rounded-lg">Hire Me</button>
            <a 
              href="/Nicanor_Nicolas_CV.pdf" 
              download 
              className="btn btn-outline px-6 py-3 border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-600 dark:hover:bg-primary-400 hover:text-white dark:hover:text-white transition-colors rounded-lg"
            >
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6">
            {socialLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96 relative group">
            <Image 
              src="/images/profile.jpg" 
              alt="Nicanor Nicolas Profile" 
              fill
              priority
              className="rounded-full object-cover shadow-xl dark:shadow-gray-900/50 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
            />
            <div className="absolute inset-0 rounded-full border-4 border-primary-200/50 dark:border-primary-600/50 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 