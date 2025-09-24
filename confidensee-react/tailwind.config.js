/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5e72e4',
        'primary-light': '#7e95f2',
        'primary-glow': 'rgba(94, 114, 228, 0.5)',
        secondary: '#ff5e7d',
        'secondary-light': '#ff8fa4',
        'secondary-glow': 'rgba(255, 94, 125, 0.5)',
        accent: '#ff0080',
        'accent-light': '#ff3399',
        'accent-glow': 'rgba(255, 0, 128, 0.5)',
        'light-bg': '#f8f9fe',
        'lighter-bg': '#ffffff',
        'text-dark': '#2d3748',
        'text-gray': '#718096',
        success: '#2dce89',
        warning: '#ffaa00',
        info: '#00aaff',
        danger: '#f5365c',
      },
      keyframes: {
        shine: {
          '0%': { left: '-100%' },
          '20%': { left: '100%' },
          '100%': { left: '100%' },
        }
      },
      animation: {
        shine: 'shine 3s infinite',
      },
    },
  },
};