/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        ivory: '#faf6ee',
        saffron: {
          DEFAULT: '#d97706',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          400: '#fbbf24',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
        },
        forest: {
          DEFAULT: '#14532d',
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          600: '#166534',
          700: '#14532d',
          800: '#052e16',
          900: '#022c22',
        },
      },
      maxWidth: {
        '90rem': '90rem',
      },
    },
  },
  plugins: [],
};
