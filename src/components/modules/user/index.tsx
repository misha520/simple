import { Box, Grid } from "@material-ui/core";
import { useScreenSizeDown } from "../../../hooks";
import PaginationRounded from "../../elements/Pagination/PaginationRounded";
import UserSelect from "./Search/UserSelect";
import SearchBox from "./Search/SearchBox";
import { useStyles } from "./styles";
import UserCard from "./UserCard";

const UserPage = () => {
  const classes = useStyles();
  const isMobile = useScreenSizeDown("sm");

  return (
    <Box className={classes.root}>
      <Grid container className={classes.top}>
        <SearchBox />
        <UserSelect />
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <UserCard />
        </Grid>
      </Grid>
      <Grid className={classes.bottom}>
        {!isMobile && <span>Showing 15 form 100 files</span>}
        <PaginationRounded round={5} />
      </Grid>
    </Box>
  );
};

export default UserPage;
