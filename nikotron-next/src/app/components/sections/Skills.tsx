'use client'

import React from 'react'

// Define skill categories with icons and progress
const skillCategories = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: '💻', progress: 90 },
      { name: 'TypeScript', icon: '🔧', progress: 85 },
      { name: 'Python', icon: '🐍', progress: 88 },
      { name: 'Solidity', icon: '🔗', progress: 75 }
    ]
  },
  {
    name: 'Frontend Technologies',
    skills: [
      { name: 'React.js', icon: '⚛️', progress: 92 },
      { name: 'Next.js', icon: '🌐', progress: 88 },
      { name: 'Tailwind CSS', icon: '🎨', progress: 85 },
      { name: 'HTML/CSS', icon: '🖌️', progress: 95 }
    ]
  },
  {
    name: 'Backend & Cloud',
    skills: [
      { name: 'Node.js', icon: '🚀', progress: 87 },
      { name: 'Django', icon: '🐎', progress: 80 },
      { name: 'AWS', icon: '☁️', progress: 75 },
      { name: 'Docker', icon: '🐳', progress: 70 }
    ]
  },
  {
    name: 'AI & Machine Learning',
    skills: [
      { name: 'TensorFlow', icon: '🤖', progress: 80 },
      { name: 'PyTorch', icon: '📊', progress: 75 },
      { name: 'Langchain', icon: '🧠', progress: 70 },
      { name: 'OpenCV', icon: '👁️', progress: 65 }
    ]
  }
]

const SkillProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div 
      className="bg-primary-500 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
      style={{ width: `${progress}%` }}
    ></div>
  </div>
)

const Skills: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.name} 
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-4">
                    <div className="text-3xl w-12 text-center">{skill.icon}</div>
                    <div className="flex-grow">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.progress}%</span>
                      </div>
                      <SkillProgressBar progress={skill.progress} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 