import React from "react";
import "./scss/App.scss";
import Member from "./components/member";
import allMembers from "./components/allMembers.js";
import HamburgerMenu from "react-hamburger-menu";
import { StickyContainer, Sticky } from "react-sticky";
import ReactGA from "react-ga";
import {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  setConfiguration
} from "react-grid-system";
import About from "./components/about";

setConfiguration({ gridColumns: 20 });

const trackingId = "UA-162464807-1";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numFilters: 0,
      UXDesigner: false,
      VisualDesigner: false,
      ProductDesigner: false,
      ContentStrategist: false,
      UXResearcher: false,
      UXEngineer: false,
      GraphicDesigner: false,
      allCommunity: allMembers,
      aboutButton: false,
      menuOpen: false,
      windowWidth: window.innerWidth,
      readyState: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.allMemberMap = this.allMemberMap.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.aboutState = this.aboutState.bind(this);
    this.aboutCallback = this.aboutCallback.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.leftSideMenu = this.leftSideMenu.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleReadyStateChanged = this.handleReadyStateChanged.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
  }

  componentDidMount() {
    let aboutHeight = window.innerHeight * 0.01;
    document.documentElement.style.setProperty(
      "--aboutHeight",
      `${aboutHeight}px`
    );
    window.addEventListener("resize", this.handleResize);
    document.addEventListener("readystatechange", this.handleReadyStateChanged);
    ReactGA.initialize(trackingId);
  }

  componentWillMount() {
    this.shuffleArray(this.state.allCommunity);
  }

  handleReadyStateChanged() {
    if (document.readyState === "complete") {
      this.setState({
        readyState: true
      });
    }
  }

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth
    });

    if (this.state.windowWidth > 767) {
      document.getElementsByClassName("mainSite")[0].style.display = "flex";
      document.getElementById("menuContents").style.display = "block";
      document.getElementById("menuContents").style.position = "static";
      document.getElementById("memberMap").style.position = "static";
      this.setState({
        menuOpen: false
      });
    } else if (this.state.menuOpen === false) {
      document.getElementsByClassName("mainSite")[0].style.display = "none";
      document.getElementById("menuContents").style.display = "none";
    }

    let aboutHeight = window.innerHeight * 0.01;
    document.documentElement.style.setProperty(
      "--aboutHeight",
      `${aboutHeight}px`
    );
  }

  handleChange(event) {
    const name = event.target.name;
    let value = event.target.checked;

    if (value === true) {
      this.state.numFilters++;
    } else {
      this.state.numFilters--;
    }

    this.setState({
      [name]: value
    });

    this.shuffleArray(this.state.allCommunity);
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  aboutState() {
    let val = !this.state.aboutButton;
    this.setState({
      aboutButton: val
    });
  }

  leftSideMenu() {
    return (
      <div className="leftSide">
        <div id="logoMenu">
          <img
            src={require("./images/designCommunity.svg")}
            alt="Design Community"
            id="communityLogo"
          ></img>
          <div id="hamburgerMenu">
            <HamburgerMenu
              className="hamburger"
              isOpen={this.state.menuOpen}
              menuClicked={this.handleMenuOpen.bind(this)}
              width={20}
              height={15}
              strokeWidth={2}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
        </div>

        <div id="menuContents">
          <a
            id="nominateBtn"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfAyZkek2lK5m9qCjx8-PTCTsbN0hF7Qn4JCnLji7y7fSopZg/viewform"
          >
            <p>NOMINATE</p>
          </a>

          <div id="filter">
            <h3>Filters</h3>
            <h5 onClick={this.resetFilters} id="clearBtn">
              Clear All
            </h5>
            <br />
          </div>
          {
            //Need to add form action and all
          }

          <input
            className="styled-checkbox checkbox"
            id="UXDesigner"
            type="checkbox"
            name="UXDesigner"
            value="UXDesigner"
            onChange={this.handleChange}
          />
          <label for="UXDesigner">
            <p>UX DESIGNER</p>
          </label>
          <input
            className="styled-checkbox checkbox"
            id="VisualDesigner"
            type="checkbox"
            name="VisualDesigner"
            value="VisualDesigner"
            onChange={this.handleChange}
          />
          <label for="VisualDesigner">
            <p>VISUAL DESIGNER</p>
          </label>
          <input
            className="styled-checkbox checkbox"
            id="ProductDesigner"
            type="checkbox"
            name="ProductDesigner"
            value="ProductDesigner"
            onChange={this.handleChange}
          />
          <label for="ProductDesigner">
            <p>PRODUCT DESIGNER</p>
          </label>
          <input
            className="styled-checkbox checkbox"
            id="ContentStrategist"
            type="checkbox"
            name="ContentStrategist"
            value="ContentStrategist"
            onChange={this.handleChange}
          />
          <label for="ContentStrategist">
            <p>CONTENT STRATEGIST</p>
          </label>
          <input
            className="styled-checkbox checkbox"
            id="UXResearcher"
            type="checkbox"
            name="UXResearcher"
            value="UXResearcher"
            onChange={this.handleChange}
          />
          <label for="UXResearcher">
            <p>UX RESEARCHER</p>
          </label>
          <input
            className="styled-checkbox checkbox"
            id="UXEngineer"
            type="checkbox"
            name="UXEngineer"
            value="UXEngineer"
            onChange={this.handleChange}
          />
          <label for="UXEngineer">
            <p>UX ENGINEER</p>
          </label>

          <input
            className="styled-checkbox checkbox"
            id="GraphicDesigner"
            type="checkbox"
            name="GraphicDesigner"
            value="GraphicDesigner"
            onChange={this.handleChange}
          />
          <label for="GraphicDesigner">
            <p>GRAPHIC DESIGNER</p>
          </label>
        </div>
      </div>
    );
  }

  resetFilters() {
    console.log(this.state.numFilters);
    if (this.state.numFilters > 0) {
      this.shuffleArray(this.state.allCommunity);
    }

    let allBoxes = document.getElementsByTagName("input");
    for (let i = 0; i < allBoxes.length; i++) {
      allBoxes[i].checked = false;
    }

    this.setState({
      UXDesigner: false,
      VisualDesigner: false,
      ProductDesigner: false,
      ContentStrategist: false,
      UXResearcher: false,
      UXEngineer: false,
      GraphicDesigner: false,
      numFilters: 0
    });
  }

  aboutCallback() {
    this.setState({
      aboutButton: false
    });
  }

  handleMenuOpen() {
    if (this.state.menuOpen === false) {
      document.getElementsByClassName("mainSite")[0].style.display = "flex";
      document.getElementById("menuContents").style.display = "block";
      document.getElementById("menuContents").style.position = "fixed";
      document.getElementById("memberMap").style.position = "fixed";
    } else {
      document.getElementsByClassName("mainSite")[0].style.display = "none";
      document.getElementById("menuContents").style.display = "none";
      document.getElementById("menuContents").style.position = "relative";
      document.getElementById("memberMap").style.position = "static";
    }

    let val = !this.state.menuOpen;
    this.setState({
      menuOpen: val
    });
  }

  allMemberMap() {
    return this.state.allCommunity.map(member => {
      if (this.state.numFilters > 0) {
        if (
          (this.state.UXDesigner && member.tags.includes("UXDesigner")) ||
          (this.state.VisualDesigner &&
            member.tags.includes("VisualDesigner")) ||
          (this.state.ProductDesigner &&
            member.tags.includes("ProductDesigner")) ||
          (this.state.ContentStrategist &&
            member.tags.includes("ContentStrategist")) ||
          (this.state.UXResearcher && member.tags.includes("UXResearcher")) ||
          (this.state.UXEngineer && member.tags.includes("UXEngineer")) ||
          (this.state.GraphicDesigner &&
            member.tags.includes("GraphicDesigner"))
        ) {
          return (
            <Col xs={10} sm={10} md={5} lg={4} key={member.name}>
              <Member
                image={member.image}
                name={member.name}
                year={member.year}
                portfolio={member.portfolio}
                linkedin={member.linkedin}
              ></Member>
            </Col>
          );
        }
      } else {
        return (
          <Col xs={10} sm={5} md={5} lg={4} key={member.name}>
            <Member
              image={member.image}
              name={member.name}
              year={member.year}
              portfolio={member.portfolio}
              linkedin={member.linkedin}
            ></Member>
          </Col>
        );
      }
    });
  }

  componentDidUpdate() {
    if (document.getElementById("memberMap").children.length == 0) {
      document.getElementById("noResults").style.display = "flex";
    } else {
      document.getElementById("noResults").style.display = "none";
    }
  }

  render() {
    return (
      <div className="container">
        {/* {!this.state.readyState && <div>HELLo</div>} */}

        {this.state.readyState && (
          <div>
            {" "}
            <About parentCallback={this.aboutCallback} />
            <Row id="mainContainer">
              <Col xs={20} sm={20} md={5}>
                {" "}
                {this.leftSideMenu()}
              </Col>

              <Col xs={20} sm={20} md={15}>
                <Row id="memberMap">{this.allMemberMap()}</Row>
                <div id="noResults">
                  <h5>Sorry there's nothing here!</h5>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default App;
