import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    root: {
      background: palette.background.paper,
      borderRadius: "10px",
      boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
      padding: "24px 24px 16px 24px",
      height: "207px",
      width: "100%",
      overflow: "hidden",
      [breakpoints.up(1920)]: {
        width: "364px",
        marginLeft: "-45px",
      },
    },
    flexWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    status: {
      alignItems: "center",
      color: palette.all.green,
      display: "flex",
      gap: "12px",
      margin: "16px 0 23px 0",
    },
    textWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "0.3rem",
    },
  }),
  { index: 1 }
);
