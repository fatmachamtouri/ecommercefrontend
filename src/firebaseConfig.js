// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp ({
  apiKey: "AIzaSyA47za4CaETtXYZkI146ZTVDtClt1aqDTY",
  authDomain: "ecommerce-react-85a4c.firebaseapp.com",
  projectId: "ecommerce-react-85a4c",
  storageBucket: "ecommerce-react-85a4c.appspot.com",
  messagingSenderId: "96205916811",
  appId: "1:96205916811:web:71772ee4a07e7cac58628e",
  measurementId: "G-RNVRR031JK"
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;