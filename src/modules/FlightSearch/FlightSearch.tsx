import { ChangeEvent, useState } from "react";
import Select from "../../components/Select";
import DatePicker from "../../components/DatePicker";
import InputNumber from "../../components/InputNumber";
import styles from "./FlightSearch.module.css";
import { parseStringToDate } from "../../utils/parseStringToDate";
import { useDispatch, useSelector } from "../../redux/hooks";
import Button from "../../components/Button";
import moment from "moment";
import { saveAvailableFlights } from "../../redux/actions";
import { IFlight } from "../../models/Flights";

const citiesMock = [
  "Chihuahua",
  "Mexico",
  "Guadalajara",
  "Monterrey",
  "Juarez",
  "Durango",
  "Tijuana",
  "Zacatecas",
];

const Booking = () => {
  const [originCity, setOriginCity] = useState<string>("");
  const [destinationCity, setDestinationCity] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [passengers, setPassengers] = useState<number | string>(1);

  const allFlights = useSelector((state) => state.flights);
  const bookedFlights = useSelector((state) => state.bookedFlights);

  const dispatch = useDispatch();

  const availableDestinationCities = citiesMock.filter(
    (cities) => cities !== originCity
  );

  const [errors, setErrors] = useState({
    originCity: false,
    destinationCity: false,
  });

  const originCityHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (!citiesMock.includes(event.target.value)) {
      setErrors({ ...errors, originCity: true });
    } else {
      setOriginCity(event.target.value);
      setErrors({ ...errors, originCity: false });
    }
  };

  const destinationCityHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (!availableDestinationCities.includes(event.target.value)) {
      setErrors({ ...errors, destinationCity: true });
    } else {
      setDestinationCity(event.target.value);
      setErrors({ ...errors, destinationCity: false });
    }
  };

  const handleStartDate = (event: ChangeEvent<HTMLInputElement>): void => {
    setStartDate(parseStringToDate(event.target.value));
  };

  const handlePassengers = (event: ChangeEvent<HTMLInputElement>): void => {
    if (Number.isInteger(Number(event.target.value))) {
      setPassengers(Number(event.target.value) || "");
    }
  };

  const isValidForm = (): boolean => {
    if (
      errors.originCity ||
      !originCity ||
      errors.destinationCity ||
      !destinationCity ||
      !moment(startDate).isValid() ||
      !startDate ||
      numberOfPassengers < 1 ||
      numberOfPassengers > 8
    ) {
      return false;
    }

    return true;
  };

  const removeFlightsBooked = (flights: IFlight[] | undefined) => {
    if (!flights) return [];
    let newAvailableFlights: IFlight[] = flights.slice(0);

    const bookedFlightsIds = bookedFlights.map(
      (bookedFlight) => bookedFlight.availableFlights[0].flightId
    );

    return newAvailableFlights.filter(
      (flight) => !bookedFlightsIds.includes(flight.flightId)
    );
  };

  const handleSubmit = () => {
    if (!isValidForm) return;

    const selectedOriginCity = allFlights.cities.find(
      (city) => city[originCity.toLocaleLowerCase()]
    );

    const dateWithoutUTCOffset = moment(startDate).add(
      moment(startDate).utcOffset() * -1,
      "minutes"
    );

    const availableFligts = selectedOriginCity?.[
      originCity.toLocaleLowerCase()
    ].flights.filter((flight) => {
      if (flight.city === destinationCity.toLocaleLowerCase()) {
        if (moment(dateWithoutUTCOffset).isSame(flight.departureDate, "date")) {
          if (
            moment
              .utc(dateWithoutUTCOffset)
              .isSameOrBefore(flight.departureDate)
          )
            return flight;
        }
      }

      return null;
    });

    dispatch(
      saveAvailableFlights(
        originCity,
        passengers,
        removeFlightsBooked(availableFligts)
      )
    );
  };

  const numberOfPassengers = Number(passengers);

  return (
    <section>
      <div className={styles.bookingContainer}>
        <Select
          id="origin"
          label="Ciudad de origen"
          error={errors.originCity}
          errorMessage="Selecciona una ciudad válida"
          options={citiesMock}
          onChange={originCityHandler}
          containerClassName={styles.selectContainer}
        />
        <Select
          id="destination"
          label="Ciudad de destino"
          error={errors.destinationCity}
          errorMessage="Selecciona una ciudad válida"
          options={availableDestinationCities}
          onChange={destinationCityHandler}
          containerClassName={styles.selectContainer}
        />
        <DatePicker
          label="Salida"
          error={false}
          errorMessage="Selecciona una fecha válida"
          containerClassName={styles.DatePickerContainer}
          onChange={handleStartDate}
        />

        <InputNumber
          min={0}
          max={9}
          step={1}
          value={passengers}
          onChange={handlePassengers}
          containerClassName={styles.inputNumberContainer}
          label="Número de pasajeros"
          error={numberOfPassengers < 1 || numberOfPassengers > 8}
          errorMessage={
            numberOfPassengers < 1
              ? "El número mínimo de pasajeros es 1"
              : numberOfPassengers > 8
              ? "El número máximo de pasageros es 8"
              : ""
          }
        />
      </div>
      <Button disabled={!isValidForm()} onClick={handleSubmit}>
        Buscar vuelos
      </Button>
    </section>
  );
};

export default Booking;
