import { Box, Grid } from "@material-ui/core";
import { useScreenSizeDown } from "../../../hooks";
import PaginationRounded from "../../elements/Pagination/PaginationRounded";
import ActionCollapse from "./ActionCollapse";
import ActionTable from "./ActionTable";
import Filter from "./Filter";
import { useStyles } from "./styles";

const data = [
  {
    id: "460010129690",
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    priority: "Medium",
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
  },
  {
    id: "460010129690",
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    priority: "High",
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
  },
  {
    id: "460010129690",
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    priority: "Extreme",
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
  },
  {
    id: "460010129690",
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    priority: "Low",
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
  },
  {
    id: "460010129690",
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    priority: "Extreme",
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
  },
  {
    id: "460010129690",
    borrowerName: {
      name: "Ilham Supriadi",
      company: "Ty35 Avenue GG London Center",
    },
    priority: "Low",
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
  },
];

const ActionPage = () => {
  const classes = useStyles();
  const isMobile = useScreenSizeDown("sm");
  return (
    <Box className={classes.root}>
      <Grid container className={classes.top}>
        <Filter />
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {!isMobile ? (
            <ActionTable rows={data} />
          ) : (
            <ActionCollapse data={data} />
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

export default ActionPage;
