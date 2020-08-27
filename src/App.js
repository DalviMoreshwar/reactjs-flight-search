import React from "react";
import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/Header";
import FlightList from "./components/Filter-Flights";
import FilterFlights from "./components/Flight-list";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <FlightList />
          </div>
          <div className="col-sm-6 col-lg-9 ">
            <FilterFlights />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
