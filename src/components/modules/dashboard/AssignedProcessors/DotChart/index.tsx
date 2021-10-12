import * as React from "react";

import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

export interface DotChartProps {
    color: string;
}

const DotChart: React.FC<DotChartProps> = ({ color }) => {
    const classes = useStyles({ color });

    return <Box className={classes.dot}></Box>;
};

export default DotChart;
