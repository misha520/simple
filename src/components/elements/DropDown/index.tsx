import { useState } from "react";
import * as React from "react";
import { Box, Tab, Tabs } from "@material-ui/core";
import ArrowDownIcon from "../icons/ArrowDown";
import { useStyles } from "./styles";

type DropDownT = {
  label: Array<string>;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const DropDown = ({ label, value, setValue }: DropDownT) => {
  const [showMenu, setShowMenu] = useState(false);
  const classes = useStyles();
  const handleClick = () => setShowMenu(!showMenu);
  const handleChange = (val: number) => {
    setValue(val);
    setTimeout(() => setShowMenu(!showMenu), 250);
  };
  return (
    <Box className={classes.dropDown}>
      <Box className={classes.label} onClick={handleClick}>
        <Box className={classes.labelWrapper}>
          {label[value]}
          {label[value] === "Alerts" && (
            <span className={classes.elipse}>21</span>
          )}
          <ArrowDownIcon />
        </Box>
        <Box className={classes.underline} />
      </Box>
      {showMenu && (
        <>
          <Box className={classes.menu}>
            <Tabs
              className={classes.tabs}
              textColor="primary"
              orientation="vertical"
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
              onChange={(_, value) => handleChange(value)}
              value={value}
            >
              {label.map((val: string, index: number) => (
                <Tab
                  key={index}
                  className={classes.tab}
                  value={index}
                  label={val}
                />
              ))}
            </Tabs>
          </Box>
          <Box
            className={classes.overlay}
            onClick={() => setShowMenu(!showMenu)}
          />
        </>
      )}
    </Box>
  );
};

export default DropDown;
