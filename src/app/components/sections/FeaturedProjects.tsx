'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'AI-Powered Chatbot',
    description: 'An advanced chatbot using Langchain and OpenAI, capable of context-aware conversations.',
    technologies: ['Python', 'Langchain', 'OpenAI', 'FastAPI'],
    imageUrl: '/images/projects/ai-chatbot.png',
    demoLink: 'https://ai-chatbot-demo.vercel.app',
    githubLink: 'https://github.com/nicanornicolas/ai-chatbot'
  },
  {
    id: 2,
    title: 'Blockchain Voting Platform',
    description: 'Decentralized voting system ensuring transparency and security using Ethereum smart contracts.',
    technologies: ['Solidity', 'React', 'Web3.js', 'Truffle'],
    imageUrl: '/images/projects/blockchain-voting.png',
    demoLink: 'https://blockchain-voting-demo.vercel.app',
    githubLink: 'https://github.com/nicanornicolas/blockchain-voting'
  },
  {
    id: 3,
    title: 'Machine Learning Dashboard',
    description: 'Interactive dashboard for real-time machine learning model performance tracking.',
    technologies: ['React', 'Django', 'TensorFlow', 'Chart.js'],
    imageUrl: '/images/projects/ml-dashboard.png',
    demoLink: 'https://ml-dashboard-demo.vercel.app',
    githubLink: 'https://github.com/nicanornicolas/ml-dashboard'
  }
]

const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-900/70"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={project.imageUrl} 
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4 transition-opacity duration-300">
            <Link 
              href={project.demoLink} 
              target="_blank"
              className="bg-white dark:bg-gray-800 text-primary-500 dark:text-primary-400 px-4 py-2 rounded-full hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white transition-colors"
            >
              Live Demo
            </Link>
            <Link 
              href={project.githubLink} 
              target="_blank"
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-800 transition-colors"
            >
              GitHub
            </Link>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeaturedProjects: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate my technical expertise and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects 