import React, { Component } from "react";
import { connect } from "react-redux";

import moment from "moment";

import { fetchFlightLists } from "./../redux/api";
import OneWayForm from "./One-Way-Form";
import ReturnForm from "./Return-Form";

import takeOff from "./../assets/airplane-take-off.png";

class FlightList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      passengers: 1,
      flightMode: "",
      origin: "",
      destination: "",
      date: "",
      flightsFound: "",
    };
  }

  componentDidMount() {
    const { getFlightLists } = this.props;
    getFlightLists();
  }

  getOneWayDetails = (filteredDetails) => {
    const {
      origin,
      destination,
      date,
      passengers,
      flightMode,
    } = filteredDetails;

    var filterBy = {
      date: moment(date).format("YYYY/MM/DD"),
      destination: destination,
      origin: origin,
    };
    var filteredFlights = this.props.flights.filter(function (item) {
      for (var key in filterBy) {
        if (item[key] === undefined || item[key] !== filterBy[key])
          return false;
      }
      return true;
    });

    console.log(filteredFlights.length);

    this.setState({
      flights: filteredFlights,
      passengers: passengers,
      flightMode: flightMode,
      origin: origin,
      destination: destination,
      date: date,
      flightsFound: filteredFlights.length,
    });
  };

  componentWillReceiveProps(props) {
    this.setState({
      flights: props.flights,
    });
  }

  render() {
    const {
      flights,
      passengers,
      flightMode,
      origin,
      destination,
      date,
      flightsFound,
    } = this.state;

    return (
      <>
        <div className="col-sm-6 col-lg-3">
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
                <OneWayForm
                  title={"Search"}
                  onOneWayForm={this.getOneWayDetails.bind(this)}
                />
              </div>
              <div
                className="tab-pane fade"
                id="return"
                role="tabpanel"
                aria-labelledby="return-tab"
              >
                <ReturnForm title={"Search"} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-9 ">
          {flightMode && flightMode === "oneWay" && (
            <div className="card mt-2 mb-2">
              <div className="row">
                <div className="col-sm-6 col-lg-2">
                  <img src={takeOff} width="100" height="100" alt="" />
                </div>
                <div className="col-sm-6 col-lg-10">
                  <h1>
                    <strong>
                      {origin} To {destination}
                    </strong>
                  </h1>
                  <p className="text-muted">
                    {flightsFound} Flights Found,{" "}
                    {moment(date).format("MMM, Do YYYY")}
                  </p>
                </div>
              </div>
            </div>
          )}
          {flights.map((flight, index) => {
            return (
              <div className="card mt-2 mb-2" key={index}>
                <div className="card-body mb-0">
                  <div className="row">
                    <div className="col-sm-6 col-lg-2">
                      <strong>{flight.name}</strong>
                      <p className="text-muted">{flight.flightNo}</p>
                    </div>

                    <div className="col-sm-6 col-lg-2">
                      <strong>{flight.departureTime}</strong>
                      <p className="text-muted">{flight.origin}</p>
                    </div>

                    <div className="col-sm-6 col-lg-2">
                      <strong>{flight.arrivalTime}</strong>
                      <p className="text-muted">{flight.destination}</p>
                    </div>

                    <div className="col-sm-6 col-lg-2">
                      <span> {flight.date}</span>
                    </div>

                    <div className="col-sm-6 col-lg-2">
                      <strong style={{ color: "#dc3545" }}>
                        &#8377; {flight.price * passengers}
                      </strong>
                    </div>

                    <div className="col-sm-6 col-lg-2">
                      <button
                        type="button"
                        className="btn btn-danger btn-block btn-sm"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    flights: store.flights,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFlightLists: () => fetchFlightLists(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
