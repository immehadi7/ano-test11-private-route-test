import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config"

let firebaseInitAuth = () =>{
    initializeApp(firebaseConfig);
}

export default firebaseInitAuth;