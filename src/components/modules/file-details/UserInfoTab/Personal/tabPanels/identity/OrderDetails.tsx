import { Box, makeStyles } from "@material-ui/core";
import BoxIcon from "../../../../../../elements/icons/Box";
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
    btn: {
      borderRadius: "3px",
      fontSize: "13px",
      fontWeight: 600,
      lineHeight: "19px",
      height: "30px",
      padding: "5px 14px",
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
      <Box className={classes.noOrderBox}>
        <BoxIcon />
        <AppTypography className={classes.orderText}>
          No Order Yet
        </AppTypography>
        <AppTypography className={classes.createOrderText}>
          Create An Order
        </AppTypography>
      </Box>
    </Box>
  );
};

export default OrderDetails;
