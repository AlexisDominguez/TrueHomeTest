import MainLayout from "../../layout/MainLayout";
import ImageSlide from "../../components/ImageSlide";
import FlightSearch from "../../modules/FlightSearch";
import Card from "../../components/Card";
import FlightSelection from "../../modules/FlightSelection";
import BookingForm from "../../modules/BookingForm";

const Home = () => {
  return (
    <MainLayout>
      <ImageSlide>
        <Card>
          <FlightSearch />
        </Card>
      </ImageSlide>
      <FlightSelection />
      <BookingForm />
    </MainLayout>
  );
};

export default Home;
