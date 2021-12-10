import React from 'react'
import ListarPost from './services/ListarPost';
import AgregarPost from './services/AgregarPost'

import firebaseConfig from './database/firebase2.js'
import {getAuth, signOut} from "firebase/auth";
const auth = getAuth(firebaseConfig);


function Home() {
return(
  <div>
  <button className='btn btn-danger' onClick={()=> signOut(auth)}> Cerrar sesion</button>
  <div className="container"> 
   <br/>
   <div>
   <h1>Redactar Post</h1></div>  
   <AgregarPost />
  <br/>
  <ListarPost />
  <br/>
   </div>
  </div>
  )


}

export default Home;
