import { makeStyles } from "@material-ui/core";
import { ProcessingProps } from ".";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    process: {
      display: "flex",
      flexDirection: "column",

      "& > span": {
        paddingBottom: "14px",
        color: palette.all.black,
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "24px",
        [breakpoints.down("xs")]: {
          fontSize: "12px",
        },
      },
    },
    processingBg: {
      background: "#f0eff0",
      borderRadius: "3px",
      height: "10px",
      width: "135px",
      [breakpoints.down("xs")]: {
        width: "80px",
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
