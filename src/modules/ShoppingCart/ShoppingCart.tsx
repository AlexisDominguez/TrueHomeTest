import { useState } from "react";
import Button from "../../components/Button";
import FlightCard from "../../components/FlightCard";
import Modal from "../../components/Modal";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const showModal = () => setOpenModal(true);
  const hideModal = (): void => setOpenModal(false);

  const handleCancelFlight = (flightId: string): void => {
    console.log(flightId);
  };

  const handleConfirmBooking = (): void => {
    console.log("Reservado");
  };

  return (
    <div>
      <i
        onClick={showModal}
        className={`fas fa-shopping-cart ${styles.shoppingCartIcon}`}
      ></i>
      <Modal show={openModal} handleClose={hideModal}>
        <div className={styles.shoppingCartMainContainer}>
          <FlightCard
            originCityName="Chihuahua"
            destinationCityName="Guadalajara"
            originCityTime={new Date()}
            destinationCityTime={new Date()}
            inShoppingCart={true}
            flightPrice={5000}
            flightId={"9182398123498asdf"}
            handleBooking={handleCancelFlight}
          />
          <FlightCard
            originCityName="Chihuahua"
            destinationCityName="Guadalajara"
            originCityTime={new Date()}
            destinationCityTime={new Date()}
            inShoppingCart={true}
            flightPrice={5000}
            flightId={"9182398123498asdf"}
            handleBooking={handleCancelFlight}
          />
          <FlightCard
            originCityName="Chihuahua"
            destinationCityName="Guadalajara"
            originCityTime={new Date()}
            destinationCityTime={new Date()}
            inShoppingCart={true}
            flightPrice={5000}
            flightId={"9182398123498asdf"}
            handleBooking={handleCancelFlight}
          />
          <FlightCard
            originCityName="Chihuahua"
            destinationCityName="Guadalajara"
            originCityTime={new Date()}
            destinationCityTime={new Date()}
            inShoppingCart={true}
            flightPrice={5000}
            flightId={"9182398123498asdf"}
            handleBooking={handleCancelFlight}
          />
          <FlightCard
            originCityName="Chihuahua"
            destinationCityName="Guadalajara"
            originCityTime={new Date()}
            destinationCityTime={new Date()}
            inShoppingCart={true}
            flightPrice={5000}
            flightId={"9182398123498asdf"}
            handleBooking={handleCancelFlight}
          />
          <FlightCard
            originCityName="Chihuahua"
            destinationCityName="Guadalajara"
            originCityTime={new Date()}
            destinationCityTime={new Date()}
            inShoppingCart={true}
            flightPrice={5000}
            flightId={"9182398123498asdf"}
            handleBooking={handleCancelFlight}
          />
          <FlightCard
            originCityName="Chihuahua"
            destinationCityName="Guadalajara"
            originCityTime={new Date()}
            destinationCityTime={new Date()}
            inShoppingCart={true}
            flightPrice={5000}
            flightId={"9182398123498asdf"}
            handleBooking={handleCancelFlight}
          />
          <FlightCard
            originCityName="Chihuahua"
            destinationCityName="Guadalajara"
            originCityTime={new Date()}
            destinationCityTime={new Date()}
            inShoppingCart={true}
            flightPrice={5000}
            flightId={"9182398123498asdf"}
            handleBooking={handleCancelFlight}
          />
          <FlightCard
            originCityName="Chihuahua"
            destinationCityName="Guadalajara"
            originCityTime={new Date()}
            destinationCityTime={new Date()}
            inShoppingCart={true}
            flightPrice={5000}
            flightId={"9182398123498asdf"}
            handleBooking={handleCancelFlight}
          />
          <FlightCard
            originCityName="Chihuahua"
            destinationCityName="Guadalajara"
            originCityTime={new Date()}
            destinationCityTime={new Date()}
            inShoppingCart={true}
            flightPrice={5000}
            flightId={"9182398123498asdf"}
            handleBooking={handleCancelFlight}
          />
        </div>
        <div className={styles.shoppingCartActionsContainer}>
          <div>Precio Total: $39000.00 MXN</div>
          <Button
            containerClass={styles.shoppingCartConfirmBooking}
            onClick={handleConfirmBooking}
          >
            Confirmar Reservación
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ShoppingCart;
