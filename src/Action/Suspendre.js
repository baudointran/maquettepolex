import React from "react";
import { Form, Label, FormGroup, Input, Button, Row, Col } from "reactstrap";
import FileUpload from "../Utils/FileUpload";

export default class Suspendre extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Row>
            <Col>
              <FormGroup id="id_date">
                <Label for="exampleDatetime">Durée :</Label>
                <Input
                  type="datetime"
                  name="datetime"
                  id="exampleDatetime"
                  placeholder="Durée"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleText">Commentaire</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FileUpload />
            </Col>
          </Row>
          <Button className="float-right">Valider</Button>
        </Form>
      </div>
    );
  }
}
