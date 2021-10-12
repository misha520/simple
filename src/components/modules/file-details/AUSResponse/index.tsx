import { Box } from "@material-ui/core";
import * as React from "react";
import CheckWithBackgroundIcon from "../../../elements/icons/CheckWithBackground";

import RefreshIcon from "../../../elements/icons/Refresh";
import AppTypography from "../../../elements/Typography";
import { allColors } from "../../../foundation/palette";
import { useStyles } from "./styles";

const AUSResponse: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box marginBottom="16px" className={classes.flexWrapper}>
        <AppTypography fontSize={24} fontWeight={700}>
          AUS Response
        </AppTypography>
        <RefreshIcon />
      </Box>

      <AppTypography className={classes.status} fontSize={22} fontWeight={500}>
        Approve/Eligible <CheckWithBackgroundIcon fill={allColors.green} />
      </AppTypography>
      <Box style={{ display: "flex", gap: "12px", marginBottom: "11px" }}>
        <Box className={classes.textWrapper}>
          <AppTypography fontWeight={600} fontSize={13}>
            Date :
          </AppTypography>
          <AppTypography fontWeight={400} color="textSecondary" fontSize={13}>
            27/02/21
          </AppTypography>
        </Box>
        <Box className={classes.textWrapper}>
          <AppTypography fontWeight={600} fontSize={13}>
            Time :
          </AppTypography>
          <AppTypography fontWeight={400} color="textSecondary" fontSize={13}>
            4.30 PM
          </AppTypography>
        </Box>
      </Box>
      <Box className={classes.textWrapper}>
        <AppTypography fontWeight={600} fontSize={13}>
          Type :
        </AppTypography>
        <AppTypography fontWeight={400} color="textSecondary" fontSize={13}>
          Desktop Underrider
        </AppTypography>
      </Box>
    </Box>
  );
};

export default AUSResponse;
