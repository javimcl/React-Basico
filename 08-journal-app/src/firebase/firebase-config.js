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

  const firebaseConfigTesting = {
    apiKey: "AIzaSyDvOVugw7KL67ix5WjpcuS6ZPj5uLnAmLg",
    authDomain: "sistema-f6ba5.firebaseapp.com",
    projectId: "sistema-f6ba5",
    storageBucket: "sistema-f6ba5.appspot.com",
    messagingSenderId: "591018828858",
    appId: "1:591018828858:web:a303eb9b18ff6e5c3b8103",
    measurementId: "G-R4DQCL8T59"
  };

  if (process.env.NODE_ENV === 'test') {
      
  } else {

  }

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }