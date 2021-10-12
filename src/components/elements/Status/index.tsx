import { makeStyles } from "@material-ui/core";
import * as React from "react";
import AppTypography from "../Typography";

interface StatusProps {
  status: string;
}

const useStyles = makeStyles(
  ({ breakpoints, palette }) => {
    const getColor = (status: string) => {
      if (status === "Processing") {
        return palette.all.yellow;
      }
      if (status === "Finished") {
        return palette.all.green;
      }
      if (status === "Action") {
        return palette.all.gray;
      }
      return palette.all.red;
    };

    return {
      text: {
        alignItems: "center",
        background: (props: StatusProps) => `${getColor(props.status)}33`,
        borderRadius: "3px",
        color: (props: StatusProps) => getColor(props.status),
        display: "flex",
        justifyContent: "center",
        height: "27px",
        fontSize: "13px",
        fontWeight: 600,
        width: "91px",
        [breakpoints.up(1920)]: {
          marginTop: "-5px",
        },
        [breakpoints.down("md")]: {
          fontSize: "12px",
        },
        [breakpoints.down("sm")]: {
          fontSize: "12px",
        },
      },
    };
  },
  { index: 1 }
);

const Status: React.FC<StatusProps> = ({ status }) => {
  const classes = useStyles({ status });
  return <AppTypography className={classes.text}>{status}</AppTypography>;
};

export default Status;
