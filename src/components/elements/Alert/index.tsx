import { makeStyles } from "@material-ui/core";
import { Alert, AlertProps } from "@material-ui/lab";
import * as React from "react";
import { allColors } from "../../foundation/palette";
import CheckWithBackgroundIcon from "../icons/CheckWithBackground";
import CloseWithBackgroundIcon from "../icons/CloseWithBackground";

const useStyles = makeStyles(
  ({ palette }) => ({
    root: {
      alignItems: "center",
      borderRadius: "6px",
      padding: "0 24px",
      height: "48px",
    },
    action: {
      order: 2,
      marginRight: "31px",
      marginLeft: 0,
      padding: 0,
      width: "fit-content",
    },
    icon: {
      margin: 0,
      order: 3,
      padding: 0,
    },
    message: {
      order: 1,
      marginRight: "auto",
      padding: 0,
      fontSize: "14px",
      fontWeight: 500,
    },
    standardError: {
      color: palette.error.main,
    },
    standardInfo: {
      color: palette.info.main,
    },
    standardSuccess: {
      color: palette.success.main,
    },
    standardWarning: {
      color: palette.warning.main,
    },
  }),
  { index: 1 }
);

const AppAlert: React.FC<AlertProps> = (props) => {
  const classes = useStyles();
  return (
    <Alert
      {...props}
      classes={{
        ...classes,
      }}
      iconMapping={{
        error: <CloseWithBackgroundIcon fill={allColors.red} />,
        success: <CheckWithBackgroundIcon fill={allColors.green} />,
        info: <CheckWithBackgroundIcon fill={allColors.gray} />,
        warning: <CheckWithBackgroundIcon fill={allColors.yellow} />,
      }}
    />
  );
};

export default AppAlert;
