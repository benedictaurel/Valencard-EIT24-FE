/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        "pink1" : "#FEDEE3",
        "pink2" : "#F4E9E9",
        "krem1" : "#FFF9F4",
        "brown1" : "#68423D",
        "hvrkrem1" : "#ffebdb",
        "shadowbtn" : "#BCACAE",
        "shadowcard" : "#BE9191",
        "bgsuccess" : "#FFD2D2",
        "tobgsuccess" : "#FCF2F2",
        "pinktebel" : "#D11C5C",
        "cardformsuccess" : "#FEE1E1",
        "bgnotfound" : "#F07474",
        "tobgnotfound" : "#F7A1A1",
        "buttoncolor" : "#F6EAE7",
        "form" : "#FDDADA",
      },
      fontFamily: {
        titanone: "Titan One",
        kleeone: "Klee One",
        sarala: "Sarala",
        mada: "Mada",
        fredokaone : "Fredoka",
        poppins : ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#fed1d1,#f4e9e9dd,#f1e8e800)",
        gradient1: "linear-gradient(180deg ,#ffffff,#f9f8f800)",
        gradient2: "linear-gradient(180deg ,#fff8f8,#d6a3a300)",
        gradient3: "linear-gradient(165deg ,#ffffff,#edc7c700)",
        gradient4: "linear-gradient(152deg ,#ffffff,#f4e4e400)",
        gradient5: "linear-gradient(180deg ,#ffffff,#fbbcbc00)",
        gradient6: "linear-gradient(210deg ,#f8fffc,#fdfdfd00)",
        gradient7: "linear-gradient(180deg ,#ffdede,#fffafa00)",
        gradient8: "linear-gradient(180deg ,#fed1d1,#ff9d9ddd,#d57f7f00)",
      },
      boxShadow:{
        'inner': 'inset 0px 5px 4px rgba(0, 0, 0, 0.25)'
      },
      rotate: {
        '178': '178deg'
      },
      width: {
        '1000': '1000px'
      },
      height: {
        '575': '575px'
      },
      scale: {
        '200': '2'
      }
    },
  },
  plugins: [],
}