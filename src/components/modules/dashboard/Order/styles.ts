import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    orderContainer: {
      marginTop: "40px",
      background: "#FFFFFF",
      padding: "30px 24px 26px 36px",
      boxShadow: "0px 7px 15px rgb(38 105 93 / 4%)",
      borderRadius: "20px",
      [breakpoints.down("xs")]: {
        padding: "20px 16px",
        marginTop: "24px",
      },
    },
    orderHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerText: {
      display: "flex",
      flexDirection: "column",
    },
    headerTitle: {
      color: palette.all.black,
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "30px",
      [breakpoints.down("xs")]: {
        fontSize: "14px",
        lineHeight: "21px",
      },
    },
    headerSubtitle: {
      paddingTop: "7px",
      color: "rgba(23, 27, 30, 0.5)",
      fontSize: "13px",
      lineHeight: "19px",
      [breakpoints.down("xs")]: {
        display: "none",
      },
    },
    tabsButton: {
      "& > header": {
        backgroundColor: "unset",
        boxShadow: "none",
        color: "rgba(23, 27, 30, 0.5)",

        "& > div": {
          borderBottom: "2px solid #eeeeee",
        },
      },
    },
    tab: {
      minWidth: "100px",
      textTransform: "unset",
      opacity: 1,
    },
    tabSelected: {
      color: palette.all.blue,
    },
    indicator: {
      background: palette.all.blue,
      borderRadius: "21px",
    },

    buttonGroup: {
      display: "flex",
      alignItems: "center",
    },
    moreIcon: {
      paddingLeft: "24px",
    },
    chart: {
      paddingTop: "39px",

      [breakpoints.down("md")]: {
        overflowX: "auto",

        "& > div": {
          width: "1100px",
        },
      },
      [breakpoints.down("xs")]: {
        overflowX: "auto",

        "& > div": {
          width: "816px",
          "& > canvas": {
            width: "600px !important",
            height: "300px !important",
          },
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
