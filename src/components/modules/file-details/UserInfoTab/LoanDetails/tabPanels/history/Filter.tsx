import { makeStyles, Box } from "@material-ui/core";
import AppTypography from "../../../../../../elements/Typography";
import AppButton from "../../../../../../elements/Button";
import FilterIcon from "../../../../../../elements/icons/Filter";
import ArrowDownIcon from "../../../../../../elements/icons/ArrowDown";
import AppDivider from "../../../../../../elements/Divider";
import FilterButtons from "./FilterButtons";
import { useScreenSizeDown } from "../../../../../../../hooks";

const useStyles = makeStyles(({ breakpoints }) => ({
  filterWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    width: "100%",
    [breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      gap: "16px",
      padding: "0",
    },
  },
  filterBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "14px",
    },
  },

  exportBtn: {
    height: "48px",
    width: "147px",
    fontSize: "14px",
    fontWeight: 500,
    marginLeft: "8px",
    background: "#fafafa",
    borderRadius: "8px",
    wordSpacing: "13px",
    [breakpoints.down("sm")]: {
      height: "40px",
      width: "120px",
      background: "#f0f0f0",
      fontSize: "12px",
    },
  },
  dateText: {
    opacity: "0.5",
    fontSize: "14px",
    fontWeight: 500,
    whiteSpace: "nowrap",
  },

  icon: {
    height: "10px",
  },
  btnWrapper: {
    whiteSpace: "nowrap",
  },
}));

const Filter = () => {
  const classes = useStyles();
  const isSmallSizeDown = useScreenSizeDown("sm");

  return (
    <Box className={classes.filterWrapper}>
      <FilterButtons />
      {isSmallSizeDown && (
        <AppDivider orientation="horizontal" style={{ width: "100%" }} />
      )}
      <Box className={classes.filterBox}>
        <AppTypography className={classes.dateText}>
          Last Updated : 23rd March
        </AppTypography>
        <Box className={classes.btnWrapper}>
          <AppButton className={classes.exportBtn}>Export</AppButton>
          <AppButton
            className={classes.exportBtn}
            startIcon={
              <FilterIcon size={isSmallSizeDown ? "small" : "large"} />
            }
            endIcon={
              <ArrowDownIcon size={isSmallSizeDown ? "small" : "large"} />
            }
          >
            Filter
          </AppButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Filter;
