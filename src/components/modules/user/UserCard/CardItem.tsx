import { Box, Button, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import MoreIcon from "../../../elements/icons/MoreIcon";
import { useStyles } from "./styles";

export interface CardItemProps {
  data: {
    image: {
      src: string;
      background: string;
    };
    name: string;
    officer: string;
    email: string;
    branch: string;
  };
}

const CardItem: React.FC<CardItemProps> = ({ data }) => {
  const classes = useStyles({data});
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
    <Box className={classes.rootCardItem}>
      <Box className={classes.card}>
        <Box className={classes.cardImgContainer}>
          <img src={data.image.src} alt="" className={classes.cardImg} />
          <span className={classes.borderWhite}></span>
        </Box>
        <span className={classes.nameTxt}>{data.name}</span>
        <span className={classes.officerTxt}>{data.officer}</span>
        <span className={classes.email}>{data.email}</span>
        <span className={classes.testBranch}>{data.branch}</span>
      </Box>
      <Button
        className={classes.moreIcon}
        onClick={handleClickMenu}
      >
        <MoreIcon />
      </Button>
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
  );
};

export default CardItem;
