
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDP4jnap8pC5IQTw3axyu0aBE_2w4MShZQ",
    authDomain: "playflicks-eb99a.firebaseapp.com",
    projectId: "playflicks-eb99a",
    storageBucket: "playflicks-eb99a.appspot.com",
    messagingSenderId: "994543420293",
    appId: "1:994543420293:web:c67733f344fd675a7a3aec",
    measurementId: "G-PH9KR64W2M"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta 'auth' y 'firestore'
export const auth = getAuth(app);
export const firestore = getFirestore(app);
