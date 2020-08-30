import React, { Component } from "react";
import Select from "react-dropdown-select";

import { Cities, Passengers } from "./../redux/data";

class OneWayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      destination: "",
      passengers: "",
      departureDate: new Date(),
    };
  }

  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  setValues = (value) => {
    console.log(value.name);
  };

  onSearch = (event) => {
    event.preventDefault();
    const { origin, destination, departureDate, passengers } = this.state;
    if ((origin !== "", destination !== "", passengers !== "")) {
      let obj = {
        origin: origin[0].value,
        destination: destination[0].value,
        date: departureDate,
        passengers: passengers[0].value,
      };
      this.props.onOneWayForm(obj);
    } else {
      console.log("empty");
    }
  };

  // SET ORIGIN
  setOrigin = (params) => {
    this.setState({ origin: params });
  };

  clearOrigin = (e) => {
    console.log(e);
    this.setState({ origin: [] });
  };

  // SET DESTINATION
  setDestination = (params) => {
    this.setState({ destination: params });
  };

  clearDestination = (e) => {
    console.log(e);
    this.setState({ destination: [] });
  };

  // SET PASSENGERS
  setPassenger = (params) => {
    this.setState({ passengers: params });
  };
  clearPassenger = (e) => {
    console.log(e);
    this.setState({ passengers: [] });
  };

  render() {
    return (
      <div>
        <form className="mt-2">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Origin City:
            </label>
            <Select
              className="selectDropdownClass"
              multi={false}
              searchable={true}
              options={Cities}
              onChange={this.setOrigin}
              clearable={() => this.clearOrigin()}
              placeholder={"Select Origin City"}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Destination City:
            </label>
            <Select
              className="selectDropdownClass"
              multi={false}
              searchable={true}
              options={Cities}
              onChange={this.setDestination}
              clearable={() => this.clearDestination()}
              placeholder={"Select Destination City"}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Departure Date:
            </label>
            <input
              type="date"
              className="form-control"
              name="departureDate"
              onChange={this.onHandleChange}
              placeholder="Enter Departure Date"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Passengers:</label>
            <Select
              className="selectDropdownClass"
              multi={false}
              searchable={true}
              options={Passengers}
              onChange={this.setPassenger}
              clearable={() => this.clearPassenger()}
              placeholder={"Select Passenger"}
            />
          </div>
        </form>
        <button
          type="submit"
          className="btn btn-outline-primary btn-block btn-sm"
          onClick={this.onSearch}
        >
          {this.props.title}
        </button>
        <div className="mt-2 text-danger">Fields should not be empty!</div>
      </div>
    );
  }
}

export default OneWayForm;
