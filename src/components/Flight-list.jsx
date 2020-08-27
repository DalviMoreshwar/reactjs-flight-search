import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchFlightLists } from "./../redux/api";

class FlightList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getFlightLists } = this.props;
    getFlightLists();
  }

  render() {
    const { flights } = this.props;

    return (
      <div>
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
                    <strong color="danger">₹ {flight.price}</strong>
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
