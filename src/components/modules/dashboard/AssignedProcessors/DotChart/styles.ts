import { makeStyles } from "@material-ui/core";
import { DotChartProps } from ".";

export const useStyles = makeStyles(
    () => ({
        dot: {
            borderRadius: "6px",
            background: (props: DotChartProps) => props.color,
            width: "20px",
            height: "20px",
        },
    }),
    { index: 1 }
);
