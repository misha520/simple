import { Box, Grid, makeStyles } from "@material-ui/core";
import { useState } from "react";
import Categories from "./Categories";
import General from "./General";

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
}));

const CompanySetting = () => {
  const classes = useStyles();
  const [tab, setTab] = useState("General");
  const handleChangeTab = (item: string) => {
    setTab(item);
  };
  const handleChangeTabOnMobile = (event: any) => {
    setTab(event.target.value);
  };
  return (
    <Box className={classes.root}>
      <Grid container>
        <Categories
          tab={tab}
          handleChangeTab={handleChangeTab}
          handleChangeTabOnMobile={handleChangeTabOnMobile}
        />
        {tab === "General" ? (
          <General />
        ) : (
          <Box className={classes.paper}>EMPTY PAGE</Box>
        )}
      </Grid>
    </Box>
  );
};

export default CompanySetting;
