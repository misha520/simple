import * as React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { PaginationItem, Pagination } from "@material-ui/lab";

const useStyles = makeStyles(({ breakpoints }) =>
  createStyles({
    root: {
      paddingTop: "30px",
      display: "flex",
      justifyContent: "flex-end",
      marginRight: "50px",
      "& > nav": {
        border: "1px solid #35B6FE",
        boxSizing: "border-box",
        borderRadius: "14px",
      },
      [breakpoints.down("md")]: {
        marginRight: "0px",
        justifyContent: "center",
      },
    },
    item: {
      color: "#35B6FE",
      height: "48px",
    },
    selected: {
      backgroundColor: "#35B6FE !important",
      padding: "13px 21px",
      color: "#FFFFFF",
      borderRadius: "12px",
    },
  })
);

interface PaginationRoundedProps {
  round: number;
}

const PaginationRounded: React.FC<PaginationRoundedProps> = ({ round }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        renderItem={(item) => (
          <PaginationItem
            classes={{ root: classes.item, selected: classes.selected }}
            {...item}
          />
        )}
        count={round}
        shape="rounded"
      />
    </div>
  );
};

export default PaginationRounded;
