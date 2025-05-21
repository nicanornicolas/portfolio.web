/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#b3d7ff',
          200: '#80bdff',
          300: '#4da3ff',
          400: '#1a89ff',
          500: '#0070f3',
          600: '#0062cc',
          700: '#0056b3',
          800: '#004499',
          900: '#003380'
        },
        secondary: {
          50: '#f0f9ff',
          100: '#b8e0ff',
          200: '#80c7ff',
          300: '#4aadff',
          400: '#1494ff',
          500: '#007bff',
          600: '#0069e6',
          700: '#0057cc',
          800: '#0046b3',
          900: '#003599'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      boxShadow: {
        'custom': '0 10px 25px rgba(0, 123, 255, 0.1)',
        'hover': '0 15px 35px rgba(0, 123, 255, 0.2)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
} 