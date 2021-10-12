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
  Box,
} from "@material-ui/core";
import { useStyles } from "./styles";
import Status from "../../../elements/Status";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

interface HeadCell {
  id: string;
  label: string;
}

const headCells: HeadCell[] = [
  {
    id: "type",
    label: "Type",
  },
  {
    id: "name",
    label: "Borrower Name",
  },
  {
    id: "date",
    label: "Order Date",
  },
  {
    id: "status",
    label: "Status",
  },

  {
    id: "product",
    label: "Product",
  },
  {
    id: "number",
    label: "Order Number",
  },
  {
    id: "time",
    label: "Time Remaining",
  },
];

interface Data {
  type: {
    icon: React.ReactNode;
    name: string;
  };
  borrowerName: {
    name: string;
    company: string;
  };
  orderDate: {
    date: string;
    status: string;
  };
  status: string;
  product: {
    name: string;
    report: string;
  };
  orderNumber: string;
  timeRemaining: string;
}
export interface FilterTableProps {
  rows: {
    type: {
      icon: React.ReactNode;
      name: string;
    };
    borrowerName: {
      name: string;
      company: string;
    };
    orderDate: {
      date: string;
      status: string;
    };
    status: string;
    product: {
      name: string;
      report: string;
    };
    orderNumber: string;
    timeRemaining: string;
  }[];
}

const FilterTable: React.FC<FilterTableProps> = ({ rows }) => {
  type Order = "asc" | "desc";

  const classes = useStyles();
  const [orderBy, setOrderBy] = useState("processor");
  const [order, setOrder] = useState<Order | undefined>("asc");
  const [page] = useState(0);
  const [rowsPerPage] = useState(6);

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

  return (
    <Paper classes={{ root: classes.paper }}>
      <TableContainer>
        <Table aria-labelledby="tableTitle" size="small" aria-label="enhanced">
          <TableHead>
            <TableRow>
              {/* checkbox  */}
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
                  classes={{
                    root: classes.cellHeader,
                  }}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    onClick={createSortHandler(headCell.id)}
                    IconComponent={ArrowDropDownIcon}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
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

                    {/* type */}
                    <TableCell
                      classes={{
                        root: classes.tableCell,
                      }}
                      align="left"
                    >
                      <Box className={classes.typeCell}>
                        <Box className={classes.typeIcon}>{row.type.icon}</Box>
                        <span>{row.type.name}</span>
                      </Box>
                    </TableCell>

                    {/* Borrower Name */}
                    <TableCell
                      classes={{
                        root: classes.tableCell,
                      }}
                      align="left"
                    >
                      <Box className={classes.lastActive}>
                        <span className={classes.borrowerName}>
                          {row.borrowerName.name}
                        </span>
                        <span className={classes.borrowerCompany}>
                          {row.borrowerName.company}
                        </span>
                      </Box>
                    </TableCell>

                    {/* order date  */}
                    <TableCell
                      align="left"
                      classes={{
                        root: classes.tableCell,
                      }}
                    >
                      <Box className={classes.lastActive}>
                        <span className={classes.date}>
                          {row.orderDate.date}
                        </span>
                        <span className={classes.closingStatus}>
                          {row.orderDate.status}
                        </span>
                      </Box>
                    </TableCell>

                    {/* status */}
                    <TableCell
                      align="left"
                      classes={{
                        root: classes.tableCell,
                      }}
                    >
                      <Status status={row.status} />
                    </TableCell>

                    {/* product */}
                    <TableCell
                      classes={{
                        root: classes.tableCell,
                      }}
                      align="left"
                    >
                      <Box className={classes.lastActive}>
                        <span className={classes.borrowerName}>
                          {row.product.name}
                        </span>
                        <span className={classes.borrowerCompany}>
                          {row.product.report}
                        </span>
                      </Box>
                    </TableCell>

                    {/* order Number  */}
                    <TableCell
                      classes={{
                        root: classes.tableCell,
                        body: classes.numberCell,
                      }}
                      align="left"
                    >
                      {row.orderNumber}
                    </TableCell>

                    {/* Time Remaining  */}
                    <TableCell
                      align="left"
                      classes={{
                        root: classes.tableCell,
                      }}
                    >
                      <span className={classes.timeRemaining}>
                        {row.timeRemaining}
                      </span>
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
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default FilterTable;
