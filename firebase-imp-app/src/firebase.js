
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBbYTzJO0AEEwfqFa2GWUQ4k5Q6Z5qDvb4",
  authDomain: "fir-d-app-8cade.firebaseapp.com",
  projectId: "fir-d-app-8cade",
  storageBucket: "fir-d-app-8cade.appspot.com",
  messagingSenderId: "329912895325",
  appId: "1:329912895325:web:d1d6e0fcd3c049c6d18ab4",
  databaseURL: "https://fir-d-app-8cade-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);