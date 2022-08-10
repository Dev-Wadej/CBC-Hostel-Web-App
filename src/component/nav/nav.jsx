import React from 'react'
import cbcLogo from '../../Assets/cbc logo png 1.png';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import './nav.scss'

const Nav = () => {

  let location = useLocation();
  const pageRoute = location.pathname;


  return (
    <ul className={`header-nav ${pageRoute === '/hostels' ? 'dark-border-lines' : ''}`}>
          <li>
            <Link to='#' className={`nav-links ${pageRoute === '/hostels' ? 'black-nav-links' : ''}`}>
              company
            </Link>
          </li>
          <li>
            <Link to={'/hostels'} href="#" className={`nav-links ${pageRoute === '/hostels' ? 'black-nav-links' : ''}`}>
              hostels
            </Link>
          </li>
          <li>
            <Link to='#' className={`nav-links ${pageRoute === '/hostels' ? 'black-nav-links' : ''}`}>
              admins
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <img src={cbcLogo} alt="" className={`header-img ${pageRoute === '/hostels' ? 'dark-borders' : ''}`}/>
            </Link>
          </li>
          <li>
            <Link to={'/auth'} href="#" className={`nav-links ${pageRoute === '/hostels' ? 'black-nav-links' : ''}`}>
              login
            </Link>
          </li>
          <li>
            <Link to='#' className={`nav-links ${pageRoute === '/hostels' ? 'black-nav-links' : ''}`}>
              contact us
            </Link>
          </li>
          <li>
            <Link to='#' className={`nav-links ${pageRoute === '/hostels' ? 'black-nav-links' : ''}`}>
              t & c
            </Link>
          </li>
    </ul>
  )
}

export default Nav