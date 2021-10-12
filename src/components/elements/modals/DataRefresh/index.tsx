import { useState } from "react";
import { Modal, Backdrop, Fade, Tab, Tabs, Box } from "@material-ui/core";
import { palette } from "../../../foundation/palette";
import { useStyles } from "./style";
import TabPanel from "../../TabPanel";
import AppTypography from "../../Typography";
import AppButton from "../../Button";
import CheckIcon from "../../icons/Check";
import AppDivider from "../../Divider";

type PropsT = { handleClose: () => void; open: boolean };

const DataRefreshModal = ({ handleClose, open }: PropsT) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Tabs
            className={classes.tabs}
            TabIndicatorProps={{
              style: {
                display: "none",
              },
            }}
            textColor="primary"
            onChange={(_, value) => setValue(value)}
            value={value}
          >
            <Tab className={classes.tab} value={0} label="auto" />
            <Tab className={classes.tab} value={1} label="manual" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Auto handleClose={handleClose} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Manual handleClose={handleClose} />
          </TabPanel>
        </div>
      </Fade>
    </Modal>
  );
};
const Auto = ({ handleClose }: { handleClose: () => void }) => {
  const classes = useStyles();
  return (
    <Box>
      <Box display="flex" flexDirection="column" gridGap="10px">
        <Box className={classes.optionWrapper}>
          <AppTypography className={classes.optionTxt}>Mismo 3.4</AppTypography>
          <Box className={classes.iconWrapper}>
            <CheckIcon />
          </Box>
        </Box>
        <Box className={classes.optionWrapper}>
          <AppTypography className={classes.optionTxt}>
            AUS Response
          </AppTypography>
          <Box className={classes.iconWrapper}>
            <CheckIcon />
          </Box>
        </Box>
        <Box className={classes.optionWrapper}>
          <AppTypography className={classes.optionTxt}>
            Credit Data
          </AppTypography>
          <Box className={classes.iconWrapper}>
            <CheckIcon />
          </Box>
        </Box>
        <Box className={classes.optionWrapper}>
          <AppTypography className={classes.optionTxt}>Documents</AppTypography>
          <Box className={classes.iconWrapper}>
            <CheckIcon fill={palette.all.gray} />
          </Box>
        </Box>
        <AppDivider style={{ margin: "20px 0 5px 0" }} />
        <AppTypography className={classes.description}>
          Every 30 min data will update automatically
        </AppTypography>
        <AppButton className={classes.updateBtn} onClick={handleClose}>
          Manually Update Now
        </AppButton>
      </Box>
    </Box>
  );
};
const Manual = ({ handleClose }: { handleClose: () => void }) => {
  const classes = useStyles();
  return (
    <Box>
      <Box display="flex" flexDirection="column" gridGap="10px">
        <Box className={classes.optionWrapper}>
          <AppTypography className={classes.optionTxt}>Mismo 3.4</AppTypography>
          <Box className={classes.iconWrapper}>
            <CheckIcon />
          </Box>
        </Box>
        <Box className={classes.optionWrapper}>
          <AppTypography className={classes.optionTxt}>
            AUS Response
          </AppTypography>
          <Box className={classes.iconWrapper}>
            <CheckIcon fill={palette.all.gray} />
          </Box>
        </Box>
        <Box className={classes.optionWrapper}>
          <AppTypography className={classes.optionTxt}>
            Credit Data
          </AppTypography>
          <Box className={classes.iconWrapper}>
            <CheckIcon />
          </Box>
        </Box>
        <Box className={classes.optionWrapper}>
          <AppTypography className={classes.optionTxt}>Documents</AppTypography>
          <Box className={classes.iconWrapper}>
            <CheckIcon fill={palette.all.gray} />
          </Box>
        </Box>
        <AppDivider style={{ margin: "20px 0 5px 0" }} />
        <AppTypography className={classes.description}>
          Data will only update when manually imported
        </AppTypography>
        <AppButton className={classes.updateBtn} onClick={handleClose}>
          Update Now
        </AppButton>
      </Box>
    </Box>
  );
};

export default DataRefreshModal;
