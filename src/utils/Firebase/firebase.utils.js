import { initializeApp } from 'firebase/app';
import { getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHjTTHe2Yc5xG8hN_WTLBQng3foHJMr18",
  authDomain: "daiensai.firebaseapp.com",
  projectId: "daiensai",
  storageBucket: "daiensai.appspot.com",
  messagingSenderId: "786931908502",
  appId: "1:786931908502:web:91928a522952c9be4a27b7",
  measurementId: "G-N7KX6LXRS2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);
export const signInWithFacebookRedirect = () => signInWithRedirect(auth, facebookProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additonalInformation = { displayName: '' }
  ) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

const userSnapshot = await getDoc(userDocRef);

//if user data does not exist, create it
if(!userSnapshot.exists()) {
  const { displayName, email,} = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additonalInformation
    });
  } catch (error) {
    console.log('error creating user', error.message);
  };
  
}
return userDocRef
//return user data
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
 return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
 return await signInWithEmailAndPassword(auth, email, password);
}
