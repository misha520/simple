import * as React from "react";

import { Box } from "@material-ui/core";

import { useStyles } from "./styles";

export interface ProcessingProps {
  color: string;
  percent: string;
}

const Processing: React.FC<ProcessingProps> = ({ color, percent }) => {
  const classes = useStyles({ color, percent });

  return (
    <Box className={classes.process}>
      <span>{percent}</span>
      <Box className={classes.processingBg}>
        <Box className={classes.processActive}></Box>
      </Box>
    </Box>
  );
};

export default Processing;
