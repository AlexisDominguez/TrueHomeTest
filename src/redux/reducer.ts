import { GET_FLIGHTS } from "./types";

const INITAL_STATE = {
  flights: {},
};

const reducer = (state = INITAL_STATE, action: any) => {
  switch (action.type) {
    case GET_FLIGHTS:
      return {
        ...state,
        flights: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
