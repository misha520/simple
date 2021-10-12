import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({breakpoints}) => ({
    dropDown: { position: "relative" },
    tabs: {
      boxShadow: "0px 12px 23px rgba(62, 73, 84, 0.04)",
      position: "relative",
    },
    label: {
      padding: "15px 30px 0 30px",
      fontSize: 20,
      color: "#171B1ECC",
      fontWeight: 600,
      boxShadow: "0px 12px 23px rgba(62, 73, 84, 0.04)",
      cursor: "pointer",
    },
    labelWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    underline: {
      height: 4,
      background: "#35B6FE",
      borderRadius: 10,
      marginTop: 15,
    },
    tab: {
      fontSize: 20,
      fontWeight: 600,
      maxWidth: "none",
      height: "71px",
      textTransform: "none",
    },
    menu: {
      position: "absolute",
      width: "100%",
      left: "0",
      background: "#fff",
      zIndex: 2,
      border: "1px solid #c1c1c1",
      borderTop: "0px",
    },
    overlay: {
      width: window.innerWidth,
      height: window.innerHeight,
      position: "fixed",
      top: 0,
      left: 0,
    },
    elipse: {
      color: "#fff",
      marginTop: "5px",
      marginRight: "5px",
      background: "#FFC02B",
      borderRadius: "50%",
      width: "19px",
      height: "19px",
      position: "absolute",
      left: "100px",
      top: "30%",
      paddingLeft: "4px",
      paddingTop: "3px",
      fontSize: "10px",
      fontWeight: 500,
      [breakpoints.down("md")]: {
        top: "24%",
      },
    },
  }),
  { index: 1 }
);
