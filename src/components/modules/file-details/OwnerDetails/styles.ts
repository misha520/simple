import { makeStyles } from "@material-ui/core";
import { OwnerDetailsPieChartProps } from "./PieChart";

export const useStyles = makeStyles(({ palette }) => {
  const getColor = (percent: number) => {
    if (percent > 75) {
      return palette.all.green;
    }
    if (percent > 50) {
      return palette.all.yellow;
    }
    if (percent > 25) {
      return palette.all.orange;
    }
    return palette.all.red;
  };

  return {
    root: {
      width: 135,
      height: 118,
      position: "relative",
    },
    container: {
      width: 135,
      height: 135,
      position: "absolute",
      top: 0,
      left: 0,
    },
    inner: {
      width: 104,
      height: 104,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      borderRadius: "100%",
      background: "#fefefe",
    },
    center: {
      width: 70,
      height: 70,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 4,
      background: palette.common.white,
      boxShadow: "0px 17px 35px rgba(0, 0, 0, 0.12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
    },
    value: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#171B1E",
      marginLeft: 4,
    },
    pointerContainer: {
      width: 35,
      height: 2,
      position: "absolute",
      zIndex: 3,
      background: "red",
      left: 68,
      top: 68,
      transform: (props: OwnerDetailsPieChartProps) => {
        // rotate from -215deg to 39deg
        return `rotate(${-215 + props.percent * 2.54}deg)`;
      },
      transformOrigin: "center left",
    },
    pointer: {
      background: (props: OwnerDetailsPieChartProps) => getColor(props.percent),
      width: 15,
      height: 15,
      position: "absolute",
      left: "calc(100% - 9px)",
      top: -6,
      transform: "rotate(45deg)",
    },
    progress: {
      position: "absolute",
      top: 0,
      right: 0,
      zIndex: 1,
      transform: "rotate(141deg) !important",
      transition: "stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
    progressCircle: {
      color: (props: OwnerDetailsPieChartProps) => getColor(props.percent),
    },
    progressOverlay: {
      position: "absolute",
      top: 0,
      right: 0,
      zIndex: 0,
      transform: "rotate(141deg) !important",
    },
    progressOverlayCircle: {
      color: "#efefef",
    },
  };
});
