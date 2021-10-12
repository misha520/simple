import { Box, Grid } from "@material-ui/core";
import { useScreenSizeDown } from "../../../hooks";
import CustomRPAIcon from "../../elements/icons/CustomRPA";
import DriveReportIcon from "../../elements/icons/DriveReport";
import FloodReportIcon from "../../elements/icons/FloodReport";
import IDIcon from "../../elements/icons/ID";
import VOAOrderIcon from "../../elements/icons/VOAOrder";
import VOEOrderIcon from "../../elements/icons/VOEOrders";
import PaginationRounded from "../../elements/Pagination/PaginationRounded";
import FilterCollapse from "./FilterCollapse";
import FilterTable from "./FilterTable";
import Calender from "./Search/Calendar";
import SearchBox from "./Search/SearchBox";
import { useStyles } from "./styles";

const data = [
  {
    type: {
      icon: <VOAOrderIcon />,
      name: "VOA",
    },
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    orderDate: {
      date: "26th March, 2020",
      status: "Submited",
    },
    status: "Processing",
    product: {
      name: "AccountChek",
      report: "D1 Assets Report",
    },
    orderNumber: "460010129690",
    timeRemaining: "20 Days",
  },
  {
    type: {
      icon: <CustomRPAIcon />,
      name: "RPA",
    },
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    orderDate: {
      date: "26th March, 2020",
      status: "Submited",
    },
    status: "Action",
    product: {
      name: "AccountChek",
      report: "D1 Assets Report",
    },
    orderNumber: "460010129690",
    timeRemaining: "20 Days",
  },
  {
    type: {
      icon: <DriveReportIcon />,
      name: "Drive",
    },
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    orderDate: {
      date: "26th March, 2020",
      status: "Submited",
    },
    status: "Error",
    product: {
      name: "AccountChek",
      report: "D1 Assets Report",
    },
    orderNumber: "460010129690",
    timeRemaining: "20 Days",
  },
  {
    type: {
      icon: <FloodReportIcon />,
      name: "Flood",
    },
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    orderDate: {
      date: "26th March, 2020",
      status: "Submited",
    },
    status: "Finished",
    product: {
      name: "AccountChek",
      report: "D1 Assets Report",
    },
    orderNumber: "460010129690",
    timeRemaining: "20 Days",
  },
  {
    type: {
      icon: <IDIcon />,
      name: "VOI",
    },
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    orderDate: {
      date: "26th March, 2020",
      status: "Submited",
    },
    status: "Processing",
    product: {
      name: "AccountChek",
      report: "D1 Assets Report",
    },
    orderNumber: "460010129690",
    timeRemaining: "20 Days",
  },
  {
    type: {
      icon: <VOEOrderIcon />,
      name: "VOE",
    },
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    orderDate: {
      date: "26th March, 2020",
      status: "Submited",
    },
    status: "Finished",
    product: {
      name: "AccountChek",
      report: "D1 Assets Report",
    },
    orderNumber: "460010129690",
    timeRemaining: "20 Days",
  },
];

const OrdersPage = () => {
  const classes = useStyles();
  const isMobile = useScreenSizeDown("sm");

  return (
    <Box className={classes.root}>
      <Grid container className={classes.top}>
        <SearchBox />
        <Calender />
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {!isMobile ? (
            <FilterTable rows={data} />
          ) : (
            <FilterCollapse data={data} />
          )}
        </Grid>
      </Grid>
      <Grid className={classes.bottom}>
        {!isMobile && <span>Showing 06 form 100 files</span>}
        <PaginationRounded round={5} />
      </Grid>
    </Box>
  );
};

export default OrdersPage;
