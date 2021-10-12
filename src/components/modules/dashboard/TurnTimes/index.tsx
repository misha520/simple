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
import { useStyles } from "./styles";
import TurnTimesTable from "./TurnTimesTable";
import { useScreenSizeDown } from "../../../../hooks";
import MoreIcon from "../../../elements/icons/MoreIcon";

const TurnTimes = () => {
  const classes = useStyles();
  const isSmallSizeDown = useScreenSizeDown("md");
  const isMobile = useScreenSizeDown("xs");

  const [valueGroup, setValueGroup] = useState("group");
  const [valueTurnTimes, setValueTurnTimes] = useState("rating");
  const [valueTab, setValueTab] = useState("year");

  const handleGroup = (event: any) => {
    setValueGroup(event.target.value);
  };

  const handleTurnTimes = (event: any) => {
    setValueTurnTimes(event.target.value);
  };

  const handleTabsOnSmallSize = (event: any) => {
    setValueTab(event.target.value);
  };

  const handleTabs = (_event: any, newValue: string) => {
    setValueTab(newValue);
  };

  const optionsTurnTimes = [
    { value: "text1", title: "Text Here" },
    { value: "text2", title: "Text Here" },
    { value: "rating", title: "Rating" },
    { value: "text3", title: "Text Here" },
  ];

  const optionTimes = [
    { value: "year", title: "Yearly" },
    { value: "month", title: "Monthly" },
    { value: "week", title: "Weekly" },
  ];

  return (
    <Box className={classes.turnTimesContainer}>
      <Box className={classes.turnTimesHeader}>
        <Box className={classes.headerText}>
          <span className={classes.headerTitle}>Turn Times</span>
          <span className={classes.headerSubtitle}>
            Lorem ipsum dolor sit amet, consectetur
          </span>
          {isMobile && <MoreIcon />}
        </Box>
        <Box className={classes.buttonGroup}>
          <Box className={classes.selectGroup}>
            <FormControl variant="outlined">
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={valueGroup}
                onChange={handleGroup}
                classes={{
                  root: classes.selectItemGroup,
                }}
              >
                <MenuItem value="group">Group</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined">
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={valueTurnTimes}
                onChange={handleTurnTimes}
                classes={{
                  root: classes.select,
                }}
              >
                {optionsTurnTimes.map((option, index) => (
                  <MenuItem
                    key={index}
                    classes={{
                      root: classes.itemDropdown,
                      selected: classes.itemSelected,
                    }}
                    value={option.value}
                  >
                    {option.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {isSmallSizeDown && (
              <FormControl variant="outlined">
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={valueTab}
                  onChange={handleTabsOnSmallSize}
                  classes={{
                    root: classes.select,
                  }}
                >
                  {optionTimes.map((option, index) => (
                    <MenuItem
                      key={index}
                      classes={{
                        root: classes.itemDropdown,
                        selected: classes.itemSelected,
                      }}
                      value={option.value}
                    >
                      {option.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Box>
          {!isSmallSizeDown && (
            <Box className={classes.tabsButton}>
              <AppBar position="static">
                <Tabs
                  value={valueTab}
                  onChange={handleTabs}
                  aria-label="simple tabs example"
                  classes={{ indicator: classes.indicator }}
                >
                  {optionTimes.map((option, index) => (
                    <Tab
                      key={index}
                      classes={{
                        root: classes.tab,
                        selected: classes.tabSelected,
                      }}
                      value={option.value}
                      label={option.title}
                    />
                  ))}
                </Tabs>
              </AppBar>
            </Box>
          )}
        </Box>
      </Box>
      <Box className={classes.turnTimesTable}>
        <Box>
          <TurnTimesTable />
        </Box>
      </Box>
    </Box>
  );
};

export default TurnTimes;
