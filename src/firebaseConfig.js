import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2XwDZioOA-yJL93adyGbrAC7FYbKtEIQ",
  authDomain: "photo-realistic.firebaseapp.com",
  databaseURL: "https://photo-realistic.firebaseio.com",
  projectId: "photo-realistic",
  storageBucket: "photo-realistic.appspot.com",
  messagingSenderId: "13114259091",
  appId: "1:13114259091:web:8ff829b4f138fb72"
};

firebase.initializeApp(firebaseConfig);
      
export default firebase;