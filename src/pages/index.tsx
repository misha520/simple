import { useState } from "react";
import * as React from "react";
import AppPaper from "../components/elements/Paper";
import { allColors } from "../components/foundation/palette";
import Navbar from "../components/modules/Navbar";
import { Switch, Route } from "react-router-dom";

import Sidebar from "../components/modules/Sidebar";
import FileDetailsBody from "../components/modules/file-details";
import Dashboard from "../components/modules/dashboard";
import { useScreenSizeDown } from "../hooks";
import FilterPage from "../components/modules/files-filter";
import CompanySetting from "../components/modules/company-settings";
import OrdersPage from "../components/modules/orders";
import Settings from "../components/modules/settings";
import ActionPage from "../components/modules/action";
import UserPage from "../components/modules/user";
import GroupsPage from "../components/modules/groups";

const HomePage: React.FC = () => {
  const [open, setOpen] = useState(true);
  const isSmallSizeDown = useScreenSizeDown(1600);
  return (
    <AppPaper
      style={{
        display: "flex",
        flexDirection: "column",
        border: "0px",
        background: allColors.defaultBackground,
      }}
    >
      <Navbar onOpen={() => setOpen(true)} />
      <div style={{ display: `${isSmallSizeDown ? "block" : "flex"}` }}>
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/file-detail" component={FileDetailsBody} />
          <Route exact path="/files-filter" component={FilterPage} />
          <Route exact path="/company-settings" component={CompanySetting} />
          <Route exact path="/orders" component={OrdersPage} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/action" component={ActionPage} />
          <Route exact path="/users" component={UserPage} />
          <Route exact path="/groups" component={GroupsPage}/>
        </Switch>
      </div>
    </AppPaper>
  );
};

export default HomePage;
