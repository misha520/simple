import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: "370px",
    padding: "24px 0",
    borderRadius: "12px",
    boxShadow: "0px 10px 49px rgba(0, 0, 0, 0.13)",
    background: "#FFF",
    position: "absolute",
    left: "-70px",
    top: "54px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  itemWrapper: {
    display: "flex",
    gap: "16px",
    padding: "0 25px",
  },
  rectangle: {
    position: "absolute",
    top: "-12px",
    left: "74px",
  },
  itemTxt: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
    color: `${palette.all.black}80`,
  },
  title: { fontSize: "20px", fontWeight: 600 },
  viewAllTxt: {
    marginLeft: "auto",
    color: "#35B6FE",
    fontSize: "16px",
    fontWeight: 500,
  },
  itemIcon: {
    width: "51px",
    height: "51px",
    top: "104px",
    background: "#29C9C1",
    borderRadius: "50px",
    textAlign: "center",
  },
  time: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: "12px",
    color: `${palette.all.black}80`,
  },
  itemTitle: {
    fontSize: "16px",
    fontWeight: 500,
  },
  Icon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
