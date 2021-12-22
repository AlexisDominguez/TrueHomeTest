import { BOOK_FLIGHTS, GET_FLIGHTS, SAVE_AVAILABLE_FLIGHTS } from "./types";
import { IFlights, IAvailableFlights } from "../models/Flights";

interface IINITIAL_STATE {
  flights: IFlights;
  availableFlights: IAvailableFlights;
  bookedFlights: IAvailableFlights[];
}

const INITAL_STATE: IINITIAL_STATE = {
  flights: {
    cities: [],
  },
  availableFlights: {
    originCity: "",
    availableFlights: [],
    passengers: 0,
  },
  bookedFlights: [],
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
    case BOOK_FLIGHTS:
      return {
        ...state,
        bookedFlights: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
