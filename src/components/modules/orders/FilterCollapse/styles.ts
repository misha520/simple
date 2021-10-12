import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ palette }) => ({
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
    display: "flex",
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
    padding: "15px 0px",
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
    display: "flex",
    flexDirection: "column",
  },
  closingStatus: {
    color: "#C1C1C1",
    fontWeight: 500,
    fontSize: "12px",
    display: "flex",
    "& > svg": {
      width: "20px",
      height: "20px",
    },
  },
  name: {
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "21px",
    color: palette.all.blue,
  },
  accordDetailsCenter: {
    display: "flex",
    justifyContent: "space-between",
  },
  closing: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  action: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  typeCell: {
    display: "flex",
    fontSize: "12px",
    fontWeight: 600,
    alignItems: "center",
  },
  typeIcon: {
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    marginRight: "10px",
    border: "1px solid #9C969E26",
    "& svg": {
      width: "18px",
      height: "18px",
    },
  },
  productName: {
    fontWeight: 500,
    fontSize: "12px",
    color: palette.all.black,
  },
  orderNumber: {
    fontSize: "14px",
    fontWeight: 500,
    color: palette.all.black,
  },
  timeRemaining: {
    fontWeight: 600,
    fontSize: "14px",
  },
}));
