import * as React from "react";

import { Box } from "@material-ui/core";
import { useStyles } from "./styles";
import TooltipTop from "../../../elements/Tooltip";

export interface FileProcessingProps {
  percent?: number;
}

const FileProcessing: React.FC<FileProcessingProps> = ({ percent }) => {
  const classes = useStyles({ percent });

  return (
    <Box className={classes.processContainer}>
      <TooltipTop title="Tooltip text goes here">
        <Box width="100%">
          <span className={classes.title}>Files Processing</span>
          <Box className={classes.processText}>
            <Box className={classes.processingContainer}>
              <Box className={classes.processing}></Box>
              <Box className={classes.processingAvailable}></Box>
            </Box>
            <Box className={classes.processingNumber}>
              <span className={classes.processNumber}>24</span>
            </Box>
          </Box>
          <span className={classes.subtitle}>
            <span className={classes.numberSubtitle}>76</span> left from target
          </span>
        </Box>
      </TooltipTop>
    </Box>
  );
};

export default FileProcessing;
