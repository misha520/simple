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
import Processing from "../Processing";
import { useStyles } from "./styles";
import Status from "../Status";
import Action from "../Action";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

interface HeadCell {
  id: string;
  label: string;
}

const headCells: HeadCell[] = [
  {
    id: "id",
    label: "Loan Number",
  },
  {
    id: "name",
    label: "Borrower Name",
  },
  {
    id: "status",
    label: "Status",
  },
  {
    id: "closing",
    label: "Closing",
  },
  {
    id: "processing",
    label: "Processing",
  },
  {
    id: "owner",
    label: "Owner",
  },
  {
    id: "action",
    label: "Action",
  },
];

interface Data {
  id: string;
  borrowerName: {
    name: string;
    company: string;
  };
  status: string;
  closing: {
    date: string;
    status: string;
  };
  processing: {
    percent: string;
    color: string;
  };
  owner: {
    image: string;
    name: string;
    number: number;
  };
  action: {
    status: string;
    dateStart: string;
    icon: React.ReactNode;
    color: string;
  };
}
export interface FilterTableProps {
  handleClickItem?: () => void;
  rows: {
    id: string;
    borrowerName: {
      name: string;
      company: string;
    };
    status: string;
    closing: {
      date: string;
      status: string;
    };
    processing: {
      percent: string;
      color: string;
    };
    owner: {
      image: string;
      name: string;
      number: number;
    };
    action: {
      status: string;
      dateStart: string;
      icon: React.ReactNode;
      color: string;
    };
  }[];
}

const FilterTable: React.FC<FilterTableProps> = ({ handleClickItem, rows }) => {
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

                    {/* id */}
                    <TableCell
                      classes={{
                        root: classes.tableCell,
                        body: classes.idCell,
                      }}
                      align="left"
                      onClick={handleClickItem}
                    >
                      {row.id}
                    </TableCell>

                    {/* Borrower Name */}
                    <TableCell
                      classes={{
                        root: classes.tableCell,
                      }}
                      align="left"
                      onClick={handleClickItem}
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

                    {/* status */}
                    <TableCell
                      align="left"
                      classes={{
                        root: classes.tableCell,
                      }}
                      onClick={handleClickItem}
                    >
                      <Status status={row.status} />
                    </TableCell>

                    {/* closing  */}
                    <TableCell
                      align="left"
                      classes={{
                        root: classes.tableCell,
                      }}
                      onClick={handleClickItem}
                    >
                      <Box className={classes.lastActive}>
                        <span className={classes.date}>{row.closing.date}</span>
                        <span className={classes.closingStatus}>
                          {row.closing.status}
                        </span>
                      </Box>
                    </TableCell>

                    {/* processing  */}
                    <TableCell
                      align="left"
                      classes={{
                        root: classes.tableCell,
                        body: classes.processing,
                      }}
                      onClick={handleClickItem}
                    >
                      <Processing
                        color={row.processing.color}
                        percent={row.processing.percent}
                      />
                    </TableCell>

                    {/* owner  */}
                    <TableCell
                      classes={{
                        root: classes.tableCell,
                      }}
                      align="left"
                      onClick={handleClickItem}
                    >
                      <Box className={classes.processor}>
                        <img
                          src={row.owner.image}
                          alt=""
                          className={classes.ownerImg}
                        />
                        <Box className={classes.processorText}>
                          <span className={classes.name}>{row.owner.name}</span>
                          <span className={classes.closingStatus}>
                            {row.owner.number} more owner
                          </span>
                        </Box>
                      </Box>
                    </TableCell>

                    {/* action  */}
                    <TableCell
                      align="left"
                      classes={{
                        root: classes.tableCellLast,
                      }}
                      onClick={handleClickItem}
                    >
                      <Action
                        status={row.action.status}
                        color={row.action.color}
                        dateStart={row.action.dateStart}
                        icon={row.action.icon}
                      />
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
