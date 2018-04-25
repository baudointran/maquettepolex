import React from "react";
import { Row, Col } from "reactstrap";

export default class AlerteDetailTableau extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <img src="Pictures/DashboardTest.png" />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="/AnalyseContainer">Analyse de l'alerte</a>
            {/* <a href="https://public.tableau.com/fr-fr/s/gallery">
              Voir detail dans tableau
            </a>*/}
          </Col>
        </Row>
      </div>
    );
  }
}
