import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCGsFHMXLEk6QCmcu5jOD1brt3J8Lbm56Q",
    authDomain: "hello-aae52.firebaseapp.com",
    projectId: "hello-aae52",
    storageBucket: "hello-aae52.appspot.com",
    messagingSenderId: "167308039466",
    appId: "1:167308039466:web:b60282d74e11d5589dfa53"
};


const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);