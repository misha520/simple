import { Tabs, Box } from "@material-ui/core";
import { Children, useState } from "react";
import TabPanel from "../../../../elements/TabPanel";
import TabButton from "../../../../elements/TabButton";
import DropDown2 from "../../../../elements/DropDown2";
import { useScreenSizeDown } from "../../../../../hooks";
import { allColors } from "../../../../foundation/palette";
import { Identity, Credit, Voa, Voe, Voi, Fraud } from "./tabPanels";
import { useStyles } from "./styles";

const tabs = [
  {
    label: "Identity",
    fill: allColors.blue,
  },
  {
    label: "Credit",
    fill: allColors.pest,
  },
  {
    label: "VOA",
    fill: allColors.blue,
  },
  {
    label: "VOIE",
    fill: allColors.red,
  },
  {
    label: "TRV",
    fill: allColors.yellow,
  },
  {
    label: "Fraud",
    fill: allColors.gray,
  },
];
const tabPanels = [Identity, Credit, Voa, Voe, Voi, Fraud];

const PersonalTabPanel = () => {
  const [value, setValue] = useState(0);
  const isSmallSizeDown = useScreenSizeDown("sm");
  const classes = useStyles();

  return (
    <>
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
          <TabPanel index={index} value={value}>
            <Component />
          </TabPanel>
        ))}
      </div>
    </>
  );
};

export default PersonalTabPanel;
