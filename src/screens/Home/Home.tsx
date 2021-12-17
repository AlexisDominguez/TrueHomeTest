import MainLayout from "../../layout/MainLayout";
import ImageSlide from "../../components/ImageSlide";
import Booking from "../../modules/Booking";
import Card from "../../components/Card";

const Home = () => {
  return (
    <MainLayout>
      <ImageSlide>
        <Card>
          <Booking />
        </Card>
      </ImageSlide>
    </MainLayout>
  );
};

export default Home;
