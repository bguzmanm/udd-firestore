import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
// apiKey: "AIzaSyDL0OLwzXq0keuQ3l_81KmGCtbIqnA41SA",
// authDomain: "firestore-exa-6005d.firebaseapp.com",
// projectId: "firestore-exa-6005d",
// storageBucket: "firestore-exa-6005d.appspot.com",
// messagingSenderId: "1059806024602",
// appId: "1:1059806024602:web:07dc3047488a9f70086023"
// };
// 
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

initializeApp({
  apiKey: "AIzaSyDL0OLwzXq0keuQ3l_81KmGCtbIqnA41SA",
  authDomain: "firestore-exa-6005d.firebaseapp.com",
  projectId: "firestore-exa-6005d",
  storageBucket: "firestore-exa-6005d.appspot.com",
  messagingSenderId: "1059806024602",
  appId: "1:1059806024602:web:07dc3047488a9f70086023"
});

export const db = getFirestore();