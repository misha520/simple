import { Box, makeStyles } from "@material-ui/core";
import { useScreenSizeDown } from "../../../../hooks";
import AppTypography from "../../../elements/Typography";
import { breakpointValues } from "../../../foundation/breakpoints";
import { allColors } from "../../../foundation/palette";
import OwnerDetailsPieChart from "./PieChart";
import OwnerDetailsStatus from "./Status";

const useStyles = makeStyles(({ breakpoints, palette, shape }) => ({
  root: {
    background: palette.background.paper,
    borderRadius: shape.borderRadius,
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 24px ",
    width: "100%",
    height: "100%",
    [breakpoints.down("xl")]: {
      padding: "8px 6px 8px 12px",
    },
    [breakpoints.up(1920)]: {
      width: "520px",
      height: "190px",
      padding: "24px",
    },
    [breakpoints.down(480)]: {
      flexDirection: "column",
      padding: "8px 16px 16px",
    },
  },
  detailsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  textWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
  },
  chart: {
    [breakpoints.down(480)]: {
      width: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      paddingTop: 16,
      "& > .OwnerDetailsStatus": {
        position: "absolute",
        top: -18,
        right: 0,
      },
    },
  },
}));

const OwnerDetails = () => {
  const classes = useStyles();

  const isLargerSizeDown = useScreenSizeDown(breakpointValues.xl);
  return (
    <Box className={classes.root}>
      <Box className={classes.detailsWrapper}>
        <AppTypography
          style={{ marginBottom: "4px" }}
          fontWeight={700}
          fontSize={isLargerSizeDown ? 18 : 24}
        >
          John Homeowner
        </AppTypography>
        <AppTypography color="textSecondary" fontSize={13} fontWeight={400}>
          7603 S. Davis Peak, Littleton, CO 80127
        </AppTypography>
        <Box className={classes.textWrapper}>
          <AppTypography
            fontWeight={600}
            fontSize={13}
            style={{ whiteSpace: "nowrap" }}
          >
            Status :
          </AppTypography>
          <AppTypography fontWeight={400} color="textSecondary" fontSize={13}>
            Application / Submitted
          </AppTypography>
        </Box>
        <Box className={classes.textWrapper}>
          <AppTypography fontWeight={600} fontSize={13}>
            Loan :
          </AppTypography>
          <AppTypography fontWeight={400} color="textSecondary" fontSize={13}>
            Test4-0322292
          </AppTypography>
        </Box>
        <Box className={classes.textWrapper}>
          <AppTypography fontWeight={600} fontSize={13}>
            Closing :
          </AppTypography>
          <AppTypography
            fontWeight={400}
            htmlColor={allColors.red}
            fontSize={13}
          >
            20 April 2021
          </AppTypography>
        </Box>
      </Box>
      <Box className={classes.chart}>
        <OwnerDetailsStatus percent={70} />
        <OwnerDetailsPieChart percent={70} />
      </Box>
    </Box>
  );
};

export default OwnerDetails;
