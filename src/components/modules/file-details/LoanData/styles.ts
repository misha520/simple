import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
    ({ breakpoints, palette }) => ({
      root: {
        background: palette.background.paper,
        borderRadius: "10px",
        boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
        padding: "24px 24px 14px 24px",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        [breakpoints.up(1920)]: {
          padding: "24px",
          width: "450px",
          height: "190px",
          marginLeft: "20px",
        },
      },
      flexWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      title: {
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "30px",
        [breakpoints.down("sm")]: {
          fontSize: "24px",
          lineHeight: "36px",
        },
      },
      elipse: {
        marginTop: "5px",
        marginRight: "5px",
        background: palette.all.green,
        borderRadius: "50%",
        width: "10px",
        height: "10px",
      },
      iconBtn: {
        cursor: "pointer",
        transition: "0.25s",
        "&:hover": {
          opacity: "0.7",
        },
      },
    }),
    { index: 1 }
  );