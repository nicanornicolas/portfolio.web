// Scroll reveal utility using Intersection Observer
// Pure CSS/JS solution for smooth scroll animations

export interface ScrollRevealConfig {
  delay?: number;
  distance?: string;
  duration?: number;
  easing?: string;
  origin?: 'top' | 'bottom' | 'left' | 'right';
  reset?: boolean;
  scale?: number;
  threshold?: number;
}

export const defaultScrollRevealConfig: ScrollRevealConfig = {
  delay: 200,
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  reset: false,
  scale: 0.9,
  threshold: 0.1
}

// CSS-based reveal using Intersection Observer
export const initScrollReveal = (config: ScrollRevealConfig = defaultScrollRevealConfig) => {
  if (typeof window === 'undefined') return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          
          // Add reveal animation class
          element.classList.add('animate-reveal')
          
          // Apply custom delay if specified
          const delay = element.dataset.delay || config.delay?.toString()
          if (delay) {
            element.style.animationDelay = `${delay}ms`
          }
          
          // Unobserve if reset is false
          if (!config.reset) {
            observer.unobserve(entry.target)
          }
        } else if (config.reset) {
          // Remove animation class if reset is enabled
          entry.target.classList.remove('animate-reveal')
        }
      })
    },
    { 
      threshold: config.threshold || 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  // Observe all elements with reveal classes
  const revealElements = document.querySelectorAll('.reveal, .reveal-card, .reveal-left, .reveal-right')
  revealElements.forEach((el) => {
    observer.observe(el)
  })

  return () => observer.disconnect()
}

// Hook for React components
export const useScrollReveal = (config?: ScrollRevealConfig) => {
  if (typeof window !== 'undefined') {
    return initScrollReveal(config)
  }
  return () => {}
}

// Utility to add reveal classes to elements
export const addRevealClass = (element: HTMLElement, direction: 'top' | 'bottom' | 'left' | 'right' = 'bottom') => {
  element.classList.add('reveal')
  element.dataset.origin = direction
} 