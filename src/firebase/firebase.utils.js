import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCyTO-Yj3XmKY-Y4tr836HyfGY1gJuyl90",
  authDomain: "geek-commerce.firebaseapp.com",
  databaseURL: "https://geek-commerce.firebaseio.com",
  projectId: "geek-commerce",
  storageBucket: "geek-commerce.appspot.com",
  messagingSenderId: "726221592365",
  appId: "1:726221592365:web:c812af7d351a06c6ca25a4",
  measurementId: "G-LJL3SRH55M"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase