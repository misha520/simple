import { Box, Grid, makeStyles } from "@material-ui/core";
import { useState } from "react";
import SearchBox from "./Search/SearchBox";
import GroupAddNew from "./Search/GroupAddNew";
import CentralRegion from "./CentralRegion";
import Groups from "./Groups";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    padding: "25px 50px",
    width: "100%",
    background: "#FCFCFC",
    [breakpoints.down("sm")]: {
      background: "#FCFCFC",
      padding: "25px",
    },
  },
  paper: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
    borderRadius: "20px",
    width: "calc(75% - 25px)",
    marginLeft: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "33px",
    padding: "30px",
    fontSize: "20px",
    fontWeight: 600,
    [breakpoints.down(1300)]: {
      gap: 0,
    },
    [breakpoints.down(900)]: {
      width: "100%",
      marginLeft: 0,
      borderRadius: "0 0 20px 20px",
    },
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "25px",
  },
}));

const GroupsPage = () => {
  const classes = useStyles();
  const [tab, setTab] = useState("central");
  const handleChangeTab = (item: string) => {
    setTab(item);
  };
  const handleChangeTabOnMobile = (event: any) => {
    setTab(event.target.value);
  };
  return (
    <Box className={classes.root}>
      <Grid container className={classes.top}>
        <SearchBox />
        <GroupAddNew />
      </Grid>
      <Grid container>
        <Groups
          tab={tab}
          handleChangeTab={handleChangeTab}
          handleChangeTabOnMobile={handleChangeTabOnMobile}
        />
        {tab === "central" ? (
          <CentralRegion />
        ) : (
          <Box className={classes.paper}>EMPTY PAGE</Box>
        )}
      </Grid>
    </Box>
  );
};

export default GroupsPage;
