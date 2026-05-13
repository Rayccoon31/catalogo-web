/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      backgroundImage: {
        'fade-bottom': 'linear-gradient(to bottom, black 60%, transparent 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-fade-bottom': {
          'mask-image': 'linear-gradient(to bottom, black 60%, transparent 100%)',
          '-webkit-mask-image': 'linear-gradient(to bottom, black 60%, transparent 100%)',
        },
      })
    },
  ],
}
