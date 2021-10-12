import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints }) => ({
    dashboardContainer: {
      padding: "40px 40px 80px 50px",
      width: "100%",
      background: "#fcfcfc",
      overflow: "hidden",
      [breakpoints.down("xs")]: {
        padding: "30px 25px 40px 25px",
      },
    },
    process: {
      [breakpoints.down("xs")]: {
        padding: "16px 4px 4px 16px !important",
      },
    },
    processing: {
      [breakpoints.down("xs")]: {
        padding: "16px 16px 4px 4px !important",
      },
    },
    needed: {
      [breakpoints.down("xs")]: {
        padding: "4px 4px 16px 16px !important",
      },
    },
    finish: {
      [breakpoints.down("xs")]: {
        padding: "4px 16px 16px 4px !important",
      },
    },
  }),
  { index: 1 }
);
