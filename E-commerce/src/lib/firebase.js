// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBej3LRZ3WacMweYaXAhFEH-BSD_nwHA-U",
    authDomain: "ecommercestore-2faec.firebaseapp.com",
    projectId: "ecommercestore-2faec",
    storageBucket: "ecommercestore-2faec.appspot.com",
    messagingSenderId: "672806311570",
    appId: "1:672806311570:web:84d6d3ace4c8fc2e9f784b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;