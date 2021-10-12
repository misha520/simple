import { Box, makeStyles } from "@material-ui/core";
import { Children } from "react";
import AppButton from "../../../../../../elements/Button";
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
  { label: "Program :", value: "22 August, 2020" },
  {
    label: "Purpose :",
    value: "22 August, 2020",
  },
  {
    label: "Status :",
    value: "TBD",
  },
  {
    label: "Occupalay :",
    value: "TBD",
  },
  {
    label: "Loan :",
    value: "None",
  },
  {
    label: "Rate :",
    value: "2",
  },
  {
    label: "APR :",
    value: "SSA-89",
  },
  {
    label: "Term :",
    value: "SSA-89",
  },
];

const General = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box
        marginBottom="30px"
        alignItems="center"
        display="flex"
        justifyContent="space-between"
      >
        <AppTypography fontSize={20} fontWeight={600}>
          General
        </AppTypography>
        <AppButton className={classes.reorderBtn}>Edit</AppButton>
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

export default General;
