// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfPlSsFGRd53YRWP4vn5OTQOibYoPCkQI",
  authDomain: "hotel-booking-system-4b28a.firebaseapp.com",
  projectId: "hotel-booking-system-4b28a",
  storageBucket: "hotel-booking-system-4b28a.appspot.com",
  messagingSenderId: "598209766556",
  appId: "1:598209766556:web:50b8023105f34c09427959"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app;