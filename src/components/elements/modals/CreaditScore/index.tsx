import { Modal, Backdrop, Fade, Box } from "@material-ui/core";
import { useStyles } from "./style";
import AppTypography from "../../Typography";
import CloseIcon from "../../icons/Close";

type dataT = {
  name: string;
  work: string;
  img: string;
  experien: number;
  transaction: number;
  equafan: number;
};

type PropsT = {
  handleClose: () => void;
  open: boolean;
  data: Array<dataT>;
};

const CreditScoreModal = ({ handleClose, open, data }: PropsT) => {
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
        <Box className={classes.paper}>
          <Box className={classes.titleWrapper}>
            <AppTypography className={classes.title}>
              Credit Scores
            </AppTypography>
            <Box className={classes.iconBtn} onClick={handleClose}>
              <CloseIcon />
            </Box>
          </Box>
          <CreditScoreCard data={data} />
        </Box>
      </Fade>
    </Modal>
  );
};

const CreditScoreCard = ({ data }: { data: Array<dataT> }) => {
  const classes = useStyles();
  return (
    <>
      {data.map(
        (
          { name, work, img, experien, transaction, equafan }: dataT,
          index: number
        ) => (
          <Box
            key={index}
            className={classes.scoreCardWrapper}
            style={{
              boxShadow:
                index === 0
                  ? "5px 10px 30px rgba(0, 0, 0, 0.1)"
                  : "0px 7px 15px rgba(38, 105, 93, 0.04)",
            }}
          >
            <Box display="flex" alignItems="center">
              <Box className={classes.avatarWrapper}>
                <img
                  draggable={false}
                  className={classes.avatar}
                  src={img}
                  alt="avatar"
                />
              </Box>
              <Box>
                <AppTypography className={classes.ownerName}>
                  {name}
                </AppTypography>
                <AppTypography className={classes.ownerWork}>
                  {work}
                </AppTypography>
              </Box>
            </Box>

            <Box display="flex">
              <Box className={classes.valueWrapper}>
                <AppTypography className={classes.subHead}>
                  Experian
                </AppTypography>
                <AppTypography className={classes.creditValue}>
                  {experien}
                </AppTypography>
              </Box>
              <Box className={classes.valueWrapper}>
                <AppTypography className={classes.subHead}>
                  Transaction
                </AppTypography>
                <AppTypography className={classes.creditValue}>
                  {transaction}
                </AppTypography>
              </Box>
              <Box className={classes.valueWrapper}>
                <AppTypography className={classes.subHead}>
                  Equafan
                </AppTypography>
                <AppTypography className={classes.creditValue}>
                  {equafan}
                </AppTypography>
              </Box>
            </Box>
          </Box>
        )
      )}
    </>
  );
};

export default CreditScoreModal;
