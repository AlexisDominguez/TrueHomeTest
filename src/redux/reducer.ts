import { GET_FLIGHTS, SAVE_AVAILABLE_FLIGHTS } from "./types";
import { IFlights, IFlight } from "../models/Flights";

interface IINITIAL_STATE {
  flights: IFlights;
  availableFlights: IFlight[];
}

const INITAL_STATE: IINITIAL_STATE = {
  flights: {
    cities: [],
  },
  availableFlights: [],
};

const reducer = (state = INITAL_STATE, action: any) => {
  switch (action.type) {
    case GET_FLIGHTS:
      return {
        ...state,
        flights: action.payload,
      };
    case SAVE_AVAILABLE_FLIGHTS:
      return {
        ...state,
        availableFlights: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
