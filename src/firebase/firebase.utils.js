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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase