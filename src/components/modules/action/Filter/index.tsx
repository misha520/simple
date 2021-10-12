import "date-fns";
import { useState } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";
import AppButton from "../../../elements/Button";
import CalendarIcon from "../../../elements/icons/Calendar";
import ArrowDownIcon from "../../../elements/icons/ArrowDown";
import CalendarDropdown from "../../../elements/dropDowns/Calendar";
import SelectOnAction from "./SelectOnAction";

const Filter = () => {
  const classes = useStyles();

  const [openDropdown, setOpenDropdown] = useState(false);
  const handleOpenDropdown = () => setOpenDropdown(true);
  const handleCloseDropdown = () => setOpenDropdown(false);
  const [state, setState] = useState({
    who: "Who",
    actions: "Actions",
    sort: "Sort By",
    owner: "Owner",
  });

  const handleChangeOnSelect = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <Box className={classes.rootCalendar}>
      <SelectOnAction
        name="who"
        value={state.who}
        handleChange={handleChangeOnSelect}
      />

      <SelectOnAction
        name="actions"
        value={state.actions}
        handleChange={handleChangeOnSelect}
      />
      <Box className={classes.coverCalender}>
        <AppButton
          className={classes.buttonCalendar}
          endIcon={<ArrowDownIcon size="small" />}
          variant="outlined"
          onClick={handleOpenDropdown}
        >
          <CalendarIcon />
          <span style={{ paddingLeft: "5px", fontWeight: 500 }}>
            Closing Date
          </span>
        </AppButton>
        {openDropdown && (
          <>
            <Box onClick={handleCloseDropdown} className={classes.overlay} />
            <CalendarDropdown />
          </>
        )}
      </Box>

      <SelectOnAction
        name="sort"
        value={state.sort}
        handleChange={handleChangeOnSelect}
      />
      <SelectOnAction
        name="owner"
        value={state.owner}
        handleChange={handleChangeOnSelect}
      />
    </Box>
  );
};
export default Filter;
