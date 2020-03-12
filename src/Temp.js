import React from "react";
import { Row, Col, Container } from "react-grid-system";
import "./scss/App.scss";

class Temp extends React.Component {
  render() {
    return (
        <Row className="temp" justify="center" align="center">
          <Col sm={16} xs={20}>
            <div id="tempImg">
                <img src={require("./images/dcoloaddesktop.gif")} />
            </div>
          </Col>
        </Row>
    );
  }
}

export default Temp;
