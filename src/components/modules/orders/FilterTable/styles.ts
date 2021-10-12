import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    paper: {
      marginTop: "40px",
      background: "#FFFFFF",
      padding: "0 0 20px 0",
      boxShadow: "0px 7px 15px rgb(38 105 93 / 4%)",
      borderRadius: "20px",
      [breakpoints.down("xs")]: {
        padding: "20px 16px",
        marginTop: "24px",
      },
    },
    processor: {
      display: "flex",

      "& > img": {
        width: "46px",
        height: "46px",
        background: "rgba(155, 220, 155, 0.17)",
        borderRadius: "5px",
      },
    },
    cellHeaderFirst: {
      padding: "20px 0 20px 25px",
      borderBottom: "2px solid #9c969e40",
      borderRadius: "6px 0 0 6px",

      "& > span": {
        padding: 0,
      },
      [breakpoints.down("xs")]: {
        fontSize: "12px",
        paddingLeft: "15px",
      },
    },
    cellHeader: {
      borderBottom: "2px solid #9c969e40",
      padding: "0 10px",
      color: "#171B1E",
      [breakpoints.down("md")]: {
        fontSize: "12px",
      },
      [breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
    tableCellFirst: {
      padding: "20px 0 20px 25px",
      textAlign: "left",

      "& > span": {
        padding: 0,
      },
    },
    tableCell: {
      padding: "20px 10px",
    },
    lastActive: {
      display: "flex",
      flexDirection: "column",
    },
    date: {
      color: palette.all.blue,
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "24px",
      [breakpoints.down("md")]: {
        fontSize: "11px",
      },
    },
    closingStatus: {
      paddingTop: "5px",
      color: "rgba(23, 27, 30, 0.5)",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "21px",
      [breakpoints.down("md")]: {
        fontSize: "10px",
      },
    },
    borrowerName: {
      fontSize: "14px",
      fontWeight: 600,

      [breakpoints.down("md")]: {
        fontSize: "11px",
      },
    },
    borrowerCompany: {
      fontSize: "13px",
      color: "rgba(23, 27, 30, 0.5)",
      fontWeight: 400,
      [breakpoints.down("md")]: {
        fontSize: "10px",
      },
    },
    numberCell: {
      [breakpoints.down("md")]: {
        fontSize: "10px",
      },
    },
    typeCell: {
      display: "flex",
      fontSize: "14px",
      fontWeight: 600,
      alignItems: "center",
      [breakpoints.down("md")]: {
        fontSize: "10px",
      },
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
      [breakpoints.down("md")]: {
        "& svg": {
          width: "15px",
          height: "15px",
        },
      },
    },
    timeRemaining: {
      color: palette.all.blue,
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "24px",
      paddingLeft: "20px",
      [breakpoints.down("md")]: {
        fontSize: "11px",
      },
    },
  }),
  { index: 1 }
);
