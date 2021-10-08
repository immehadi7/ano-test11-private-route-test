import {  getAuth, signInWithPopup, GoogleAuthProvider , GithubAuthProvider ,  FacebookAuthProvider ,signOut, createUserWithEmailAndPassword , signInWithEmailAndPassword , sendEmailVerification} from "firebase/auth";
import { useState } from "react";
import './App.css';
import initializeAuthenticaiton from './FireBase/firebase.initialize';

initializeAuthenticaiton();

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const fbProvider =  new FacebookAuthProvider();


function App() {
  const [user , setUser] = useState({})
  const [error, setError] = useState('')
  const [userEmail , setUserEmail] = useState('')
  const [userPassword , setUserPassword] = useState('')
  const [isLogin , setIsLogin] = useState(false)
  const auth = getAuth();

  let handelGoogleSignIn =() =>{
   
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const {displayName , email , photoURL} = result.user;
        console.log(result.user)
          const loggedInUser = {
            name: displayName ,
            email : email ,
            photo : photoURL ,
          };
          setUser(loggedInUser);
  }).catch(error =>{
    console.log(error.message)
  })

  }

    let handleGithubSignIn = () =>{
      signInWithPopup(auth, gitHubProvider)
  .then((result) => {
        const {displayName, email , photoURL} = result.user;
       console.log(result.user)
        const loggedInUser = {
          name: displayName ,
          email: email,
          photo : photoURL 
        };
        setUser(loggedInUser)
  })
    }
    let handleFbsignIn =() =>{
      signInWithPopup(auth, fbProvider)
      .then(result => {
        const {displayName , email , photoURL} = result.user;
          console.log(result.user)
            const loggedInUser = {
              name: displayName ,
              email : email ,
              photo : photoURL ,
            };
            setUser(loggedInUser);
    })
    }




 let handleSignOut = () =>{
  signOut(auth).then(() => {
    // Sign-out successful.
  })
 }
    /* ----------google signin part end  ---------------------------------------------------------------------------------------------------- */
















   

 let handleEmail = e => {
   setUserEmail(e.target.value);
 }
 let handlePass = e => {
   setUserPassword(e.target.value);
 }

   let handleRegistration = () =>{
    console.log(userEmail , userPassword);
    if(userPassword.length< 6){
      setError("Password must be 6 character");
      
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test('userPassword')){
      setError('Please Add one upperCase latter for passoword');
    
    }
    if( !/(?=.*[!@#$&*])/.test('userPassword')){
      setError('Please Add one special character');
        
    }
      if(isLogin){
        processLogin(userEmail, userPassword)
      }
      else{
        registerNewUser(userEmail, userPassword)
      }
    
  }
  let processLogin = ( userEmail , userPassword) =>{
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then(result=>{
        const user = result.user ;
          console.log(user)
          setError('')
      }).catch(error=>{
        setError(error.message)
      })

  }
  
      let registerNewUser = (userEmail, userPassword) =>{
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((result) => {
          // Signed in 
          const user = result.user;
            console.log(user)
              setError('')
              verifyEmail()
        }).catch((error) => {
          setError(error.message);
        }) 
          /*   e.preventDefault();  */
      }
      let verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
          .then(result=>{
            console.log(result)
          })
        
      }
      
let handelToggole = e =>{
    setIsLogin(e.target.checked);
}
  return (


    <div className="App mx-5">
    <form className="row g-3" onSubmit={handleRegistration}>
      <h1 className='text-primary'> Please {isLogin ? 'Login' : 'Regeister Here'}  </h1>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" onBlur={handleEmail} required />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" onBlur={handlePass} required />
  </div>
  <div>
    <label htmlFor="toggle">Already Registered?</label>
    <input type="checkbox" name="toggle" id="" onClick={handelToggole} />
  </div>
    <div className="col-12"> {error} </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary"> {isLogin ? 'LogIn' : 'Registration'} </button>
  </div>
</form>
    

































      <br />
      <br />
      <br />
      <br />
      <div>-----------------------------</div>
      {
        !user.name ?
        <div>
        <button onClick={handelGoogleSignIn}>Google sign in</button>
        <button onClick={handleGithubSignIn} > gitHub SignIn </button>
        <button onClick={handleFbsignIn}>Fb login</button>
        </div>:
        <div>
        <button onClick={handleSignOut} >SignOut</button>
      </div>
      }
     
      
      <br />
      <br />
      {
        user.name && <div>
          <h1>Welcome Sir {user.name}</h1>
          <h2>your email : {user.email} </h2>
          <img src={user.photo}/*  width='100' height='50'  */alt="" />
        </div>
      }
    </div>
  );
}

export default App;

