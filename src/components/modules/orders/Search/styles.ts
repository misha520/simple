import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    rootSearchBox: {
      width: "50%",
      minWidth: "620px",
      height: "60px",
      display: "flex",
      border: `1px solid rgba(156, 150, 158, 0.15)`,
      borderRadius: "14px",
      [breakpoints.down(1250)]: {
        width: "40%",
        minWidth: "370px",
      },
      [breakpoints.down(1000)]: {
        width: "100%",
        minWidth: "0px",
        marginBottom: "20px",
      },
    },
    rootCalendar: {
      display: "flex",
      [breakpoints.down(1000)]: {
        width: "100%",
        justifyContent: "space-between",
      },
    },
    box: {
      borderLeft: `1px solid rgba(156, 150, 158, 0.15)`,
      width: "100%",
      gap: "20px",
      padding: "12px 18px",
      position: "relative",
    },
    iconButton: {
      position: "absolute",
      right: "20px",
      "& > span > svg > path": {
        fill: palette.all.gray,
      },
    },
    coverCalender: {
      position: "relative",
      [breakpoints.down(1000)]: {
        width: "48%",
        justifyContent: "space-around",
      },
    },
    select: {
      padding: "18px 41px 18px 21px !important",
      background: "#none ",
      color: palette.all.gray,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "21px",

      "& ~ svg": {
        color: palette.all.gray,
      },

      "& ~ fieldset": {
        border: "none",
        borderRadius: "14px",
      },
    },
    status: {
      border: `1px solid rgba(156, 150, 158, 0.15)`,
      marginLeft: "0px",
    },
    itemDropdown: {
      fontSize: "14px",
      color: palette.all.gray,
    },
    itemSelected: {
      color: `${palette.all.black} !important`,
      background: "#fff !important",
    },
  
    coverStatusButton: {
      [breakpoints.down(1000)]: {
        width: "48%",
      },
    },
  
    buttonCalendar: {
      marginRight: "15px",
      padding: "16px 15px",
      [breakpoints.down(1010)]: {
        width: "100%",
        justifyContent: "space-around",
      },
    },
    formControl: {
      minWidth: "171px",
      [breakpoints.down("sm")]: {
        minWidth: 0,
      },
    },
    overlay: {
      width: window.innerWidth,
      height: window.innerHeight,
      position: "fixed",
      top: "0",
      left: "0",
    },
    typeIcon: {
      borderRadius: "6px",
      marginRight: "10px",
      float: "left",
      "& svg": {
        width: "20px",
        height: "20px",
        display: "flex",
        alignItems: "end",
      },
    },
  }),
  { index: 1 }
);
