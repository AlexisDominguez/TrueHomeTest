import Card from "../../components/Card";
import styles from "./FlightCard.module.css";
import moment from "moment";
import Button from "../Button";
import { FC } from "react";

interface IFlightCardProps {
  originCityName: string;
  destinationCityName: string;
  originCityTime: Date;
  destinationCityTime: Date;
  flightPrice: number;
  flightId: string;
  handleBooking: (flightId: string) => void;
  inShoppingCart?: boolean;
}

const FlightCard: FC<IFlightCardProps> = (props) => {
  const {
    originCityName,
    destinationCityName,
    originCityTime,
    destinationCityTime,
    flightId,
    flightPrice,
    handleBooking,
    inShoppingCart,
  } = props;

  return (
    <div
      className={`${styles.flightCard} ${
        inShoppingCart ? styles.defaultFontColor : ""
      }`}
    >
      <Card containerClass={styles.flightCardContainer} softCard>
        <div className={styles.flightCitiesContainer}>
          <div className={styles.flightCityContainer}>
            <div
              className={
                inShoppingCart ? styles.lowerFontSize : styles.flightCity
              }
            >
              {originCityName}
            </div>{" "}
            <div
              className={
                inShoppingCart ? styles.lowerFontSize : styles.flightTime
              }
            >
              {moment(originCityTime).format("HH:mm")}
            </div>
          </div>
          <div className={styles.flightCityContainer}>
            <div
              className={
                inShoppingCart ? styles.lowerFontSize : styles.flightCity
              }
            >
              {destinationCityName}
            </div>
            <div
              className={
                inShoppingCart ? styles.lowerFontSize : styles.flightTime
              }
            >
              {moment(destinationCityTime).format("HH:mm")}
            </div>
          </div>
        </div>
        <div className={styles.flightPriceContainer}>
          <div className={styles.flightPriceModule}>
            <div
              className={
                inShoppingCart ? styles.lowerFontSize : styles.flightPriceTag
              }
            >
              Precio
            </div>
            <div
              className={
                inShoppingCart ? styles.lowerFontSize : styles.flightPrice
              }
            >
              ${flightPrice} MXN
            </div>
          </div>
          <Button
            containerClass={
              inShoppingCart ? styles.removeMargin : styles.flightBookingButton
            }
            onClick={() => handleBooking(flightId)}
          >
            {inShoppingCart ? "Cancelar" : "Agregar al carrito"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FlightCard;
