{/* <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
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
  const analytics = getAnalytics(app);
</script> */}



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);