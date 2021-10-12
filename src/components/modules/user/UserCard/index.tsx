import { Box, makeStyles } from "@material-ui/core";
import CardItem from "./CardItem";

interface Data {
  image: {
    src: string;
    background: string;
  };
  name: string;
  officer: string;
  email: string;
  branch: string;
}

const listUser: Data[] = [
  {
    image: {
      src: "/images/boy.png",
      background: "rgba(155, 220, 155, 0.17)",
    },
    name: "Michal Tominage",
    officer: "Loan Officer",
    email: "Tminage@info.com",
    branch: "Test Branch",
  },
  {
    image: {
      src: "/images/man(4).png",
      background: "rgba(182, 137, 95, 0.17)",
    },
    name: "Michal Tominage",
    officer: "Loan Officer",
    email: "Tminage@info.com",
    branch: "Test Branch",
  },
  {
    image: {
      src: "/images/woman(9).png",
      background: "rgba(230, 100, 110, 0.13)",
    },

    name: "Michal Tominage",
    officer: "Loan Officer",
    email: "Tminage@info.com",
    branch: "Test Branch",
  },
  {
    image: {
      src: "/images/girl(3).png",
      background: "rgba(212, 230, 100, 0.21)",
    },
    name: "Michal Tominage",
    officer: "Loan Officer",
    email: "Tminage@info.com",
    branch: "Test Branch",
  },
  {
    image: {
      src: "/images/man(14).png",
      background: "rgba(155, 220, 155, 0.17)",
    },
    name: "Michal Tominage",
    officer: "Loan Officer",
    email: "Tminage@info.com",
    branch: "Test Branch",
  },
  {
    image: {
      src: "/images/nun.png",
      background: "rgba(155, 220, 155, 0.17)",
    },
    name: "Michal Tominage",
    officer: "Loan Officer",
    email: "Tminage@info.com",
    branch: "Test Branch",
  },
  {
    image: {
      src: "/images/man(12).png",
      background: "rgba(212, 230, 100, 0.21)",
    },
    name: "Michal Tominage",
    officer: "Loan Officer",
    email: "Tminage@info.com",
    branch: "Test Branch",
  },
  {
    image: {
      src: "/images/woman(7).png",
      background: "rgba(155, 220, 155, 0.17)",
    },
    name: "Michal Tominage",
    officer: "Loan Officer",
    email: "Tminage@info.com",
    branch: "Test Branch",
  },
  {
    image: {
      src: "/images/pinup.png",
      background: "rgba(155, 220, 155, 0.17)",
    },

    name: "Michal Tominage",
    officer: "Loan Officer",
    email: "Tminage@info.com",
    branch: "Test Branch",
  },
  {
    image: {
      src: "/images/woman(7).png",
      background: "rgba(212, 230, 100, 0.21)",
    },
    name: "Michal Tominage",
    officer: "Loan Officer",
    email: "Tminage@info.com",
    branch: "Test Branch",
  },
  {
    image: {
      src: "/images/punk.png",
      background: "rgba(155, 220, 155, 0.17)",
    },
    name: "Michal Tominage",
    officer: "Loan Officer",
    email: "Tminage@info.com",
    branch: "Test Branch",
  },
  {
    image: {
      src: "/images/man(15).png",
      background: "rgba(155, 220, 155, 0.17)",
    },
    name: "Michal Tominage",
    officer: "Loan Officer",
    email: "Tminage@info.com",
    branch: "Test Branch",
  },
];

const useStyles = makeStyles(({breakpoints}) => ({
  rootCards: {
    display: "flex",
    gap: "33px",
    flexWrap: "wrap",
    marginTop: "25px",
    [breakpoints.down(1000)]: {
      gap: "10px"
    },
  },
}))

const UserCard = () => {
  const classes = useStyles({});
  return (
    <Box className={classes.rootCards}>
      {listUser.map((item, index) => (
        <CardItem key={index} data={item} />
      ))}
    </Box>
  );
};

export default UserCard;
