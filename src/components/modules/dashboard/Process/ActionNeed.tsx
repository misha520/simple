import * as React from "react";

import { Box } from "@material-ui/core";
import ArrowUpIcon from "../../../elements/icons/ArrowUp";
import ActionNeedImg from "../../../elements/icons/ActionNeedImg";
import { useStyles } from "./styles";
import { FileProcessingProps } from "./FileProcessing";

const ActionNeed: React.FC<FileProcessingProps> = ({ percent }) => {
  const classes = useStyles({ percent });

  return (
    <Box className={classes.processContainer}>
      <Box className={classes.processText}>
        <span className={classes.title}>Action Needed</span>
        <Box className={classes.numberGroup}>
          <span className={classes.processNumber}>68</span>
          <Box className={classes.percentGroup}>
            <ArrowUpIcon />
            <span className={classes.percentNeed}>+0.5%</span>
          </Box>
        </Box>
      </Box>
      <Box className={classes.needImg}>
        <ActionNeedImg />
      </Box>
    </Box>
  );
};

export default ActionNeed;
