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
import Priority from "../Priority";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import NotificationIcon from "../../../elements/icons/Notification";
import SendIcon from "../../../elements/icons/Send";

interface HeadCell {
  id: string;
  label: string;
}

const headCells: HeadCell[] = [
  {
    id: "id",
    label: "Loan",
  },
  {
    id: "priority",
    label: "Priority",
  },
  {
    id: "closing",
    label: "Closing Date",
  },
  {
    id: "owner",
    label: "Owner",
  },
  {
    id: "status",
    label: "Status",
  },
  {
    id: "name",
    label: "Borrows Name",
  },
  {
    id: "action",
    label: "Action/Alerts",
  },
];

interface Data {
  id: string;
  borrowerName: {
    name: string;
    company: string;
  };
  priority: string;
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
}
export interface ActionTableProps {
  rows: {
    id: string;
    borrowerName: {
      name: string;
      company: string;
    };
    priority: string;
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
  }[];
}

const ActionTable: React.FC<ActionTableProps> = ({ rows }) => {
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
                    >
                      {row.id}
                    </TableCell>
                    {/* priority */}
                    <TableCell
                      align="left"
                      classes={{
                        root: classes.tableCell,
                      }}
                    >
                      <Priority priority={row.priority} />
                    </TableCell>
                    {/* closing  */}
                    <TableCell
                      align="left"
                      classes={{
                        root: classes.tableCell,
                      }}
                    >
                      <Box className={classes.lastActive}>
                        <span className={classes.date}>{row.closing.date}</span>
                        <span className={classes.closingStatus}>
                          {row.closing.status}
                        </span>
                      </Box>
                    </TableCell>

                    {/* owner  */}
                    <TableCell
                      classes={{
                        root: classes.tableCell,
                      }}
                      align="left"
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

                    {/* processing  */}
                    <TableCell
                      align="left"
                      classes={{
                        root: classes.tableCell,
                      }}
                    >
                      <Processing
                        color={row.processing.color}
                        percent={row.processing.percent}
                      />
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

                    {/* action  */}
                    <TableCell
                      align="left"
                      classes={{
                        root: classes.tableCell,
                      }}
                    >
                      <Box className={classes.tableCellLast}>
                        <Box className={classes.notifyIcon}>
                          <NotificationIcon />
                        </Box>
                        <Box className={classes.sendIcon}>
                          <SendIcon size="big" />
                        </Box>
                      </Box>
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

export default ActionTable;
