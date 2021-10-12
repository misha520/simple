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
import CreditIcon from "../../../elements/icons/Credit";
import DocsIcon from "../../../elements/icons/Docs";
import FloodIcon from "../../../elements/icons/Flood";
import FraudIcon from "../../../elements/icons/Fraud";
import GeneralIcon from "../../../elements/icons/General";
import IdentifyIcon from "../../../elements/icons/Identify";
import LOSSystemIcon from "../../../elements/icons/LOSSystem";
import VOAVendorIcon from "../../../elements/icons/VOAVendor";
import VOEVendorIcon from "../../../elements/icons/VOEVendor";
import VOIVendorIcon from "../../../elements/icons/VOIVendor";
import { useStyles } from "./styles";

interface ItemCategory {
  label: string;
  icon: React.ReactNode;
}

const categoryList: ItemCategory[] = [
  { label: "General", icon: <GeneralIcon /> },
  { label: "Docs", icon: <DocsIcon /> },
  { label: "Credit", icon: <CreditIcon /> },
  { label: "LOS System", icon: <LOSSystemIcon /> },
  { label: "VOA Vendor", icon: <VOAVendorIcon /> },
  { label: "VOE Vendor", icon: <VOEVendorIcon /> },
  { label: "VOI Vendor", icon: <VOIVendorIcon /> },
  { label: "Identify", icon: <IdentifyIcon /> },
  { label: "Flood", icon: <FloodIcon /> },
  { label: "Fraud", icon: <FraudIcon /> },
  { label: "Company Details", icon: <CompanyDetailsIcon /> },
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
