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

    // Reset panel scroll position to the top
    aboutPage.scrollTop = 0;

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

    if (window.getComputedStyle(document.getElementById("menuContents")).display != "none") {
      document.getElementsByClassName("mainSite")[0].style.display = "flex";
    } else {
      document.getElementsByClassName("mainSite")[0].style.display = "none";
    }
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
            <span>
              <h3>Main Site</h3>
              <img src={require('../images/Union.svg')} />
            </span>
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
          </div>
          <div>
            <img 
              id="aboutImg"
              src={require("../images/aboutImg.jpg")} 
              alt="Community" 
            />
          </div>
          <div id="about-body-text">
            <h5>
              Connecting you with your community!
            </h5>
            <h5>
              Inspired by{" "}
              <a href="https://blackswho.design/">Blacks Who Design</a> and{" "}
              <a href="https://womenwho.design/">Women Who Design</a>,{" "} our page
              is an online directory aimed to connect UCSD student designers and
              alumni with each other. Our goal is to cultivate a vibrant
              community where people can share their work, build new
              relationships, look for mentors, and much more.
            </h5>
            <h5>
              This community page isn’t just for Design Co members, but for all 
              student designers at UCSD, from first-years to alumni. So, if 
              you’re a fellow designer looking to meet people who share your 
              interests, come join our community and be apart of something bigger!
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default About;