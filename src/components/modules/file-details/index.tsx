import { Box, Grid, makeStyles } from "@material-ui/core";
import AUSResponse from "./AUSResponse";
import Borrowers from "./Borrowers";
import CreditSummary from "./CreditSummary";
import LoanData from "./LoanData";
import NotificationTab from "./NotificationTab";
import OwnerDetails from "./OwnerDetails";
import Owners from "./Owners";
import UserInfoTab from "./UserInfoTab";
import PauseAndApproveBtn from "./PauseAndApproveBtn";

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      padding: "25px 50px",
      width: "100%",
      background: "#FCFCFC",
      [breakpoints.down("sm")]: {
        background: "#FCFCFC",
        padding: "25px",
      },
    },
  }),
  { index: 1 }
);

const FileDetailsBody = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <PauseAndApproveBtn />
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={4}>
          <OwnerDetails />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Owners />
        </Grid>
        <Grid item xs={12} sm={7} md={3} lg={4}>
          <LoanData />
        </Grid>
        <Grid item xs={12} sm={6} md>
          <Borrowers />
        </Grid>
        <Grid item xs={12} sm={6} md>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            gridGap="32px"
          >
            <CreditSummary />
            <AUSResponse />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <NotificationTab />
        </Grid>
        <Grid item xs={12}>
          <UserInfoTab />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FileDetailsBody;
