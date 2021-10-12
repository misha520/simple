import { IconButton, InputBase, makeStyles } from "@material-ui/core";
import * as React from "react";
import SearchIcon from "../../elements/icons/Search";

const useStyles = makeStyles(
  ({ breakpoints, shape }) => ({
    root: {
      border: `1px solid rgba(156, 150, 158, 0.15)`,
      borderRadius: shape.borderRadius,
      gap: "20px",
      height: "50px",
      padding: "12px 18px",
      width: "100%",
      [breakpoints.up("xl")]: {
        marginLeft: "85px",
        height: "60px",
        padding: "16px 24px",
      },
    },
  }),
  { index: 1 }
);

const NavbarSearchBox: React.FC = () => {
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

export default NavbarSearchBox;
