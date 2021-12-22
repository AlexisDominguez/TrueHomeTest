import { IFlight } from "../models/Flights";
import { getFlights } from "../services/flightSearch";
import { GET_FLIGHTS, SAVE_AVAILABLE_FLIGHTS } from "./types";

export const getAvailableFlights = () => {
  const flights = getFlights();

  return {
    type: GET_FLIGHTS,
    payload: flights,
  };
};

export const saveAvailableFlights = (availableFlights: IFlight[]) => {
  return {
    type: SAVE_AVAILABLE_FLIGHTS,
    payload: availableFlights,
  };
};
