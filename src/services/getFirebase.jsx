import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFkH5h13QmWIKRXZQB5wzyj8hWdvxtWgo",
    authDomain: "bajomundo-8a367.firebaseapp.com",
    projectId: "bajomundo-8a367",
    storageBucket: "bajomundo-8a367.appspot.com",
    messagingSenderId: "636468394675",
    appId: "1:636468394675:web:13b0b39db4f777e2448ec6"
  };
 
const app = firebase.initializeApp(firebaseConfig)

const getFirestore = ()=> firebase.firestore(app)
export default getFirestore