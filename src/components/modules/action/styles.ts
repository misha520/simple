import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      padding: "25px 50px",
      width: "100%",
      background: "#FCFCFC",
      [breakpoints.down("sm")]: {
        background: "#FCFCFC",
        padding: "25px",
      },
    },
    top: {},
    bottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: "30px",
      [breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
  }),
  { index: 1 }
);
