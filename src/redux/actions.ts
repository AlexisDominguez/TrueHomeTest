import { getFlights } from "../services/flightSearch";
import { GET_FLIGHTS } from "./types";

export const getAvailableFlights = () => {
  const flights = getFlights();

  return {
    type: GET_FLIGHTS,
    payload: flights,
  };
};
