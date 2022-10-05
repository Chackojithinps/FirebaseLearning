import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuKDR0Mt2be6btrm8KmvwdtQpl4FPzu0s",
    authDomain: "fir-51976.firebaseapp.com",
    projectId: "fir-51976",
    storageBucket: "fir-51976.appspot.com",
    messagingSenderId: "402535792302",
    appId: "1:402535792302:web:2a069e8671c97671a2f73f",
    measurementId: "G-S3LL9JY747"
  };

export const Firebase = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;