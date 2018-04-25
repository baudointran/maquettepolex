import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

import Login from "./Login/Login";
import DashboardContainer from "./DashBoard/DashboardContainer";
import AlerteDetailContainer from "./Alerte/AlerteDetailContainer";
import DossierDetailContainer from "./Dossier/DossierDetailContainer";
import DossiersCurrent from "./Dossier/DossiersCurrent";

import DemandeInfo from "./Action/DemandeInfo";
import DeclencheControle from "./Action/DeclencheControle";
import DepotPlainte from "./Action/DepotPlainte";
import SansSuite from "./Action/SansSuite";
import Suspendre from "./Action/Suspendre";
import FermetureRetrait from "./Action/FermetureRetrait";

import Parametre from "./Administration/Parametre";
import AnalyseContainer from "./Analyse/AnalyseContainer";

import Menudebug from "./Menudebug";

const styles = {
  //  fontFamily: "sans-serif",
  //  textAlign: "center"
};

//const App = () => (
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={styles}>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Accueil</NavbarBrand>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Login/">Login</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="link">
                  <span className="fa fa-align-justify" />
                </DropdownToggle>
                <DropdownMenu right>
                  <Menudebug />
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Navbar>

          <div>
            <Switch>
              <Route exact path="/" component={DashboardContainer} />
              <Route exact path="/Login" component={Login} />
              <Route
                exact
                path="/AlerteDetailContainer"
                component={AlerteDetailContainer}
              />
              <Route
                exact
                path="/DashboardContainer"
                component={DashboardContainer}
              />
              <Route
                exact
                path="/DossierDetailContainer"
                component={DossierDetailContainer}
              />
              <Route
                exact
                path="/DossiersCurrent"
                component={DossiersCurrent}
              />
              <Route exact path="/DemandeInfo" component={DemandeInfo} />
              <Route
                exact
                path="/DeclencheControle"
                component={DeclencheControle}
              />
              <Route exact path="/DepotPlainte" component={DepotPlainte} />
              <Route exact path="/SansSuite" component={SansSuite} />
              <Route exact path="/Suspendre" component={Suspendre} />
              <Route
                exact
                path="/FermetureRetrait"
                component={FermetureRetrait}
              />
              <Route exact path="/Parametre" component={Parametre} />
              <Route
                exact
                path="/AnalyseContainer"
                component={AnalyseContainer}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
