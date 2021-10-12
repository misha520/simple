import { useState } from "react";
import * as React from "react";
import { Box, BoxProps } from "@material-ui/core";
import clsx from "clsx";
import AppTypography from "../../../elements/Typography";
import MoreVerticalIcon from "../../../elements/icons/MoreVertical";
import { useStyles, useBorrowerStyles } from "./styles";
import { useScreenSizeDown } from "../../../../hooks";
import BorrowersModal from "../../../elements/modals/Borrowers";

const Borrowers: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isSmallSizeDown = useScreenSizeDown("sm");
  return (
    <Box className={classes.root}>
      <Box className={classes.flexWrapper}>
        <AppTypography className={classes.title}>
          Borrowers
        </AppTypography>
        <MoreVerticalIcon />
      </Box>
      <Borrower rootProps={{ style: { marginTop: isSmallSizeDown ? "12px" : "30px", marginBottom: "20px" } }} />
      <Borrower rootProps={{ style: { marginBottom: "12px" } }} />
      <AppTypography className={classes.txtBtn} onClick={handleOpen}>
        2 More Borrows
      </AppTypography>
      <BorrowersModal handleClose={handleClose} open={open} data={data} />
    </Box>
  );
};

interface BorrowerProps {
  rootProps?: BoxProps;
}

const Borrower: React.FC<BorrowerProps> = ({ rootProps }) => {
  const classes = useBorrowerStyles();
  return (
    <Box {...rootProps} className={clsx(classes.root, rootProps?.className)}>
      <Box className={classes.detailsWrapper}>
        <AppTypography
          style={{ marginBottom: "5px" }}
          fontWeight={500}
          fontSize={16}
          color="primary"
        >
          John Homeowner
        </AppTypography>

        <Box className={classes.textWrapper}>
          <AppTypography fontWeight={600} fontSize={13}>
            P :
          </AppTypography>
          <AppTypography fontWeight={400} color="textSecondary" fontSize={13}>
            +1 258 345 9654
          </AppTypography>
        </Box>
        <Box className={classes.textWrapper}>
          <AppTypography fontWeight={600} fontSize={13}>
            E :
          </AppTypography>
          <AppTypography fontWeight={400} color="textSecondary" fontSize={13}>
            millsmith@gmail.com
          </AppTypography>
        </Box>
        <Box className={classes.textWrapper}>
          <AppTypography fontWeight={600} fontSize={13}>
            A :
          </AppTypography>
          <AppTypography fontWeight={400} color="textSecondary" fontSize={13}>
            TY35 Avenue GG London Center
          </AppTypography>
        </Box>
      </Box>
    </Box>
  );
};

export default Borrowers;

const data = [
  {
    name: "John Homeowner",
    pNo: "+1 258 345 9654",
    email: "millsmith@gmail.com",
    address: "TY35 Avenue GG London Center",
  },
  {
    name: "Mary Homeowner",
    pNo: "+1 258 345 9654",
    email: "millsmith@gmail.com",
    address: "TY35 Avenue GG London Center",
  },
  {
    name: "Cameron Williamson",
    pNo: "+1 258 345 9654",
    email: "millsmith@gmail.com",
    address: "TY35 Avenue GG London Center",
  },
  {
    name: "Darlene Robertson",
    pNo: "+1 258 345 9654",
    email: "millsmith@gmail.com",
    address: "TY35 Avenue GG London Center",
  },
  {
    name: "John Homeowner",
    pNo: "+1 258 345 9654",
    email: "millsmith@gmail.com",
    address: "TY35 Avenue GG London Center",
  },
  {
    name: "Mary Homeowner",
    pNo: "+1 258 345 9654",
    email: "millsmith@gmail.com",
    address: "TY35 Avenue GG London Center",
  },
  {
    name: "Cameron Williamson",
    pNo: "+1 258 345 9654",
    email: "millsmith@gmail.com",
    address: "TY35 Avenue GG London Center",
  },
  {
    name: "Darlene Robertson",
    pNo: "+1 258 345 9654",
    email: "millsmith@gmail.com",
    address: "TY35 Avenue GG London Center",
  },
  {
    name: "John Homeowner",
    pNo: "+1 258 345 9654",
    email: "millsmith@gmail.com",
    address: "TY35 Avenue GG London Center",
  },
  {
    name: "Mary Homeowner",
    pNo: "+1 258 345 9654",
    email: "millsmith@gmail.com",
    address: "TY35 Avenue GG London Center",
  },
  {
    name: "Cameron Williamson",
    pNo: "+1 258 345 9654",
    email: "millsmith@gmail.com",
    address: "TY35 Avenue GG London Center",
  },
  {
    name: "Darlene Robertson",
    pNo: "+1 258 345 9654",
    email: "millsmith@gmail.com",
    address: "TY35 Avenue GG London Center",
  },
];
