const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}', "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: 
        ['Exo_400Regular', 'sans-serif'],
        'sans-bold': ['Exo_700Bold', 'sans-serif'],
        'sans-medium': ['Exo_500Medium', 'sans-serif'],
        'sans-semibold': ['Exo_600SemiBold', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#ffffff',  
          dark: '#000000',   
        },
        secondary: {
          light: '#9ca3af',  
          dark: '#4b5563',   
        },
        background: {
          light: '#FBFBFB',  
          dark: '#0A0A0A',   
        },
        text: {
          light: '#080808',  
          dark: '#FBFBFB',   
        },
        subtitle: {
          light: '#737373',  
          dark: '#ffffff',   
        },
        info: {
          light: '#0B8DCD',  
          dark: '#ffffff',   
        },
        card: {
          light: '#fff',  
          dark: '#0A0A0A',   
        },
        border: {
          light: '#8C8C8C',  
          dark: '#374151',  
        },
        divid: {
          light: '#DDDCDB',  
          dark: '#DDDCDB',   
        },
        delete: {
          light: '#7F1D1D',  
          dark: '#E63535',   
        },
        deleteTrash: {
          light: '#E63535',  
          dark: '#E63535',   
        },
        cardInput: {
          light: '#F6F6F6',  
          dark: '#374151',   
        },
        chat: {
          light: '#D4D4D4',  
          dark: '#374151',   
        },
        textToastSuccss: {
          light: '#166534',  
          dark: '#F6F6F6',   
        },
        textToastError: {
          light: '#E63535',  
          dark: '#F6F6F6',   
        }
      },
      fontSize: {
        '4xl': '36px',    
        '2xl': '24px',    
        'xl': '20px',     
        'lg': '18px',     
        'base': '16px',   
        'sm': '14px',     
        'xs': '10px',     
      },
      lineHeight: {
        '4xl': '40px',   
        'xl': '24px',    
        'lg': '20px',    
        'base': '18px',  
        'sm': '16px',    
        'xs': '12px',    
      },
      
      
    },
  },
  plugins: [],
};
 