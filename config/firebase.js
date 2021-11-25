import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoe2_uc-ZdeKdLPnvyBMdv6-pmnD96Tiw",
  authDomain: "auth-sinau-cp10.firebaseapp.com",
  projectId: "auth-sinau-cp10",
  databaseURL:"https://auth-sinau-cp10-default-rtdb.firebaseio.com/",
  storageBucket: "auth-sinau-cp10.appspot.com",
  messagingSenderId: "264099407276",
  appId: "1:264099407276:web:c948783fa8cb958a698609",
  measurementId: "G-FLW7CPTEQV"
  
};
// envnya ga mau jalan

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export default firebase;
