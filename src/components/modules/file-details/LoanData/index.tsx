import { Box } from "@material-ui/core";
import { Children, useState } from "react";
import RefreshIcon from "../../../elements/icons/Refresh";
import AppTypography from "../../../elements/Typography";
import DataRefreshModal from "../../../elements/modals/DataRefresh";
import { useStyles } from "./styles";

interface ItemProps {
  label: string;
  status: string;
  time: string;
}
const LoanDataList: ItemProps[] = [
  { label: "Mimo 3.4", status: "Good", time: "2 Hours" },
  { label: "AUS Response", status: "Bad", time: "3 Days" },
  { label: "Credit Data", status: "Update", time: "45 Days" },
  { label: "Documents", status: "Good", time: "3 Hours" },
];

const LoanData = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderListLabel = ({ label }: ItemProps) => {
    return (
      <Box marginTop="8px">
        <AppTypography fontWeight={400} fontSize={13}>
          {label}
        </AppTypography>
      </Box>
    );
  };
  const renderListStatus = ({ status }: ItemProps) => {
    return (
      <Box marginTop="8px" display="flex">
        <span
          className={classes.elipse}
          style={{
            backgroundColor: `${
              status === "Good"
                ? "#09BD3C"
                : status === "Bad"
                ? "#F822A2"
                : "#F99B2D"
            }`,
          }}
        />
        <AppTypography fontWeight={400} fontSize={13} style={{color:"#171B1E80"}} >
          {status}
        </AppTypography>
      </Box>
    );
  };
  const renderListTime = ({ time }: ItemProps) => {
    return (
      <Box marginTop="8px" marginRight="10px">
        <AppTypography fontWeight={400} fontSize={13} style={{color: `${time==="45 Days" ? "#F62064": "#171B1E80"}`}}>
          {time}
        </AppTypography>
      </Box>
    );
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.flexWrapper}>
        <AppTypography className={classes.title}>Loan Data</AppTypography>
        <Box className={classes.iconBtn} onClick={handleOpen}>
          <RefreshIcon />
        </Box>
        <DataRefreshModal handleClose={handleClose} open={open} />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box marginTop="17px">
          {Children.toArray(LoanDataList.map(renderListLabel))}
        </Box>
        <Box marginTop="17px">
          {Children.toArray(LoanDataList.map(renderListStatus))}
        </Box>
        <Box marginTop="17px">
          {Children.toArray(LoanDataList.map(renderListTime))}
        </Box>
      </Box>
    </Box>
  );
};

export default LoanData;
