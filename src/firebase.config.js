// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUYHbuleA3Z4JQZqkcv-n5eBcqRHvUvEc",
  authDomain: "react-dragon-news-auth-95a97.firebaseapp.com",
  projectId: "react-dragon-news-auth-95a97",
  storageBucket: "react-dragon-news-auth-95a97.appspot.com",
  messagingSenderId: "222847521902",
  appId: "1:222847521902:web:ee4f8c34f567f267ed027f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;