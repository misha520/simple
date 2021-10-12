import { Children, useState } from "react";
import { Tabs, Box } from "@material-ui/core";
import { allColors } from "../../../../foundation/palette";
import TabPanel from "../../../../elements/TabPanel";
import TabButton from "../../../../elements/TabButton";
import DropDown2 from "../../../../elements/DropDown2";
import { useScreenSizeDown } from "../../../../../hooks";
import {
  Application,
  Financials,
  ImportantDates,
  Documents,
  History,
} from "./tabPanels";
import { useStyles } from "./styles";

const tabs = [
  {
    label: "Application",
    fill: allColors.blue,
  },
  {
    label: "Financials",
    fill: allColors.pest,
  },
  {
    label: "Important Dates",
    fill: allColors.blue,
  },
  {
    label: "Documents",
    fill: allColors.red,
  },
  {
    label: "History",
    fill: allColors.yellow,
  },
];
const tabPanels = [Application, Financials, ImportantDates, Documents, History];

const LoanDetailsTabPanel = () => {
  const [value, setValue] = useState(0);
  const isSmallSizeDown = useScreenSizeDown("sm");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isSmallSizeDown ? (
        <DropDown2 label={tabs} value={value} setValue={setValue} />
      ) : (
        <Tabs
          className={classes.tabs}
          TabIndicatorProps={{ style: { height: 0 } }}
          value={value}
        >
          {Children.toArray(
            tabs.map(({ label, fill }, index) => (
              <Box
                key={index}
                width="100%"
                minWidth="0"
                onClick={() => setValue(index)}
              >
                <TabButton
                  label={label}
                  index={index}
                  fill={fill}
                  selected={value === index}
                />
              </Box>
            ))
          )}
        </Tabs>
      )}
      {tabPanels.map((Component, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Component />
        </TabPanel>
      ))}
    </div>
  );
};

export default LoanDetailsTabPanel;
