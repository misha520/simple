import { Box, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useScreenSizeDown } from "../../../hooks";
import PauseIcon from "../../elements/icons/Pause";
import PlayIcon from "../../elements/icons/Play";
import SendIcon from "../../elements/icons/Send";
import PaginationRounded from "../../elements/Pagination/PaginationRounded";
import FilterCollapse from "./FilterCollapse";
import FilterTable from "./FilterTable";
import Calender from "./Search/Calendar";
import SearchBox from "./Search/SearchBox";
import { useStyles } from "./styles";

const data = [
  {
    id: "460010129690",
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    status: "Processing",
    closing: {
      date: "26th March, 2020",
      status: "Submited",
    },
    processing: {
      percent: "75%",
      color: "#35B6FE",
    },
    owner: {
      image: "/images/man(4).png",
      name: "Brad Simmons",
      number: 3,
    },
    action: {
      status: "Pause Processing",
      dateStart: "12 April 2021",
      icon: <PauseIcon size="large" />,
      color: "#FFC02B",
    },
  },
  {
    id: "460010129690",
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    status: "Finished",
    closing: {
      date: "26th March, 2020",
      status: "Submited",
    },
    processing: {
      percent: "75%",
      color: "#F62064",
    },
    owner: {
      image: "/images/boy.png",
      name: "Brad Simmons",
      number: 3,
    },
    action: {
      status: "Pause Processing",
      dateStart: "12 April 2021",
      icon: <PlayIcon fill="#9C969E" />,
      color: "#9C969E",
    },
  },
  {
    id: "460010129690",
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    status: "Action",
    closing: {
      date: "26th March, 2020",
      status: "Submited",
    },
    processing: {
      percent: "50%",
      color: "#29C9C1",
    },
    owner: {
      image: "/images/louis.png",
      name: "Brad Simmons",
      number: 3,
    },
    action: {
      status: "Pause Processing",
      dateStart: "12 April 2021",
      icon: <SendIcon size="small" />,
      color: "#29C9C1",
    },
  },
  {
    id: "460010129690",
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    status: "Processing",
    closing: {
      date: "26th March, 2020",
      status: "Submited",
    },
    processing: {
      percent: "40%",
      color: "#2FBD57",
    },
    owner: {
      image: "/images/woman1.png",
      name: "Brad Simmons",
      number: 3,
    },
    action: {
      status: "Pause Processing",
      dateStart: "12 April 2021",
      icon: <PauseIcon size="large" />,
      color: "#FFC02B",
    },
  },
  {
    id: "460010129690",
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    status: "Processing",
    closing: {
      date: "26th March, 2020",
      status: "Submited",
    },
    processing: {
      percent: "60%",
      color: "#35B6FE",
    },
    owner: {
      image: "/images/man(4).png",
      name: "Brad Simmons",
      number: 3,
    },
    action: {
      status: "Pause Processing",
      dateStart: "12 April 2021",
      icon: <SendIcon size="small" />,
      color: "#29C9C1",
    },
  },
  {
    id: "460010129690",
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    status: "Cancel",
    closing: {
      date: "26th March, 2020",
      status: "Submited",
    },
    processing: {
      percent: "80%",
      color: "#F62064",
    },
    owner: {
      image: "/images/boy.png",
      name: "Brad Simmons",
      number: 3,
    },
    action: {
      status: "Pause Processing",
      dateStart: "12 April 2021",
      icon: <PauseIcon size="large" />,
      color: "#FFC02B",
    },
  },
];

const FilterPage = () => {
  const classes = useStyles();
  const isMobile = useScreenSizeDown("sm");
  const history = useHistory();
  const handleClickItem = () => {
    history.push("/file-detail");
  };
  return (
    <Box className={classes.root}>
      <Grid container className={classes.top}>
        <SearchBox />
        <Calender />
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {!isMobile ? (
            <FilterTable rows={data} handleClickItem={handleClickItem} />
          ) : (
            <FilterCollapse data={data} handleClickItem={handleClickItem} />
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

export default FilterPage;
