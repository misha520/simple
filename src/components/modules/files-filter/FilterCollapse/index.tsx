import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import { Box, Checkbox, Link } from "@material-ui/core";
import Status from "../Status";
import ArrowDownIcon from "../../../elements/icons/ArrowDown";
import Processing from "../Processing";
import React from "react";
export interface FilterCollapseProps {
  handleClickItem?: () => void;
  data: {
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
const FilterCollapse: React.FC<FilterCollapseProps> = ({
  handleClickItem,
  data,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {data.map((item, index) => (
        <Box className={classes.container} key={index}>
          <Accordion classes={{ root: classes.accordion }}>
            <AccordionSummary
              expandIcon={<ArrowDownIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.coverHeader}
              onClick={() => {
                console.log("vvvv");
              }}
            >
              <Typography className={classes.heading}>
                <Checkbox />
                {item.id}
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
              <Link href="#" onClick={handleClickItem}>
                <Processing
                  color={item.processing.color}
                  percent={item.processing.percent}
                />

                <Box className={classes.accordDetailsCenter}>
                  <Box className={classes.processor}>
                    <img src={item.owner.image} alt="" />
                    <Box className={classes.processorText}>
                      <span className={classes.name}>{item.owner.name}</span>
                      <span className={classes.closingStatus}>
                        {item.owner.number} more owner
                      </span>
                    </Box>
                  </Box>
                  <Box className={classes.closing}>
                    <span className={classes.closingStatus}>
                      {item.closing.status}
                      <ArrowDownIcon />
                    </span>
                    <span className={classes.date}>{item.closing.date}</span>
                  </Box>
                </Box>
                <Box className={classes.action}>
                  <span className={classes.actionTxt}>Start</span>
                  <span className={classes.actionDateStart}>
                    {item.action.dateStart}
                  </span>
                  <Box className={classes.actionIcon}>{item.action.icon}</Box>
                </Box>
              </Link>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </div>
  );
};
export default FilterCollapse;
