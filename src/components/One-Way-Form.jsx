import React, { Component } from "react";

class OneWayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: null,
      destination: null,
      departureDate: new Date(),
    };
  }

  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSearch = (event) => {
    event.preventDefault();
    const { origin, destination, departureDate } = this.state;
    let obj = {
      origin: origin,
      destination: destination,
      departureDate: departureDate,
    };
    console.log(obj);
  };

  render() {
    return (
      <div>
        <form className="mt-2">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Origin City:
            </label>
            <input
              type="text"
              className="form-control"
              name="origin"
              onChange={this.onHandleChange}
              placeholder="Enter Origin City"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Destination City:
            </label>
            <input
              type="text"
              className="form-control"
              name="destination"
              onChange={this.onHandleChange}
              placeholder="Enter Destination City"
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
          <button
            className="btn btn-outline-primary btn-block btn-sm"
            onClick={this.onSearch}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default OneWayForm;
