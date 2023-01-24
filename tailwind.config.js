/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 't-',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      background: '#f9f9f7',
      surface: '#f9f9f7',
      primary: '#284E68',
      secondary: '#9333ea',
      error: '#ef4444',
      info: '#3b82f6',
      success: '#22c55e',
      warning: '#f59e0b',
      created: '',
      ready: '',
      doing: '',
      done: '#22c55e',
      failed: '#FF5252',
      canceled: '',
    },
    extend: {},
  },
  plugins: [],
}
