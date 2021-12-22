import { IAvailableFlights, IFlight } from "../models/Flights";
import { getFlights } from "../services/flightSearch";
import { BOOK_FLIGHTS, GET_FLIGHTS, SAVE_AVAILABLE_FLIGHTS } from "./types";

export const getAvailableFlights = () => {
  const flights = getFlights();

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
