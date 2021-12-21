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
  } = props;

  return (
    <div className={styles.flightCard}>
      <Card containerClass={styles.flightCardContainer} softCard>
        <div className={styles.flightCitiesContainer}>
          <div className={styles.flightCityContainer}>
            <div className={styles.flightCity}>{originCityName}</div>{" "}
            <div className={styles.flightTime}>
              {moment(originCityTime).format("HH:mm")}
            </div>
          </div>
          <div className={styles.flightCityContainer}>
            <div className={styles.flightCity}>{destinationCityName}</div>
            <div className={styles.flightTime}>
              {moment(destinationCityTime).format("HH:mm")}
            </div>
          </div>
        </div>
        <div className={styles.flightPriceContainer}>
          <div>
            <div className={styles.flightPriceTag}>Precio por persona</div>
            <div className={styles.flightPrice}>${flightPrice} MXN</div>
          </div>
          <Button
            containerClass={styles.flightBookingButton}
            onClick={() => handleBooking(flightId)}
          >
            Reservar
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FlightCard;
