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
      <Box className={classes.coverText}>
        <span className={classes.text}>{percent}</span>
        <span className={classes.text}>Progress</span>
      </Box>
      <Box className={classes.processingBg}>
        <Box className={classes.processActive}></Box>
      </Box>
    </Box>
  );
};

export default Processing;
