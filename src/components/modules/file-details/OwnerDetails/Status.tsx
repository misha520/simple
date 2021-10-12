import { makeStyles } from "@material-ui/core";
import * as React from "react";
import AppTypography from "../../../elements/Typography";

interface OwnerDetailsStatusProps {
  percent: number;
  text?: string;
}

const useStyles = makeStyles(
  ({ breakpoints, palette }) => {
    const getColor = (percent: number) => {
      if (percent > 75) {
        return palette.all.green;
      }
      if (percent > 50) {
        return palette.all.yellow;
      }
      if (percent > 25) {
        return palette.all.orange;
      }
      return palette.all.red;
    };

    return {
      text: {
        alignItems: "center",
        background: (props: OwnerDetailsStatusProps) =>
          `${getColor(props.percent)}33`,
        borderRadius: "3px",
        color: (props: OwnerDetailsStatusProps) => getColor(props.percent),
        display: "flex",
        justifyContent: "center",
        height: "27px",
        margin: "8px auto 16px auto",
        width: "91px",
        [breakpoints.up(1920)]: {
          marginTop: "-5px",
        }
      },
    };
  },
  { index: 1 }
);

const OwnerDetailsStatus: React.FC<OwnerDetailsStatusProps> = ({
  percent,
  text = "Processing",
}) => {
  const classes = useStyles({ percent });
  return (
    <AppTypography
      fontSize={13}
      fontWeight={600}
      className={`OwnerDetailsStatus ${classes.text}`}
    >
      {text}
    </AppTypography>
  );
};

export default OwnerDetailsStatus;
