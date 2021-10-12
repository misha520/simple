import {
  Box,
  FormControl,
  List,
  ListItem,
  MenuItem,
  Select,
} from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import { useScreenSizeDown } from "../../../../hooks";
import CompanyDetailsIcon from "../../../elements/icons/CompanyDetails";
import DocsIcon from "../../../elements/icons/Docs";
import FloodIcon from "../../../elements/icons/Flood";
import IdentifyIcon from "../../../elements/icons/Identify";
import { useStyles } from "./styles";

interface ItemCategory {
  label: string;
  icon: React.ReactNode;
}

const categoryList: ItemCategory[] = [
  { label: "Profile", icon: <IdentifyIcon /> },
  { label: "Notifications", icon: <FloodIcon /> },
  { label: "Assignments", icon: <DocsIcon /> },
  { label: "Reporting", icon: <CompanyDetailsIcon /> },
];

interface PropsCategories {
  tab: string;
  handleChangeTab: (item: string) => void;
  handleChangeTabOnMobile: (event: any) => void;
}

const Categories: React.FC<PropsCategories> = ({
  handleChangeTab,
  tab,
  handleChangeTabOnMobile,
}) => {
  const classes = useStyles();
  const isMobile = useScreenSizeDown(900);

  return (
    <>
      {!isMobile && (
        <Box className={classes.root}>
          <Box className={classes.title}>
            <span className={classes.titleTxt}>Categories</span>
            <MoreHoriz />
          </Box>
          <List style={{ paddingBottom: 0 }}>
            {categoryList.map((item, index) => (
              <ListItem
                key={index}
                style={{ borderTop: `${index === 0 && "none"}` }}
                onClick={() => handleChangeTab(item.label)}
                classes={{
                  root: classes.itemList,
                  gutters: `${tab === item.label ? classes.itemActive : ""}`,
                }}
              >
                {item.icon}
                <span className={classes.itemTxt}>{item.label}</span>
              </ListItem>
            ))}
          </List>
          <Box height="100px" style={{ borderTop: "1px solid #EEEEEE" }}></Box>
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
                value={option.label}
              >
                {option.icon}
                <span>{option.label}</span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default Categories;
