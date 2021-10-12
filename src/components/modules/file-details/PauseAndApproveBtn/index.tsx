import { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import PauseProcessingModal from "../../../elements/modals/PauseProcessing";
import ApproveAndExportModal from "../../../elements/modals/ApproveAndExport";
import AppButton from "../../../elements/Button";
import PauseIcon from "../../../elements/icons/Pause";
import SendIcon from "../../../elements/icons/Send";
import { useScreenSizeDown } from "../../../../hooks";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  pauseBtn: {
    minWidth: "199px",
    height: "55px",
    lineHeight: "19px",
    background: "#fff",
    padding: "9px 14px",
    color: palette.all.yellow,
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
    whiteSpace: "nowrap",
    "&:hover .iconWrapper": { background: "#F3F6F94D" },
    [breakpoints.down("xs")]: {
      height: "40px",
      minWidth: "158px",
      padding: "7px 24px 7px 10px",
      fontSize: "10px",
    },
  },
  approveBtn: {
    minWidth: "199px",
    height: "55px",
    background: "#fff",
    padding: "9px 14px",
    color: palette.all.pest,
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
    "&:hover .iconWrapper": { background: "#F3F6F94D" },
    [breakpoints.down("xs")]: {
      height: "40px",
      minWidth: "158px",
      padding: "7px 24px 7px 10px",
      fontSize: "10px",
    },
  },
  btnTxt2: {
    color: "#C8C8C8",
    fontSize: "12px",
    fontWeight: 400,
    [breakpoints.down("xs")]: { display: "none" },
  },
  iconWrapper: {
    background: "#F3F6F9",
    borderRadius: "5px",
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
    height: "33px",
    width: "33px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: ".25s",
    marginRight: "13px",
    [breakpoints.down("xs")]: {
      height: "25px",
      width: "25px",
      marginRight: "10px",
    },
  },
}));

const PauseAndApproveBtn = () => {
  const isSmallSizeDown = useScreenSizeDown("sm");
  const classes = useStyles();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent={isSmallSizeDown ? "center" : "flex-end"}
      gridGap={isSmallSizeDown ? "9px" : "19px"}
    >
      <AppButton onClick={handleOpen1} className={classes.pauseBtn}>
        <Box className={`${classes.iconWrapper} iconWrapper`}>
          <PauseIcon size={isSmallSizeDown ? "small" : "large"} />
        </Box>
        <Box display="flex" flexDirection="column">
          Pause Processing
          <span className={classes.btnTxt2}>Started: 12 April 2021</span>
        </Box>
      </AppButton>
      <AppButton onClick={handleOpen2} className={classes.approveBtn}>
        <Box className={`${classes.iconWrapper} iconWrapper`}>
          <SendIcon size={isSmallSizeDown ? "small" : "large"} />
        </Box>
        Approve & Export
      </AppButton>
      <PauseProcessingModal handleClose={handleClose1} open={open1} />
      <ApproveAndExportModal handleClose={handleClose2} open={open2} />
    </Box>
  );
};

export default PauseAndApproveBtn;
