import React from "react";
import "../scss/App.scss";
import { prototype } from "events";

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countPeople: 0
    };

    this.handlePeopleLoad = this.handlePeopleLoad.bind(this);
  }

  handlePeopleLoad() {}

  render() {
    const linkedinURL = `https://www.linkedin.com${this.props.linkedin}`;
    const portfolioURL = `http://${this.props.portfolio}`;

    let portfolio = this.props.portfolio.toUpperCase();
    let linkedin = this.props.linkedin.toUpperCase();
    return (
      <div className="memberContainer">
        <img
          src={require(`../images/team/${this.props.image}.jpeg`)}
          loading="lazy"
        ></img>
        <p>CLASS OF {this.props.year} </p>
        <h2> {this.props.name} </h2>
        <div className="info">
          <img src={require("../images/globeVector.svg")}></img>
          <p>
            {" "}
            <a href={portfolioURL} target="_blank">
              {portfolio}
            </a>
            <span style={{ display: "none" }}>
              Portfolio will open in a new tab
            </span>
          </p>
        </div>
        <div className="info">
          <img src={require("../images/in.svg")}></img>
          <p>
            {" "}
            <a href={linkedinURL} target="_blank">
              {linkedin}
            </a>
            <span style={{ display: "none" }}>
              LinkedIn profile will open in a new tab
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Member;
