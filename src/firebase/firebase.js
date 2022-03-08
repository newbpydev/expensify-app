import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  onChildAdded
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAkt-5gj7WnKgIIT5eOz33-sanl2htC-CY",
  authDomain: "expensify-cd72e.firebaseapp.com",
  databaseURL: "https://expensify-cd72e-default-rtdb.firebaseio.com",
  projectId: "expensify-cd72e",
  storageBucket: "expensify-cd72e.appspot.com",
  messagingSenderId: "389455953180",
  appId: "1:389455953180:web:9cb6730287fc599bed0ed9",
  measurementId: "G-7KKYZLEQ17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase();

export { database as default };