import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette, shape }) => ({
    root: {
      padding: "49px 44px 35px 42px",
      [breakpoints.down("sm")]: {
        padding: "30px 20px",
      },
    },
    flexWrapper: {
      display: "flex",
      paddingTop: "49px",
      justifyContent: "center",
      [breakpoints.down("sm")]: {
        flexDirection: "column",
        background: "#fafafa",
        padding: "49px 20px",
        gap: "24px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      },
    },
    wrapper: {
      paddingTop: "49px",
      display: "flex",
      flexDirection: "column",
      [breakpoints.down("sm")]: {
        background: "#fafafa",
        padding: "49px 20px",
        gap: "24px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      },
    },
    selectedTab: {
      background: palette.background.paper,
      borderRadius: "8px",
    },
    tabs: {
      padding: "10px",
      background: `${palette.all.gray}14`,
      borderRadius: shape.borderRadius,
    },
    tab: {
      fontSize: 20,
      fontWeight: 600,
      maxWidth: "200px",
      minWidth: "none",
      width: "100%",
      height: "52px",
    },
    tabWrapper: {
      alignItems: "flex-start",
      flexDirection: "row",
    },
  }),
  { index: 1 }
);
