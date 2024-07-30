import { BiUserCircle } from "react-icons/bi"; 
import { RiShieldUserLine } from "react-icons/ri"; 
import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.scss'

const Home = () => {
  return (
    <div className='auth__pageBg'>
      <div className="auth__wrapper auth__wrapperMedia">
        <h1 className='auth__title'>Welcome to EVOS</h1>
        <span className='auth__span'>Please, choose how you want to proceed! </span>
        <div className="auth__part">
          <NavLink to={"/login"} className="auth__user">
              <RiShieldUserLine className="userIcon" />
              <span>Manager</span>
              <small>Manage the cafe</small>
          </NavLink>
          <a href="https://evos.uz/" className="auth__user">
            <BiUserCircle className="userIcon"  />
            <span>User</span>
            <small>Place orders, Eat, Drink, Enjoy in EVOS</small>
          </a>
        </div>
      </div>
      
    </div>

  )
}

export default Home