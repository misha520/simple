import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import { Box, Checkbox } from "@material-ui/core";
import Status from "../../../elements/Status";
import ArrowDownIcon from "../../../elements/icons/ArrowDown";
import React from "react";
export interface FilterCollapseProps {
  data: {
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
const FilterCollapse: React.FC<FilterCollapseProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {data.map((item) => (
        <Box className={classes.container}>
          <Accordion classes={{ root: classes.accordion }}>
            <AccordionSummary
              expandIcon={<ArrowDownIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.coverHeader}
              onClick={() => {}}
            >
              <Typography className={classes.heading}>
                <Checkbox />
                <Box className={classes.typeCell}>
                  <Box className={classes.typeIcon}>{item.type.icon}</Box>
                  <span>{item.type.name}</span>
                </Box>
              </Typography>
              <Box className={classes.header}>
                <Box className={classes.title}>
                  <Box className={classes.lastActive}>
                    <span style={{ fontSize: "14px", fontWeight: 600 }}>
                      {item.borrowerName.name}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        color: "rgba(23, 27, 30, 0.5)",
                        fontWeight: 400,
                      }}
                    >
                      {item.borrowerName.company}
                    </span>
                  </Box>
                  <Status status={item.status} />
                </Box>
              </Box>
            </AccordionSummary>

            <AccordionDetails classes={{ root: classes.coverAccordDetails }}>
              <Box className={classes.accordDetailsCenter}>
                <Box className={classes.processor}>
                  <Box className={classes.processorText}>
                    <span className={classes.name}>{item.orderDate.date}</span>
                    <span className={classes.closingStatus}>
                      {item.orderDate.status}
                    </span>
                  </Box>
                </Box>
                <Box className={classes.closing}>
                  <span className={classes.productName}>
                    {item.product.name}
                  </span>
                  <span className={classes.closingStatus}>
                    {item.product.report}
                  </span>
                </Box>
              </Box>
              <Box className={classes.action}>
                <span className={classes.orderNumber}>{item.orderNumber}</span>
                <Box className={classes.timeRemaining}>
                  {item.timeRemaining}
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </div>
  );
};
export default FilterCollapse;
