import { Box, IconButton, makeStyles } from "@material-ui/core";
import * as React from "react";
import SendFillIcon from "../icons/SendFill";
import DownloadIcon from "../icons/Download";
import AppTypography from "../Typography";
import { allColors } from "../../foundation/palette";
import PDFIcon from "../icons/PDF";
import DOCIcon from "../icons/DOC";
import XLSIcon from "../icons/XLS";
import VOADocIcon from "../icons/VOADoc";
import AssignFileIcon from "../icons/AssignFile";
import DeleteIcon from "../icons/Delete";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  documentWrapper: {
    alignItems: "center",
    border: `1px solid ${palette.all.gray}26`,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 14px 18px",
    [breakpoints.down("lg")]: {
      padding: "18px 14px",
    },
    width: "100%",
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
}));

export interface DocumentsProps {
  type: "pdf" | "voa" | "doc" | "xls";
  title: string;
  subtitle: string;
  onDownload?: () => void;
  onSend?: () => void;
  onDelete?: () => void;
  onAdd?: () => void;
}

const Document: React.FC<DocumentsProps> = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.documentWrapper}>
      <Box display="flex">
        <Box width="35px">
          {props.type === "pdf" ? (
            <PDFIcon />
          ) : props.type === "doc" ? (
            <DOCIcon />
          ) : props.type === "xls" ? (
            <XLSIcon />
          ) : (
            <VOADocIcon />
          )}
        </Box>
        <Box paddingLeft="5px">
          <AppTypography fontSize={14} fontWeight={600}>
            {props.title}
          </AppTypography>
          <AppTypography color="textSecondary" fontSize={12} fontWeight={400}>
            {props.subtitle}
          </AppTypography>
        </Box>
      </Box>
      <Box className={classes.iconBtnWrapper}>
        {props.onSend && (
          <IconButton
            style={{ background: `${allColors.gray}1F` }}
            className={classes.iconBtn}
          >
            <SendFillIcon fill={allColors.gray} />
          </IconButton>
        )}
        {props.onDownload && (
          <IconButton
            style={{ background: `${allColors.pest}1F` }}
            className={classes.iconBtn}
          >
            <DownloadIcon fill={allColors.pest} />
          </IconButton>
        )}
        {props.onAdd && (
          <IconButton
            style={{ background: `${allColors.gray}1F` }}
            className={classes.iconBtn}
          >
            <AssignFileIcon />
          </IconButton>
        )}
        {props.onDelete && (
          <IconButton
            style={{ background: `${allColors.gray}1F` }}
            className={classes.iconBtn}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Document;
