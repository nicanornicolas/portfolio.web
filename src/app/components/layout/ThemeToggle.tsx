'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return ( // Render a placeholder or nothing until mounted to avoid hydration mismatch
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-2 h-10 w-10 rounded-lg bg-gray-200 dark:bg-gray-700" // Placeholder style
        disabled
      >
        {/* Placeholder icon or empty */}
      </button>
    );
  }

  // Use resolvedTheme to correctly show icon for "system" theme
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
    >
      {isDarkMode ? (
        <i className="uil uil-sun text-2xl text-yellow-400"></i> // Sun icon for dark mode (to switch to light)
      ) : (
        <i className="uil uil-moon text-2xl text-gray-700"></i> // Moon icon for light mode (to switch to dark)
      )}
    </button>
  )
}

export default ThemeToggle 