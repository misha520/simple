import "date-fns";
import { useState } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";
import AppButton from "../../../elements/Button";
import AddIcon from "../../../elements/icons/Add";
import { allColors } from "../../../foundation/palette";
import SelectOption from "./SelectOption";

const UserSelect = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    type: "Type",
    branches: "Branches",
  });

  const handleChangeOnSelect = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <Box className={classes.rootSelectButton}>
      <SelectOption
        name="type"
        value={state.type}
        handleChange={handleChangeOnSelect}
      />
      <SelectOption
        name="branches"
        value={state.branches}
        handleChange={handleChangeOnSelect}
      />
      <AppButton
        className={classes.createBtn}
        startIcon={<AddIcon stroke={allColors.blue} />}
      >
        Create User
      </AppButton>
    </Box>
  );
};
export default UserSelect;
