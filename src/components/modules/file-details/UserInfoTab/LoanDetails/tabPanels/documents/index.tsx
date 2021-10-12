import Unassigned from "./Unassigned";
import Disclosures from "./Disclosures";
import Archive from "./Archive";
import { useScreenSizeDown } from "../../../../../../../hooks";
import AppDivider from "../../../../../../elements/Divider";
import { useStyles } from "../styles";

export const Documents = () => {
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
      <Disclosures />
      {dividerElement}
      <Unassigned />
      {dividerElement}
      <Archive />
    </div>
  );
};
