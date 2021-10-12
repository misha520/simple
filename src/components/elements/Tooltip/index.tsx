import { makeStyles } from "@material-ui/core/styles";
import Tooltip, { TooltipProps } from "@material-ui/core/Tooltip";

const useStylesBootstrap = makeStyles(({ palette }) => ({
  arrow: {
    color: palette.all.black,
  },
  tooltip: {
    backgroundColor: palette.all.black,
    fontSize: "14px",
    borderRadius: "4px",
    padding: "15px",
    fontWeight: 400,
  },
  font: {
    fontSize: "14px",
  },
}));

export default function TooltipTop(props: TooltipProps) {
  const classes = useStylesBootstrap();
  return <Tooltip arrow placement="top" classes={classes} {...props} />;
}
