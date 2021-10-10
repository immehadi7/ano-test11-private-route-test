import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";



let firebaseAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default firebaseAuthentication;