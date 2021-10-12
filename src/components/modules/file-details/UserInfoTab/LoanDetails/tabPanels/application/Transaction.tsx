import { Children } from "react";
import { Box, makeStyles } from "@material-ui/core";
import AppTypography from "../../../../../../elements/Typography";

const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      padding: "0 65px",
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
    },
  }),
  { index: 1 }
);

const details = [
  { label: "Program :", value: "22 August, 2020" },
  {
    label: "EST value :",
    value: "22 August, 2020",
  },
  {
    label: "Aperal Value :",
    value: "TBD",
  },
  {
    label: "LTV :",
    value: "None",
  },
  {
    label: "CLTV :",
    value: "2",
  },
  {
    label: "HCLTV :",
    value: "SSA-89",
  },
  {
    label: "DTI :",
    value: "SSA-89",
  },
  {
    label: "Backend :",
    value: "SSA-89",
  },
];

const Transaction = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box marginBottom="30px">
        <AppTypography fontSize={20} fontWeight={600}>
          Transaction
        </AppTypography>
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

export default Transaction;
