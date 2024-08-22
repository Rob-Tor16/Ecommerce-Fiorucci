import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDQqQRYWvkVTNkQxsEYsFIcBxMdRblhdC0",
  authDomain: "fiorucci-fc36d.firebaseapp.com",
  projectId: "fiorucci-fc36d",
  storageBucket: "fiorucci-fc36d.appspot.com",
  messagingSenderId: "507162730690",
  appId: "1:507162730690:web:e1d56c48cac144ae985b5b",
  measurementId: "G-08NE3YCD8N"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(app);

export { firebaseApp, db, auth };