import { initializeApp } from "firebase/app";
import { firebaseEnv } from "../env";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Dev/Prod

 const firebaseConfig = {
   apiKey: firebaseEnv.apiKey,
   authDomain: firebaseEnv.authDomain,
   projectId: firebaseEnv.projectId,
   storageBucket: firebaseEnv.storageBucket,
   messagingSenderId: firebaseEnv.messagingSenderId,
   appId: firebaseEnv.appId,
 };

// Testing

// const firebaseConfig = {

//   apiKey: "AIzaSyANNnhVF7Rt47MfpCzQQKpWhPwYfSLyOAg",

//   authDomain: "react-journal-app-3f9e3.firebaseapp.com",

//   projectId: "react-journal-app-3f9e3",

//   storageBucket: "react-journal-app-3f9e3.appspot.com",

//   messagingSenderId: "229729440831",

//   appId: "1:229729440831:web:4d53c6e5c113deb669948a"

// };


export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
