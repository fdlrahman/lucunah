// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDWT7Fz0RtJfmc4dUwznkXcaoIuPvGddrY",
    authDomain: "blogs-4b036.firebaseapp.com",
    projectId: "blogs-4b036",
    storageBucket: "blogs-4b036.appspot.com",
    messagingSenderId: "219870783521",
    appId: "1:219870783521:web:31a23691c00423dd905b60",
    measurementId: "G-6BTZJ7G5L1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
