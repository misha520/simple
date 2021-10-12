import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: "25%",
    background: "#fff",
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
    borderRadius: "20px",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px 25px",
    "& > svg > path": {
      fill: "#9C969E",
    },
  },
  titleTxt: {
    fontSize: "20px",
    fontWeight: 600,
    color: palette.all.black,
  },
  itemList: {
    display: "flex",
    alignItems: "center",
    height: "100px",
    padding: "25px",
    borderTop: "1px solid #EEEEEE",
    cursor: "pointer",
    "&:hover": {
      color: palette.all.blue,
      background: "#F6F6F6",
      borderLeft: `4px solid ${palette.all.blue}`,
      "& span": {
        color: palette.all.blue,
      },
      "& > svg > path": {
        fill: palette.all.blue,
      },
    },
  },
  itemTxt: {
    fontWeight: 500,
    fontSize: "18px",
    color: "rgba(23, 27, 30, 0.5)",
    paddingLeft: "20px",
  },
  itemActive: {
    color: palette.all.blue,
    background: "#F6F6F6",
    borderLeft: `4px solid ${palette.all.blue}`,
    "& span": {
      color: palette.all.blue,
    },
    "& > svg > path": {
      fill: palette.all.blue,
    },
  },
  formControl: {
    width: "100%",
    borderRadius: "20px 20px 0 0",
    "& .MuiSelect-outlined": {
      borderRadius: "20px 20px 0 0",
      borderBottom: "1px solid #EEEEEE",
    },
  },
  select: {
    display: "flex",
    alignItems: "center",
    color: palette.all.blue,
    fontSize: "20px",
    fontWeight: 600,
    background: "#fff",
    padding: "30px",
    "& span": {
      marginLeft: "10px",
    },
    "& svg > path": {
      fill: palette.all.blue,
    },

    "& ~ fieldset": {
      border: "none",
      borderRadius: "20px !important",
    },
  },
  itemSelected: {
    fontWeight: 500,
    fontSize: "16px !important",
    color: `${palette.all.blue} !important`,
    background: "#fff !important",
    "& svg > path": {
      fill: palette.all.blue,
    },
    "& span": {
      marginLeft: "10px",
    },
  },
  itemDropdown: {
    fontSize: "16px",
    color: palette.all.gray,
    "& span": {
      marginLeft: "10px",
    },
  },
}));
