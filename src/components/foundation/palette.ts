import { PaletteOptions } from "@material-ui/core/styles/createPalette";

export const allColors = {
  // Primary Color
  blue: "#35B6FE",
  pest: "#29C9C1",
  red: "#F62064",
  yellow: "#FFC02B",

  // Secondary Color
  black: "#171B1E",
  green: "#2FBD57",
  gray: "#9C969E",
  purple: "#8950FC",

  // Tertiary Color
  lemon: "#CCDB6F",
  lightBlue: "#6EB0ED",
  lightGreen: "#7DC391",
  lightYellow: "#F3BB65",
  orange: "#FFA165",

  // Others
  border: "rgba(23, 27, 30, 0.5)",
  defaultBackground: "#FCFEFF",
  white: "#FFFFFF",
};

export const palette: PaletteOptions = {
  all: allColors,
  action: {
    active: `${allColors.black}80`,
  },

  background: {
    default: allColors.defaultBackground,
    paper: allColors.white,
  },
  divider: allColors.border,
  error: {
    main: allColors.red,
  },
  info: {
    main: allColors.gray,
  },
  primary: {
    main: allColors.blue,
    light: allColors.lightBlue,
    contrastText: allColors.white,
  },
  success: {
    main: allColors.green,
  },
  text: {
    primary: allColors.black,
    secondary: `${allColors.black}80`,
  },
  warning: {
    main: allColors.yellow,
  },
};
