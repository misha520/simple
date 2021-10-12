import { useMemo } from "react";
import * as React from "react";
import { CircularProgress } from "@material-ui/core";
import { useStyles } from "./styles";

export interface OwnerDetailsPieChartProps {
  percent: number;
}

const OwnerDetailsPieChart: React.FC<OwnerDetailsPieChartProps> = ({
  percent,
}) => {
  const classes = useStyles({ percent });

  // on the UI progress value from 0 to 71.6
  const progressValue = useMemo(() => {
    return percent * 0.716;
  }, [percent]);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.inner} />
        <div className={classes.center}>
          <span className={classes.value}>{`${percent}%`}</span>
        </div>
        <div className={classes.pointerContainer}>
          <div className={classes.pointer} />
        </div>
        <CircularProgress
          variant="determinate"
          value={progressValue}
          size={135}
          thickness={5}
          classes={{ root: classes.progress, circle: classes.progressCircle }}
        />
        <CircularProgress
          variant="determinate"
          value={71.6}
          size={135}
          thickness={5}
          classes={{
            root: classes.progressOverlay,
            circle: classes.progressOverlayCircle,
          }}
        />
      </div>
    </div>
  );
};

export default OwnerDetailsPieChart;
