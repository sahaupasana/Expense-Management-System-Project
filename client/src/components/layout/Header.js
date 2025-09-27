import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Header.css'

const Header = () => {

  const [loginUser, setLoginUser] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setLoginUser(user)
    }
  }, [])


  const logoutHandler = () => {
    localStorage.removeItem('user')
    navigate('./login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
         Spenzo Expense Tracker
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item d-flex align-items-center me-2">
              <span className='nav-link'>{loginUser && loginUser.name} </span>
            </li>
            <li className='nav-item'>
              <button className='btn btn-primary' onClick={logoutHandler} >
                Logout
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header