
import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
 } from "../../../utils/Firebase/firebase.utils";

import './SignIn.styles.scss'

const SignIn = () => {



const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocRef = await createUserDocumentFromAuth(user);
};


  return (
    <div className="signInPage">
      <h1 className="signInTitle">Sign In Page</h1>
      <button className='signInButton'onClick={logGoogleUser}>
        Sign In With Google
      </button>

    </div>
  )
}
export default SignIn;
