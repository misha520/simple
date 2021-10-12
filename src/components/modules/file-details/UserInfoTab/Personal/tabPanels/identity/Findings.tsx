import { Box, makeStyles } from "@material-ui/core";
import { FindingsHeader } from "../../../../../../elements";
import AppTypography from "../../../../../../elements/Typography";
import BoxIcon from "../../../../../../elements/icons/Box";

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
    noOrderBox: {
      height: "-webkit-fill-available",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    orderText: { fontSize: 20, fontWeight: 500, margin: "8px 0" },
    createOrderText: {
      color: palette.all.blue,
      fontSize: 14,
      fontWeight: 500,
      cursor: "pointer",
    },
  }),
  { index: 1 }
);

const Findings = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <FindingsHeader />
      <Box className={classes.noOrderBox}>
        <BoxIcon />
        <AppTypography className={classes.orderText}>
          No Order Yet
        </AppTypography>
        <AppTypography className={classes.createOrderText}>
          Create An Order
        </AppTypography>
      </Box>{" "}
    </Box>
  );
};

export default Findings;
