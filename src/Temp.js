import React from "react";
import { Row, Col, Container } from "react-grid-system";
import "./scss/App.scss";

class Temp extends React.Component {
  render() {
    return (
        <Row className="temp" justify="center" align="center">
          <Col sm={12} xs={20}>
            <img
              src={require("./images/dcoloaddesktop.gif")}
              className="tempImg"
              draggable="false"
            />
          </Col>
        </Row>
    );
  }
}

export default Temp;
