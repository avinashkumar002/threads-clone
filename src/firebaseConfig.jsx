// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB6ts0ORF6FiM26a_6b6W5BfOgKtx5yREo",
  authDomain: "threads-clone-f1a70.firebaseapp.com",
  projectId: "threads-clone-f1a70",
  storageBucket: "threads-clone-f1a70.appspot.com",
  messagingSenderId: "109986719862",
  appId: "1:109986719862:web:953f9a70cfad12325c9757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);

export { app ,auth,  database , storage};