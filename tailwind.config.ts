import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}/'
  ],
  theme: {
    fontFamily:{
      Inter : ['var(--font-Inter)'],
    },
    extend: {
      colors: {
        'primary_color': "#2D0977",
        'secondary_color': "#FD4114",
        'green': "#219653",
        'white': "#FFFFFF",
        'yellow': "#FFC444",
        'light-green': '#27AE60',
        'black':"#000000",
        'light-black':"#252A31",
        'grey': "#52575C",
        'dark-grey':"#636363",
        'light-grey':"#F8F8F8",
        'light-orange': "#FCE4DD",
        'grey-line': "#9ca3af",
        "text-place":"#a0a7b2",
        'pink': "#FFBBAB",
        'blue':"#20A7EB",
        'purple':"#BB6BD9",
        'green-green':"#08F4B6",
        'light-blue':"#A2DEF2",
        "light-pink":"#FF9DAB",
        "light-green-green":"#BBFBC1",
        "text-color":"#0C2C5E",
        "text-number":"#4D5959",
      }
    },
   
  },
  plugins: [],
}
export default config
