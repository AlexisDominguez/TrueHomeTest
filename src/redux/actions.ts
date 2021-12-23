import { ICustomer } from "../models/Customer";
import { IAvailableFlights, IFlight, IFlights } from "../models/Flights";
import {
  BOOK_FLIGHTS,
  GET_FLIGHTS,
  SAVE_AVAILABLE_FLIGHTS,
  SAVE_CUSTOMER,
} from "./types";

export const getAvailableFlights = (flights: IFlights) => {
  return {
    type: GET_FLIGHTS,
    payload: flights,
  };
};

export const saveAvailableFlights = (
  originCity: string,
  passengers: number | string,
  availableFlights: IFlight[]
) => {
  return {
    type: SAVE_AVAILABLE_FLIGHTS,
    payload: {
      originCity,
      passengers,
      availableFlights,
    },
  };
};

export const bookFlights = (bookedFlight: IAvailableFlights[]) => {
  return {
    type: BOOK_FLIGHTS,
    payload: bookedFlight,
  };
};

export const saveCustomer = (customer: ICustomer) => {
  return {
    type: SAVE_CUSTOMER,
    payload: customer,
  };
};
