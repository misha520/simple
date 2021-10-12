import * as React from "react";
import { Doughnut } from "react-chartjs-2";

import { Box } from "@material-ui/core";
import ArrowUpIcon from "../../../elements/icons/ArrowUp";
import { allColors } from "../../../foundation/palette";
import { useStyles } from "./styles";
import { FileProcessingProps } from "./FileProcessing";
import { useScreenSizeDown } from "../../../../hooks";

const FinishProcessing: React.FC<FileProcessingProps> = ({ percent }) => {
  const classes = useStyles({ percent });

  const chartData = [76, 24];
  const showData = chartData[0] + "%";
  const isMobile = useScreenSizeDown("xs");

  const options = {
    cutout: `${isMobile ? 18 : 31}`,
    legend: {
      display: false,
      position: "bottom",
      labels: {
        fontSize: 18,
        fontColor: "#6D7278",
        fontFamily: "kanit light",
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  const data = {
    datasets: [
      {
        data: chartData,
        backgroundColor: ["#2FBD57", "#f0eff0"],
      },
    ],
    text: showData,
  };

  return (
    <Box className={classes.processContainer}>
      <span className={classes.title}>Finished Processing</span>
      <Box className={classes.processText}>
        <Box className={classes.numberGroup}>
          <span className={classes.processNumber}>85</span>
          <Box className={classes.percentGroup}>
            <ArrowUpIcon color={allColors.green} />
            <span className={classes.percentFinished}>+10%</span>
          </Box>
        </Box>
        <Box className={classes.doughnutChart}>
          <Doughnut data={data} options={options} height={75} width={75} />
          <span className={classes.percent}>{chartData[0]}%</span>
        </Box>
      </Box>
    </Box>
  );
};

export default FinishProcessing;
