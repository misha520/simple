import { Box, IconButton, makeStyles } from "@material-ui/core";
import RefreshIcon from "../icons/Refresh";
import ArrowDownIcon from "../icons/ArrowDown";
import AppTypography from "../Typography";
import AppButton from "../Button";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    padding: "0 0 16px 0",
  },
  textGroup: {
    display: "flex",
    flexDirection: "column",
    padding: "0 16px 16px 0",
    [breakpoints.down(480)]: {
      width: "100%",
    },
  },
  btnGroup: {
    display: "flex",
    gap: "8px",
  },
  btn: {
    borderRadius: "10px",
    [breakpoints.down(480)]: {
      background: "white",
      minWidth: 120,
      padding: "7px 12px",
    },
  },
  title: {
    alignItems: "center",
    display: "flex",
    gap: "12px",
    justifyContent: "space-between",
  },
}));

const FindingsHeader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.textGroup}>
        <AppTypography className={classes.title} fontSize={20} fontWeight={600}>
          Findings
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </AppTypography>
        <AppTypography color="textSecondary" fontSize={13} fontWeight={400}>
          Last run on 4/16/2021
        </AppTypography>
      </Box>
      <Box className={classes.btnGroup}>
        <AppButton className={classes.btn} variant="outlined">
          Review viewer
        </AppButton>
        <AppButton
          className={classes.btn}
          endIcon={<ArrowDownIcon size="small" />}
          variant="outlined"
        >
          Filter
        </AppButton>
      </Box>
    </Box>
  );
};

export default FindingsHeader;
