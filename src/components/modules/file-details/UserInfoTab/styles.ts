import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette }) => ({
    root: {
      background: palette.background.paper,
      borderRadius: "20px",
      boxShadow: "0px 4px 20px rgba(94, 132, 194, 0.06)",
      width: "100%",
      overflow: "hidden",
    },
    tabs: {
      padding: "0 42px",
      boxShadow: "0px 12px 23px rgba(62, 73, 84, 0.04)",
      position: "relative",
    },
    tab: {
      fontSize: 20,
      fontWeight: 600,
      minWidth: "187px",
      height: "91px",
      textTransform: "none",
    },
  }),
  { index: 1 }
);
