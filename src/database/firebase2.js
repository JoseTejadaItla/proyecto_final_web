import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDGtlGcn79E3KtmGVsBDsEY5CTu5LbgFyg",
  authDomain: "muro-interactivo-f58cf.firebaseapp.com",
  projectId: "muro-interactivo-f58cf",
  storageBucket: "muro-interactivo-f58cf.appspot.com",
  messagingSenderId: "59238405852",
  appId: "1:59238405852:web:c1f4a909c4c26600bc0619",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;