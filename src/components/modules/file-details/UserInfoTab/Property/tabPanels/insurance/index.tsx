import { useStyles } from "../styles";
import AppTypography from "../../../../../../elements/Typography";
import MegaPhoneIcon from "../../../../../../elements/icons/MegaPhone";

export const Insurance = () => {
  const classes = useStyles();

  return (
    <div className={classes.flexWrapper}>
      <div className={classes.comingSoonWrapper}>
        <MegaPhoneIcon />
        <AppTypography className={classes.comingSoonText}>
          This Feature Will Coming Soon
        </AppTypography>
      </div>
    </div>
  );
};
