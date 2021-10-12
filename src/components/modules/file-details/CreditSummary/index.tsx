import { useState } from "react";
import * as React from "react";
import { Box } from "@material-ui/core";
import RefreshIcon from "../../../elements/icons/Refresh";
import AppTypography from "../../../elements/Typography";
import CreditScoreModal from "../../../elements/modals/CreaditScore";
import { allColors } from "../../../foundation/palette";
import { useStyles } from "./styles";

const CreditSummary: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className={classes.root}>
      <Box marginBottom="26px" className={classes.flexWrapper}>
        <AppTypography className={classes.title}>
          Credit Summary
        </AppTypography>
        <RefreshIcon />
      </Box>
      <AppTypography color="textSecondary" fontSize={14} fontWeight={500}>
        Qualifing Score
      </AppTypography>
      <AppTypography
        style={{ margin: "8px 0 18px 0", color: allColors.green }}
        fontSize={24}
        fontWeight={700}
      >
        622 FICO v2
      </AppTypography>
      <AppTypography className={classes.txtBtn} onClick={handleOpen}>
        View all scores
      </AppTypography>
      <CreditScoreModal handleClose={handleClose} open={open} data={data} />
    </Box>
  );
};

export default CreditSummary;

const data = [
  {
    name: "Michal Tominaga",
    work: "Consumer",
    img: "/images/man(6).png",
    experien: 671,
    transaction: 636,
    equafan: 647,
  },
  {
    name: "Darlene Robertson",
    work: "Consumer",
    img: "/images/ralph.png",
    experien: 671,
    transaction: 636,
    equafan: 647,
  },
];
