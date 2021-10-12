import { makeStyles } from "@material-ui/core";
import { ProcessingProps } from ".";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    process: {
      display: "flex",
      flexDirection: "column",
      [breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    coverText: {
      display: "flex",
      justifyContent: "space-between",
    },
    text: {
      paddingBottom: "14px",
      color: palette.all.gray,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      [breakpoints.down("md")]: {
        fontSize: "12px",
      },
      [breakpoints.down("sm")]: {
        fontSize: "12px",
        fontWeigh: 500,
      },
    },
    processingBg: {
      background: "#f0eff0",
      borderRadius: "3px",
      height: "10px",
      width: "198px",
      [breakpoints.down(1400)]: {
        width: "100%",
      },
      [breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    processActive: {
      borderRadius: "3px",
      height: "10px",
      background: (props: ProcessingProps) => props.color,
      width: (props: ProcessingProps) => props.percent,
    },
  }),
  { index: 1 }
);
