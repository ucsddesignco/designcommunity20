import React from "react";
import { Col, Row } from "react-grid-system";

class Temp extends React.Component {
  render() {
    return (
      <div className="temp">
        <img
          src={require("./images/dcoloaddesktop.gif")}
          draggable="false"
          className="mainImg"
        />
        <h4>Keep an eye out for something we're cooking up...</h4>
        <span>
          <a href="http://www.ucsddesign.co/">
            <h3>Main Site</h3>
            <img src={require("./images/Union.svg")} />
          </a>
        </span>
      </div>
    );
  }
}

export default Temp;
