import { Tab, Tabs, Box } from "@material-ui/core";
import { useState } from "react";
import * as React from "react";
import { useScreenSizeDown } from "../../../../hooks";
// import MoreVerticalIcon from "../../../elements/icons/MoreVertical";
import AlertsTabPanel from "./Alerts";
import NotesTabPanel from "./Notes";
import TimelineTabPanel from "./Timeline";
import TabPanel from "../../../elements/TabPanel";
import DropDown from "../../../elements/DropDown";
import { useStyles } from "./styles";

const tabs = ["Alerts", "Timeline", "Notes"];

const tabPanels = [AlertsTabPanel, TimelineTabPanel, NotesTabPanel];

const NotificationTab: React.FC = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const isSmallSizeDown = useScreenSizeDown("sm");

  return (
    <Box className={classes.root}>
      {isSmallSizeDown ? (
        <DropDown label={tabs} value={value} setValue={setValue} />
      ) : (
        <Tabs
          className={classes.tabs}
          indicatorColor="primary"
          textColor="primary"
          onChange={(_, value) => setValue(value)}
          value={value}
          TabIndicatorProps={{
            style: {
              height: "6px",
              borderRadius: "4px",
            },
          }}
        >
          {React.Children.toArray(
            tabs.map((label, index) => {
              let icon = <span></span>;
              if (index === 0) {
                icon = <span className={classes.elipse}>21</span>;
              }
              return (
                <Tab
                  key={index}
                  value={index}
                  className={classes.tab}
                  label={label}
                  icon={icon}
                ></Tab>
              );
            })
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

export default NotificationTab;
