export const FLIGHT_LISTS = "FLIGHT_LISTS";

export const actionFlightList = (dispatch, data) => {
  dispatch({ type: FLIGHT_LISTS, data: data });
};
