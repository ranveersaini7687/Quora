import React from 'react'
import {Link} from 'react-router-dom'
import './Header1.css'

function Header1() {
  return (
    <div className="header">
      
      <div className="header_logo">
        <Link to="/"><h2>Quora</h2></Link>
      </div>
      
      <div className="header_nav">

        <div className="header_option">
          <Link to="/signup"><h4>Sign up</h4> </Link>
        </div>
        <div className="header_option">
          <Link to="/signin"><h4>Sign in</h4></Link>
        </div>

      </div>
      
    </div>
  )
}

export default Header1
