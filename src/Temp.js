import React from "react";
import { Col, Row } from "react-grid-system";

class Temp extends React.Component {
  render() {
    return (
      <div className="temp">
        <img src={require("./images/dcoloaddesktop.gif")} />
      </div>
    );
  }
}

export default Temp;
