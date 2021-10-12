import { useState, useEffect } from "react";
import { Modal, Backdrop, Fade, Box } from "@material-ui/core";
import { useStyles } from "./style";
import { palette } from "../../../foundation/palette";
import AppTypography from "../../Typography";
import CloseIcon from "../../icons/Close";

type PropsT = {
  handleClose: () => void;
  open: boolean;
  data: Array<{ name: string; pNo: string; email: string; address: string }>;
};

const BorrowersModal = ({ handleClose, open, data }: PropsT) => {
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
            <AppTypography className={classes.title}>Borrowers</AppTypography>
            <div className={classes.iconBtn} onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>
          <BorrowerCard data={data} />
        </div>
      </Fade>
    </Modal>
  );
};

type dataT = {
  name: string;
  pNo: string;
  email: string;
  address: string;
};

const BorrowerCard = ({ data }: { data: Array<dataT> }) => {
  const classes = useStyles();
  const [colorArray, setColorArray] = useState<Array<string>>([]);

  const Colors = [
    palette.all.blue,
    palette.all.yellow,
    palette.all.pest,
    palette.all.green,
  ];

  useEffect(() => {
    let listLength = data.length;
    let newArray = [];
    for (let i = 0; i < listLength; i++) {
      if (newArray.length < listLength) {
        newArray.push(...Colors);
      }
    }
    setColorArray(newArray);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {data.map(({ name, pNo, email, address }: dataT, index: number) => (
        <Box
          key={index}
          className={classes.borrowerCard}
          style={{
            boxShadow:
              index === 0
                ? "5px 10px 30px rgba(0, 0, 0, 0.1)"
                : "0px 7px 15px rgba(38, 105, 93, 0.04)",
          }}
        >
          <AppTypography
            className={classes.nameTxt}
            style={{
              color: colorArray[index],
            }}
          >
            {name}
          </AppTypography>
          <AppTypography className={classes.detailTxt}>
            <span className={classes.detailTxtHeading}>P : </span>
            {pNo}
          </AppTypography>
          <AppTypography className={classes.detailTxt}>
            <span className={classes.detailTxtHeading}>E : </span>
            {email}
          </AppTypography>
          <AppTypography className={classes.detailTxt}>
            <span className={classes.detailTxtHeading}>A : </span>
            {address}
          </AppTypography>
        </Box>
      ))}
    </>
  );
};

export default BorrowersModal;
