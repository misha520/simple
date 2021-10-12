import { Box, InputBase, makeStyles } from "@material-ui/core";
import * as React from "react";
import AppButton from "../../../elements/Button";
import AppTypography from "../../../elements/Typography";

const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      padding: "6px 0 6px 52px",
    },
    horizontalFlexWrapper: {
      background: palette.background.paper,
      borderRadius: "10px",
      boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
      display: "flex",
      height: "60px",
      justifyContent: "space-between",
      padding: "0 10px",
    },
    verticalFlexWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      paddingRight: "30px",
    },
    noteCardWrapper: {
      background: palette.background.paper,
      borderRadius: "10px",
      boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
      display: "flex",
      minHeight: "60px",
      justifyContent: "space-between",
      padding: "10px",
      [breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    avatarBox: {
      background: "#E6646E21",
      height: "40px",
      width: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      borderRadius: "5px",
      "& > img": {
        width: "32px",
        height: "32px",
      },
    },
    dateTimeTxt: {
      fontSize: "10px",
      fontWeight: 500,
      textAlign: "right",
      [breakpoints.down("sm")]: {
        textAlign: "left",
      },
    },
    txtTimeWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [breakpoints.down("sm")]: {
        padding: "8px 0 0px 55px",
      },
    },
  }),
  { index: 1 }
);

const NotesTabPanel: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.verticalFlexWrapper}>
        <AppTypography fontSize={14} fontWeight={500}>
          Today
        </AppTypography>
        <Note image="/images/boy.png" />
        <Note image="/images/woman1.png" />
      </Box>
      <Box className={classes.verticalFlexWrapper}>
        <AppTypography fontSize={14} fontWeight={500}>
          23 April 2021
        </AppTypography>
        <Note image="/images/ralph.png" />
      </Box>
      <NoteInput />
    </Box>
  );
};

const Note: React.FC<{ image: string }> = ({ image }) => {
  const classes = useStyles();
  return (
    <Box className={classes.noteCardWrapper}>
      <Box display="flex" alignItems="center">
        <Box className={classes.avatarBox}>
          <img src={image} alt="avatar" draggable={false} />
        </Box>
        <Box marginLeft="16px">
          <AppTypography fontWeight={500} fontSize={14}>
            Michal Tominaga
          </AppTypography>
          <AppTypography color="textSecondary" fontWeight={400} fontSize={12}>
            Processor
          </AppTypography>
        </Box>
      </Box>
      <Box className={classes.txtTimeWrapper}>
        <AppTypography color="textSecondary" fontSize={14} fontWeight={400}>
          Submit application form & edit profile data
        </AppTypography>
        <AppTypography color="textSecondary" className={classes.dateTimeTxt}>
          10:30 PM 23 Sep, 2020
        </AppTypography>
      </Box>
    </Box>
  );
};

const NoteInput: React.FC = () => {
  const classes = useStyles();
  return (
    <InputBase
      className={classes.horizontalFlexWrapper}
      placeholder="Writing your note here "
      endAdornment={
        <AppButton
          style={{ borderRadius: "5px" }}
          color="primary"
          variant="contained"
        >
          Submit
        </AppButton>
      }
    />
  );
};

export default NotesTabPanel;
