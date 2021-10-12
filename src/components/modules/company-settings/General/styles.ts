import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ palette, breakpoints }) => ({
  paper: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
    borderRadius: "20px",
    width: "calc(75% - 25px)",
    marginLeft: "25px",
    fontFamily: "Poppins",
    display: "flex",
    flexDirection: "column",
    gap: "33px",
    [breakpoints.down(1300)]: {
      gap: 0,
    },
    [breakpoints.down(900)]: {
      width: "100%",
      marginLeft: 0,
      borderRadius: "0 0 20px 20px",
    },
  },
  title: { fontWeight: 600, fontSize: "20px" },
  subTitle: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#171B1E",
    marginBottom: "13px",
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "32px 50px",
    borderBottom: "1px solid #EEEEEE",
  },
  discardBtn: {
    color: "#171B1E80",
    height: "56px",
    width: "176px",
    borderRadius: "14px",
    fontSize: "14px",
    fontWeight: 600,
    border: "none",
    [breakpoints.down(900)]: {
      width: "100%",
    },
  },
  saveBtn: {
    color: "#FFF",
    background: palette.all.blue,
    height: "56px",
    width: "176px",
    borderRadius: "14px",
    fontSize: "14px",
    fontWeight: 600,
    [breakpoints.down(900)]: {
      width: "100%",
    },
  },
  textArea: {
    width: "100%",
    borderRadius: "14px",
    padding: "12px 23px",
    fontSize: "16px",
    border: "1px solid #9C969E80",
    fontFamily: "Poppins",
    outline: "none",
    color: "rgba(23, 27, 30, 0.5)",
  },
  formWrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0 50px 30px 50px",
    gap: "32px",
    "& > div": {
      width: "calc(50% - 16px)",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      gap: "32px",
      [breakpoints.down(1300)]: {
        gap: "20px",
      },
      [breakpoints.down(900)]: {
        width: "100%",
      },
    },
    [breakpoints.down(1300)]: {
      padding: "20px 50px",
    },

    [breakpoints.down(900)]: {
      flexDirection: "column",
      padding: "20px 30px",
      "& > div": { width: "100%" },
    },
  },
  dropDown: {
    position: "relative",
    padding: "16px 23px",
    fontSize: "16px",
    fontWeight: 400,
    borderRadius: "12px",
    border: "1px solid #D7D7D7",
    cursor: "pointer",
    height: "60px",
    color: "rgba(23, 27, 30, 0.5)",
  },
  txtField: {
    height: "60px",
    width: "100%",
    fontSize: "16px",
    fontWeight: 400,
    borderRadius: "12px",

    "& input": {
      color: "rgba(23, 27, 30, 0.5)",
    },
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
  dateField: {
    height: "58px",
    width: "100%",
    fontSize: "16px",
    fontWeight: 400,
    borderRadius: "12px",
    border: "1px solid #D7D7D7",
    transition: "0.1s",
    "& button": {
      background: "#9c969e47",
      width: "48px",
      height: "48px",
      borderRadius: "12px",
    },
    "& input": {
      color: "rgba(23, 27, 30, 0.5)",
    },
    "&:hover": { borderColor: palette.all.black },
    "&:active": { borderColor: palette.all.blue },
    "&:focus-within": { borderColor: palette.all.blue },

    "& .MuiInputBase-root": {
      height: "100%",
      padding: "16px 5px 16px 23px",
    },
    "& .MuiInput-underline:after , & .MuiInput-underline:before": {
      display: "none",
    },
  },
  arrowIcon: {
    position: "absolute",
    right: "20px",
    top: "0",
    height: "-webkit-fill-available",
    display: "flex",
    alignItems: "center",
  },
  checked: {
    color: "#29C9C1",
  },
  uploadWrapper: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    width: "calc(50% - 16px)",
    height: "60px",
    justifyContent: "center",
    borderRadius: "12px",
    border: `2px dashed #C2C2C2`,
    background: "#F6F6F6",
    "& svg": {
      width: "43px",
      height: "34px",
    },
    [breakpoints.down(1300)]: {
      width: "100%",
    },
    [breakpoints.down("sm")]: {
      background: "#f0f0f0",
    },
  },
  uploadTitle: {
    fontSize: 14,
    fontWeight: 500,
  },
  ContactWrapper: {
    border: "1px solid #FFC02B",
    width: "calc(50% - 16px)",
    borderRadius: "12px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    paddingLeft: "15px",
    position: "relative",
    [breakpoints.down(1300)]: {
      marginTop: "10px",
      width: "100%",
      padding: "10px 30px",
    },
  },
  contactIcon: {
    width: "34px",
    height: "34px",
    borderRadius: "7px",
    background: "#FFC02B",
    marginRight: "10px",
    "& svg": {
      width: "15px",
      height: "15px",
      margin: "10px",
    },
  },
  uploadFile: {
    display: "flex",
    justifyContent: "space-between",
    [breakpoints.down(1300)]: {
      flexDirection: "column",
    },
  },
  contactClose: {
    position: "absolute",
    right: "-10px",
    top: "-10px",
    "& > svg > path": {
      fill: "red",
    },
  },
  buttonWrapper: {
    display: "flex",
    marginTop: "10px",
    gridGap: "16px",
    justifyContent: "flex-end",
    borderTop: "1px solid #EEEEEE",
    alignItems: "center",
    height: "100%",
    paddingRight: "50px",
    [breakpoints.down(900)]: {
      flexDirection: "column",
      gridGap: "5px",
      borderTop: "none",
      padding: "0 30px",
    },
  },
  coverPropertyType: {
    marginTop: "10px",
  },
}));
