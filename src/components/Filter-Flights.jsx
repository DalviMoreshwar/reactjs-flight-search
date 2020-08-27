import React from "react";
import OneWayForm from "./One-Way-Form";
import ReturnForm from "./Return-Form";

const FilterFlights = (props) => {
  return (
    <>
      <div>
        <ul
          className="nav nav-tabs nav-fill mb-3 mt-2"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="one-way-tab"
              data-toggle="pill"
              href="#one-way"
              role="tab"
              aria-controls="one-way"
              aria-selected="true"
            >
              <strong>One Way</strong>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="return-tab"
              data-toggle="pill"
              href="#return"
              role="tab"
              aria-controls="return"
              aria-selected="false"
            >
              <strong>Return</strong>
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="one-way"
            role="tabpanel"
            aria-labelledby="one-way-tab"
          >
            <OneWayForm />
          </div>
          <div
            className="tab-pane fade"
            id="return"
            role="tabpanel"
            aria-labelledby="return-tab"
          >
            <ReturnForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterFlights;
