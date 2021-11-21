import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFireStore} from 'firebase/firestore'

const firebaseConfig = initializeApp({
  apiKey: process.env.frb_key,
  authDomain: process.env.frb_authDomain,
  projectId: process.env.frb_projectId,
  storageBucket: process.env.frb_storageBucke,
  messagingSenderId: process.env.frb_messaginSenderId,
  appId: process.env.frb_appId,
  measurementId: process.env.frb_measurementId
});

// firebase.initializeApp(firebaseConfig);

const auth = getAuth(firebaseConfig)
const db = getFireStore

// detect auth state
onAuthStateChanged(auth, user =>{
  if(user!=null){
    console.log('login')
  } else {
    console.log('No user')
  }
})

export default firebase;
