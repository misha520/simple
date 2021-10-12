import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    overTimeContainer: {
      marginTop: "40px",
      background: "#FFFFFF",
      padding: "30px 24px 26px 36px",
      boxShadow: "0px 7px 15px rgb(38 105 93 / 4%)",
      borderRadius: "20px",
      minHeight: "545px",
      [breakpoints.up(1920)]: {
        minHeight: "565px",
      },
      [breakpoints.down("xs")]: {
        marginTop: "24px",
        padding: "20px 16px",
      },
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerTitle: {
      display: "flex",
      flexDirection: "column",
    },
    title: {
      color: palette.all.black,
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "30px",
      [breakpoints.down("xs")]: {
        fontSize: "14px",
        lineHeight: "21px",
      },
    },
    subtitle: {
      color: "rgba(23, 27, 30, 0.5)",
      fontSize: "12px",
      lineHeight: "18px",
      paddingTop: "7px",
      [breakpoints.down("xs")]: {
        display: "none",
      },
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "31px",
    },
    textIcon: {
      display: "flex",
      alignItems: "center",
    },
    textGroup: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: "15px",
    },
    titleIcon: {
      color: "rgba(23, 27, 30, 0.5)",
      fontSize: "13px",
      lineHeight: "19px",
      [breakpoints.down("xs")]: {
        fontSize: "12px",
        lineHeight: "18px",
      },
    },
    numberIcon: {
      color: palette.all.black,
      fontWeight: 600,
      fontSize: "22px",
      lineHeight: "33px",
    },
    button: {
      "& > button": {
        border: "1px solid #e7e7e7",
        boxShadow: "none",
        background: "no-repeat",
        borderRadius: "8px",
        marginLeft: "14px",
        padding: "10px 15px",
        color: "rgba(23, 27, 30, 0.5)",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "21px",

        "&:hover": {
          boxShadow: "none",
        },
        "&:focus": {
          border: `1px solid ${palette.all.red}`,
          color: palette.all.red,
        },
      },
    },
    chart: {
      paddingTop: "28px",
      [breakpoints.down("xs")]: {
        overflowX: "auto",
        "& > div": {
          width: "760px",
        },
      },
    },
    selectItemGroup: {
      padding: "14px 66px 14px 21px !important",
      background: "#e7f6ff",
      color: palette.all.blue,
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "21px",

      "& ~ svg": {
        color: palette.all.blue,
      },

      "& ~ fieldset": {
        border: "none",
        borderRadius: "14px",
      },
      [breakpoints.down("xs")]: {
        padding: "7px 34px 7px 11px !important",
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "18px",
        borderRadius: "7px",
      },
    },
  }),
  { index: 1 }
);
