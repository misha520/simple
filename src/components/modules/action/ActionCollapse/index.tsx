import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import { Box, Checkbox } from "@material-ui/core";
import Priority from "../Priority";
import ArrowDownIcon from "../../../elements/icons/ArrowDown";
import Processing from "../Processing";
import React from "react";
import NotificationIcon from "../../../elements/icons/Notification";
import SendIcon from "../../../elements/icons/Send";
export interface ActionCollapseProps {
  data: {
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
const ActionCollapse: React.FC<ActionCollapseProps> = ({ data }) => {
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
                  <Priority priority={item.priority} />
                </Box>
              </Box>
            </AccordionSummary>

            <AccordionDetails classes={{ root: classes.coverAccordDetails }}>
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
                <Box className={classes.tableCellLast}>
                  <Box className={classes.notifyIcon}>
                    <NotificationIcon />
                  </Box>
                  <Box className={classes.sendIcon}>
                    <SendIcon size="big" />
                  </Box>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </div>
  );
};
export default ActionCollapse;
