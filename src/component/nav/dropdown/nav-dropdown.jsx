import { Link } from 'react-router-dom'
import logo from '../../../Assets/homepage/cbc_logo.svg'
import logOut from '../../../Assets/homepage/log-out 1.svg'
import './dropdown.scss'

const NavDropdown = () => {
  return (
      <div className='dropdown-container'>
           <img src={logo} alt="logo" />
        <ul>
            <li>
              <Link to={'/'}>COMPANY</Link>
            </li>
            <li>
              <Link to={'/hostels'}>HOSTELS</Link>
            </li>
            <li>
              <Link to={''}>ADMINS</Link>
            </li>
            <li>
              <Link to={'/auth'}>LOGIN</Link>
            </li>
            <li>
              <Link to={''}>CONTACT</Link>
            </li>
            <li>
              <Link to={''}>TERMS</Link>
            </li>
        </ul>
        <a href="#"><img src={logOut} alt="logout-icon"/> LOGOUT</a>
      </div>
  )
}

export default NavDropdown