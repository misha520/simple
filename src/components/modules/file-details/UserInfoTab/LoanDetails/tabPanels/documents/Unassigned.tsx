import { Box, makeStyles } from "@material-ui/core";
import AppTypography from "../../../../../../elements/Typography";
import ClaudeUploadIcon from "../../../../../../elements/icons/ClaudeUpload";
import { Document } from "../../../../../../elements";

const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
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
    uploadWrapper: {
      display: "flex",
      alignItems: "center",
      textAlign: "left",
      borderRadius: "20px",
      padding: "15px",
      border: `1px dashed ${palette.all.gray}`,
      background: "#fafafa",
      [breakpoints.down("sm")]: {
        background: "#f0f0f0",
      },
    },
    uploadTitle: {
      fontSize: 14,
      fontWeight: 600,
    },
    uploadSubHead: {
      fontSize: 12,
      fontWeight: 500,
      color: "rgba(23, 27, 30, 0.5)",
    },
  }),
  { index: 1 }
);

const Unassigned = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box marginBottom="20px">
        <AppTypography fontSize={20} fontWeight={600}>
          Unassigned
        </AppTypography>
      </Box>
      <Document
        type={"pdf"}
        title={"Random PDF"}
        subtitle={"531 Pages : 58 Mb"}
        onAdd={() => {}}
        onDelete={() => {}}
      />
      <Document
        type={"pdf"}
        title={"Random PDF"}
        subtitle={"531 Pages : 58 Mb"}
        onAdd={() => {}}
        onDelete={() => {}}
      />
      <Box className={classes.uploadWrapper}>
        <ClaudeUploadIcon height="50px" width="50px" fill="#35B6FE" />
        <Box marginLeft="20px">
          <AppTypography className={classes.uploadTitle}>
            Upload Documents
          </AppTypography>
          <AppTypography className={classes.uploadSubHead}>
            Drag & Drop files here, or Browse
          </AppTypography>
        </Box>
      </Box>
    </Box>
  );
};

export default Unassigned;
