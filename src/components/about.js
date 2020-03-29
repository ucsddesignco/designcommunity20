import React from "react";
import { Row, Col } from "react-grid-system";
import WOW from "wowjs";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hideAbout: true };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleAbout = this.handleAbout.bind(this);
    this.toggle = this.toggle.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }

  handleScroll() {
    // Enable/disable document page from scrolling
    document.body.style.overflow = this.state.hideAbout ? "hidden" : "scroll";
  }

  handleAbout() {
    let aboutPage = document.getElementsByClassName("aboutPage")[0];
    let darkPanel = document.getElementById("panel-darken");

    // Slide panel in/out
    if (aboutPage.style.transform == "translateX(0%)") {
      aboutPage.style.transform = darkPanel.style.transform = "translateX(100%)";
    } else {
      aboutPage.style.transform = darkPanel.style.transform = "translateX(0%)";
    }

    this.handleScroll();
  }

  toggle() {
    // Toggle state
    this.setState(state => ({
      hideAbout: !state.hideAbout
    }));

    this.handleAbout();
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      if (!this.state.hideAbout) {
        this.setState(state => ({
          hideAbout: true
        }));
        
        this.handleAbout();
        document.body.style.overflow = "scroll";
      }
    }
  }

  componentDidMount() {
    new WOW.WOW().init();
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    return (
      <div>
        {/* Footer */}
        <Row className="mainSite" style={{ alignItems: "baseline" }}>
          <h3 onClick={this.toggle}>About</h3>
          <a href="http://www.ucsddesign.co/" target="_blank">
            <div>
              <h3>Main Site</h3>
              <svg
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "2.7rem" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </a>
        </Row>

        {/* Background brightness */}
        <div id="panel-darken" onClick={ this.toggle }></div>

        {/* About panel */}
        <div className="aboutPage">
          <div id="about-dcom">
            <h1>About</h1>
            <img
              src={require("../images/icon.svg")}
              id="closeButton"
              onClick={this.toggle}
            />
            <br style={{ clear: "both" }} />
          </div>
          <Row justify="center" align="center">
            <Col xs={20} md={12} lg={10} xl={10}>
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
            <Col xs={20} md={20} lg={10} xl={10}>
              <img src={require("../images/aboutImg.png")} alt="Community" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default About;
