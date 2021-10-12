import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    assignedProcessorsContainer: {
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
        padding: "20px 16px",
        marginTop: "0",
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
        fontSize: "16px",
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
    root: {
      "& > div": {
        padding: "14px 48px 13px 16px",
        background: "#fee4ec",
        borderRadius: "8px",
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "21px",
        color: palette.all.red,

        "&:focus": {
          backgroundColor: "none",
          borderRadius: "8px",
        },
      },
      "& > svg": {
        color: palette.all.red,
      },
      "& > fieldset": {
        border: "none",
      },
    },
    chart: {
      paddingTop: "56px",
      display: "flex",
      alignItems: "center",
      [breakpoints.down("xs")]: {
        flexDirection: "column-reverse",
      },
    },
    labelChart: {
      width: "40%",
      [breakpoints.down("xs")]: {
        paddingTop: "33px",
        width: "100%",
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "space-between",
      },
    },
    doughnutChart: {
      width: "60%",
      position: "relative",
      [breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    total: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
    totalText: {
      color: palette.all.black,
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "36px",
    },
    totalNumber: {
      color: palette.all.black,
      fontWeight: "bold",
      fontSize: "48px",
      lineHeight: "72px",
    },
    labelGroup: {
      display: "flex",
      maxWidth: "220px",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: "26px",
      [breakpoints.down("xs")]: {
        width: "42%",
        maxWidth: "unset",
      },
    },
    label: {
      display: "flex",
      alignItems: "center",

      "& > span": {
        paddingLeft: "20px",
        color: "rgba(23, 27, 30, 0.5)",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "21px",
        [breakpoints.down("xs")]: {
          paddingLeft: "10px",
          fontSize: "12px",
          lineHeight: "18px",
        },
      },
    },
    data: {
      color: palette.all.black,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      [breakpoints.down("xs")]: {
        fontSize: "12px",
        lineHeight: "18px",
      },
    },
  }),
  { index: 1 }
);
