import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_NOT_SECRET_1,
  authDomain: process.env.REACT_APP_NOT_SECRET_2,
  projectId: process.env.REACT_APP_NOT_SECRET_3,
  storageBucket: process.env.REACT_APP_NOT_SECRET_4,
  messagingSenderId: process.env.REACT_APP_NOT_SECRET_5,
  appId: process.env.REACT_APP_NOT_SECRET_6,
};

initializeApp(firebaseConfig);

export const db = getFirestore();
