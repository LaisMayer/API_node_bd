// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjEW9VXIl48QqCNKbFA4IV77l8ppIrNoY",
  authDomain: "api-node-bd.firebaseapp.com",
  projectId: "api-node-bd",
  storageBucket: "api-node-bd.firebasestorage.app",
  messagingSenderId: "416679927482",
  appId: "1:416679927482:web:99c89ae7435e938d1eec83",
  measurementId: "G-031TJRTJ0H"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
// const analytics = getAnalytics(app);