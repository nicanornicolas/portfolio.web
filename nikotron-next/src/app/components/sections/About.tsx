'use client'

import React from 'react'
import Image from 'next/image'

const achievements = [
  {
    title: 'AI Innovation Award',
    description: 'Recognized for developing an advanced AI-powered chatbot using Langchain',
    year: 2023
  },
  {
    title: 'Blockchain Development Certificate',
    description: 'Advanced certification in Ethereum smart contract development',
    year: 2022
  },
  {
    title: 'Open Source Contributor',
    description: 'Active contributor to multiple open-source projects in AI and web technologies',
    year: 2021
  }
]

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Professional Image */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-primary-100/50 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/professional-portrait.webp" 
                alt="Nicanor Nicolas Professional Portrait"
                width={600}
                height={600}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* About Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                As a Computer Engineer with over three years of experience, I specialize in creating 
                innovative solutions that bridge the gap between cutting-edge technologies and practical 
                business needs. My expertise spans AI/ML, software development, blockchain technologies, 
                and cloud computing.
              </p>
              <p>
                I'm passionate about developing intelligent systems that not only solve complex problems 
                but also enhance user experiences. My approach combines technical excellence with creative 
                problem-solving, enabling me to deliver impactful solutions across various domains.
              </p>
            </div>

            {/* Professional Achievements */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Professional Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.title} 
                    className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary-500 hover:shadow-md transition-shadow"
                  >
                    <h4 className="text-lg font-semibold text-gray-800">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>
                    <span className="text-xs text-primary-600 font-medium">
                      {achievement.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <a 
                href="/Nicanor_Nicolas_CV.pdf" 
                download 
                className="btn btn-primary inline-flex items-center"
              >
                Download CV
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-9.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 