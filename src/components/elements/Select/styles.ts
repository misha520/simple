import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    root: {
      padding: "14px 48px 13px 16px",
      borderRadius: "8px",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "21px",
      "&:focus": {
        backgroundColor: "none",
        borderRadius: "8px",
      },

      "& ~ fieldset": {
        border: "none",
      },
      [breakpoints.down("xs")]: {
        padding: "7px 34px 7px 11px !important",
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "18px",

        "& ~ fieldset": {
          borderRadius: "7px",
        },
      },
    },
    fileOverTime: {
      background: "#fee4ec",
      color: palette.all.red,
      "& ~ svg": {
        color: palette.all.red,
      },
    },
    processors: {
      background: "#e5f9f8",
      color: "#29C9C1",
      "& ~ svg": {
        color: "#29C9C1",
      },
    },
    fileOverTimeButton: {
      background: "none",
      border: `1px solid ${palette.all.red}`,
      color: palette.all.red,
      "& ~ svg": {
        color: palette.all.red,
      },
    },
    ItemFileOverTimeSelected: {
      color: palette.all.red,
      backgroundColor: "#fff !important",
    },
    ItemProcessorSelected: {
      color: "#29C9C1",
      background: "#fff !important",
    },
  }),
  { index: 1 }
);
