import { Box, Grid } from "@material-ui/core";
import ReadyToProcess from "./Process/ReadyToProcess";
import FileProcessing from "./Process/FileProcessing";
import ActionNeed from "./Process/ActionNeed";
import FinishProcessing from "./Process/FinishProcessing";
import FileOverTime from "./FileOverTime";
import AssignedProcessors from "./AssignedProcessors";
import TurnTimes from "./TurnTimes";
import Order from "./Order";

import { useStyles } from "./styles";

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.dashboardContainer}>
      <Grid container spacing={4}>
        <Grid className={classes.process} item xs={6} sm={6} lg={3}>
          <ReadyToProcess />
        </Grid>
        <Grid className={classes.processing} item xs={6} sm={6} lg={3}>
          <FileProcessing percent={50} />
        </Grid>
        <Grid className={classes.needed} item xs={6} sm={6} lg={3}>
          <ActionNeed />
        </Grid>
        <Grid className={classes.finish} item xs={6} sm={6} lg={3}>
          <FinishProcessing />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} lg={6}>
          <FileOverTime />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <AssignedProcessors />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TurnTimes />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Order />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
