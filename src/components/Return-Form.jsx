import React, { Component } from "react";
import Select from "react-dropdown-select";
import { Cities } from "./../redux/data";

class ReturnForm extends Component {
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
              placeholder="Enter Origin City"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Destination City:
            </label>
            {/*<input
            type="text"
            className="form-control"
            placeholder="Enter Destination City"
          />*/}
            {/* <Select
            className="selectDropdownClass"
            multi={false}
            searchable={true}
            options={Cities}
            onChange={this.setDestination}
            clearable={() => this.clearDestination()}
            placeholder={"Select Destination City"}
          /> */}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Departure Date:
            </label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter Departure Date"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Return Date:
            </label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter Return Date"
            />
          </div>
          <button className="btn btn-outline-primary btn-block btn-sm">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default ReturnForm;
