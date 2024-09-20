import {initializeApp} from "firebase/app"
import{getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDQZsWwtSXhGfemVuED4fBxfsaI8d9JRZg",
    authDomain: "netflix-6877a.firebaseapp.com",
    projectId: "netflix-6877a",
    storageBucket: "netflix-6877a.appspot.com",
    messagingSenderId: "56920589887",
    appId: "1:56920589887:web:a6dede70b7a7d4df5ada8a"
  };

  const app=initializeApp(firebaseConfig);
  const auth =getAuth();
  const db=getFirestore();
  export {app,auth,db};