import SignUpForm from '../../Components/SignUp/SignUp.component';
import SignInForm from '../../Components/SignIn/SignIn.component';

import './Authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
