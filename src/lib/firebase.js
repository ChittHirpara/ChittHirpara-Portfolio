import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBLCiQfGqAajcsnXiBCWK4VMXcE4tMQazs",
    authDomain: "portfolio-8aef8.firebaseapp.com",
    projectId: "portfolio-8aef8",
    storageBucket: "portfolio-8aef8.firebasestorage.app",
    messagingSenderId: "449539687531",
    appId: "1:449539687531:web:edfa2ffdb595069bdd5d2e",
    measurementId: "G-LDP7E4QEDJ"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
