module.exports = {
    mode: "jit",
    content: [
      "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", 
      "./src/**/*.{js,ts,jsx,tsx,html,mdx}"
    ],
    darkMode: "class",
    theme: {
      screens: { 
        md: { max: "1050px" }, 
        sm: { max: "550px" } 
      },
      extend: {
        colors: {
          gray: {
            50: "#fff5f8",
            100: "#f6f6f6",
            200: "#ededed",
            300: "#e0e0e0",
            400: "#b8b8b8",
            600: "#717171",
            800: "#663259",
            "200_01": "#eaeaea",
            "900_04": "#051036",
            "100_02": "#f1fff2",
            "100_05": "#f3f5f6",
            "100_04": "#f5f6fa",
            "900_01": "#131313",
            "300_01": "#ebebe6",
            "500_01": "#9b9b9b",
            "900_06": "#123329",
            "900_99_01": "#3f260199",
            "900_cc": "#131313cc",
            "900_99": "#20222499",
            "100_06": "#f5f5f5",
            "300_7f": "#e0e0e07f",
            "50_07": "#fafafa",
            "900_05": "#23272e",
            "300_02": "#dbdade",
            "50_04": "#f1faff",
            "200_11": "#eaeaea11",
            "50_05": "#fbfcfc",
            "50_01": "#f9f5ff",
            "100_01": "#f2f3f6",
            "100_03": "#eff8ff",
            "50_06": "#fdf1f9",
            "50_02": "#f8f8fb",
          },
          blue_gray: {
            50: "#eaecf0",
            100: "#d7dbde",
            500: "#667084",
            600: "#626974",
            700: "#4f547b",
            800: "#344053",
            900: "#112137",
            "900_02": "#041e42",
            "900_01": "#0b1e40",
            "900_66": "#041e4266",
            "600_01": "#5e6773",
            "900_99": "#041e4299",
            "100_03": "#d4d4d4",
            "900_7f": "#041e427f",
            "900_b2": "#041e42b2",
            "900_e5": "#041e42e5",
            "900_f2": "#041e42f2",
            "600_b2": "#626974b2",
            "100_01": "#cfd4dc",
            "700_01": "#353e72",
          },
          green: {
            50: "#dcf2dc",
            400: "#60c260",
            A700_02: "#19b269",
            A700_11: "#19b26911",
            "400_01": "#63b582",
            "50_01": "#dcf2dd",
            A700_19: "#19b26919",
            A700_e5: "#19b269e5",
            A700_21: "#19b26921",
            A700_cc: "#19b269cc",
            A700_28_01: "#19b26928",
            A700: "#28c76f",
            A700_28: "#28c76f28",
          },
          white: { 
            A700: "#ffffff", 
            A700_01: "#ffffff" 
          },
          deep_purple: { 
            400: "#7e56d8", 
            500: "#6840c6", 
            800: "#443196", 
            A200: "#8950fc" 
          },
          orange: { 
            50: "#fff4de", 
            300: "#f5c34b" 
          },
          pink: { 
            400: "#f1416c", 
            500: "#ff3365", 
            A700: "#c01573" 
          },
          blue: {
            50: "#eef3ff",
            400: "#3699ff",
            600: "#2c99db",
            800: "#175cd3",
            A700: "#0053f6",
            "700_01": "#1967d2",
            A200: "#5a8cff",
            "400_28": "#499cd828",
          },
          light_green: { 
            50: "#ebfdf2", 
            300: "#b2e67b", 
            "900_99": "#4f3b0699" 
          },
          deep_orange: {
            100: "#e6d4c0",
            300: "#fd9a56",
            500: "#ef6327",
            900: "#c3320a",
            "300_33": "#fd9a5633",
            "400_7a": "#ff87437a",
          },
          red: {
            50: "#fff5ed",
            400: "#e84f4f",
            700: "#d93025",
            900: "#632218",
            A200: "#f64e60",
            A700_01: "#d91212",
            "600_28": "#d1424228",
            "50_01": "#fef2f1",
          },
          teal: { 
            A700: "#00b69b", 
            A700_33: "#00b69b33", 
            "800_01": "#007c42", 
            "800_02": "#027947" 
          },
          purple: { 
            700: "#7c06a6", 
            A200: "#d456fd", 
            A200_33: "#d456fd33" 
          },
          indigo: { 
            50: "#e9e7fd", 
            500: "#3537cc", 
            "50_01": "#e5eaee"
          },
          cyan: { 
            400: "#1bc5bd" 
          },
          amber: { 
            A400: "#ffc600", 
            A400_28: "#ffc60028", 
            A700: "#ffa800" 
          },
          light_blue: { 
            500: "#00a3ff" 
          },
          black: { 
            600: "#656d76", 
            A700_01: "#000000" 
          },
        },
        boxShadow: {
          xs: "0px 10px 50px 0px #041e420c",
          sm: "0px 5px 20px 0px #f5c34b26",
          md: "0px 10px 20px 0px #041e420c",
          lg: "0px 4px 4px 0px #0000003f",
          x1: "0px 10px 35px 0px #11213719",
          "2x1": "0px 2px 2px 0px #11213719",
          "3x1": "0px 1px 4px 0px #14034211",
          "4x1": "0px 10px 50px 0px #041e4219",
          "5x1": "0px 1px 2px 0px #101e7333",
          "6x1": "0px 4px 16px 0px #0000000a",
          "7x1": "0px 0px 13px 5px #00000029",
        },
        fontFamily: {
          bevietnampro: "Be Vietnam Pro",
          jost: "Jost",
          inter: "Inter",
          manrope: "Manrope",
          bevietnamprolight: "Be Vietnam Pro Light",
          bevietnampromedium: "Be Vietnam Pro Medium",
          bevietnamprosemibold: "Be Vietnam Pro SemiBold",
          nunitosans: "Nunito Sans",
          lato: "Lato",   
          publicsans: "Public Sans",
          opensans: "Open Sans",
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };
  