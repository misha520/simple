import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    width: "100%",
  },
  container: {
    margin: "20px 0",
  },
  accordion: {
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
  },
  heading: {
    fontSize: "13px",
    fontWeight: 500,
  },
  lastActive: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
  coverHeader: {
    height: "124px",
    position: "relative",
    margin: "0 16px",

    "& > div:first-child": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      borderBottom: "1px solid #F3F6F9",
      padding: "10px 0",
      margin: 0,
      "& > p >span": {
        padding: "9px 9px 9px 0",
      },
    },
    "& > div:last-child": {
      position: "absolute",
      top: "20px",
      right: "15px",
      boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
      background: "#F3F6F9",
      borderRadius: "5px",
    },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "100%",
    width: "100%",
    padding: "13px 0",
  },
  coverAccordDetails: {
    display: "block",
  },
  processor: {
    display: "flex",

    "& > img": {
      width: "40px",
      height: "40px",
      background: "rgba(155, 220, 155, 0.17)",
      borderRadius: "5px",
    },
  },
  processorText: {
    paddingLeft: "13px",
    display: "flex",
    flexDirection: "column",
  },
  closingStatus: {
    color: "rgba(23, 27, 30, 0.5)",
    fontWeight: 500,
    fontSize: "12px",
    display: "flex",
    "& > svg": {
      width: "20px",
      height: "20px",
    },
  },
  name: {
    color: palette.all.black,
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    [breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  date: {
    color: palette.all.blue,
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "24px",
  },
  accordDetailsCenter: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 0",
  },
  closing: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  action: {
    display: "flex",
    justifyContent: "space-between",
  },
  actionTxt: {
    fontSize: "12px",
    fontWeight: 500,
    color: palette.all.blue,
  },
  actionDateStart: {
    fontWeight: 400,
    fontSize: "10px",
    color: "#C8C8C8",
  },
  actionIcon: {
    background: "#EEEEEE",
    width: "24px",
    height: "24px",
    borderRadius: "5px",
    position: "relative",
    marginRight: "10px",
    "& > svg": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
  },
}));
