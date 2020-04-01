import React from "react";
import {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  setConfiguration
} from "react-grid-system";

import axios from 'axios';
import allMembers from './allMembers.js';

const API_BASE = "http://localhost:8000/api/members"

class NominationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      year: 0,
      portfolio: "",
      linkedin: "",
      image:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const targetEvent = event.target.name;
    this.setState({ [targetEvent]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const member = {
      name: this.state.name,
      year: this.state.year,
      portfolio: this.state.portfolio,
      image: "hello",
      linkedin: this.state.linkedin,
    };

    console.log(member)

    axios.post(API_BASE, member).then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error.data)
    })

  }

  render() {
    return (
      <div className="nomination">
        <h3>Nomination Form</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>NAME </p>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              name="name"
            />
          </label>
          <label>
            <p>YEAR </p>
            <input
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
              name="year"
            />
          </label>
          <label>
            <p>PORTFOLIO </p>
            <input
              type="url"
              value={this.state.value}
              onChange={this.handleChange}
              name="portfolio"
            />
          </label>
          <label>
            <p>LINKEDIN</p>
            <input
              type="url"
              value={this.state.value}
              onChange={this.handleChange}
              name="linkedin"
            />
          </label>
          <button type="button" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default NominationForm;
