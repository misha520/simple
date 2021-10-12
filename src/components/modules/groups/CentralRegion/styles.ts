import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ palette, breakpoints }) => ({
  paper: {
    backgroundColor: "#EEEEEE7d",
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
    borderRadius: "20px",
    width: "calc(75% - 25px)",
    marginLeft: "25px",
    fontFamily: "Poppins",
    display: "flex",
    flexDirection: "column",
    [breakpoints.down(1300)]: {
      gap: 0,
    },
    [breakpoints.down(900)]: {
      width: "100%",
      marginLeft: 0,
      borderRadius: "0 0 20px 20px",
    },
  },
  title: {
    fontWeight: 600,
    fontSize: "20px",
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "32px 0 32px 50px",
    borderBottom: "1px solid #EEEEEE",
  },
  MoreBtn: {
    transform: "rotate(90deg)",
    "& span": {
      "& svg > path": {
        stroke: palette.all.gray,
      },
    },
  },
  coverBranchCard: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
    padding: "40px",
    width: "100%"
  },

  // Branch Card
  cardContainer: {
    width: "calc(33% - 15px)",
    background: "#fff",
    boxShadow: " 0px 7px 15px rgba(38, 105, 93, 0.04)",
    borderRadius: "20px",
    padding: "25px",
    position: "relative",
  },
  BranchNameCover: {
    display: "flex",
    justifyContent: "space-between",
  },
  branchName: {
    fontSize: "16px",
    fontWeight: 600,
    color: palette.all.blue,
    paddingBottom: "15px",
  },
  description: {
    fontWeight: 600,
    fontSize: "14px",
    paddingBottom: "15px",
    margin: 0,
  },
  usersCover: {
    display: "flex",
    justifyContent: "space-between",
  },
  numUsers: {
    fontSize: "14px",
    fontWeight: 500,
    color: palette.all.gray,
  },
  MoreBtnCard: {
    position: "absolute",
    top: "16px",
    right: "-12px",
    transform: "rotate(90deg)",
    "& span": {
      "& svg > path": {
        stroke: palette.all.gray,
      },
    },
  },
  imagesContainer: {
    display: "flex",
  },
  imagesRoot: {
    width: "34px",
    height: "34px",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    borderRadius: "50%",
    border: "2px solid #fff",
    position: "absolute",
    bottom: "15px"
  },
  images: {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
  },
  imageFist: {
    background: "#DBCDC6",
    right: "94px",
    zIndex: 4
  },
  imageSecond: {
    background: "#E5C9CB",
    right: "70px",
    zIndex: 3
  },
  imageThird: {
    background: " #D8E3D8",
    right: "46px",
    zIndex: 2
  },
  imageFourth: {
    background: "#E5D4D5",
    right: "22px",
    zIndex: 1
  },
  menuItem: {
    minHeight: "0px",
  }
}));
