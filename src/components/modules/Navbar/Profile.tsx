import { Box } from "@material-ui/core";
import { useState } from "react";
import * as React from "react";
import { useScreenSizeDown } from "../../../hooks";
import ArrowDownIcon from "../../elements/icons/ArrowDown";
import AppTypography from "../../elements/Typography";
import Avatar from "../../elements/Avatar";
import ProfileDropDown from "../../elements/dropDowns/Profile";
import { useStyles } from "./styles";

const NavbarProfile: React.FC = () => {
  const isLargerSizeDown = useScreenSizeDown("xl");
  const isMediumSizeDown = useScreenSizeDown("md");
  const isMobileSize = useScreenSizeDown("xs");
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        position="relative"
        style={{ cursor: "pointer" }}
        onClick={handleOpen}
      >
        <Box
          style={{
            display: isMediumSizeDown ? "none" : "initial",
            // marginLeft: "10px",
            marginLeft: isLargerSizeDown ? "10" : "50px",
          }}
        >
          <AppTypography
            style={{
              fontWeight: 500,
              whiteSpace: "nowrap",
              fontSize: isLargerSizeDown ? 18 : 15,
            }}
          >
            Louis Anderson
          </AppTypography>
          <AppTypography
            style={{
              textAlign: "right",
              whiteSpace: "nowrap",
              fontWeight: 500,
              fontSize: isLargerSizeDown ? 15 : 18,
            }}
            color="textSecondary"
          >
            Super Admin
          </AppTypography>
        </Box>
        <Box
          style={{
            marginLeft: isMobileSize ? "0" : "25px",
          }}
        >
          <Avatar img="/images/louis.png" />
        </Box>
        {isMediumSizeDown ? null : <ArrowDownIcon />}
      </Box>
      {open && (
        <>
          <Box onClick={handleClose} className={classes.overlay} />
          <ProfileDropDown handleClose={handleClose} />
        </>
      )}
    </>
  );
};

export default NavbarProfile;
