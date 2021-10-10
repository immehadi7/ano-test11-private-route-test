import {
   getAuth, createUserWithEmailAndPassword , sendEmailVerification , signInWithEmailAndPassword ,sendPasswordResetEmail } from "firebase/auth";
import { useState } from 'react';
import './App.css';
import firebaseAuthentication from './firebase/firebase.init';

firebaseAuthentication();

  




function App() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [error , setError] = useState()
  const [user , setUser] = useState({})
  const [toggle , setToggole] = useState(false);
  const auth = getAuth();



  
  let handlePassword = (e) =>{
    setPassword(e.target.value);

    /* 6 character kom hole error */
    if( password.length < 6  ){
      setError('please give 6 character')
    }

    /* regex use kore password show kora  */
   /*  if( !/(?=.*[A-Z].*[A-Z])/.test('password')){
      setError("give 2 Uppercase character")
    }
    if(/(?=.*[!@#$&*]) /.test('password')){
      setError('one special character please')
    } */
  }
    
  let handleEmail = (e) =>{
    setEmail(e.target.value);

    
  }
  let handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email , password) 
    createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
    const {email , displayName , photoURL} = result.user;
      const userInfo ={
        name: displayName ,
        email: email ,
        photo: photoURL 
      };
      setUser(userInfo);
      verifyEmail(email)

  }).catch((error) => {
    setError(error.message);
  });
}

/* ei handle login ta alada login component e diye dilei hobe ,,,,, ar tokhon onsubmit e {handleLogin bosailei hoye jabe In sha Allah} */
let handelLogin = (e)  =>{
  e.preventDefault();
  signInWithEmailAndPassword(auth , email, password)
  .then((result) => {
    // Signed in 
    const {email , displayName , photoURL} = result.user;
      const userInfo ={
        name: displayName ,
        email: email ,
        photo: photoURL 
      };
      setUser(userInfo);
      setError('');

  }).catch((error) => {
    setError(error.message);
  });
 
}

/* email verification part */
let verifyEmail =(email) =>{
  sendEmailVerification(auth , email)
  .then(() => {
    // Email verification sent!
    // ...
  });
}

/*  reset password with button handler  */
let resetPassword =(email) =>{
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
}


/* if(toggle){
  handleSubmit(email, password)
}
else{
  handelLogin(email, password)
}
 */
    /* {
      toggle ? 
    } */

  return (
    <div className="container pt-5 mx-5">
      <h1> {user.email} </h1>
        <form onSubmit={handleSubmit} >
        <div  className="mb-3"> 
        {/* ternary operator and toggle part */}
          <h1 className="text-primary" > {
    toggle? 'Please Log in' : 'Please Register'
  }  </h1>
           </div>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"  >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={handleEmail} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>

    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" placeholder="Input Password" onBlur={handlePassword} />
    </div>

    <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={()=>setToggole(true)} />
    <label className="form-check-label" htmlFor="exampleCheck1"> { toggle ? 'Log in' : "Already registration done" 
    }</label>
    </div>
    <div className="mb-3"> 
    <h1> {error} </h1>
    </div>
       {/* ternary operator and toggle part */}
  <button type="submit" className="btn btn-primary"> {
    toggle? 'Log in' : 'Register'
  } </button>
  <button onClick={resetPassword} > Reset PassWord </button>
</form>

     
    </div>
  );
}

export default App;
