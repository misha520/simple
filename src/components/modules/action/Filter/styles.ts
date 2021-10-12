import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints }) => ({
    rootCalendar: {
      display: "flex",
      width: "100%",
      [breakpoints.down(1000)]: {
        width: "100%",
        display: "block",
      },
    },
    coverCalender: {
      position: "relative",
      width: "calc(20% - 20px)",
      minWidth: "175px",
      margin: "0 20px 0 0",
      "& span > svg > path": {
        fill: "#9C969E",
      },
      [breakpoints.down(1000)]: {
        width: "calc(100% - 20px)",
        margin: "0 10px 10px 10px",
      },
    },

    buttonCalendar: {
      padding: "16px 15px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    overlay: {
      width: window.innerWidth,
      height: window.innerHeight,
      position: "fixed",
      top: "0",
      left: "0",
    },
  }),
  { index: 1 }
);
