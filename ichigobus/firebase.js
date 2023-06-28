import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider }from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlMKYlMIxrs3DGWs1Qko42NRVf9FmGExs",
  authDomain: "e-bus-8cdb9.firebaseapp.com",
  projectId: "e-bus-8cdb9",
  storageBucket: "e-bus-8cdb9.appspot.com",
  messagingSenderId: "329543369570",
  appId: "1:329543369570:web:2087a91305f4ee53d4e23b",
  measurementId: "G-YGWKSD7L6D"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);