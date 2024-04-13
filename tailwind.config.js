/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        // Light theme colors
        'primary': '#2577c1',
        'secondary': '#27272a',
        'theme': '#f4f4f5',
        'header-color': '#f4f4f5',
        'header-text': '#71717a',
        'header-text-hover': '#27272a',
    
        // Dark theme colors
        'dark-primary': '#ff500b',
        'dark-secondary': '#f4f4f5',
        'dark-theme': '#27272a',
        'dark-header-color': '#27272a',
        'dark-header-text':'#a1a1aa',
        'dark-header-text-hover':'#f4f4f5',

      }
    },
  },
  plugins: [],
}

