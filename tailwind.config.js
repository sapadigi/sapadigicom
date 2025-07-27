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
          50: 'rgb(247 249 245)', // bg-primary-50
          100: 'rgb(238 243 233)', // bg-primary-100
          200: 'rgb(220 230 210)', // bg-primary-200
          300: 'rgb(201 217 187)', // bg-primary-300
          DEFAULT: 'rgb(156 175 136)', // bg-primary
          500: 'rgb(156 175 136)', // bg-primary
          600: 'rgb(125 140 111)', // text-primary-600 dan btn-primary hover
        },
        secondary: {
          DEFAULT: 'rgb(54 69 79)', // text-secondary dan bg-secondary
          50: 'rgb(242 243 244)', // bg-secondary-50
          100: 'rgb(229 231 233)', // bg-secondary-100
        },
        surface: 'rgb(245 245 220)', // bg-surface
        background: 'rgb(255 255 255)', // bg-background
        // Text Colors
        text: {
          primary: 'rgb(45 55 72)', // gray-800
          secondary: 'rgb(113 128 150)', // gray-500
        },

        // Status Colors
        error: {
          50: 'rgb(254 242 242)',
          100: 'rgb(254 226 226)',
          200: 'rgb(254 202 202)',
          300: 'rgb(252 165 165)',
          400: 'rgb(245 101 101)',
          500: 'rgb(239 68 68)',
          600: 'rgb(220 38 38)',
          DEFAULT: 'rgb(245 101 101)',
        },

        warning: {
          50: 'rgb(255 251 235)',
          100: 'rgb(254 243 199)',
          200: 'rgb(253 230 138)',
          300: 'rgb(252 211 77)',
          400: 'rgb(237 137 54)',
          500: 'rgb(245 158 11)',
          600: 'rgb(217 119 6)',
          DEFAULT: 'rgb(237 137 54)',
        },

        success: {
          50: 'rgb(240 253 244)',
          100: 'rgb(220 252 231)',
          200: 'rgb(187 247 208)',
          300: 'rgb(134 239 172)',
          400: 'rgb(72 187 120)',
          500: 'rgb(34 197 94)',
          600: 'rgb(22 163 74)',
          DEFAULT: 'rgb(72 187 120)',
        },

        accent: {
          50: 'rgb(253 249 243)',
          100: 'rgb(251 243 231)',
          200: 'rgb(247 231 207)',
          300: 'rgb(243 219 183)',
          400: 'rgb(239 207 159)',
          500: 'rgb(232 184 109)',
          600: 'rgb(186 147 87)',
          700: 'rgb(139 110 65)',
          800: 'rgb(92 73 43)',
          900: 'rgb(46 36 22)',
          DEFAULT: 'rgb(232 184 109)',
        },
        'text-secondary': 'rgb(113 128 150)', // text-text-secondary
      },
      fontFamily: {
        headline: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      transitionProperty: {
        'standard': 'all',
      },
      transitionDuration: {
        'standard': '300ms',
      },
      boxShadow: {
        'cta': '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
      },
    },
  },
  plugins: [],
}
