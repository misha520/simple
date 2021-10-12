import * as React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
    borderRadius: "10px",
    padding: "10px",
  },
  status: {
    fontSize: "14px",
    fontWeight: 500,
    color: (props: ProcessingProps) => props.color,
    [breakpoints.down(1400)]: {
      fontSize: "12px",
    },
  },
  date: {
    fontSize: "10px",
    fontWeight: 400,
    color: "rgba(23, 27, 30, 0.5)",
  },
  coverText: {
    display: "flex",
    flexDirection: "column",
  },
  coverIcon: {
    width: "28px",
    height: "28px",
    background: "#EEEEEE",
    borderRadius: "5px",
    position: "relative",
    "& > svg": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
  },
}));

export interface ProcessingProps {
  status: string;
  dateStart: string;
  icon: React.ReactNode;
  color: string;
}

const Action: React.FC<ProcessingProps> = ({
  dateStart,
  status,
  icon,
  color,
}) => {
  const classes = useStyles({ color, dateStart, status, icon });

  return (
    <Box className={classes.root}>
      <Box className={classes.coverText}>
        <span className={classes.status}>{status}</span>
        <span className={classes.date}>{dateStart}</span>
      </Box>
      <Box className={classes.coverIcon}>{icon}</Box>
    </Box>
  );
};

export default Action;
