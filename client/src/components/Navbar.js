import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {BASE_URL} from '../App'
import UserContext from '../helpers/UserContext';
import '../css/Navbar.css'
const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(UserContext);
  let color;
  let display
  
  !darkMode ? color = 'light' : color ='dark'
  !darkMode ? display = 'Off' : display ='On'
const handleDarkMode = () => {
  !darkMode ? setDarkMode(true) : setDarkMode(false)
}
  return (
    <nav id='Navbar' className={`navbar navbar-expand-md navbar-${color} bg-${color} mb-3`}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <div className="container">
          <Link className="navbar-brand" to="/">Yodlr</Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/admin-login"
                >Admin </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/signup"
                >Signup </Link>
            </li>
            <li className="nav-item active">
              <p onClick={handleDarkMode} className="nav-link" 
                >Dark Mode {display} </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
