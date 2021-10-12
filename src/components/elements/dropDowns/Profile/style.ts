import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    maxWidth: "304px",
    width: "95%",
    padding: "24px 0",
    borderRadius: "12px",
    boxShadow: "0px 10px 49px rgba(0, 0, 0, 0.13)",
    background: "#FFF",
    position: "absolute",
    right: "20px",
    top: "85%",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  listWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "0 25px",
  },
  itemTxt: {
    fontSize: "14px",
    fontWeight: 500,
    color: `${palette.all.black}80`,
    cursor: "pointer",
    transition: ".3s",
    "&:hover": {
      opacity: "0.7",
    },
  },
  userName: { fontSize: "18px", fontWeight: 600 },
  userWork: {
    fontSize: "13px",
    fontWeight: 400,
    color: `${palette.all.black}80`,
  },
}));
