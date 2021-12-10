import React, {useState} from 'react';
import firebaseConfig from '../database/firebase2.js'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore, doc, setDoc} from 'firebase/firestore'


const auth = getAuth(firebaseConfig);

function Registro () {


    const firestore = getFirestore(firebaseConfig);
    const [isRegistrando, setIsRegistrando] = useState(false);

   async function registrarUsuario(email,password,usuario,nombre,apellido){
    const infoUsuario = await createUserWithEmailAndPassword(
        auth, 
        email,
        password).then((UsuarioFirebase) =>{
        return UsuarioFirebase;
    });

    console.log(infoUsuario.user.id);
    const docuRef = doc(firestore, `usuario/${infoUsuario.user.uid}`);
    setDoc(docuRef, {correo: email, password:password, nombre:nombre, apellido:apellido, usuario:usuario});
   }

    function submitHandler(e){
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const usuario = e.target.elements.usuario.value;
        const nombre = e.target.elements.nombre.value;
        const apellido = e.target.elements.apellido.value;
         
         if(isRegistrando){
           registrarUsuario(email,password,usuario,nombre,apellido);
         }else{
        signInWithEmailAndPassword(auth, email, password);
         }

    }

        return (
       <div className="container">
       <form onSubmit={submitHandler}>
       <div className="form-group input-group">
       <label>Correo:
       <input type="email" id="email" className="form-control"/>
        </label>
     </div>
      <div className="form-group input-group">
      <label>Password:
       <input type="password" id="password" className="form-control"/>
        </label>
      <label>Usuario:
       <input type="text" id="usuario" className="form-control"/>
        </label>
     </div>
    
       <div className="form-group input-group">
       <label>Nombre:
       <input type="text" id="nombre" className="form-control"/>
        </label>
       <label>Apellido:
       <input type="text" id="apellido" className="form-control"/>
        </label>
       
        </div>
    <input className="btn btn-primary" 
          type="submit"
          value={isRegistrando ? "Registrar" : "Iniciar sesión"}
        />
       </form>
 <button className="btn btn-secondary" id="register-btn" onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
      </button>

  
       </div>
        )
    }

export default Registro;