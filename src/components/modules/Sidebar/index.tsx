import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Drawer,
  DrawerProps,
  IconButton,
  List,
  ListItem,
} from "@material-ui/core";
import * as React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { useScreenSizeDown } from "../../../hooks";
import AppDivider from "../../elements/Divider";
import ActionNeededIcon from "../../elements/icons/ActionNeeded";
import ArrowRightIcon from "../../elements/icons/ArrowRight";
import CompanyOnNavIcon from "../../elements/icons/CompanyOnNav";
import DashboardIcon from "../../elements/icons/Dashboard";
import GroupOnNavIcon from "../../elements/icons/GroupOnNav";
import HelpCenterIcon from "../../elements/icons/HelpCenter";
import LoanFilesIcon from "../../elements/icons/LoanFiles";
import LogoutIcon from "../../elements/icons/Logout";
import OrderIcon from "../../elements/icons/Order";
import RetentionIcon from "../../elements/icons/Retention";
import RulesIcon from "../../elements/icons/Rules";
import SettingsIcon from "../../elements/icons/Settings";
import UserOnNarIcon from "../../elements/icons/UserOnNav";
import WorkflowIcon from "../../elements/icons/Workflow";
import AppTypography from "../../elements/Typography";
import { breakpointValues } from "../../foundation/breakpoints";
import { useStyles } from "./styles";

interface ItemProps {
  label: string;
  icon: React.ReactNode;
  path?: string;
  hasSubSection?: boolean;
}

const mainMenuList: ItemProps[] = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    label: "Loan Files",
    icon: <LoanFilesIcon />,
    path: "/files-filter",
  },
  {
    label: "Orders",
    icon: <OrderIcon />,
    path: "/orders",
    hasSubSection: true,
  },
  {
    label: "Action Needed",
    icon: <ActionNeededIcon />,
    path: "/action",
    hasSubSection: true,
  },
  {
    label: "Retention",
    icon: <RetentionIcon />,
    hasSubSection: true,
  },
  {
    label: "Help Center",
    icon: <HelpCenterIcon />,
  },
  {
    label: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
  {
    label: "Logout",
    icon: <LogoutIcon />,
  },
];

const userMenuList: ItemProps[] = [
  {
    label: "Users",
    icon: <UserOnNarIcon />,
    path: "/users",
  },
  {
    label: "Groups",
    icon: <GroupOnNavIcon />,
    path: "/groups"
  },
  {
    label: "Reporting",
    icon: <OrderIcon />,
    hasSubSection: true,
  },
  {
    label: "Workflows",
    icon: <WorkflowIcon />,
  },
  {
    label: "Rules",
    icon: <RulesIcon />,
  },
  {
    label: "Company",
    icon: <CompanyOnNavIcon />,
    path: "/company-settings",
  },
];

const Sidebar: React.FC<DrawerProps> = ({ ...props }) => {
  const classes = useStyles();
  const history = useHistory();
  const isLargerSizeDown = useScreenSizeDown(breakpointValues.xl);
  const [activeId, setActiveId] = React.useState("Dashboard");
  const router = useRouteMatch();
  React.useEffect(() => {
    history.location.pathname === "/files-filter" && setActiveId("Loan Files");
    history.location.pathname === "/company-settings" && setActiveId("Company");
    history.location.pathname === "/orders" && setActiveId("Orders");
    history.location.pathname === "/settings" && setActiveId("Settings");
    history.location.pathname === "/action" && setActiveId("Action Needed");
    history.location.pathname === "/users" && setActiveId("Users");
    history.location.pathname === "/groups" && setActiveId("Groups");
  }, [history.location.pathname, router]);

  const renderListItem = (
    { icon, label, path, hasSubSection }: ItemProps,
    index: number
  ) => {
    return (
      <ListItem
        key={index}
        onClick={
          path
            ? () => {
                history.push(path);
                setActiveId(label);
              }
            : () => {}
        }
        button
        classes={{
          gutters: `${activeId === label ? classes.active : ""}`,
          root: classes.listItem,
        }}
      >
        {icon}
        <AppTypography fontSize={isLargerSizeDown ? 15 : 18} fontWeight={500}>
          {label}
        </AppTypography>

        {hasSubSection ? (
          <IconButton style={{ marginLeft: "auto" }}>
            <ArrowRightIcon />
          </IconButton>
        ) : null}
      </ListItem>
    );
  };

  return (
    <Drawer
      classes={{
        root: classes.root,
        paper: classes.paper,
      }}
      variant={isLargerSizeDown ? "temporary" : "permanent"}
      {...props}
    >
      {isLargerSizeDown && (
        <Box className={classes.coverLogo}>
          <Avatar
            className={classes.logo}
            src={"/images/logo.png"}
            variant="square"
          />
        </Box>
      )}
      <AppTypography color="textSecondary" className={classes.mainMenu}>
        MAIN MENU
      </AppTypography>
      <List className={classes.list}>
        {React.Children.toArray(mainMenuList.map(renderListItem))}
      </List>
      <AppDivider
        style={{
          margin: isLargerSizeDown ? "30px 0" : "60px 0",
          // display: isLargerSizeDown ? "block" : "none",
        }}
      />
      <Accordion classes={{root:  classes.accordion}}>
        <AccordionSummary
          classes={{
            root: classes.accordionSummary,
            expandIcon: classes.accordionSummaryIcon,
          }}
          expandIcon={<ArrowRightIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Box className={classes.rootProfile}>
            <Avatar
              className={classes.avatar}
              src="/images/louis.png"
              variant="rounded"
            />
            <Box
              style={{
                margin: isLargerSizeDown ? "0 11px 0 8px" : "0 22px 0 8px",
              }}
            >
              <AppTypography
                fontWeight={600}
                fontSize={isLargerSizeDown ? 15 : 18}
              >
                Louis Anderson
              </AppTypography>
              <AppTypography
                style={{ textAlign: "left" }}
                color="textSecondary"
                fontWeight={400}
                fontSize={isLargerSizeDown ? 12 : 14}
              >
                Super Admin
              </AppTypography>
            </Box>
          </Box>
        </AccordionSummary>
        <List
          className={classes.list}
          // style={{ display: isLargerSizeDown ? "block" : "none" }}
        >
          {React.Children.toArray(userMenuList.map(renderListItem))}
        </List>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </Drawer>
  );
};

export default Sidebar;
