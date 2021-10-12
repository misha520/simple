import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    turnTimesContainer: {
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
    turnTimesHeader: {
      display: "flex",
      justifyContent: "space-between",
      [breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    headerText: {
      display: "flex",
      flexDirection: "column",
      [breakpoints.down("xs")]: {
        flexDirection: "revert",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
    dotButton: {
      fontWeight: "bold",
      cursor: "pointer",
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
    buttonGroup: {
      display: "flex",
      justifyContent: "space-between",
      [breakpoints.down("sm")]: {
        paddingTop: "23px",
        justifyContent: "spaceBetween",
      },
      [breakpoints.down("xs")]: {
        paddingTop: "23px",
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
    selectGroup: {
      paddingRight: "30px",
      width: "100%",
      "& > div": {
        paddingRight: "28px",
      },

      [breakpoints.down("md")]: {
        paddingRight: 0,
        display: "flex",
        justifyContent: "flex-end",
        "& > div": {
          paddingRight: 0,
          paddingLeft: "7px",
        },
      },
      [breakpoints.down("xs")]: {
        justifyContent: "space-between",
      },
    },
    select: {
      padding: "14px 66px 14px 21px !important",
      color: "rgba(23, 27, 30, 0.5)",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "21px",

      "& ~ svg": {
        color: palette.all.gray,
      },

      "& ~ fieldset": {
        border: `1px solid ${palette.all.gray}`,
        borderRadius: "14px",
      },

      [breakpoints.down("xs")]: {
        padding: "7px 34px 7px 11px !important",
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "18px",

        "& ~ fieldset": {
          borderRadius: "7px",
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
    turnTimesTable: {
      paddingTop: "28px",
      [breakpoints.down("md")]: {
        overflowX: "auto",
        "& > div": {
          width: "auto",
        },
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
