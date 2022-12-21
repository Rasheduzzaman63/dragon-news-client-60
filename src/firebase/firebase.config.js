// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfR2586pr8uRBJN-cg7660oEZO7AepWJk",
  authDomain: "dragon-news-pracktice.firebaseapp.com",
  projectId: "dragon-news-pracktice",
  storageBucket: "dragon-news-pracktice.appspot.com",
  messagingSenderId: "322230674322",
  appId: "1:322230674322:web:07b910546e1ce3f892974b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;