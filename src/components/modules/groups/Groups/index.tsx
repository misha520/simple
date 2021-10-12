import {
  Box,
  FormControl,
  List,
  ListItem,
  Menu,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useState } from "react";
import { useScreenSizeDown } from "../../../../hooks";
import AppButton from "../../../elements/Button";
import MoreIcon from "../../../elements/icons/MoreIcon";
import SearchOnGroups from "../elements/SearchOnGroups";
import { useStyles } from "./styles";

interface ItemCategory {
  value: string;
  label: string;
}

const categoryList: ItemCategory[] = [
  { value: "central", label: "Central Region" },
  { value: "default1", label: "Corporate Default" },
  { value: "default2", label: "Corporate Default" },
  { value: "default3", label: "Corporate Default" },
  { value: "default4", label: "Corporate Default" },
  { value: "default5", label: "Corporate Default" },
  { value: "default6", label: "Corporate Default" },
  { value: "default7", label: "Corporate Default" },
  { value: "default8", label: "Corporate Default" },
  { value: "default9", label: "Corporate Default" },
];

interface PropsGroups {
  tab: string;
  handleChangeTab: (item: string) => void;
  handleChangeTabOnMobile: (event: any) => void;
}

const Groups: React.FC<PropsGroups> = ({
  handleChangeTab,
  tab,
  handleChangeTabOnMobile,
}) => {
  const classes = useStyles();
  const isMobile = useScreenSizeDown(900);
  const [anchorEl, setAnchorEl] = useState(null);
  const optionMenu = [
    {
      value: "edit",
      label: "Edit",
    },
    {
      value: "move",
      label: "Move",
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
    <>
      {!isMobile && (
        <Box className={classes.root}>
          <Box className={classes.title}>
            <span className={classes.titleTxt}>Groups</span>
        
            <AppButton
              className={classes.MoreBtn}
              onClick={handleClickMenu}
            >
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
          <Box style={{ padding: "20px", borderBottom: "1px solid #EEEEEE" }}>
            <SearchOnGroups />
          </Box>
          <List style={{ paddingBottom: 0, paddingTop: "30px" }}>
            {categoryList.map((item, index) => (
              <ListItem
                key={index}
                style={{ borderTop: `${index === 0 && "none"}` }}
                onClick={() => handleChangeTab(item.value)}
                classes={{
                  root: classes.itemList,
                  gutters: `${tab === item.value ? classes.itemActive : ""}`,
                }}
              >
                <span className={classes.itemTxt}>{item.label}</span>
              </ListItem>
            ))}
          </List>
          <Box className={classes.coverLoadMore}>
            <AppButton className={classes.loadMoreBtn}>Load More </AppButton>
          </Box>
        </Box>
      )}
      {isMobile && (
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            value={tab}
            onChange={handleChangeTabOnMobile}
            classes={{
              root: classes.select,
            }}
          >
            {categoryList.map((option, index) => (
              <MenuItem
                key={index}
                classes={{
                  root: classes.itemDropdown,
                  selected: classes.itemSelected,
                }}
                value={option.value}
              >
                <span>{option.label}</span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default Groups;
