import { makeStyles } from "@material-ui/core";
import * as React from "react";
import AppTypography from "../../../elements/Typography";

interface PriorityProps {
  priority: string;
}

const useStyles = makeStyles(
  ({ breakpoints, palette }) => {
    const getColor = (priority: string) => {
      if (priority === "Medium") {
        return palette.all.yellow;
      }
      if (priority === "High") {
        return palette.all.blue;
      }
      if (priority === "Low") {
        return palette.all.gray;
      }
      return palette.all.red;
    };

    return {
      text: {
        alignItems: "center",
        background: (props: PriorityProps) => `${getColor(props.priority)}33`,
        borderRadius: "3px",
        color: (props: PriorityProps) => getColor(props.priority),
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

const Priority: React.FC<PriorityProps> = ({ priority }) => {
  const classes = useStyles({ priority });
  return <AppTypography className={classes.text}>{priority}</AppTypography>;
};

export default Priority;
