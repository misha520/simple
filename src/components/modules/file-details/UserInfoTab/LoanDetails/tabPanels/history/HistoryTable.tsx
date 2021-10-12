import {
  makeStyles,
  Box,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@material-ui/core";
import MoreVerticalIcon from "../../../../../../elements/icons/MoreVertical";
import AppTypography from "../../../../../../elements/Typography";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "18px",
    fontWeight: 700,
  },
  subTitle: {
    fontSize: "14px",
    fontWeight: 500,
  },
  description: {
    fontSize: "16px",
    fontWeight: 500,
    opacity: "0.5",
  },
  subDescription: {
    fontSize: "13px",
    fontWeight: 400,
    opacity: "0.5",
  },
  userCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

type HistoryTableT = {
  data: Array<{
    user: Array<string>;
    status: string;
    action: string;
    dateTime: Array<string>;
  }>;
};

const HistoryTable = ({ data }: HistoryTableT) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table aria-label="history table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography className={classes.title}>Status </Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.title}>Action </Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.title}>Date / Time </Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.title}>User</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ user, status, action, dateTime }) => (
            <TableRow key={user[0]}>
              <TableCell>
                <Typography className={classes.subTitle}>{status}</Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.description}>
                  {action}
                </Typography>
              </TableCell>
              <TableCell>
                <AppTypography className={classes.subTitle}>
                  {dateTime[0]}
                </AppTypography>
                <AppTypography className={classes.subDescription}>
                  {dateTime[1]}
                </AppTypography>
              </TableCell>
              <TableCell className={classes.userCell}>
                <Box>
                  <AppTypography className={classes.subTitle}>
                    {user[0]}
                  </AppTypography>
                  <AppTypography className={classes.subDescription}>
                    {user[1]}
                  </AppTypography>
                </Box>
                <IconButton>
                  <MoreVerticalIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
