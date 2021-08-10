import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzNimh7LGiPKBflJxh5DxehUHfsHamxMU",
  authDomain: "musicapp-3de41.firebaseapp.com",
  projectId: "musicapp-3de41",
  storageBucket: "musicapp-3de41.appspot.com",
  messagingSenderId: "526192306884",
  appId: "1:526192306884:web:97297096434518dddf7791",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
