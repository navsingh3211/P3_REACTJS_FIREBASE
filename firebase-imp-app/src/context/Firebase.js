import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import { getDatabase ,ref, set} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBbYTzJO0AEEwfqFa2GWUQ4k5Q6Z5qDvb4",
  authDomain: "fir-d-app-8cade.firebaseapp.com",
  projectId: "fir-d-app-8cade",
  storageBucket: "fir-d-app-8cade.appspot.com",
  messagingSenderId: "329912895325",
  appId: "1:329912895325:web:d1d6e0fcd3c049c6d18ab4",
  databaseURL: "https://fir-d-app-8cade-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const database = getDatabase(firebaseApp);

const firebaseContext = createContext(null);
export const useFirebase = () => useContext(firebaseContext);

export const Firebaseprovider = (props) => {
  const signupUserWithEmailAndPassword = (email,password)=>{
    return createUserWithEmailAndPassword(firebaseAuth,email,password)
  }
  const putData = (key,data)=>set(ref(database,key),data);

  return (
    <firebaseContext.Provider value={{signupUserWithEmailAndPassword,putData}}>
      {props.children}
    </firebaseContext.Provider>
  )
}