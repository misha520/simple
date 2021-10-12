import { Tab } from "@material-ui/core";
import EllipseIcon from "../icons/Ellipse";
import { useStyles } from "./styles";

type TabButtonT = {
  label: string;
  index: number;
  fill: string;
  selected: boolean;
};

const TabButton = ({ label, index, fill, selected = false }: TabButtonT) => {
  const classes = useStyles();

  return (
    <Tab
      selected={selected}
      value={index}
      classes={{
        root: classes.tab,
        selected: classes.selectedTab,
        wrapper: classes.tabWrapper,
      }}
      label={
        <>
          {label} <EllipseIcon radius={5} fill={fill} />{" "}
        </>
      }
    />
  );
};

export default TabButton;
