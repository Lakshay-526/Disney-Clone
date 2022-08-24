import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9zqWq6Z0H7lLz-3EqOMeXAwLVcxffx7k",
  authDomain: "clonedisney-9f106.firebaseapp.com",
  projectId: "clonedisney-9f106",
  storageBucket: "clonedisney-9f106.appspot.com",
  messagingSenderId: "686576111501",
  appId: "1:686576111501:web:9f2dbaaac9c18470d5f7c4",
  measurementId: "G-G7G1Y6TLN7"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db ;