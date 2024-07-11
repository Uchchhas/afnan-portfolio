/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    screens: {
      tablet: '820px',
      laptop: '1024px',
      desktop: '1441px',
    },
    container: {
      center: true,
      screens: {
        tablet: '992px',
        laptop: '1208px',
        desktop: '1208px',
      },
      padding: {
        DEFAULT: '1rem',
        tablet: '1rem',
        laptop: '1rem',
        desktop: '1rem',
      },
    },
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

