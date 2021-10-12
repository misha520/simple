import { createTheme } from "@material-ui/core/styles";

import { breakpoints } from "./breakpoints";
import { palette } from "./palette";
import { props } from "./props";
import { typography } from "./typography";

export const theme = createTheme({
  breakpoints,
  palette,
  props,
  typography,
  shape: {
    borderRadius: 14,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
      outlined: {
        color: palette.all.gray,
        border: `1px solid ${palette.all.gray}26`,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: `${palette.all.gray}4D`,
      },
      light: {
        backgroundColor: `${palette.all.gray}26`,
      },
    },
    MuiIconButton: {
      root: {
        padding: 0,
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: "32px",
      },
    },
  },
});
