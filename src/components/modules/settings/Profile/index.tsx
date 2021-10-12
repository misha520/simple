import DateFnsUtils from "@date-io/date-fns";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/Check";
import { useState } from "react";
import AppButton from "../../../elements/Button";
import ArrowDownIcon from "../../../elements/icons/ArrowDown";
import BlankPageIcon from "../../../elements/icons/BlankPage";
import ClaudeUploadIcon from "../../../elements/icons/ClaudeUpload";
import AppTypography from "../../../elements/Typography";
import { useStyles } from "./styles";
import { useScreenSizeDown } from "../../../../hooks";

const InitialTextValue =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor";

const General = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedA: false,
    checkedB: true,
    checkedC: true,
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const isMobile = useScreenSizeDown(900);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <Box className={classes.paper}>
      {!isMobile && (
        <Box className={classes.titleWrapper}>
          <AppTypography className={classes.title}>Profile</AppTypography>
        </Box>
      )}
      <Box className={classes.formWrapper}>
        <Box>
          <Box>
            <AppTypography className={classes.subTitle}>
              Company Name <span style={{ color: "#F83737" }}>*</span>
            </AppTypography>
            <TextField
              value="Clothing Advertisement"
              className={classes.txtField}
              variant="outlined"
            />
          </Box>
          <Box>
            <AppTypography className={classes.subTitle}>
              Add Title <span style={{ color: "#F83737" }}>*</span>
            </AppTypography>
            <TextField
              value="We Make Clothes, Woman Make Fashion"
              className={classes.txtField}
              variant="outlined"
            />
          </Box>
          <Box>
            <AppTypography className={classes.subTitle}>URL Name</AppTypography>
            <TextField
              value="www.nflip.com"
              className={classes.txtField}
              variant="outlined"
            />
          </Box>
          <Box>
            <AppTypography className={classes.subTitle}>
              Property Input Allowed
            </AppTypography>
            <Box className={classes.dropDown}>
              Known Properties address
              <Box className={classes.arrowIcon}>
                <ArrowDownIcon />
              </Box>
            </Box>
          </Box>
          <Box>
            <AppTypography className={classes.subTitle}>
              Integration
            </AppTypography>
            <TextField
              value="www.nflip.com"
              className={classes.txtField}
              variant="outlined"
            />
          </Box>
          <Box>
            <AppTypography className={classes.subTitle}>About</AppTypography>
            <TextareaAutosize
              maxRows="15"
              minRows="11"
              value={InitialTextValue}
              className={classes.textArea}
            />
          </Box>
        </Box>

        <Box>
          <Box>
            <AppTypography className={classes.subTitle}>
              Ask Relator Name <span style={{ color: "#F83737" }}>*</span>
            </AppTypography>
            <RadioGroup style={{ marginBottom: "16px" }} row>
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    color="default"
                    classes={{ checked: classes.checked }}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    color="default"
                    classes={{ checked: classes.checked }}
                  />
                }
                label="No"
              />
            </RadioGroup>
          </Box>
          <Box>
            <AppTypography className={classes.subTitle}>
              Date Start <span style={{ color: "#F83737" }}>*</span>
            </AppTypography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MMMM dd,yyyy"
                className={classes.dateField}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </Box>
          <Box className={classes.coverPropertyType}>
            <AppTypography className={classes.subTitle}>
              Property Type
            </AppTypography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  color="default"
                  classes={{ checked: classes.checked }}
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
                  color="default"
                  classes={{ checked: classes.checked }}
                />
              }
              label="Registered"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedC}
                  onChange={handleChange}
                  name="checkedC"
                  color="default"
                  classes={{ checked: classes.checked }}
                />
              }
              label="Complete"
            />
          </Box>
          <Box className={classes.coverPropertyType}>
            <AppTypography className={classes.subTitle}>
              Loan Officer Assignment
            </AppTypography>
            <RadioGroup style={{ marginBottom: "16px" }} row>
              <FormControlLabel
                value="random"
                control={<Radio color="default" />}
                label="Random"
              />
              <FormControlLabel
                value="round"
                control={<Radio color="default" />}
                label="Round Robin"
              />
              <FormControlLabel
                value="head"
                control={<Radio color="default" />}
                label="Head Shot"
              />
            </RadioGroup>
          </Box>
          <Box>
            <AppTypography className={classes.subTitle}>
              TBP Property Type
            </AppTypography>
            <Box className={classes.dropDown}>
              Single Family Residence
              <Box className={classes.arrowIcon}>
                <ArrowDownIcon />
              </Box>
            </Box>
          </Box>
          <Box>
            <AppTypography className={classes.subTitle}>
              Property Tax
            </AppTypography>
            <Box className={classes.dropDown}>
              Yes
              <Box className={classes.arrowIcon}>
                <ArrowDownIcon />
              </Box>
            </Box>
          </Box>
          <Box>
            <AppTypography className={classes.subTitle}>
              City/Country/State Stamps
            </AppTypography>
            <RadioGroup row>
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    color="default"
                    classes={{ checked: classes.checked }}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    color="default"
                    classes={{ checked: classes.checked }}
                  />
                }
                label="No"
              />
            </RadioGroup>
          </Box>
          <Box>
            <AppTypography className={classes.subTitle}>
              Upload Files
            </AppTypography>
            <Box className={classes.uploadFile}>
              <Box className={classes.uploadWrapper}>
                <ClaudeUploadIcon fillOpacity="0.3" />
                <AppTypography className={classes.uploadTitle}>
                  Upload Files
                </AppTypography>
              </Box>
              <Box className={classes.ContactWrapper}>
                <Box className={classes.contactIcon}>
                  <BlankPageIcon />
                </Box>
                <AppTypography className={classes.uploadTitle}>
                  Contact.pdf
                </AppTypography>
                <Box className={classes.contactClose}>
                  <CancelIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.buttonWrapper}>
        {!isMobile && (
          <>
            <AppButton variant="outlined" className={classes.discardBtn}>
              Discard changes
            </AppButton>
            <AppButton
              variant="contained"
              className={classes.saveBtn}
              startIcon={<CheckIcon />}
            >
              Save Changes
            </AppButton>
          </>
        )}
        {isMobile && (
          <>
            <AppButton
              variant="contained"
              className={classes.saveBtn}
              startIcon={<CheckIcon />}
            >
              Save Changes
            </AppButton>
            <AppButton variant="outlined" className={classes.discardBtn}>
              Discard changes
            </AppButton>
          </>
        )}
      </Box>
    </Box>
  );
};

export default General;
