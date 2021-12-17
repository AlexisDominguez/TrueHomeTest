import { ChangeEvent, useState } from "react";
import Select from "../../components/Select";
import Date from "../../components/Date";
import styles from "./Booking.module.css";

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

// TODO: Create Logic handler for date pickers.
// TODO: Continue with the booking form.

const Booking = () => {
  const [originCity, setOriginCity] = useState<string>("");
  const [destinationCity, setDestinationCity] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEnddDate] = useState<Date | undefined>();

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

  const handleDates = (event: ChangeEvent<HTMLInputElement>) => void {};

  return (
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
      <Date
        label="Salida"
        error={false}
        errorMessage="Selecciona una fecha válida"
        containerClassName={styles.dateContainer}
        max={endDate}
        onChange={}
      />
      <Date
        label="Regreso"
        error={false}
        errorMessage="Selecciona una fecha válida"
        containerClassName={styles.dateContainer}
        min={startDate}
        onChange={}
      />
    </div>
  );
};

export default Booking;
