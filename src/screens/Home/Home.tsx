import MainLayout from "../../layout/MainLayout";
import ImageSlide from "../../components/ImageSlide";
import FlightSearch from "../../modules/FlightSearch";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import FlightSelection from "../../modules/FlightSelection";
import styles from "./Home.module.css";
import { useDispatch } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { getAvailableFlights } from "../../redux/actions";
import { getFlights } from "../../services/flightSearch";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();

  const getAllFlights = async () => {
    setLoading(true);
    try {
      const flights = await getFlights();
      dispatch(getAvailableFlights(flights));
    } catch (error) {
      throw new Error(error as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllFlights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MainLayout>
      {!loading ? (
        <>
          <ImageSlide>
            <Card>
              <FlightSearch />
            </Card>
          </ImageSlide>
          <FlightSelection />
        </>
      ) : (
        <div className={styles.homeLoaderContainer}>
          <Loader />
          <h4>Cargando...</h4>
        </div>
      )}
    </MainLayout>
  );
};

export default Home;
