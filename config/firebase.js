import firebase from "firebase";

const firebaseConfig = ({
  apiKey: process.env.frb_key,
  authDomain: process.env.frb_authDomain,
  projectId: process.env.frb_projectId,
  storageBucket: process.env.frb_storageBucke,
  messagingSenderId: process.env.frb_messaginSenderId,
  appId: process.env.frb_appId,
  measurementId: process.env.frb_measurementId
});

firebase.initializeApp(firebaseConfig);




export default firebase;
