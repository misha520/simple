import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import * as React from "react";
import { useScreenSizeDown } from "../../../hooks";
import AppButton from "../../elements/Button";
import AddIcon from "../../elements/icons/Add";
import MenuIcon from "../../elements/icons/Menu";
import AppTypography from "../../elements/Typography";
import { allColors } from "../../foundation/palette";
import NavbarProfile from "./Profile";
import NavbarSearchBox from "./SearchBox";
import AddNewModal from "../../elements/modals/AddNew";
import { useStyles } from "./styles";
import Notification from "./Notification";
import { useHistory, useRouteMatch } from "react-router-dom";

interface Props {
  onOpen: () => void;
}

const Navbar: React.FC<Props> = ({ onOpen }) => {
  const classes = useStyles();
  const history = useHistory();
  const router = useRouteMatch();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Dashboard");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    history.location.pathname === "/file-detail"
      ? setTitle("File Details")
      : history.location.pathname === "/files-filter"
      ? setTitle("Loan Files")
      : history.location.pathname === "/company-settings"
      ? setTitle("Company")
      : history.location.pathname === "/orders"
      ? setTitle("Orders")
      : history.location.pathname === "/action"
      ? setTitle("Action Needed")
      : history.location.pathname === "/users"
      ? setTitle("User")
      : history.location.pathname === "/groups"
      ? setTitle("Groups")
      : setTitle("Dashboard");
  }, [history.location.pathname, router]);

  const isLargerSizeDown = useScreenSizeDown(1600);
  const isMediumSizeDown = useScreenSizeDown("md");
  const isSmallSizeDown = useScreenSizeDown("sm");
  const menuIconAndPageName = (
    <>
      <Box display="flex" gridGap={isMediumSizeDown ? "10px" : "40px"}>
        {isLargerSizeDown && !isSmallSizeDown && (
          <img
            src={"/images/logo-home.png"}
            alt=""
            className={classes.homeImg}
          />
        )}
        <IconButton onClick={onOpen}>
          <MenuIcon />
        </IconButton>
      </Box>

      <AppTypography
        fontSize={isLargerSizeDown ? 20 : 30}
        fontWeight={600}
        style={{
          whiteSpace: "nowrap",
          marginRight: isSmallSizeDown ? "0" : "15px",
        }}
      >
        {title}
      </AppTypography>
    </>
  );

  return (
    <AppBar
      color="inherit"
      className={classes.appbar}
      position="sticky"
      variant="outlined"
    >
      <Toolbar className={classes.toolbar}>
        <Box className={classes.coverLogo}>
          <Avatar
            className={classes.logo}
            src={"/images/logo.png"}
            variant="square"
          />
        </Box>

        <Box className={classes.navItemWrapper}>
          {isSmallSizeDown ? (
            menuIconAndPageName
          ) : (
            <Box
              display="flex"
              alignItems="center"
              gridGap={isMediumSizeDown ? "15px" : "45px"}
            >
              {menuIconAndPageName}
            </Box>
          )}
          {isSmallSizeDown ? null : (
            <>
              <NavbarSearchBox />
              <AppButton
                color="primary"
                className={classes.addNewBtn}
                fullWidth
                startIcon={<AddIcon stroke={allColors.white} />}
                variant="contained"
                onClick={handleOpen}
              >
                Add New
              </AppButton>
              <AddNewModal handleClose={handleClose} open={open} />
              <Badge
                classes={{
                  badge: classes.badge,
                }}
                badgeContent={12}
                color="primary"
                style={{
                  marginLeft: isLargerSizeDown ? "0" : "auto",
                }}
              >
                <Notification />
              </Badge>
            </>
          )}
          <NavbarProfile />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
