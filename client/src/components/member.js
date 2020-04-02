import React from "react";
import "../scss/App.scss";
import { prototype } from "events";

class Member extends React.Component {
  render() {
    const linkedinURL = `https://www.linkedin.com${this.props.linkedin}`;
    const portfolioURL = `https://www.${this.props.portfolio}`;

    let portfolio = this.props.portfolio.toUpperCase();

    // if (portfolio.length > 14) {
    //   portfolio = portfolio.toString().substring(0, 12) + "...";
    // }

    let linkedin = this.props.linkedin.toUpperCase();

    // if (linkedin.length > 14) {
    //   linkedin = linkedin.toString().substring(0, 12) + "...";
    // }
    return (
      <div className="memberContainer">
        <img src={require(`../images/team/${this.props.image}.jpeg`)}></img>
        <p>CLASS OF {this.props.year} </p>
        <h2> {this.props.name} </h2>
        <div className="info">
          <img src={require("../images/globeVector.svg")}></img>
          <p>
            {" "}
            <a href={portfolioURL}>{portfolio}</a>
          </p>
        </div>
        <div className="info">
          <img src={require("../images/in.svg")}></img>
          <p>
            {" "}
            <a href={linkedinURL}>{linkedin}</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Member;
