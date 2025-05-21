'use client'

import React, { useState, FormEvent } from 'react'

interface FormState {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setSubmitStatus('submitting')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  return (
    <section 
      id="contact" 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Send me a message!
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8">
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.name 
                    ? 'border-red-500 focus:ring-red-300' 
                    : 'border-gray-300 focus:ring-primary-300'
                }`}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-300' 
                    : 'border-gray-300 focus:ring-primary-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.message 
                    ? 'border-red-500 focus:ring-red-300' 
                    : 'border-gray-300 focus:ring-primary-300'
                }`}
                placeholder="Your message..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button 
              type="submit" 
              disabled={submitStatus === 'submitting'}
              className={`w-full py-3 rounded-md text-white transition-colors duration-300 ${
                submitStatus === 'submitting'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300'
              }`}
            >
              {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 text-center text-green-600">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 text-center text-red-600">
                Oops! Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm 