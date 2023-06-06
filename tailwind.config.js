const { url } = require('inspector');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontsize:{
      wel: ['250px', '293px'],
    },
    fontFamily:{
      'sans':["ROBOTO"]
    },
    
    extend: {
      colors:{
        "mblue": "#3C91E4",
        "ofwhite":"#FFFFFF 50%"
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform:" translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"},
          '50%': { transform:" translateY(0)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" },
        }
      },
      
            
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          mygradient:"linear-gradient(290.54deg, rgba(255, 255, 255, 0.1) 13.46%, rgba(255, 255, 255, 0) 104.83%), linear-gradient(107.79deg, #14161E 33.11%, #24262E 65.87%)",
        'profileimg':"url('/Image/hassan.png)",
        'welcome':"welcome",
        },
    },
  },
  plugins: [],

}
