import { Box, IconButton, makeStyles } from "@material-ui/core";
import AppTypography from "../../../../../../elements/Typography";
import MoreVerticalIcon from "../../../../../../elements/icons/MoreVertical";
import AppDivider from "../../../../../../elements/Divider";

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "14px",
    borderRadius: "6px",
    background: "#fff",
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
  },
  userWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "14px",
    fontWeight: 600,
    opacity: "0.8",
  },
  subHeading: {
    color: "#c1c1c1",
    fontSize: "12px",
    fontWeight: 500,
  },
  heading: {
    fontSize: "13px",
    fontWeight: 600,
    color: "rgba(23, 27, 30, 0.55)",
  },
  description: {
    fontSize: "13px",
    fontWeight: 400,
    color: "rgba(23, 27, 30, 0.55)",
  },
}));

type HistoryCardT = {
  data: Array<{
    user: Array<string>;
    status: string;
    action: string;
    dateTime: Array<string>;
  }>;
};

const HistoryCard = ({ data }: HistoryCardT) => {
  const classes = useStyles();
  return (
    <Box className={classes.cardContainer}>
      {data.map(({ user, status, action, dateTime }) => (
        <Box key={user[0]} className={classes.cardWrapper}>
          <Box className={classes.userWrapper}>
            <Box>
              <AppTypography className={classes.title}>{user[0]}</AppTypography>
              <AppTypography className={classes.subHeading}>
                {user[1]}
              </AppTypography>
            </Box>
            <IconButton>
              <MoreVerticalIcon height="20px" width="20px" />
            </IconButton>
          </Box>
          <AppDivider orientation="horizontal" />
          <Box>
            <AppTypography>
              <span className={classes.heading}>Status : </span>
              <span className={classes.description}>{status}</span>
            </AppTypography>
            <AppTypography>
              <span className={classes.heading}>Action : </span>
              <span className={classes.description}>{action}</span>
            </AppTypography>
            <AppTypography>
              <span className={classes.heading}>Date : </span>
              <span className={classes.description}>{dateTime[0]}</span>
            </AppTypography>
            <AppTypography>
              <span className={classes.heading}>Time : </span>
              <span className={classes.description}>{dateTime[1]}</span>
            </AppTypography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default HistoryCard;
