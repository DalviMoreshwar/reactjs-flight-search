import React from "react";

const ReturnForm = (props) => {
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
          <input
            type="text"
            className="form-control"
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
};

export default ReturnForm;
