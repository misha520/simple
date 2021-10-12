import { Box } from "@material-ui/core";
import { enGB } from "date-fns/locale";
import { DateRangePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import CalendarFromToIcon from "../../icons/CalendarFromTo";
import { useStyles } from "./styles";

const CalendarDropdown = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.cover}>
        <Box className={classes.fromBox}>
          <span className={classes.fromTxt}>From</span>
          <Box className={classes.dateFrom}>
            <span>3/09/2020</span>
            <span className={classes.iconCalendar}>
              <CalendarFromToIcon />
            </span>
          </Box>
        </Box>
        <Box className={classes.fromBox}>
          <span className={classes.fromTxt}>To</span>
          <Box className={classes.dateFrom}>
            <span>3/09/2020</span>
            <span className={classes.iconCalendar}>
              <CalendarFromToIcon />
            </span>
          </Box>
        </Box>
      </Box>
      <DateRangePickerCalendar locale={enGB} />
    </Box>
  );
};
export default CalendarDropdown;
