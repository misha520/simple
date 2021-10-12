import General from "./General";
import Transaction from "./Transaction";
import Borrowers from "./Borrowers";
import { useScreenSizeDown } from "../../../../../../../hooks";
import AppDivider from "../../../../../../elements/Divider";
import { useStyles } from "../styles";

export const Application = () => {
  const classes = useStyles();

  const isSmallSizeDown = useScreenSizeDown("sm");

  const dividerElement = (
    <AppDivider
      orientation={isSmallSizeDown ? "horizontal" : "vertical"}
      flexItem={isSmallSizeDown ? undefined : true}
    />
  );
  return (
    <div className={classes.flexWrapper}>
      <General />
      {dividerElement}
      <Transaction />
      {dividerElement}
      <Borrowers />
    </div>
  );
};
