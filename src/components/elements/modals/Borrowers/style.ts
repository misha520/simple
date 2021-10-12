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
    maxWidth: "305px",
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
  avatar: { height: "51px", width: "51px" },
  addBtn: {
    color: palette.all.blue,
    background: `${palette.all.blue}26`,
    height: "40px",
    borderRadius: "8px",
  },
  detailTxt: {
    fontSize: "13px",
    lineHeight: "20px",
    fontWeight: 400,
    color: palette.text.secondary,
  },
  detailTxtHeading: {
    fontWeight: 600,
    color: palette.text.primary,
  },
  nameTxt: {
    // color: palette.all.blue,
    fontSize: "16px",
    fontWeight: 500,
    marginBottom: "10px",
  },
  borrowerCard: {
    background: "#FFFFFF",
    padding: "20px",
    borderRadius: "10px",
  },
}));
