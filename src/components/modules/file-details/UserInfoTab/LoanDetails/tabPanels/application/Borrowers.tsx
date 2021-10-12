import { Box, makeStyles } from "@material-ui/core";
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
      fontSize: "13px",
      lineHeight: "24px",
      fontWeight: 600,
      whiteSpace: "nowrap",
    },
    primaryBtn: {
      borderRadius: "6px",
      width: "111px",
    },
    title: {
      fontSize: 16,
      fontWeight: 600,
      color: palette.all.yellow,
    },
    borrowerWrapper: {
      padding: 20,
      borderRadius: "20px",
      boxShadow: "0px 6px 15px rgba(62, 73, 84, 0.04)",
    },
  }),
  { index: 1 }
);

const details = [
  { label: "Present Address  :", value: "TY35 Avenue GG London Center" },
  {
    label: "Status :",
    value: "Married",
  },
  {
    label: "Citisenship :",
    value: "American",
  },
  { label: "POB :", value: "American" },
  {
    label: "Position :",
    value: "Borrows",
  },
];

const Borrowers = () => {
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
          Borrowers
        </AppTypography>
        <AppButton
          color="primary"
          variant="contained"
          className={classes.primaryBtn}
        >
          Add
        </AppButton>
      </Box>
      <Box className={classes.borrowerWrapper}>
        <AppTypography className={classes.title}>Mary Homeowner</AppTypography>
        {details.map(({ label, value }, index) => (
          <Box key={index} className={classes.flexWrapper}>
            <AppTypography className={classes.label}>{label}</AppTypography>
            <AppTypography color="textSecondary" fontSize={13} fontWeight={400}>
              {value}
            </AppTypography>
          </Box>
        ))}
      </Box>
      <Box className={classes.borrowerWrapper}>
        <AppTypography className={classes.title}>Homer Homeowner</AppTypography>
        {details.map(({ label, value }, index) => (
          <Box key={index} className={classes.flexWrapper}>
            <AppTypography className={classes.label}>{label}</AppTypography>
            <AppTypography color="textSecondary" fontSize={13} fontWeight={400}>
              {value}
            </AppTypography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Borrowers;
