import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    borderRadius: "12px",
    boxShadow: "0px 10px 49px rgba(0, 0, 0, 0.13)",
    background: "#FFF",
    position: "absolute",
    right: 0,
    top: "75px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1,
    padding: "20px",
    width: "320px",
    [breakpoints.down(1000)]: {
      left: 0,
    },
    "& > nice-dates-navigation, .nice-dates-day.-today ": {
      color: "#fff",
      background: "#35B6FE",
      borderRadius: "50%",
    },
    "& > nice-dates-navigation, .nice-dates-day .nice-dates-day_month ": {
      display: "none",
    },
  },
  cover: {
    display: "flex",
    justifyContent: "space-between",
  },
  fromBox: {},
  fromTxt: {
    fontSize: "14px",
    fontWeight: 600,
  },
  dateFrom: {
    border: "1px solid #35B6FE",
    borderRadius: "8px",
    padding: "12px 8px 8px 10px",
    display: "flex",
    alignItems: "start",
    marginTop: "10px",
  },
  iconCalendar: {
    marginLeft: "6px",
  },
}));
