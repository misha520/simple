import { Box, Button, makeStyles } from "@material-ui/core";
import * as React from "react";
import AppAlert from "../../../elements/Alert";
import AppButton from "../../../elements/Button";
import ArrowDownIcon from "../../../elements/icons/ArrowDown";
import AppTypography from "../../../elements/Typography";
import { allColors } from "../../../foundation/palette";

const useStyles = makeStyles(
  ({palette}) => ({
    filterBtn: {
      borderRadius: "8px",
      padding: "6px",
      width: "79px",
    },
    updateBtn: {
      background: "inherit",
      color: palette.all.gray,
      backgroundColor: "rgba(23, 27, 30, 0.04)",
      borderRadius: "3px",
      padding: "2px 22px"
    },
  }),
  { index: 1 }
);

const AlertsTabPanel: React.FC = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      gridGap="8px"
      padding="12px 24px"
    >
      <Box alignItems="center" display="flex" justifyContent="space-between">
        <AppTypography color="textSecondary" fontSize={14} fontWeight={500}>
          53 Alerts is available
        </AppTypography>
        <AppButton
          endIcon={<ArrowDownIcon size="small" />}
          className={classes.filterBtn}
          variant="outlined"
        >
          Filter
        </AppButton>
      </Box>
      <AppAlert severity="success">1 New File Attached</AppAlert>
      <AppAlert
        severity="info"
        action={<Button className={classes.updateBtn}>Update</Button>}
      >
        Loan File Updated
      </AppAlert>
      <AppAlert severity="error">New Action Needed</AppAlert>
      <AppAlert severity="warning">New Action Needed</AppAlert>
      <AppAlert severity="info">Loan File Updated</AppAlert>
      <AppTypography
        htmlColor={allColors.yellow}
        fontSize={14}
        fontWeight={500}
      >
        Load more
      </AppTypography>
    </Box>
  );
};

export default AlertsTabPanel;
