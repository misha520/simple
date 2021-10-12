import { Box, Tab, Tabs } from "@material-ui/core";
import { Children, useState } from "react";
import PersonalTabPanel from "./Personal";
import PropertyTabPanel from "./Property";
import LoanDetailsTabPanel from "./LoanDetails";
import TabPanel from "../../../elements/TabPanel";
import DropDown from "../../../elements/DropDown";
import { useScreenSizeDown } from "../../../../hooks";
import { useStyles } from "./styles";

const tabs = ["Personal", "Property", "Loan Details"];
const tabPanels = [PersonalTabPanel, PropertyTabPanel, LoanDetailsTabPanel];

const UserInfoTab = () => {
  const [value, setValue] = useState(0);
  const isSmallSizeDown = useScreenSizeDown("sm");
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {isSmallSizeDown ? (
        <DropDown label={tabs} value={value} setValue={setValue} />
      ) : (
        <Tabs
          className={classes.tabs}
          indicatorColor="primary"
          TabIndicatorProps={{
            style: {
              height: "6px",
              borderRadius: "4px",
            },
          }}
          textColor="primary"
          onChange={(_, value) => setValue(value)}
          value={value}
        >
          {Children.toArray(
            tabs.map((label, index) => (
              <Tab
                key={index}
                value={index}
                className={classes.tab}
                label={label}
              />
            ))
          )}
        </Tabs>
      )}

      {tabPanels.map((Component, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Component />
        </TabPanel>
      ))}
    </Box>
  );
};

export default UserInfoTab;
