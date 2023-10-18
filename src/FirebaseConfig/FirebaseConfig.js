// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.APIKEY,
  authDomain: import.meta.env.AUTHDOMAIN ,
  projectId: import.meta.env.PROJECTID ,
  storageBucket: import.meta.env.STORAGEBUCKET ,
  messagingSenderId: import.meta.env.MESSAGINGSENDERID ,
  appId: import.meta.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;