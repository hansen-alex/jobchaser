import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyCSTu8qbto9qG7GkgLEsaJ1eDBHdzAHezs",
    authDomain: "jobchaser-fjs23.firebaseapp.com",
    projectId: "jobchaser-fjs23",
    storageBucket: "jobchaser-fjs23.appspot.com",
    messagingSenderId: "323916067779",
    appId: "1:323916067779:web:acab05590f23e134974376"
});

export const auth = getAuth(app);