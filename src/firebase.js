import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDizR26ZFcK_vvy1h7BKIrYFq6WuloCyBE",
  authDomain: "instagram-clone-50c76.firebaseapp.com",
  databaseURL: "https://instagram-clone-50c76.firebaseio.com",
  projectId: "instagram-clone-50c76",
  storageBucket: "instagram-clone-50c76.appspot.com",
  messagingSenderId: "935972394708",
  appId: "1:935972394708:web:f3d0f6a4655cacd69fcd41",
  measurementId: "G-HC8ZR2V97Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };


