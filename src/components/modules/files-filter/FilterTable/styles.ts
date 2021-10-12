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
    cellHeaderProcessing: {
      [breakpoints.down("md")]: {
        width: "100px",
        padding: "20px 0 !important",
      },
      [breakpoints.down("xs")]: {
        paddingLeft: "5px !important",
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
      padding: "20px 25px 20px 0",
      fontSize: "28px",
      minWidth: "171px",
      [breakpoints.up(1400)]: {
        width: "193px",
      },
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
      [breakpoints.down("md")]: {
        fontSize: "11px",
      },
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
    ownerImg: {
      [breakpoints.down(1200)]: {
        display: "none",
      },
    },
    processing: {
      width: "198px",
      [breakpoints.up(980)]: {
        paddingRight: "25px",
      },
    },
    idCell: {
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
  }),
  { index: 1 }
);
