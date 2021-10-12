import { Box, makeStyles } from "@material-ui/core";
import AppTypography from "../../../../../../elements/Typography";
import { Document } from "../../../../../../elements";

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      padding: "0 65px 0 26px",
      maxWidth: "500px",
      width: "100%",
      [breakpoints.down("lg")]: {
        padding: "0 26px 0 13px",
      },
      [breakpoints.down("sm")]: {
        maxWidth: "500px",
        margin: "auto",
        padding: 0,
      },
    },
  }),
  { index: 1 }
);

const Disclosures = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box marginBottom="20px">
        <AppTypography fontSize={20} fontWeight={600}>
          Disclosures
        </AppTypography>
      </Box>
      <Document
        type={"doc"}
        title={"VOA File"}
        subtitle={"531 Pages : 58 Mb"}
        onDownload={() => { }}
        onSend={() => { }}
      />
      <Document
        type={"xls"}
        title={"VOA File"}
        subtitle={"531 Pages : 58 Mb"}
        onDownload={() => { }}
        onSend={() => { }}
      />
    </Box>
  );
};

export default Disclosures;
