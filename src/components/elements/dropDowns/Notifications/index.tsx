import { Box } from "@material-ui/core";
import { useStyles } from "./style";
import AppTypography from "../../Typography";
import AppDivider from "../../Divider";
import ImportExportIcon from "../../icons/ImportExport";
import VOAIcon from "../../icons/VOA";
import VOEIcon from "../../icons/VOE";
import RectangleIcon from "../../icons/Rectangle";

const NotificationDropDown = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.rectangle}>
        <RectangleIcon />
      </Box>
      <Box display="flex" alignItems="center" padding="0 25px">
        <Box marginLeft="16px">
          <AppTypography className={classes.title}>Notifications</AppTypography>
        </Box>
        <Box className={classes.viewAllTxt}>View All</Box>
      </Box>
      <Box className={classes.itemWrapper}>
        <Box marginLeft="16px" position="relative">
          <AppTypography className={classes.itemIcon}>
            <Box className={classes.Icon}>
              <ImportExportIcon />
            </Box>
          </AppTypography>
        </Box>
        <Box position="relative">
          <AppTypography className={classes.itemTitle}>
            Loan Import
          </AppTypography>
          <AppTypography className={classes.itemTxt}>
            Loan import <span style={{ color: "#35B6FE" }}>#510245890</span> is
            done
          </AppTypography>
          <Box className={classes.time}>2m ago</Box>
        </Box>
      </Box>
      <AppDivider />
      <Box className={classes.itemWrapper}>
        <Box marginLeft="16px" position="relative">
          <AppTypography
            className={classes.itemIcon}
            style={{ background: "#C9A629" }}
          >
            <Box className={classes.Icon}>
              <ImportExportIcon />
            </Box>
          </AppTypography>
        </Box>
        <Box position="relative">
          <AppTypography className={classes.itemTitle}>
            Loan Export
          </AppTypography>
          <AppTypography className={classes.itemTxt}>
            Loan Export <span style={{ color: "#35B6FE" }}>#510245890</span> is
            done
          </AppTypography>
          <Box className={classes.time}>12:30 PM</Box>
        </Box>
      </Box>
      <AppDivider />
      <Box className={classes.itemWrapper}>
        <Box marginLeft="16px" position="relative">
          <AppTypography
            className={classes.itemIcon}
            style={{ background: "#297CC9" }}
          >
            <Box className={classes.Icon} style={{ top: "45%" }}>
              <VOAIcon />
            </Box>
          </AppTypography>
        </Box>
        <Box position="relative">
          <AppTypography className={classes.itemTitle}>VOA</AppTypography>
          <AppTypography className={classes.itemTxt}>
            File <span style={{ color: "#35B6FE" }}>#510245890</span> VOA Order
            has Error. Please Review.
          </AppTypography>
          <Box className={classes.time}>12:30 PM</Box>
        </Box>
      </Box>
      <AppDivider />
      <Box className={classes.itemWrapper}>
        <Box marginLeft="16px" position="relative">
          <AppTypography
            className={classes.itemIcon}
            style={{ background: "#8C29C9" }}
          >
            <Box className={classes.Icon}>
              <VOEIcon />
            </Box>
          </AppTypography>
        </Box>
        <Box position="relative">
          <AppTypography className={classes.itemTitle}>VOA</AppTypography>
          <AppTypography className={classes.itemTxt}>
            <span style={{ color: "#35B6FE" }}>#510245890</span> VOE Order is
            Coplete
          </AppTypography>
          <Box className={classes.time}>12:30 PM</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NotificationDropDown;
