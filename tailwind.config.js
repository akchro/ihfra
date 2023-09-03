/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'banner-pattern':
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,.2) 70%), url(~/assets/IMG_6336.jpeg)",
        'newsletter': "url(~/assets/newsletter.jpeg)"
      },
      fontFamily: {
        noto_sans: ['var(--font-noto-sans)']
      }
    },
  },
  plugins: [],
}
