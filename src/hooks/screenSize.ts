import { Theme, useMediaQuery } from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export const useScreenSizeDown = (key: number | Breakpoint) => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down(key));
};

export const useScreenSizeUp = (key: number | Breakpoint) => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.up(key));
};
