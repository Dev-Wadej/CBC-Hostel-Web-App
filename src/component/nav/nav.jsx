import { useState } from 'react';
import cbcLogo from '../../Assets/cbc logo png 1.png';
// import menuIcon from '../../Assets/menu-icon.svg';
import {ReactComponent as MenuIcon} from '../../Assets/homepage/menu-icon.svg';

import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';



import NavDropdown from './dropdown/nav-dropdown';

import './nav.scss';

const Nav = () => {

  const [menuClicked, setMenuClicked] = useState(false);

  let location = useLocation();
  const pageRoute = location.pathname;


  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  }


  return (
    <div className='nav-container'>
      {menuClicked && <NavDropdown />}

      <ul className={`header-nav ${pageRoute === '/hostels' ? 'dark-border-lines' : ''}`}>
        <li>
          <Link to={'/'} className={`nav-links ${pageRoute === '/hostels' ? 'black-nav-links' : 'white-nav-links'}`}>
            company
          </Link>
        </li>
        <li>
          <Link to={'/hostels'} className={`nav-links ${pageRoute === '/hostels' ? 'black-nav-links' : 'white-nav-links'}`}>
            hostels
          </Link>
        </li>
        <li>
          <Link to='#' className={`nav-links ${pageRoute === '/hostels' ? 'black-nav-links' : 'white-nav-links'}`}>
            admins
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <img src={cbcLogo} alt="" className={`header-img ${pageRoute === '/hostels' ? 'dark-borders' : ''}`}/>
          </Link>
        </li>
        <li>
          <Link to={'/auth'} className={`nav-links ${pageRoute === '/hostels' ? 'black-nav-links' : 'white-nav-links'}`}>
            login
          </Link>
        </li>
        <li>
          <Link to='#' className={`nav-links ${pageRoute === '/hostels' ? 'black-nav-links' : 'white-nav-links'}`}>
            contact us
          </Link>
        </li>
        <li>
          <Link to='#' className={`nav-links ${pageRoute === '/hostels' ? 'black-nav-links' : 'white-nav-links'}`}>
            t & c
          </Link>
        </li>
      </ul>

      <div className='phone-nav'>
        <img src={cbcLogo} alt="logo" className="phone-header-img"/>
        <MenuIcon fill={`${menuClicked ? `#26F2D6` : `white`}`} className='menu-icon' onClick={handleMenuClick}/>
      </div>

    </div>
  )
}

export default Nav