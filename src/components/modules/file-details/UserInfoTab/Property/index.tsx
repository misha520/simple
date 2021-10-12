import { useState } from "react";
import { Tabs, Box } from "@material-ui/core";
import { allColors } from "../../../../foundation/palette";
import TabPanel from "../../../../elements/TabPanel";
import TabButton from "../../../../elements/TabButton";
import DropDown2 from "../../../../elements/DropDown2";
import { useScreenSizeDown } from "../../../../../hooks";
import { General, Appraisal, Title, Flood, Insurance } from "./tabPanels";
import { useStyles } from "./styles";

const tabs = [
  {
    label: "General",
    fill: allColors.blue,
  },
  {
    label: "Appraisal",
    fill: allColors.pest,
  },
  {
    label: "Title",
    fill: allColors.blue,
  },
  {
    label: "Flood",
    fill: allColors.red,
  },
  {
    label: "Insurance",
    fill: allColors.yellow,
  },
];
const tabPanels = [General, Appraisal, Title, Flood, Insurance];

const PropertyTabPanel = () => {
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
          {tabs.map(({ label, fill }, index) => (
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
          ))}
        </Tabs>
      )}

      {tabPanels.map((Component, index) => (
        <TabPanel key={index} index={index} value={value}>
          <Component />
        </TabPanel>
      ))}
    </div>
  );
};

export default PropertyTabPanel;
