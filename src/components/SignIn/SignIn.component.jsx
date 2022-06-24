import { useState } from 'react';

import { 
  signInAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth,
  signInWithGooglePopup,
   } from '../../utils/Firebase/firebase.utils';

import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';
import './SignIn.styles.scss';
import { errorPrefix } from '@firebase/util';
//create user object
const defaultFormFields = {
  email:'',
  password:''
} 
//set form object
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      resetForm();
    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Wrong password')
          break;
        case 'auth/user-not-found':
          alert('Email not found')
          break;
          default:
          console.log(error)
      
    
        console.log('user encountered an error', error);
      }
      
    }
  };

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormFields({
    ...formFields,
    [name]: value
  });
}


  return (
 <div className='sign-up-container'>
  <h2>If you have an account</h2>
   <span>Sign In With your Email an Password or Google
     <form onSubmit = {handleSubmit}>
        <FormInput 
        label= 'Email'
        type="email" 
        required onChange={handleChange} 
        name='email'
        value={email}/>

        <FormInput 
        label="Password"
        type="password" 
        required onChange={handleChange} 
        name='password' 
        value={password} />

      <div className='buttonsContainer'>
        <Button type='submit'>Sign In</Button>
        <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
        </Button>
      </div>
     </form>
   </span>
 </div>
    );
};
export default SignInForm;
