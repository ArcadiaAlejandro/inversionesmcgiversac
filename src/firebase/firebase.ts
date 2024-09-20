// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDm3ElshHCL6mZNZQW-ysOUn-RQhgO6ec0",
    authDomain: "mcguiver-b7682.firebaseapp.com",
    projectId: "mcguiver-b7682",
    storageBucket: "mcguiver-b7682.appspot.com",
    messagingSenderId: "490013828987",
    appId: "1:490013828987:web:02417b6c4f7ef582cd3fde",
    measurementId: "G-L755EC9XQD"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage ;
