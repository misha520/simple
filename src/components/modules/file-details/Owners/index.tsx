import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import MoreVerticalIcon from "../../../elements/icons/MoreVertical";
import AppTypography from "../../../elements/Typography";
import OwnersProfile from "./Profile";
import OwnerModal from "../../../elements/modals/Owner";

const useStyles = makeStyles(({ breakpoints, palette, shape }) => ({
  root: {
    background: palette.background.paper,
    borderRadius: shape.borderRadius,
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
    padding: "24px 24px 14px 24px",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    [breakpoints.up(1920)]: {
      padding: "24px",
      minHeight: "190px",
      width: "445px",
      marginLeft: "48px",
    },
  },
  flexWrapper: {
    alignItems: "center",
    display: "flex",
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
  textBtn: {
    justifySelf: "flex-end",
    cursor: "pointer",
    fontSize: "13px",
    transition: "0.3s",
    fontWeight: 400,
    color: palette.all.blue,
    "&:hover": {
      opacity: "0.7",
    },
    [breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: "10px",
    },
  },
}));

const Owners = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.flexWrapper}>
          <AppTypography className={classes.title}>Owners</AppTypography>
          <MoreVerticalIcon />
        </div>
        <div style={{ margin: "20px 0 10px" }} className={classes.flexWrapper}>
          <OwnersProfile />
          <OwnersProfile />
        </div>
        <AppTypography onClick={handleOpen} className={classes.textBtn}>
          2 More Owners
        </AppTypography>
      </div>
      <OwnerModal handleClose={handleClose} open={open} data={data} />
    </>
  );
};

export default Owners;

const data = [
  {
    firstName: "Michal",
    lastName: "Tominaga",
    work: "Processor",
    img: "/images/man(6).png",
  },
  {
    firstName: "Darlene",
    lastName: "Robertson",
    work: "Loan Officer",
    img: "/images/man(4).png",
  },
  {
    firstName: "Ralph",
    lastName: "Edwards",
    work: "Loan Officer Assistant",
    img: "/images/ralph.png",
  },
  {
    firstName: "Leslie",
    lastName: "Alexander",
    work: "Assistant Processor",
    img: "/images/woman(9).png",
  },
];
