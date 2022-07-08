import { useState } from 'react';

import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth } from '../../utils/Firebase/firebase.utils';

import FormInput from '../FormInput/FormInput.component';

import Button from '../Button/Button.component';
import './SignUp.styles.scss';
//create user object
const defaultFormFields = {
  displayName:'',
  email:'',
  password:'',
  confirmPassword:''
} 
//set form object
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email, 
        password,
       );

      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Email already in use')}
      else {
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
  <h2>Don't have an account</h2>
   <span>Sign Up with email and password
     <form onSubmit = {handleSubmit}>
       <FormInput 
       label="Display Name"
       type="text" 
       required onChange={handleChange} 
       name='displayName' 
       value={displayName}/>

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

        <FormInput 
        label="Confirm Password"
        type="password" 
        required onChange={handleChange}
        name='confirmPassword' 
        value={confirmPassword} />
        <Button type='submit'>Sign Up</Button>

     </form>
   </span>
 </div>
    );
};

export default SignUpForm;

