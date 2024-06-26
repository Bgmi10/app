import { initializeApp } from "firebase/app";
import 'firebase/messaging'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6X74enkoi0-XfVmWDLT0EdE9_fnNXnZs",
  authDomain: "km-calc-ccd1a.firebaseapp.com",
  projectId: "km-calc-ccd1a",
  storageBucket: "km-calc-ccd1a.appspot.com",
  messagingSenderId: "510548260207",
  appId: "1:510548260207:web:dd58a5dd12fb2302ac649a",
  measurementId: "G-128ZWZL8TH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = firebase.messaging();