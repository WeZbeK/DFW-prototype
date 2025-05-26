import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDr48DetyTf9IDJw9N5RwKLr1LX4HG8vJw",
  authDomain: "dfw-football.firebaseapp.com",
  projectId: "dfw-football",
  storageBucket: "dfw-football.appspot.com",
  messagingSenderId: "518168058935",
  appId: "1:518168058935:web:f48e2f8350c1d7c3d533b2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);