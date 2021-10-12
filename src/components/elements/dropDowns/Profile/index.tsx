import { Box } from "@material-ui/core";
import { useStyles } from "./style";
import Avatar from "../../Avatar";
import AppTypography from "../../Typography";
import AppDivider from "../../Divider";
import ArrowDownIcon from "../../icons/ArrowDown";
import { useHistory } from "react-router-dom";

const ProfileDropDown = ({ handleClose }: { handleClose: () => void }) => {
  const classes = useStyles();
  const location = useHistory().location.pathname;
  return (
    <Box className={classes.root}>
      <Box display="flex" alignItems="center" padding="0 25px">
        <Avatar img="/images/louis.png" />
        <Box marginLeft="16px">
          <AppTypography
            className={classes.userName}
            style={{ marginLeft: "10px" }}
          >
            Louis Anderson
          </AppTypography>
          <AppTypography className={classes.userWork}>
            Super Admin
          </AppTypography>
        </Box>
        <Box
          style={{
            transform: "rotate(180deg)",
            marginLeft: "auto",
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <ArrowDownIcon />
        </Box>
      </Box>
      {location === "/settings" ? (
        <>
          <AppDivider />
          <Box className={classes.listWrapper}>
            <AppTypography className={classes.itemTxt}>
              My Profile
            </AppTypography>
            <AppTypography className={classes.itemTxt}>
              My Notifications
            </AppTypography>
            <AppTypography className={classes.itemTxt}>
              My Assignments
            </AppTypography>
            <AppTypography className={classes.itemTxt}>
              My Reporting
            </AppTypography>
          </Box>
          <AppDivider />
          <Box className={classes.listWrapper}>
            <AppTypography className={classes.itemTxt}>Log Out</AppTypography>
          </Box>
        </>
      ) : (
        <>
          <AppDivider />
          <Box className={classes.listWrapper}>
            <AppTypography className={classes.itemTxt}>
              My Profile
            </AppTypography>
            <AppTypography className={classes.itemTxt}>
              My Project
            </AppTypography>
            <AppTypography className={classes.itemTxt}>
              My Subscription
            </AppTypography>
            <AppTypography className={classes.itemTxt}>
              My Statement
            </AppTypography>
          </Box>
          <AppDivider />
          <Box className={classes.listWrapper}>
            <AppTypography className={classes.itemTxt}>Language</AppTypography>
            <AppTypography className={classes.itemTxt}>
              Account Settings
            </AppTypography>
            <AppTypography className={classes.itemTxt}>Log Out</AppTypography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ProfileDropDown;
