import { Box, makeStyles } from "@material-ui/core";
import * as React from "react";
import { Document } from "../../../../../../elements";
import AppTypography from "../../../../../../elements/Typography";

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      padding: "0 65px",
      maxWidth: "500px",
      width: "100%",
      [breakpoints.down("lg")]: {
        padding: "0 26px",
      },
      [breakpoints.down("sm")]: {
        margin: "auto",
        padding: 0,
      },
    },
  }),
  { index: 1 }
);

const Archive: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppTypography
        style={{ marginBottom: "30px" }}
        fontSize={20}
        fontWeight={600}
      >
        Archive
      </AppTypography>
      <Document
        type={"doc"}
        title={"VOA File"}
        subtitle={"531 Pages : 58 Mb"}
        onDownload={() => { }}
        onSend={() => { }}
      />
      <Document
        type={"pdf"}
        title={"VOA File"}
        subtitle={"531 Pages : 58 Mb"}
        onDownload={() => { }}
        onSend={() => { }}
      />
      <Document
        type={"voa"}
        title={"VOA File"}
        subtitle={"531 Pages : 58 Mb"}
        onDownload={() => { }}
        onSend={() => { }}
      />
    </Box>
  );
};

export default Archive;
