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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(); //snapshot allows us to get wether the document exists by the .exist method
  //and also gives us data about the object

  // console.log(snapShot)
  // console.log(snapShot.data())

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(`this is the error message: ${error.message}`);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//------------------PLEASE IGNORE THIS CODE THIS IS STRICTLY FOR TESTING AND UNDERSTANDING FIREBASE---------------------
// firebase.auth()
//   .signInWithPopup(provider)
//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     var credential = result.credential;

//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });
////------------------PLEASE IGNORE THIS CODE THIS IS STRICTLY FOR TESTING AND UNDERSTANDING FIREBASE---------------
