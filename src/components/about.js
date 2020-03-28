import React from "react";
import { Row, Col } from "react-grid-system";
import WOW from "wowjs";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
  }
  componentDidMount() {
    document.getElementById("mainContainer").style.opacity = "0.2";
    new WOW.WOW().init();

    let aboutPage = document.getElementsByClassName("aboutPage")[0];
  }

  componentWillUnmount() {
    document.getElementById("mainContainer").style.opacity = "1";
  }

  sendData() {
    this.props.parentCallback();
  }

  render() {
    return (
      <div className="aboutPage">
        <div id="about-dcom">
          <h1>About</h1>
          <img
            src={require("../images/icon.svg")}
            id="closeButton"
            onClick={this.sendData}
          />
          <br style={{ clear: "both" }} />
        </div>
        <Row>
          <Col xs={20} md={11}>
            {" "}
            <h4 id="about-body-text">
              Connecting you with your community!
              <br />
              <br />
              Inspired by{" "}
              <a href="https://blackswho.design/">Blacks Who Design</a> and{" "}
              <a href="https://womenwho.design/">Women Who Design</a>,{" "} our page
              is an online directory aimed to connect UCSD student designers and
              alumni with each other. Our goal is to cultivate a vibrant
              community where people can share their work, build new
              relationships, look for mentors, and much more. This community
              page isn’t just for Design Co members, but for all student
              designers at UCSD, from first-years to alumni. So, if you’re a
              fellow designer looking to meet people who share your interests,
              come join our community and be apart of something bigger!
            </h4>
          </Col>
          <Col xs={20} md={8}>
            <img src={require("../images/aboutImg.png")} alt="Community" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
