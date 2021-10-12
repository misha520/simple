import { makeStyles } from "@material-ui/core";
import { FileProcessingProps } from "./FileProcessing";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    processContainer: {
      minHeight: "200px",
      minWidth: "310px",
      boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
      background: "#FFFFFF",
      borderRadius: "14px",
      padding: "32px 30px 35px 30px",
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      [breakpoints.down("xs")]: {
        padding: "14px 16px",
        minHeight: "120px",
        minWidth: "unset",
      },
    },
    processText: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      paddingTop: "27px",
      [breakpoints.down("xs")]: {
        paddingBottom: "18px",
        paddingTop: "18px",
      },
    },
    numberReady: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    title: {
      color: palette.all.black,
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      position: "absolute",
      top: "32px",
      [breakpoints.down("xs")]: {
        fontSize: "12px",
        lineHeight: "18px",
        top: "16px",
      },
    },
    processNumber: {
      color: palette.all.black,
      fontWeight: "bold",
      fontSize: "48px",
      lineHeight: "72px",
      [breakpoints.down("xs")]: {
        fontSize: "30px",
        lineHeight: "45px",
      },
    },
    subtitle: {
      color: "#8c8d8e",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      position: "absolute",
      bottom: "35px",
      [breakpoints.down("xs")]: {
        fontSize: "12px",
        lineHeight: "18px",
        bottom: "16px",
      },
    },
    percentSubtitle: {
      color: palette.all.pest,
    },
    processingContainer: {
      marginBottom: "17px",
      position: "relative",
      height: "10px",
      width: "190px",
      paddingTop: "55px",
      [breakpoints.down("xs")]: {
        width: "68px",
        height: "8px",
        paddingTop: "34px",
      },
    },
    processing: {
      width: "190px",
      borderRadius: "3px",
      background: `${palette.all.gray}`,
      height: "10px",
      opacity: 0.15,
      position: "absolute",
      [breakpoints.down("xs")]: {
        width: "68px",
        height: "8px",
      },
    },
    processingAvailable: {
      background: palette.all.yellow,
      height: "10px",
      opacity: 1,
      borderRadius: "3px",
      width: (props: FileProcessingProps) => `${props.percent}%`,
      position: "absolute",
      [breakpoints.down("xs")]: {
        height: "8px",
      },
    },
    numberSubtitle: {
      color: palette.all.yellow,
    },
    readyProcessImg: {
      paddingTop: "7px",
      [breakpoints.down("xs")]: {
        "& > svg": {
          width: "52px",
          height: "52px",
        },
      },
    },
    processingNumber: {
      paddingTop: "24px",
      [breakpoints.down("xs")]: {
        paddingTop: "15px",
      },
    },
    needImg: {
      display: "flex",
      alignItems: "center",
      [breakpoints.down("xs")]: {
        "& > svg": {
          height: "50px",
          width: "40px",
        },
      },
    },
    numberGroup: {
      display: "flex",
      alignItems: "center",
      paddingBottom: "4px",
      paddingTop: "30px",
      [breakpoints.down("xs")]: {
        paddingTop: "20px",
      },
    },
    percentGroup: {
      paddingLeft: "12px",
      display: "flex",
      flexDirection: "column",
      [breakpoints.down("xs")]: {
        "& > svg": {
          height: "5px",
          width: "11px",
        },
      },
    },
    percentNeed: {
      color: palette.all.red,
      fontWeight: "bold",
      fontSize: "16px",
      lineHeight: "24px",
      paddingTop: "8px",
      [breakpoints.down("xs")]: {
        paddingTop: "2px",
        fontWeight: 500,
        fontSize: "8px",
        lineHeight: "12px",
      },
    },
    percentFinished: {
      color: palette.all.green,
      fontWeight: "bold",
      fontSize: "16px",
      lineHeight: "24px",
      paddingTop: "8px",
      [breakpoints.down("xs")]: {
        paddingTop: "2px",
        fontWeight: 500,
        fontSize: "8px",
        lineHeight: "12px",
      },
    },
    doughnutChart: {
      width: "95px",
      height: "95px",
      position: "relative",
      [breakpoints.down("xs")]: {
        width: "60px",
        height: "60px",
        cutout: 0,
      },
    },
    percent: {
      left: "53%",
      top: "55%",
      transform: "translate(-50%, -50%)",
      color: palette.all.green,
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      position: "absolute",
      [breakpoints.down("xs")]: {
        top: "60%",
        fontSize: "12px",
      },
    },
  }),
  { index: 1 }
);
