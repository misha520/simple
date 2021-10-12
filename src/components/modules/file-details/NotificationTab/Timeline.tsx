import { Box, makeStyles } from "@material-ui/core";
import * as React from "react";
import AppDivider from "../../../elements/Divider";
import AppTypography from "../../../elements/Typography";
import FileIcon from "../../../elements/icons/File";
import MailIcon from "../../../elements/icons/Mail";
import PinWithPlusIcon from "../../../elements/icons/PinWithPlus";
import AttachmentIcon from "../../../elements/icons/Attachment";
import { useScreenSizeDown } from "../../../../hooks";

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  timeLineContainer: {
    display: "flex",
    flexDirection: "column",
    gridGap: "7px",
    padding: "37px 16px 14px 24px",
  },
  statuss: {
    marginLeft: "8px",
    padding: "0 8px",
    borderRadius: "6px",
    minWidth: "72px",
    lineHeight: "32px",
    textAlign: "center",
    fontSize: "13px",
    fontWeight: 400,
  },
  pendingColor: {
    color: palette.all.yellow,
    background: `${palette.all.yellow}1A`,
  },
  approvedColor: {
    color: palette.all.green,
    background: `${palette.all.green}1A`,
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 45px",
    [breakpoints.down("sm")]: {
      padding: "0 15px",
    },
  },
  divider: {
    background: "#C8C8C8",
    marginLeft: "133px",
    width: "3px",
    [breakpoints.down("sm")]: {
      marginLeft: "101px",
    },
  },
}));

const TimelineTabPanel: React.FC = () => {
  const classes = useStyles();
  const IsSmallSizeDown = useScreenSizeDown("sm");
  return (
    <Box className={classes.timeLineContainer}>
      {TimelineData.map(({ text, date, time, status, Icon }, index) => (
        <>
          <SeparatorElement index={index} />
          <Timeline
            text={text}
            date={date}
            time={time}
            status={status}
            Icon={<Icon size={IsSmallSizeDown ? "small" : "large"} />}
          />
        </>
      ))}
      <AppTypography
        style={{ marginLeft: "auto" }}
        fontSize={14}
        fontWeight={500}
        color="primary"
      >
        load more
      </AppTypography>
    </Box>
  );
};

type TimeLineT = {
  text: string;
  date: string;
  time: string;
  status: string | null;
  Icon: JSX.Element;
};

const Timeline: React.FC<TimeLineT> = ({ text, date, time, status, Icon }) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" minHeight="42px">
      <Box whiteSpace="noWrap">
        <AppTypography fontSize={13} fontWeight={400}>
          {date}
        </AppTypography>
        <AppTypography color="textSecondary" fontSize={13} fontWeight={400}>
          {time}
        </AppTypography>
      </Box>
      <Box className={classes.iconWrapper}>{Icon}</Box>
      <AppTypography color="textSecondary" fontSize={14} fontWeight={500}>
        {text}
      </AppTypography>
      <Box
        className={`${classes.statuss} ${
          status === "Pending" ? classes.pendingColor : classes.approvedColor
        }`}
      >
        {status}
      </Box>
    </Box>
  );
};

const SeparatorElement = ({ index }: { index: number }) => {
  const classes = useStyles();
  return (
    <Box height="20px" display={index === 0 ? "none" : "block"}>
      <AppDivider orientation="vertical" className={classes.divider} />
    </Box>
  );
};

const TimelineData = [
  {
    text: "Submit application form & edit profile data.",
    date: "23 Sep, 2020",
    time: "10:30 PM",
    status: "Approve",
    Icon: FileIcon,
  },
  {
    text: "Sent mail to officer. Review the documents & adjust the requrement Details",
    date: "10 Oct, 2020",
    time: "11:30 PM",
    status: null,
    Icon: MailIcon,
  },
  {
    text: "Submit application form & edit profile data.",
    date: "15 Nov, 2020",
    time: "10:30 PM",
    status: "Pending",
    Icon: PinWithPlusIcon,
  },
  {
    text: "Submit application form & edit profile data.",
    date: "12 Jan, 2021",
    time: "10:30 PM",
    status: null,
    Icon: AttachmentIcon,
  },
];

export default TimelineTabPanel;
