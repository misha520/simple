import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    root: {
      background: palette.background.paper,
      borderRadius: "10px",
      boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
      padding: "24px",
      minHeight: "430px",
      width: "100%",
      overflow: "hidden",
      [breakpoints.up(1920)]: {
        height: "440px",
        width: "303px",
      },
      [breakpoints.down("sm")]: {
        paddingBottom: "16px",
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

export const useBorrowerStyles = makeStyles(
  ({ palette }) => ({
    root: {
      background: palette.background.paper,
      borderRadius: "10px",
      boxShadow: "5px 10px 30px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      maxHeight: "144px",
      width: "100%",
      overflow: "hidden",
    },
    detailsWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    },
    textWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "0.3rem",
    },
  }),
  { index: 1 }
);
