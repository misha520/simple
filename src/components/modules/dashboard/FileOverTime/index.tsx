import { useState } from "react";

import { Box, Button, FormControl } from "@material-ui/core";
import SelectOptions from "../../../elements/Select";
import OverTimeIcon from "../../../elements/icons/OverTimeIcon";
import { Line } from "react-chartjs-2";
import { useScreenSizeDown } from "../../../../hooks";

import { useStyles } from "./styles";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.5,
      borderColor: "#F62064",
      data: [200, 400, 250, 800, 200, 250, 950, 400, 300, 100, 350, 400],
    },
  ],
};

const optionsChart = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const FileOverTime = () => {
  const classes = useStyles();
  const isSmallSizeDown = useScreenSizeDown("sm");

  const [value, setValue] = useState("month");
  const [valueButton, setValueButton] = useState("submitted");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  const handleChangeButton = (event: any) => {
    setValueButton(event.target.value);
  };

  const options = [
    {
      value: "month",
      title: "Monthly",
    },
    {
      value: "day",
      title: "Last 60 days",
    },

    {
      value: "year",
      title: "Last year",
    },
  ];
  const optionsButton = [
    {
      value: "submitted",
      title: "Submitted",
    },
    {
      value: "processing",
      title: "Processing",
    },

    {
      value: "actions",
      title: "Actions",
    },
    {
      value: "finished",
      title: "Finished",
    },
  ];

  return (
    <Box className={classes.overTimeContainer}>
      <Box className={classes.header}>
        <Box className={classes.headerTitle}>
          <span className={classes.title}>Files Over Time</span>
          <span className={classes.subtitle}>
            Lorem ipsum dolor sit amet, consectetur
          </span>
        </Box>
        <Box>
          <SelectOptions
            name="fileOverTime"
            options={options}
            value={value}
            onChange={handleChange}
          />
        </Box>
      </Box>
      <Box className={classes.buttonGroup}>
        <Box className={classes.textIcon}>
          <OverTimeIcon />
          <Box className={classes.textGroup}>
            <span className={classes.titleIcon}>Files Processed</span>
            <span className={classes.numberIcon}>1850</span>
          </Box>
        </Box>
        {isSmallSizeDown ? (
          <FormControl variant="outlined">
            <SelectOptions
              name="fileOverTimeButton"
              options={optionsButton}
              value={valueButton}
              onChange={handleChangeButton}
            />
          </FormControl>
        ) : (
          <Box className={classes.button}>
            <Button variant="contained">Submitted</Button>
            <Button variant="contained">Processing</Button>
            <Button variant="contained">Actions</Button>
            <Button variant="contained">Finished</Button>
          </Box>
        )}
      </Box>
      <Box className={classes.chart}>
        <Box>
          <Line data={data} options={optionsChart} />
        </Box>
      </Box>
    </Box>
  );
};

export default FileOverTime;
