import React from "react";
import {
  CardHeader,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter
} from "reactstrap";
import Alertes from "../Alerte/Alertes";
import Dossiers from "../Dossier/Dossiers";



export default class DashboardContainer extends React.Component {
  render() {
    return (
      <div>
        <img src="Pictures/DashboardTest.png" />
      <Card>
        <Card>
          <CardHeader>
            <CardTitle>Alerte en cours</CardTitle>
          </CardHeader>
          <CardBody>
            <Alertes />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dossier en cours</CardTitle>
          </CardHeader>
          <CardBody >
            <Dossiers/>
          </CardBody>
        </Card>
      </Card>
      </div>
    );
  }
}
