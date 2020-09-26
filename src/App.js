import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormMaker from "./components/views/Form/FormMaker";
import RegisterCustomer from "./components/views/Form/formdata/AgentandStaff";
import NewLogin from "./components/views/NewLogin/login";
import RegisterAgent from "./components/views/Form/formdata/RegisterAgent";

import Dashboard from "./components/Dashboard/Dashboard";
import TeamDashboard from "./components/TeamDashboard/Dashboard"
import Register from "./components/views/RegisterAgent/Register";
import DocumentLink from "./components/views/DocLink/DocumentLink";
import DocumentLink2 from "./components/views/DocLink/DocumentLink2";
import CreateTeam from "./components/views/CreateTeam/CreateTeam"
import DeleteTeam from "./components/views/DeleteTeam/DeleteTeam"
import DeleteUser from "./components/views/DeleteUser/DeleteUser"



const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/form">
          <FormMaker flag={1} section={RegisterCustomer} />
        </Route>
        {/* <Route path="/agent">
          <FormMaker flag={2} section={RegisterAgent} />
        </Route> */}
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/document2:id">          
          <DocumentLink2 />
        </Route>
        <Route path="/document:id">
          <DocumentLink />
        </Route>
        <Route path="/createTeam">
          <CreateTeam />
        </Route>
        <Route path="/deleteTeam">
          <DeleteTeam />
        </Route>
        <Route path="/deleteUser">
          <DeleteUser />
        </Route>

        <Route path="/teammanagerDashboard">
        <TeamDashboard />
        </Route>

        <Route path="/">
          <NewLogin />
        </Route>
        {/* <Route path="register">
          <LandingPage />
        </Route>
        <Route path="form">
          <LandingPage />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
