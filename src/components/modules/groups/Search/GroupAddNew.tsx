import "date-fns";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";
import AppButton from "../../../elements/Button";
import AddIcon from "../../../elements/icons/Add";
import { allColors } from "../../../foundation/palette";

const GroupAddNew = () => {
  const classes = useStyles();

  return (
    <Box className={classes.rootSelectButton}>
      <AppButton
        classes={{ root: classes.createBtn, text : classes.createBranchBtn }}
        startIcon={<AddIcon stroke={allColors.pest} />}
      >
        Create Branch
      </AppButton>
      <AppButton
        className={classes.createBtn}
        startIcon={<AddIcon stroke={allColors.blue} />}
      >
        Create Groups
      </AppButton>
    </Box>
  );
};
export default GroupAddNew;
