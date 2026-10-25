import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCPpJn9eAYrmoZNf4jNeTDyBhy_0BlgSxg",
    authDomain: "estudos-pmpe.firebaseapp.com",
    projectId: "estudos-pmpe",
    messagingSenderId: "727465979835",
    appId: "1:727465979835:web:63da1c5611d9edefb69e9e",
    measurementId: "G-M94S5C1BVW"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
