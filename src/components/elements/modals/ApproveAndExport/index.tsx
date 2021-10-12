import { useState } from "react";
import * as React from "react";
import {
  Box,
  Fade,
  Modal,
  Radio,
  Checkbox,
  Backdrop,
  TextField,
  RadioGroup,
  TextareaAutosize,
  FormControlLabel,
} from "@material-ui/core";
import { useStyles } from "./style";
import AppTypography from "../../Typography";
import CloseIcon from "../../icons/Close";
import AppButton from "../../Button";
import ArrowDownIcon from "../../icons/ArrowDown";

const InitialTextValue =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor";
type PropsT = {
  handleClose: () => void;
  open: boolean;
};

const ApproveAndExportModal = ({ handleClose, open }: PropsT) => {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedA: false,
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
        <Box className={classes.paper}>
          <Box>
            <Box className={classes.titleWrapper}>
              <AppTypography className={classes.title}>
                Approve and Export Loan
              </AppTypography>
              <Box className={classes.iconBtn} onClick={handleClose}>
                <CloseIcon />
              </Box>
            </Box>
            <AppTypography className={classes.subHeading}>
              Lorem ipsum dolor sit amet
            </AppTypography>
          </Box>
          <Box>
            <AppTypography className={classes.subTitle}>
              Note Section
            </AppTypography>
            <TextareaAutosize
              maxRows="5"
              minRows="5"
              value={InitialTextValue}
              className={classes.textArea}
            />
          </Box>
          <Box className={classes.formWrapper}>
            <Box>
              <AppTypography className={classes.subTitle}>
                Property Type
              </AppTypography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    color="primary"
                  />
                }
                label="Verified"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Register"
              />
            </Box>
            <Box>
              <AppTypography className={classes.subTitle}>
                Loan Office Assignment
              </AppTypography>
              <RadioGroup row>
                <FormControlLabel
                  value="random"
                  control={<Radio color="primary" />}
                  label="Random"
                />
                <FormControlLabel
                  value="round-robin"
                  control={<Radio color="primary" />}
                  label="Round Robin"
                />
              </RadioGroup>
            </Box>
            <Box>
              <AppTypography className={classes.subTitle}>
                TBD Property Time
              </AppTypography>
              <Box className={classes.dropDown}>
                Singlle Family Residence
                <Box className={classes.arrowIcon}>
                  <ArrowDownIcon />
                </Box>
              </Box>
            </Box>
            <Box>
              <AppTypography className={classes.subTitle}>
                Property Input Allowed
              </AppTypography>
              <TextField
                value="Known Properties address"
                className={classes.txtField}
                variant="outlined"
              />
            </Box>
          </Box>
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
              className={classes.submitBtn}
            >
              Submited
            </AppButton>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ApproveAndExportModal;
