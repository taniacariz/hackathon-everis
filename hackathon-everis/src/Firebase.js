import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBksrYHfP4mh5CZ3tQG7uK80U4dEp9SCNQ",
  authDomain: "reactivegirls.firebaseapp.com",
  projectId: "reactivegirls",
  storageBucket: "reactivegirls.appspot.com",
  messagingSenderId: "224207289889",
  appId: "1:224207289889:web:509b66c1fc4689f183ed60",
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
