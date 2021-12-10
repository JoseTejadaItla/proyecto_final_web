import React, {useState} from 'react';
import Navbar from './Navbar.js';
import Home2 from "./Home2";
import Home from "./Home";
import './App.css';
import Registrar from './auth/Registrar';
import firebaseConfig from './database/firebase2.js';
import {getAuth, onAuthStateChanged} from "firebase/auth";

const auth = getAuth(firebaseConfig);

function App() {

  const [user, setUser] = useState(null);

  function setUserWithFirebase(UsuarioFirebase){
    const userData = {
        uid: UsuarioFirebase.uid,
        email: UsuarioFirebase.email,
        password: UsuarioFirebase.password
      };
      setUser(userData);
      console.log('UserData Final', userData);
  }

  onAuthStateChanged(auth,(UsuarioFirebase) => {
    if(UsuarioFirebase){
      if(!user){
        setUserWithFirebase(UsuarioFirebase);
      }
    }else{
      setUser(null);
    }
  });
  
  return (
    <>
    <div>
  <Navbar />
  <div className="alert alert-dark" role="alert">
   <h4>Regístrate!</h4></div>  
   
    <Registrar />
    </div>
  <br/>
 

    {user ?  <Home2 /> :  <Home />}

    </>
   
  );
}
  
export default App;