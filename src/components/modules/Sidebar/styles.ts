import { makeStyles } from "@material-ui/core";

const drawerWidth = "345px";

export const useStyles = makeStyles(({ shape, palette, breakpoints }) => ({
  root: {
    width: drawerWidth,
    flexShrink: 0,
  },
  list: {
    gap: "8px",
  },
  listItem: {
    gap: "26px",
    borderRadius: shape.borderRadius,
    height: "67px",
    marginBottom: "8px",
    "&:hover": {
      color: palette.all.blue,
      background: "#dff3ffbf",
      "& > svg > path": {
        fill: palette.all.blue,
      },
      "& > svg > g > path": {
        fill: palette.all.blue,
      },
      "& > button > span > svg > path": {
        fill: palette.all.blue,
      },
      "& > svg > g > g > path": {
        stroke: palette.all.blue,
      },
    },
  },
  active: {
    color: palette.all.blue,
    background: "#dff3ffbf",
    "& > svg > path": {
      fill: palette.all.blue,
    },
    "& > svg > g > path": {
      fill: palette.all.blue,
    },
    "& > button > span > svg > path": {
      fill: palette.all.blue,
    },
  },
  paper: {
    width: drawerWidth,
    position: "relative",
    padding: "20px 30px",
    border: "0px",
  },
  coverLogo: {
    width: "100%",
    height: "70px",
    paddingBottom: "30px",
    borderBottom: "1px solid #F8F8F8",
  },
  logo: {
    height: "56px",
    width: "150px",
    display: "block",
    marginLeft: "14px",
  },
  mainMenu: {
    fontSize: "16px",
    fontWeight: 500,
    margin: "0 0 28px 16px",
    [breakpoints.down("lg")]: {
      margin: "20px 0 28px 16px",
    },
  },
  rootProfile: {
    alignItems: "center",
    display: "flex",
  },
  avatar: {
    width: "60px",
    height: "60px",
  },
  accordion: {
    boxShadow: "none",
    "&:before": {
      background: "none",
    },
  },
  accordionSummary: {
    alignItems: "center",
    borderRadius: shape.borderRadius,
    border: "1px solid #EEEEEE",
    display: "flex",
    marginBottom: "28px",
    "& .MuiAccordionSummary-content.Mui-expanded": {
      margin: "12px 0"
    }
  },
  accordionSummaryIcon: {
    "&.MuiAccordionSummary-expandIcon.Mui-expanded": {
      transform: "rotate(90deg)",
    },
  },
}));
