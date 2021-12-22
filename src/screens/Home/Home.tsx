import MainLayout from "../../layout/MainLayout";
import ImageSlide from "../../components/ImageSlide";
import FlightSearch from "../../modules/FlightSearch";
import Card from "../../components/Card";
import FlightSelection from "../../modules/FlightSelection";
import BookingForm from "../../modules/BookingForm";
import SuccessCard from "../../components/SuccessCard";
import { useDispatch, useSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { getAvailableFlights } from "../../redux/actions";

const Home = () => {
  const flights = useSelector((state) => state.availableFlights);

  console.log(flights);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAvailableFlights());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MainLayout>
      <ImageSlide>
        <Card>
          <FlightSearch />
        </Card>
      </ImageSlide>
      <SuccessCard
        fullName="Alexis Ariel Dominguez Sanchez"
        address="Calle 1 Oriente 100B, Delicias Chihuahua"
        email="alexisdominguezsanchez3@gmail.com"
      />
      <FlightSelection />
      <BookingForm />
    </MainLayout>
  );
};

export default Home;
