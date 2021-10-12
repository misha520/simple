import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ shadows, palette }) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#FFFFFF",
    boxShadow: shadows[5],
    borderRadius: "14px",
    maxWidth: "445px",
    width: "95%",
    padding: "24px",
    outline: "none",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    maxHeight: window.innerHeight - 50,
    overflow: "auto",
  },
  title: { fontWeight: 600, fontSize: "20px" },
  description: { fontSize: "16px", fontWeight: 500, color: "#171B1E80" },
  iconBtn: {
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      opacity: "0.7",
    },
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ownerName: { fontSize: "14px", fontWeight: 500 },
  ownerWork: { fontSize: "13px", fontWeight: 400, opacity: 0.5 },
  avatarWrapper: {
    height: "64px",
    width: "64px",
    background: "#E6646E36",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: "11px",
  },
  cancelBtn: {
    color: "#171B1E80",
    background: `${palette.all.gray}14`,
    height: "40px",
    width: "99px",
    borderRadius: "8px",
  },
  confirmBtn: {
    color: "#FFF",
    background: palette.all.blue,
    height: "40px",
    width: "99px",
    borderRadius: "8px",
  },
}));
