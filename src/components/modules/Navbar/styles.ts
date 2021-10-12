import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette, zIndex }) => ({
    appbar: {
      // background: palette.background.paper,
      background: "F8F8F8",
      border: `1px solid #F8F8F8`,
      zIndex: zIndex.drawer + 1,
    },
    addNewBtn: {
      maxWidth: "150px",
      height: "50px",
      margin: "0 25px",
      fontSize: "18px",
      [breakpoints.up("xl")]: {
        marginLeft: "40px",
        height: "60px",
        maxWidth: "168px",
      },
    },
    badge: {
      color: "#FFF",
      top: "0px",
      right: "4px",
      borderRadius: "50%",
      border: `3px solid ${palette.common.white}`,
      height: "32px",
      width: "32px",
      fontSize: "14px",
      fontWeight: 700,
      [breakpoints.up("xl")]: {
        marginLeft: "35px",
      },
    },
    coverLogo: {
      width: "450px",
      height: "70px",
      [breakpoints.down(1600)]: {
        display: "none",
      },
    },
    logo: {
      display: "none",
      [breakpoints.up("xl")]: {
        height: "69px",
        width: "185px",
        display: "block",
        marginLeft: "60px",
      },
    },
    title: {
      fontWeight: 600,
      fontSize: "30px",
      lineHeight: "45px",
    },
    toolbar: {
      minHeight: "120px",
      [breakpoints.down("xl")]: {
        minHeight: "90px",
      },
      padding: 0,
    },
    navItemWrapper: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "0 50px",
      [breakpoints.up("xl")]: {
        margin: "30px 50px 30px 50px",
        justifyContent: "normal",
      },
      [breakpoints.down("sm")]: {
        margin: "0 25px",
      },
    },
    profilePopover: {
      minWidth: "304px",
      borderRadius: "12px",
      padding: "24px 25px",
      marginTop: "10px",
    },
    overlay: {
      width: window.innerWidth,
      height: window.innerHeight,
      position: "fixed",
      top: "0",
      left: "0",
    },
    homeImg: {
      width: "60px",
      height: "60px",
    },
  }),
  { index: 1 }
);
