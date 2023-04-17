import { initializeApp } from "firebase/app";
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword , getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD1q__3jZNoz7QnPLNcUo07BDvS5opX9qw",
  authDomain: "oggi-clothing.firebaseapp.com",
  projectId: "oggi-clothing",
  storageBucket: "oggi-clothing.appspot.com",
  messagingSenderId: "344272084215",
  appId: "1:344272084215:web:d48064c4001d64491c87f2",
  measurementId: "G-EJBF427H11"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider)

export const db = getFirestore()

 

export const createUserDocumentFromAuth = async (userAuth,
  additionalInformation = {}) =>{
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid )

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef,{
        displayName,email,createdAt,...additionalInformation
      })
    } catch (error) {
      console.log('error at creating user',error);
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInAuthUserWithEmailAndPassword(auth, email, password)
}