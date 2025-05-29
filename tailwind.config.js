/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      },
      dropShadow: {
        'custom_purple': '2px 2px 5px rgb(192, 126, 250)',
        'custom_white': '2px 2px 5px white',
      },

       backdropBlur: {
        glass: '500px', // custom blur level
      },
      backgroundColor: {
        'glass-white': 'rgba(255, 255, 255, 0.15)',
        'glass-dark': 'rgba(0, 0, 0, 0.25)',
      },
      borderColor: {
        'glass-border': 'rgba(255, 255, 255, 0.2)',
      },
      boxShadow: {
        glass: '0 8px 100px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'gradient-v1': 'linear-gradient(135deg, #EBD3F8 0%, #AD49E1 25%, #7A1CAC 50%, #2E073F 75%, #A40793 100%)',
        'gradient-v2': 'linear-gradient(120deg, #AD49E1 0%, #7A1CAC 30%, #2E073F 60%, #A40793 90%)',
        'gradient-v3': 'linear-gradient(90deg, #EBD3F8 0%, #AD49E1 20%, #7A1CAC 40%, #2E073F 80%, #A40793 100%)',
         'radial-v1': 'radial-gradient(circle, #EBD3F8 0%, #AD49E1 25%, #7A1CAC 50%, #2E073F 75%, #A40793 100%)',
        'radial-v2': 'radial-gradient(circle, #2E073F 0%, #7A1CAC 30%, #AD49E1 60%, #EBD3F8 100%)',
        'radial-v3': 'radial-gradient(circle, #EBD3F8 0%, #AD49E1 40%, #7A1CAC 60%, #2E073F 80%, #A40793 100%)',
      
        
      },
         keyframes: {
       gradient: {
         '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },

                'star-movement-bottom': {
           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
           '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
         },
         'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
           '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
        
         marquee: {
           'from': { transform: 'translateX(0%)' },
           'to': { transform: 'translateX(-50%)' }
         }
      },
    animation: {
       gradient: 'gradient 3s linear infinite',
       'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
       'star-movement-top': 'star-movement-top linear infinite alternate',

       marquee: 'marquee 15s linear infinite'
  },
    translate: {
      '101': '101%',
    },
    },
  },
  plugins: [require("daisyui")],
}

