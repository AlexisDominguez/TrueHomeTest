import mockFlightData from "../mockFlightData.json";

export const getAvailableFlights = (
  originCity: string,
  destinationCity: string,
  departureDate: Date,
  returnDate: string
) => {};

export const getFlights = () => {
  return mockFlightData;
};
