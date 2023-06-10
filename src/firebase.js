import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbqukcq6RE9wx0ABBRBR5qp78dfq_iCIs",
  authDomain: "fir-auth-a0091.firebaseapp.com",
  projectId: "fir-auth-a0091",
  storageBucket: "fir-auth-a0091.appspot.com",
  messagingSenderId: "598576685462",
  appId: "1:598576685462:web:1d7f050cabcd7dd35f7db7",
};

// Check if Firebase app is already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
