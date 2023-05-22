import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCqw7scpkcgq4lKQOU62RzG7_W4iPKFFQA",
    authDomain: "ecommerce-a741a.firebaseapp.com",
    projectId: "ecommerce-a741a",
    storageBucket: "ecommerce-a741a.appspot.com",
    messagingSenderId: "343889838182",
    appId: "1:343889838182:web:9dce2e6ec11f2befb56da7",
    measurementId: "G-6KNGP08X7X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)