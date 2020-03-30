import React from "react";
import "./scss/App.scss";
import Member from "./components/member";
import allMembers from "./components/allMembers.js";
import HamburgerMenu from "react-hamburger-menu";
import { StickyContainer, Sticky } from "react-sticky";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numFilters: 0,
      UXDesigner: false,
      VisDesigner: false,
      ProdDesigner: false,
      ContentStrategist: false,
      UXResearcher: false,
      UXEngineer: false,
      Graphic: false,
      allCommunity: allMembers,
      aboutButton: false,
      menuOpen: false,
      windowWidth: window.innerWidth
    };

    this.handleChange = this.handleChange.bind(this);
    this.allMemberMap = this.allMemberMap.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.aboutState = this.aboutState.bind(this);
    this.aboutCallback = this.aboutCallback.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.leftSideMenu = this.leftSideMenu.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  handleResize() {
    console.log("RESIZING");
    this.setState({
      windowWidth: window.innerWidth
    });

    if (this.state.windowWidth > 767) {
      document.getElementsByClassName("mainSite")[0].style.display = "flex";
      document.getElementById("menuContents").style.display = "block";
      this.setState({
        menuOpen: false
      });
    } else if (this.state.menuOpen === false) {
      document.getElementsByClassName("mainSite")[0].style.display = "none";
      document.getElementById("menuContents").style.display = "none";
    }
  }

  handleChange(event) {
    console.log(event.target.name);
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
    console.log(this.state.aboutButton);
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
              width={28}
              height={17}
              strokeWidth={3}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
        </div>

        <div id="menuContents">
          <button type="button" id="nominateBtn">
            <a href="https://forms.gle/2Ni3UCwx6ZSTgH9y7">NOMINATE</a>
          </button>

          <div id="filter">
            <h3>Filters</h3>
            <h5 onClick={this.resetFilters}>Clear All</h5>
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
            id="VisDesigner"
            type="checkbox"
            name="VisDesigner"
            value="VisDesigner"
            onChange={this.handleChange}
          />
          <label for="VisDesigner">
            <p>VISUAL DESIGNER</p>
          </label>
          <input
            className="styled-checkbox checkbox"
            id="ProdDesigner"
            type="checkbox"
            name="ProdDesigner"
            value="ProdDesigner"
            onChange={this.handleChange}
          />
          <label for="ProdDesigner">
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
            id="Graphic"
            type="checkbox"
            name="Graphic"
            value="Graphic"
            onChange={this.handleChange}
          />
          <label for="Graphic">
            <p>GRAPHIC DESIGNER</p>
          </label>
        </div>
      </div>
    );
  }

  resetFilters() {
    console.log("RESET FILTERS");

    let allBoxes = document.getElementsByTagName("input");
    for (let i = 0; i < allBoxes.length; i++) {
      allBoxes[i].checked = false;
    }

    this.setState({
      UXDesigner: false,
      VisDesigner: false,
      ProdDesigner: false,
      ContentStrategist: false,
      UXResearcher: false,
      UXEngineer: false,
      Graphic: false,
      numFilters: 0
    });
  }

  aboutCallback() {
    console.log("ABOUT CALLBACK");
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
      document.getElementById("memberMap").style.position = "static";
    }

    let val = !this.state.menuOpen;
    this.setState({
      menuOpen: val
    });
  }

  allMemberMap() {
    let mapArray = this.shuffleArray(this.state.allCommunity);
    return mapArray.map(member => {
      if (this.state.numFilters > 0) {
        if (
          (this.state.UXDesigner && member.tags.includes("UXDesigner")) ||
          (this.state.VisDesigner && member.tags.includes("VisDesigner")) ||
          (this.state.ProdDesigner && member.tags.includes("ProdDesigner")) ||
          (this.state.ContentStrategist &&
            member.tags.includes("ContentStrategist")) ||
          (this.state.UXResearcher && member.tags.includes("UXResearcher")) ||
          (this.state.UXEngineer && member.tags.includes("UXEngineer")) ||
          (this.state.Graphic && member.tags.includes("Graphic"))
        ) {
          return (
            <Col xs={10} sm={10} md={5} lg={4}>
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
          <Col xs={10} sm={5} md={5} lg={4}>
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

  render() {
    console.log("RENVER AGAING");
    return (
      <div className="container">
        <About parentCallback={this.aboutCallback} />

        <Row id="mainContainer">
          <Col xs={20} sm={20} md={5}>
            {" "}
            {this.leftSideMenu()}
          </Col>

          <Col xs={20} sm={20} md={15}>
            <Row id="memberMap">{this.allMemberMap()}</Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
