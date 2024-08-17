// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkqGy5XaLw2qMcpSnIXBc2pMIqWFZvt1c",
    authDomain: "netflixgpt-v1.firebaseapp.com",
    projectId: "netflixgpt-v1",
    storageBucket: "netflixgpt-v1.appspot.com",
    messagingSenderId: "87330537295",
    appId: "1:87330537295:web:231082d701bc8496948f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();