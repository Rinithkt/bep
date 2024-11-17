// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSYUrOo6cb_3kJGxN18yCnkc1XL58ImgU",
  authDomain: "e-book-platform-f00d1.firebaseapp.com",
  projectId: "e-book-platform-f00d1",
  storageBucket: "e-book-platform-f00d1.firebasestorage.app",
  messagingSenderId: "255500095440",
  appId: "1:255500095440:web:8fef0ebfc3dcbea6ffb3d5",
  measurementId: "G-NX5B0P4R23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
