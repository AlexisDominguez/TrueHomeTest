import {
  BOOK_FLIGHTS,
  GET_FLIGHTS,
  SAVE_AVAILABLE_FLIGHTS,
  SAVE_CUSTOMER,
} from "./types";
import { IFlights, IAvailableFlights } from "../models/Flights";
import { ICustomer } from "../models/Customer";

interface IINITIAL_STATE {
  flights: IFlights;
  availableFlights: IAvailableFlights;
  bookedFlights: IAvailableFlights[];
  customer: ICustomer;
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
  customer: {
    name: "",
    lastName: "",
    secondLastName: "",
    email: "",
    address: "",
  },
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

    case SAVE_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
