// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import firebaseConfig  from './fireBase.config'

// Initialize Firebase
//  for next time use we are using a function here
    let initializeAuthenticaiton = () => {
        initializeApp(firebaseConfig);
    }


export default initializeAuthenticaiton ;