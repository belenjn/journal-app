import { initializeApp } from "firebase/app";
import { firebaseEnv } from "../env";

const firebaseConfig = {
  apiKey: firebaseEnv.apiKey,
  authDomain: firebaseEnv.authDomain,
  projectId: firebaseEnv.projectId,
  storageBucket: firebaseEnv.storageBucket,
  messagingSenderId: firebaseEnv.messagingSenderId,
  appId: firebaseEnv.appId,
};

const app = initializeApp(firebaseConfig);
