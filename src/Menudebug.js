import React from "react";
import { Link } from "react-router-dom";
//import { Collapse, Button } from "reactstrap";

export default class Menudebug extends React.Component {
  render() {
    return (
      <div>
          <ul>
            <li>
              <Link to={"/DashboardContainer"}>
                Tableau de bord Utilisateur{" "}
              </Link>
            </li>
            <li>
              <Link to={"/AlerteDetailContainer"}>Alerte Details </Link>
            </li>
            <li>
              <Link to={"/DossierDetailContainer"}>Dossier Details </Link>
            </li>
            <li>
              <Link to={"/DemandeInfo"}>Demande d'information </Link>
            </li>
            <li>
              <Link to={"/DeclencheControle"}>Demande de controle </Link>
            </li>
            <li>
              <Link to={"/DepotPlainte"}>Depot Plainte </Link>
            </li>
            <li>
              <Link to={"/Parametre"}>Parametre </Link>
            </li>
            <li>
              <Link to={"/AnalyseContainer"}>Analyse </Link>
            </li>
          </ul>
        
      </div>
    );
  }
}
