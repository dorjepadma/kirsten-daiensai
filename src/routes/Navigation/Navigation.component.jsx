import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import DaiensaiLogo from '../../assets/Images/DaiensaiLogo.png';

import './Navigation.styles.scss';


const Navigation = () => {
  return (
    <>
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
      <Link className='nav-link' to='/Authentication'>Sign In</Link>
       </div>
      </div>
      <Outlet />
    </>
  )
}
export default Navigation;


