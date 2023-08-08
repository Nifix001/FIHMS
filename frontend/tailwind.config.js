/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/Welcome.jsx",
    "./src/pages/Login.jsx",
    ".src/layout/Layout.jsx",
    "./src/components/BasicCard.jsx",
    "./src/components/Nav.jsx",
    "./src/components/Sidebar.jsx",
    "./src/Subpages/Patients.jsx",
    "./src/Subpages/Dashboard.jsx",
    "./src/components/SummaryCard.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background' : "url('./assets/unsplash_SZJoYW4eLHE.png')",
        'dashIcon' : "url('./assets/sidebar/element-1.svg')"
      },
      colors: {
        'primary': "#7F00AC",
        'secondary': "#601384",
        'secondary2': '#FCF2FC',
        'secondary3': '#796EFC',
        'secondary4': '#27AE60',
        'secondary5': '#26A6FA',
        'tertiary': {
          '1': '#9585FE',
          '2': '#78C994',
          '3': '#1899EE'
        },
        'gray':{
          '750': "#212121"
      }
      },
      width: {
        '21.5': '5.37rem',
        '87.25': '21.81rem',
        '90' : '22.5rem',
        '104': '26rem',
        '151': '37.75rem',
        '182': '45.5rem',
        '280': '70rem',
        '281': '70.25rem',
        '282': '70.5rem',
      },
      height: {
        '13' : '3.3rem',
        '21.5': '5.37rem',
        '46.5': '11.65rem',
        '124': '31rem',
        '136' : '34rem',
        '140': '35rem',
        '141': '35.25rem',
        '142' : '35.5rem',
        '142.5': '35.625rem',
        '143': '35.75rem',
        '148': '37rem',
        '160.5': '40.13rem',
        '178.25': '44.56rem',
        '224' : '56rem',
      },
      fontFamily:{
         welcome: ['Work Sans'],
         span: ['Mukta'],
      }
    },
  },
  plugins: [],
}
