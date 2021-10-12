import Documents from "./Documents";
import Findings from "./Findings";
import OrderDetails from "./OrderDetails";
import { useScreenSizeDown } from "../../../../../../../hooks";
import AppDivider from "../../../../../../elements/Divider";
import { useStyles } from "../styles";

export const ImportantDates = () => {
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
      <OrderDetails />
      {dividerElement}
      <Documents />
      {dividerElement}
      <Findings />
    </div>
  );
};
