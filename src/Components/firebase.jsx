import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0j4GY_rDF0ULEGzn6wIuVUT3KVoi2SdQ",
  authDomain: "twitter-clone-edb20.firebaseapp.com",
  projectId: "twitter-clone-edb20",
  storageBucket: "twitter-clone-edb20.appspot.com",
  messagingSenderId: "610702888761",
  appId: "1:610702888761:web:347dd3d70d55aba5baa2e8",
  measurementId: "G-E7JZ955HE0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
