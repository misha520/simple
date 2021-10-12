import { useState } from "react";
import * as React from "react";
import "date-fns";
import {
  Box,
  Fade,
  Modal,
  Radio,
  Checkbox,
  Backdrop,
  RadioGroup,
  TextField,
  TextareaAutosize,
  FormControlLabel,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useStyles } from "./style";
import AppTypography from "../../Typography";
import CloseIcon from "../../icons/Close";
import AppButton from "../../Button";
import ArrowDownIcon from "../../icons/ArrowDown";
import AttachmentIcon from "../../icons/Attachment";
import { palette } from "../../../foundation/palette";
import SaveIcon from "../../icons/Save";

const InitialTextValue =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor";
type PropsT = {
  handleClose: () => void;
  open: boolean;
};

const AddNewModal = ({ handleClose, open }: PropsT) => {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedA: false,
    checkedB: true,
  });
  const [selectedDate, setSelectedDate] = useState({
    startDate: new Date("2020-11-04T21:11:54"),
    endDate: new Date("2021-06-04T21:11:54"),
  });

  const handleDateChange = (date: any, dateType: string) => {
    setSelectedDate({ ...selectedDate, [dateType]: date });
  };

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
              <AppTypography className={classes.title}>Add New</AppTypography>
              <Box className={classes.iconBtn} onClick={handleClose}>
                <CloseIcon />
              </Box>
            </Box>
            <AppTypography className={classes.subHeading}>
              Lorem ipsum dolor sit amet
            </AppTypography>
          </Box>
          <Box className={classes.formWrapper}>
            <Box>
              <AppTypography className={classes.subTitle}>
                Loan number
              </AppTypography>
              <TextField
                type="number"
                value="165000132350"
                className={classes.txtField}
                variant="outlined"
              />
            </Box>
            <Box>
              <AppTypography className={classes.subTitle}>
                Borrower Name
              </AppTypography>
              <TextField
                value="Brad Simmons"
                className={classes.txtField}
                variant="outlined"
              />
            </Box>
            <Box>
              <AppTypography className={classes.subTitle}>
                Starting Date
              </AppTypography>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  format="MMMM dd,yyyy"
                  className={classes.dateField}
                  value={selectedDate.startDate}
                  onChange={(date) => handleDateChange(date, "startDate")}
                />
              </MuiPickersUtilsProvider>
            </Box>
            <Box>
              <AppTypography className={classes.subTitle}>
                Closing Date
              </AppTypography>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  format="MMMM dd,yyyy"
                  className={classes.dateField}
                  value={selectedDate.endDate}
                  onChange={(date) => handleDateChange(date, "endDate")}
                />
              </MuiPickersUtilsProvider>
            </Box>
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
              <Box className={classes.dropDown}>Known Properties address</Box>
            </Box>
          </Box>
          <Box>
            <AppTypography className={classes.subTitle}>
              Description
            </AppTypography>
            <TextareaAutosize
              maxRows="5"
              minRows="5"
              value={InitialTextValue}
              className={classes.textArea}
            />
          </Box>
          <Box display="flex" gridGap="16px" mt="20px">
            <AppButton
              onClick={handleClose}
              variant="outlined"
              className={classes.attachmentBtn}
              startIcon={
                <AttachmentIcon size="small" fill={palette.all.gray} />
              }
            >
              Add Attachment
            </AppButton>
            <AppButton
              onClick={handleClose}
              variant="contained"
              className={classes.submitBtn}
              startIcon={
                <SaveIcon />
              }
            >
              Submited
            </AppButton>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddNewModal;
