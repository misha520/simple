import Filter from "./Filter";
import HistoryTable from "./HistoryTable";
import HistoryCard from "./HistoryCard";
import AppDivider from "../../../../../../elements/Divider";
import { useScreenSizeUp } from "../../../../../../../hooks";
import { useStyles } from "../styles";

const data = [
  {
    user: ["Brad Simmons", "3 more owner"],
    status: "Processing",
    action: "15 Action Needed",
    dateTime: ["26th March, 2020", "11;30:15 PM"],
  },
  {
    user: ["Brad Simmons", "3 more owner"],
    status: "Completed",
    action: "15 Action Needed",
    dateTime: ["26th March, 2020", "11;30:15 PM"],
  },
  {
    user: ["Brad Simmons", "3 more owner"],
    status: "Processing",
    action: "15 Action Needed",
    dateTime: ["26th March, 2020", "11;30:15 PM"],
  },
  {
    user: ["Brad Simmons", "3 more owner"],
    status: "Action",
    action: "15 Action Needed",
    dateTime: ["26th March, 2020", "11;30:15 PM"],
  },
  {
    user: ["Brad Simmons", "3 more owner"],
    status: "Action",
    action: "15 Action Needed",
    dateTime: ["26th March, 2020", "11;30:15 PM"],
  },
];

export const History = () => {
  const classes = useStyles();
  const isSmallSizeUp = useScreenSizeUp("md");
  return (
    <div className={classes.wrapper}>
      <Filter />
      {isSmallSizeUp && (
        <AppDivider style={{ height: "2px" }} orientation="horizontal" />
      )}
      {isSmallSizeUp ? (
        <HistoryTable data={data} />
      ) : (
        <HistoryCard data={data} />
      )}
    </div>
  );
};
