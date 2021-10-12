import { Box, makeStyles } from "@material-ui/core";
import * as React from "react";
import Avatar from "../../../elements/Avatar";
import AppTypography from "../../../elements/Typography";

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    text: {
      fontSize: "14px",
      fontWeight: 500,
      marginLeft: "10px",
      [breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  }),
  { index: 1 }
);

const OwnersProfile: React.FC = () => {
  const classes = useStyles();

  return (
    <Box maxWidth="155px" display="flex" alignItems="center">
      <Avatar img="/images/woman(9).png" />
      <Box>
        <AppTypography className={classes.text}>Louis Anderson</AppTypography>
        <AppTypography className={classes.text} color="textSecondary" style={{ fontSize: "13px" }}>
          Processor
        </AppTypography>
      </Box>
    </Box>
  );
};

export default OwnersProfile;
