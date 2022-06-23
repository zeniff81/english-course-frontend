import React from 'react'
import logo from '../../logo.jpg'
import "./header.css"

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
    </div>
  )
}

export default Header