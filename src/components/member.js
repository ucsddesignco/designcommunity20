import React from "react";
import "../scss/App.scss";

class Member extends React.Component {

  render() {

    const linkedinURL = `https://www.linkedin.com${this.props.linkedin}`;
    const portfolioURL = `https://www.${this.props.portfolio}`;

    return (
      <div className="memberContainer">
        <img src={require(`../images/team/${this.props.image}.png`)}></img>
        <p>CLASS OF {this.props.year}</p>
        <h2> {this.props.name}</h2>
        <div className="info">
          <img src={require("../images/globeVector.svg")}></img>
          <p>
            {" "}
    <a href={portfolioURL}>{this.props.portfolio.toUpperCase()}</a>
          </p>
        </div>
        <div className="info">
          <img src={require("../images/in.svg")}></img>
          <p>
            {" "}
            <a href={linkedinURL}>{this.props.linkedin.toUpperCase()}</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Member;
