// import "@material-ui/core/styles/createPalette";
import { AllColors } from "./theme";

declare module "@material-ui/core/styles/createPalette" {
  interface PaletteOptions {
    all: AllColors;
  }

  interface Palette {
    all: AllColors;
  }
}
