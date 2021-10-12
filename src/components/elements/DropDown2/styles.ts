import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  () => ({
    dropDown: {
      position: "relative",
      padding: "10px 20px",
      background: "#fafafa",
      borderTopRightRadius: "20px",
      borderTopLeftRadius: "20px",
    },
    tabs: {
      boxShadow: "0px 12px 23px rgba(62, 73, 84, 0.04)",
      position: "relative",
    },
    label: {
      padding: "15px 30px",
      fontSize: 20,
      color: "#171B1ECC",
      fontWeight: 600,
      boxShadow: "0px 12px 23px rgba(62, 73, 84, 0.04)",
      background: "#fff",
      borderRadius: "8px",
      textTransform: "uppercase",
      cursor: "pointer",
    },
    labelWrapper: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      position: "relative",
    },
    menu: {
      border: "1px solid #c1c1c1",
      width: "calc(100% - 40px)",
      borderRadius: "8px",
      position: "absolute",
      left: "20px",
      background: "#fff",
      textAlign: "center",
      zIndex: 1,
    },
    arrowIcon: {
      position: "absolute",
      height: "24px",
      left: "100%",
      top: "50%",
      transform: "translateY(-50%)",
    },
    overlay: {
      width: window.innerWidth,
      height: window.innerHeight,
      position: "fixed",
      top: 0,
      left: 0,
    },
  }),
  { index: 1 }
);
