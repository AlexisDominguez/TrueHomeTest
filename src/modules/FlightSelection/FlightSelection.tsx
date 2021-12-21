import FlightCard from "../../components/FlightCard";
import styles from "./FlightSelection.module.css";

const FlightSelection = () => {
  const handleBooking = (flightId: string): void => {
    console.log(flightId);
  };
  return (
    <section>
      <FlightCard
        originCityName="Chihuahua"
        destinationCityName="Guadalajara"
        originCityTime={new Date()}
        destinationCityTime={new Date()}
        flightPrice={5000}
        flightId={"9182398123498asdf"}
        handleBooking={handleBooking}
      />
    </section>
  );
};

export default FlightSelection;
