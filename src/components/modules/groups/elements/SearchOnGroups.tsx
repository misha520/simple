import { IconButton, InputBase, makeStyles } from "@material-ui/core";
import * as React from "react";
import SearchIcon from "../../../elements/icons/Search";


const useStyles = makeStyles(
  ({ breakpoints, shape }) => ({
    root: {
      borderRadius: shape.borderRadius,
      gap: "20px",
      height: "50px",
      padding: "12px 18px",
      background: "#9C969E21",
      width: "100%",
      border: "none",
      "& > button > span > svg > path": {
          fill: "#9C969E"
      },
      [breakpoints.up("xl")]: {
        height: "60px",
        padding: "16px 24px",
      },
    },
  }),
  { index: 1 }
);

const SearchOnGroups: React.FC = () => {
  const classes = useStyles();
  return (
    <InputBase
      className={classes.root}
      placeholder="Search here"
      startAdornment={
        <IconButton>
          <SearchIcon />
        </IconButton>
      }
    />
  );
};

export default SearchOnGroups;
