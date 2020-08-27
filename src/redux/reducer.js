import { FLIGHT_LISTS } from "./action";

const initialState = { flights: [] };

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_LISTS:
      let flights = action.data;
      initialState.flights = flights;
      return { ...initialState, flights: flights };
    default:
      return initialState;
  }
};

export default mainReducer;
