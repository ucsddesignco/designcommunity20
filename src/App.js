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

let visited = localStorage.getItem("user-visited");

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
    this.handleDisagree = this.handleDisagree.bind(this);
    this.handleAgree = this.handleAgree.bind(this);
    this.confirmBox = this.confirmBox.bind(this);
    this.leftSideMenu = this.leftSideMenu.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    console.log(visited);

    if (visited === null) {
      visited = false;
      let mainContainer = document.getElementById("mainContainer");
      mainContainer.style.pointerEvents = "none";
      mainContainer.style.opacity = "0.2";
      mainContainer.style.position = "fixed";
    }

    console.log(this.state.windowWidth);

    window.addEventListener("resize", this.handleResize);
  }

  handleResize() {
    console.log("RESIZING");
    this.setState({
      windowWidth: window.innerWidth
    });
    console.log(this.state.windowWidth);

    if (this.state.windowWidth > 767) {
      document.getElementById("menuContents").style.display = "block";
      this.setState({
        menuOpen: false
      })
    }
    else if (this.state.menuOpen === false) {
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
  aboutState() {
    let val = !this.state.aboutButton;
    console.log(this.state.aboutButton);
    this.setState({
      aboutButton: val
    });
  }

  handleDisagree() {
    console.log("disagree");
    window.open("http://www.ucsddesign.co", "_self");
    window.close();
  }

  handleAgree() {
    let mainContainer = document.getElementById("mainContainer");

    mainContainer.style.pointerEvents = "auto";
    mainContainer.style.position = "static";
    mainContainer.style.opacity = "1";
    localStorage.setItem("user-visited", true);

    document.getElementsByClassName("confirmBox")[0].style.display = "none";
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
              width={30}
              height={16}
              strokeWidth={2}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
        </div>

        <div id="menuContents">
          <button type="button" id="nominateBtn" onClick={this.handleDisagree}>
            NOMINATE
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
            class="styled-checkbox checkbox"
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
            class="styled-checkbox checkbox"
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
            class="styled-checkbox checkbox"
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
            class="styled-checkbox checkbox"
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
            class="styled-checkbox checkbox"
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
            class="styled-checkbox checkbox"
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
            class="styled-checkbox checkbox"
            id="Graphic"
            type="checkbox"
            name="Graphic"
            value="Graphic"
            onChange={this.handleChange}
          />
          <label for="Graphic">
            <p>GRAPHIC DESIGNER</p>
          </label>
          {/*
    <Row className="sortBy">
      <Col xs={8}>
        <h3>Sort By</h3>
      </Col>
      <Col xs={12}>
        <label>
          <select
            id="year"
            onChange={() => {
              console.log("selected");
            }}
          >
            <option value="none">NONE</option>
            <option value="ascending">YEAR: ASCENDING</option>
            <option value="descending">YEAR: DESCENDING</option>
          </select>
        </label>
      </Col>
    </Row>
    */}
          <Row className="mainSite" style={{ alignItems: "baseline" }}>
            <h3 onClick={this.aboutState}>About</h3>
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.2892 19.8011L13.2892 12.7929L37.1171 12.7929L37.1171 19.8011L37.116 19.8011L37.116 37.3225L30.8086 37.3225L30.8086 24.0167L14.5883 40.237L10.0719 35.7207L25.9915 19.8011L13.2892 19.8011Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </a>
          </Row>
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
      document.getElementById("menuContents").style.display = "block";
    } else {
      document.getElementById("menuContents").style.display = "none";
    }

    let val = !this.state.menuOpen;
    this.setState({
      menuOpen: val
    });
  }

  confirmBox() {
    console.log(visited);
    if (!visited) {
      return (
        <div className="confirmBox">
          <Row justify="center" align="center">
            <Col xs={18}>
              <h4>
                Before you enter the website, please understand that stolen work
                is not tolerated under any circumstances.{" "}
              </h4>
            </Col>
          </Row>
          <Row justify="center" align="center">
            <Col xs={16} sm={9}>
              <button id="agreeBtn" onClick={this.handleAgree}>
                I AGREE
              </button>
            </Col>
            <Col xs={16} sm={9}>
              <button id="disagreeBtn" onClick={this.handleDisagree}>
                I DISAGREE
              </button>
            </Col>
          </Row>
        </div>
      );
    }
  }

  allMemberMap() {
    return this.state.allCommunity.map(member => {
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
          <Col xs={10} sm={5} lg={4}>
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
        {this.state.aboutButton && (
          <About parentCallback={this.aboutCallback} />
        )}

        {this.confirmBox()}

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
