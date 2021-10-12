import "date-fns";
import { useState } from "react";
import { Box, FormControl, MenuItem, Select } from "@material-ui/core";
import { useStyles } from "./styles";
import AppButton from "../../../elements/Button";
import CalendarIcon from "../../../elements/icons/Calendar";
import ArrowDownIcon from "../../../elements/icons/ArrowDown";
import { useScreenSizeDown } from "../../../../hooks";
import CalendarDropdown from "../../../elements/dropDowns/Calendar";

const Calender = () => {
  const classes = useStyles();
  const [status, setStatus] = useState("status");
  const [openDropdown, setOpenDropdown] = useState(false);
  const isSmallSizeDown = useScreenSizeDown(1000);

  const handleStatus = (event: any) => {
    setStatus(event.target.value);
  };

  const handleOpenDropdown = () => setOpenDropdown(true);
  const handleCloseDropdown = () => setOpenDropdown(false);

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
          value={status}
          onChange={handleStatus}
          classes={{
            root: classes.select,
            outlined: classes.status,
          }}
        >
          <MenuItem
            classes={{
              root: classes.itemDropdown,
              selected: classes.itemSelected,
            }}
            value="status"
          >
            Status
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default Calender;
