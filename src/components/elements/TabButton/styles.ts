import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette }) => ({
    selectedTab: {
      background: palette.background.paper,
      borderRadius: "8px",
    },
    tab: {
      fontSize: 20,
      fontWeight: 600,
      height: "52px",
      whiteSpace: "nowrap",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      width: "100%",
      maxWidth: "none",
    },
    tabWrapper: {
      alignItems: "flex-start",
      flexDirection: "row",
    },
  }),
  { index: 1 }
);
