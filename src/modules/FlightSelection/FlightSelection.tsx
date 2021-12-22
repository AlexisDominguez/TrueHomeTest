import { useEffect } from "react";
import ErrorCard from "../../components/ErrorCard";
import FlightCard from "../../components/FlightCard";
import { IFlight } from "../../models/Flights";
import { bookFlights, saveAvailableFlights } from "../../redux/actions";
import { useDispatch, useSelector } from "../../redux/hooks";

const FlightSelection = () => {
  const flights = useSelector((state) => state.availableFlights);
  const bookedFlights = useSelector((state) => state.bookedFlights);
  const dispatch = useDispatch();

  const { originCity, passengers, availableFlights } = flights;

  const removeFlightsSelected = (): void => {
    let newAvailableFlights: IFlight[] = availableFlights.slice(0);

    const bookedFlightsIds = bookedFlights.map(
      (bookedFlight) => bookedFlight.availableFlights[0].flightId
    );

    dispatch(
      saveAvailableFlights(
        originCity,
        passengers,
        newAvailableFlights.filter(
          (flight) => !bookedFlightsIds.includes(flight.flightId)
        )
      )
    );
  };

  useEffect(() => {
    removeFlightsSelected();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookedFlights]);

  const handleBooking = (flightId: string): void => {
    const selectedFlight = availableFlights.find(
      (flight) => flight.flightId === flightId
    );

    if (!selectedFlight) return;

    const bookFlight = {
      originCity,
      passengers,
      availableFlights: [selectedFlight],
    };

    dispatch(bookFlights([...bookedFlights, bookFlight]));
  };

  return (
    <section>
      {availableFlights.length ? (
        availableFlights.map((flight) => (
          <FlightCard
            key={flight.flightId}
            originCityName={originCity}
            destinationCityName={flight.city}
            originCityTime={flight.departureDate as Date}
            destinationCityTime={flight.arrivalTime as Date}
            flightPrice={Number(flight.costByPassenger) * passengers}
            flightId={flight.flightId}
            handleBooking={handleBooking}
          />
        ))
      ) : (
        <ErrorCard />
      )}
    </section>
  );
};

export default FlightSelection;
