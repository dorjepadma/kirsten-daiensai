import SignUpForm from '../../components/SignUp/SignUp.component';
import SignInForm from '../../components/SignIn/SignIn.component';

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
