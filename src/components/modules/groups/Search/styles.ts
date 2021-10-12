import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    rootSearchBox: {
      width: "700px",
      height: "60px",
      display: "flex",
      border: `1px solid rgba(156, 150, 158, 0.15)`,
      borderRadius: "14px",
      [breakpoints.down(1250)]: {
        width: "455px",
      },
      [breakpoints.down(1000)]: {
        width: "100%",
        marginBottom: "20px",
      },
    },
    rootSelectButton: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      [breakpoints.down(1000)]: {
        width: "100%",
        justifyContent: "space-between",
      },
    },
    box: { 
      borderLeft: `1px solid rgba(156, 150, 158, 0.15)`,
      width: "100%",
      gap: "20px",
      padding: "12px 18px",
      position: "relative",
      [breakpoints.down(600)]: {
       fontSize: "14px"
      },
    },
    iconButton: { 
      position: "absolute",
      right: "20px",
      "& > span > svg > path": {
        fill: palette.all.gray,
      },
    },

    select: { 
      padding: "18px 41px 18px 21px !important",
      background: "#none ",
      color: palette.all.gray,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "21px",

      "& ~ svg": {
        color: palette.all.gray,
      },

      "& ~ fieldset": {
        border: "none",
        borderRadius: "14px",
      },
      [breakpoints.down(600)]: {
        fontSize: "12px"
       },
    },
    itemDropdown: {
      fontSize: "14px",
      color: palette.all.gray,
    },
    itemSelected: { 
      color: `${palette.all.black} !important`,
      background: "#fff !important",
    },
    formControl: { 
      minWidth: "200px",
      [breakpoints.down("sm")]: {
        minWidth: 0,
      },
    },
    createBtn: { 
      background: "#35B6FE33",
      color: palette.all.blue,
      height: "54px",
      padding: "0 30px",
      fontSize: "18px",
      [breakpoints.down(1300)]: {
        padding: "0 15px",
      },
      [breakpoints.down(1000)]: {
        width: "calc(50% - 12px)",
        padding: "0 12px",
        minWidth: "115px",
        fontSize: "14px",
      },
      [breakpoints.down(600)]: {
        fontSize: "12px",
        padding: "0 2px",
        "& > span > svg": {
          width: "20px"
        }
      },
    },
    createBranchBtn: {
      color: palette.all.pest,
      background: `${palette.all.pest}33`
    },
    
    overlay: { 
      width: window.innerWidth,
      height: window.innerHeight,
      position: "fixed",
      top: "0",
      left: "0",
    },
  }),
  { index: 1 }
);
