import { useState } from "react";
import * as React from "react";
import { Box, Tabs } from "@material-ui/core";
import TabButton from "../TabButton";
import ArrowDownIcon from "../icons/ArrowDown";
import EllipseIcon from "../icons/Ellipse";
import { useStyles } from "./styles";

type DropDown2T = {
  label: Array<{ label: string; fill: string }>;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const DropDown2 = ({ label, value, setValue }: DropDown2T) => {
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
          {label[value].label}
          <EllipseIcon radius={5} fill={label[value].fill} />
          <Box className={classes.arrowIcon}>
            <ArrowDownIcon />
          </Box>
        </Box>
      </Box>
      {showMenu && (
        <>
          <Box className={classes.menu}>
            {
              <Tabs
                className={classes.tabs}
                TabIndicatorProps={{ style: { display: "none" } }}
                orientation="vertical"
                value={value}
              >
                {label.map(
                  (
                    { label, fill }: { label: string; fill: string },
                    index: number
                  ) => (
                    <div key={index} onClick={() => handleChange(index)}>
                      <TabButton
                        label={label}
                        index={index}
                        fill={fill}
                        selected={value === index}
                      />
                    </div>
                  )
                )}
              </Tabs>
            }
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

export default DropDown2;
