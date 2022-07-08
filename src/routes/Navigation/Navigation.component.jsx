import React, { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../Context/user.context';
import { signOutUser }  from '../../utils/Firebase/firebase.utils';

import CartIcon from '../../components/CartIcon/CartIcon.component';
import CartDropdown from '../../components/CartDropdown/CartDropdown.component';

import DaiensaiLogo from '../../assets/Images/DaiensaiLogo.png';

import './Navigation.styles.scss';


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <div className="header">  

      <Link className='logo-container' to='/'>
      <div>
      <img className='logo' alt='Daiensai Logo' src={DaiensaiLogo}/>
      </div>
      </Link>
      <div className='nav-links-container'> 
      <Link className='nav-link' to='/home'>Home</Link>
      <Link className='nav-link' to='/prints'>Prints</Link>
      <Link className='nav-link' to='/daiensaiPaintings'>Paintings</Link>
      <Link className='nav-link' to='/philosophy'>Philosophy</Link>
      <Link className='nav-link' to='/serpentPaintings'>Serpent</Link>
      <Link  to="/Shop" className='nav-link'>Buy art</Link>
      {
  currentUser ? (
    <span className='nav-link' onClick={signOutUser}>SIGN OUT </span>
    ) : ( 
    <Link  to="/SignIn" className='nav-link'>SIGN IN</Link>
  )
}
    <CartIcon />
       </div>
       <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation;


