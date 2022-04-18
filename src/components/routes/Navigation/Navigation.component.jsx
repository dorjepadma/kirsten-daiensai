import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';


const Header = () => {
  return (
    <Fragment>
      <div className="header">  
      <Link className="header" to='home'>
      logo 
      </Link>
      <div className='links-container'> 
      <Link className='nav-link' to='home'> Home</Link>
      <Link className='nav-link' to='prints'>Prints</Link>
      <Link className='nav-link' to='daiensaiPaintings'>Paintings</Link>
      <Link className='nav-link' to='philosophy'>Philosophy</Link>
      <Link className='nav-link' to='serpentPaintings'>Serpents</Link>
      <Link className='nav-link' to='lifestory'>Bio</Link>
       </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Header;


