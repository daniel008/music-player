import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpx8_TgiJOxpeC72N0EIKl00b2wSI6mbw",
  authDomain: "music-player-c45bf.firebaseapp.com",
  projectId: "music-player-c45bf",
  storageBucket: "music-player-c45bf.appspot.com",
  messagingSenderId: "414591079867",
  appId: "1:414591079867:web:fa696416c4d7ec91b9e09e",
};

export default firebase.initializeApp(firebaseConfig);
