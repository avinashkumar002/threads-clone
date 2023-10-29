import { createUserWithEmailAndPassword,getAuth } from "firebase/auth";
import { app } from "../firebaseConfig";
  
  let auth = getAuth();
  
  export const signUp = (email, password) => {
    try {
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };
  
  
  