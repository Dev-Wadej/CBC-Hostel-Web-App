import logo from '../../../Assets/homepage/cbc logo png 1.png'
import logOut from '../../../Assets/homepage/log-out 1.svg'
import './dropdown.scss'

const NavDropdown = () => {
  return (
    <div className='dropdown-container'>
        <img src={logo} alt="logo" />
        <ul>
            <li><a href="#">COMPANY</a></li>
            <li><a href="#">HOSTELS</a></li>
            <li><a href="#">ADMINS</a></li>
            <li><a href="#">LOGIN</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">TERMS</a></li>
        </ul>
        <a href="#"><img src={logOut} alt="logout-icon"/> LOGOUT</a>
    </div>
  )
}

export default NavDropdown