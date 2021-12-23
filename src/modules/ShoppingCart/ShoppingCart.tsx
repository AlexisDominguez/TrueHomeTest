import { useState } from "react";
import Button from "../../components/Button";
import FlightCard from "../../components/FlightCard";
import Modal from "../../components/Modal";
import styles from "./ShoppingCart.module.css";
import { useDispatch, useSelector } from "../../redux/hooks";
import ErrorCard from "../../components/ErrorCard";
import { bookFlights } from "../../redux/actions";
import BookingForm from "../BookingForm";
import SuccessCard from "../../components/SuccessCard";

const ShoppingCart = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [confirmReservation, setConfirmReservation] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const bookedFlights = useSelector((state) => state.bookedFlights);
  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  const showModal = () => setOpenModal(true);
  const hideModal = (): void => {
    setOpenModal(false);
    setConfirmReservation(false);
    setSuccess(false);
  };

  const handleCancelFlight = (flightId: string): void => {
    dispatch(
      bookFlights(
        bookedFlights.filter(
          (bookedFlight) =>
            bookedFlight.availableFlights[0].flightId !== flightId
        )
      )
    );
  };

  const handleConfirmBooking = (): void => {
    setConfirmReservation(true);
  };

  let totalPrice = 0;

  bookedFlights.forEach((bookedFlight) => {
    const totalFlightPrice =
      Number(bookedFlight.availableFlights[0].costByPassenger) *
      bookedFlight.passengers;
    totalPrice += totalFlightPrice;
  });

  return (
    <div>
      <i
        onClick={showModal}
        className={`fas fa-shopping-cart ${styles.shoppingCartIcon}`}
      ></i>
      <Modal show={openModal} handleClose={hideModal}>
        {!confirmReservation ? (
          <div className={styles.shoppingCartMainContainer}>
            {bookedFlights.length ? (
              bookedFlights.map((bookedFlight) => {
                const flight = bookedFlight.availableFlights[0];
                return (
                  <FlightCard
                    key={flight.flightId}
                    originCityName={bookedFlight.originCity}
                    destinationCityName={flight.city}
                    originCityTime={flight.departureDate as Date}
                    destinationCityTime={flight.arrivalTime as Date}
                    flightPrice={
                      Number(flight.costByPassenger) * bookedFlight.passengers
                    }
                    flightId={flight.flightId}
                    handleBooking={handleCancelFlight}
                    inShoppingCart
                  />
                );
              })
            ) : (
              <ErrorCard
                title="¡No se encontraron reservaciones!"
                subTitle="Aún no has realizado ninguna reservación."
              />
            )}
          </div>
        ) : !success ? (
          <BookingForm success={success} setSuccess={setSuccess} />
        ) : (
          <SuccessCard
            fullName={`${customer.name} ${customer.lastName} ${customer.secondLastName}`}
            email={customer.email}
            address={customer.address}
          />
        )}
        {!!totalPrice && !confirmReservation && (
          <div className={styles.shoppingCartActionsContainer}>
            <div>Precio Total: ${totalPrice} MXN</div>
            <Button
              containerClass={styles.shoppingCartConfirmBooking}
              onClick={handleConfirmBooking}
            >
              Confirmar Reservación
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ShoppingCart;
