/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#f4f4f4",
          "300": "#f1f1f1",
          "400": "#efefef",
          "500": "#ededed",
          "600": "#eaeae8",
        },
        gray: {
          "100": "#868a89",
          "200": "#272522",
          "300": "#1d1d20",
          "400": "#0c0e0f",
          "500": "#00100b",
          "600": "#120403",
          "700": "rgba(255, 255, 255, 0.4)",
          "800": "rgba(255, 255, 255, 0.1)",
          "900": "rgba(0, 16, 11, 0.05)",
          "1000": "rgba(0, 16, 11, 0.06)",
          "1005": "rgba(0, 16, 11, 0.1)",
          "1100": "rgba(255, 255, 255, 0.8)",
          "bc": "rgba(238, 238, 238, 1)",
        },
        dimgray: {
          "100": "#636866",
          "light": "rgba(66, 84, 102, 0.05)",
          "200": "#5b5a55",
          "300": "#505553",
        },
        mediumseagreen: "#00bc74",
        mediumseagreenlight: "#e6fff5",
        cadetblue: "#74c3c7",
        floralwhite: "#fbfaf2",
        darkslategray: {
          "100": "#004a35",
          "200": "#004833",
          "300": "#004430",
          "400": "#003b29",
          "500": "#003022",
          "600": "#002c1e",
          "700": "rgba(66, 84, 102, 0.05)",
        },
        lightgray: "#cdd2d8",
        aquamarine: "#31f2cc",
        yellow: "#ddff33",
        deepskyblue: "#33bbff",
        slategray: "#687887",
        seagreen: "#005f39",
        lightgreen: "rgba(233, 246, 236, 1)",
        black: "#000",
        lightsteelblue: "rgba(186, 192, 212, 0.6)",
      },
      spacing: {},
      fontFamily: {
        aeonik: "Aeonik",
        inter: "Inter",
        "segoe-ui": "'Segoe UI'",
        outfit: 'Outfit'
      },
      borderRadius: {
        "8xs-1": "4.1px",
        "81xl": "100px",
        "9980xl": "9999px",
        xl: "20px",
        "11xl": "30px",
        "13xl": "32px",
        mini: "15px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "23xl": "42px",
      xs: "12px",
      smi: "13px",
      mini: "15px",
      "38xl": "57px",
      xl: "20px",
      "sm-7": "13.7px",
      "sm-9": "13.9px",
      "3xl": "22px",
      "16xl": "35px",
      "41xl": "60px",
      inherit: "inherit",
    },
    screens: {
      'xs': '340px',
      'sm': '640px',


      'md': '968px',


      'lg': '1024px',


      'xl': '1280px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },

  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light"
  }
};
