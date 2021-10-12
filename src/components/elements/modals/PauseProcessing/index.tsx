import { Modal, Backdrop, Fade, Box } from "@material-ui/core";
import { useStyles } from "./style";
import AppTypography from "../../Typography";
import CloseIcon from "../../icons/Close";
import AppButton from "../../Button";

type PropsT = {
  handleClose: () => void;
  open: boolean;
};

const PauseProcessingModal = ({ handleClose, open }: PropsT) => {
  const classes = useStyles();

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
          <div className={classes.titleWrapper}>
            <AppTypography className={classes.title}>
              Pause Processing
            </AppTypography>
            <div className={classes.iconBtn} onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>
          <AppTypography className={classes.description}>
            Are you sure to pause this processing? You can change this any time.
          </AppTypography>
          <Box display="flex" gridGap="16px" mt="20px">
            <AppButton
              onClick={handleClose}
              variant="contained"
              className={classes.cancelBtn}
            >
              Cancel
            </AppButton>
            <AppButton
              onClick={handleClose}
              variant="contained"
              className={classes.confirmBtn}
            >
              Confirm
            </AppButton>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
};

export default PauseProcessingModal;
