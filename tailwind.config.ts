import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000', // sharp black
        surface: '#0A0F1A', // deep blue-black
        textPrimary: '#E6F1FF', // white with azure tint
        accent1: '#00A3FF', // azure
        accent2: '#4FC3F7', // light azure
        highlight: '#A5F3FC', // soft cyan highlight
        border: '#1A2230' // dark blue-gray border
      }
    },
  },
  plugins: [],
} satisfies Config
