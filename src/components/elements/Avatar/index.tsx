import * as React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
  avatarWrapper: {
    background: "#D94E0026",
    height: "60px",
    minWidth: "60px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    [breakpoints.down("sm")]: {
      height: "45px",
      minWidth: "45px",
      borderRadius: "8px",
    },
    "& > img": {
      height: "50px",
      width: "50px",
      [breakpoints.down("sm")]: {
        height: "37px",
        width: "37px",
      },
    },
  },
}));

const Avatar: React.FC<{ img: string }> = ({ img }) => {
  const classes = useStyles();
  return (
    <Box className={classes.avatarWrapper}>
      <img draggable={false} src={img} alt="avatar" />
    </Box>
  );
};
export default Avatar;
