import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.local.frb_key,
  authDomain: process.env.local.frb_authDomain,
  projectId: process.env.local.frb_projectId,
  storageBucket: process.env.local.frb_storageBucke,
  messagingSenderId: process.env.local.frb_messaginSenderId,
  appId: process.env.local.frb_appId,
  measurementId: process.env.local.frb_measurementId
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase