import axios from "axios";

import { actionFlightList } from "./action";

const URL = `https://tw-frontenders.firebaseio.com/advFlightSearch.json`;

const fetchFlightLists = (dispatch) => {
  axios.get(URL).then((res) => {
    if (res.status === 200) {
      actionFlightList(dispatch, res.data);
    }
  });
};

export { fetchFlightLists };
