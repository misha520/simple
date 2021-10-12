import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
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
      background: "#f7f7f7",
      border: "none",
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
      background: "#f7f7f7",
      border: "none",
      [breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
    cellHeaderProcessing: {
      [breakpoints.down("md")]: {
        width: "100px",
        padding: "20px 0 !important",
      },
      [breakpoints.down("xs")]: {
        paddingLeft: "5px !important",
      },
    },
    cellHeaderLast: {
      padding: "20px 25px",
      background: "#f7f7f7",
      border: "none",
      borderRadius: "0 6px 6px 0",
      [breakpoints.down("md")]: {
        width: "100px",
      },
      [breakpoints.down("sm")]: {
        width: "50px",
        padding: "20px 0 !important",
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
    tableCellLast: {
      padding: "20px 25px",
      fontSize: "28px",
      [breakpoints.down("md")]: {
        width: "100px",
      },
      [breakpoints.down("sm")]: {
        width: "50px",
        padding: "20px 0 !important",
      },
    },
    processorText: {
      paddingLeft: "13px",
      display: "flex",
      flexDirection: "column",
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
    position: {
      paddingTop: "2px",
      color: "rgba(23, 27, 30, 0.5)",
      fontWeight: "normal",
      fontSize: "13px",
      lineHeight: "19px",
    },
    files: {
      color: palette.all.purple,
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      [breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
    buttonMore: {
      [breakpoints.down("xs")]: {
        minWidth: "0px !important",
      },
    },
    averageDelivery: {
      color: palette.all.black,
      fontSize: "16px",
      lineHeight: "24px",
    },
    lastActive: {
      display: "flex",
      flexDirection: "column",
    },
    date: {
      color: palette.all.purple,
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
    },
    day: {
      paddingTop: "5px",
      color: "rgba(23, 27, 30, 0.5)",
      opacity: 0.5,
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "21px",
    },
    rateText: {
      paddingTop: "11px",
      color: "rgba(23, 27, 30, 0.5)",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "21px",
      [breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
    paper: {
      boxShadow: "none",
    },
    star: {
      "& > svg": {
        marginRight: "5px",
      },
    },
    itemSelected: {
      color: `${palette.all.black} !important`,
      background: "#fff !important",
    },
    itemDropdown: {
      fontSize: "14px",
      color: palette.all.gray,
    },
  }),
  { index: 1 }
);
