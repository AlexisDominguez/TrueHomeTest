import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const getFlights = async () => {
  let flights: any = { cities: [] };
  const querySnapshot = await getDocs(collection(db, "cities"));
  querySnapshot.forEach((doc) => {
    flights.cities.push({ [doc.id]: doc.data() });
  });

  return flights;
};
