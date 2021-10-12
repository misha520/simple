import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    root: {
      background: palette.background.paper,
      borderRadius: "10px",
      boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
      padding: "24px 24px 16px 24px",
      maxHeight: "200px",
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
    title: {
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "30px",
      [breakpoints.down("sm")]: {
        fontSize: "24px",
        lineHeight: "36px",
      },
    },
    txtBtn: {
      justifySelf: "flex-end",
      cursor: "pointer",
      fontSize: "14px",
      transition: "0.3s",
      fontWeight: 500,
      color: palette.all.blue,
      "&:hover": {
        opacity: "0.7",
      },
    },
  }),
  { index: 1 }
);
