import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    width: "98%",
    minWidth: "320px",
    borderRadius: "12px",
    boxShadow: "0px 10px 49px rgba(0, 0, 0, 0.13)",
    background: "#FFF",
    position: "absolute",
    right: 0,
    top: "75px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1,
    [breakpoints.up(1000)]: {
      minWidth: "500px",
      left: 0,
    },
    [breakpoints.down(1000)]: {
      right: 0,
    },
  },
  coverHeader: {
    padding: "15px",
    borderBottom: "1px solid #9c969e36",
  },
  header: {
    display: "flex",
    width: "100%",
    background: "#F5F7FA",
    borderRadius: "10px",
    padding: "10px",
    [breakpoints.down(730)]: {
      flexDirection: "column",
    },
  },
  avatarImg: {
    width: "40px",
    height: "40px",
  },
  name: {
    fontSize: "14px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  body: {
    display: "grid",
    paddingBottom: "10px",
    "& > span": {
      margin: "5px 25px",
      fontSize: "13px",
    },
  },
  titleBody: {
    fontWeight: 600,
  },
  headerLeft: {
    fontSize: "12px",
    width: "186px",
    [breakpoints.down(730)]: {
      width: "100%",
      marginBottom: "15px",
    },
  },
  headerRight: {
    fontSize: "12px",
    display: "flex",
  },
  headerRightChild: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "5px",
  },
  headerRightTitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  containerHeaderLeft: {
    marginBottom: "22px",
    [breakpoints.down(730)]: {
      marginBottom: "10px",
    },
  },
  textGray: {
    color: "#171b1e6b",
  },
}));
