import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkX3Z1g0BG28RDsZgPoxO-wcPLBvVB1D0",
  authDomain: "instagram-clone-react-906a3.firebaseapp.com",
  projectId: "instagram-clone-react-906a3",
  storageBucket: "instagram-clone-react-906a3.appspot.com",
  messagingSenderId: "1006869147937",
  appId: "1:1006869147937:web:c635f66ac9165796e64e60",
  measurementId: "G-JRPDB9HR98"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
export const db = firebaseApp.firestore();
