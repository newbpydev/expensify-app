import { initializeApp,  } from "firebase/app";
import { getAnalytics,  } from "firebase/analytics";
import {
  getDatabase,
  ref,
  set,
  update,
  remove,
  onValue,
  child,
  get,
  off,
  push,
  onChildRemoved,
  onChildChanged,
  onChildAdded,
} from "firebase/database";
import {getAuth, signInWithCredential, GoogleAuthProvider} from "firebase/auth"

// const firebaseConfig = {
//   apiKey: "AIzaSyAkt-5gj7WnKgIIT5eOz33-sanl2htC-CY",
//   authDomain: "expensify-cd72e.firebaseapp.com",
//   databaseURL: "https://expensify-cd72e-default-rtdb.firebaseio.com",
//   projectId: "expensify-cd72e",
//   storageBucket: "expensify-cd72e.appspot.com",
//   messagingSenderId: "389455953180",
//   appId: "1:389455953180:web:9cb6730287fc599bed0ed9",
//   measurementId: "G-7KKYZLEQ17",
// };
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  // measurementId: "G-7KKYZLEQ17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase();
const googleAuthProvider = new GoogleAuthProvider()

export {googleAuthProvider, database as default };
