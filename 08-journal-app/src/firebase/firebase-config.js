import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCpCWEMj5MaRBWJv2pB-ABjoDfaaofGvaI",
    authDomain: "react-app-cursos-e1287.firebaseapp.com",
    projectId: "react-app-cursos-e1287",
    storageBucket: "react-app-cursos-e1287.appspot.com",
    messagingSenderId: "35185892252",
    appId: "1:35185892252:web:80bced4d65fab29a430659"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }