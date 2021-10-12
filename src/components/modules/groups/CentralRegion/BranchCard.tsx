import { Box, Menu, MenuItem, Typography } from "@material-ui/core";
import { FC, useState } from "react";
import { BranchCardData } from ".";
import AppButton from "../../../elements/Button";
import MoreIcon from "../../../elements/icons/MoreIcon";
import { useStyles } from "./styles";

interface BranchCardProps {
  data: BranchCardData;
}
const BranchCard: FC<BranchCardProps> = ({ data }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const optionMenu = [
    {
      value: "edit",
      label: "Edit",
    },
    {
      value: "setting",
      label: "Setting",
    },
    {
      value: "delete",
      label: "Delete",
    },
  ];

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box className={classes.cardContainer}>
      <Box className={classes.BranchNameCover}>
        <span className={classes.branchName}>{data.name}</span>
        <AppButton className={classes.MoreBtnCard}>
          <MoreIcon />
        </AppButton>
        <AppButton className={classes.MoreBtnCard} onClick={handleClickMenu}>
          <MoreIcon />
        </AppButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {optionMenu.map((option, index) => (
            <MenuItem
              key={index}
              className={classes.menuItem}
              onClick={handleClose}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <p className={classes.description}>{data.description}</p>
      <Box className={classes.usersCover}>
        <span className={classes.numUsers}>{data.numUsers} Users</span>
        <Box className={classes.imagesContainer}>
          <Typography
            classes={{ root: classes.imagesRoot, body1: classes.imageFist }}
          >
            <img src="images/man(15).png" alt="" className={classes.images} />
          </Typography>
          <Typography
            classes={{ root: classes.imagesRoot, body1: classes.imageSecond }}
          >
            <img src="images/woman(1).png" alt="" className={classes.images} />
          </Typography>
          <Typography
            classes={{ root: classes.imagesRoot, body1: classes.imageThird }}
          >
            <img src="images/witch.png" alt="" className={classes.images} />
          </Typography>
          <Typography
            classes={{ root: classes.imagesRoot, body1: classes.imageFourth }}
          >
            <img src="images/nun.png" alt="" className={classes.images} />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default BranchCard;
