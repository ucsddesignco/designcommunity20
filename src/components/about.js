import React from "react";
import { Row, Col } from "react-grid-system";

class About extends React.Component {

    constructor(props){
        super(props);
        this.sendData = this.sendData.bind(this);
    }
  componentDidMount() {
    document.getElementById("mainContainer").style.opacity = "0.2";
  }

  componentWillUnmount() {
    document.getElementById("mainContainer").style.opacity = "1";
  }

  sendData(){
      this.props.parentCallback();
  }

  render() {
    return (
      <div className="aboutPage">
        <div id="about-dcom">
          <h4>About the UCSD Design Co Community</h4>
          <img src={require("../images/icon.svg")} id="closeButton"
          onClick={this.sendData}/>
          <br style={{clear: "both"}} />
        </div>

        <h1>About</h1>
        <h4 id="about-body-text">
          We aim to help people find notable and relevant voices It aims to help
          people find notable and relevant voices It aims to help people find
          notable and relevant voices It aims to help people find notable and
          relevant voices
        </h4>
      </div>
    );
  }
}

export default About;
