import React, { useEffect, useState } from 'react';

import firebaseInitAuth from './FireBase.init';
import { getAuth ,signInWithPopup, GoogleAuthProvider ,onAuthStateChanged ,signOut  } from "firebase/auth";

firebaseInitAuth();


const googleProvider = new GoogleAuthProvider() ;


const useFirebase = () =>{
    const [user , setUser] = useState({})
    const [error , setError] =useState('')
    const auth = getAuth()

   const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
                console.log(user);
                setUser(user);
          }).catch((error)=>{
              setError(error.message)
          })
    }
    let logout = () =>{
        signOut(auth) .then(() => {
            setUser('')
          })
    }
    useEffect(()=>{
        onAuthStateChanged (auth, user=>{
            if(user){
                console.log("new user", user);
                    setUser(user)
            }
        })
    } ,[])

    return{
        user ,
        error, 
        logout,
        signInUsingGoogle 
    }



}

export default useFirebase;