import { Box, makeStyles } from "@material-ui/core";
import { Children } from "react";
import clsx from "clsx";

import AppButton from "../../../../../../elements/Button";
import AppTypography from "../../../../../../elements/Typography";

const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      padding: "0 50px",
      maxWidth: "400px",
      width: "100%",
      [breakpoints.down("lg")]: {
        padding: "0 26px",
      },
      [breakpoints.down("sm")]: {
        margin: "auto",
        padding: 0,
      },
    },
    btn: {
      borderRadius: "3px",
      fontSize: "13px",
      fontWeight: 600,
      lineHeight: "19px",
      height: "30px",
      padding: "5px 14px",
    },
    errorBtn: {
      background: `${palette.error.main}33`,
      color: palette.error.main,
    },
    warningBtn: {
      background: `${palette.warning.main}33`,
      color: palette.warning.main,
    },
    flexWrapper: {
      alignItems: "center",
      display: "flex",
      gap: "10px",
    },
    label: {
      color: palette.text.secondary,
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 600,
      minWidth: "106px",
      [breakpoints.down("sm")]: {
        minWidth: "90px",
      },
    },
    reorderBtn: {
      background: "#E3E5ED",
      borderRadius: "6px",
      color: palette.text.secondary,
      width: "111px",
    },
  }),
  { index: 1 }
);

const details = [
  {
    label: "Ordered :",
    value: "22 August, 2020",
  },
  {
    label: "Complete :",
    value: "TBD",
  },
  {
    label: "Refreshed :",
    value: "None",
  },
  {
    label: "Borrowers :",
    value: "2",
  },
  {
    label: "Product :",
    value: "SSA-89",
  },
];

const OrderDetails = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box
        marginBottom="20px"
        alignItems="center"
        display="flex"
        justifyContent="space-between"
      >
        <AppTypography fontSize={20} fontWeight={600}>
          Order Details
        </AppTypography>
        <AppButton className={classes.reorderBtn}>Reorder</AppButton>
      </Box>
      <Box className={classes.flexWrapper}>
        <AppTypography className={classes.label}>Status :</AppTypography>
        <Box className={classes.flexWrapper}>
          <AppButton className={clsx(classes.btn, classes.warningBtn)}>
            Processing
          </AppButton>
          <AppButton className={clsx(classes.btn, classes.errorBtn)}>
            Stop
          </AppButton>
        </Box>
      </Box>
      {Children.toArray(
        details.map(({ label, value }, index) => (
          <Box key={index} className={classes.flexWrapper}>
            <AppTypography className={classes.label}>{label}</AppTypography>
            <AppTypography color="textSecondary" fontSize={16} fontWeight={400}>
              {value}
            </AppTypography>
          </Box>
        ))
      )}
    </Box>
  );
};

export default OrderDetails;
