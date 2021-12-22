export interface IFlights {
  cities: ICity[];
}

export interface ICity {
  [key: string]: {
    flights: IFlight[];
  };
}

export interface IFlight {
  city: string;
  departureDate: Date | string;
  arrivalTime: Date | string;
  costByPassenger: number | string;
}
