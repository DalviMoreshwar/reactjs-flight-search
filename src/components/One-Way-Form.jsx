import React, { Component } from "react";
import Select from "react-dropdown-select";

import { Cities, Passengers } from "./../redux/data";

class OneWayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: [],
      destination: [],
      passengers: [],
      departureDate: null,
      activeAlertMsg: false,
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
    console.log(origin, destination, departureDate, passengers);
    if (
      origin.length !== 0 &&
      destination.length !== 0 &&
      passengers.length !== 0 &&
      (departureDate !== null || departureDate !== "")
    ) {
      this.setState({ activeAlertMsg: false });
      let obj = {
        origin: origin[0].value,
        destination: destination[0].value,
        date: departureDate,
        passengers: passengers[0].value,
        flightMode: "oneWay",
      };
      this.props.onOneWayForm(obj);
    } else {
      this.setState(
        {
          activeAlertMsg: true,
        },
        () => {
          setTimeout(() => {
            this.setState({ activeAlertMsg: false });
          }, 3500);
        }
      );
    }
  };

  // SET ORIGIN
  setOrigin = (params) => {
    this.setState({ origin: params });
  };

  clearOrigin = (e) => {
    this.setState({ origin: [] });
  };

  // SET DESTINATION
  setDestination = (params) => {
    this.setState({ destination: params });
  };

  clearDestination = (e) => {
    this.setState({ destination: [] });
  };

  // SET PASSENGERS
  setPassenger = (params) => {
    this.setState({ passengers: params });
  };
  clearPassenger = (e) => {
    this.setState({ passengers: [] });
  };

  render() {
    const { activeAlertMsg } = this.state;
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
        {activeAlertMsg && (
          <div className="mt-2 text-danger">All fields are compulsory!</div>
        )}
      </div>
    );
  }
}

export default OneWayForm;
