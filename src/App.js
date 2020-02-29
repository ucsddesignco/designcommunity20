import React from "react";
import "./scss/App.scss";
import Member from "./components/member";
import allMembers from "./components/allMembers.js";
import { StickyContainer, Sticky } from "react-sticky";

import {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  setConfiguration
} from "react-grid-system";

import NominationForm from "./components/nominationForm";
import axios from "axios";
import About from "./components/about";
const API_URL = "http://localhost:8000/api/members";

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
      aboutButton: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.allMemberMap = this.allMemberMap.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.aboutState = this.aboutState.bind(this);
    this.aboutCallback = this.aboutCallback.bind(this);

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

  resetFilters() {
    console.log("RESET FILTERS");

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

  aboutCallback(){
    console.log("ABOUT CALLBACK")
    this.setState({
      aboutButton: false
    })
  }

  allMemberMap() {
    console.log("allMembers", this.state);
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
    return (
      <div className="container">
        {console.log("RENDER AGAIN")}
        {this.state.aboutButton && <About parentCallback = {this.aboutCallback}/>}

        <Row id="mainContainer">
          <Col xs={20} sm={5} md={5}>
            <div className="leftSide">
              <img src={require("./images/designCommunity.svg")}></img>
              <button type="button">NOMINATE</button>

              <div id="filter">
                <h3>Filters</h3>
                <h4 onClick={this.resetFilters}>Clear All</h4>
                <br />
              </div>
              {
                //Need to add form action and all
              }

              <label>
                <input
                  type="checkbox"
                  name="UXDesigner"
                  className="checkbox"
                  value="UXDesigner"
                  onChange={this.handleChange}
                ></input>
                <p>UX DESIGNER</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="VisDesigner"
                  className="checkbox"
                  onChange={this.handleChange}
                ></input>
                <p>VISUAL DESIGNER</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ProdDesigner"
                  className="checkbox"
                  onChange={this.handleChange}
                ></input>
                <p>PRODUCT DESIGNER</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ContentStrategist"
                  className="checkbox"
                  onChange={this.handleChange}
                ></input>
                <p>CONTENT STRATEGIST</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="UXResearcher"
                  className="checkbox"
                  onChange={this.handleChange}
                ></input>
                <p>UX RESEARCHER</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="UXEngineer"
                  className="checkbox"
                  onChange={this.handleChange}
                ></input>
                <p>UX ENGINEER</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Graphic"
                  className="checkbox"
                  onChange={this.handleChange}
                ></input>
                <p>GRAPHIC DESIGNER</p>
              </label>
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
              <Row className="mainSite">
                <h3 onClick={this.aboutState}>About</h3>
                <h3>Main Site</h3>
              </Row>
            </div>
          </Col>

          <Col xs={20} sm={15} md={15}>
            <Row>{this.allMemberMap()}</Row>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default App;
