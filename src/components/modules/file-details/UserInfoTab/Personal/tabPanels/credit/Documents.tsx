import { Box, makeStyles } from "@material-ui/core";
import * as React from "react";
import AppTypography from "../../../../../../elements/Typography";
import ClaudeUploadIcon from "../../../../../../elements/icons/ClaudeUpload";

const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      padding: "0 50px",
      maxWidth: "450px",
      width: "100%",
      [breakpoints.down("lg")]: {
        padding: "0 26px",
      },
      [breakpoints.down("sm")]: {
        margin: "auto",
        padding: 0,
      },
    },
    uploadWrapper: {
      display: "flex",
      height: "-webkit-fill-available",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      borderRadius: "20px",
      marginBottom: "40px",
      padding: "40px 20px",
      border: `1px dashed ${palette.all.gray}`,
      background: "#fafafa",
      [breakpoints.down("sm")]: {
        background: "#f0f0f0",
      },
    },
    uploadTitle: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 8,
      marginTop: 30,
    },
    uploadSubHead: {
      fontSize: 12,
      fontWeight: 500,
      color: "rgba(23, 27, 30, 0.5)",
    },
    iconBtn: {
      alignItems: "center",
      borderRadius: "6px",
      display: "flex",
      justifyContent: "center",
      height: "37px",
      width: "37px",
    },
    iconBtnWrapper: {
      alignItems: "center",
      display: "flex",
      gap: "8px",
    },
  }),
  { index: 1 }
);

const Documents: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppTypography
        style={{ marginBottom: "30px" }}
        fontSize={20}
        fontWeight={600}
      >
        Documents
      </AppTypography>
      <Box className={classes.uploadWrapper}>
        <ClaudeUploadIcon fillOpacity="0.3" />
        <AppTypography className={classes.uploadTitle}>
          Upload Documents
        </AppTypography>
        <AppTypography className={classes.uploadSubHead}>
          Drag & Drop files here, or Browse
        </AppTypography>
      </Box>
    </Box>
  );
};

export default Documents;
