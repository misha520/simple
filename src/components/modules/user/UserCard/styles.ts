import { makeStyles } from "@material-ui/core";
import {CardItemProps} from "./CardItem";
export const useStyles = makeStyles(({ palette, breakpoints }) => {
  return {
  rootCardItem: {
    width: "calc(25% - 25px)",
    height: "319px",
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
    borderRadius: "14px",
    background: "#fff",
    position: "relative",
    "&:hover": {
      boxShadow: "0px 10px 49px rgba(0, 0, 0, 0.13)",
      cursor: "pointer",
      transition: "0.2s",
    },
    [breakpoints.down(1000)]: {
      width: "calc(33% - 5px)",
    },
    [breakpoints.down(600)]: {
      width: "calc(50% - 5px)",
      height: "260px",
    },
  },
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
  },
  cardImgContainer:{
    background: (props: CardItemProps) => props.data.image.background,
    marginBottom: "20px",
    width: "120px",
    height: "120px",
    display: "flex",
    alignItems: "end",
    borderRadius: "5px",
    position: "relative",
    [breakpoints.down(600)]: {
      width: "100px",
      height: "100px",
    },
  },
  cardImg: {
    width: "100px",
    height: "100px",
    marginLeft: "10px",
    [breakpoints.down(600)]: {
      width: "80px",
      height: "80px",
    },
  },
  borderWhite: {
    width: "110px",
    height: "110px",
    border: "1px solid #fff",
    position: "absolute",
    top: "5px",
    left: "5px",
    borderRadius: "12px",
    [breakpoints.down(600)]: {
      width: "90px",
      height: "90px",
    },
  },
  nameTxt: {
    fontSize: "18px",
    fontWeight: 600,
    paddingBottom: "10px",
    [breakpoints.down(600)]: {
      fontSize: "14px"
    },
  },
  officerTxt: {
    fontSize: "13px",
    fontWeight: 600,
    paddingBottom: "8px",
    color: "rgba(23, 27, 30, 0.5)",
    [breakpoints.down(600)]: {
      fontSize: "12px"
    },
  },
  email: {
    fontSize: "13px",
    fontWeight: 400,
    paddingBottom: "8px",
    color: "rgba(23, 27, 30, 0.5)",
    [breakpoints.down(600)]: {
      fontSize: "12px"
    },
  },
  testBranch: {
    fontSize: "13px",
    fontWeight: 400,
    paddingBottom: "8px",
    color: palette.all.blue,
    [breakpoints.down(600)]: {
      fontSize: "12px"
    },
  },
  moreIcon: {
    transform: "rotate(90deg)",
    position: "absolute",
    right: "5%",
    top: "10px", 
    minWidth: "0px",
    padding: 0,

    "& svg > path": {
      stroke: "#9C969E"
    },
    "&:hover": {
      background: "none"
    },
    [breakpoints.down(600)]: {
      right: "2%",
      "& svg": {
        width: "20px",
        height: "20px"
      }
    },
  },
  ".MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded": {
  left: "60px"
  },
  menuItem: {
    minHeight: "0px",
  }
}});
