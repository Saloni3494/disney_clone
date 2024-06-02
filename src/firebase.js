import firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { firestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyCawRWhqDrnU1xaG2Kab4WGOoylkuglQZI",
    authDomain: "disneyplus-clone-d2345.firebaseapp.com",
    projectId: "disneyplus-clone-d2345",
    storageBucket: "disneyplus-clone-d2345.appspot.com",
    messagingSenderId: "623864830825",
    appId: "1:623864830825:web:e29ffd033e193d7206fbf8",
    measurementId: "G-E0SN7ZN6QH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth(firebaseApp);
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
