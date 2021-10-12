import { usePagination } from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import PreviousIcon from "../icons/Previous";
import NextPageIcon from "../icons/Next";

const useStyles = makeStyles(({ breakpoints }) => ({
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  },
  buttonType: {
    height: "48px",
    margin: "0 15px",
    borderRadius: "12px",
    border: "1px solid #35B6FE",
    background: "none",
    color: "#35B6FE",
    padding: "0 10px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    [breakpoints.down("sm")]: {
      height: "35px",
      fontSize: "10px",
      padding: "0 10px",
      margin: "0 5px",
    },
  },
  item: {
    color: "#35B6FE",
    borderRadius: "0",
    border: "none",
    width: "48px",
    height: "48px",
    background: "#dff3ffbf",
    fontSize: "16px",
    [breakpoints.down("sm")]: {
      width: "35px",
      height: "35px",
      fontSize: "14px",
    },
  },
  selected: {
    width: "48px",
    height: "48px",
    backgroundColor: "#35B6FE",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    [breakpoints.down("sm")]: {
      width: "35px",
      height: "35px",
      fontSize: "14px",
    },
  },
}));
interface PaginationRoundedProps {
  round: number;
}

const PaginationRounded: React.FC<PaginationRoundedProps> = ({ round }) => {
  const classes = useStyles();
  const { items } = usePagination({
    count: round,
  });

  return (
    <nav>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                  borderRadius:
                    page === 1
                      ? "12px 0 0 12px"
                      : page === round
                      ? "0 12px 12px 0"
                      : "",
                }}
                className={`${selected ? classes.selected : classes.item}`}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button className={classes.buttonType} type="button" {...item}>
                {type === "previous" && <PreviousIcon />}
                <span style={{ alignItems: "center" }}> {type} </span>
                {type === "next" && <NextPageIcon />}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
};
export default PaginationRounded;
