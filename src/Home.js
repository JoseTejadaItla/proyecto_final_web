import React from 'react'
import ListarPost from './services/ListarPost';


function Home() {
return(
  <div>
  <div className="container"> 
  <br/>
   <div className="alert alert-dark" role="alert">
   <h4>Para agregar un nuevo post debe iniciar sesion o registrarse</h4></div>  
  <ListarPost />
  <br/>
   </div>
  </div>
  )


}

export default Home;
