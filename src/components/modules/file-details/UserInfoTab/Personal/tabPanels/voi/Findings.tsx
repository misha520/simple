import { Box, makeStyles } from "@material-ui/core";
import * as React from "react";
import clsx from "clsx";

import AppTypography from "../../../../../../elements/Typography";
import AppDivider from "../../../../../../elements/Divider";
import { FindingsHeader } from "../../../../../../elements";

const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      padding: "0 30px 0 50px",
      maxWidth: "500px",
      width: "100%",
      [breakpoints.down("lg")]: {
        padding: "0 26px",
      },
      [breakpoints.down("sm")]: {
        margin: "auto",
        padding: 0,
      },
    },
    errorLabel: {
      background: `${palette.error.main}1F`,
      color: palette.error.main,
    },
    findingWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "3px",
    },
    label: {
      alignItems: "center",
      borderRadius: "6px",
      display: "flex",
      height: "32px",
      justifyContent: "center",
      marginRight: "17px",
      width: "72px",
    },
    warningLabel: {
      background: `${palette.warning.main}1F`,
      color: palette.warning.main,
    },
  }),
  { index: 1 }
);

const Findings = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <FindingsHeader />
      <Finding />
      <AppDivider light />
      <Finding />
      <AppDivider light />
      <Finding />
      <AppDivider light />
      <Finding />
    </Box>
  );
};

const Finding: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.findingWrapper}>
      <AppTypography
        className={clsx(classes.label, classes.errorLabel)}
        fontSize={13}
        fontWeight={400}
      >
        Failed
      </AppTypography>
      <AppTypography component="span" fontSize={14} fontWeight={500}>
        Address
      </AppTypography>

      <AppTypography
        component="span"
        color="textSecondary"
        fontSize={14}
        fontWeight={400}
      >
        is not match.
      </AppTypography>
    </Box>
  );
};

export default Findings;
