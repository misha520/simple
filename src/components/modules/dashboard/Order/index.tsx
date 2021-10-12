import { useState } from "react";

import {
  Box,
  AppBar,
  Tabs,
  Tab,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import MoreIcon from "../../../elements/icons/MoreIcon";
import { useStyles } from "./styles";
import { useScreenSizeDown } from "../../../../hooks";

const chartData = {
  labels: [
    ["VOA", "Orders"],
    ["VOA", "Orders"],
    ["Flood"],
    ["DRIVE"],
    ["SSA-89"],
    ["4506C"],
    ["Credit"],
    ["Title"],
    ["Appraisal"],
    ["Address", "Verification"],
    ["Property", "Insurance"],
    ["Mortgage", "Insurance"],
  ],
  datasets: [
    {
      label: "Agent performance",
      data: [70, 90, 35, 65, 50, 90, 100, 70, 30, 60, 80, 100],
      backgroundColor: [
        "#29C9C1",
        "#8950FC",
        "#CF50FC",
        "#F62064",
        "#29C9C1",
        "#FFC02B",
        "#35B6FE",
        "#8950FC",
        "#FFC02B",
        "#2FBD57",
        "#F62064",
        "#29C9C1",
      ],
      borderWidth: 0,
      borderRadius: 8,
    },
  ],
};

const Order = () => {
  const classes = useStyles();
  const isSmallSizeDown = useScreenSizeDown("sm");

  const [valueTab, setValueTab] = useState(0);
  const [value, setValue] = useState("daily");

  const handleTabs = (_event: any, newValue: number) => {
    setValueTab(newValue);
  };

  const handleSelect = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <Box className={classes.orderContainer}>
      <Box className={classes.orderHeader}>
        <Box className={classes.headerText}>
          <span className={classes.headerTitle}>Orders</span>
          <span className={classes.headerSubtitle}>
            Lorem ipsum dolor sit amet, consectetur
          </span>
        </Box>
        <Box className={classes.buttonGroup}>
          <Box className={classes.tabsButton}>
            {isSmallSizeDown ? (
              <FormControl variant="outlined">
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={value}
                  onChange={handleSelect}
                  classes={{
                    root: classes.selectItemGroup,
                  }}
                >
                  <MenuItem value="daily">Daily</MenuItem>
                </Select>
              </FormControl>
            ) : (
              <AppBar position="static">
                <Tabs
                  value={valueTab}
                  onChange={handleTabs}
                  aria-label="simple tabs example"
                  classes={{ indicator: classes.indicator }}
                >
                  <Tab
                    classes={{
                      root: classes.tab,
                      selected: classes.tabSelected,
                    }}
                    label="Monthly"
                  />
                  <Tab
                    classes={{
                      root: classes.tab,
                      selected: classes.tabSelected,
                    }}
                    label="Daily"
                  />
                  <Tab
                    classes={{
                      root: classes.tab,
                      selected: classes.tabSelected,
                    }}
                    label="Today"
                  />
                </Tabs>
              </AppBar>
            )}
          </Box>
          {!isSmallSizeDown && (
            <Box className={classes.moreIcon}>
              <MoreIcon />
            </Box>
          )}
        </Box>
      </Box>
      <Box className={classes.chart}>
        <Box>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  callbacks: {
                    labelColor: () => {
                      return {
                        borderColor: "rgb(0, 0, 255)",
                        backgroundColor: "rgb(255, 0, 0)",
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderRadius: 2,
                      };
                    },
                    labelTextColor: () => {
                      return "#543453";
                    },
                  },
                  title: "52",
                },
              },
            }}
            height={340}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Order;
