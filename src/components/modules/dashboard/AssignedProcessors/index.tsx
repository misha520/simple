import { Box } from "@material-ui/core";
import SelectOptions from "../../../elements/Select";
import { Doughnut } from "react-chartjs-2";
import DotChart from "./DotChart";

import { useStyles } from "./styles";
import { useState } from "react";

const data = {
  labels: [
    "Rob Hanlen",
    "Joyce Marie",
    "Robert Join",
    "Wesely Aaron",
    "Case Joe",
    "Billi West",
    "Matt Hawkes",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100, 20, 10, 70, 100],
      backgroundColor: [
        "#8950FC",
        "#29C9C1",
        "#FFC240",
        "#F64E60",
        "#4EA5F6",
        "#DE4EF6",
        "#4EE2F6",
      ],
      hoverOffset: 50,
    },
  ],
};

const optionsChart = {
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: 30,
  },
};

const AssignedProcessors = () => {
  const classes = useStyles();
  const [value, setValue] = useState("processors");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const options = [
    {
      value: "processors",
      title: "Processors",
    },
    {
      value: "officers",
      title: "Loan Officers",
    },
    {
      value: "underwriters",
      title: "Underwriters",
    },
  ];

  const getTotal = (data: Array<number>) => {
    let total = 0;
    data.map((d: number) => (total += d));
    return total;
  };

  return (
    <Box className={classes.assignedProcessorsContainer}>
      <Box className={classes.header}>
        <Box className={classes.headerTitle}>
          <span className={classes.title}>Assigned Processors</span>
          <span className={classes.subtitle}>
            Lorem ipsum dolor sit amet, consectetur
          </span>
        </Box>
        <Box>
          <SelectOptions
            name="processors"
            options={options}
            value={value}
            onChange={handleChange}
          />
        </Box>
      </Box>
      <Box className={classes.chart}>
        <Box className={classes.labelChart}>
          {data.labels.map((label, index) => (
            <Box className={classes.labelGroup} key={index}>
              <Box className={classes.label}>
                <DotChart color={data.datasets[0].backgroundColor[index]} />
                <span>{label}</span>
              </Box>
              <span className={classes.data}>
                {data.datasets[0].data[index]}
              </span>
            </Box>
          ))}
        </Box>
        <Box className={classes.doughnutChart}>
          <Box>
            <Doughnut
              data={data}
              options={optionsChart}
              height={350}
              width={350}
            />
          </Box>
          <Box className={classes.total}>
            <span className={classes.totalText}>Total</span>
            <span className={classes.totalNumber}>
              {getTotal(data.datasets[0].data)}
            </span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AssignedProcessors;
