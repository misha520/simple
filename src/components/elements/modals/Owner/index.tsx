import { Modal, Backdrop, Fade, Box } from "@material-ui/core";
import { useStyles } from "./style";
import AppTypography from "../../Typography";
import CloseIcon from "../../icons/Close";
import DeleteWithBackgroundIcon from "../../icons/DeleteWithBackground";
import AppButton from "../../Button";

type dataT = {
  firstName: string;
  lastName: string;
  work: string;
  img: string;
};

type PropsT = {
  handleClose: () => void;
  open: boolean;
  data: Array<dataT>;
};

const OwnerModal = ({ handleClose, open, data }: PropsT) => {
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
            <AppTypography className={classes.title}>Owners</AppTypography>
            <div className={classes.iconBtn} onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>
          <OwnerCard data={data} />
          <AppButton className={classes.addBtn}>Add New</AppButton>
        </div>
      </Fade>
    </Modal>
  );
};

const OwnerCard = ({ data }: { data: Array<dataT> }) => {
  const classes = useStyles();
  return (
    <>
      {data.map(({ firstName, lastName, work, img }: dataT, index: number) => (
        <Box
          key={index}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex">
            <Box className={classes.avatarWrapper}>
              <img
                className={classes.avatar}
                src={img}
                alt="avatar"
                draggable={false}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <AppTypography className={classes.ownerName}>
                {firstName}
                <br />
                {lastName}
              </AppTypography>
              <AppTypography className={classes.ownerWork}>
                {work}
              </AppTypography>
            </Box>
          </Box>
          <Box className={classes.iconBtn}>
            <DeleteWithBackgroundIcon />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default OwnerModal;
