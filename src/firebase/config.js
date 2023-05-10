import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu0R2mu5a3kMLt_Qz7alv-udrbsVpdS5Q",
  authDomain: "firegram-bde44.firebaseapp.com",
  projectId: "firegram-bde44",
  storageBucket: "firegram-bde44.appspot.com",
  messagingSenderId: "287888832115",
  appId: "1:287888832115:web:c689f42205eb68ed0c5c06"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// var firebaseConfig = {
//   apiKey: "AIzaSyDLmnoBvnjOQ-AaJgDw1DnVBiTETbcp8LI",
//   authDomain: "the-net-ninja-sandbox.firebaseapp.com",
//   databaseURL: "https://the-net-ninja-sandbox.firebaseio.com",
//   projectId: "the-net-ninja-sandbox",
//   storageBucket: "the-net-ninja-sandbox.appspot.com",
//   messagingSenderId: "485942827092",
//   appId: "1:485942827092:web:1811d9d8f1f5fabcd5b5c1"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };