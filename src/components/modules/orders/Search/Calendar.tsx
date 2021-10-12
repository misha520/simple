import "date-fns";
import { useState } from "react";
import { Box, FormControl, MenuItem, Select } from "@material-ui/core";
import { useStyles } from "./styles";
import AppButton from "../../../elements/Button";
import CalendarIcon from "../../../elements/icons/Calendar";
import ArrowDownIcon from "../../../elements/icons/ArrowDown";
import { useScreenSizeDown } from "../../../../hooks";
import CalendarDropdown from "../../../elements/dropDowns/Calendar";
import VOAOrderIcon from "../../../elements/icons/VOAOrder";
import CustomRPAIcon from "../../../elements/icons/CustomRPA";
import DriveReportIcon from "../../../elements/icons/DriveReport";
import FloodReportIcon from "../../../elements/icons/FloodReport";
import VOEOrderIcon from "../../../elements/icons/VOEOrders";
import IDIcon from "../../../elements/icons/ID";
import DelayIcon from "../../../elements/icons/Delay";
import VerifyIcon from "../../../elements/icons/Verify";

const Calender = () => {
  const classes = useStyles();
  const [type, setType] = useState("Custom RPA");
  const [openDropdown, setOpenDropdown] = useState(false);
  const isSmallSizeDown = useScreenSizeDown(1000);

  const handleType = (event: any) => {
    setType(event.target.value);
  };

  const handleOpenDropdown = () => setOpenDropdown(true);
  const handleCloseDropdown = () => setOpenDropdown(false);

  const optionsType = [
    { label: "Custom RPA", icon: <CustomRPAIcon /> },
    { label: "Drive Report", icon: <DriveReportIcon /> },
    { label: "Flood Report", icon: <FloodReportIcon /> },
    { label: "VOA Order", icon: <VOAOrderIcon /> },
    { label: "VOE Order", icon: <VOEOrderIcon /> },
    { label: "ID", icon: <IDIcon /> },
    { label: "Delay", icon: <DelayIcon /> },
    { label: "Verify", icon: <VerifyIcon /> },
  ];

  return (
    <Box className={classes.rootCalendar}>
      <Box className={classes.coverCalender}>
        <AppButton
          className={classes.buttonCalendar}
          endIcon={<ArrowDownIcon size="small" />}
          variant="outlined"
          onClick={handleOpenDropdown}
        >
          <CalendarIcon />
          <span style={{ paddingLeft: "5px", fontWeight: 500 }}>
            {!isSmallSizeDown
              ? "August 28th - October 28th, 2020"
              : "Date Filter"}
          </span>
        </AppButton>
        {openDropdown && (
          <>
            <Box onClick={handleCloseDropdown} className={classes.overlay} />
            <CalendarDropdown />
          </>
        )}
      </Box>

      <FormControl className={classes.coverStatusButton} variant="outlined">
        <Select
          value={type}
          onChange={handleType}
          classes={{
            root: classes.select,
            outlined: classes.status,
          }}
        >
          {optionsType.map((option, index) => (
            <MenuItem
              key={index}
              classes={{
                root: classes.itemDropdown,
                selected: classes.itemSelected,
              }}
              value={option.label}
            >
              <Box className={classes.typeIcon}>{option.icon}</Box>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default Calender;
