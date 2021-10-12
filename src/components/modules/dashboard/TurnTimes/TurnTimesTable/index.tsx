import { useState } from "react";

import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
  TableBody,
  // TablePagination,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Processing from "../Processing";
import PaginationRounded from "./PaginationRounded";
import Star from "../../../../elements/icons/Star";
import { useStyles } from "./styles";
import { useScreenSizeDown } from "../../../../../hooks";
import MoreVerticalIcon from "../../../../elements/icons/MoreVertical";
import { useHistory } from "react-router-dom";

interface HeadCell {
  id: string;
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}

const headCells: HeadCell[] = [
  {
    id: "processor",
    numeric: false,
    disablePadding: true,
    label: "Processor",
  },
  { id: "files", numeric: true, disablePadding: false, label: "Files" },
  {
    id: "averageDelivery",
    numeric: true,
    disablePadding: false,
    label: "Average Delivery",
  },
  {
    id: "processing",
    numeric: true,
    disablePadding: false,
    label: "Processing",
  },
  {
    id: "lastActive",
    numeric: true,
    disablePadding: false,
    label: "Last Active",
  },
  { id: "rating", numeric: true, disablePadding: false, label: "Rating" },
];

interface Data {
  id: string;
  processor: {
    image: string;
    name: string;
    position: string;
  };
  files: number | string;
  averageDelivery: string;
  processing: {
    percent: string;
    color: string;
  };
  lastActive: {
    date: string;
    day: string;
  };
  rate: {
    star: number;
    text: string;
  };
}

const rows: Data[] = [
  {
    id: "1",
    processor: {
      image: "/images/boy.png",
      name: "IIham Supriadi",
      position: "General Manager",
    },
    files: 26.578,
    averageDelivery: "25 Days",
    processing: {
      percent: "75%",
      color: "#29C9C1",
    },
    lastActive: {
      date: "26th March, 2020",
      day: "today",
    },
    rate: {
      star: 3.4,
      text: "Best rated",
    },
  },
  {
    id: "2",
    processor: {
      image: "/images/man(4).png",
      name: "IIham Supriadi",
      position: "General Manager",
    },
    files: 28.578,
    averageDelivery: "25 Days",
    processing: {
      percent: "50%",
      color: "#F62064",
    },
    lastActive: {
      date: "26th March, 2020",
      day: "today",
    },
    rate: {
      star: 2.1,
      text: "Best rated",
    },
  },
  {
    id: "3",
    processor: {
      image: "/images/woman1.png",
      name: "IIham Supriadi",
      position: "General Manager",
    },
    files: 26.578,
    averageDelivery: "25 Days",
    processing: {
      percent: "75%",
      color: "#29C9C1",
    },
    lastActive: {
      date: "26th March, 2020",
      day: "today",
    },
    rate: {
      star: 4,
      text: "Best rated",
    },
  },
  {
    id: "4",
    processor: {
      image: "/images/woman1.png",
      name: "IIham Supriadi",
      position: "General Manager",
    },
    files: 26.578,
    averageDelivery: "25 Days",
    processing: {
      percent: "75%",
      color: "#8950FC",
    },
    lastActive: {
      date: "26th March, 2020",
      day: "today",
    },
    rate: {
      star: 4,
      text: "Best rated",
    },
  },
  {
    id: "5",
    processor: {
      image: "/images/woman1.png",
      name: "IIham Supriadi",
      position: "General Manager",
    },
    files: 26.578,
    averageDelivery: "25 Days",
    processing: {
      percent: "75%",
      color: "#FFC02B",
    },
    lastActive: {
      date: "26th March, 2020",
      day: "today",
    },
    rate: {
      star: 4,
      text: "Best rated",
    },
  },
  {
    id: "6",
    processor: {
      image: "/images/woman1.png",
      name: "IIham Supriadi",
      position: "General Manager",
    },
    files: 26.578,
    averageDelivery: "25 Days",
    processing: {
      percent: "75%",
      color: "#8950FC",
    },
    lastActive: {
      date: "26th March, 2020",
      day: "today",
    },
    rate: {
      star: 4,
      text: "Best rated",
    },
  },
  {
    id: "7",
    processor: {
      image: "/images/woman1.png",
      name: "IIham Supriadi",
      position: "General Manager",
    },
    files: 26.578,
    averageDelivery: "25 Days",
    processing: {
      percent: "75%",
      color: "#FFC02B",
    },
    lastActive: {
      date: "26th March, 2020",
      day: "today",
    },
    rate: {
      star: 4,
      text: "Best rated",
    },
  },
];

const TurnTimesTable = () => {
  type Order = "asc" | "desc";

  const classes = useStyles();
  const [orderBy, setOrderBy] = useState("processor");
  const [order, setOrder] = useState<Order | undefined>("asc");
  const [page] = useState(0);
  const [rowsPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = useState(null);
  const isSmallSizeDown = useScreenSizeDown("md");
  const history = useHistory();

  const createSortHandler = (property: string) => (event: any) => {
    onRequestSort(event, property);
  };

  const onRequestSort = (_event: any, property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  // const handleChangePage = (_event: any, newPage: number) => {
  //     console.log("123");

  //     setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: any) => {
  //     setRowsPerPage(parseInt(event.target.value, 10));
  //     setPage(0);
  // };

  function stableSort<Data>(
    array: Data[],
    comparator: (a: Data, b: Data) => number
  ) {
    const stabilizedThis = array.map(
      (el, index) => [el, index] as [Data, number]
    );
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function descendingComparator<Data>(a: Data, b: Data, orderBy: keyof Data) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(
    order: Order | undefined,
    orderBy: any
  ): (a: Data, b: Data) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const optionMenu = [
    {
      value: "option1",
      label: "option 01",
    },
    {
      value: "option2",
      label: "option 02",
    },
    {
      value: "option3",
      label: "option 03",
    },
  ];

  const handleClickCell = () => {
    history.push("/files-filter");
  };

  return (
    <>
      {isSmallSizeDown && (
        <Paper classes={{ root: classes.paper }}>
          <TableContainer>
            <Table
              aria-labelledby="tableTitle"
              size="small"
              aria-label="enhanced"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    key="processor"
                    align="left"
                    padding="none"
                    classes={{
                      root: classes.cellHeaderFirst,
                    }}
                  >
                    Processor
                  </TableCell>
                  <TableCell
                    key="rating"
                    align="left"
                    padding="none"
                    classes={{
                      root: classes.cellHeader,
                    }}
                  >
                    Rating
                  </TableCell>
                  <TableCell
                    key="processing"
                    align="left"
                    padding="none"
                    classes={{
                      root: classes.cellHeader,
                      head: classes.cellHeaderProcessing,
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === "processing"}
                      direction={orderBy === "processing" ? order : "asc"}
                      onClick={createSortHandler("processing")}
                    >
                      Processing
                    </TableSortLabel>
                  </TableCell>
                  <TableCell
                    classes={{
                      root: classes.cellHeaderLast,
                    }}
                    padding="none"
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow hover key={index} role="checkbox" tabIndex={-1}>
                        <TableCell
                          classes={{
                            root: classes.tableCell,
                          }}
                          align="left"
                          onClick={handleClickCell}
                        >
                          <Box className={classes.processor}>
                            <img src={row.processor.image} alt="" />
                            <Box className={classes.processorText}>
                              <span className={classes.name}>
                                {row.processor.name}
                              </span>
                              <span className={classes.position}>
                                <span className={classes.files}>
                                  {row.files}
                                </span>{" "}
                                Files
                              </span>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          align="left"
                          classes={{
                            root: classes.tableCell,
                          }}
                          onClick={handleClickCell}
                        >
                          <Star />
                          <Box>
                            <span className={classes.rateText}>
                              {row.rate.star}
                            </span>
                          </Box>
                        </TableCell>
                        <TableCell
                          align="left"
                          classes={{
                            root: classes.tableCell,
                            body: classes.cellHeaderProcessing,
                          }}
                          onClick={handleClickCell}
                        >
                          <Processing
                            color={row.processing.color}
                            percent={row.processing.percent}
                          />
                        </TableCell>

                        <TableCell
                          align="left"
                          classes={{
                            root: classes.tableCellLast,
                          }}
                        >
                          <Button
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClickMenu}
                            className={classes.buttonMore}
                            style={{ fontSize: "20px" }}
                          >
                            <MoreVerticalIcon />
                          </Button>
                          <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                          >
                            {optionMenu.map((option, index) => (
                              <MenuItem
                                key={index}
                                classes={{
                                  root: classes.itemDropdown,
                                  selected: classes.itemSelected,
                                }}
                                onClick={handleClose}
                                value={option.value}
                              >
                                {option.label}
                              </MenuItem>
                            ))}
                          </Menu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 33 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={7} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component={()=><PaginationRounded {...pagiProps} />}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
          <PaginationRounded round={5} />
        </Paper>
      )}
      {!isSmallSizeDown && (
        <Paper classes={{ root: classes.paper }}>
          <TableContainer>
            <Table
              aria-labelledby="tableTitle"
              size="small"
              aria-label="enhanced"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    classes={{
                      root: classes.cellHeaderFirst,
                    }}
                  >
                    <Checkbox />
                  </TableCell>
                  {headCells.map((headCell) => (
                    <TableCell
                      key={headCell.id}
                      align="left"
                      padding="none"
                      classes={{
                        root: classes.cellHeader,
                      }}
                    >
                      <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : "asc"}
                        onClick={createSortHandler(headCell.id)}
                      >
                        {headCell.label}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                  <TableCell
                    classes={{
                      root: classes.cellHeaderLast,
                    }}
                    padding="none"
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow hover key={index} role="checkbox" tabIndex={-1}>
                        <TableCell
                          align="left"
                          classes={{
                            root: classes.tableCellFirst,
                          }}
                        >
                          <Checkbox />
                        </TableCell>
                        <TableCell
                          classes={{
                            root: classes.tableCell,
                          }}
                          align="left"
                          onClick={handleClickCell}
                        >
                          <Box className={classes.processor}>
                            <img src={row.processor.image} alt="" />
                            <Box className={classes.processorText}>
                              <span className={classes.name}>
                                {row.processor.name}
                              </span>
                              <span className={classes.position}>
                                {row.processor.position}
                              </span>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          classes={{
                            root: classes.tableCell,
                          }}
                          onClick={handleClickCell}
                          align="left"
                        >
                          <span className={classes.files}>{row.files}</span>
                        </TableCell>
                        <TableCell
                          align="left"
                          classes={{
                            root: classes.tableCell,
                          }}
                          onClick={handleClickCell}
                        >
                          <span className={classes.averageDelivery}>
                            {row.averageDelivery}
                          </span>
                        </TableCell>
                        <TableCell
                          align="left"
                          classes={{
                            root: classes.tableCell,
                          }}
                          onClick={handleClickCell}
                        >
                          <Processing
                            color={row.processing.color}
                            percent={row.processing.percent}
                          />
                        </TableCell>
                        <TableCell
                          align="left"
                          classes={{
                            root: classes.tableCell,
                          }}
                          onClick={handleClickCell}
                        >
                          <Box className={classes.lastActive}>
                            <span className={classes.date}>
                              {row.lastActive.date}
                            </span>
                            <span className={classes.day}>
                              {row.lastActive.day}
                            </span>
                          </Box>
                        </TableCell>
                        <TableCell
                          align="left"
                          classes={{
                            root: classes.tableCell,
                          }}
                          onClick={handleClickCell}
                        >
                          <Box className={classes.star}>
                            {Array.from(Array(5).keys()).map((index) =>
                              index < row.rate.star ? (
                                <Star key={index} />
                              ) : (
                                <Star key={index} color="#cdcace" />
                              )
                            )}
                          </Box>
                          <Box>
                            <span className={classes.rateText}>
                              {row.rate.text}
                            </span>
                          </Box>
                        </TableCell>
                        <TableCell
                          align="left"
                          classes={{
                            root: classes.tableCellLast,
                          }}
                        >
                          <Button
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClickMenu}
                            style={{ fontSize: "20px" }}
                          >
                            ...
                          </Button>
                          <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                          >
                            {optionMenu.map((option, index) => (
                              <MenuItem
                                key={index}
                                classes={{
                                  root: classes.itemDropdown,
                                  selected: classes.itemSelected,
                                }}
                                onClick={handleClose}
                                value={option.value}
                              >
                                {option.label}
                              </MenuItem>
                            ))}
                          </Menu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 33 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={7} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component={()=><PaginationRounded {...pagiProps} />}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
          <PaginationRounded round={5} />
        </Paper>
      )}
    </>
  );
};

export default TurnTimesTable;
