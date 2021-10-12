import * as React from "react";

import { Box } from "@material-ui/core";
import ReadyProcessImg from "../../../../components/elements/icons/ReadyProcess";
import { useStyles } from "./styles";
import { FileProcessingProps } from "./FileProcessing";
import TooltipTop from "../../../elements/Tooltip";

const ReadyToProcess: React.FC<FileProcessingProps> = ({ percent }) => {
  const classes = useStyles({ percent });

  return (
    <Box className={classes.processContainer}>
      <Box className={classes.processText}>
        <span className={classes.title}>Ready to Process</span>
        <TooltipTop title="Tooltip text goes here      ">
          <Box className={classes.numberReady}>
            <span
              className={classes.processNumber}
              style={{ paddingTop: "16px" }}
            >
              52
            </span>
            <Box className={classes.readyProcessImg}>
              <ReadyProcessImg />
            </Box>
          </Box>
        </TooltipTop>
      </Box>
      <span className={classes.subtitle}>
        <span className={classes.percentSubtitle}>+2% </span> than last month
      </span>
    </Box>
  );
};

export default ReadyToProcess;
