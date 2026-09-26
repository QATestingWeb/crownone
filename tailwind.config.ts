/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        scrollImage: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-3deg)' },
        },
      },
      
      colors: {
        black: {
          100: '#000',
          200: '#0c0b09',
          70: '#121212',
          50: '#232323',
          30: '#0A0A0A',          
        },
        gray: {
          10: '#F6F6F6',
          20: '#A2A2A2',
          30: '#CECECE',
          50: '#585858',
          90: '#6D6D6D',
          100: '#F7F7F7',
          200: '#776D57',
        },
        red: {
          100: '#FF7700',
          200: '#F15822',
          300: '#F31C09',
          400: '#AB1609',
        },
        orange: {
          100: '#120F24',
          200: '#6350DB',
          300: '#6250DC',
          400: '#ff7438',
          500: '#fe4f11,'
        },
        yellow: {
          50: '#FEC601',
        },
      },
      animation: {
        underline: 'underline 0.5s ease-in-out forwards',
        float: 'float 4s ease-in-out infinite',
      },
      screens: {
        'sm': '400px',
        'md': '1024px',  
        'lg': '1920px',       
      },
      width: {
        'md': '1200px',
        'lg': '1400px',
        'full': '100%',
      },
      borderRadius: {
        '5': '5px',
        '10': '10px',
        '20': '20px',
        '30': '30px',        
      },
    },
  },
  plugins: [],
};