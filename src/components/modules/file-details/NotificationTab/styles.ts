import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    root: {
      background: palette.background.paper,
      borderRadius: "10px",
      boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
      width: "100%",
      [breakpoints.up(1920)]: {
        width: "748px",
        marginLeft: "-25px",
      },
    },
    iconBtn: {
      position: "absolute",
      right: 0,
      top: "22px",
    },
    tabs: {
      padding: "0 24px",
      boxShadow: "0px 6px 15px rgba(62, 73, 84, 0.04)",
      position: "relative",
    },
    tab: {
      color: palette.text.primary,
      fontSize: 20,
      fontWeight: 600,
      minWidth: "132px",
      height: "68px",
      opacity: 1,
      textTransform: "none",
    },
    flexWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    elipse: {
      color: "#fff",
      marginTop: "5px",
      background: "#FFC02B",
      borderRadius: "50%",
      width: "19px",
      height: "19px",
      position: "absolute",
      left: "100px",
      top: "30%",
      paddingTop: "1px",
      fontSize: "10px",
      fontWeight: 500,
    },
  }),
  { index: 1 }
);
