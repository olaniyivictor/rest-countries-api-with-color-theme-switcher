/* @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily:{
          custom:['Nunito Sans', 'sans-serif'
        ],
        },
        colors:{
        DarkBlue: 'hsl(209, 23%, 22%)',
        VeryDarkBlue:' hsl(207, 26%, 17%)',
        VeryDarkBlues:' hsl(200, 15%, 8%)',
        DarkGray: 'hsl(0, 0%, 52%)',
        VeryLightGray:' hsl(0, 0%, 98%)',
        White: 'hsl(0, 0%, 100%)',
      
        },
        boxShadow:{
          'custom-hover': ' 0 0 2.5rem 1rem  hsl(150, 100%, 66%)',
        },
        fontWeight: {
            'light': 300,     // Custom light font weight
            'semi': 600,      // Custom semi-bold font weight
            'extrabold': 800, // Custom extra-bold font weight
          },
          screens: {
            'custom-md': '832px', // Define your custom breakpoint
            'custom-d':'890px',
            'custom-m':'940px',
            'custom-c':'980px',
            'custom-v':'1000px',
            'custom-g':'1047px',
            'custom-a':'1080px',
            'custom-h':'1100px',
            'custom-i':'1111px',
            'custom-j':'1120px',
            'custom-k':'1140px',
            'custom-l':'1160px',
            'custom-n':'1174px',
            'custom-o':'1190px',
            'custom-p':'1215px',
            'custom-r':'1230px',
            'custom-s':'1320px',
            'custom-t':'1340px',
            'custom-z':'1370px',
          },
    
      },
    },
    plugins: [],
  }